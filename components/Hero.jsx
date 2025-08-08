import React from "react";

import {
  Parisienne,
  Arizonia,
  Dancing_Script,
  Great_Vibes,
} from "next/font/google";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


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
        className={`relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 sm:px-10 lg:px-16 xl:px-24 bg-background text-foreground overflow-hidden
      ${greatVibes.variable} ${dancingScript.variable} ${parisienne.variable} ${arizonia.variable}`}
      >
        {/* Background grid */}
        <div className="absolute inset-0 grid-background z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-dancing font-semibold mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-normal">
              Kartikey Bhatnagar
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-greatVibes mb-8 opacity-90">
            A Full Stack Web Developer
          </h2>

          <TypewriterEffectSmooth words={words} />
        </div>
      </section>
    </>
  );
};

export default Hero;
