"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemedSkillIcon({ skill }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <img
      src={
        mounted &&
          resolvedTheme === "light" &&
          skill.iconLight
          ? skill.iconLight
          : skill.icon
      }
      alt={skill.iconname}
      className="h-4 w-4"
    />
  );
}
