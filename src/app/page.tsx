"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
  }
];


export default function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900"
          >
            Your Career Journey
            <br />
            Starts Here
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-700/80 max-w-2xl mx-auto"
          >
            Connect with top companies and find your dream job, or hire exceptional talent to grow your team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            {/* Get Hired Button */}

            <Link href='/joblist'>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full 
              transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-purple-200"
              >
                Get Hired
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {/* Post Job Button */}

            <Link href='/companylist'>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg 
              rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Post a Job
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 py-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600">10k+</h3>
              <p className="text-purple-700/70">Active Jobs</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600">8k+</h3>
              <p className="text-purple-700/70">Companies</p>
            </div>
            <div className="text-center md:col-span-1 col-span-2">
              <h3 className="text-3xl font-bold text-purple-600">15k+</h3>
              <p className="text-purple-700/70">Job Seekers</p>
            </div>
          </motion.div>


        </div>
      </div>
    </div >
  );
}
