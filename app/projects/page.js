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
          {allProjects.map((project, i) => {
            const isExpanded = expandedProjects.includes(i);
            return (
              <>
                <div
                  key={i}
                  className="border border-dashed border-black/20 dark:border-white/20 flex flex-col max-w-4xl w-full mx-auto p-6 relative"
                >
                  {/* Top Left */}
                  <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-foreground" />

                  {/* Top Right */}
                  <div className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-foreground" />

                  {/* Bottom Left */}
                  <div className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-foreground" />

                  {/* Bottom Right */}
                  <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-foreground" />

                  <div
                    className="flex items-center justify-between cursor-pointer"
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
                    <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="overflow-hidden  border border-border/50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">
                          Key Features
                        </h4>

                        <ul className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                            >
                              <div className="mt-2 h-1.75 w-1.75 rounded-full bg-primary shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">
                          Tech Stack
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((techItem, idx) => (
                            <Badge
                              key={idx}
                              variant="normal"
                              className="font-mono text-xs px-2.5 py-1"
                            >
                              {techItem}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
