import React from "react";

import {
  Parisienne,
  Arizonia,
  Dancing_Script,
  Great_Vibes,
} from "next/font/google";

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";
import { FaRegHandPointDown } from "react-icons/fa";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-parisienne",
});

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arizonia",
});

const Hero = () => {
  const baseClass = "font-light text-black dark:text-white";

  const words = [
    { text: "Innovating ", className: baseClass },
    { text: "through", className: baseClass },
    { text: "code,", className: baseClass },
    { text: "shaping", className: baseClass },
    { text: "tomorrow's", className: baseClass },
    {
      text: "tech.",
      className: "font-light text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
      <section
        className={`min-h-screen w-full flex items-center justify-center text-center px-4 bg-background text-foreground relative
        ${greatVibes.variable} ${dancingScript.variable} ${parisienne.variable} ${arizonia.variable}`}
      >
        {/* Background grid */}
        <div className="absolute inset-0 grid-background z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-dancing font-semibold mb-8">
            Hi, I&apos;m&nbsp;&nbsp;
            <span className="text-5xl sm:text-6xl font-normal">
              Kartikey Bhatnagar
            </span>
          </h1>

          <h2 className="text-3xl sm:text-4xl font-greatVibes mb-12">
            A Full Stack Web Developer
          </h2>

          <TypewriterEffectSmooth words={words} />
        </div>

        <div
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-black dark:text-white z-20"
          aria-hidden="true"
          title="Scroll Down"
        >
          <FaRegHandPointDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-80" />
        </div>
      </section>
    </>
  );
};

export default Hero;
