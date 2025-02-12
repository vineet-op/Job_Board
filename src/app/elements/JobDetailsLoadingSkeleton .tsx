import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component

const JobDetailsLoadingSkeleton = () => {
    return (
        <div className="flex justify-center items-center min-h-screen p-6">
            <div className="w-full max-w-7xl min-h-[80vh] bg-white shadow-lg rounded-lg">
                {/* CardHeader Skeleton */}
                <div className="p-6 border-b">
                    <Skeleton className="h-8 w-3/4 mb-4" /> {/* Title skeleton */}
                    <Skeleton className="h-6 w-32 rounded-full" /> {/* Category skeleton */}
                </div>

                {/* CardContent Skeleton */}
                <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center">
                            <Skeleton className="h-5 w-24" /> {/* Location skeleton */}
                        </div>
                        <div className="flex items-center justify-end">
                            <Skeleton className="h-5 w-20" /> {/* Salary skeleton */}
                        </div>
                    </div>

                    <div className="mb-4">
                        <Skeleton className="h-6 w-48 mb-4" /> {/* Job Description heading skeleton */}
                        <Skeleton className="h-4 w-full mb-2" /> {/* Description line 1 skeleton */}
                        <Skeleton className="h-4 w-full mb-2" /> {/* Description line 2 skeleton */}
                        <Skeleton className="h-4 w-3/4 mb-2" /> {/* Description line 3 skeleton */}
                    </div>
                </div>

                {/* CardFooter Skeleton */}
                <div className="p-6 flex justify-center items-end pb-6">
                    <Skeleton className="h-12 w-64 rounded-lg" /> {/* Apply Now button skeleton */}
                </div>
            </div>
        </div>
    );
};

export default JobDetailsLoadingSkeleton;