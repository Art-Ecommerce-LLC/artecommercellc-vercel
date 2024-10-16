import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { convertToUTC } from '@/lib/dates';

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
