"use client";

import { IoLogoGithub, IoGlobe, FaChevronRight } from "@/lib/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/app/data";
import Link from "next/link";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse().slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full overflow-x-hidden border-b border-border bg-background py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5 lg:px-8">
        <header className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-semibold rounded-sm sm:text-3xl">
              Things I've Built
            </h2>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Real projects. Real users. Real code.
          </p>
        </header>

        <div className="space-y-4 md:-ml-5 -ml-3">
          {visibleProjects.map((project, i) => {
            const isLast = i === visibleProjects.length - 1;
            return (
              <article
                key={i}
                className={`
    p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm
    ${!isLast ? "border-b border-border" : ""}
  `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between items-start gap-4">
                    <div className="flex-1 pr-4">
                      <h3 className="mb-2 text-lg font-semibold leading-tight break-words sm:text-xl mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <TooltipProvider delayDuration={120}>
                      <div className="flex shrink-0 gap-2">
                        {project.liveLink && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.liveLink}
                                target="_blank"
                                className="border border-border bg-card p-1.5 sm:p-2 transition hover:bg-accent rounded-sm"
                              >
                                <IoGlobe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>Live Demo</TooltipContent>
                          </Tooltip>
                        )}

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.projectLink}
                              target="_blank"
                              className="border border-border bg-card p-2 transition hover:bg-accent rounded-sm"
                            >
                              <IoLogoGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>Source Code</TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="whitespace-nowrap border border-border bg-card px-1.5 py-1 text-xs sm:px-2 sm:py-1.5 lg:px-3 lg:text-sm rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 sm:pt-3 lg:pt-4">
                    <h4 className="mb-1.5 sm:mb-2 lg:mb-3 text-xs sm:text-sm font-medium text-foreground">
                      Key Features
                    </h4>
                    <ul className="space-y-2 ">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground sm:text-sm lg:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground/40 rounded-lg" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md px-4 sm:px-5 lg:px-6 py-2 text-base sm:text-lg font-medium text-foreground shadow transition-colors"
          >
            View all projects
            <FaChevronRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

