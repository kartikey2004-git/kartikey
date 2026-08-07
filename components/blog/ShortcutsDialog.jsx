"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const SHORTCUTS = [
  { keys: "J", description: "Jump to next section" },
  { keys: "K", description: "Jump to previous section" },
  { keys: "T", description: "Scroll to top" },
  { keys: "F", description: "Toggle focus mode" },
  { keys: "?", description: "Show this dialog" },
];

export function ShortcutsDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
          <DialogDescription>Available while reading this article.</DialogDescription>
        </DialogHeader>
        <ul className="space-y-2 text-sm">
          {SHORTCUTS.map((shortcut) => (
            <li key={shortcut.keys} className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">{shortcut.description}</span>
              <kbd className="rounded-sm border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
                {shortcut.keys}
              </kbd>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
