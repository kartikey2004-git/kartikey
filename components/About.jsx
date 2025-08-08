"use client";

import { useRef } from "react";
import { SiCodesignal } from "react-icons/si";
import { Parisienne } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

const roles = [
  {
    title: "GeeksforGeeks ABESEC Technical Coordinator",
    duration: "Oct 2024 – Present",
    points: [
      "Collaborated effectively with team members to ensure successful project outcomes.",

      "Planned technical events and workshops.",
      "Helped manage all technical community initiatives.",
    ],
  },
  {
    title: "Elixir Tech Community Member",
    duration: "Dec 2023 – Present",
    points: [
      "Contribute in website for Elixir Community.",
      "Used React, Next.js, and Tailwind.",
      "Collaborated on new features.",
    ],
  },
];

const About = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="snap-start bg-background text-foreground max-w-7xl mx-auto px-4 py-16 md:py-32 w-full relative"
    >
      {/* Glass Container */}
      <div className="backdrop-blur rounded-3xl p-6 md:p-12 bg-white/10 dark:bg-black/20 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start">
          {/* Info Side */}
          <div className="w-full md:w-1/2 space-y-10">
            <h1
              className={cn(
                parisienne.variable,
                "text-3xl md:text-4xl font-semibold tracking-tight ml-3 text-black dark:text-white"
              )}
            >
              Chapters of My Journey
            </h1>

            {roles.map((role, idx) => (
              <div key={idx} className="space-y-3 pl-4">
                <h2 className="text-lg sm:text-xl md:text-2xl flex items-center gap-3 font-semibold text-black dark:text-white">
                  <SiCodesignal className="text-blue-500 text-xl md:text-2xl" />
                  {role.title}
                </h2>
                <p className="text-sm md:text-base italic text-neutral-700 dark:text-neutral-300">
                  {role.duration}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm md:text-base text-black dark:text-white">
                  {role.points.map((point, i) => (
                    <li
                      key={i}
                      className="transition-transform hover:translate-x-2 duration-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Visual Card */}
          <div className="w-full md:w-1/2 relative h-[320px] sm:h-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              alt="Background"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
              <div>
                <p className="text-gray-50 font-normal text-lg">
                  Kartikey Bhatnagar
                </p>
                <p className="text-gray-400 text-sm">BTech ECE, ABESEC</p>
              </div>

              <div className="mt-3">
                <h3 className="text-white text-lg md:text-xl">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                  Passionate about building real-world projects, contributing to
                  tech communities, and exploring full-stack innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
