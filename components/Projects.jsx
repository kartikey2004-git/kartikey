"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects, gradientMap } from "@/app/data";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse();

  return (
    <section
      id="projects"
      className="bg-black/60 text-white py-16 px-4 sm:px-8 lg:px-16 w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Things I've Built
            </h2>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Real projects. Real users. Real code.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
          {visibleProjects.map((project, i) => {
            const isRight = (i + 1) % 2 === 0;
            const isLastRow = i >= visibleProjects.length - 2;
            return (
              <article
                key={i}
                className={`
    p-4 sm:p-5 md:p-6
    transition-all duration-300 hover:bg-white/5 cursor-pointer
    ${isRight && !isLastRow ? "md:border-l border-l border-white/10" : ""}
    ${!isLastRow ? "border-b border-white/10" : ""}
    ${isRight && isLastRow ? "md:border-l border-l border-t border-white/10" : ""}
    ${!isRight && isLastRow ? "border-t border-white/10" : ""}
  `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="w-full sm:w-auto">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight mb-2 break-words">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <TooltipProvider delayDuration={120}>
                      <div className="flex gap-2 flex-shrink-0">
                        {project.liveLink && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.liveLink}
                                target="_blank"
                                className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
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
                              className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
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
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-full
                        bg-white/5 border border-white/10 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <h4 className="text-sm font-medium text-white mb-2 sm:mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
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
