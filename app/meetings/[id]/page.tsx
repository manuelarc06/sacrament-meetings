
import { notFound } from 'next/navigation';
import { getBaseUrl } from '@/lib/get-base-url';

import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
    params: Promise<{ id: string }>;
}

// Allow this route to resolve its dynamic data before responding.
export const instant = false;

export default async function MeetingPage({
    params,
}: MeetingPageProps) {
    const { id } = await params;
    const meetingId = Number(id);

    if (!Number.isInteger(meetingId) || meetingId <= 0) {
        notFound();
    }

    const response = await fetch(
        `${await getBaseUrl()}/api/meetings/${meetingId}`,
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

    return (
        <div className="mx-auto max-w-4xl px-6 py-12">
            <MeetingDetail meeting={meeting} />
        </div>
    );
}

