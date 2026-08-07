"use client";

import { useEffect, useState } from "react";

// Tracks the current text selection inside `containerRef`, debounced, so a
// floating "Save Note" toolbar can position itself next to it. Ignores
// selections outside the article (nav, other UI chrome).
export function useTextSelection(containerRef, { debounceMs = 150 } = {}) {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    let timeoutId = null;

    function handleSelectionChange() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sel = window.getSelection();
        const text = sel?.toString().trim();

        if (!text || !sel.rangeCount || !containerRef.current) {
          setSelection(null);
          return;
        }

        if (!containerRef.current.contains(sel.anchorNode)) {
          setSelection(null);
          return;
        }

        const rect = sel.getRangeAt(0).getBoundingClientRect();
        if (!rect || (rect.width === 0 && rect.height === 0)) {
          setSelection(null);
          return;
        }

        setSelection({ text, rect });
      }, debounceMs);
    }

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [containerRef, debounceMs]);

  return selection;
}
