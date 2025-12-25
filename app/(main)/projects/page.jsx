"use client";

import { ArrowRight, Github, Globe } from "lucide-react";
import { gradientMap, projects } from "@/app/data";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  const sortedProjects = [...projects].reverse();

  return (
    <section
      id="projects"
      className="relative bg-black/60 text-white py-20 px-6 sm:px-10 overflow-hidden pt-36"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-gray-400 max-w-3xl text-sm sm:text-base md:text-lg leading-snug text-left">
              Featured
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight text-left">
              Projects
            </p>
          </div>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/20 text-xs sm:text-sm font-medium backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all inline-flex items-center gap-2 rounded-md"
          >
            Github <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {sortedProjects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 
          transition-all duration-300 hover:shadow-sm hover:shadow-white/5 rounded-sm"
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

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-semibold">
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
                            <span className="text-xs">Live Project</span>
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
                          <span className="text-xs">Source Code</span>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                <p className="text-sm text-gray-400/90">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 py-1 border border-white/10 bg-white/5 text-white/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-[10px] sm:text-xs px-2 py-1 bg-white/5 text-white/60 rounded-md">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  {project.currentlyBuilding ? (
                    <span
                      className="inline-flex items-center gap-2
      px-4 py-2 text-sm font-medium rounded-full
      bg-red-500/10 text-red-400 border border-red-500/20
      shadow-[0_0_18px_-10px_rgba(239,68,68,0.6)]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      Building
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2
      px-4 py-2 text-sm font-medium rounded-full
      bg-green-500/10 text-green-400 border border-green-500/20
      shadow-[0_0_18px_-10px_rgba(34,197,94,0.6)]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      All Systems Operational
                    </span>
                  )}

                  <Link
                    href={`/projects/${
                      project.slug ??
                      project.title.toLowerCase().replace(/\s+/g, "-")
                    }`}
                    className="group inline-flex items-center gap-1.5
      text-sm text-white/60 hover:text-white transition hover:underline"
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
      </div>
    </section>
  );
}
