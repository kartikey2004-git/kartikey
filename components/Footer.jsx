"use client";

import { Quote } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-24 pb-10 text-center text-gray-300">
      <div
        className="
        max-w-xl mx-auto 
        bg-[#0d0d0d] 
        border border-white/10 
        rounded-lg 
        px-6 py-10 
        shadow-[0_0_25px_rgba(0,0,0,0.25)]
      "
      >
        <div className="flex justify-start opacity-20 mb-3">
          <Quote size={40} />
        </div>

        <p className="text-base sm:text-lg italic text-gray-200 leading-relaxed">
          "Always learn, always grow."
        </p>

        <p className="mt-3 text-sm text-gray-400 italic">
          — Kartikey Bhatnagar
        </p>
      </div>

      <div className="mt-10 text-sm text-gray-400">
        Designed & Developed by{" "}
        <span className="text-white font-semibold">Kartikey</span>
        <br />© {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
