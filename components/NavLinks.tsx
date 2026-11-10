
'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const links = [
    { href: '/', label: 'Home' },
    { href: '/meetings', label: 'All Meetings' },
    { href: '/meetings/current', label: 'Current Sunday' },
];

export default function NavLinks() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const fromCurrent = searchParams.get('from') === 'current';

    return (
        <nav
            aria-label="Main navigation"
            className="border-b border-stone-200 bg-stone-50"
        >
            <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-3">
                {links.map((link) => {
                    let isActive = false;

                    if (link.href === '/') {
                        isActive = pathname === '/';
                    }

                    if (link.href === '/meetings') {
                        isActive =
                            pathname === '/meetings' ||
                            (
                                pathname.startsWith('/meetings/') &&
                                pathname !== '/meetings/current' &&
                                !fromCurrent
                            );
                    }

                    if (link.href === '/meetings/current') {
                        isActive =
                            pathname === '/meetings/current' ||
                            fromCurrent;
                    }

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive ? 'page' : undefined}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isActive
                                    ? 'bg-amber-700 text-white'
                                    : 'text-stone-700 hover:bg-stone-200'
                                }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

