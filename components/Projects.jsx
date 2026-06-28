"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
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
import { useClickSound } from "@/hooks/useClickSound";
import Image from "next/image";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse().slice(0, 4);

  const playNavigateSound = useClickSound("navigate");

  return (
    <section id="projects" className="w-full bg-background p-2">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-8">
          <h2 className="text-2xl ml-5 sm:text-3xl font-semibold tracking-tight">
            Projects
          </h2>
        </header>

        <div className="space-y-10">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className={`relative bg-background p-5 sm:p-6 space-y-5 ${
                index !== visibleProjects.length - 1
                  ? "border-b border-border/50"
                  : ""
              }`}
            >
              <div className="overflow-hidden border border-border/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <TooltipProvider delayDuration={120}>
                  <div className="flex shrink-0 gap-2">
                    {project.liveLink && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={playNavigateSound}
                            className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                          >
                            <ArrowUpRight className="h-4 w-4" />
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
                          rel="noopener noreferrer"
                          onClick={playNavigateSound}
                          className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        >
                          <FiGithub className="h-4 w-4" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>Source Code</TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>

          
              <p className="text-sm sm:text-base leading-7 text-muted-foreground">
                {project.description}
              </p>

        
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="normal"
                    className="font-mono text-xs px-2.5 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            onClick={playNavigateSound}
            className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold hover:text-muted-foreground transition-colors"
          >
            View all projects
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
