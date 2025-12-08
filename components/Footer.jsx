"use client";

import { useEffect, useState } from "react";
import { Eye, Quote } from "lucide-react";

export default function Footer() {

  return (
    <footer className="w-full mt-24 pb-10 text-center text-gray-300">
      {/* Quote */}
      <div className="max-w-3xl mx-auto bg-[#0d0d0d] border border-white/5  px-8 py-10">
        <div className="flex justify-start opacity-20 mb-4">
          <Quote size={80} />
        </div>

        <p className="text-lg italic text-gray-200">
          "Always learn, always grow."
        </p>

        <p className="mt-4 text-gray-400 italic">— Kartikey Bhatnagar</p>
      </div>
      {/* Credits */}
      <div className="mt-12 text-gray-400">
        Design & Developed by{" "}
        <span className="text-white font-semibold">Kartikey</span>
        <br />© {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
