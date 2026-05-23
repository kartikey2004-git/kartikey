"use client";

import { useEffect, useState } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsRocket,
  BsCodeSlash,
  BsMoon,
  BsSun,
} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaXTwitter as FaXTwitterIcon } from "react-icons/fa6";
import { FileUser } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import FlipWords from "@/components/ui/flip-words";
import { useTheme } from "next-themes";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";

const Hero = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { ref: themeToggleRef, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    duration: 650,
    isDarkMode: resolvedTheme === "dark",
    onDarkModeChange: (isDark) => {
      setTheme(isDark ? "dark" : "light");
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = async () => {
    await toggleSwitchTheme();
  };

  const roles = ["Developer", "Engineer", "Learner", "Builder"];

  const socialLinks = [
    {
      icon: FaXTwitterIcon,
      link: "https://x.com/kartikeybuilds",
      label: "Twitter",
    },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      label: "LinkedIn",
    },
    {
      icon: BsGithub,
      link: "https://github.com/kartikey2004-git",
      label: "GitHub",
    },
    {
      icon: BsInstagram,
      link: "https://www.instagram.com/_k4rtik.exe",
      label: "Instagram",
    },
    {
      icon: FileUser,
      link: "https://drive.google.com/file/d/1eyrmowrL6wTZLZEx5cpDHqG20rK9nGnc/view",
      label: "Resume",
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full  border-border bg-background"
    >
      <div className="relative overflow-hidden  border border-border/40">
        <div className="relative min-h-[45dvh] sm:min-h-[50dvh]">
          <Image
            src="/background.jpg"
            alt="Mountain landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* overlay (premium contrast for light + dark) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/45 via-black/25 to-black/80 dark:from-black/55 dark:via-black/35 dark:to-black/85"
          />

          {/* quote */}
          <div className="relative flex min-h-[45dvh] sm:min-h-[50dvh] flex-col items-center justify-center px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <blockquote className="text-sm sm:text-lg md:text-xl italic text-white leading-relaxed">
                Build your own internal compass for navigating new territories.
              </blockquote>
              <p className="mt-2 text-[10px] font-mono text-muted-foreground/30 tracking-wider">
                — Kartikey
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* overlapping profile */}
      <div className="relative -mt-10 sm:-mt-12 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className=" bg-background">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-end gap-3 sm:gap-4">
                    {/* avatar (overlaps card edge) */}
                    <div className="relative -mt-10 sm:-mt-12">
                      <div className="absolute -inset-2 rounded-full" />
                      <div className="relative h-16 w-16 -mt-4 overflow-hidden rounded-full ring-2 ring-background sm:h-20 sm:w-20 md:h-24 md:w-24">
                        <Image
                          src="/toji.png"
                          alt="Kartikey"
                          fill
                          className="object-cover rounded-full"
                          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight truncate">
                    Hi, I'm Kartikey
                  </h1>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-mono uppercase tracking-[0.15em]">
                    <span className="text-muted-foreground/60">
                      Ghaziabad, India
                    </span>
                    <span className="text-muted-foreground/20">/</span>
                  
                    <span className="text-muted-foreground/60">
                      Engineer at caffeine
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm sm:text-base uppercase tracking-tight text-muted-foreground">
                      21,
                    </span>
                    <FlipWords
                      words={roles}
                      duration={2000}
                      className="text-sm sm:text-base text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  {/* LEFT */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1">
                      {socialLinks.map(({ icon: Icon, link, label }, index) => (
                        <a
                          key={label}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-muted-foreground md:hover:text-foreground md:hover:bg-accent transition-all duration-300 md:hover:scale-105 rounded-sm"
                          aria-label={label}
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>

                    {mounted && (
                      <button
                        ref={themeToggleRef}
                        onClick={handleThemeToggle}
                        className="p-1.5 text-muted-foreground md:hover:text-foreground md:hover:bg-accent transition-all duration-300 rounded-sm"
                        aria-label="Toggle theme"
                        type="button"
                      >
                        {resolvedTheme === "dark" ? (
                          <BsSun className="w-4 h-4" />
                        ) : (
                          <BsMoon className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* RIGHT */}
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-right sm:text-sm">
                    Learning | Building | Shipping
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 border-t border-border/20 pt-4">
                  {[
                    {
                      Icon: BsRocket,
                      value: "Ship Fast",
                      label: "From idea to production",
                    },
                    {
                      Icon: BsCodeSlash,
                      value: "Clean Code",
                      label: "Readable, maintainable systems",
                    },
                    {
                      Icon: FiSearch,
                      value: "Break Things",
                      label: "Then understand why",
                    },
                  ].map(({ Icon, value, label }) => (
                    <div key={value} className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0" />
                        <span className="text-base sm:text-lg md:text-xl font-semibold leading-none whitespace-nowrap">
                          {value}
                        </span>
                      </div>
                      <p className="mt-1 text-[12px] sm:text-sm md:text-base text-muted-foreground leading-tight line-clamp-2">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
