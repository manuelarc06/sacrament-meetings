import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-widest text-amber-700">
            Welcome
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
            Sacrament Meeting Planner
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            A simple place to organize Sunday meetings,
            review weekly programs, and keep track of
            announcements, hymns, prayers, and speakers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/meetings"
              className="rounded-lg bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
            >
              View All Meetings
            </Link>

            <Link
              href="/meetings/current"
              className="rounded-lg border border-stone-300 px-6 py-3 font-semibold text-stone-700 hover:bg-stone-100"
            >
              Current Sunday
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/meeting-hero.jpg"
            alt="Peaceful landscape representing reflection and worship"
            width={1200}
            height={800}
            priority
            className="h-80 w-full object-cover"
          />

        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold">Plan Meetings</h2>
          <p className="mt-2 text-sm text-stone-600">
            Organize hymns, prayers, announcements, and speakers.
          </p>
        </article>

        <article className="rounded-xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold">Review Programs</h2>
          <p className="mt-2 text-sm text-stone-600">
            Browse current and past Sunday meeting programs.
          </p>
        </article>

        <article className="rounded-xl border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold">Print Programs</h2>
          <p className="mt-2 text-sm text-stone-600">
            Print meeting details for members and leaders.
          </p>
        </article>
      </section>
    </div>
  );
}

