import connectDB from "@/config/db"
import Blog from "@/models/Blog"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB()

    try {
        const blog = await Blog.findById(params.id)
        if(!blog) return NextResponse.json({ message: 'Blog not found'}, { status: 404 })
        return NextResponse.json(blog, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

