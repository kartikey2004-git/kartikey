"use client";

import { FaServer, FaDatabase, FaCloud, FaHammer } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdGridView } from "react-icons/md";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
  return (
    <div className="bg-black/60 text-white min-h-screen p-16" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight text-left">My Projects</h1>
          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-white/20 text-white px-6 py-3 flex items-center gap-2"
          >
            All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div className="bg-zinc-900 p-0 border border-white/5" key={index}>
              <div className="w-full h-96 bg-gradient-to-br from-zinc-800 to-zinc-700 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="flex justify-between items-start p-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-semibold mb-4">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="group relative px-6 py-3 bg-white/5 backdrop-blur-xl text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center gap-3 font-medium text-lg shadow-2xl overflow-hidden"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <ArrowUpRight className="w-6 h-6 text-white relative z-10" />
                  <div className="absolute inset-0 w-1/12 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shine"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
