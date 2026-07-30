import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/app/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PathnameDisplay from "@/components/PathnameDisplay";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Kartikey`,
      description: project.description,
      url: `https://kartikey.dev/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8 py-16">
        <PathnameDisplay />

        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to projects
        </Link>

        <article>
          <div className="overflow-hidden border border-border/50">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold sm:text-3xl text-foreground">
                {project.title}
              </h1>
              {project.currentlyBuilding && (
                <Badge variant="outline" className="text-muted-foreground">
                  In progress
                </Badge>
              )}
            </div>

            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="font-mono text-xs px-2.5 py-1 bg-none border-none"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              <Button asChild variant="outline" size="sm">
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
                <Button asChild size="sm">
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
          </header>

          {project.features?.length > 0 && (
            <section className="mt-10 border-t border-border/50 pt-8">
              <h2 className="text-lg font-semibold tracking-tight">
                Features
              </h2>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
