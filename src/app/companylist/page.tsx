"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import Link from 'next/link';
interface Job {
    id: number;
    title: string;
    description: string;
    category: string;
    location: string;
    salary: string;
    companyId: string
}

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [allJobs, setAllJobs] = useState<Job[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    const getAllJobs = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:3000/api/company/jobs')
            setAllJobs(response.data)
        } catch (error: any) {
            console.error('Failed to fetch jobs:', error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllJobs()
    }, [])

    const filteredJobs = allJobs.filter((job: Job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className=' h-screen'>
            <div className='flex pt-10 justify-center items-center'>
                <Input
                    className='w-80 border-purple-700'
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredJobs.map((job: Job) => (
                    <Link href={`/companylist/${job.id}`}>
                        <div
                            key={job.id}
                            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-purple-800 mb-2">{job.title}</h2>
                            <div className="space-y-2">
                                <p className="text-gray-600"><strong>Category:</strong> {job.category}</p>
                                <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
                                <p className="text-gray-600"><strong>Salary:</strong> {job.salary}</p>
                                <p className="text-gray-700 line-clamp-2">{job.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Page;