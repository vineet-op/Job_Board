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
        <Link href={`/joblist/${id}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/10">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight text-purple-700 dark:text-purple-300">{title}</h3>
                                <p className="text-lg text-purple-600 dark:text-purple-400">{name}</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="secondary"
                                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                                >
                                    {category}
                                </Badge>
                                <span className="text-sm text-purple-600 dark:text-purple-400">ID: {id}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:items-end">
                            <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
                                <DollarSign className="w-4 h-4" />
                                <span>{salary}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
                                <MapPin className="w-4 h-4" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
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