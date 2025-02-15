import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";


// app/api/company/[id]/route.ts
export async function GET(req: Request, { params }: { params: { id: number } }) {
    try {
        // Parse the job ID from params (no need to await params.id)
        const jobId = await params.id;

        // Check if the job ID is valid

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

        // Check if the job exists
        if (!job) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        // Return the applications for the job
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
