"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
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
import { EmptyState } from "@/components/ui/empty-state";
import { projects } from "@/app/data";
import { useClickSound } from "@/hooks/useClickSound";
import { prepareBlogForSearch, searchBlogsGrouped } from "@/lib/search";

const pages = [
  { title: "Home", href: "/", icon: Home },
  { title: "Projects", href: "/projects", icon: FolderGit2 },
  { title: "Blogs", href: "/blogs", icon: FileText },
  { title: "Gear", href: "/gears", icon: Wrench },
  { title: "Listen", href: "/listen", icon: Headphones },
  { title: "Watchlist", href: "/watchlist", icon: Clapperboard },
];

function HighlightedText({ parts }) {
  return parts.map((part, i) =>
    part.match ? (
      <span key={i} className="rounded-sm bg-primary/20 text-primary">
        {part.text}
      </span>
    ) : (
      <span key={i}>{part.text}</span>
    ),
  );
}

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
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
          const list = Array.isArray(data) ? data : [];
          setBlogs(list.map(prepareBlogForSearch));
          setLoadedBlogs(true);
        })
        .catch(() => setLoadedBlogs(true));
    }
  }, [open, loadedBlogs]);

  const handleOpenChange = useCallback((next) => {
    setOpen(next);
    if (!next) setSearch("");
  }, []);

  const go = useCallback(
    (href) => {
      setOpen(false);
      playNavigateSound();
      router.push(href);
    },
    [router, playNavigateSound],
  );

  const query = search.trim().toLowerCase();

  const filteredPages = useMemo(() => {
    if (!query) return [];
    return pages.filter((page) => page.title.toLowerCase().includes(query));
  }, [query]);

  const filteredProjects = useMemo(() => {
    if (!query) return [];
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.tech?.some((t) => t.toLowerCase().includes(query)),
    );
  }, [query]);

  const blogGroups = useMemo(() => {
    if (!query) return [];
    return searchBlogsGrouped(blogs, query).slice(0, 6);
  }, [blogs, query]);

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
        <kbd className="ml-auto hidden items-center gap-0.5 rounded-sm border bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground sm:inline-flex">
          Ctrl K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={handleOpenChange}
        title="Search kartikey.dev"
        description="Search pages, projects, and blogs — including full post content"
        shouldFilter={false}
      >
        <CommandInput
          value={search}
          onValueChange={setSearch}
          placeholder="Search pages, projects, blogs (title or content)..."
        />
        <CommandList>
          {!query ? (
            <EmptyState
              icon={Search}
              title="Search kartikey.dev"
              description="Start typing to search pages, blogs, and projects."
              className="border-none py-10"
            />
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>

              {filteredPages.length > 0 && (
                <CommandGroup heading="Pages">
                  {filteredPages.map((page) => (
                    <CommandItem
                      key={page.href}
                      value={page.href}
                      onSelect={() => go(page.href)}
                    >
                      <page.icon />
                      {page.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {blogGroups.map((blog) => (
                <Fragment key={blog.slug}>
                  <CommandSeparator />
                  <CommandGroup heading={blog.title}>
                    {blog.lines.length === 0 ? (
                      <CommandItem
                        value={blog.slug}
                        onSelect={() => go(`/blogs/${blog.slug}`)}
                      >
                        <FileText />
                        {blog.title}
                      </CommandItem>
                    ) : (
                      blog.lines.map((line, i) => (
                        <CommandItem
                          key={i}
                          value={`${blog.slug}-${i}`}
                          onSelect={() =>
                            go(
                              line.anchor
                                ? `/blogs/${blog.slug}#${line.anchor}`
                                : `/blogs/${blog.slug}`,
                            )
                          }
                        >
                          {line.prefix && (
                            <span className="text-muted-foreground">{line.prefix}</span>
                          )}
                          <span className="truncate">
                            <HighlightedText parts={line.parts} />
                          </span>
                        </CommandItem>
                      ))
                    )}
                  </CommandGroup>
                </Fragment>
              ))}

              {filteredProjects.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Projects">
                    {filteredProjects.map((project) => (
                      <CommandItem
                        key={project.slug}
                        value={project.slug}
                        onSelect={() => go(`/projects#${project.slug}`)}
                      >
                        <FolderGit2 />
                        {project.title}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
