"use client";

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

const Hero = () => {
  const iconClasses = "w-5 h-5 text-gray-400 hover:text-white transition";

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black px-4 sm:px-8 pt-28 sm:pt-40 pb-20"
    >
      <div className="absolute inset-0 grid-background opacity-[0.12]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-7">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />
            <img
              src="/hi.webp"
              alt="Kartikey"
              className="w-full h-full rounded-full object-cover relative z-10"
            />
          </div>

          <div>
            <h1 className="text-xl sm:text-3xl font-semibold text-white">
              Hi, I’m Kartikey
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Full Stack Web Developer
            </p>
          </div>
        </div>

        {/* Location */}
        <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500">
          Based in India
        </p>

        {/* Heading */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium leading-tight text-white">
          Innovating{" "}
          <span className="text-blue-400 font-semibold">through code</span>
          ,<br />
          shaping tomorrow’s tech.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-lg max-w-xl leading-relaxed">
          I build modern web experiences — clean, fast and production-ready
          interfaces with solid backend logic.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
      group flex items-center justify-center gap-2
      w-full sm:w-auto
      px-4 sm:px-6 py-3
      bg-white/5 border border-white/10 rounded-md
      text-sm sm:text-base text-white
      hover:bg-white/10 transition
    "
          >
            See My Work
            <ChevronRight className="w-4 h-4" />
          </button>

          <Link
            href="https://drive.google.com/file/d/1YoRs3yremp0lwZ52Bs6E7nt77yOXEhvq/view"
            target="_blank"
            className="
      flex items-center justify-center gap-2
      w-full sm:w-auto
      px-4 sm:px-6 py-3
      bg-white/5 border border-white/10 rounded-md
      text-sm sm:text-base text-white
      hover:bg-white/10 transition
    "
          >
            View Resume
            <Send className="w-4 h-4" />
          </Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 mt-4">
          <TooltipProvider delayDuration={100}>
            {[
              {
                icon: <Twitter className={iconClasses} />,
                link: "https://x.com/Bh20291Kartikey",
                label: "Twitter",
              },
              {
                icon: <Linkedin className={iconClasses} />,
                link: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
                label: "LinkedIn",
              },
              {
                icon: <Github className={iconClasses} />,
                link: "https://github.com/kartikey2004-git",
                label: "GitHub",
              },
              {
                icon: <Instagram className={iconClasses} />,
                link: "https://www.instagram.com/k4rtik.exe",
                label: "Instagram",
              },
            ].map((item, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
