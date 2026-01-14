"use client";

import { Quote, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black/60  mt-12 py-16 text-gray-300 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Quote Section */}
        <div
          className="
    max-w-7xl mx-auto
    bg-white/5
    border border-white/10
    rounded-lg
    px-6 py-10
    mb-12
    shadow-[0_0_25px_rgba(0,0,0,0.25)]
  "
        >
          {/* Quote icon */}
          <div className="opacity-20 mb-4">
            <Quote size={40} />
          </div>

          {/* Quote text */}
          <p className="text-base sm:text-lg italic text-gray-200 leading-relaxed">
            “If you're scared to deploy on Friday, that's an architecture
            problem.”
          </p>

          {/* Author */}
          <p className="mt-4 text-sm text-gray-400 italic text-right">
            — Kartikey Bhatnagar
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-sm text-gray-400 text-center">
            <p>
              © {new Date().getFullYear()} Kartikey. Designed & Developed by{" "}
              <span className="text-white">Kartikey Bhatnagar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
