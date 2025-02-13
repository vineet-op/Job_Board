import Link from "next/link"

type userCardProps = {
    jobid: number
    id: number
    name: string
    email: string
    resumeLink: string
    coverLetterLink: string
}



export default function UserCard({ jobid, id, name, email, resumeLink, coverLetterLink }: userCardProps) {
    return (
        <div className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 shadow-lg rounded-lg overflow-hidden max-w-4xl w-full mx-auto text-white">
            <div className="p-6 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:mr-6 text-center md:text-left">
                    <h2 className="font-bold text-2xl mb-2">{name}</h2>
                    <p className="text-lg mb-2">{email}</p>
                    <p className="text-sm opacity-75">User ID: {id}</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    {resumeLink ? (
                        <Link
                            href={resumeLink}
                            className="bg-white text-purple-700 hover:bg-purple-100 font-bold py-2 px-4 rounded text-center transition duration-300 ease-in-out"
                        >
                            View Resume
                        </Link>
                    ) : (
                        <div className="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded text-center opacity-50 cursor-not-allowed">
                            No Resume
                        </div>
                    )}
                    {coverLetterLink ? (
                        <Link
                            href={coverLetterLink}
                            className="bg-purple-200 text-purple-800 hover:bg-purple-300 font-bold py-2 px-4 rounded text-center transition duration-300 ease-in-out"
                        >
                            View Cover Letter
                        </Link>
                    ) : (
                        <div className="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded text-center opacity-50 cursor-not-allowed">
                            No Cover Letter
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}