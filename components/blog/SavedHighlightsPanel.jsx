"use client";

import { useLocalStorage } from "usehooks-ts";
import { Trash2 } from "lucide-react";
import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { notesKey } from "@/lib/reading-storage";

export function SavedHighlightsPanel() {
  const { slug } = useReadingExperience();
  const [notes, setNotes] = useLocalStorage(notesKey(slug), [], { initializeWithValue: false });

  if (!notes.length) return null;

  function removeNote(createdAt) {
    setNotes((prev) => prev.filter((note) => note.createdAt !== createdAt));
  }

  return (
    <section className="mt-10 border-t border-border/50 pt-6" aria-label="Saved highlights">
      <h2 className="text-sm font-semibold text-foreground">Your saved highlights</h2>
      <ul className="mt-3 space-y-2">
        {notes.map((note) => (
          <li
            key={note.createdAt}
            className="flex items-start justify-between gap-3 rounded-md border border-border/50 bg-muted/30 p-3 text-sm"
          >
            <blockquote className="text-foreground/90 italic">&ldquo;{note.selectedText}&rdquo;</blockquote>
            <button
              type="button"
              onClick={() => removeNote(note.createdAt)}
              aria-label="Delete highlight"
              className="shrink-0 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
