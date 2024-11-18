import connectDB from "@/config/db"
import Blog from "@/models/Blog"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        // Find and update the blog views
        const blog = await Blog.findByIdAndUpdate(
            params.id,
            { $inc: { views: 1 } }, // Increment views by 1
            { new: true } // Return the updated document
        );

        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(blog, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}


