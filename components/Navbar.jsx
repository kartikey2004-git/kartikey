"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/navLinks";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="relative w-11 h-11">
          <Link href="/">
            <Image
              src="/hi.webp"
              alt="Kartikey Avatar"
              className="w-full h-full object-cover rounded-full cursor-pointer"
              width={60}
              height={60}
            />
          </Link>
        </div>

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
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-50
     flex justify-between items-center px-4 py-2
     bg-neutral-900/40 backdrop-blur-lg border-b border-white/10"
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="block w-11 h-11">
            <Image
              src="/hi.webp"
              alt="Kartikey Avatar"
              className="w-full h-full object-cover rounded-full cursor-pointer"
              width={60}
              height={60}
            />
          </Link>

          <span className="text-white font-semibold">Menu</span>
        </div>

        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-10 left-0 right-0 z-40
    flex flex-col space-y-4 
    bg-neutral-900/80 backdrop-blur-xl
    border-b border-white/10 
    px-6 py-4

    animate-slideDownSmooth"
        >
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
