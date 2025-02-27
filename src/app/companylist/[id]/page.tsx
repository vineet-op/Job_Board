"use client"

import React, { useState, useEffect, useCallback } from 'react'
import ApplicantCard from '@/app/elements/ApplicantCard'
import axios from "axios"
import { useParams } from 'next/navigation'
import LoadingSkeleton from '../../elements/skeleton'
import { empty } from '@prisma/client/runtime/library'

interface Application {
    id: number;
    jobId: number;
    userId: number;
    status: string;
    createdAt: string;
    applications: {
        user: {
            id: number;
            name: string;
            email: string;
            resumeLink: string;
            coverLetterLink: string;
        };
        createdAt: string;
    }[];
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [application, setApplication] = useState<Application[]>([]);

    const params = useParams()

    const getAllApplication = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${baseURL}/company/jobs/${params.id}`)
            setApplication(response.data)
        } catch (error) {
            console.error("Error while getAllApplication:", error);
        } finally {
            setLoading(false)
        }
    }, [params.id])

    useEffect(() => {
        getAllApplication()
    }, [getAllApplication])

    const users = application[0]?.applications?.map(app => app.user);

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 p-6 sm:p-8">
            <div className="max-w-md mx-auto">
                <div className="space-y-2 mb-8 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-purple-900">Applicant Details</h1>
                    <p className="text-sm text-purple-600">Review candidate information</p>
                </div>
                {
                    loading ? (
                        <div>
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                        </div>
                    ) : (
                        <div>
                            {
                                (!users || users.length === 0) && <div className='w-full flex h-full pt-28 justify-center items-center'>
                                    <div className='text-4xl text-purple-500'>
                                        No Application recieved yet!
                                    </div>
                                </div>
                            }
                            {users?.map((user, index) => (
                                <ApplicantCard
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    coverLetterLink={user.coverLetterLink}
                                    resumeLink={user.resumeLink}
                                    createdAt={application[0]?.applications[index]?.createdAt || ''}
                                />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Page