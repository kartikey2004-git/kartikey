"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

const ParallaxBanner = () => {
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });

  const bannerBlur = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const bannerFilter = useMotionTemplate`blur(${bannerBlur}px)`;
  const bannerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
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
  );
};

export default ParallaxBanner;
