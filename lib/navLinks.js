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
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/",
  },
  {
    title: "Projects",
    icon: <FiFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/projects",
  },
  {
    title: "Blogs",
    icon: <FiBookOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/blogs",
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "mailto:kartikeybhatnagar247@gmail.com",
    external: true,
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
    external: true,
  },
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://x.com/Bh20291Kartikey",
    external: true,
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/kartikey2004-git",
    external: true,
  },
  {
    title: "Resume Download",
    icon: <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/resume.pdf",
    external: true,
    download: true,
  },
];
