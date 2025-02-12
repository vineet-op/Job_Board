"use client"
import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import List from '../elements/list'

interface Job {
    title: string;
    name: string;
    category: string;
    description: string;
    salary: string;
    location: string;
}

const page = () => {

    const [joblists, setJoblist] = useState<Job[]>([]);

    const getAllJobs = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/company/jobs");
            setJoblist(response.data);
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    }


    useEffect(() => {
        getAllJobs()
    }, [])

    return (
        <div className='flex flex-col mx-80 gap-2 mt-10'>
            {joblists.map((job, index) => (
                <List
                    key={index}
                    title={job.title as string}
                    name={job.name as string}
                    category={job.category as string}
                    description={job.description as string}
                    salary={job.salary as string}
                    location={job.location as string}
                />
            ))}
        </div>
    )
}

export default page