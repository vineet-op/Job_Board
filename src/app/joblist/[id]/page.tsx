"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DollarSign, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

interface Job {
    id: number
    title: string
    description: string
    category: string
    location: string
    salary: string
    applications: any[]
}

const JobDetailsPage = () => {
    const params = useParams()
    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getJobDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/candidate/${params.id}`)
                // Since the API returns an array with one item, we take the first item
                setJob(response.data[0])
            } catch (error) {
                console.error("Error fetching job details:", error)
            } finally {
                setLoading(false)
            }
        }

        if (params.id) {
            getJobDetails()
        }
    }, [params.id])

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>
    }

    if (!job) {
        return <div className="flex justify-center items-center min-h-screen">Job not found</div>
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <Card className="w-full max-w-7xl min-h-[80vh]">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-purple-900">{job.title}</CardTitle>
                    <CardDescription>
                        <Label className="bg-purple-300 text-black font-medium p-2 rounded-full">
                            {job.category}
                        </Label>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-700">
                            <MapPin size={20} className="mr-2 text-gray-500" />
                            {job.location}
                        </div>
                        <div className="flex items-center text-gray-950 justify-end">
                            <DollarSign size={20} className="mr-2 text-green-500" />
                            ${job.salary}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                        <p className="text-gray-700 whitespace-pre-wrap">{job.description}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center items-end pb-6">
                    <Button
                        className="w-full mt-64 max-w-md bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
                        onClick={() => {/* Add your apply logic here */ }}
                    >
                        Apply Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default JobDetailsPage