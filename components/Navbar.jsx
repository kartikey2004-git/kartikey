"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/app/data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      icon: Github,
      href: "https://github.com/kartikey2004-git",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Bh20291Kartikey", label: "Twitter" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div
        className={`w-full backdrop-blur-xl border-b transition-all duration-500 ease-out ${
          scrolled
            ? "bg-black/40 border-white/20 shadow-2xl shadow-black/20"
            : "bg-black/20 border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="font-mono text-white font-bold text-xl sm:text-2xl transition-all duration-300 group-hover:scale-105 block">
                {"<KB />"}
              </span>
              <div className="absolute inset-0 font-mono text-white font-bold text-xl sm:text-2xl">
                {"<KB />"}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-white/80 hover:text-white text-sm font-medium transition-all duration-300 py-2
                  after:absolute after:left-0 after:-bottom-1 after:h-0.5
                  after:w-0 after:bg-gradient-to-r after:from-white after:to-white/60
                  after:rounded-full after:transition-all after:duration-300 ease-out
                  hover:after:w-full hover:text-white/100
                  hover:scale-105
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
            <div className="hidden sm:flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-white/10 hover:border-white/20"
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
              className="lg:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {menuOpen ? (
                  <X
                    size={20}
                    className="absolute transition-all duration-300 rotate-0"
                  />
                ) : (
                  <Menu
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
        <div className="lg:hidden w-full bg-black border-b border-white/20 animate-in slide-in-from-top duration-300 shadow-2xl shadow-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <div key={link.title} className="group">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="flex items-center gap-3 text-white/90 text-base font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:translate-x-1 backdrop-blur-sm border border-transparent hover:border-white/10"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.title}</span>
                </a>
              </div>
            ))}

            <div className="flex items-center gap-2 pt-4 px-4 border-t border-white/20">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-white/10 hover:border-white/20"
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
