"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/app/data";

export default function AboutMeSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 px-4 pb-28 opacity-0 animate-fadeUp">
      <h2 className="text-gray-400 text-sm ml-7">About</h2>
      <h1 className="text-3xl font-semibold text-white mb-6 ml-6">Me</h1>

      <div
        className="flex flex-col sm:flex-row items-start gap-8 p-6 rounded-lg 
        transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
      >
        <div className="relative group transition-all">
          <div className="absolute inset-0 rounded-xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          <Image
            src="/hi.webp"
            width={230}
            height={230}
            alt="Kartikey Avatar"
            className="object-cover shrink-0 relative z-10 
            transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Kartikey Bhatnagar
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            I'm a Full Stack Web Developer who enjoys turning ideas into fast,
            functional, and well-designed web apps—building clean, practical
            digital experiences and production-ready systems with modern tech.
          </p>

          <h2 className="mt-3 font-semibold text-white">Skills</h2>

          <TooltipProvider delayDuration={100}>
            <div className="flex items-center gap-3 mt-2">
              {skills.map((skill, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div
                      className="p-1 rounded-md transition-all duration-300
                      hover:scale-110 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <img
                        src={skill.src}
                        alt={skill.label}
                        className="w-6 h-6"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}

              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    src="/svgs/nextjs.svg"
                    alt="Next.js"
                    className="w-6 h-6 bg-white rounded-full border-black transition-all duration-300
                    hover:scale-110 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next.js</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
