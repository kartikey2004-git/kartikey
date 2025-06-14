"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

import { motion } from "motion/react";
import Image from "next/image";
import CleanCarousel, { Carousel } from "@/components/ui/carousel";

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
  {
    title: "Bantr - Chatting App",
    description:
      "Real-time chatting app similar to Discord. Servers, channels, DMs, and more.",
    tech: ["React", "Node.js", "Socket.io", "Express.js"],
    image: "/mountain.jpeg", // replace with your image
    link: "https://bantr.in",
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

const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="w-full min-h-screen bg-background text-foreground py-20 px-4 md:px-10">
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

              <Modal>
                <ModalTrigger>
                  <span className="inline-block px-4 py-2 rounded-lg border bg-background text-foreground  hover:bg-slate-100 hover:text-black transition">
                    View Project
                  </span>
                </ModalTrigger>

                <ModalBody>
                  <ModalContent>
                    <section className="min-h-screen  text-foreground">
                      <CleanCarousel />
                    </section>
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
