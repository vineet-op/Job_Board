"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner"; // Install: `npm install sonner`

interface Job {
    id: number;
    title: string;
    description: string;
    category: string;
    location: string;
    salary: string;
    companyId: number
}

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [allJobs, setAllJobs] = useState<Job[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    // Form state for posting a job
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        salary: "",
        companyId: 11, // Default as number
    });

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const getAllJobs = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:3000/api/company/jobs')
            setAllJobs(response.data)
        } catch (error) {
            console.error('Failed to fetch jobs:', error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllJobs()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    // Handle job submission
    const handleSubmit = async () => {

        if (!formData.title || !formData.description || !formData.category || !formData.location || !formData.salary) {
            toast.error("All fields are required!");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/api/company/jobs", formData);
            toast.success("Job posted successfully!");
            setIsDialogOpen(false);
            getAllJobs(); // Refresh job list
        } catch (error) {
            console.error("Error creating job:", error);
            toast.error("Failed to post job!");
        } finally {
            setLoading(false);
        }
    };

    const filteredJobs = allJobs.filter((job: Job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="animate-pulse space-y-4 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                    <div className="h-12 bg-gray-300 rounded-md"></div>
                </div>
            </div>
        )
    }

    return (
        <div className='h-screen'>
            <div className='flex pt-10 justify-center w-full items-center'>

                <Input
                    className='w-80 border-purple-700'
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />


                <div className='absolute right-5'>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="w-25 bg-purple-400 hover:bg-purple-800">
                                Post Job <ArrowRight />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Post a New Job</DialogTitle>
                            </DialogHeader>

                            {/* Job Title */}
                            <Label>Job Title</Label>
                            <Input name="title" placeholder="Enter job title" value={formData.title} onChange={handleChange} />

                            {/* Job Description */}
                            <Label>Description</Label>
                            <Input name="description" placeholder="Enter job description" value={formData.description} onChange={handleChange} />

                            {/* Job Category */}
                            <Label>Category</Label>
                            <Input name="category" placeholder="Enter job category" value={formData.category} onChange={handleChange} />

                            {/* Job Location */}
                            <Label>Location</Label>
                            <Input name="location" placeholder="Enter job location" value={formData.location} onChange={handleChange} />

                            {/* Salary */}
                            <Label>Salary</Label>
                            <Input name="salary" placeholder="Enter salary" value={formData.salary} onChange={handleChange} />

                            {/* Company ID Dropdown */}
                            <Label>Select Company ID</Label>
                            <Select
                                onValueChange={(value) => setFormData({
                                    ...formData,
                                    companyId: parseInt(value)
                                })}
                                defaultValue={formData.companyId.toString()}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a company Id" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="11">Company 11</SelectItem>
                                    <SelectItem value="12">Company 12</SelectItem>
                                    <SelectItem value="13">Company 13</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Submit Button */}
                            <Button onClick={handleSubmit} disabled={loading} className='bg-purple-500 text-white'>
                                {loading ? "Posting..." : "Post Job"}
                            </Button>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredJobs.map((job: Job) => (
                    <Link href={`/companylist/${job.id}`}>
                        <div
                            key={job.id}
                            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl hover:border-purple-500 transition-all duration-300"
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