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

export default function ProjectsSection() {
  const sortedProjects = useMemo(() => [...projects].reverse().slice(0, 4), []);

  return (
    <section
      id="projects"
      className="relative bg-black/60 text-white py-20 px-6 sm:px-10 overflow-hidden"
    >
      {/* Floating background subtle glow */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12 opacity-0 animate-fadeUp [animation-delay:0.15s]">
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight">
              Featured
            </h2>
            <p className="text-gray-400 max-w-3xl text-sm sm:text-base md:text-lg leading-snug text-left">
              Projects
            </p>
          </div>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-white/20 text-xs sm:text-sm font-medium
        backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all rounded-md 
        inline-flex items-center gap-2 hover:scale-105 active:scale-95"
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
          transition-all duration-300 hover:shadow-sm hover:shadow-white/10 rounded-md 
          hover:-translate-y-[4px] opacity-0 animate-fadeUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative w-full h-44 md:h-40 lg:h-44 overflow-hidden rounded-t-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 group-hover:text-white/80 transition-colors line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {" "}
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 py-1 border border-white/10 bg-white/5 text-white/80 rounded-md"
                    >
                      {" "}
                      {tech}{" "}
                    </span>
                  ))}{" "}
                  {project.tech.length > 5 && (
                    <span className="text-[10px] sm:text-xs px-2 py-1 bg-white/5 text-white/60 rounded-md">
                      {" "}
                      +{project.tech.length - 5} more{" "}
                    </span>
                  )}{" "}
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => window.open(project.projectLink, "_blank")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90
                px-4 py-2 border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 
                transition-all rounded-md hover:scale-105 active:scale-95"
                  >
                    Live Demo <Globe className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="w-full flex justify-center mt-10 opacity-0 animate-fadeUp [animation-delay:0.65s]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20
        text-xs sm:text-sm font-medium backdrop-blur-md bg-white/5 hover:scale-105 active:scale-95
        transition-all rounded-md"
          >
            Show All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
