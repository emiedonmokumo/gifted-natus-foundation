import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/db";
import Blog from "@/models/Blog";
import getSession from "@/utils/getSession";
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

export async function GET(request: Request) {
    await connectDB();

    try {
        // Fetch all blog posts as plain objects
        const blogs = await Blog.find().lean<BlogInterface[]>();

        // Remove the `content` field from each blog
        const blogsWithoutContent = blogs.map(({ content, slug, user, ...rest }) => rest);

        return NextResponse.json(blogsWithoutContent, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {
    await connectDB()
    const session = await getSession()

    const formData = await req.formData(); // Parse multipart form data

    const img = formData.get('img') as File;
    const content = formData.get('content');
    const title = formData.get('title')
    const metaDescription = formData.get('metaDescription')
    const metaTitle = formData.get('metaTitle')
    const description = formData.get('description');
    const tags = formData.get('tags');

    if (!img) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (!title || !content || !description || !tags || !metaDescription || !metaTitle) return NextResponse.json({ message: 'All fields are required!' }, { status: 400 })


    // Convert the file to Base64
    const arrayBuffer = await img.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));
    const imageBase64 = buffer.toString('base64');

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`, {
      folder: 'Gifted Natus Foundation',
    });


    try {
        await Blog.create({
            user: session?.user.id,
            title,
            content,
            description,
            tags,
            metaDescription,
            metaTitle,
            img: result.secure_url
        })

        return NextResponse.json({ message: 'Blog Post created successfully!' }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }

}