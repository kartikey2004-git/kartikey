"use client";

import { FaServer, FaDatabase, FaCloud, FaHammer } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdGridView } from "react-icons/md";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

const techCategories = [
  {
    name: "Frontend",
    icon: <MdGridView size={28} />,
    description: "React, Next.js, Tailwind CSS, HTML, CSS, JS",
    color: "bg-blue-600",
  },
  {
    name: "Backend",
    icon: <FaServer size={28} />,
    description: "Node.js, Express, REST APIs, Next API Routes",
    color: "bg-green-600",
  },
  {
    name: "Database",
    icon: <FaDatabase size={28} />,
    description: "Firebase, Supabase, MongoDB, PostgreSQL",
    color: "bg-yellow-700",
  },
  {
    name: "Hosting",
    icon: <FaCloud size={28} />,
    description: "Vercel, Netlify, Render, GitHub Pages",
    color: "bg-red-600",
  },
  {
    name: "Misc",
    icon: <FaHammer size={28} />,
    description: "Zustand, ShadCN, Framer Motion, Clerk, Git",
    color: "bg-purple-600",
  },
  {
    name: "Learning",
    icon: <BiCodeAlt size={28} />,
    description: "Prisma, Redis",
    color: "bg-pink-600",
  },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background text-foreground">
      {/* Header */}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10",
          dancingScript.variable
        )}
      >
        My Tech Stack
      </h2>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {techCategories.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-xl border border-gray-300 dark:border-neutral-700 p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900"
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center text-white mb-4",
                tech.color
              )}
            >
              {tech.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
