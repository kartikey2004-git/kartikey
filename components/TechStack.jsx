"use client";

import { IoRocket } from "@/lib/icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { technologies, highlightsData, highlights } from "@/app/data";

export default function AboutMeSection() {
  const visibleTech = technologies;

  return (
    <section
      id="how-i-build"
      className="w-full overflow-x-hidden border-b border-border bg-background py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
        <div className="space-y-8 mb-4">
          <h2 className="text-xl font-semibold rounded-sm sm:text-3xl">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-12">
          {/* Technologies Section */}
          <div className="space-y-4 w-full md:-ml-5">
            <TooltipProvider delayDuration={100}>
              <div className="grid grid-cols-8 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 justify-items-center w-full">
                {visibleTech.map((tech, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="flex h-12 w-12 cursor-pointer items-center justify-center bg-transparent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-sm">
                        <img
                          src={tech.icon}
                          alt={tech.iconname}
                          className="h-6 w-6 opacity-90 hover:opacity-100 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
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
          </div>

          {/* Who Am I Section */}
          <div className="space-y-4 w-full">

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
                  Kartikey Bhatnagar
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
                      className="flex items-center gap-2 sm:gap-2.5 text-xs text-muted-foreground sm:text-sm"
                    >
                      <Icon className="h-3.5 w-3.5 text-foreground/70 flex-shrink-0 mt-0.5 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm leading-relaxed">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-6 sm:mt-8 max-w-full border border-border bg-card px-3 py-2.5 sm:mt-8 sm:max-w-none sm:px-4 sm:py-3 lg:px-5 lg:py-4">
                  <span className="absolute left-0 top-0 h-full w-1 bg-foreground/60" />

                  <div className="flex items-start gap-3 pl-3">
                    <IoRocket className="mt-1 h-3.5 w-3.5 text-foreground/70 sm:h-4 sm:w-4" />
                    <p className="text-xs italic text-muted-foreground sm:text-sm">
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
