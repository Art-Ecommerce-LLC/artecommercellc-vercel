import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Assuming you're using Prisma for DB access
import { EventType } from '@/lib/models';

export async function POST() {
    try {
        // Parse the request body (you might want to add validation here)
        const serviceToken = process.env.SERVICE_TOKEN;

        // Fetch available events from the database
        const events = await db.event.findMany({
            where: {
                isBooked: false, // Filter for unbooked events
                serviceToken
            },
            orderBy: {
                date: 'asc' // Order by date in ascending order
            },
            take: 200
        });

        // Parse through available events and format the response
        const availableEvents = events.map((event : EventType) => {
            return {
                id: event.id,
                summary: event.description,
                start: event.date.toISOString(),
            };
        });
        return NextResponse.json({ events: availableEvents });
    } catch (error) {
        console.error('Error fetching available events:', error);
        return NextResponse.json({ error: 'Error fetching available events' }, { status: 500 });
    }
}
