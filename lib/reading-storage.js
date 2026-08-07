// Shared localStorage key names/defaults for the blog reading-experience
// features, so every component/hook that touches the same preference agrees
// on its key and default shape (usehooks-ts syncs same-key writes across
// components automatically via its "local-storage" event).

export const FOCUS_MODE_KEY = "blog-focus-mode";
export const READING_STREAK_KEY = "reading-streak";

export const TYPOGRAPHY_PREFS_KEY = "blog-reading-prefs";
export const DEFAULT_TYPOGRAPHY_PREFS = { fontScale: 1, lineHeight: 1, width: "normal" };

export const FONT_SCALE_MIN = 0.85;
export const FONT_SCALE_MAX = 1.3;
export const FONT_SCALE_STEP = 0.05;

export const LINE_HEIGHT_MIN = 0.85;
export const LINE_HEIGHT_MAX = 1.3;
export const LINE_HEIGHT_STEP = 0.05;

export const WIDTH_OPTIONS = ["narrow", "normal", "wide"];

export const WIDTH_CLASS = {
  narrow: "max-w-xl mx-auto",
  normal: "max-w-none",
  wide: "max-w-3xl mx-auto",
};

export function notesKey(slug) {
  return `blog-notes:${slug}`;
}

export function resumeKey(slug) {
  return `blog-resume:${slug}`;
}
