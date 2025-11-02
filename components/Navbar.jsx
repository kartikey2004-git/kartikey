"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/navLinks";
import { Menu, X } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto flex flex-col items-center",
        className
      )}
    >
      {/* Navbar container */}
      <div className="hidden md:inline-flex items-center justify-center bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            download={link.download ? true : undefined}
            onClick={(e) => handleClick(e, link.href)}
            className="relative text-white text-base font-medium transition-colors duration-200 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-white after:rounded-full after:transition-all after:duration-300 
              hover:after:w-full"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center w-full px-4 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-md py-2">
        <span className="text-white font-semibold">Menu</span>
        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="flex flex-col space-y-4 bg-neutral-900/70 backdrop-blur-md border border-white/10 px-6 py-4 w-full md:hidden">
          {navLinks.map((link) => (
            <div key={link.title} className="flex flex-col">
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                download={link.download ? true : undefined}
                onClick={(e) => handleClick(e, link.href)}
                className="flex items-center space-x-3 text-white text-base transition-colors duration-200"
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span>{link.title}</span>
              </a>

              <span className="text-sm text-neutral-400 pl-8">
                {link.description}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
