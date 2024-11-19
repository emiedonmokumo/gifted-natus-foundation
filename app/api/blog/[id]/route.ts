import connectDB from "@/config/db";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

interface BlogInterface {
    _id: string;
    user: string;
    img: string;
    views: number;
    title: string;
    description: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    __v: number;
    content?: string; // Optional since we'll omit it
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await connectDB();

    try {
        // Find and update the blog views
        const blog = await Blog.findByIdAndUpdate(
            params.id,
            { $inc: { views: 1 } }, // Increment views by 1
            { new: true } // Return the updated document
        ).lean<BlogInterface>();

        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        // Remove the `content` field and any other fields you want to omit
        const { user, ...blogWithoutContent } = blog;

        return NextResponse.json(blogWithoutContent, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
