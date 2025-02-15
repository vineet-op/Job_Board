"use client"
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="ml-8 mt-8 mr-8 mb-8 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
        <div className="flex justify-center items-center flex-col gap-10 pt-60">
          <div className="text-6xl font-extrabold text-black">Find Your Dream <span className="text-white">Job</span> Today</div>
          <div className="text-xl font-thin text-black">
            Discover thousands of job opportunities with all the information you need. Your dream job is waiting for you.
          </div>
          <div className="flex gap-11 p-5 items-center w-full">
            {/* Students */}
            <Link href='/joblist'>
              <Button className="px-12 py-6 rounded-full bg-white text-black hover:bg-white hover:cursor-pointer font-medium hover:scale-105 transition-transform duration-300">
                Get Hired <MoveRight />
              </Button>
            </Link>

            <Link href='/companylist'>
              <Button className="px-12 py-6 rounded-full bg-black hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                Post a Job <MoveRight />
              </Button>
            </Link>
          </div>

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
    </div>
  );
}
