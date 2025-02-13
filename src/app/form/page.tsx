"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner"; // Install: `npm install sonner`

const PostJob = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        salary: "",
        companyId: "11", // Default company ID
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!formData.title || !formData.description || !formData.category || !formData.location || !formData.salary) {
            toast.error("All fields are required!");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post("/api/company/jobs", formData);
            toast.success("Job posted successfully!");
            console.log("Job Created:", response.data);
        } catch (error) {
            console.error("Error creating job:", error);
            toast.error("Failed to post job!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Post a Job</Button>
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
                <Label>Company</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, companyId: value })} defaultValue={formData.companyId}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a company" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="11">Company 11</SelectItem>
                        <SelectItem value="12">Company 12</SelectItem>
                        <SelectItem value="13">Company 13</SelectItem>
                    </SelectContent>
                </Select>

                {/* Submit Button */}
                <Button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Posting..." : "Post Job"}
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default PostJob;
