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
    description: "Back to the main section",
    icon: (
      <IconHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },
  {
    title: "Skills",
    description: "What I’m good at and tools I use",
    icon: (
      <FiBookOpen className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Projects",
    description: "Some of my recent work and experiments",
    icon: (
      <FiFolder className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Email",
    description: "Get in touch with me directly",
    icon: (
      <IconMail className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:kartikeybhatnagar247@gmail.com",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Let’s connect professionally",
    icon: (
      <IconBrandLinkedin className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
    external: true,
  },
  {
    title: "Twitter",
    description: "Where I share thoughts and updates",
    icon: (
      <IconBrandX className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/Bh20291Kartikey",
    external: true,
  },
  {
    title: "GitHub",
    description: "Explore my code and open-source projects",
    icon: (
      <IconBrandGithub className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/kartikey2004-git",
    external: true,
  },
];

