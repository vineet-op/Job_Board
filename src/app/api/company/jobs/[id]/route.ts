import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";


// app/api/company/[id]/route.ts
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {

        const jobId = parseInt((await params).id)

        // Check if the job ID is valid
        if (isNaN(jobId)) {
            return NextResponse.json(
                { error: "Invalid job ID" },
                { status: 400 }
            );
        }

        // Fetch the job along with its applications
        const job = await prisma.job.findMany({
            where: { id: jobId },
            select: {
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
        return NextResponse.json(job);

    } catch (error) {
        console.error("Error fetching job applications:", error);
        return NextResponse.json(
            { error: "Failed to fetch applications" },
            { status: 500 }
        );
    }
}

