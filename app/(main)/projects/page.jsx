"use client";
import React from "react";
import { projects } from "@/app/data";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-background text-foreground py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-6xl font-semibold mb-16 text-center tracking-wide">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-background border border-border rounded-2xl shadow-lg flex flex-col transition-transform hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* <div className="relative w-full h-64 overflow-hidden rounded-3xl bg-background shadow-sm flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain max-h-full max-w-full"
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, 33vw"
                draggable={false}
              />
            </div> */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-muted text-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-background">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-6 py-3 text-center bg-black text-white rounded-lg font-semibold hover:bg-neutral-800 transition"
              >
                View Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
