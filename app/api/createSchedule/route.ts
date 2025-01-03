import { NextResponse, NextRequest} from 'next/server';
import db from '@/lib/db';
// zod schema
import { z } from 'zod';
import { decrypt } from '@/lib/encrypt';
import { google } from 'googleapis';
import { addDays, addMinutes} from 'date-fns';
import { oauth2Client } from '@/lib/oauth_client';
import { cookies } from 'next/headers';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  startDatetime: z.string().min(1, 'Start date is required'),
  endDatetime: z.string().min(1, 'End date is required'),
  appointmentLength: z.string().min(1, 'Appointment length is required'),
  blockDays: z.array(z.string()).optional(),
})

export async function POST(request: NextRequest) {
  try {
  const body = await request.json(); 
  const { 
    title, 
    description, 
    startDatetime,
    endDatetime,
    appointmentLength,
    blockDays
  } = schema.parse(body);
  

  // Get the users session and check if they are authenticated

  const session = cookies().get('session');

  if (!session) {
    return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
  }

  // decrypt the session
  const decryptedSession = await decrypt(session.value);



  // Get the user from the database
  const user = await db.user.findUnique({
    where: { 
      id: decryptedSession.userId
    },
    select: { googleToken: true },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (!user.googleToken) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }


  const decryptedGoogleTokens = await decrypt(user.googleToken);


  oauth2Client.setCredentials({
    access_token: decryptedGoogleTokens.accessToken,
    refresh_token: decryptedGoogleTokens.refreshToken,
  });


  let startIndex = new Date(startDatetime);
  const endTime = new Date(endDatetime);
  const startTime = new Date(startDatetime);
  let endIndex = new Date(startDatetime);
  endIndex.setHours(endTime.getHours());
  endIndex.setMinutes(endTime.getMinutes());
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  while (startIndex < endTime) {

    const currentDay = new Intl.DateTimeFormat("en-US", {
      weekday: "long"
    }).format(startIndex).toLowerCase();

    if (blockDays && blockDays.includes(currentDay)) {
      startIndex = addDays(startIndex, 1);
      startIndex.setHours(startTime.getHours());
      startIndex.setMinutes(startTime.getMinutes());
      endIndex = new Date(startIndex);
      endIndex.setHours(endTime.getHours());
      endIndex.setMinutes(endTime.getMinutes());
      continue;
    }

    const end = addMinutes(startIndex, Number(appointmentLength));


    // Create the event in Google Calendar

    const eventRequest = {
        calendarId: process.env.GOOGLE_CALENDAR_ID!,
        resource: {
          summary: title,
          description,
          start: {
            dateTime: startIndex.toISOString(),
          },
          end: {
            dateTime: end.toISOString(),
          },
          conferenceData: {
            createRequest: {
              requestId: `meet-${Date.now()}`, // Unique ID for the request
              conferenceSolutionKey: {
                type: 'hangoutsMeet', // This specifies that it's a Google Meet event
              },
            },
          },
        },
        conferenceDataVersion: 1, // Enable conference data for Google Meet
      };
      console.log(eventRequest);
      const newGoogleEvent = await calendar.events.insert(eventRequest);

      console.log(process.env.SERVICE_TOKEN!);
      await db.event.create({
        data: {
          title,
          description,
          date: startIndex.toISOString(),
          serviceToken: process.env.SERVICE_TOKEN!,
          googleEventId: newGoogleEvent.data.id
        },
      });

    startIndex = end;

    if (startIndex >= endIndex) {
      startIndex = addDays(startIndex, 1);
      startIndex.setHours(startTime.getHours());
      startIndex.setMinutes(startTime.getMinutes());
      endIndex = new Date(startIndex);
      endIndex.setHours(endTime.getHours());
      endIndex.setMinutes(endTime.getMinutes());
    }
  }

 
  return NextResponse.json({ message: 'Event created' }, { status: 201 });
} catch (error) {
    console.log(error);
  return NextResponse.json({ error: 'Error creating event' }, { status: 500 });
}
}