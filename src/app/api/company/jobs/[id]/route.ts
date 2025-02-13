import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// app/api/company/[id]/route.ts
export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const jobId = parseInt(params.id);

        if (isNaN(jobId)) {
            return NextResponse.json(
                { error: "Invalid job ID" },
                { status: 400 }
            );
        }

        // Fetch the job along with its applications
        const job = await prisma.job.findUnique({
            where: { id: jobId },
            select: {
                id: true,
                title: true,
                description: true,
                category: true,
                location: true,
                salary: true,
                applications: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                resumeLink: true,
                                coverLetterLink: true
                            }
                        }
                    }
                }
            }
        });

        if (!job) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(job.applications);

    } catch (error) {
        console.error("Error fetching job applications:", error);
        return NextResponse.json(
            { error: "Failed to fetch applications" },
            { status: 500 }
        );
    }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const data = await req.json();
    const updatedJob = await prisma.job.update({
        where: { id: parseInt(params.id) },
        data,
    });

    return NextResponse.json(updatedJob);
}


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await prisma.job.delete({
        where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ message: 'Job deleted successfully' });
}
