"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/app/data";
import { useClickSound } from "@/hooks/useClickSound";
import PathnameDisplay from "@/components/PathnameDisplay";

export default function ProjectsPage() {
  const reversedAll = [...projects].reverse();
  const recentProjects = reversedAll.slice(0, 5);
  const earlierProjects = reversedAll.slice(5);

  const playNavigateSound = useClickSound("navigate");
  const prefersReducedMotion = useReducedMotion();

  const [recentApi, setRecentApi] = useState(null);
  const [earlierApi, setEarlierApi] = useState(null);

  const handlePrev = () => {
    if (earlierApi?.canScrollPrev()) {
      earlierApi.scrollPrev();
    } else if (recentApi?.canScrollPrev()) {
      recentApi.scrollPrev();
    }
  };

  const handleNext = () => {
    if (recentApi?.canScrollNext()) {
      recentApi.scrollNext();
    } else if (earlierApi?.canScrollNext()) {
      earlierApi.scrollNext();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8 py-16">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <PathnameDisplay />
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-2 text-md text-muted-foreground">
              Real projects. Real users. Real code.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="static size-8 translate-x-0 translate-y-0 rounded-full"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="static size-8 translate-x-0 translate-y-0 rounded-full"
              onClick={handleNext}
              aria-label="Next project"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>

        <section className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
            Recent
          </p>

          <Carousel
            opts={{ align: "start", duration: prefersReducedMotion ? 0 : 20 }}
            setApi={setRecentApi}
            aria-label="Recent projects"
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {recentProjects.map((project) => (
                <CarouselItem key={project.title} className="basis-full pl-4">
                  <ProjectCard project={project} onNavigate={playNavigateSound} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className="mt-16 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
            Earlier
          </p>

          <Carousel
            opts={{ align: "start", duration: prefersReducedMotion ? 0 : 20 }}
            setApi={setEarlierApi}
            aria-label="Earlier projects"
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {earlierProjects.map((project) => (
                <CarouselItem key={project.title} className="basis-full pl-4">
                  <ProjectCard project={project} onNavigate={playNavigateSound} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </div>
    </div>
  );
}
