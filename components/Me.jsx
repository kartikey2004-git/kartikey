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
    <section className="w-full max-w-4xl mx-auto mt-10 px-4 pb-20 animate-fadeUp">
      <h2 className="text-gray-400 text-xs sm:text-sm ml-1">About</h2>
      <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4 ml-1">
        Me
      </h1>

      <div
        className="
          flex flex-col sm:flex-row
          items-start gap-5 sm:gap-8
          p-4 sm:p-6
          rounded-lg
          transition-all duration-300
          hover:shadow-xl hover:shadow-black/40
        "
      >
        {/* Avatar */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <Image
            src="/hi.webp"
            width={180}
            height={180}
            alt="Kartikey Avatar"
            className="
              object-cover rounded-md
              w-35 h-35
              sm:w-50 sm:h-50
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            Kartikey Bhatnagar
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
            I'm a Full Stack Web Developer who enjoys turning ideas into fast,
            functional, and well-designed web apps — building clean,
            production-ready systems.
          </p>

          <h2 className="mt-2 text-sm sm:text-base font-semibold text-white">
            Skills
          </h2>

          <TooltipProvider delayDuration={100}>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {skills.map((skill, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div
                      className="
                        p-1 rounded-md
                        transition-all duration-300
                        hover:scale-110 hover:-translate-y-0.5
                        cursor-pointer
                      "
                    >
                      <img
                        src={skill.src}
                        alt={skill.label}
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                    className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer transition hover:scale-110"
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
