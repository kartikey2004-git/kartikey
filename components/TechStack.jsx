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
      className="w-full overflow-x-hidden border-b border-border bg-background py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:hidden gap-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Tech Stack
          </h2>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-left">
            Tech Stack
          </h2>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-left">
            Who Am I
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Technologies Grid - Mobile First */}
          <div className="flex flex-col lg:hidden space-y-4 w-full">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Technologies
            </h3>
            <TooltipProvider delayDuration={100}>
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-8 gap-4 sm:gap-5 md:gap-6 justify-items-center w-full">
                {visibleTech.map((tech, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="flex h-14 w-14 cursor-pointer items-center justify-center border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent sm:h-16 sm:w-16">
                        <img
                          src={tech.icon}
                          alt={tech.iconname}
                          className="h-8 w-8 opacity-90 hover:opacity-100 sm:h-9 sm:w-9"
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

          {/* Who Am I Section - Mobile First */}
          <div className="flex flex-col lg:hidden space-y-4 w-full">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Who Am I
            </h2>
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
                      className="flex items-center gap-2.5 text-sm text-muted-foreground sm:text-base"
                    >
                      <Icon className="h-4 w-4 text-foreground/70 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base leading-relaxed">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-8 max-w-full border border-border bg-card px-4 py-3 sm:mt-10 sm:max-w-none sm:px-5 sm:py-4">
                  <span className="absolute left-0 top-0 h-full w-1 bg-foreground/60" />

                  <div className="flex items-start gap-3 pl-3">
                    <IoRocket className="mt-1 h-4 w-4 text-foreground/70" />
                    <p className="text-sm italic text-muted-foreground sm:text-base">
                      {highlightsData[0].subheading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
            {/* Technologies Grid - Desktop */}
            <div className="space-y-4 w-full">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Technologies
              </h3>
              <TooltipProvider delayDuration={100}>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-5 md:gap-6 justify-items-center w-full">
                  {visibleTech.map((tech, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <div className="flex h-14 w-14 cursor-pointer items-center justify-center border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent sm:h-16 sm:w-16">
                          <img
                            src={tech.icon}
                            alt={tech.iconname}
                            className="h-8 w-8 opacity-90 hover:opacity-100 sm:h-9 sm:w-9"
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

            <div className="hidden lg:block w-px bg-border self-stretch mx-6" />

            {/* About Section - Desktop */}
            <div className="space-y-4 w-full lg:max-w-md">
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
                    Kartikey Bhatnagar
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    I architect full-stack applications that don't fall apart at
                    3 AM. React, Node.js, real-time systems, and the occasional
                    AI integration when it actually makes sense (not everything
                    needs GPT-5). Currently building tools that developers
                    actually want to use.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="mt-6 sm:mt-8 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-3">
                    {highlights.map(({ Icon, text }, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground sm:text-base"
                      >
                        <Icon className="h-4 w-4 text-foreground/70 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base leading-relaxed">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-8 max-w-full border border-border bg-card px-4 py-3 sm:mt-10 sm:max-w-none sm:px-5 sm:py-4 md:max-w-lg md:mx-auto lg:max-w-full lg:mx-0">
                    <span className="absolute left-0 top-0 h-full w-1 bg-foreground/60" />

                    <div className="flex items-start gap-3 pl-3">
                      <IoRocket className="mt-1 h-4 w-4 text-foreground/70" />
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
      </div>
    </section>
  );
}
