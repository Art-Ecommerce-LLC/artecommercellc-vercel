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

async function addGuestBackground({ googleToken, eventId, guestEmail, description, dateTime }: {
  googleToken: any;
  eventId: any;
  guestEmail: string;
  description: string;
  dateTime: string;
}): Promise<void> {
  try {
    // Decrypt the user's google tokens
    const decryptedGoogleTokens = await decrypt(googleToken);

    oauth2Client.setCredentials({
      access_token: decryptedGoogleTokens.accessToken,
      refresh_token: decryptedGoogleTokens.refreshToken,
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Get the existing event from Google Calendar
    const existingEvent = await calendar.events.get({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId,
    });

    const { start, end } = existingEvent.data;
    if (!start || !end) {
      console.error('Start or end time not found');
      return;
    }

    // Add the guest email to the list of attendees
    const attendees = existingEvent.data.attendees || [];
    attendees.push({ email: guestEmail.toLowerCase() });

    // Update the event with the new attendee
    await calendar.events.patch({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      eventId,
      requestBody: {
        attendees,
        status: 'confirmed',
        start: { dateTime: start.dateTime },
        end: { dateTime: end.dateTime },
        description: description,
      },
      sendUpdates: 'all',
    });

    // Send confirmation email to the guest
    await sendEmail({
      to: guestEmail,
      type: 'bookingConfirmation',
      timeslot: dateTime,
      outlook: true,
    });
  } catch (error) {
    console.error('Error in background tasks:', error);
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
        serviceToken: serviceToken,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid service token' }, { status: 401 });
    }

    // Get the booking with the datetime and see if it is available
    const event = await db.event.findUnique({
      where: {
        date: new Date(utcDateTime),
        isBooked: false,
      },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event is already booked' }, { status: 409 });
    }

    // Update the booking in the database
    await db.event.update({
      where: {
        id: event.id,
      },
      data: {
        guestEmail: guestEmail.toLowerCase(),
        isBooked: true,
        description: description,
      },
    });

    // Fire off background tasks without awaiting them
    addGuestBackground({
      googleToken: user.googleToken,
      eventId: event.googleEventId,
      guestEmail,
      description,
      dateTime,
    });

    // Send a success response immediately
    return NextResponse.json({ message: 'Your event has been booked!' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
