"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { FaChevronRight } from "@/lib/icons";
import { ArrowRight } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const playNavigateSound = useClickSound('navigate');

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
      <section className="py-12 p-2 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 sm:mb-8 flex items-center justify-between gap-4">
            <h2 className="heading-lg">Blogs</h2>
          </div>

          <div className="space-y-4 md:-ml-5 -ml-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-3 p-3 sm:p-5 lg:p-6">
                <Skeleton className="h-5 w-2/3 sm:h-6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex items-center justify-between pt-1">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
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
    <section className="py-12 p-2 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 sm:mb-8 flex items-center justify-between gap-4">
          <h2 className="heading-lg">Blogs</h2>

          <Button
            asChild
            variant="link"
            size="sm"
            className="group no-underline hover:no-underline"
          >
            <Link href="/blogs" onClick={playNavigateSound}>
              View all blogs
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="space-y-4 md:-ml-5 -ml-3">
          {blogs.slice(0, 3).map((blog) => (
            <Card
              key={blog.slug}
              className="bg-transparent border-none shadow-none p-3 sm:p-5 lg:p-6"
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-base font-semibold text-foreground sm:text-xl">
                  {blog.title}
                </h3>

                <p className="body-text">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {formatDate(blog.publishedAt || blog.createdAt)}
                  </time>

                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="group h-auto gap-1 p-0 no-underline hover:no-underline"
                  >
                    <Link href={`/blogs/${blog.slug}`} onClick={playNavigateSound}>
                      Read more
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
