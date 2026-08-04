"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/app/data";
import { useClickSound } from "@/hooks/useClickSound";
import PathnameDisplay from "@/components/PathnameDisplay";

export default function ProjectsPage() {
  const allProjects = [...projects].reverse();
  const playNavigateSound = useClickSound("navigate");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8 py-16">
        <div className="mb-12">
          <PathnameDisplay />
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-md text-muted-foreground">
            Real projects. Real users. Real code.
          </p>
        </div>

        <div className="space-y-2 md:-ml-5 -ml-3">
          {allProjects.map((project, index) => (
            <Card
              key={project.title}
              id={project.slug}
              className={`bg-transparent border-none shadow-none p-3 sm:p-5 lg:p-6 scroll-mt-20 ${
                index !== allProjects.length - 1
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
    </div>
  );
}
