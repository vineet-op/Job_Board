import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();

        const { title, description, category, location, salary, companyId } = body

        if (!title || !description || !category || !location || !salary || !companyId) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const newJob = await prisma.job.create({
            data: {
                title,
                description,
                category,
                location,
                salary,
                companyId,
            }
        })
        return NextResponse.json(newJob, { status: 201 });
    }
    catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ message: 'Failed to create job' }, { status: 500 });
    }
}


export const GET = async () => {
    try {
        const allJobs = await prisma.job.findMany({

        })

        return NextResponse.json(allJobs)
    } catch (error) {
        console.error('Failed to fetch alljobs:', error);
        return NextResponse.json({ message: 'Failed to fetch alljobs' }, { status: 500 });
    }
} 