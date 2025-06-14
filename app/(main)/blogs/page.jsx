"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const blogs = [
  {
    title: "Bantr Project Breakdown: How I Built a Chat App from Scratch",
    description:
      "Ever since I started coding, I've been fascinated by how real-time communication works. This breakdown shares how I built my own chat app from the ground up.",
    tags: ["Coding", "Full Stack", "Chat"],
    type: "Project",
    date: "Nov 8",
  },
  {
    title: "Designing Our Agency's Website",
    description:
      "Creating our agency website was essential for presenting our work and allowing clients easy access. Here’s the design journey behind it.",
    tags: ["Coding", "Frontend", "Design"],
    type: "Project",
    date: "Jul 27",
  },
  {
    title: "Zenos AI Project Breakdown: Building a Real-Time AI Chat",
    description:
      "I've always wanted to build something in full-stack development that could offer real utility. Here's how I built Zenos AI.",
    tags: ["Coding", "Full Stack"],
    type: "Project",
    date: "May 12",
  },
  // Add more blog entries here...
];

const Blogs = () => {
  return (
    <section className="w-full min-h-screen px-4 md:px-12 py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-orange-400">Blogs</span>{" "}
          <span className="text-gray-500">—</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Development Insights
          </span>
        </h2>
        <p className="text-gray-400 mb-12 text-base md:text-lg">
          A showcase of personal insights, project breakdowns, and my development journey through tech.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              href="#"
              key={index}
              className="group relative bg-background border border-muted-foreground/10 rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-xl hover:border-muted-foreground/20"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium uppercase tracking-wide text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">
                  {blog.type}
                </span>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {blog.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-foreground bg-accent px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
