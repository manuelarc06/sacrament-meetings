
'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;

    function createPageURL(page: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set('page', String(page));

        return `${pathname}?${params.toString()}`;
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav
            aria-label="Pagination"
            className="mt-10 flex items-center justify-center gap-6"
        >
            {currentPage > 1 ? (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                >
                    Previous
                </Link>
            ) : (
                <span className="rounded-lg border border-stone-200 px-4 py-2 text-sm text-stone-400">
                    Previous
                </span>
            )}

            <span className="text-sm font-medium text-stone-700">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                >
                    Next
                </Link>
            ) : (
                <span className="rounded-lg border border-stone-200 px-4 py-2 text-sm text-stone-400">
                    Next
                </span>
            )}
        </nav>
    );
}
