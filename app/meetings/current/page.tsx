
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

import { getMeetings } from '@/lib/meetings-db';

// Allow the route to resolve its dynamic data before responding.
export const instant = false;

export default async function CurrentMeetingPage() {
    // Wait for an incoming request before reading the current date.
    await connection();

    const now = new Date();

    const colombiaDate = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).formatToParts(now);

    const year = Number(
        colombiaDate.find((part) => part.type === 'year')?.value
    );

    const month = Number(
        colombiaDate.find((part) => part.type === 'month')?.value
    );

    const day = Number(
        colombiaDate.find((part) => part.type === 'day')?.value
    );

    const today = new Date(Date.UTC(year, month - 1, day));
    const dayOfWeek = today.getUTCDay();

    today.setUTCDate(today.getUTCDate() - dayOfWeek);

    const sundayDate = [
        today.getUTCFullYear(),
        String(today.getUTCMonth() + 1).padStart(2, '0'),
        String(today.getUTCDate()).padStart(2, '0'),
    ].join('-');

    const meetings = getMeetings(sundayDate);

    if (meetings.length === 0) {
        redirect('/meetings');
    }

    redirect(`/meetings/${meetings[0].id}?from=current`);
}


