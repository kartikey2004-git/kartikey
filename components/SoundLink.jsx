"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { useClickSound } from "@/hooks/useClickSound";

/**
 * A drop-in replacement for next/link's <Link> that plays a click/nav
 * sound effect on click while still performing normal navigation.
 * Composes with an existing onClick prop instead of clobbering it.
 */
export function SoundLink({ href, children, className, onClick, ...rest }) {
  const playNavigateSound = useClickSound("navigate");

  const handleClick = (event) => {
    playNavigateSound();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

/**
 * Thin client wrapper around ProjectCard that supplies the click-sound
 * callback for its onNavigate prop. ProjectCard itself stays untouched
 * and keeps rendering with the same `project`/`onNavigate` props; this
 * wrapper just owns the client-only sound-trigger boundary so that
 * pages rendering a list of ProjectCards can remain Server Components.
 */
export function SoundProjectCard({ project }) {
  const playNavigateSound = useClickSound("navigate");

  return <ProjectCard project={project} onNavigate={playNavigateSound} />;
}
