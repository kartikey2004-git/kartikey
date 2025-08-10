"use client";

import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
});

const Me = () => {
  return (
    <section
      className={`w-full bg-background text-foreground py-16 px-6 flex flex-col items-center justify-center mb-10 space-y-6 ${dancingScript.variable}`}
    >
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10",
          dancingScript.variable
        )}
      >
        I Like Building Things
      </h2>

      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-center text-gray-800 dark:text-gray-300 leading-relaxed">
        I’m always drawn to hackathons—seeing people turn ideas into real
        projects is both inspiring and energizing. That spark of creativity is
        what keeps me exploring, learning, and building.
      </p>
    </section>
  );
};

export default Me;
