"use client";

import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { navLinks } from "@/app/data";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";
import { useTheme } from "next-themes";
import GlobalSearch from "@/components/GlobalSearch";
import { FOCUS_MODE_KEY } from "@/lib/reading-storage";
import { Button } from "@/components/ui/button";

const BLOG_POST_PATTERN = /^\/blogs\/[^/]+$/;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [focusMode] = useLocalStorage(FOCUS_MODE_KEY, false, { initializeWithValue: false });
  const isHidden = BLOG_POST_PATTERN.test(pathname) && focusMode;

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

  const handleThemeToggle = async () => {
    await toggleSwitchTheme();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} ${isHidden ? "-translate-y-full h-0 overflow-hidden opacity-0 pointer-events-none" : ""}`}
      suppressHydrationWarning
    >
      <div
        className={`w-full backdrop-blur-xl transition-all duration-500 ease-out ${scrolled
          ? "bg-background/95 shadow-sm"
          : "bg-background/80"
          }`}
      >
        <div className="max-w-3xl mx-auto  h-16 flex items-center justify-between">
          <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="relative text-foreground/75 text-sm sm:text-base font-normal transition-all duration-300 py-2
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
            <GlobalSearch />

            {mounted && (
              <Button
                ref={themeToggleRef}
                onClick={handleThemeToggle}
                variant="ghost"
                size="icon-sm"
                aria-label="Toggle theme"
                className="text-foreground/70 hover:text-foreground duration-300"
              >
                {resolvedTheme === "dark" ? (
                  <BsSun className="w-3 h-3" />
                ) : (
                  <BsMoon className="w-3 h-3" />
                )}
              </Button>
            )}


          </div>
        </div>
      </div>
    </header>
  );
}
