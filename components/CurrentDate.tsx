
'use client';

import { useSyncExternalStore } from 'react';

function subscribe() {
    return () => { };
}

function getSnapshot() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function getServerSnapshot() {
    return '';
}

export default function CurrentDate() {
    const formattedDate = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    return <span>{formattedDate || 'Loading date...'}</span>;
}
