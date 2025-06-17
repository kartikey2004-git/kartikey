"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

import { projects } from "@/app/data";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-5xl font-bold bg-background text-foreground  mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background text-foreground border rounded-xl overflow-hidden shadow-md flex flex-col"
          >
            <div className="w-full overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto object-contain rounded-t-2xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold bg-background text-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <Modal>
                <ModalTrigger>
                  <span className="inline-block px-4 py-2 rounded-lg border bg-background text-foreground hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-black transition">
                    View Projects
                  </span>
                </ModalTrigger>

                <ModalBody>
                  <ModalContent>
                    <div className="hide-scrollbar  max-w-4xl w-full max-h-[90vh] mx-auto p-4 sm:p-6 rounded-xl shadow-xl bg-background text-foreground overflow-y-auto space-y-6 scroll-smooth">
                      {/* Image */}
                      <div className="relative w-full h-52 sm:h-64 md:h-80 overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Title + Description */}
                      <div className="text-center space-y-2 px-2">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="text-center space-y-1 px-2">
                        <h3 className="font-semibold">Tech Stack:</h3>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
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
                      <div className="text-center space-y-1 px-2">
                        <h3 className="font-semibold">Features:</h3>
                        <ul className="list-disc list-inside text-left max-w-md mx-auto text-muted-foreground text-sm sm:text-base">
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-5 py-2 font-medium text-white bg-black rounded-lg mb-20 hover:bg-neutral-800 transition"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
