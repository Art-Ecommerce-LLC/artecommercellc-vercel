import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Assuming you're using Prisma for DB access

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
            select: {
                date: true,
            }
        });

        const availableEvents = events.map((event) => {
            if (event.date > new Date()) {
                return {
                    start: event.date.toISOString(),
                };
            }
            return null; // or you can skip the event by returning null
        }).filter(Boolean); // filter out null values

        return NextResponse.json({ events: availableEvents });
    } catch (error) {
        console.error('Error fetching available events:', error);
        return NextResponse.json({ error: 'Error fetching available events' }, { status: 500 });
    }
}
