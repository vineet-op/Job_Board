import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component

const LoadingSkeleton = () => {
    return (
        <div className="bg-neutral-100 shadow-md rounded-lg p-4 mb-2 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row lg:flex-row xl:flex-row cursor-pointer">
            <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-4 lg:mr-6 xl:mr-8">
                <Skeleton className="w-8 h-8 rounded-full" /> {/* Company logo skeleton */}
            </div>
            <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                    <div>
                        <Skeleton className="h-6 w-48 mb-2" /> {/* Title skeleton */}
                        <Skeleton className="h-5 w-32" /> {/* Company name skeleton */}
                    </div>
                    <div className="mt-1 md:mt-0">
                        <Skeleton className="h-8 w-24 rounded-full" /> {/* Category skeleton */}
                    </div>
                </div>
                <Skeleton className="h-4 w-full mb-2" /> {/* Description skeleton */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="flex items-center text-gray-700">
                        <Skeleton className="h-5 w-32" /> {/* Location skeleton */}
                    </div>
                    <div className="flex items-center justify-end text-gray-950">
                        <Skeleton className="h-5 w-24" /> {/* Salary skeleton */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;