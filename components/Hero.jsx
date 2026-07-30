"use client";

import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaXTwitter as FaXTwitterIcon } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import FlipWords from "@/components/ui/flip-words";

const Hero = () => {
  const roles = ["Developer", "Engineer", "Learner", "Builder"];

  const socialLinks = [
    {
      icon: FaXTwitterIcon,
      link: "https://x.com/kartikeybuilds",
      label: "Twitter",
    },
    {
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      label: "LinkedIn",
    },
    {
      icon: BsGithub,
      link: "https://github.com/kartikey2004-git",
      label: "GitHub",
    },
    {
      icon: BsInstagram,
      link: "https://www.instagram.com/_k4rtik.exe",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full bg-background"
    >
      <div className="relative pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className=" bg-background">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="shrink-0">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 overflow-hidden rounded-full ring-2 ring-background">
                      <Image
                        src="/toji.png"
                        alt="Kartikey"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
                      Hi, I'm Kartikey
                    </h1>

                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono uppercase tracking-[0.15em]">
                      <span className="text-muted-foreground/60">
                        Ghaziabad, India
                      </span>

                      <span className="text-muted-foreground/20">/</span>

                      <span className="text-muted-foreground/60">
                        Engineer at caffeine
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm uppercase text-muted-foreground">
                        21,
                      </span>

                      <FlipWords
                        words={roles}
                        duration={2000}
                        className="text-sm text-muted-foreground"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-1 flex-wrap">
                    {socialLinks.map(({ icon: Icon, link, label }, index) => (
                      <a
                        key={label}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted-foreground md:hover:text-foreground md:hover:bg-accent transition-all duration-300 md:hover:scale-105 rounded-sm"
                        aria-label={label}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-right sm:text-sm">
                    Learning | Building | Shipping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
