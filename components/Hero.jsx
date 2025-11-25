"use client"; 

import React from "react";
import { ChevronRight, Download, FileText } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "@/app/data";
import Link from "next/link"

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/60"
      id="hero"
    >
      <div className="absolute  inset-0 grid-background pointer-events-none z-0" />

      <div className="text-sm tracking-widest font-semibold uppercase mb-10 text-gray-400 z-10">
        Based in India
      </div>

      <div className="max-w-5xl text-center z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl  leading-tighter mb-6 tracking-tighter text-white">
          Innovating{" "}
          <span className="text-blue-500">
            through code
            <br />
            shaping
          </span>{" "}
          tomorrow's tech.
        </h1>

        <p className="text-base sm:text-md lg:text-lg text-gray-300 mb-12 max-w-3xl mx-auto tracking-tight">
          Hi, I’m Kartikey. I build for the web, turning ideas into seamless
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
          <style>{`
            @keyframes shine {
              0% { left: -100%; }
              100% { left: 200%; }
            }
            .animate-shine { animation: shine 3s infinite; }
          `}</style>

          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative px-6 py-3 bg-white/5 backdrop-blur-xl text-white rounded-md border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center gap-3 font-medium text-lg shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">See My Work</span>
            <ChevronRight />
            <div className="absolute inset-0 w-1/12 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shine"></div>
          </button>

          <Link
            href="https://drive.google.com/file/d/1bNGxElcMYck4L2CN9uu5hbYXMH04iDj6/view?usp=sharing"
            target="_blank"
            className="group relative px-11 py-3 bg-white/5 backdrop-blur-xl text-white rounded-md border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center gap-6 font-medium text-lg shadow-2xl overflow-hidden"
          >
            <span className="font-medium flex items-center gap-2">
              View CV
              <FileText strokeWidth="1.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
