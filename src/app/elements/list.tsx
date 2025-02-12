import { DollarSign, MapPin } from 'lucide-react'
import React from 'react'
import { Label } from "@/components/ui/label"
import Link from 'next/link'



export type JobListProps = {
    id: string | Number,
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
            <div className="bg-neutral-100 shadow-md rounded-lg p-4 mb-2 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row lg:flex-row xl:flex-row cursor-pointer">
                <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-4 lg:mr-6 xl:mr-8">
                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830596.png" className='w-8 h-8' alt="company-logo" />
                </div>
                <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <div>
                            <h2 className="text-xl font-semibold text-purple-800 mb-1">{title}</h2>
                            <p className="text-lg text-purple-600 font-medium mb-1">{name}</p>
                        </div>
                        <div className="mt-1 md:mt-0">
                            <Label className='bg-purple-300 text-black font-medium p-2 text-wrap rounded-full'>
                                {category}
                            </Label>
                        </div>
                    </div>
                    <p className="text-gray-700 mb-2 line-clamp-1">{description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="flex items-center text-gray-700">
                            <MapPin size={18} className="mr-2 text-gray-500" />
                            {location}
                        </div>
                        <div className="flex items-center justify-end text-gray-950">
                            <DollarSign size={18} className="mr-2 text-green-500" />${salary}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default List