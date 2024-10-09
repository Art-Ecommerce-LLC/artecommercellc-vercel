import { NextRequest, NextResponse } from 'next/server';

const SERVICE_TOKEN = process.env.AUTH_SERVICE_TOKEN;
const AUTH_URL = process.env.AUTH_URL;

export async function POST() {
    try {
        // Make POST request to the external service to grab events, sending the SERVICE_TOKEN
        const response = await fetch(`${AUTH_URL}/api/getEvents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ serviceToken: SERVICE_TOKEN }),
        });
        
        // Check if the response was successful
        if (!response.ok) {
            console.error('Error fetching events from external API:', response.statusText);
            return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
        }

        // Parse the response
        const responseData = await response.json();

        // Check if the response contains events data
        if (!responseData.events || responseData.events.length === 0) {
            return NextResponse.json({ message: 'No available events found' }, { status: 200 });
        }

        // Return the available events
        return NextResponse.json({ events: responseData.events }, { status: 200 });

    } catch (error) {
        console.error('Error in getEvents API:', error);
        return NextResponse.json({ error: 'An error occurred while fetching events' }, { status: 500 });
    }
}
