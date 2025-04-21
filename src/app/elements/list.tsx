// import { DollarSign, MapPin } from 'lucide-react'
import React from 'react'
// import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, DollarSign, Building } from "lucide-react"




export type JobListProps = {
    id: string | number,
    title: string,
    name: string,
    category: string,
    description: string,
    salary: string,
    location: string
}

const List = ({ id, title, name, category, description, salary, location }: JobListProps) => {
    return (
        <Link href={`/joblist/${id}`} className="block px-4 py-2">
            <Card className="w-full max-w-6xl mx-auto overflow-hidden transition-all hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/10">
                <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        {/* Left Side */}
                        <div className="flex-1 space-y-2 sm:space-y-3">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-300">
                                    {title}
                                </h3>
                                <p className="text-base sm:text-lg text-purple-600 dark:text-purple-400">
                                    {name}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                {description}
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge
                                    variant="secondary"
                                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                                >
                                    {category}
                                </Badge>
                                <span className="text-sm text-purple-600 dark:text-purple-400">ID: {id}</span>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col gap-1 sm:items-end text-sm text-purple-700 dark:text-purple-300">
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                <span>{salary}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                <span>{name}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>


    )
}

export default List