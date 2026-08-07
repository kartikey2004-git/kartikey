"use client";

import { useEffect, useRef, useState } from "react";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Single rAF-throttled scroll listener shared by the progress bar, words-left
// counter, milestone toasts, and resume-reading autosave — avoids each of
// those mounting its own scroll listener.
export function useScrollProgress(targetRef) {
  const [percent, setPercent] = useState(0);
  const tickingRef = useRef(false);
  const lastPercentRef = useRef(0);

  useEffect(() => {
    function measure() {
      tickingRef.current = false;
      const el = targetRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : rect.top <= 0 ? 1 : 0;
      const next = Math.round(clamp(raw, 0, 1) * 100);

      if (next !== lastPercentRef.current) {
        lastPercentRef.current = next;
        setPercent(next);
      }
    }

    function onScrollOrResize() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [targetRef]);

  return percent;
}
