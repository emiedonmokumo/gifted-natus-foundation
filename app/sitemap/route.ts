import connectDB from '@/config/db';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    await connectDB();

    const blogs = await Blog.find({}).select('slug updatedAt').exec();
    const blogUrls = blogs.map(
        (blog) => `
          <url>
            <loc>${baseUrl}/blog/${blog.slug}</loc>
            <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
            <priority>0.7</priority>
          </url>
        `
    );
    
    // Example URLs
    const urls = [
        `${baseUrl}/`,
        `${baseUrl}/about`,
    ];


    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
            .map(
                (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.8</priority>
        </url>
      `
            )
            .join('')}
        ${blogUrls.join('')}
    </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
};
