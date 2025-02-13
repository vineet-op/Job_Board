"use client"

import React, { useState, useEffect } from 'react'
import UserCard from '@/app/elements/UserCard'
import axios from "axios"
import { useParams } from 'next/navigation'

interface Application {
    id: number;
    jobId: number;
    userId: number;
    status: string;
    createdAt: string;
    user: {
        id: number;
        name: string;
        email: string;
        resumeLink: string;
        coverLetterLink: string;
    };
}

const Page = () => {

    const [loading, setloading] = useState<boolean>(false)
    const [application, setApplication] = useState<Application[]>([]);


    const params = useParams()

    const getAllApplication = async () => {
        try {
            setloading(true)
            const response = await axios.get(`http://localhost:3000/api/company/jobs/${params.id}`)
            setApplication(response.data)

        } catch (error) {
            console.log("error while getAllApplication", error);
        }
        finally {
            setloading(false)
            console.log(application);

        }
    }

    useEffect(() => {
        getAllApplication()
    }, [params.id])


    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            {loading ? (
                <div className='w-screen h-screen flex justify-center items-center'>
                    <div>Loading ....</div>
                </div>
            ) : (
                application.map((app) => (
                    <UserCard
                        key={app.id}
                        // jobid={app.jobId}
                        id={app.user.id}
                        name={app.user.name}
                        email={app.user.email}
                        resumeLink={app.user.resumeLink}
                        coverLetterLink={app.user.coverLetterLink}
                    />
                ))
            )}
        </div>
    );

}

export default Page
