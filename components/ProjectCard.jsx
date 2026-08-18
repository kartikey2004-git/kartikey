"use client";

import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project, onNavigate }) {
  return (
    <div className="dark relative bg-gradient-to-br from-white/15 via-white/5 to-transparent p-px">
      <div className="relative overflow-hidden bg-black p-2">
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-500/25 blur-[90px]" />
        <div className="pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full bg-fuchsia-500/15 blur-[80px]" />

        <div className="relative flex flex-col gap-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              <Link href={`/projects/${project.slug}`} onClick={onNavigate}>
                {project.title}
              </Link>
            </h3>

            {project.currentlyBuilding && (
              <Badge variant="secondary" className="shrink-0 rounded-full">
                In progress
              </Badge>
            )}
          </div>

          <p className="body-text">
            {project.description}
          </p>

          <div className="-ml-1 flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-transparent px-2.5 py-1 font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          
        </div>

        <div className="relative px-4 pb-4 sm:px-5 sm:pb-5">
          <Link
            href={`/projects/${project.slug}`}
            onClick={onNavigate}
            className="relative block h-56 w-full overflow-hidden border border-white/10 bg-white sm:h-72"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 720px, 100vw"
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-end gap-3">
          <Button asChild variant="outline" size="sm" className="rounded-sm text-white">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <FiGithub className="h-4 w-4" />
              Source Code
            </a>
          </Button>

          {project.liveLink && (
            <Button asChild size="sm" className="rounded-sm">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
