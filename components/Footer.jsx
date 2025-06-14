// Footer.tsx
import React from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const Footer = () => {
  return (
    <footer
      className={`relative w-full h-72 bg-background text-foreground flex flex-col items-center justify-center overflow-hidden ${greatVibes.variable}`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 grid-background" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-greatVibes mb-4">Kartikey Bhatnagar</h1>
        <p className="text-sm bg-background text-foreground">© 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
