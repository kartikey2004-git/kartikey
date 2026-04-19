import { IoLogoGithub, IoGlobe } from "@/lib/icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/app/data";

export const metadata = {
  title: "Projects",
  description:
    "Explore my complete portfolio of work. Real projects, real users, real code built with modern web technologies.",
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "full stack",
    "react",
    "next.js",
    "javascript",
    "typescript",
  ],
  openGraph: {
    title: "Projects | Kartikey",
    description:
      "Explore my complete portfolio of work. Real projects, real users, real code built with modern web technologies.",
    url: "https://kartikcodes.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  const allProjects = [...projects].reverse();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-md text-muted-foreground">
            Real projects. Real users. Real code.
          </p>
        </div>

        <div className="space-y-8 md:-ml-7 -ml-5">
          {allProjects.map((project, i) => (
            <article
              key={i}
              className={`p-6 sm:p-8 shadow-sm ${i !== allProjects.length - 1 ? "border-b border-border" : ""}}`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="w-full sm:w-auto">
                    <h3 className="mb-3 text-xl font-semibold leading-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground sm:text-sm lg:text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <TooltipProvider delayDuration={120}>
                    <div className="flex shrink-0 gap-2">
                      {project.liveLink && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              className="border border-border bg-card p-1.5 sm:p-2 transition hover:bg-accent rounded-sm"
                            >
                              <IoGlobe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                            className="border border-border bg-card p-1.5 sm:p-2 transition hover:bg-accent rounded-sm"
                          >
                            <IoLogoGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>Source Code</TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                </div>

                <div className="pt-2">
                  <h4 className="mb-3 text-foreground text-xs sm:text-sm">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground sm:text-sm lg:text-sm rounded-lg"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground/40  rounded-lg" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="whitespace-nowrap px-3 py-1.5 text-xs lg:text-sm rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
