"use client";

import { IoLogoGithub, IoGlobe, FaChevronRight } from "@/lib/icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/app/data";

export default function ProjectsPage() {
  const allProjects = [...projects].reverse();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Real projects. Real users. Real code. Explore my complete portfolio
            of work.
          </p>
        </div>

        <div className="space-y-8">
          {allProjects.map((project, i) => (
            <article
              key={i}
              className="border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="w-full sm:w-auto">
                    <h3 className="mb-3 text-2xl font-semibold leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <TooltipProvider delayDuration={120}>
                    <div className="flex shrink-0 gap-2">
                      {project.liveLink && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={`https://markstack-app.vercel.app/blogs/${project.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                              Read more
                              <FaChevronRight className="w-4 h-4" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>Live Demo</TooltipContent>
                        </Tooltip>
                      )}

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.projectLink}
                            target="_blank"
                            className="border border-border bg-card p-2 transition hover:bg-accent"
                          >
                            <IoLogoGithub className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>Source Code</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="whitespace-nowrap border border-border bg-card px-3 py-1.5 text-sm rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <h4 className="mb-3 text-base font-medium text-foreground">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
