'use client';

import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing',
});

const Me = () => {
  return (
    <section
      className={`w-full bg-background text-foreground py-16 px-6 flex flex-col items-center justify-center mb-10 space-y-6 ${dancingScript.variable}`}
    >
      <h2 className="text-3xl md:text-5xl font-dancing text-center">
        I Like Building Things
      </h2>
      <p className="max-w-3xl text-base md:text-lg text-center text-gray-800 dark:text-gray-300">
        I'm actively participating in hackathons, as watching others bring
        innovative ideas to life is incredibly inspiring. It's one of the key
        reasons that keeps me motivated and driven.
      </p>
    </section>
  );
};

export default Me;
