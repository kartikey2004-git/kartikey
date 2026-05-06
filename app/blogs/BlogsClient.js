"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";
import PathnameDisplay from "@/components/PathnameDisplay";

export default function BlogsClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const playNavigateSound = useClickSound("navigate");

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8 py-16">
        <div className="mb-12">
            <PathnameDisplay />
          <h1 className="text-lg font-semibold rounded-sm sm:text-3xl">
            Blogs
          </h1>
          <p className="mt-2 text-md text-muted-foreground">
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
          <div className="space-y-4 md:-ml-5 -ml-3">
            {blogs.map((blog) => (
              <Card
                key={blog.slug}
                className="bg-transparent border-none p-3 sm:p-5 lg:p-6 shadow-sm rounded-md"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-base font-semibold text-foreground sm:text-xl">
                    <Link
                      href={`https://markstack-app.vercel.app/blogs/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playNavigateSound}
                      className="hover:text-primary transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
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
                      onClick={playNavigateSound}
                      className="text-[10px] sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
