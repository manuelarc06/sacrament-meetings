
import type { Metadata } from 'next';
import { Suspense } from 'react';

import MeetingCard from '@/components/MeetingCard';
import MeetingSearch from '@/components/MeetingSearch';
import Pagination from '@/components/Pagination';
import {
    getMeetings,
    getMeetingsTotalPages,
} from '@/lib/meetings-db';

export const metadata: Metadata = {
    title: 'All Meetings | Sacrament Meeting Planner',
    description:
        'Browse current and past sacrament meeting programs, agendas, speakers, and hymns.',
};

async function MeetingsList(props: {
    searchParams?: Promise<{ query?: string; page?: string }>;
}) {
    const searchParams = await props.searchParams;

    const query = searchParams?.query ?? '';
    const currentPage = Math.max(1, Number(searchParams?.page) || 1);

    const [meetings, totalPages] = await Promise.all([
        getMeetings(query, currentPage),
        getMeetingsTotalPages(query),
    ]);

    if (meetings.length === 0) {
        return (
            <p className="text-stone-600">
                No meetings found.
            </p>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {meetings.map((meeting) => (
                    <MeetingCard
                        key={meeting.id}
                        meeting={meeting}
                    />
                ))}
            </div>

            <Pagination totalPages={totalPages} />
        </>
    );
}

export default function MeetingsPage(props: {
    searchParams?: Promise<{ query?: string; page?: string }>;
}) {
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
                    <p className="mb-8 text-stone-600">
                        Loading search...
                    </p>
                }
            >
                <MeetingSearch />
            </Suspense>

            <Suspense
                fallback={
                    <p className="text-stone-600">
                        Loading meetings...
                    </p>
                }
            >
                <MeetingsList searchParams={props.searchParams} />
            </Suspense>
        </div>
    );
}

