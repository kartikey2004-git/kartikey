"use client";

import { Github, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/app/data";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse();

  return (
    <section
      id="projects"
      className="w-full overflow-x-hidden border-b border-border bg-background py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              Things I've Built
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Real projects. Real users. Real code.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-0 rounded-lg border border-border md:grid-cols-2">
          {visibleProjects.map((project, i) => {
            const isRight = (i + 1) % 2 === 0;
            const isLastRow = i >= visibleProjects.length - 2;
            return (
              <article
                key={i}
                className={`
    p-4 sm:p-5 md:p-6
    cursor-pointer transition-colors duration-300 hover:bg-accent/60
    ${isRight && !isLastRow ? "border-l border-border md:border-l" : ""}
    ${!isLastRow ? "border-b border-border" : ""}
    ${isRight && isLastRow ? "border-l border-t border-border md:border-l" : ""}
    ${!isRight && isLastRow ? "border-t border-border" : ""}
  `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="w-full sm:w-auto">
                      <h3 className="mb-2 text-lg font-semibold leading-tight wrap-break-word sm:text-xl md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                                className="rounded-md border border-border bg-card p-2 transition hover:bg-accent"
                              >
                                <Globe className="w-4 h-4" />
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
                              className="rounded-md border border-border bg-card p-2 transition hover:bg-accent"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>Source Code</TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="whitespace-nowrap rounded-md border border-border bg-card px-2 py-1.5 text-xs sm:px-3 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <h4 className="mb-2 text-sm font-medium text-foreground sm:mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
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
      </div>
    </section>
  );
}
