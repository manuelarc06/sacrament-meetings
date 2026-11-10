
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { connection } from 'next/server';
import { headers } from 'next/headers';

import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

export const metadata: Metadata = {
    title: 'All Meetings | Sacrament Meeting Planner',
    description:
        'Browse current and past sacrament meeting programs, agendas, speakers, and hymns.',
};

async function MeetingsList() {
    await connection();

    const headersList = await headers();

    const host =
        headersList.get('x-forwarded-host') ??
        headersList.get('host');

    const protocol =
        headersList.get('x-forwarded-proto') ?? 'http';

    if (!host) {
        throw new Error('Unable to determine application URL.');
    }

    const response = await fetch(
        `${protocol}://${host}/api/meetings`,
        {
            cache: 'no-store',
        }
    );

    if (!response.ok) {
        throw new Error('Unable to load meetings.');
    }

    const meetings: SacramentMeeting[] = await response.json();

    if (meetings.length === 0) {
        return (
            <p className="text-stone-600">
                No meetings found.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {meetings.map((meeting) => (
                <MeetingCard
                    key={meeting.id}
                    meeting={meeting}
                />
            ))}
        </div>
    );
}

export default function MeetingsPage() {
    return (
        <div className="mx-auto min-h-[60vh] w-full max-w-6xl px-6 py-12">
            <header className="mb-10">
                <p className="font-semibold uppercase tracking-widest text-amber-700">
                    Meeting Records
                </p>

                <h1 className="mt-2 text-3xl font-bold text-stone-900">
                    All Sacrament Meetings
                </h1>

                <p className="mt-3 text-stone-600">
                    Browse current and past meeting programs.
                </p>
            </header>

            <Suspense
                fallback={
                    <p
                        className="text-stone-600"
                        role="status"
                    >
                        Loading meetings...
                    </p>
                }
            >
                <MeetingsList />
            </Suspense>
        </div>
    );
}

