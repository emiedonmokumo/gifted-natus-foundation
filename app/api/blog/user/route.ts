import connectDB from "@/config/db"
import Blog from "@/models/Blog"
import getSession from "@/utils/getSession"
import { NextResponse } from "next/server"

export async function GET(request: any) {
    await connectDB()
    const session = await getSession()

    try {
        const blogs = await Blog.find({ user: session?.user.id })

        return NextResponse.json(blogs, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }
}