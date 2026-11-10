import { Suspense } from 'react';
import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-[60vh] flex-col">
            <Suspense
                fallback={
                    <div
                        className="min-h-12 border-b border-stone-200 bg-stone-50 px-6 py-3"
                        aria-hidden="true"
                    />
                }
            >
                <NavLinks />
            </Suspense>

            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}
