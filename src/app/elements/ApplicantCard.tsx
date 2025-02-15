import { Mail, FileText, LinkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface ApplicantCardProps {
    id: string | number;
    name: string;
    email: string;
    resumeLink: string;
    coverLetterLink: string;
    createdAt: string;
}

const ApplicantCard = ({
    id,
    name,
    email,
    resumeLink,
    coverLetterLink,
    createdAt
}: ApplicantCardProps) => {
    const formattedDate = format(new Date(createdAt), "PPp");

    return (
        <Card className="group relative overflow-hidden  bg-gradient-to-br from-white via-purple-50/50 to-blue-50/50 backdrop-blur-sm border border-purple-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-purple-200 hover:from-white hover:via-purple-50/60 hover:to-blue-50/60">
            <div className="absolute top-3 right-3">
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{formattedDate}</span>
            </div>

            <div className="flex">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <p className="text-sm text-purple-500">ID: {id}</p>
                        <h3 className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">{name}</h3>
                    </div>

                    <div className="space-y-3">
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors group-hover:translate-x-1 duration-200"
                        >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">{email}</span>
                        </a>

                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200"
                        >
                            <FileText className="w-4 h-4" />
                            <span className="text-sm">Resume</span>
                        </a>

                        <a
                            href={coverLetterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200"
                        >
                            <LinkIcon className="w-4 h-4" />
                            <span className="text-sm">Cover Letter</span>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ApplicantCard;