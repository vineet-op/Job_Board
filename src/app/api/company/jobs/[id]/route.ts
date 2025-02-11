import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const jobs = await prisma.company.findMany({
            where: {
                id: parseInt(params.id)
            },
            include: {
                jobs: {
                    select: {
                        title: true,
                        description: true,
                        category: true,
                        location: true,
                        salary: true
                    }
                }
            }
        });

        if (!jobs.length) {
            return NextResponse.json(
                { error: 'No jobs found for this company' },
                { status: 404 }
            );
        }

        return NextResponse.json(jobs);

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch jobs' },
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
