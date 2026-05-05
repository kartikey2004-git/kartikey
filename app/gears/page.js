import GearClient from "./GearClient";

export const metadata = {
  title: "Gear",
  description:
    "A comprehensive list of development tools and software used for building and shipping projects. From IDEs to terminal tools, privacy apps to communication platforms.",
  keywords: [
    "gear",
    "tools",
    "development",
    "software",
    "vscode",
    "terminal",
    "workflow",
    "productivity",
    "windows",
    "development environment",
  ],
  openGraph: {
    title: "Gear | Kartikey",
    description:
      "A comprehensive list of development tools and software used for building and shipping projects.",
    url: "https://kartikey.dev/gear",
  },
};

export default function GearPage() {
  return <GearClient />;
}
