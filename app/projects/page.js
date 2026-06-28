"use client";

import { FaChevronRight, FaChevronDown } from "@/lib/icons";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/app/data";
import { useState } from "react";
import { useClickSound } from "@/hooks/useClickSound";
import PathnameDisplay from "@/components/PathnameDisplay";
import Image from "next/image";

export default function ProjectsPage() {
  const allProjects = [...projects].reverse();
  const playNavigateSound = useClickSound("navigate");

  return (
    <div className="min-h-screen bg-background text-foreground ml-3 p-2">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 py-16">
        <div className="mb-12">
          <PathnameDisplay />
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-md text-muted-foreground">
            Real projects. Real users. Real code.
          </p>
        </div>

        <div className="space-y-8 -ml-5">
          {allProjects.map((project, index) => {
            return (
              <article
                  key={project.title}
                  className={`relative bg-background p-5 sm:p-6 space-y-5 ${
                    index !== allProjects.length - 1
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
