"use client";

import { Rocket } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { technologies, skills, highlightsData, highlights } from "@/app/data";
import { useEffect, useState } from "react";

export default function AboutMeSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const firstPageCount = 20;
  const secondPageCount = 12;

  const visibleTech = isMobile
    ? page === 1
      ? technologies.slice(0, firstPageCount)
      : technologies.slice(firstPageCount, firstPageCount + secondPageCount)
    : technologies;

  return (
    <section
      id="how-i-build"
      className="w-full py-16 bg-black/60 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 mb-8 items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Tech Stack
          </h2>

          <div className="hidden lg:block" />

          <h2 className="text-2xl sm:text-3xl font-semibold text-white lg:pl-8">
            Who Am I
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-start">
          {/* Technologies Grid */}
          <div className="space-y-4 w-full">
            <h3 className="text-xl font-semibold text-white mb-4">
              Technologies
            </h3>
            <TooltipProvider delayDuration={100}>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 place-items-center">
                {visibleTech.map((tech, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer backdrop-blur-sm">
                        <img
                          src={tech.icon}
                          alt={tech.iconname}
                          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 opacity-90 hover:opacity-100"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      {tech.iconname}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>

            {isMobile && (
              <div className="flex justify-center gap-3 mt-6">
                {[1, 2].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      page === p ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <Separator
            orientation="vertical"
            className="hidden lg:block ml-2 h-full bg-white/10"
          />

          {/* About Section */}
          <div className="space-y-4 lg:pl-8 w-full">
            <div className="space-y-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Kartikey Bhatnagar
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I architect full-stack applications that don't fall apart at 3
                  AM. React, Node.js, real-time systems, and the occasional AI
                  integration when it actually makes sense (not everything needs
                  GPT-5). Currently building tools that developers actually want
                  to use.
                </p>
              </div>

              <div className="space-y-3">
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-3">
                  {highlights.map(({ Icon, text }, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm sm:text-md text-gray-400"
                    >
                      <Icon className="h-4 w-4 text-white/70" />
                      <span className="text-sm sm:text-base">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-8 sm:mt-10 max-w-full sm:max-w-3xl rounded-lg bg-linear-to-r from-white/5 via-white/3 to-transparent border border-white/10 px-4 sm:px-5 py-3 sm:py-4">
                  <span className="absolute left-0 top-0 h-full w-1 bg-white/60 rounded-l-lg" />

                  <div className="flex items-start gap-3 pl-3">
                    <Rocket className="h-4 w-4 text-white/70 mt-1" />
                    <p className="text-sm sm:text-md sm:text-base text-gray-200 italic">
                      {highlightsData[0].subheading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
