"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

// Typewriter with staggered animation
export const TypewriterEffect = ({ words = [], className = "", cursorClassName = "" }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${idx}-${index}`}
              initial={{ opacity: 0 }}
              className={cn("dark:text-white text-black", word.className)}
            >
              {char}
            </motion.span>
          ))}
          {idx !== wordsArray.length - 1 && <span className="px-[0.25em]"></span>}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};

// Smooth Reveal Variant
export const TypewriterEffectSmooth = ({
  words = [],
  className = "",
  cursorClassName = "",
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${idx}-${index}`}
              className={cn("dark:text-white text-black", word.className)}
            >
              {char}
            </span>
          ))}
          {idx !== wordsArray.length - 1 && <span className="px-[0.15em]"></span>}
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 items-center my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};
