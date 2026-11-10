import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { connection } from 'next/server';

import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
    params: Promise<{ id: string }>;
}

async function MeetingContent({
    params,
}: MeetingPageProps) {
    await connection();

    const { id } = await params;

    const meetingId = Number(id);

    if (!Number.isInteger(meetingId) || meetingId <= 0) {
        notFound();
    }

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
        `${protocol}://${host}/api/meetings/${meetingId}`,
        {
            cache: 'no-store',
        }
    );

    if (response.status === 404 || response.status === 400) {
        notFound();
    }

    if (!response.ok) {
        throw new Error('Unable to load meeting details.');
    }

    const meeting: SacramentMeeting = await response.json();

    return <MeetingDetail meeting={meeting} />;
}

export default function MeetingPage({
    params,
}: MeetingPageProps) {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12">
            <Suspense
                fallback={
                    <p className="text-stone-600">
                        Loading meeting details...
                    </p>
                }
            >
                <MeetingContent params={params} />
            </Suspense>
        </div>
    );
}

