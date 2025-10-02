"use client";

import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import { BackgroundBeams } from "./ui/background-beams";
import { SparklesCore } from "./ui/sparkles";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

const Me = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4 sm:px-6 pt-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white relative z-20 mb-4 sm:mb-6">
        I Like Building Things
      </h1>

      <p className="max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-center text-gray-300 leading-relaxed mb-8">
        I’m always drawn to hackathons—seeing people turn ideas into real
        projects is both inspiring and energizing. That spark of creativity is
        what keeps me exploring, learning, and building.
      </p>

      <div className="w-full max-w-4xl h-40 sm:h-48 relative">
        {/* Gradients */}
        <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/2 blur-sm" />
        <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/2" />
        <div className="absolute left-3/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute left-3/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Me;
