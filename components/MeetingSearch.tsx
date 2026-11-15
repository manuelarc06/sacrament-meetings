
'use client';

import {
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

export default function MeetingSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set('page', '1');

        if (term.trim()) {
            params.set('query', term.trim());
        } else {
            params.delete('query');
        }

        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="mb-8">
            <label
                htmlFor="meeting-search"
                className="mb-2 block text-sm font-medium text-stone-700"
            >
                Search meetings
            </label>

            <input
                id="meeting-search"
                type="search"
                placeholder="Search by speaker, leader, or meeting type..."
                defaultValue={searchParams.get('query') ?? ''}
                onChange={(event) => handleSearch(event.target.value)}
                aria-label="Search meetings"
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
            />
        </div>
    );
}
