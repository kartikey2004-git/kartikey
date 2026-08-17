"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { projects } from "@/app/data";
import { useClickSound } from "@/hooks/useClickSound";

export default function ProjectsSection() {
  const visibleProjects = [...projects].reverse();

  const playNavigateSound = useClickSound("navigate");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-8 p-2 -mt-4">
      <div className="mx-auto max-w-3xl px-3 p sm:px-5 lg:px-5">
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

        <Carousel
          opts={{ align: "start", duration: prefersReducedMotion ? 0 : 20 }}
          aria-label="Featured projects"
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {visibleProjects.map((project) => (
              <CarouselItem
                key={project.title}
                className="basis-full pl-4"
              >
                <Card className="h-auto flex-col gap-0 overflow-hidden border-border/50 bg-transparent p-0 sm:h-76 sm:flex-row">
                  
                  <div className="flex min-w-0 flex-1 flex-col gap-2 p-3 sm:p-4 mt-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">
                        <Link
                          href={`/projects/${project.slug}`}
                          onClick={playNavigateSound}
                        >
                          {project.title}
                        </Link>
                      </h3>

                      {project.currentlyBuilding && (
                        <Badge
                          variant="outline"
                          className="shrink-0 text-muted-foreground"
                        >
                          In progress
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap -ml-1 mt-4">
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

                    <div className="mt-auto flex flex-wrap gap-3 pt-2 justify-end">
                      <Button asChild variant="outline" size="sm" className={"rounded-sm"}>
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className="h-4 w-4" />
                          Source Code
                        </a>
                      </Button>

                      {project.liveLink && (
                        <Button asChild size="sm" className={"rounded-sm"}>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={playNavigateSound}
                    className="relative block h-40 w-full shrink-0 overflow-hidden border-b bg-white sm:h-auto sm:w-1/2 sm:border-b-0 sm:border-r"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 384px, 100vw"
                      className="object-contain"
                    />
                  </Link>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-5 flex items-center justify-end gap-2">
            <CarouselPrevious className="static size-8 translate-x-0 translate-y-0" />
            <CarouselNext className="static size-8 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
