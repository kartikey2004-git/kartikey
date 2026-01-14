"use client";

import React, { useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/app/data";
import { IconBrandX, IconBrandGithub } from "@tabler/icons-react";
import { FaLinkedinIn } from "react-icons/fa6";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-full bg-neutral-900/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-white font-semibold text-2xl">
              {"<KB />"}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-neutral-400 hover:text-white text-md transition
                  after:absolute after:left-0 after:-bottom-1 after:h-0.5
                  after:w-0 after:bg-white after:rounded-full
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://github.com/kartikey2004-git"
              target="_blank"
              className="hover:text-white transition"
            >
              <IconBrandGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Bh20291Kartikey"
              target="_blank"
              className="hover:text-white transition"
            >
              <IconBrandX className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="
            md:hidden w-full
            bg-neutral-900/70 sm:bg-neutral-900/60
            backdrop-blur-xl
            border-b border-white/10
          "
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.title}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="flex items-center gap-3 text-white text-base"
                >
                  {link.icon}
                  {link.title}
                </a>
                <p className="text-xs text-neutral-400 ml-7">
                  {link.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
