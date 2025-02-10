import { NextResponse } from "next/server";

export const GET = (req: Request) => {
    try {
        return NextResponse.json({
            message: "Hello, Candidate!"
        });
    } catch (error) {

        return NextResponse.json({
            message: "Error"
        })
    }
}