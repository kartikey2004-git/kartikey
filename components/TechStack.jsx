"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";

const TechStack = () => {
  const technologies = [
    {
      iconname: "JavaScript",
      description: "Web scripting language",
      icon: "/svgs/Javascript.svg",
      bgColor: "bg-yellow-500",
    },
    {
      iconname: "TypeScript",
      description: "Typed JS superset",
      icon: "/svgs/TypeScript.svg",
      bgColor: "bg-blue-600",
    },
    {
      iconname: "React",
      description: "UI library",
      icon: "/svgs/React.svg",
      bgColor: "bg-cyan-500",
    },
    {
      iconname: "Next.js",
      description: "React framework",
      icon: "/svgs/nextjs.svg",
      bgColor: "bg-gray-800",
    },
    {
      iconname: "Tailwind CSS",
      description: "Utility CSS",
      icon: "/svgs/Tailwind-CSS.svg",
      bgColor: "bg-teal-500",
    },
    {
      iconname: "Node.js",
      description: "Backend runtime",
      icon: "/svgs/Node.js.svg",
      bgColor: "bg-green-700",
    },
    {
      iconname: "Express",
      description: "Node.js framework",
      icon: "/svgs/Express.svg",
      bgColor: "bg-gray-700",
    },
    {
      iconname: "Prisma",
      description: "Node ORM",
      icon: "/svgs/prisma.svg",
      bgColor: "bg-indigo-400",
    },
    {
      iconname: "MongoDB",
      description: "NoSQL database",
      icon: "/svgs/MongoDB.svg",
      bgColor: "bg-green-600",
    },
    {
      iconname: "PostgreSQL",
      description: "Relational database",
      icon: "/svgs/PostgresSQL.svg",
      bgColor: "bg-blue-700",
    },
    {
      iconname: "SQL",
      description: "Database queries",
      icon: "/svgs/MySQL.svg",
      bgColor: "bg-indigo-500",
    },
    {
      iconname: "Vercel",
      description: "Frontend deployment",
      icon: "/svgs/Vercel.svg",
      bgColor: "bg-white/80",
    },
    {
      iconname: "Netlify",
      description: "Static hosting",
      icon: "/svgs/netlify.svg",
      bgColor: "bg-green-500",
    },
    {
      iconname: "Render",
      description: "Cloud hosting",
      icon: "/svgs/render.png",
      bgColor: "bg-purple-400",
    },
    {
      iconname: "Git",
      description: "Version control",
      icon: "/svgs/Git.svg",
      bgColor: "bg-red-500",
    },
    {
      iconname: "Firebase",
      description: "App backend",
      icon: "/svgs/Firebase.svg",
      bgColor: "bg-orange-500",
    },
    {
      iconname: "Supabase",
      description: "Open-source backend",
      icon: "/svgs/supabase.png",
      bgColor: "bg-sky-500",
    },
    {
      iconname: "Appwrite",
      description: "Backend platform",
      icon: "/svgs/Appwrite.svg",
      bgColor: "bg-red-500",
    },
    {
      iconname: "Redis",
      description: "In-memory DB",
      icon: "/svgs/Redis.svg",
      bgColor: "bg-red-600",
    },
    {
      iconname: "RabbitMQ",
      description: "Message broker",
      icon: "/svgs/RabbitMQ.svg",
      bgColor: "bg-pink-500",
    },
    {
      iconname: "ShadCN",
      description: "UI components",
      icon: "/svgs/shadcn.png",
      bgColor: "bg-indigo-400",
    },
    {
      iconname: "Framer Motion",
      description: "Animations",
      icon: "/svgs/framer.svg",
      bgColor: "bg-pink-500",
    },
    {
      iconname: "Clerk",
      description: "Authentication",
      icon: "/svgs/clerkk.png",
      bgColor: "bg-orange-500",
    },
    {
      iconname: "Postman",
      description: "API testing",
      icon: "/svgs/Postman.svg",
      bgColor: "bg-orange-400",
    },
    {
      iconname: "HTML",
      description: "Markup language",
      icon: "/svgs/HTML5.svg",
      bgColor: "bg-orange-500",
    },
    {
      iconname: "CSS",
      description: "Styling language",
      icon: "/svgs/CSS3.svg",
      bgColor: "bg-blue-500",
    },
    {
      iconname: "C++",
      description: "High-performance language",
      icon: "/svgs/C++.svg",
      bgColor: "bg-purple-700",
    },
    {
      iconname: "Python",
      description: "Versatile programming",
      icon: "/svgs/Python.svg",
      bgColor: "bg-green-500",
    },
  ];

  const useIsSmallScreen = () => {
    if (typeof window === "undefined") return false;
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
      const check = () => setIsSmall(window.innerWidth < 640); // sm breakpoint
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    return isSmall;
  };

  const [currentPage, setCurrentPage] = useState(1);

  const isSmall = useIsSmallScreen();
  const itemsPerPage = isSmall ? 5 : 12;

  const totalPages = Math.ceil(technologies.length / itemsPerPage);

  const currentItems = technologies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      id="skills"
      className="min-h-[90vh] bg-black/60 flex flex-col items-center justify-center px-4 sm:px-6 py-10"
    >
      <div className="max-w-6xl w-full mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight text-left">
          Here’s
        </h2>
        <p className="text-gray-400 max-w-3xl text-sm sm:text-base md:text-lg leading-snug text-left">
          what I build with
        </p>
      </div>

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center cursor-pointer">
          {currentItems.map((tech, idx) => (
            <div
              key={idx}
              className="w-full max-w-xs p-3 rounded-sm text-white flex items-start gap-3 
    bg-white/5 backdrop-blur-sm border border-white/10 shadow-md 
    hover:shadow-xl hover:bg-white/10 hover:border-white/20 
    transition-all duration-300 ease-out hover:-translate-y-[3px]"
            >
              <img
                src={tech.icon}
                alt={tech.iconname}
                className="w-7 h-7 shrink-0 transition-transform duration-300 
      group-hover:scale-[1.12]"
              />

              <div className="flex flex-col transition-all duration-300">
                <h3 className="font-semibold text-sm sm:text-base group-hover:text-white transition-colors">
                  {tech.iconname}
                </h3>
                <p className="text-sm sm:text-xs text-gray-300 group-hover:text-gray-200 transition-colors">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i} className="rounded-sm">
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

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
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
