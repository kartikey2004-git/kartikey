"use client";

import {
  ChevronRight,
  Send,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Rocket,
  Code,
  Coffee,
  Bug,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const iconClasses = "h-5 w-5 text-muted-foreground transition hover:text-foreground";

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-hidden border-b border-border bg-background py-14 sm:py-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <div className="absolute inset-0 rounded-full bg-accent blur-md" />
            <img
              src="/hi.webp"
              alt="Kartikey"
              className="relative z-10 h-full w-full rounded-md object-cover ring-1 ring-border"
            />
          </div>

          <div className="w-full sm:w-auto">
            <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Hi, I'm Kartikey
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Full Stack Web Developer
            </p>
          </div>
        </div>

        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Based in India
        </p>

        <h2 className="max-w-3xl wrap-break-word text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
          Innovating{" "}
          <span className="font-semibold text-foreground">
            through code
          </span>
          ,<br />
          shaping tomorrow’s tech.
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          I build modern web experiences — clean, fast and production-ready
          interfaces with solid backend logic.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-full">
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
          bg-card border border-border rounded-md
          text-sm sm:text-base text-foreground
          hover:bg-accent transition
    "
          >
            See My Work
            <ChevronRight className="w-4 h-4" />
          </button>

          <Link
            href="https://drive.google.com/file/d/1eyrmowrL6wTZLZEx5cpDHqG20rK9nGnc/view?usp=sharing"
            target="_blank"
            className="
      flex items-center justify-center gap-2
      w-full sm:w-auto
      px-4 sm:px-6 py-3
          bg-card border border-border rounded-md
          text-sm sm:text-base text-foreground
          hover:bg-accent transition
    "
          >
            View Resume
            <Send className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 mt-4 flex-wrap">
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

        <div className="mt-2 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:gap-6 md:grid-cols-4">
          {[
            {
              Icon: Rocket,
              value: "7+",
              label: "Projects Shipped",
            },
            {
              Icon: Code,
              value: "50K+",
              label: "Lines of Code",
            },
            {
              Icon: Coffee,
              value: "∞",
              label: "Coffee Consumed",
            },
            {
              Icon: Bug,
              value: "Too many",
              label: "Bugs Fixed",
            },
          ].map(({ Icon, value, label }, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-card p-3 sm:p-4"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-muted-foreground sm:h-6 sm:w-6" />
                <span className="text-xl font-bold leading-none text-foreground sm:text-2xl md:text-3xl">
                  {value}
                </span>
              </div>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
