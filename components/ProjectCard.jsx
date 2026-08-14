"use client";

import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project, onNavigate }) {
  return (
    <Card className="h-auto flex-col gap-0 overflow-hidden border-border/50 bg-transparent p-0 sm:h-72 sm:flex-row">
      <Link
        href={`/projects/${project.slug}`}
        onClick={onNavigate}
        className="relative block h-40 w-full shrink-0 overflow-hidden border-b border-border/50 bg-white sm:h-auto sm:w-1/2 sm:border-b-0 sm:border-r"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 384px, 100vw"
          className="object-contain"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-2 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            <Link href={`/projects/${project.slug}`} onClick={onNavigate}>
              {project.title}
            </Link>
          </h3>

          {project.currentlyBuilding && (
            <Badge variant="outline" className="shrink-0 text-muted-foreground">
              In progress
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 -ml-1">
          {project.tech.map((tech, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="bg-none px-2.5 py-1 font-mono text-xs border-none"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap justify-end gap-3 pt-2">
          <Button asChild variant="outline" size="sm" className="rounded-sm">
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
    </Card>
  );
}
