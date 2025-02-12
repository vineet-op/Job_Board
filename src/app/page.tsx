
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";


export default function Home() {



  return (
    <div className="ml-8 mt-8 mr-8 mb-8 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen">
        <div className="flex justify-center items-center flex-col gap-10 pt-60">
          <div className="text-6xl font-extrabold text-black">Find Your Dream <span className="text-white">Job</span> Today</div>
          <div className="text-xl font-thin text-black">
            Discover thousands of job opportunities with all the information you need. Your dream job is waiting for you.
          </div>
          <div className="flex gap-11 p-5 items-center  w-ful">


            {/* //students */}
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
        </div>
      </div>
    </div>
  );
}
