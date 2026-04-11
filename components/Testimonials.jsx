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
      className="overflow-x-hidden border-b border-border bg-background py-8 sm:py-10 md:py-12 lg:py-14 border-t border-border"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-5 lg:px-8 grid grid-cols-1 overflow-hidden sm:grid-cols-1">
        {/* LEFT AVATAR */}
        <div className="flex flex-col items-start justify-center text-start">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            What People Say
          </h3>

          <p className="mt-2 max-w-xs text-sm text-muted-foreground leading-relaxed mb-4">
            Real experiences from teammates, collaborators, and people I’ve
            built alongside.
          </p>
        </div>

        {/* CENTER QUOTE */}
        <div className="flex flex-col justify-center border-border transition-all duration-500 ease-in-out">
          <div className="mb-4 sm:mb-6 lg:mb-8 text-md leading-relaxed text-foreground transition-opacity duration-500 sm:text-lg">
            &ldquo;{testimonials[currentTestimonial].content}&rdquo;
          </div>

          <div className="space-y-2 sm:mb-3 md:mb-0">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {testimonials[currentTestimonial].role} at{" "}
              {testimonials[currentTestimonial].company}
            </p>
          </div>

          {/* Testimonial dots */}
          <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4 lg:mt-6 sm:mb-3 md:mb-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 transition-all duration-300 rounded-sm ${index === currentTestimonial
                  ? "w-3 sm:w-4 lg:w-6 bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT METRIC */}
        <div className="flex flex-col items-start justify-center sm:items-end mt-3">
          <div className="text-left sm:text-right w-full">
            <div className="mb-2 text-2xl font-normal text-foreground transition-all duration-500 sm:text-4xl lg:text-5xl xl:text-6xl">
              {testimonials[currentTestimonial].metric}
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
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
