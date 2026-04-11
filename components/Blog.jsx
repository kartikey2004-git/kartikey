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
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
          <div className="space-y-8 mb-4">
            <h2 className="mb-6 sm:mb-8 text-2xl font-semibold rounded-sm sm:text-3xl">Blogs</h2>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-transparent border-none p-4 sm:p-5 lg:p-6 shadow-sm rounded-md animate-pulse"
              >
                <div className="flex flex-col space-y-3">
                  <div className="h-3 w-6 bg-muted rounded-sm animate-pulse sm:h-4 sm:w-8"></div>
                  <div className="h-3 bg-muted rounded-sm animate-pulse sm:h-4"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
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
    <section className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
        <h2 className="mb-6 sm:mb-8 text-xl font-semibold rounded-sm sm:text-3xl">Blogs</h2>

        <div className="space-y-6 md:-ml-5 -ml-3">
          {blogs.slice(0, 3).map((blog) => (
            <Card
              key={blog.slug}
              className="bg-transparent border-none p-4 sm:p-5 lg:p-6 shadow-sm rounded-md"
            >
              <div className="flex flex-col space-y-3">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted-foreground sm:text-sm">
                    {formatDate(blog.publishedAt || blog.createdAt)}
                  </time>

                  <Link
                    href={`https://markstack-app.vercel.app/blogs/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-md px-4 sm:px-5 lg:px-6 py-2 text-base sm:text-lg font-medium text-foreground shadow transition-colors"
          >
            View all posts
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
