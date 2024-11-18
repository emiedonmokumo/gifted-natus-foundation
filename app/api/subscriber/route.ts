import connectDB from "@/config/db";
import Subscriber from "@/models/Subscriber";
import getSession from "@/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB()
    const session = await getSession()
    if (!session || !session.user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

    const { email } = await req.json()
    if (!email) return NextResponse.json({ message: 'Email is required' }, { status: 400 })

    try {
        await Subscriber.create({
            email,
            user: session?.user.id
        })
        return NextResponse.json({ message: 'Subscription successful' }, { status: 201 })
    } catch (error) {
        console.log(error)
    }
}

export async function GET(req: NextRequest) {
    await connectDB()
    const session = await getSession()
    if (!session || !session.user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

    try {
        const subscribers = await Subscriber.find({ user: session?.user.id })
        return NextResponse.json(subscribers, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })

    }
}