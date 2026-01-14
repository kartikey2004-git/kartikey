"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { technologies } from "@/app/data";
import { useEffect, useState } from "react";

export default function AboutMeSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const firstPageCount = 20;
  const secondPageCount = 12;

  const visibleTech = isMobile
    ? page === 1
      ? technologies.slice(0, firstPageCount)
      : technologies.slice(firstPageCount, firstPageCount + secondPageCount)
    : technologies;

  return (
    <section className="w-full py-16 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="relative w-11 h-11">
            <Image
              src="/hi.webp"
              alt="Kartikey Avatar"
              className="w-full h-full object-cover rounded-full"
              width={60}
              height={60}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Profile
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Kartikey Bhatnagar
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Full Stack Developer focused on building fast, clean, and
              production-ready web applications using modern technologies.
            </p>

            <TooltipProvider delayDuration={100}>
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-5 place-items-center mt-4">
                {visibleTech.map((tech, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                        <img
                          src={tech.icon}
                          alt={tech.iconname}
                          className="w-8 h-8 sm:w-10 sm:h-10 opacity-90 hover:opacity-100"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      {tech.iconname}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>

          
            {isMobile && (
              <div className="flex justify-center gap-3 mt-6">
                {[1, 2].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      page === p ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
