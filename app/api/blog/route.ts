import connectDB from "@/config/db";
import Blog from "@/models/Blog";
import getSession from "@/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
    await connectDB();

    try {
        // Fetch all blog posts
        const blogs = await Blog.find();

        // Map through the blogs and add the first image URL (if any)
        const blogsWithImages = blogs.map((blog: any) => {
            // Extract the first image URL from the content
            const imgMatch = blog.content.match(/<img [^>]*src="([^"]*)"/);
            const imgUrl = imgMatch ? imgMatch[1] : null;

            // Add the image URL to the blog object
            return {
                ...blog.toObject(),
                img: imgUrl
            };
        });

        return NextResponse.json(blogsWithImages, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {
    await connectDB()
    const session = await getSession()

    const { title, content, description, tags, metaDescription, metaTitle } = await req.json()

    if (!title || !content || !description || !tags || !metaDescription || !metaTitle) return NextResponse.json({ message: 'All fields are required!' }, { status: 400 })

    try {
        await Blog.create({
            user: session?.user.id,
            title,
            content,
            description,
            tags,
            metaDescription,
            metaTitle
        })

        return NextResponse.json({ message: 'Blog Post created successfully!' }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }

}