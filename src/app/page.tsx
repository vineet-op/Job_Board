
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";
import Link from "next/link";
import { AnimatedListDemo } from "./elements/AnimatedList";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-800 via-red to-purple-800 overflow-hidden">
      {/* Hero Section */}
      <div className="overflow-hidden">
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-10 flex flex-col">
            <h1 className="text-4xl sm:text-5xl w-full lg:text-7xl font-extrabold text-white">Get Hired in Minutes not in Hours</h1>
            <p className="max-w-2xl mx-auto text-xl sm:text-2xl font-medium text-neutral-50">
              Connect with top companies and opportunities that match your skills and aspirations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/joblist">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg group animate-fade-in"
                >
                  <Briefcase className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                  Get Hired
                </Button>
              </Link>

              <Link href="/companylist">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-8 py-6 text-lg group animate-fade-in"
                >
                  <FileText className="mr-2 w-5 h-5 group-hover:rotate-6 transition-transform" />
                  Post a Job
                </Button>
              </Link>
            </div>
            <div className="container mx-auto px-4 overflow-y-hidden">
              <AnimatedListDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
