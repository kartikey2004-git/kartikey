"use client";

import { usePathname } from "next/navigation";

export default function PathnameDisplay() {
  const pathname = usePathname();

  return (
    <p className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase mb-4">
      {pathname}
    </p>
  );
}
