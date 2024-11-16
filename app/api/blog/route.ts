import connectDB from "@/config/db";
import Blog from "@/models/Blog";
import getSession from "@/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
    await connectDB()

    try {
        const blogs = await Blog.find()
        return NextResponse.json(blogs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
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