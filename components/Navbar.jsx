"use client";

import React, { useState, useEffect } from "react";
import {
  BsList,
  BsX,
  BsGithub,
  BsLinkedin,
  BsMoon,
  BsSun,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { navLinks } from "@/app/data";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import { useTheme } from "next-themes";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleThemeToggle = async () => {
    await toggleSwitchTheme();
  };

  const handleClick = () => {
    setMenuOpen(false);
  };

  const socialLinks = [
    {
      icon: BsGithub,
      href: "https://github.com/kartikey2004-git",
      label: "GitHub",
    },
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/kartikeybuilds",
      label: "Twitter",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div
        className={`w-full backdrop-blur-xl transition-all duration-500 ease-out ${scrolled
          ? "bg-background/95 shadow-sm"
          : "bg-background/80"
          }`}
      >
        <div className="max-w-4xl mx-auto px-3 sm:px-5 lg:px-8 h-16 flex items-center justify-between">
          <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={handleClick}
                className="relative text-foreground/75 text-[14px] sm:text-md font-normal transition-all duration-300 py-2
                  after:absolute after:left-0 after:-bottom-1 after:h-0.25
                  after:w-0 after:bg-foreground
                  after:transition-all after:duration-200 ease-out
                  md:hover:scale-100 md:hover:after:w-[80%]
                "
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10">{link.title}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-foreground/60 md:hover:text-foreground md:hover:bg-accent transition-all duration-300 md:hover:scale-105  rounded-sm"
                  aria-label={label}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>

            {mounted && (
              <button
                ref={themeToggleRef}
                onClick={handleThemeToggle}
                className="p-1.5 text-foreground/70 md:hover:text-foreground md:hover:bg-accent transition-all duration-300 rounded-sm"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <BsSun className="w-3 h-3" />
                ) : (
                  <BsMoon className="w-3 h-3" />
                )}
              </button>
            )}


          </div>
        </div>
      </div>
    </header>
  );
}
