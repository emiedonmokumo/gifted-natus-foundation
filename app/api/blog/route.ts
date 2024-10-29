import { NextResponse } from "next/server";

export function GET(request: any) {
    return NextResponse.json({ message: 'Blog API' }, { status: 200 })
}