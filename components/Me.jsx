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
    <section className="w-full max-w-4xl mx-auto mt-8 px-4 pb-16 animate-fadeUp">
      <h2 className="text-gray-400 text-xs">About</h2>
      <h1 className="text-xl sm:text-3xl font-semibold text-white mb-3">Me</h1>

      <div
        className="
          flex flex-col sm:flex-row
          gap-4 sm:gap-8
          p-3 sm:p-6
          rounded-lg
        "
      >
        {/* Avatar */}
        <div className="flex sm:justify-start">
          <Image
            src="/hi.webp"
            width={120}
            height={120}
            alt="Kartikey Avatar"
            className="
              rounded-md object-cover
              w-27.5 h-27.5
              sm:w-40 sm:h-40
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h1 className="text-lg sm:text-2xl font-semibold text-white">
            Kartikey Bhatnagar
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Full Stack Developer focused on building fast, clean and
            production-ready web applications using modern technologies.
          </p>

          <h2 className="text-sm font-semibold text-white">Skills</h2>

          <TooltipProvider delayDuration={100}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div className="p-1 rounded-md">
                      <img
                        src={skill.src}
                        alt={skill.label}
                        className="w-5 h-5"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{skill.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}

              {/* Next.js */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    src="/svgs/nextjs.svg"
                    alt="Next.js"
                    className="w-5 h-5"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Next.js</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
