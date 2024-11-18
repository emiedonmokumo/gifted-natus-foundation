import connectDB from "@/config/db";
import Newsletter from "@/models/Newsletter";
import getSession from "@/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB()

    const { email } = await req.json()
    if (!email) return NextResponse.json({ message: 'Email is required' }, { status: 400 })

    try {
        const emailExist = await Newsletter.findOne({ email })
        if(emailExist) return NextResponse.json({ message: 'Email already exist' }, { status: 400 })

        await Newsletter.create({ email })
        return NextResponse.json({ message: 'Subscription successful' }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 400 })
    }
}

export async function GET(req: NextRequest) {
    await connectDB()
    const session = await getSession()
    if (!session || session.user.role !== "Admin") return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

    try {
        const newsletter = await Newsletter.find()
        return NextResponse.json(newsletter, { status: 200 })
    } catch (error) {
        console.log(error)
    }
}