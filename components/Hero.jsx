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
        className={`h-screen flex items-center justify-center bg-background text-foreground text-center px-4 
        ${greatVibes.variable} ${dancingScript.variable} ${parisienne.variable} ${arizonia.variable}`}
      >
        <div className="grid-background" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-dancing font-semibold mb-8">
            Hi, I&apos;m&nbsp; &nbsp;&nbsp;
            <span className="text-5xl sm:text-6xl font-normal">
              Kartikey Bhatnagar
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl font-greatVibes mb-12">
            A Full Stack Web Developer
          </h1>

          <TypewriterEffectSmooth words={words} className="mb-12" />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-4xl text-black dark:text-white opacity-80">
            <FaRegHandPointDown size={40} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
