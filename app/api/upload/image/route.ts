// app/api/upload/image/route.ts
import { NextResponse } from 'next/server';
import cloudinary from '@/config/cloudinary'; // Assuming cloudinary configuration is correct

export async function POST(req: Request) {
  try {
    const formData = await req.formData(); // Parse multipart form data
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Convert the file to Base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));
    const imageBase64 = buffer.toString('base64');

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`, {
      folder: 'Gifted Natus Foundation',
    });

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Upload failed:', error);
    return NextResponse.json({ error: 'Image upload failed' }, { status: 500 });
  }
}
