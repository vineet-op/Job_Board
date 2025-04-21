"use client"
import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import List from '../elements/list'
import LoadingSkeleton from '../elements/skeleton'

interface Job {
    id: string | number
    title: string;
    name: string;
    category: string;
    description: string;
    salary: string;
    location: string;
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const Page = () => {

    const [joblists, setJoblist] = useState<Job[]>([]);
    const [loading, Setloading] = useState<boolean>(false)

    const getAllJobs = async () => {
        try {
            Setloading(true)
            const response = await axios.get(`${baseURL}/company/jobs`);
            setJoblist(response.data);
            Setloading(false)
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    }


    useEffect(() => {
        getAllJobs()
    }, [])


    return (
        <div className='flex flex-col mt-10'>
            <div className='text-3xl  text-center font-extrabold text-purple-700'>Available Jobs</div>
            {
                loading ? (
                    <div>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />

                    </div>
                ) :
                    (
                        <div className='w-full flex flex-wrap justify-center flex-col '>
                            {joblists.map((job, index) => (
                                <List
                                    key={index}
                                    id={job.id}
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
        </div>
    )
}

export default Page