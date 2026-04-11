"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { FaChevronRight } from "@/lib/icons";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground rounded-md">
        Loading Blogs...
      </div>
    );
  }

  if (!blogs?.length) return null;

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-8 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8">
        <h2 className="mb-4 sm:mb-8 text-lg font-semibold rounded-sm sm:text-3xl">Blogs</h2>

        <div className="space-y-4 md:-ml-5 -ml-3">
          {blogs.slice(0, 3).map((blog) => (
            <Card
              key={blog.slug}
              className="bg-transparent border-none p-3 sm:p-5 lg:p-6 shadow-sm rounded-md"
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-base font-semibold text-foreground sm:text-xl">
                  {blog.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-[10px] text-muted-foreground sm:text-sm">
                    {formatDate(blog.publishedAt || blog.createdAt)}
                  </time>

                  <Link
                    href={`https://markstack-app.vercel.app/blogs/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-4 sm:mt-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-md px-3 sm:px-5 lg:px-6 py-1.5 text-base sm:text-lg font-medium text-foreground shadow transition-colors"
          >
            View all Blogs
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
