import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { toZonedTime } from 'date-fns-tz';

const schema = z.object({
  dateTime: z.string(),
  timezone: z.string(),
  guestEmail: z.string().email(),
  description: z.string().min(5),
});


function convertToUTC(dateTimeStr: string, timezone: string): Date {
  // Example input format: "10/8/2024 - 01:03 PM PDT"
  console.log('dateTimeStr:', dateTimeStr);
  console.log('timezone:', timezone);
  const [date, time] = dateTimeStr.split(' - ');
  const [timeValue, meridiem, timeAbbreviation] = time.split(' ');

  if (!date || !timeValue || !meridiem || !timeAbbreviation) {
    throw new Error('Invalid date/time format');
  }
  // Check if the meridiem is AM or PM
  const isPM = meridiem === 'PM';

  // if the meridiem is pm then add 12 hours to the time value
  const [hours, minutes] = timeValue.split(':').map(Number);
  console.log(isPM, hours)
  let hours24 = hours;
  if (isPM && hours !== 12) {
    hours24 = hours + 12;
  } else if (!isPM && hours === 12) {
    hours24 = 0;
  }

  // Put the date and time together in the format "YYYY-MM-DDTHH:MM:SS"
  const [month, day, year] = date.split('/');
  const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const formattedTime = `${String(hours24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  const dateTime = `${formattedDate}T${formattedTime}`;

  // use date-fns-tz to convert the date/time to UTC
  const zonedDate = toZonedTime(dateTime, timezone);
  return zonedDate;
}


export async function POST(request: NextRequest) {
  try {
    // Parse request body and validate schema
    const body = await request.json();
    const { dateTime, timezone, guestEmail, description } = schema.parse(body);
    console.log('timezone:', timezone);
    const utcDateTime = convertToUTC(dateTime, timezone);
    console.log('utcDateTime:', utcDateTime);
    const serviceToken = process.env.SERVICE_TOKEN;
    if (!serviceToken) {
      return NextResponse.json({ error: 'Service token not found' }, { status: 500 });
    }

    // Prepare the request payload for the external API
    const payload = {
      dateTime: utcDateTime,
      guestEmail: guestEmail.toLowerCase(),
      description,
      serviceToken, // Pass the service token here
    };
    // Send the POST request to your other API (e.g., /api/bookAppointment)
    let apiUrl : string;
    if (process.env.NODE_ENV === "production") {
        apiUrl = process.env.AUTH_URL!
    } else {
        apiUrl = "http://localhost:3000"
    }

    const externalApiResponse = await fetch(`${apiUrl}/api/createMeeting`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Parse the response from the external API
    const responseData = await externalApiResponse.json();

    
    if (!externalApiResponse.ok) {
      return NextResponse.json({ error: responseData.error || 'Error booking appointment' }, { status: externalApiResponse.status });
    }

    // Return a success response to the client
    return NextResponse.json({ message: 'Your event has been booked!' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
