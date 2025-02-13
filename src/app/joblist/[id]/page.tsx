"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DollarSign, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import JobDetailsLoadingSkeleton from '../../elements/JobDetailsLoadingSkeleton '

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
interface Job {
    id: number
    title: string
    description: string
    category: string
    location: string
    salary: string
    applications: Application[];
}

interface ApiError {
    response?: {
        status: number;
        data?: any;
    };
    message: string;
}

const JobDetailsPage = () => {
    const params = useParams()
    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resumeLink: '',
        coverLetterLink: ''
    })

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
        return <JobDetailsLoadingSkeleton />
    }

    if (!job) {
        return <div className="flex justify-center items-center min-h-screen">Job not found</div>
    }




    const getUserDetails = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/candidate/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (response.status === 201) {
                // Success handling
                console.log('Application submitted successfully:', response.data)
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    resumeLink: '',
                    coverLetterLink: ''
                })
                // You might want to close the dialog here
            }

        } catch (error: unknown) {
            if (
                error instanceof Error &&
                typeof error === 'object' &&
                error !== null &&
                'response' in error &&
                (error as ApiError).response?.status === 400
            ) {
                alert("You have already applied for this job");
            } else {
                alert("Error submitting application");
            }
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <Card className="w-full max-w-7xl min-h-[80vh]">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-purple-900">{job.title}</CardTitle>
                    <CardDescription className='flex gap-2'>
                        <Label className="bg-purple-300 text-black font-medium p-2 rounded-full">
                            {job.category}
                        </Label>
                        <Label className="bg-purple-300 text-black font-medium p-2 rounded-full">
                            JobID: {job.id}
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full mt-64 max-w-md bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
                                Apply Now
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Apply for {job.title}</DialogTitle>
                                <DialogDescription>
                                    Fill out the form below to submit your application
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={getUserDetails} className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter your full name"
                                        className="mt-1"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Enter your email"
                                        className="mt-1"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="Resume Link">Resume Link</Label>
                                    <Input
                                        id="resume"
                                        type="text"
                                        value={formData.resumeLink}
                                        onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                                        placeholder="Enter your resume link"
                                        className="mt-1"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="coverLetter">Cover Letter</Label>
                                    <Input
                                        id="coverLetter"
                                        value={formData.coverLetterLink}
                                        onChange={(e) => setFormData({ ...formData, coverLetterLink: e.target.value })}
                                        placeholder="Write your cover letter..."
                                        className="mt-1"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                >
                                    Submit Application
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </div>
    )
}

export default JobDetailsPage