"use client";
import { HeroParallax } from "./ui/hero-parallax";

const UiLibraries = () => {
  const products = [
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/b.webp",
    },
    {
      title: "Shadcn UI",
      link: "https://ui.shadcn.com",
      thumbnail: "/shadcn.png",
    },
    {
      title: "Hero UI",
      link: "https://heroui.com",
      thumbnail: "/hero.png",
    },
    {
      title: "Chakra UI",
      link: "https://chakra-ui.com",
      thumbnail: "https://chakra-ui.com/og-image.png",
    },
    {
      title: "Reactbits.dev",
      link: "https://reactbits.dev",
      thumbnail: "/a.webp",
    },
    {
      title: "Motion Primitives",
      link: "https://motion-primitives.com",
      thumbnail: "/motion-primitives.png",
    },
    {
      title: "21st.dev",
      link: "https://21st.dev",
      thumbnail: "/21st-dev.png",
    },

    {
      title: "Hero UI",
      link: "https://heroui.com",
      thumbnail: "/hero.png",
    },
    {
      title: "Chakra UI",
      link: "https://chakra-ui.com",
      thumbnail: "https://chakra-ui.com/og-image.png",
    },
    {
      title: "Reactbits.dev",
      link: "https://reactbits.dev",
      thumbnail: "/a.webp",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/b.webp",
    },
    {
      title: "Shadcn UI",
      link: "https://ui.shadcn.com",
      thumbnail: "/shadcn.png",
    },
    {
      title: "Motion Primitives",
      link: "https://motion-primitives.com",
      thumbnail: "/motion-primitives.png",
    },
    {
      title: "21st.dev",
      link: "https://21st.dev",
      thumbnail: "/21st-dev.png",
    },
  ];

  return (
    <div className="bg-black/60">
      <HeroParallax products={products} />
    </div>
  );
};

export default UiLibraries;
