"use client";

import { useEffect, useState } from "react";
import { Eye, Quote } from "lucide-react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") {
          setVisitorCount(data.count);
        }
      });
  }, []);

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

      {/* Visitor Counter */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-3 bg-[#0d0d0d] border border-white/5 px-6 py-3 ">
          <Eye className="text-gray-300" size={20} />
          <span className="text-gray-300">
            {visitorCount === null ? (
              "Counting..."
            ) : (
              <>
                You are the{" "}
                <span className="text-white font-semibold">
                  {visitorCount.toLocaleString()}
                </span>
                <sup>th</sup> visitor
              </>
            )}
          </span>
        </div>
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
