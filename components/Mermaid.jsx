"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Mermaid({ chart }) {
  const ref = useRef(null);
  const id = useId().replace(/:/g, "");
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === "dark" ? "dark" : "default",
        securityLevel: "strict",
        fontFamily: "var(--font-inter)",
      });

      mermaid
        .render(`mermaid-${id}`, chart)
        .then(({ svg }) => {
          if (!cancelled) setSvg(svg);
        })
        .catch((err) => {
          if (!cancelled) setError(err?.message || "Failed to render diagram");
        });
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-md border border-destructive/30 bg-destructive/5 p-4 text-xs text-destructive">
        {error}
      </pre>
    );
  }

  const className =
    "my-6 flex justify-center overflow-x-auto rounded-md border border-border/50 bg-muted/20 p-4 [&_svg]:mx-auto";

  if (!svg) {
    return (
      <div ref={ref} className={className}>
        <span className="text-xs text-muted-foreground">
          Rendering diagram...
        </span>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
