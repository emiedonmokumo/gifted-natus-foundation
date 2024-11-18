import connectDB from "@/config/db"
import Blog from "@/models/Blog"
import getSession from "@/utils/getSession"
import { NextResponse } from "next/server"

export async function GET(request: any) {
    await connectDB()
    const session = await getSession()

    try {
        const blogs = await Blog.find({ user: session?.user.id })

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


        return NextResponse.json(blogsWithImages, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }
}