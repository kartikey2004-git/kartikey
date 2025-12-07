"use client";

import React from "react";
import { ChevronRight, FileText, Send } from "lucide-react";
import Link from "next/link";
import SpotifyCard from "./Spotify-Card";
import LastPlayedCard from "./LastPlayedCard";
import { Twitter, Linkedin, Github, Youtube, Instagram } from "lucide-react";

const Hero = () => {
  const iconClasses = "w-5 h-5 text-gray-400 hover:text-white transition";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start pt-28 px-6 lg:px-10 bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-[0.12] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10 -ml-2">
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16">
            {/* Halo ring */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />

            {/* Your actual image */}
            <img
              src="/hi.png" // <-- put your actual image path here
              alt="Kartikey Avatar"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </div>

          {/* Name intro */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
              Hi, I’m <span className="font-semibold">Kartikey</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              A Full Stack Web Developer
            </p>
          </div>
        </div>
        <p className="text-[11px] tracking-[0.2em] font-medium uppercase text-gray-500">
          Based in India
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.15] mt-[-16px]">
          Innovating{" "}
          <span className="text-blue-400 font-semibold">through code</span>,
          <br />
          shaping tomorrow’s tech.
        </h2>

        {/* SUBTEXT DESCRIPTION */}
        <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
          I build for the web — turning creative ideas into smooth, functional,
          and meaningful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 -mt-4">
          <style>{`
            @keyframes shine {
              0% { left: -100%; }
              100% { left: 150%; }
            }
            .animate-shine { animation: shine 2.8s infinite; }
          `}</style>

          {/* WORK BUTTON */}
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-6 py-3 bg-white/5 backdrop-blur-xl text-white rounded-md 
            border border-white/10 hover:bg-white/10 hover:border-white/20 
            transition duration-400 flex items-center gap-3 font-medium text-lg overflow-hidden"
          >
            <span className="relative z-10">See My Work</span>
            <ChevronRight size={20} />

            <div className="absolute inset-0 w-[18%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine"></div>
          </button>

          {/* CV BUTTON */}
          <Link
            href="https://drive.google.com/file/d/1bNGxElcMYck4L2CN9uu5hbYXMH04iDj6/view?usp=sharing"
            target="_blank"
            className="relative px-10 py-3 bg-white/5 backdrop-blur-xl text-white rounded-md 
            border border-white/10 hover:bg-white/10 hover:border-white/20 
            transition duration-400 flex items-center gap-3 font-medium text-lg overflow-hidden"
          >
            View CV
            <Send size={20} strokeWidth="1.5" />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <a href="https://x.com/Bh20291Kartikey" target="_blank">
          <Twitter className={iconClasses} />
        </a>

        <a
          href="https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337"
          target="_blank"
        >
          <Linkedin className={iconClasses} />
        </a>

        <a href="https://github.com/kartikey2004-git" target="_blank">
          <Github className={iconClasses} />
        </a>

        <a href="https://www.instagram.com/k4rtik.exe" target="_blank">
          <Instagram className={iconClasses} />
        </a>
      </div>

      <LastPlayedCard />
    </section>
  );
};

export default Hero;
