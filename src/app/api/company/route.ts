import { NextResponse } from "next/server"

export const GET = () => {
    try {
        return NextResponse.json({
            message: "Hello from company"
        })
    } catch (error) {
        return NextResponse.json({
            message: error
        })
    }
}