const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.application.deleteMany({});
    await prisma.job.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.company.deleteMany({});

    // Seed Companies with individual creates to get their IDs
    const techCorp = await prisma.company.create({
        data: {
            name: "TechCorp",
            email: "contact@techcorp.com",
            description: "A leading tech company specializing in innovative solutions."
        }
    });

    const healthPlus = await prisma.company.create({
        data: {
            name: "HealthPlus",
            email: "info@healthplus.com",
            description: "Providing top-notch healthcare services and solutions."
        }
    });

    const eduWorld = await prisma.company.create({
        data: {
            name: "EduWorld",
            email: "support@eduworld.com",
            description: "Revolutionizing education through technology."
        }
    });

    // Seed Jobs individually to get their IDs
    const frontendDevJob = await prisma.job.create({
        data: {
            title: "Frontend Developer",
            description: "Develop and maintain user interfaces.",
            category: "Software Development",
            location: "Remote",
            salary: "70000-90000",
            companyId: techCorp.id
        }
    });

    const dataAnalystJob = await prisma.job.create({
        data: {
            title: "Data Analyst",
            description: "Analyze and interpret complex data.",
            category: "Data Science",
            location: "New York, NY",
            salary: "60000-80000",
            companyId: healthPlus.id
        }
    });

    const projectManagerJob = await prisma.job.create({
        data: {
            title: "Project Manager",
            description: "Manage project timelines and deliverables.",
            category: "Management",
            location: "San Francisco, CA",
            salary: "90000-110000",
            companyId: eduWorld.id
        }
    });

    // Seed Users
    const alice = await prisma.user.create({
        data: {
            name: "Alice Johnson",
            email: "alice@example.com",
            resumeLink: "https://example.com/resume/alice",
            coverLetterLink: "https://example.com/coverletter/alice"
        }
    });

    // Seed Applications individually
    const application = await prisma.application.create({
        data: {
            jobId: frontendDevJob.id,
            userId: alice.id,
            status: "Pending"
        }
    });

    console.log("Database seeded successfully!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
