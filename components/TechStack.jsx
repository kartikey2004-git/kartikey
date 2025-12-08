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
      icon: "/images/javascript.svg",
      bgColor: "bg-yellow-500",
    },
    {
      iconname: "TypeScript",
      description: "Typed JS superset",
      icon: "/images/typescript.svg",
      bgColor: "bg-blue-600",
    },
    {
      iconname: "React",
      description: "UI library",
      icon: "/images/react.svg",
      bgColor: "bg-cyan-500",
    },
    {
      iconname: "Next.js",
      description: "React framework",
      icon: "/images/nextdotjs.svg",
      bgColor: "bg-gray-800",
    },
    {
      iconname: "Tailwind CSS",
      description: "Utility CSS",
      icon: "/images/tailwindcss.svg",
      bgColor: "bg-teal-500",
    },
    {
      iconname: "Node.js",
      description: "Backend runtime",
      icon: "/images/nodedotjs.svg",
      bgColor: "bg-green-700",
    },
    {
      iconname: "Express",
      description: "Node.js framework",
      icon: "/images/express.svg",
      bgColor: "bg-gray-700",
    },
    {
      iconname: "Prisma",
      description: "Node ORM",
      icon: "/images/prisma.svg",
      bgColor: "bg-indigo-400",
    },
    {
      iconname: "MongoDB",
      description: "NoSQL database",
      icon: "/images/mongodb.svg",
      bgColor: "bg-green-600",
    },
    {
      iconname: "PostgreSQL",
      description: "Relational database",
      icon: "/images/postgresql.svg",
      bgColor: "bg-blue-700",
    },
    {
      iconname: "SQL",
      description: "Database queries",
      icon: "/images/mysql.svg",
      bgColor: "bg-indigo-500",
    },
    {
      iconname: "Vercel",
      description: "Frontend deployment",
      icon: "/images/vercel.svg",
      bgColor: "bg-white/80",
    },
    {
      iconname: "Netlify",
      description: "Static hosting",
      icon: "/images/netlify.svg",
      bgColor: "bg-green-500",
    },
    {
      iconname: "Render",
      description: "Cloud hosting",
      icon: "/images/render.svg",
      bgColor: "bg-purple-400",
    },
    {
      iconname: "Git",
      description: "Version control",
      icon: "/images/git.svg",
      bgColor: "bg-red-500",
    },
    {
      iconname: "Firebase",
      description: "App backend",
      icon: "/images/firebase.svg",
      bgColor: "bg-orange-500",
    },
    {
      iconname: "Supabase",
      description: "Open-source backend",
      icon: "/images/supabase.svg",
      bgColor: "bg-sky-500",
    },
    {
      iconname: "Appwrite",
      description: "Backend platform",
      icon: "/images/appwrite.svg",
      bgColor: "bg-red-500",
    },
    {
      iconname: "Redis",
      description: "In-memory DB",
      icon: "/images/redis.svg",
      bgColor: "bg-red-600",
    },
    {
      iconname: "RabbitMQ",
      description: "Message broker",
      icon: "/images/rabbitmq.svg",
      bgColor: "bg-pink-500",
    },
    {
      iconname: "ShadCN",
      description: "UI components",
      icon: "/images/shadcnui.svg",
      bgColor: "bg-indigo-400",
    },
    {
      iconname: "Framer Motion",
      description: "Animations",
      icon: "/images/framer.svg",
      bgColor: "bg-pink-500",
    },
    {
      iconname: "Clerk",
      description: "Authentication",
      icon: "/images/clerk.svg",
      bgColor: "bg-orange-500",
    },
    {
      iconname: "Postman",
      description: "API testing",
      icon: "/images/postman.svg",
      bgColor: "bg-orange-400",
    },
    {
      iconname: "HTML",
      description: "Markup language",
      icon: "/images/html5.svg",
      bgColor: "bg-orange-500",
    },
    {
      iconname: "CSS",
      description: "Styling language",
      icon: "/images/css.svg",
      bgColor: "bg-blue-500",
    },
    {
      iconname: "C++",
      description: "High-performance language",
      icon: "/images/cplusplus.svg",
      bgColor: "bg-purple-700",
    },
    {
      iconname: "Python",
      description: "Versatile programming",
      icon: "/images/python.svg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center">
          {currentItems.map((tech, idx) => (
            <div
              key={idx}
              className="w-full max-w-xs p-3 rounded-sm text-white flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-md hover:shadow-lg hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.iconname}
                className="w-7 h-7 shrink-0"
              />

              <div className="flex flex-col">
                <h3 className="font-semibold text-sm sm:text-base">
                  {tech.iconname}
                </h3>
                <p className="text-sm sm:text-xs text-gray-300">
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
