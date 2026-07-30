"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function FooterStandard() {
  const [siteVisitors, setSiteVisitors] = useState(null);

  useEffect(() => {
    fetch("/api/visitors/site")
      .then((res) => res.json())
      .then((data) => setSiteVisitors(data.uniqueVisitors))
      .catch(() => {});
  }, []);

  return (
    <footer className="w-full bg-background -mt-10">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8">
          <blockquote>
            <p className="max-w-2xl text-2xl sm:text-3xl leading-[1.45] tracking-tight text-foreground">
              &ldquo;Build your own internal compass for navigating new
              territories.&rdquo;
            </p>

            <div className="mt-5 sm:mt-6 flex items-center justify-between">
              {siteVisitors !== null ? (
                <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  {siteVisitors.toLocaleString()} visitor
                  {siteVisitors !== 1 ? "s" : ""}
                </p>
              ) : (
                <span />
              )}

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-px w-6 sm:w-8 bg-border" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Kartikey
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>
    </footer>
  );
}
