const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            {
                name: "Alice Johnson",
                email: "alice@example.com",
                resumeLink: "https://example.com/resume/alice",
                coverLetterLink: "https://example.com/coverletter/alice"
            },
            {
                name: "Bob Smith",
                email: "bob@example.com",
                resumeLink: "https://example.com/resume/bob",
                coverLetterLink: "https://example.com/coverletter/bob"
            },
            {
                name: "Charlie Brown",
                email: "charlie@example.com",
                resumeLink: "https://example.com/resume/charlie",
                coverLetterLink: "https://example.com/coverletter/charlie"
            }
        ]
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
