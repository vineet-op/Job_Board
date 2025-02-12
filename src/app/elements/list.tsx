import { CalendarDays, DollarSign, MapPin } from 'lucide-react'
import React from 'react'



export type JobListProps = {
    title: string,
    name: string,
    category: string,
    description: string,
    salary: string,
    location: string
}

const List = ({ title, name, category, description, salary, location }: JobListProps) => {
    return (


        <div className="bg-purple-100 shadow-md rounded-lg p-4 mb-2 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row lg:flex-row xl:flex-row">
            <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-4 lg:mr-6 xl:mr-8">
                {/* <Image src="/path/to/your/image.png" alt="Company Building" /> */}
            </div>
            <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                    <div>
                        <h2 className="text-xl font-semibold text-purple-800 mb-1">{title}</h2>
                        <p className="text-lg text-purple-600 font-medium mb-1">{name}</p>
                    </div>
                    <div className="mt-1 md:mt-0">
                        <span className="bg-purple-200 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {category}
                        </span>
                    </div>
                </div>
                <p className="text-gray-700 mb-2 line-clamp-1">{description}</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="flex items-center text-gray-700">
                        <MapPin size={18} className="mr-2 text-gray-500" />
                        {location}
                    </div>
                    <div className="flex items-center text-gray-700">
                        <DollarSign size={18} className="mr-2 text-gray-500" />${salary}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default List