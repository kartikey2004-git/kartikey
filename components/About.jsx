"use client";

import { useRef } from "react";
import { SiCodesignal } from "react-icons/si";
import { Parisienne } from "next/font/google";
import { cn } from "@/lib/utils";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

const roles = [
  {
    title: "GFG ABESEC Technical Coordinator",
    duration: "Oct 2024 – Present",
    points: [
      "Led and supported core tech projects.",
      "Planned events, contests, and workshops.",
      "Managed community tasks and initiatives.",
    ],
  },
  {
    title: "Elixir Tech Community Member",
    duration: "Dec 2023 – Present",
    points: [
      "Worked on the Elixir Community website.",
      "Used React, Next.js, and Tailwind CSS.",
      "Helped improve features and design.",
    ],
  },
];

const About = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="snap-start bg-background text-foreground max-w-7xl mx-auto px-4 py-16 md:py-28 w-full relative"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <h1
          className={cn(
            parisienne.variable,
            "text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
          )}
        >
          Chapters of My Journey
        </h1>
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">
          A look back at the milestones that shaped my career and passions.
        </p>
      </div>

      <div className="mt-10 flex justify-center mb-12">
        <div className="w-full md:w-8/12 rounded-2xl p-6 md:p-8 shadow-lg border backdrop-blur-md  border-gray-300 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900">
          <h3 className="lg:text-xl md:text-base font-semibold text-foreground mb-2">
            About Me
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            I’m Kartikey Bhatnagar, a Full Stack Developer passionate about
            building real-world projects, contributing to tech communities, and
            exploring full-stack innovations.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-sm md:text-base text-foreground">
            <li>Frontend & Backend Development</li>
            <li>Database Design & Optimization</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {roles.slice(0, 2).map((role, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between h-full backdrop-blur-md rounded-2xl border border-gray-300 dark:border-neutral-700 p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="flex items-center gap-3  lg:text-lg sm:text-lg md:text-sm font-semibold text-foreground mb-2">
                  <SiCodesignal className="text-blue-500 text-xl md:text-2xl" />
                  {role.title}
                </h2>
                <p className="text-sm md:text-base italic text-muted-foreground">
                  {role.duration}
                </p>
              </div>

              <ul className="list-disc list-outside pl-6 mt-4 space-y-1 text-sm md:text-base text-foreground leading-relaxed">
                {role.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
