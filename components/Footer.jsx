"use client";

import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black max-w-full">
      <div className="h-auto md:h-[28rem] w-full max-w-7xl mx-auto rounded-md bg-black relative flex flex-col justify-between antialiased mb-4 border border-white/10 overflow-hidden">
        <BackgroundBeams />

        {/* Top Section (Heading + Button) */}
        <div className="relative z-10 flex flex-col items-start px-6 md:px-10 pt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 max-w-full md:max-w-lg">
            Like what you see? Reach
            <br />
            out <span className="text-blue-500 underline">via email</span> to
            collaborate!
          </h2>
          <a
            href="mailto:kartikeybhatnagar247@gmail.com"
            className="group relative px-6 py-2 bg-white/5 backdrop-blur-xl text-white rounded-md border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center gap-3 font-medium text-base shadow-xl overflow-hidden mt-4"
          >
            Schedule Call
            <ChevronRight />
            <div className="absolute inset-0 w-1/12 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shine"></div>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 mx-6 md:mx-10" />

        {/* Footer Bottom */}
        <footer className="relative z-10 px-6 md:px-10 pb-6 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10 text-sm text-gray-400 w-full">
            {/* Left Side */}
            <div className="text-center md:text-left">
              <p className="font-medium text-white text-lg">
                Kartikey Bhatnagar
              </p>
              <p>© 2025 | All rights reserved</p>
            </div>

            {/* Right Side (3 columns) */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 w-full md:w-auto text-center sm:text-left">
              {/* Navigate */}
              <div>
                <h4 className="text-white font-semibold mb-3">Navigate</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollToSection("hero")}
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="hover:text-white transition-colors"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="hover:text-white transition-colors"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <a
                      href="mailto:kartikeybhatnagar247@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h4
                  onClick={() => scrollToSection("projects")}
                  className="text-white font-semibold mb-3 cursor-pointer hover:underline transition-colors"
                >
                  Projects
                </h4>
                <ul className="space-y-2">
                  <li>VartaX</li>
                  <li>RankBit</li>
                  <li>Connectify</li>
                  <li>RouteX</li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-white font-semibold mb-3">Socials</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/kartikey2004-git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Bh20291Kartikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
