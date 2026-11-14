'use client';

export default function PrintButton() {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg bg-amber-700 px-5 py-3 font-semibold text-white hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 print:hidden"
        >
            Print Program
        </button>
    );
}