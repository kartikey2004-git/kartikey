"use client";

import { usePathname } from "next/navigation";

export default function PathnameDisplay() {
  const pathname = usePathname();

  return (
    <p className="eyebrow text-muted-foreground/50 mb-4">
      {pathname}
    </p>
  );
}
