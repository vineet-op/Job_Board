import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(req: Request, { params }: { params: { id: string } }) {

    try {
        const jobId = await parseInt(params.id);

        if (isNaN(jobId)) {
            return NextResponse.json(
                { error: "Invalid job ID" },
                { status: 400 }
            );
        }

        const job = await prisma.job.findMany({
            where: { id: jobId },
            select: {
                id: true,
                title: true,
                description: true,
                category: true,
                location: true,
                salary: true,
                applications: true
            },
        });

        if (!job) {
            return NextResponse.json(
                { error: "Job not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(job);
    } catch (error) {
        console.error("Error fetching job:", error);
        return NextResponse.json(
            { error: "Error fetching job" },
            { status: 500 }
        );
    }
}


export async function POST(request: Request) {
    try {
        const { jobId, name, email, resumeLink, coverLetterLink } = await request.json();

        // Check if the job exists
        const job = await prisma.job.findUnique({
            where: { id: jobId },
            include: { company: true }
        });

        if (!job) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        // Check if the user already exists
        let user = await prisma.user.findUnique({ where: { email } });

        // Create user if not exists
        if (!user) {
            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    resumeLink,
                    coverLetterLink
                }
            });
        } else {
            // Update user details if exists
            await prisma.user.update({
                where: { email },
                data: {
                    name,
                    resumeLink,
                    coverLetterLink
                }
            });
        }

        // Check for duplicate application
        const existingApplication = await prisma.application.findUnique({
            where: {
                jobId_userId: {
                    jobId: job.id,
                    userId: user.id
                }
            }
        });

        if (existingApplication) {
            return NextResponse.json({ error: 'User has already applied for this job' }, { status: 400 });
        }

        // Create new application
        const newApplication = await prisma.application.create({
            data: {
                jobId: job.id,
                userId: user.id,
                status: 'Pending'
            },
            include: {
                user: true // Include user details in the response
            }
        });

        return NextResponse.json({ message: 'Application submitted successfully', application: newApplication }, { status: 201 });

    } catch (error) {
        console.error('Error applying for job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
