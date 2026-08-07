"use client";

import { useEffect } from "react";

function isTypingTarget(target) {
  if (!target) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

// Generic key -> handler map. Ignores keystrokes while typing in a field or
// while a modifier key is held, so it never fights with browser/site
// shortcuts (e.g. Cmd/Ctrl+K search).
export function useKeyboardShortcuts(handlers, { enabled = true } = {}) {
  useEffect(() => {
    if (!enabled) return;

    function onKeyDown(event) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;

      const handler = handlers[event.key];
      if (!handler) return;

      event.preventDefault();
      handler(event);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handlers, enabled]);
}
