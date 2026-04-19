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

export default function ProjectsPage() {
  const allProjects = [...projects].reverse();
  const [expandedProjects, setExpandedProjects] = useState(
    allProjects.map((_, i) => i),
  ); // Initially all projects open
  const playOpenSound = useClickSound("open");
  const playCloseSound = useClickSound("close");
  const playNavigateSound = useClickSound("navigate");

  const toggleProject = (index) => {
    const isCurrentlyExpanded = expandedProjects.includes(index);
    if (isCurrentlyExpanded) {
      playCloseSound();
    } else {
      playOpenSound();
    }

    setExpandedProjects((prev) => {
      if (prev.includes(index)) {
        // Remove this project from expanded list
        return prev.filter((i) => i !== index);
      } else {
        // Add this project to expanded list
        return [...prev, index];
      }
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-md text-muted-foreground">
            Real projects. Real users. Real code.
          </p>
        </div>

        <div className="space-y-3 -ml-5">
          {allProjects.map((project, i) => {
            const isExpanded = expandedProjects.includes(i);
            return (
              <div key={i} className="rounded-lg overflow-hidden">
                {/* Project Header */}
                <div
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => toggleProject(i)}
                >
                  <div className="flex items-center gap-3">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      {isExpanded ? (
                        <FaChevronDown className="w-4 h-4" />
                      ) : (
                        <FaChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    <h3 className="sm:text-lg text-md font-semibold">
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
                              onClick={(e) => {
                                e.stopPropagation();
                                playNavigateSound();
                              }}
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
                            onClick={(e) => {
                              e.stopPropagation();
                              playNavigateSound();
                            }}
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
                      <h4 className="mb-3 text-foreground text-xs sm:text-sm">
                        Key Features
                      </h4>
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
      </div>
    </div>
  );
}
