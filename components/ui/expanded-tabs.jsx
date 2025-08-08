"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside, useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

// Tabler Icons imports
import {
  IconHome,
  IconWorldWww,
  IconArticle,
  IconMail,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconDownload
} from "@tabler/icons-react";

// Your links array
const links = [
  { title: "Home", icon: IconHome },
  { title: "Projects", icon: IconWorldWww },
  { title: "Blogs", icon: IconArticle },
  { title: "Email", icon: IconMail },
  { title: "LinkedIn", icon: IconBrandLinkedin },
  { title: "Twitter", icon: IconBrandX },
  { title: "GitHub", icon: IconBrandGithub },
  { title: "Download", icon: IconDownload },
];

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandedTabsDock({
  activeColor = "text-primary",
  onChange,
}) {
  const [selected, setSelected] = React.useState(null);
  const outsideClickRef = React.useRef(null);

  // Detect large screens (≥ 1024px)
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  if (!isLargeScreen) return null; // Don't render for small devices

  return (
    <div
      ref={outsideClickRef}
      className="flex gap-2 rounded-2xl border bg-background p-1 shadow-sm"
    >
      {links.map((tab, index) => {
        const Icon = tab.icon;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-muted", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
