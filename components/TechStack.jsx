"use client";

import { useEffect, useState } from "react";
import { technologies } from "@/app/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const firstPageCount = 16;
  const secondPageCount = 12;

  const visibleTech = isMobile
    ? page === 1
      ? technologies.slice(0, firstPageCount)
      : technologies.slice(firstPageCount, firstPageCount + secondPageCount)
    : technologies;

  return (
    <section
      id="skills"
      className="bg-black/60 pt-6 sm:pt-10 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-3xl font-semibold text-white">
            Here’s
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            what I build with
          </p>
        </div>

        {/* Icons */}
        <TooltipProvider delayDuration={100}>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-5 sm:gap-6 place-items-center">
            {visibleTech.map((tech, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <div
                    className="
                      w-12 h-12 sm:w-14 sm:h-14
                      flex items-center justify-center
                      rounded-md
                      transition-all duration-300
                      hover:scale-110 hover:-translate-y-1
                      cursor-pointer
                    "
                  >
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

        {/* Mobile Pagination */}
        {isMobile && (
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setPage(1)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                page === 1 ? "bg-white" : "bg-white/30"
              }`}
            />
            <button
              onClick={() => setPage(2)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                page === 2 ? "bg-white" : "bg-white/30"
              }`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
