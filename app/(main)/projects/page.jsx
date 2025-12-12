"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { Github, Globe } from "lucide-react";
import { projects } from "@/app/data";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

export default function Projects() {
  const sortedProjects = useMemo(() => [...projects].reverse(), []);

  return (
    <section
      id="projects"
      className="relative bg-black/60 text-white py-20 px-6 sm:px-10 overflow-hidden pt-36"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-gray-400 max-w-3xl text-sm sm:text-base md:text-lg leading-snug text-left">
              Featured
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight text-left">
              Projects
            </p>
          </div>

          {/* RIGHT SIDE */}
          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/20 text-xs sm:text-sm font-medium
        backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all inline-flex items-center gap-2 rounded-md"
          >
            Github <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {sortedProjects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 
          transition-all duration-300 hover:shadow-sm hover:shadow-white/5 rounded-sm"
            >
              <div className="relative w-full h-44 md:h-40 lg:h-44 overflow-hidden rounded-t-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 py-1 border border-white/10 bg-white/5 text-white/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-[10px] sm:text-xs px-2 py-1 bg-white/5 text-white/60 rounded-md">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => window.open(project.projectLink, "_blank")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90
                px-4 py-2 border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all rounded-md"
                  >
                    Live Demo
                    <Globe className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
