import { headers } from 'next/headers';

export async function getBaseUrl(): Promise<string> {
    const h = await headers();

    const host =
        h.get('x-forwarded-host') ??
        h.get('host');

    const protocol =
        h.get('x-forwarded-proto') ?? 'http';

    if (!host) {
        throw new Error('Unable to determine application URL.');
    }

    return `${protocol}://${host}`;
}
