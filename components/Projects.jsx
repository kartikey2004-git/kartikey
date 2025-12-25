"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { ArrowRight, Github, Globe } from "lucide-react";
import { gradientMap, projects } from "@/app/data";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectsSection() {
  const sortedProjects = projects.reverse().slice(0, 4);

  return (
    <section
      id="projects"
      className="relative bg-black/60 text-white py-20 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex justify-between items-start mb-14 opacity-0 animate-fadeUp [animation-delay:0.15s]">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-sm sm:text-base">Featured</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Projects
            </h2>
          </div>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5
              border border-white/20 rounded-md
              bg-white/5 backdrop-blur-md
              text-xs sm:text-sm font-medium
              transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            Github <Github className="w-4 h-4" />
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden
                bg-white/5 backdrop-blur-lg
                border border-white/10 rounded-md
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-white/10
                opacity-0 animate-fadeUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative w-full h-50 overflow-hidden">
                <div
                  className={`absolute inset-0 ${gradientMap[project.bg]}`}
                />

                <div className="absolute inset-0 flex items-center justify-end pr-10 perspective-[1400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      rounded-t-lg
                      transform-gpu
                      translate-x-10
                      transition-transform duration-700
                      mt-20 -mr-4
                    "
                  />
                </div>
              </div>

              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>

                  <TooltipProvider delayDuration={150}>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.liveLink && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-md
                                bg-white/5 border border-white/10
                                text-white/70 transition
                                hover:text-white hover:bg-white/10"
                            >
                              <Globe className="w-5 h-5" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <span className="text-xs">View Website</span>
                          </TooltipContent>
                        </Tooltip>
                      )}

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-md
                              bg-white/5 border border-white/10
                              text-white/70 transition
                              hover:text-white hover:bg-white/10"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <span className="text-xs">View Github</span>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                <p className="text-sm text-gray-400/90">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] sm:text-xs px-2 py-1
                        rounded-md bg-white/5 border border-white/10
                        text-white/80"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.tech.length > 5 && (
                    <span className="text-[11px] sm:text-xs px-2 py-1 rounded-md bg-white/5 text-white/60">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  {project.currentlyBuilding ? (
                    <span
                      className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-xl
                      bg-red-500/15 text-red-400 border border-red-500/20"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      Building
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-xl
                      bg-green-500/15 text-green-400 border border-green-500/20"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      All Systems Operational
                    </span>
                  )}

                  <Link
                    href={`/projects/${
                      project.slug ??
                      project.title.toLowerCase().replace(/\s+/g, "-")
                    }`}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm
                      text-white/60 hover:text-white transition hover:underline"
                  >
                    View Details
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-14 opacity-0 animate-fadeUp [animation-delay:0.65s]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5
              border border-white/20 rounded-md
              bg-white/5 backdrop-blur-md
              text-xs sm:text-sm font-medium
              transition-all hover:scale-105 active:scale-95"
          >
            Show All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
