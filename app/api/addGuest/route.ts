import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  dateTime: z.string(),
  timezone: z.string(),
  guestEmail: z.string().email(),
  description: z.string().min(5),
});

// Function to convert the date string to UTC ISO format
function convertToUTC(dateTimeStr: string, timezone: string): string {
    // Example input format: "10/8/2024 - 01:03 PM PDT"
    const [datePart, timePart] = dateTimeStr.split(" - ");
    
    // Parse the date and time parts using the Date constructor, assuming the input is in the local time zone.
    const localDate = new Date(`${datePart} ${timePart}`);
  
    // Convert the local date to UTC format using toISOString()
    const utcDate = new Date(localDate.toLocaleString("en-US", { timeZone: timezone }));
  
    // Return the UTC date in ISO string format
    return utcDate.toISOString();
  }

export async function POST(request: NextRequest) {
  try {
    // Parse request body and validate schema
    const body = await request.json();
    const { dateTime, timezone, guestEmail, description } = schema.parse(body);
    const utcDateTime = convertToUTC(dateTime, timezone);
    // Get the service token from environment variables
    const serviceToken = process.env.SERVICE_TOKEN;
    if (!serviceToken) {
      return NextResponse.json({ error: 'Service token not found' }, { status: 500 });
    }

    // Prepare the request payload for the external API
    const payload = {
      dateTime: utcDateTime,
      timezone,
      guestEmail,
      description,
      serviceToken, // Pass the service token here
    };
    // Send the POST request to your other API (e.g., /api/bookAppointment)
    const externalApiResponse = await fetch(`${process.env.AUTH_URL}/api/createMeeting`, {
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
