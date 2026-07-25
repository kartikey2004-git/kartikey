"use client";

import { useEffect } from "react";

// Mounted once in the root layout so every page navigation (not just blog
// pages) counts toward the site-wide unique visitor metric.
export default function SiteVisitorTracker() {
  useEffect(() => {
    const sessionKey = "site_seen";
    if (sessionStorage.getItem(sessionKey)) return;

    fetch("/api/visitors/site", { method: "POST" })
      .then(() => sessionStorage.setItem(sessionKey, "1"))
      .catch(() => {});
  }, []);

  return null;
}
