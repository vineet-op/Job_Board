import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const allJobs = await prisma.job.findMany({});
        return NextResponse.json(allJobs);
    } catch (error) {
        console.error('Failed to fetch all jobs:', error);
        return NextResponse.json({ message: 'Failed to fetch all jobs' }, { status: 500 });
    }
}


