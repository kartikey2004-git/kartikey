"use client";

import { FaChevronRight, FaChevronDown } from "@/lib/icons";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/app/data";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse().slice(0, 4);
  const [expandedProject, setExpandedProject] = useState("all");

  const toggleProject = () => {
    setExpandedProject(expandedProject === "all" ? null : "all");
  };

  return (
    <section
      id="projects"
      className="w-full overflow-x-hidden border-b border-border bg-background py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5 lg:px-8">
        <header className="mb-2 sm:mb-4 lg:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-semibold rounded-sm sm:text-3xl">
              Projects
            </h2>
          </div>
        </header>

        <div className="space-y-3 -ml-5">
          {visibleProjects.map((project, i) => {
            const isExpanded = expandedProject === "all" || expandedProject === i;
            return (
              <div key={i} className="rounded-lg overflow-hidden">
                {/* Project Header */}
                <div
                  className="flex items-center justify-between p-4 cursor-pointer "
                  onClick={() => toggleProject()}
                >
                  <div className="flex items-center gap-3">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      {isExpanded ? (
                        <FaChevronDown className="w-4 h-4" />
                      ) : (
                        <FaChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    <h3 className="sm:text-lg text-md font-semibold">{project.title}</h3>
                  </div>

                  <TooltipProvider delayDuration={120}>
                    <div className="flex shrink-0 gap-2">
                      {project.liveLink && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2"
                            >
                              <ArrowUpRight className="w-4 h-4" />
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
                            onClick={(e) => e.stopPropagation()}
                            className="p-2"
                          >
                            <FiGithub className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>Source Code</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2 mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-lg md:text-sm text-muted-foreground"
                          >
                            <span className="mt-2.5 sm:mt-3 h-1 w-1 shrink-0 bg-foreground/40 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-[12px] px-2 py-1 bg-transparent font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>


                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md px-4 sm:px-5 lg:px-6 py-2 sm:text-lg text-md font-semibold text-foreground shadow transition-colors"
          >
            View all projects
            <ArrowUpRight className="ml-1 sm:ml-1 w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

