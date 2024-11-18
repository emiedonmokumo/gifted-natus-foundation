import connectDB from "@/config/db";
import Volunteer from "@/models/Volunteer";
import getSession from "@/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB()

    const { email, phone, firstName, lastName, address } = await req.json()
    if (!email || !phone || !firstName || !lastName || !address) return NextResponse.json({ message: 'All fields are required' }, { status: 400 })

    try {
        const emailExist = await Volunteer.findOne({ email })
        const phoneExist = await Volunteer.findOne({ phone })
        if(emailExist || phoneExist) return NextResponse.json({ message: 'Email or Phone already exist' }, { status: 400 })

        await Volunteer.create({ email, phone, firstName, lastName, address })
        return NextResponse.json({ message: 'Submitted successfully!' }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    await connectDB()
    const session = await getSession()
    if (!session || !session.user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

    try {
        const volunteers = await Volunteer.find()
        return NextResponse.json(volunteers, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })
    }
}