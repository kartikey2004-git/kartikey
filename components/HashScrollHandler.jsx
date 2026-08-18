"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash scrolling when page loads
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure all components are rendered
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return null;
}
