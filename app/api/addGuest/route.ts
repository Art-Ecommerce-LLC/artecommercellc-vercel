import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { convertToUTC } from '@/lib/dates';
import db from '@/lib/db';
import { addGuestBackground } from '@/lib/background';

const schema = z.object({
  dateTime: z.string(),
  timezone: z.string(),
  guestEmail: z.string().email(),
  description: z.string().min(5),
});

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
    
    
    // addGuestBackground({
    //     googleToken: user.googleToken,
    //     googleEventId: event.googleEventId,
    //     guestEmail: guestEmail.toLowerCase(),
    //     description,
    //     dateTime,
    // }).catch(err => {
    //     console.error('Failed to add guest or send confirmation email:', err);
    // });

    fetch (`${process.env.CRON_URL}/api/schedule-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            googleToken: user.googleToken,
            googleEventId: event.googleEventId,
            guestEmail: guestEmail.toLowerCase(),
            description,
            dateTime,
            serviceToken
        }),
    }).then(() => {
      console.log('Background task triggered');
    })
    return NextResponse.json({ message: 'Your event has been booked!' });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

