"use client";

import React, { useEffect } from "react";
import {
  ChevronRight,
  Send,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LastPlayedCard from "./LastPlayedCard";

const Hero = () => {
  const iconClasses = "w-5 h-5 text-gray-400 hover:text-white transition";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start pt-28 px-6 lg:px-10 bg-black"
    >
      <div className="absolute inset-0 grid-background opacity-[0.12] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10 ml-1">
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />
            <img
              src="/hi.webp"
              alt="Kartikey Avatar"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
              Hi, I’m <span className="font-semibold">Kartikey</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              A Full Stack Web Developer
            </p>
          </div>
        </div>

        <p className="text-[11px] tracking-[0.2em] font-medium uppercase text-gray-500 -mt-4">
          Based in India
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.15] -mt-3">
          Innovating{" "}
          <span className="text-blue-400 font-semibold">through code</span>,
          <br />
          shaping tomorrow’s tech.
        </h2>

        <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed -mt-3">
          I build for the web — turning creative ideas into smooth, functional,
          and meaningful digital experiences.
        </p>

        <div className="flex w-full gap-3 sm:gap-4 -mt-4 sm:mt-0">
          <style>{`
            @keyframes shine {
              0% { left: -120%; }
              100% { left: 140%; }
            }
            .animate-shine { 
              animation: shine 2.6s ease-in-out infinite; 
            }
          `}</style>

          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-4 sm:px-6 py-3 w-1/2 sm:w-auto flex items-center justify-center gap-2
            bg-white/5 backdrop-blur-xl text-white rounded-md 
            border border-white/10 hover:bg-white/10 hover:border-white/20 
            transition-all duration-300 font-medium text-sm sm:text-lg 
            overflow-hidden active:scale-[0.97]"
          >
            <span className="relative z-10">See My Work</span>
            <ChevronRight size={18} className="relative z-10 sm:w-5 sm:h-5" />

            <div
              className="absolute inset-0 w-[22%] h-full 
              bg-linear-to-r from-transparent via-white/20 to-transparent 
              skew-x-12 animate-shine pointer-events-none 
              opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>

          <Link
            href="https://drive.google.com/file/d/1YoRs3yremp0lwZ52Bs6E7nt77yOXEhvq/view?usp=sharing"
            target="_blank"
            className="relative px-4 sm:px-6 py-3 w-1/2 sm:w-auto flex items-center justify-center gap-2
            bg-white/5 backdrop-blur-xl text-white rounded-md 
            border border-white/10 hover:bg-white/10 hover:border-white/20 
            transition-all duration-300 font-medium text-sm sm:text-lg 
            overflow-hidden active:scale-[0.97]"
          >
            <span>View CV</span>
            <Send
              size={18}
              strokeWidth="1.5"
              className="relative z-10 sm:w-5 sm:h-5"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-10 ml-1">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://x.com/Bh20291Kartikey" target="_blank">
                <Twitter className={iconClasses} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337"
                target="_blank"
              >
                <Linkedin className={iconClasses} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://github.com/kartikey2004-git" target="_blank">
                <Github className={iconClasses} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://www.instagram.com/k4rtik.exe" target="_blank">
                <Instagram className={iconClasses} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* <LastPlayedCard /> */}
    </section>
  );
};

export default Hero;
