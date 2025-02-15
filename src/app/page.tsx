
import { Button } from "@/components/ui/button";
import { Briefcase, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";

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

      {/* Animated List Section */}

    </div>
  )
}

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Emily Chen",
    description: "Hired at Google",
    time: "15m ago",
    icon: "🚀",
    color: "#00C9A7",
  },
  {
    name: "Michael Rodriguez",
    description: "Hired at Amazon",
    time: "10m ago",
    icon: "💻",
    color: "#FFB800",
  },
  {
    name: "Sarah Kim",
    description: "Hired at Microsoft",
    time: "5m ago",
    icon: "🌟",
    color: "#FF3D71",
  },
  {
    name: "David Thompson",
    description: "Hired at Apple",
    time: "2m ago",
    icon: "🏆",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

export default Home
