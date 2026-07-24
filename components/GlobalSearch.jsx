"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  FolderGit2,
  Headphones,
  Home,
  Search,
  Wrench,
  Clapperboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { projects } from "@/app/data";
import { useClickSound } from "@/hooks/useClickSound";

const pages = [
  { title: "Home", href: "/", icon: Home },
  { title: "Projects", href: "/projects", icon: FolderGit2 },
  { title: "Blogs", href: "/blogs", icon: FileText },
  { title: "Gear", href: "/gears", icon: Wrench },
  { title: "Listen", href: "/listen", icon: Headphones },
  { title: "Watchlist", href: "/watchlist", icon: Clapperboard },
];

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loadedBlogs, setLoadedBlogs] = useState(false);
  const router = useRouter();
  const playNavigateSound = useClickSound("navigate");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && !loadedBlogs) {
      fetch("/api/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(Array.isArray(data) ? data : []);
          setLoadedBlogs(true);
        })
        .catch(() => setLoadedBlogs(true));
    }
  }, [open, loadedBlogs]);

  const go = useCallback(
    (href) => {
      setOpen(false);
      playNavigateSound();
      router.push(href);
    },
    [router, playNavigateSound],
  );

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="h-8 w-auto justify-start gap-2 px-2.5 text-xs text-muted-foreground sm:w-48"
      >
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="ml-auto hidden items-center gap-0.5 rounded-sm border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
          Ctrl K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search kartikey.dev"
        description="Search pages, projects, and blogs"
      >
        <CommandInput placeholder="Search pages, projects, blogs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.href}
                value={`page ${page.title}`}
                onSelect={() => go(page.href)}
              >
                <page.icon />
                {page.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projects.map((project) => (
              <CommandItem
                key={project.slug}
                value={`project ${project.title} ${project.tech?.join(" ")}`}
                onSelect={() => go(`/projects#${project.slug}`)}
              >
                <FolderGit2 />
                {project.title}
              </CommandItem>
            ))}
          </CommandGroup>

          {blogs.length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup heading="Blogs">
                {blogs.map((blog) => (
                  <CommandItem
                    key={blog.slug}
                    value={`blog ${blog.title} ${blog.description}`}
                    onSelect={() => go(`/blogs/${blog.slug}`)}
                  >
                    <FileText />
                    {blog.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
