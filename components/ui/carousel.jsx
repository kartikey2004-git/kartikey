"use client";
import { useRef, useState, useEffect } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const slideImages = ["/a.png", "/b.png", "/c.png", "/mountain.jpeg"];

const content = {
  title: "Taskify - Task Management App",
  button: "Demo",
  intro:
    "A powerful and minimal task management tool to keep teams organized and productive.",
  tech: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
  features: [
    "Real-time task updates",
    "Drag-and-drop UI",
    "User authentication",
    "Responsive design",
  ],
};

const CarouselCard = ({ src, fade }) => (
  <div
    className={`w-full bg-white dark:bg-neutral-900 rounded-xl shadow-xl overflow-hidden transition-opacity duration-500 ${
      fade ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <img src={src} alt="project" className="w-full h-40 sm:h-48 object-cover" />
    <div className="p-6 space-y-3 text-center text-sm sm:text-base">
      <h2 className="text-lg sm:text-base font-semibold leading-snug text-neutral-800 dark:text-white">
        {/* First word for small screens */}
        <span className="block sm:hidden">{content.title.split(" ")[0]}</span>

        {/* Full title for medium and up */}
        <span className="hidden sm:block">{content.title}</span>
      </h2>

      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        {content.intro}
      </p>

      {/* Tech */}
      <div>
        <p className="font-semibold text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          Tech Stack:
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-1">
          {content.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="text-left text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        <p className="font-semibold mb-1 text-center">Features:</p>
        <ul className="list-disc list-inside space-y-1 max-w-sm mx-auto">
          {content.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-end sm:justify-end md:ml-0 sm:ml-10">
        <button className="text-xs sm:text-sm px-4 sm:px-5 py-2 font-medium bg-black text-white rounded-lg hover:bg-neutral-800 transition">{content.button}</button>
      </div>
    </div>
  </div>
);

const ArrowButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 hidden sm:flex ${
      direction === "left" ? "-left-9" : "-right-9"
    } p-3 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full shadow-md hover:scale-110 transition`}
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    <IconArrowNarrowRight
      className={`w-6 h-6 ${direction === "left" ? "rotate-180" : ""}`}
    />
  </button>
);

export default function CleanCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const changeSlide = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 150);
  };

  const nextSlide = () => changeSlide((index + 1) % slideImages.length);
  const prevSlide = () =>
    changeSlide((index - 1 + slideImages.length) % slideImages.length);

  const handleTouchStart = (e) =>
    (touchStartX.current = e.changedTouches[0].screenX);
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const dist = touchStartX.current - touchEndX.current;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 pb-4 flex flex-col items-center justify-start mx-auto"
    >
      <ArrowButton onClick={prevSlide} direction="left" />
      <div className="relative w-full">
        <CarouselCard src={slideImages[index]} fade={fade} />
      </div>
      <ArrowButton onClick={nextSlide} direction="right" />

      {/* Dots */}
      <div className="mt-5 flex gap-2">
        {slideImages.map((_, i) => (
          <button
            key={i}
            onClick={() => changeSlide(i)}
            className={`w-3 h-3 rounded-full ${
              i === index
                ? "bg-black dark:bg-white"
                : "bg-neutral-400 dark:bg-neutral-600"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
