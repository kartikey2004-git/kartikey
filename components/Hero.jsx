"use client";

import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaXTwitter as FaXTwitterIcon } from "react-icons/fa6";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import FlipWords from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const roles = ["Developer", "Engineer", "Learner", "Builder"];

  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });

  const bannerBlur = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const bannerFilter = useMotionTemplate`blur(${bannerBlur}px)`;
  const bannerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

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
      link: "https://www.instagram.com/k4rtikhuu",
      label: "Instagram",
    },
  ];

  return (
    <section id="hero" className="relative w-full bg-background">
      <div ref={bannerRef} className="relative h-40 w-full overflow-hidden sm:h-52 md:h-64">
        <motion.div
          className="absolute inset-0"
          style={{ filter: bannerFilter, opacity: bannerOpacity, scale: bannerScale }}
        >
          <Image
            src="/background.jpg"
            alt="Manali mountains"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div className="relative pb-12 sm:pb-14 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className=" bg-background">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row sm:items-end gap-5 -mt-14 sm:-mt-16 md:-mt-20 sm:-ml-3">
                  <div className="shrink-0">
                    <div className="relative h-24 w-24 overflow-hidden sm:h-28 sm:w-28 md:h-32 md:w-32">
                      <Image
                        src="/svgs/me.png"
                        alt="Kartikey"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 sm:pb-1">
                    <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">
                      Hi, I'm Kartikey
                    </h1>

                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="eyebrow">
                        Ghaziabad, India
                      </span>

                      <span className="eyebrow text-muted-foreground/20">/</span>

                      <span className="eyebrow">
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
                      <Button
                        key={label}
                        asChild
                        variant="ghost"
                        size="icon-sm"
                        className="text-muted-foreground hover:bg-transparent hover:text-muted-foreground md:hover:bg-accent md:hover:text-foreground transition-all duration-300 md:hover:scale-105 rounded-sm"
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      </Button>
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
