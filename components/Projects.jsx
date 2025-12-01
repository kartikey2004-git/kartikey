"use client";

import { FaServer, FaDatabase, FaCloud, FaHammer } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdGridView } from "react-icons/md";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

import { projects } from "@/app/data/index.js";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Projects() {
  const sortedProjects = projects.reverse();

  return (
    <section
      id="projects"
      className="relative bg-black/60 text-white py-24 px-6 sm:px-10 overflow-hidden"
    >
      {/* Fix: stable dark layer */}
      <div className="absolute inset-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl sm:mb-0 font-semibold text-white mb-2 tracking-tight text-left ${dancingScript.variable}`}
          >
            My <span>Projects</span>
          </h1>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-3 border border-white/20 rounded-full text-sm font-medium backdrop-blur-md transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              All Projects <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sortedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 transition-all"
            >
              {/* Fix: smooth hover white layer instead of flashing */}
              <div className="absolute inset-0 bg-white opacity-0  pointer-events-none"></div>

              {/* Image */}
              <div className="relative w-full h-48 sm:h-60 md:h-40 lg:h-60 xl:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
              (max-width: 1024px) 80vw,
              50vw"
                  className="object-cover object-center transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-normal mb-3 transition-colors">
                  {project.title}
                </h2>

                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-white/10 bg-white/5 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Button */}
                <button
                  onClick={() => window.open(project.projectLink, "_blank")}
                  className="px-6 py-3 rounded-full border border-zinc-800 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/10"
                >
                  Visit Demo
                  <ArrowUpRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
