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
      className="bg-black/60 text-white py-28 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-400 text-xs sm:text-sm">Featured</p>
            <h2 className="text-xl sm:text-3xl font-semibold">Projects</h2>
          </div>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-4 py-2
              border border-white/20 rounded-md
              bg-white/5 hover:bg-white/10 transition"
          >
            Github <Github className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            className="flex md:hidden items-center gap-2 px-4 py-2
              border border-white/20 rounded-md
              bg-white/5 hover:bg-white/10 transition"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {sortedProjects.map((project, index) => (
            <article
              key={index}
              className="bg-white/5 border border-white/10 rounded-md overflow-hidden
              transition hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-55 overflow-hidden">
                <div
                  className={`absolute inset-0 ${gradientMap[project.bg]}`}
                />

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-contain
                    translate-x-4 sm:translate-x-8
                    translate-y-6
                    transition-transform duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {project.title}
                  </h3>

                  <TooltipProvider delayDuration={150}>
                    <div className="flex gap-2">
                      {project.liveLink && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              className="p-2 rounded-md bg-white/5 border border-white/10"
                            >
                              <Globe className="w-4 h-4" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>Live</TooltipContent>
                        </Tooltip>
                      )}

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.projectLink}
                            target="_blank"
                            className="p-2 rounded-md bg-white/5 border border-white/10"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>Code</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded-md
                        bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/60">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-2">
                  <span
                    className={`px-3 py-1 text-xs rounded-full
                      ${
                        project.currentlyBuilding
                          ? "bg-red-500/10 text-red-400 border border-red-500/20"
                          : "bg-green-500/10 text-green-400 border border-green-500/20"
                      }
                    `}
                  >
                    {project.currentlyBuilding ? "Building" : "Live"}
                  </span>

                  <Link
                    href={`/projects/${
                      project.slug ??
                      project.title.toLowerCase().replace(/\s+/g, "-")
                    }`}
                    className="flex items-center gap-1 text-xs text-white/70 hover:text-white"
                  >
                    View <ArrowRight className="w-4 h-4" />
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
