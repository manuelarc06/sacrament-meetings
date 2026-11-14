import { Suspense } from 'react';
import CurrentDate from './CurrentDate';
import NavLinks from './NavLinks';

export default function Header() {
    return (
        <>
            <header className="border-b border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-amber-800">
                            Sacrament Meeting Planner
                        </p>

                        <p className="text-2xl font-bold text-stone-900">
                            Ward Meeting Programs
                        </p>

                        <p className="text-sm text-stone-500">
                            Barbosa Branch
                        </p>
                    </div>

                    <p className="text-sm text-stone-600">
                        <CurrentDate />
                    </p>
                </div>
            </header>

            <Suspense
                fallback={
                    <div
                        className="min-h-12 border-b border-stone-200 bg-stone-50"
                        aria-hidden="true"
                    />
                }
            >
                <NavLinks />
            </Suspense>
        </>
    );
}

