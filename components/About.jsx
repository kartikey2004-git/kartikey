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
      "Coordinated with the team to achieve shared goals.",
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
      "Organized tech events for student learning.",
    ],
  },
];

const About = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="snap-start bg-background text-foreground max-w-7xl mx-auto px-4 py-10 md:py-36 w-full mb-36 relative"
    >
      {/* Glow Background */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] opacity-40 pointer-events-none"></div>

      {/* Glass Container */}
      <div className="backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden bg-white/10 dark:bg-black/20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Side */}
          <div className="space-y-10">
            <h1
              className={cn(
                parisienne.variable,
                "text-3xl md:text-4xl font-bold tracking-wide text-black dark:text-white"
              )}
            >
              A Glimpse Into My Journey
            </h1>

            {roles.map((role, idx) => (
              <div key={idx} className="space-y-2">
                <h2 className="text-xl md:text-2xl flex items-center gap-3 mb-4 text-black dark:text-white">
                  <SiCodesignal className="text-2xl md:text-3xl" />
                  {role.title}
                </h2>
                <p className="text-sm md:text-base italic text-neutral-700 dark:text-neutral-300">
                  {role.duration}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm md:text-base text-black dark:text-white">
                  {role.points.map((point, i) => (
                    <li
                      key={i}
                      className="transition-all hover:translate-x-2 duration-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Visual Card */}
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[800px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">            
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              alt="Background"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 z-10" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
              <div className="flex items-center gap-4">
                <Image
                  src="/mountain.jpeg"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full border-2 object-cover w-10 h-10"
                />
                <div>
                  <p className="text-gray-50 font-medium">Kartikey Bhatnagar</p>
                  <p className="text-gray-400 text-sm">Btech ECE, ABESEC</p>
                </div>
              </div>

              <div className="mt-3 md:mt-4">
                <h3 className="text-white text-lg md:text-xl font-bold">
                  Full Stack Dev
                </h3>
                <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                  Featuring Dev: Passionate about building real-world projects,
                  being an active part of tech communities, and exploring
                  full-stack innovations.
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
