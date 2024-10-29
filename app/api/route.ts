import { NextResponse } from "next/server";

export function GET(request: any) {
    return NextResponse.json({ message: 'API is working' }, { status: 200 })
}