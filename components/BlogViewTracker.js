"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function BlogViewTracker({ slug }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const sessionKey = `viewed:${slug}`;
    const endpoint = `/api/blogs/${slug}/views`;
    // Only SADD (write) once per browser session; refreshes/revisits
    // within the same session just read the current count.
    const alreadyTracked = sessionStorage.getItem(sessionKey);

    const request = alreadyTracked
      ? fetch(endpoint)
      : fetch(endpoint, { method: "POST" }).then((res) => {
          sessionStorage.setItem(sessionKey, "1");
          return res;
        });

    request
      .then((res) => res.json())
      .then((data) => setCount(data.uniqueVisitors))
      .catch(() => {});
  }, [slug]);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1">
      <Eye className="h-3 w-3" />
      {count.toLocaleString()} unique visitor{count !== 1 ? "s" : ""}
    </span>
  );
}
