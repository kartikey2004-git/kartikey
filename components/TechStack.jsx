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
    <div
      id="skills"
      className="min-h-[90vh] bg-black/60 flex flex-col items-center justify-center px-4 sm:px-6 py-10 md:mt-0 mt-36"
    >
      <div className="max-w-6xl w-full mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2">
          Here’s
        </h2>
        <p className="text-gray-400 max-w-3xl text-sm sm:text-base">
          what I build with
        </p>
      </div>

      <TooltipProvider delayDuration={100}>
        <div className="max-w-6xl w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 place-items-center">
          {visibleTech.map((tech, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <div
                  className="
                    group relative w-14 h-14 rounded-md
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-1
                    cursor-pointer
                  "
                >
                  <img
                    src={tech.icon}
                    alt={tech.iconname}
                    className="w-10 h-10 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </TooltipTrigger>

              <TooltipContent side="top" className="text-sm">
                {tech.iconname}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      
      {isMobile && (
        <div className="flex gap-3 mt-8">
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
  );
};

export default TechStack;
