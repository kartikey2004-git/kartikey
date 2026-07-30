"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Eye, Search, Users, X } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";
import PathnameDisplay from "@/components/PathnameDisplay";
import { prepareBlogForSearch, searchBlogs } from "@/lib/search";

export default function BlogsClient() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [viewCounts, setViewCounts] = useState({});
  const [siteVisitors, setSiteVisitors] = useState(null);
  const inputRef = useRef(null);

  const playNavigateSound = useClickSound("navigate");

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.map(prepareBlogForSearch));
        setLoading(false);
      });

    fetch("/api/blogs/views")
      .then((res) => res.json())
      .then(setViewCounts)
      .catch(() => {});

    fetch("/api/visitors/site")
      .then((res) => res.json())
      .then((data) => setSiteVisitors(data.uniqueVisitors))
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => searchBlogs(blogs, query), [query, blogs]);

  // Ctrl/Cmd + K to focus search
  useEffect(() => {
    const handleKey = (e) => {
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
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8 py-16">
        <div className="mb-12">
          <PathnameDisplay />
          <h1 className="text-lg font-semibold rounded-sm sm:text-3xl">
            Blogs
          </h1>
          <p className="mt-2 text-md text-muted-foreground">
            Thoughts, ideas, and tutorials on web development and technology.
          </p>
          {siteVisitors !== null && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              {siteVisitors.toLocaleString()} visitor
              {siteVisitors !== 1 ? "s" : ""}
            </p>
          )}
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

            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search blogs by title, description, or content..."
              className="h-auto flex-1 border-0 bg-transparent dark:bg-transparent px-3 py-2.5 text-sm shadow-none placeholder:text-muted-foreground/50 focus-visible:ring-0"
            />

            {isSearching && (
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setQuery("")}
                className="mr-1.5 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
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
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="mt-3 h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
            >
              Clear search
            </Button>
          </div>
        ) : (
          <div className="space-y-4 md:-ml-5 -ml-3">
            {filtered.map((blog) => (
              <Card
                key={blog.slug}
                className="bg-transparent border-none p-3 sm:p-5 lg:p-6 shadow-none rounded-md"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-base font-semibold text-foreground sm:text-xl">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      onClick={playNavigateSound}
                      className="hover:text-primary transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {blog.description}
                  </p>

                  {isSearching && blog.snippet && (
                    <p className="text-xs text-muted-foreground/70 italic leading-relaxed">
                      {blog.snippet}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <time className="text-[10px] text-muted-foreground sm:text-sm">
                        {formatDate(blog.publishedAt || blog.createdAt)}
                      </time>
                      {viewCounts[blog.slug] !== undefined && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground sm:text-sm">
                          <Eye className="h-3 w-3" />
                          {viewCounts[blog.slug].toLocaleString()}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/blogs/${blog.slug}`}
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
