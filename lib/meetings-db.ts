import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-11-08',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        announcements: ['Ward temple night: November 15', 'Youth activity: November 12'],
        openingHymn: {number: 2, title: 'The Spirit of God'},
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary president' }],
        stakeBusiness: false,
        sacramentHymn: {number: 169, title: 'As Now We Take the Sacrament'},
        speakers: [
            {
                name: 'Sister Brown',
                topic: 'Faith in Jesus Christ',
                type: 'speaker',
            },
            {
                name: 'Youth Choir',
                topic: 'I Am a Child of God',
                type: 'musical-number',
            },
            {
                name: 'Brother Davis',
                topic: 'Following the Savior',
                type: 'speaker',
            },
        ],
        closingHymn: {number: 31, title: 'O God, Our Help in Ages Past'},
        closingPrayer: 'Brother Davis',
    },
    {
        id: 2,
        date: '2026-11-01',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Brother Clark',
        announcements: ['Ward service project next Saturday'],
        openingHymn: {number: 19, title: 'We Thank Thee, O God, for a Prophet'},
        openingPrayer: 'Sister Johnson',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: {number: 181, title: 'Jesus of Nazareth, Savior and King'},
        speakers: [
            {
                name: 'Ward Members',
                topic: 'Personal Testimonies',
                type: 'speaker',
            },
        ],
        closingHymn: {number: 85, title: 'How Firm a Foundation'},
        closingPrayer: 'Brother Miller',
    },
    {
        id: 3,
        date: '2026-10-18',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        announcements: ['Primary program rehearsal'],
        openingHymn: {number: 3, title: 'Now Let Us Rejoice'},
        openingPrayer: 'Brother Wilson',
        wardBusiness: [{ description: 'Welcome new ward members' }],
        stakeBusiness: true,
        sacramentHymn: {number: 175, title: 'O God, the Eternal Father'},
        speakers: [
            {
                name: 'Sister Green',
                topic: 'The Power of Prayer',
                type: 'speaker',
            },
            {
                name: 'Brother White',
                topic: 'Serving Others',
                type: 'speaker',
            },
        ],
        closingHymn: {number: 85, title: 'How Firm a Foundation'},
        closingPrayer: 'Sister Adams',
    },
    {
        id: 4,
        date: '2026-10-11',
        meetingType: 'stake',
        presiding: 'Stake President Brown',
        conducting: 'Brother Thomas',
        announcements: [],
        openingHymn: {number: 27, title: 'Praise to the Man'},
        openingPrayer: 'Brother Lewis',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: {number: 193, title: 'I Stand All Amazed'},
        speakers: [
            {
                name: 'Stake President Brown',
                topic: 'Strengthening Our Faith',
                type: 'speaker',
            },
        ],
        closingHymn: {number: 134, title: 'I Believe in Christ'},
        closingPrayer: 'Sister Taylor',
    },
    {
        id: 5,
        date: '2026-10-04',
        meetingType: 'general',
        presiding: 'Elder Anderson',
        conducting: 'Brother Thomas',
        announcements: ['Stake conference information'],
        openingHymn: {number: 1, title: 'The Morning Breaks'},
        openingPrayer: 'Sister Wilson',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: {number: 193, title: 'I Stand All Amazed'},
        speakers: [
            {
                name: 'Elder Anderson',
                topic: 'The Gospel of Jesus Christ',
                type: 'speaker',
            },
            {
                name: 'Stake Choir',
                topic: 'Come, Follow Me',
                type: 'musical-number',
            },
        ],
        closingHymn: {number: 134, title: 'I Believe in Christ'},
        closingPrayer: 'Brother Thomas',
    },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) {
        return meetings.filter((meeting) => meeting.date === date);
    }

    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find((meeting) => meeting.id === id) ?? null;
}
