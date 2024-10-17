import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { convertToUTC } from '@/lib/dates';
import db from '@/lib/db';
import { oauth2Client } from '@/lib/oauth_client';
import { google } from 'googleapis';
import { decrypt } from '@/lib/encrypt';
import { sendEmail } from '@/lib/mail';

const schema = z.object({
  dateTime: z.string(),
  timezone: z.string(),
  guestEmail: z.string().email(),
  description: z.string().min(5),
});

async function addGuestBackground({
    googleToken,
    googleEventId,
    guestEmail,
    description,
    dateTime,
}: {
    googleToken: string ;
    googleEventId: string | null;
    guestEmail: string;
    description: string;
    dateTime: string;
}) : Promise<void> {

    try {
        // Decrypt the user's google tokens
        const decryptedGoogleTokens = await decrypt(googleToken);

        oauth2Client.setCredentials({
            access_token: decryptedGoogleTokens.accessToken,
            refresh_token: decryptedGoogleTokens.refreshToken,
        });

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        if (!googleEventId) {
            throw new Error('Event ID not found');
        }

        // Add the guest email to the event
        const existingEvent = await calendar.events.get({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            eventId: googleEventId,
        });

        // Get the start and end times from the existing event
        const { start, end } = existingEvent.data;

        if (!start || !end) {
            throw new Error('Failed to get event start and end times');
        }

        // Extract and add timezone to start and end times
        const updatedStart = {
            dateTime: start.dateTime, // Use the existing event's start time
        };

        const updatedEnd = {
            dateTime: end.dateTime, // Use the existing event's end time
        };
            
        const attendees = existingEvent.data.attendees || [];
        attendees.push({ email: guestEmail });

        // Update the event with the new attendee
        await calendar.events.patch({
            calendarId: process.env.GOOGLE_CALENDAR_ID,
            eventId : googleEventId,
            requestBody: {
                attendees,
                status: 'confirmed', // Optionally mark as confirmed
                start: updatedStart, // Include start with timezone
                end: updatedEnd, // Include end with timezone
                description: description
            },
            sendUpdates: 'all'
        });

        // Send a confirmation email to the guest
        sendEmail({
            to: guestEmail,
            type: 'bookingConfirmation',
            timeslot: dateTime,
            outlook: true,
        });
    } catch (error) {
        throw new Error('Failed to add guest to event');
    }

}

export async function POST(request: NextRequest) {
  try {
    // Parse request body and validate schema
    const body = await request.json();
    const { dateTime, timezone, guestEmail, description } = schema.parse(body);

    const utcDateTime = convertToUTC(dateTime, timezone);

    const serviceToken = process.env.SERVICE_TOKEN;
    if (!serviceToken) {
      return NextResponse.json({ error: 'Service token not found' }, { status: 500 });
    }

    const user = await db.user.findUnique({
      where: {
          serviceToken: serviceToken
      }
    })

    if (!user) {
        return NextResponse.json({error:"Invalid service token"}, {status:401})
    }

    // Get the booking with the datetime and see if it is available
    const event = await db.event.findUnique({
        where: {
            date: new Date(utcDateTime),
            isBooked: false
        }
    })

    // Update the booking with the guest email
    if (!event) {
        return NextResponse.json({error:"Event is already booked"}, {status:409})
    }

    await db.event.update({
        where: {
            id: event.id
        },
        data: {
            guestEmail: guestEmail.toLowerCase(),
            isBooked: true,
            description: description
        }
    })

    // Update the booking with the guest email with gapi
    if (!event) {
        return NextResponse.json({error:"Event is already booked"}, {status:409})
    }

    if (!user.googleToken) {
        return NextResponse.json({error:"User not found"}, {status:404})
    }
    
    
    addGuestBackground({
        googleToken: user.googleToken,
        googleEventId: event.googleEventId,
        guestEmail: guestEmail.toLowerCase(),
        description,
        dateTime,
    });

    return NextResponse.json({ message: 'Your event has been booked!' });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

