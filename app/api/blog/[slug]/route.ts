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

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    await connectDB();

    try {
        // Find and update the blog views
        const blog = await Blog.findOneAndUpdate(
            { slug: params.slug },
            { $inc: { views: 1 } }, // Increment views by 1
            { new: true, lean: true } // Return the updated document
        );

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


export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
    await connectDB();

    try {
        const blogId = params.slug;

        // Parse the request body
        const updatedData: Partial<BlogInterface> = await req.json();

        // Find and update the blog post
        const updatedBlog = await Blog.findOneAndUpdate(
            { slug: blogId }, // Find the blog by slug
            updatedData, // Fields to update
            { new: true, runValidators: true } // Return the updated document and validate
        );

        if (!updatedBlog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(updatedBlog, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
    await connectDB();

    try {
        // Find and update the blog views
        const blog = await Blog.findOneAndDelete({ slug: params.slug });

        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog Deleted Successfully!"}, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}