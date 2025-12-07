"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

const ITEMS_PER_PAGE = 4;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProjects = useMemo(() => [...projects].reverse(), []);
  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedProjects, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // optional: scroll into view
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative bg-black/60 text-white py-20 px-6 sm:px-10 overflow-hidden"
    >
      <div className="absolute inset-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10">
          <h2
            className={`text-3xl sm:text-4xl font-semibold tracking-tight text-left ${dancingScript.variable}`}
          >
            My <span>Projects</span>
          </h2>

          <a
            href="https://github.com/kartikey2004-git"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-5 py-2.5 border border-white/20 rounded-sm text-xs sm:text-sm font-medium backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              All Projects <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {paginatedProjects.map((project, index) => (
            <article
              key={index}
              className="relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10  transition-all duration-300"
            >
              <div className="relative w-full h-40 sm:h-44 md:h-40 lg:h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-3 h-full">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2 py-1 border border-white/10 bg-white/5 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="text-[10px] sm:text-xs px-2 py-1 bg-white/5 rounded-full text-white/60">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <button
                    onClick={() => window.open(project.projectLink, "_blank")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90
                    px-5 py-2.5 border border-white/20 rounded-sm  backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
                  >
                    Visit demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination (shadcn) */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => {
                  const page = i + 1;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                {totalPages > 5 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}
