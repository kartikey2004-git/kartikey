"use client";

import { useLocalStorage } from "usehooks-ts";
import { Highlighter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTextSelection } from "@/hooks/useTextSelection";
import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { notesKey } from "@/lib/reading-storage";

export function HighlightToolbar() {
  const { articleRef, slug } = useReadingExperience();
  const selection = useTextSelection(articleRef);
  const [, setNotes] = useLocalStorage(notesKey(slug), [], { initializeWithValue: false });

  if (!selection) return null;

  function handleSave() {
    setNotes((prev) => [...prev, { articleSlug: slug, selectedText: selection.text, createdAt: Date.now() }]);
    window.getSelection()?.removeAllRanges();
  }

  const top = Math.max(8, selection.rect.top - 44);
  const left = selection.rect.left + selection.rect.width / 2;

  return (
    <div
      className="fixed z-50 -translate-x-1/2 rounded-md border border-border bg-popover text-popover-foreground shadow-md"
      style={{ top, left }}
      role="toolbar"
      aria-label="Selection actions"
    >
      <Button type="button" variant="ghost" size="xs" onClick={handleSave} className="gap-1.5">
        <Highlighter className="h-3.5 w-3.5" />
        Save Note
      </Button>
    </div>
  );
}
