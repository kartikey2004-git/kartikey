import { FiFolder, FiBookOpen } from "react-icons/fi";
import {
  IconHome,
  IconMail,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconDownload,
} from "@tabler/icons-react";

export const navLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },
  {
    title: "Skills",
    icon: (
      <FiBookOpen className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills", // anchor to home page section
  },
  {
    title: "Projects",
    icon: (
      <FiFolder className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects", // anchor to home page section
  },
  {
    title: "Email",
    icon: (
      <IconMail className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:kartikeybhatnagar247@gmail.com",
    external: true,
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
    external: true,
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/Bh20291Kartikey",
    external: true,
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/kartikey2004-git",
    external: true,
  },
];
