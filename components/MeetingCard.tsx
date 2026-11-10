import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting, }: MeetingCardProps) {
    const formattedDate = new Date(`${meeting.date}T12:00:00`).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const meetingType = {
        testimony: 'Testimony Meeting',
        regular: 'Regular Meeting',
        stake: 'Stake Meeting',
        general: 'General Meeting',
    }[meeting.meetingType];

    return (
        <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    {meetingType}
                </span>

                <span className="text-sm text-stone-500">
                    #{meeting.id}
                </span>
            </div>

            <h2 className="text-xl font-bold text-stone-900">
                {formattedDate}
            </h2>

            <div className="mt-4 space-y-2 text-sm text-stone-600">
                <p>
                    <strong>Presiding:</strong> {meeting.presiding}
                </p>

                <p>
                    <strong>Conducting:</strong> {meeting.conducting}
                </p>

                <p>
                    <strong>Speakers and musical numbers:</strong>{' '}
                    {meeting.speakers.length}
                </p>
            </div>

            <Link
                href={`/meetings/${meeting.id}`}
                className="mt-6 inline-flex rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
                View Meeting Details →
            </Link>
        </article>
    );
}
