"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
  {
    title: "Luvo Web",
    description:
      "Luvo Web is my web development agency focused on crafting responsive and engaging websites.",
    tech: ["React", "Tailwind", "Vite", "Figma"],
    image: "/ghantee.jpg",
    link: "https://luvo.in",
  },
  {
    title: "Bantr - Chatting App",
    description:
      "Real-time chatting app similar to Discord. Servers, channels, DMs, and more.",
    tech: ["React", "Node.js", "Socket.io", "Express.js"],
    image: "/mountain.jpeg", // replace with your image
    link: "https://bantr.in",
  },
  // Add 6+ more projects here...
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-background text-foreground py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-5xl font-bold bg-background text-foreground  mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background text-foreground  border rounded-2xl overflow-hidden shadow-md"
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-background text-foreground  px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold bg-background text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg border bg-background text-foreground  hover:text-black transition"
              >
                View Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;