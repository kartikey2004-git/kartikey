"use client";

import { Rocket } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { technologies, highlightsData, highlights } from "@/app/data";
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
      className="w-full overflow-x-hidden border-b border-border bg-background py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 mb-8 items-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Tech Stack
          </h2>

          <div className="hidden lg:block" />

          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:pl-8">
            Who Am I
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-start">
          {/* Technologies Grid */}
          <div className="space-y-4 w-full">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Technologies
            </h3>
            <TooltipProvider delayDuration={100}>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 place-items-center">
                {visibleTech.map((tech, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                        <img
                          src={tech.icon}
                          alt={tech.iconname}
                          className="h-6 w-6 opacity-90 hover:opacity-100 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
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
                      page === p ? "bg-foreground" : "bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <Separator
            orientation="vertical"
            className="ml-2 hidden h-full bg-border lg:block"
          />

          {/* About Section */}
          <div className="space-y-4 lg:pl-8 w-full">
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
                  Kartikey Bhatnagar
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                      className="flex items-center gap-2 text-sm text-muted-foreground sm:text-base"
                    >
                      <Icon className="h-4 w-4 text-foreground/70" />
                      <span className="text-sm sm:text-base">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-8 max-w-full rounded-lg border border-border bg-card px-4 py-3 sm:mt-10 sm:max-w-3xl sm:px-5 sm:py-4">
                  <span className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-foreground/60" />

                  <div className="flex items-start gap-3 pl-3">
                    <Rocket className="mt-1 h-4 w-4 text-foreground/70" />
                    <p className="text-sm italic text-muted-foreground sm:text-base">
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
