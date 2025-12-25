"use client";

import { projects } from "@/app/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-14">
        <div className="relative w-full aspect-video overflow-hidden rounded-md sm:rounded-lg lg:rounded-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 70vw,50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            {project.currentlyBuilding ? (
              <span
                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-xl
                bg-red-500/15 text-red-400 border border-red-500/20"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Building
              </span>
            ) : (
              <span
                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-xl
                bg-green-500/15 text-green-400 border border-green-500/20"
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Live & Operational
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {project.title}
          </h1>

          <p className="max-w-3xl text-white/70 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2
                  rounded-md bg-white/5 border border-white/10
                  text-sm hover:bg-white/10 transition"
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
            )}

            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2
                rounded-md bg-white/5 border border-white/10
                text-sm hover:bg-white/10 transition"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Key Features</h2>

            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white/40 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Tech Stack</h2>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-md
                    bg-white/5 border border-white/10
                    text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
