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
  const visibleProjects = [...projects].reverse().slice(0, 4);

  return (
    <section
      id="projects"
      className="bg-black/60 text-white py-16 px-4 sm:px-8 lg:px-16 w-full"
    >
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Things I've Built
            </h2>

            <a
              href="https://github.com/kartikey2004-git"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-4 py-2
                border border-white/20 rounded-md
                bg-white/5 hover:bg-white/10 transition"
            >
              All Projects <Github className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Real projects. Real users. Real code.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {visibleProjects.map((project, i) => (
            <article
              key={i}
              className="
                bg-white/5 border border-white/10 rounded-md
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="relative h-42.5 sm:h-55 lg:h-65 overflow-hidden">
                <div
                  className={`absolute inset-0 ${gradientMap[project.bg]}`}
                />

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-contain
                    translate-x-4 sm:translate-x-8
                    translate-y-6 sm:translate-y-10
                    transition-transform duration-700
                  "
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-base sm:text-lg font-semibold leading-tight">
                    {project.title}
                  </h3>

                  <TooltipProvider delayDuration={120}>
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
                        <TooltipContent>GitHub</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[13px] px-2 py-1 rounded
                        bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.tech.length > 5 && (
                    <span className="text-[13px] px-2 py-1 rounded bg-white/5 text-white/60">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span
                    className={`inline-flex items-center gap-2 text-[13px] px-2 py-1 rounded-full ${
                      project.currentlyBuilding
                        ? "bg-red-500/15 text-red-400"
                        : "bg-green-500/15 text-green-400"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        project.currentlyBuilding
                          ? "bg-red-400"
                          : "bg-green-400"
                      }`}
                    />

                    {project.currentlyBuilding
                      ? "Building"
                      : "All Systems Operational"}
                  </span>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm text-white/70 hover:text-white flex items-center gap-1"
                  >
                    View <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="
      inline-flex items-center gap-2
      px-5 py-2 text-sm font-medium
      rounded-md
      border border-white/20
      bg-white/5
      text-white
      hover:bg-white/10
      transition
    "
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
