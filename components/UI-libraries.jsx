"use client";
import { products } from "@/app/data";
import { HeroParallax } from "./ui/hero-parallax";

const UiLibraries = () => {
  return (
    <div className="bg-black/60">
      <HeroParallax products={products} />
    </div>
  );
};

export default UiLibraries;
