"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";
import PathnameDisplay from "@/components/PathnameDisplay";

export default function BlogsClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const playNavigateSound = useClickSound("navigate");

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return blogs;

    const q = query.toLowerCase().trim();
    return blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(q) ||
        blog.description.toLowerCase().includes(q)
      );
    });
  }, [query, blogs]);

  // Ctrl/Cmd + K to focus search
  useEffect(() => {
    const handleKey = () => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && focused) {
        inputRef.current?.blur();
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [focused]);

  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground rounded-md">
        Loading Blogs...
      </div>
    );
  }

  if (!blogs?.length) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const hasResults = filtered.length > 0;
  const isSearching = query.trim().length > 0;

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

        {/* Search */}
        <div className="mb-8">
          <div
            className={`relative flex items-center border rounded-md transition-colors duration-200 ${
              focused
                ? "border-foreground/30 bg-accent/30"
                : "border-border/50 bg-background"
            }`}
          >
            <Search className="ml-3 h-4 w-4 shrink-0 text-muted-foreground" />

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search blogs by title or description..."
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
            />

            {isSearching && (
              <button
                onClick={() => setQuery("")}
                className="mr-2 p-1 rounded-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {isSearching && (
            <p className="mt-2 text-xs text-muted-foreground font-mono">
              {hasResults
                ? `${filtered.length} post${filtered.length !== 1 ? "s" : ""} found`
                : "No posts found"}
            </p>
          )}
        </div>

        {/* Blog List */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="h-8 w-8 text-muted-foreground/30 mb-4" />
            <p className="text-sm text-muted-foreground">
              No posts match &quot;{query}&quot;
            </p>
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="mt-3 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-4 md:-ml-5 -ml-3">
            {filtered.map((blog) => (
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
