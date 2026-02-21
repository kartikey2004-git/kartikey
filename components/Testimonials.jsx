"use client";

import React, { useEffect, useState } from "react";
import { testimonials } from "@/app/data";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-black/60 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 border-b border-white/10">
        {/* LEFT AVATAR */}
        <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 lg:p-12 flex flex-col items-start justify-center text-start bg-gradient-to-br from-white/[0.02] to-white/[0.01]">
          <h3 className="text-white/90 text-lg sm:text-xl font-medium">
            What People Say
          </h3>

          <p className="text-sm text-white/50 mt-2 max-w-xs leading-relaxed">
            Real experiences from teammates, collaborators, and people I’ve
            built alongside.
          </p>
        </div>

        {/* CENTER QUOTE */}
        <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center transition-all duration-500 ease-in-out">
          <div className="text-white/90 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 transition-opacity duration-500">
            &ldquo;{testimonials[currentTestimonial].content}&rdquo;
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-white text-sm sm:text-base">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-white/60 text-xs sm:text-sm">
              {testimonials[currentTestimonial].role} at{" "}
              {testimonials[currentTestimonial].company}
            </p>
          </div>

          {/* Testimonial dots */}
          <div className="flex gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-red-500 w-4 sm:w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT METRIC */}
        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-start sm:items-end bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="text-left sm:text-right w-full">
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent transition-all duration-500">
              {testimonials[currentTestimonial].metric}
            </div>
            <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">
              {currentTestimonial === 0
                ? "Load Time Improvement"
                : currentTestimonial === 1
                  ? "Platform Success"
                  : currentTestimonial === 2
                    ? "Engagement Increase"
                    : currentTestimonial === 3
                      ? "Time Saved Weekly"
                      : "Development Speed"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
