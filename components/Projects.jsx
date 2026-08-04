"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/app/data";
import Link from "next/link";
import { useClickSound } from "@/hooks/useClickSound";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse().slice(0, 4);

  const playNavigateSound = useClickSound("navigate");

  return (
    <section id="projects" className="py-8 p-2 -mt-4">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8">
        <div className="mb-4 sm:mb-8 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold rounded-sm sm:text-3xl">
            Projects
          </h2>

          <Button
            asChild
            variant="link"
            size="sm"
            className="group no-underline hover:no-underline"
          >
            <Link href="/projects" onClick={playNavigateSound}>
              View all projects
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="space-y-2 md:-ml-5 -ml-3">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-transparent border-none shadow-none p-3 sm:p-5 lg:p-6 ${
                index !== visibleProjects.length - 1
                  ? "border-b border-border/50"
                  : ""
              }`}
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-base font-semibold text-foreground sm:text-xl">
                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={playNavigateSound}
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2 -ml-1">
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

                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={playNavigateSound}
                    className="shrink-0 text-[14px] sm:text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    View
                    <ArrowRight className="w-3 h-3 mt-1" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
