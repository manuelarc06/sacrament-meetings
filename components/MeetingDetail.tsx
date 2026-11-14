import type { SacramentMeeting } from '@/lib/types';
import PrintButton from './PrintButton';
import { formatMeetingDate, meetingTypeLabels } from '@/lib/format';

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({
    meeting,
}: MeetingDetailProps) {
    const formattedDate = formatMeetingDate(meeting.date);
    const meetingType = meetingTypeLabels[meeting.meetingType];

    return (
        <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                        {meetingType}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-stone-900">
                        Sacrament Meeting Program
                    </h1>

                    <p className="mt-2 text-stone-500">
                        {formattedDate}
                    </p>
                </div>

                <PrintButton />
            </div>

            <section className="mb-8 grid gap-4 rounded-lg bg-stone-50 p-5 sm:grid-cols-2">
                <p className="text-stone-700">
                    <strong>Presiding:</strong> {meeting.presiding}
                </p>

                <p className="text-stone-700">
                    <strong>Conducting:</strong> {meeting.conducting}
                </p>
            </section>

            <div className="space-y-8">
                {meeting.announcements &&
                    meeting.announcements.length > 0 && (
                        <section>
                            <h2 className="mb-3 text-xl font-bold text-stone-900">
                                Announcements
                            </h2>

                            <ul className="list-disc space-y-2 pl-6 text-stone-700">
                                {meeting.announcements.map((announcement, index) => (
                                    <li key={index}>{announcement}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                <section>
                    <h2 className="text-xl font-bold text-stone-900">
                        Opening Hymn
                    </h2>

                    <p className="mt-2 text-stone-700">
                        Hymn #{meeting.openingHymn.number} –{' '}
                        {meeting.openingHymn.title}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-stone-900">
                        Opening Prayer
                    </h2>

                    <p className="mt-2 text-stone-700">
                        {meeting.openingPrayer}
                    </p>
                </section>

                {meeting.wardBusiness.length > 0 && (
                    <section>
                        <h2 className="mb-3 text-xl font-bold text-stone-900">
                            Ward Business
                        </h2>

                        <ul className="list-disc space-y-2 pl-6 text-stone-700">
                            {meeting.wardBusiness.map((item, index) => (
                                <li key={index}>{item.description}</li>
                            ))}
                        </ul>
                    </section>
                )}

                <section>
                    <h2 className="text-xl font-bold text-stone-900">
                        Stake Business
                    </h2>

                    <p className="mt-2 text-stone-700">
                        {meeting.stakeBusiness ? 'Yes' : 'No'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-stone-900">
                        Sacrament Hymn
                    </h2>

                    <p className="mt-2 text-stone-700">
                        Hymn #{meeting.sacramentHymn.number} –{' '}
                        {meeting.sacramentHymn.title}
                    </p>
                </section>

                {meeting.speakers.length > 0 && (
                    <section>
                        <h2 className="mb-4 text-xl font-bold text-stone-900">
                            Speakers and Musical Numbers
                        </h2>

                        <div className="space-y-4">
                            {meeting.speakers.map((item, index) => (
                                <div
                                    key={`${item.name}-${index}`}
                                    className="rounded-lg border border-stone-200 p-4"
                                >
                                    <p className="font-semibold text-stone-900">
                                        {item.name}
                                    </p>

                                    <p className="text-sm text-amber-700">
                                        {item.type === 'speaker'
                                            ? 'Speaker'
                                            : 'Musical Number'}
                                    </p>

                                    {item.topic && (
                                        <p className="mt-1 text-stone-600">
                                            {item.topic}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <h2 className="text-xl font-bold text-stone-900">
                        Closing Hymn
                    </h2>

                    <p className="mt-2 text-stone-700">
                        Hymn #{meeting.closingHymn.number} –{' '}
                        {meeting.closingHymn.title}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-stone-900">
                        Closing Prayer
                    </h2>

                    <p className="mt-2 text-stone-700">
                        {meeting.closingPrayer}
                    </p>
                </section>
            </div>
        </article>
    );
}
