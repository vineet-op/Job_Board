
import { Button } from "@/components/ui/button";
import { Search, Briefcase, ArrowRight } from 'lucide-react';
import { AnimatedListDemo } from "./elements/AnimatedList";
import Link from "next/link";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-48 left-48 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full mb-8 group cursor-pointer hover:bg-purple-100 transition-colors duration-300">
            <span className="text-purple-600 text-sm font-medium">
              Over 1000+ jobs available
            </span>
            <ArrowRight className="w-4 h-4 ml-2 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Dream Job in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600"> Tech</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with top tech companies and startups. Your next career move is just a click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/joblist'}>
              <Button className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
            </Link>
            <Link href={'/companylist'}>
              <Button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                <Briefcase className="w-5 h-5 mr-2" />
                Post a Job
              </Button>
            </Link>
          </div>

          {/* Stats */}
        </div>
      </div>
      <AnimatedListDemo />
    </div>
  )
}


export default Home
