'use client'; // Mark as Client Component

import { SessionProvider } from 'next-auth/react';

export function Session({ children }: { children: any }) {
    return <SessionProvider>{children}</SessionProvider>;
}