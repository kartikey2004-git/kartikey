"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BlogsClient() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight">Blogs</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Thoughts, ideas, and tutorials on web development and technology.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts available yet.
            </p>
          </div>
        ) : (
          <div className="space-y-8 md:-ml-6 -ml-4">
            {blogs.map((blog) => (
              <Card
                key={blog.slug}
                className="bg-transparent border-none p-4 sm:p-5 lg:p-6 shadow-sm rounded-md"
              >
                <article className="space-y-4 ">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">
                      <Link
                        href={`https://markstack-app.vercel.app/blogs/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {blog.title}
                      </Link>
                    </h2>

                    <time className="text-sm text-muted-foreground">
                      {formatDate(blog.publishedAt || blog.createdAt)}
                    </time>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {blog.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`https://markstack-app.vercel.app/blogs/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
