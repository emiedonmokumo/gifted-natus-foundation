import { NextResponse } from 'next/server';

export const GET = () => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap`;

    return new NextResponse(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};
