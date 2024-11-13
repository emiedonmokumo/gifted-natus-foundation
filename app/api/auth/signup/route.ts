import connectDB from "@/config/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
    try {
        const { bio, credentials } = await req.json();

        await connectDB();

        credentials.password = await bcrypt.hash(credentials.password, 10);

        // Create a new user with the verification code included
        await User.create({
            bio,
            credentials
        });

        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}