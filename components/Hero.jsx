"use client";

import {
  BsChevronRight,
  BsSend,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsRocket,
  BsCodeSlash,
  BsCupHot,
  BsBug,
} from "react-icons/bs";
import { FaXTwitter as FaXTwitterIcon } from "react-icons/fa6";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const iconClasses =
    "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition hover:text-foreground";

  return (
    <section
      id="hero"
      className="relative w-full border-b border-border bg-background py-10 sm:py-12 md:py-14"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5">
        <div className="flex flex-col gap-5 sm:gap-6 text-left">

          {/* profile */}
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16">
              <img
                src="/hi.webp"
                alt="Kartikey"
                className="h-full w-full object-cover ring-1 ring-border rounded-sm"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-semibold truncate">
                Hi, I'm Kartikey
              </h1>
              <p className="text-sm text-muted-foreground">
                Full Stack Web Developer
              </p>
            </div>
          </div>

          {/* location */}
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Based in India
          </p>

          {/* heading */}
          <h2 className="max-w-3xl text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
            Innovating{" "}
            <span className="font-semibold">through code</span>,
            <br />
            shaping tomorrow’s tech.
          </h2>

          {/* description */}
          <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            I build modern web experiences — clean, fast and production-ready
            interfaces with solid backend logic.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 text-sm rounded-sm"
            >
              See My Work
              <BsChevronRight className="w-4 h-4" />
            </button>

            <Link
              href="https://drive.google.com/file/d/1eyrmowrL6wTZLZEx5cpDHqG20rK9nGnc/view"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 text-sm rounded-sm"
            >
              View Resume
              <BsSend className="w-4 h-4" />
            </Link>
          </div>

          {/* socials */}
          <div className="flex items-center gap-3 flex-wrap">
            <TooltipProvider delayDuration={100}>
              {[
                {
                  icon: <FaXTwitterIcon className={iconClasses} />,
                  link: "https://x.com/kartikeybuilds",
                  label: "Twitter",
                },
                {
                  icon: <BsLinkedin className={iconClasses} />,
                  link: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
                  label: "LinkedIn",
                },
                {
                  icon: <BsGithub className={iconClasses} />,
                  link: "https://github.com/kartikey2004-git",
                  label: "GitHub",
                },
                {
                  icon: <BsInstagram className={iconClasses} />,
                  link: "https://www.instagram.com/_k4rtik.exe",
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

          {/* stats single line responsive */}
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { Icon: BsRocket, value: "7+", label: "Projects Shipped" },
              { Icon: BsCodeSlash, value: "50K+", label: "Lines of Code" },
              { Icon: BsCupHot, value: "∞", label: "Coffee Consumed" },
              { Icon: BsBug, value: "Too many", label: "Bugs Fixed" },
            ].map(({ Icon, value, label }, idx) => (
              <div key={idx} className="min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" />
                  <span className="text-base sm:text-lg font-semibold leading-none truncate">
                    {value}
                  </span>
                </div>

                <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-tight truncate">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;