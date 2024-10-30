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
                serviceToken,
                date: {
                    gt: new Date(), // Filter for future events
                },
            },
            select: {
                date: true,
                id: true,
            }
        });

        return NextResponse.json({ events }, { status: 200 });
    } catch (error) {
        console.error('Error fetching available events:', error);
        return NextResponse.json({ error: 'Error fetching available events' }, { status: 500 });
    }
}
