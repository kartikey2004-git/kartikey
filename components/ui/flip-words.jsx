"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWordIndex}
        initial={{ opacity: 0, y: 10, rotateX: -90 }}
        animate={{ 
          opacity: isAnimating ? 0 : 1, 
          y: isAnimating ? -10 : 0, 
          rotateX: isAnimating ? 90 : 0 
        }}
        exit={{ opacity: 0, y: -10, rotateX: 90 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={`inline-block ${className}`}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {words[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

export default FlipWords;
