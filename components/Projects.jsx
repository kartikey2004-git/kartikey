"use client";

import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/app/data";
import { useClickSound } from "@/hooks/useClickSound";

export default function ProjectsSection() {
  const recentProjects = [...projects].reverse().slice(0, 4);

  const playNavigateSound = useClickSound("navigate");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-12 p-2 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 sm:mb-8 flex items-center justify-between gap-4">
          <h2 className="heading-lg">
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
            {recentProjects.map((project) => (
              <CarouselItem key={project.title} className="basis-full pl-4">
                <ProjectCard
                  project={project}
                  onNavigate={playNavigateSound}
                />
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
