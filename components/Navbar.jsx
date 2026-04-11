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

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const { ref: themeToggleRef, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    duration: 650,
    isDarkMode: resolvedTheme === "dark",
    onDarkModeChange: (isDark) => {
      setResolvedTheme(isDark ? "dark" : "light");
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

  const handleThemeToggle = async () => {
    await toggleSwitchTheme();
  };

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMenuOpen(false);
    }
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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div
        className={`w-full backdrop-blur-xl border-b transition-all duration-500 ease-out ${scrolled
            ? "bg-background/95 border-border shadow-sm"
            : "bg-background/80 border-border"
          }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="font-mono text-foreground font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 group-hover:scale-105 block">
                {"<KB />"}
              </span>
              <div className="absolute inset-0 font-mono text-foreground/20 font-bold text-lg sm:text-xl lg:text-2xl">
                {"<KB />"}
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-foreground/75 text-xs sm:text-sm font-normal transition-all duration-300 py-2
                  after:absolute after:left-0 after:-bottom-1 after:h-0.25
                  after:w-0 after:bg-foreground
                  after:transition-all after:duration-200 ease-out
                  hover:scale-100 hover:after:w-[80%]
                "
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10">{link.title}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                ref={themeToggleRef}
                onClick={handleThemeToggle}
                className="p-2 text-foreground/70 hover:text-foreground hover:bg-accent transition-all duration-300 rounded-sm"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <BsSun className="w-4 h-4" />
                ) : (
                  <BsMoon className="w-4 h-4" />
                )}
              </button>
            )}

            <div className="hidden sm:flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105  rounded-sm"
                  aria-label={label}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-foreground/70 hover:text-foreground hover:bg-accent transition-all duration-300 rounded-sm"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {menuOpen ? (
                  <BsX
                    size={20}
                    className="absolute transition-all duration-300 rotate-0"
                  />
                ) : (
                  <BsList
                    size={20}
                    className="absolute transition-all duration-300"
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full bg-background animate-in slide-in-from-top duration-300 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-8 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <div key={link.title} className="group">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="flex items-center gap-3 text-foreground py-3 px-4 hover:bg-accent transition-all duration-300 hover:translate-x-1 hover:border-border rounded-sm"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="font-normal">{link.title}</span>
                </a>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-4 px-4 border-t border-border">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-foreground hover:bg-accent transition-all duration-300 hover:scale-105 rounded-sm"
                  aria-label={label}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
