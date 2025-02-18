# Joboard

Joboard is a modern job application platform where candidates can apply for jobs, and companies can list job openings. It simplifies the hiring process by providing a seamless interface for job seekers and recruiters.

## 🚀 Features

- 📝 **Job Listings** – Companies can post job opportunities.
- 🔍 **Job Search** – Candidates can browse and filter job listings.
- 🏢 **Company Profiles** – Employers can manage job postings and applications.
- 👨‍💼 **Candidate Applications** – Users can apply for jobs directly through the platform.
- 🎨 **Modern UI** – Clean and responsive design with TailwindCSS and ShadCN.
- 💾 **Database Integration** – Uses Prisma with PostgreSQL for efficient data management.

## 🛠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN](https://ui.shadcn.com/)
- **Backend:** [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)

## 📦 Installation

1. **Clone the repository and add the configuration:**
   ```sh
   git clone https://github.com/yourusername/joboard.git
   cd joboard
   npm install
   DATABASE_URL="your_postgres_connection_string"
   npx prisma migrate dev --name init
   npm run dev

Visit the app in your browser:
Open http://localhost:3000

🚀 Deployment
Deploy on Vercel or Railway.
Ensure your database is set up and accessible in production.

🤝 Contributing
Contributions are welcome! Feel free to submit issues or pull requests. 
  
