export default function MeetingsLoading() {
    return (
        <div
            className="mx-auto max-w-6xl px-6 py-16"
            role="status"
            aria-live="polite"
        >
            <div className="animate-pulse">
                <div className="mb-4 h-8 w-64 rounded bg-stone-200" />

                <div className="mb-8 h-4 w-80 rounded bg-stone-200" />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="h-56 rounded-xl bg-stone-200"
                        />
                    ))}
                </div>
            </div>

            <span className="sr-only">
                Loading meetings...
            </span>
        </div>
    );
}
