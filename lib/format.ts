
import type { MeetingType } from './types';

export const meetingTypeLabels: Record<MeetingType, string> = {
    testimony: 'Testimony Meeting',
    regular: 'Regular Meeting',
    stake: 'Stake Meeting',
    general: 'General Meeting',
    special: 'Special Meeting',
};

export function formatMeetingDate(date: string): string {
    return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
