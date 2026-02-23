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
      className="overflow-x-hidden border-b border-border bg-background py-14 sm:py-16"
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border md:grid-cols-1 lg:grid-cols-3">
        {/* LEFT AVATAR */}
        <div className="flex flex-col items-start justify-center border-b border-border bg-card p-6 text-start sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
          <h3 className="text-lg font-medium text-foreground sm:text-xl">
            What People Say
          </h3>

          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Real experiences from teammates, collaborators, and people I’ve
            built alongside.
          </p>
        </div>

        {/* CENTER QUOTE */}
        <div className="flex flex-col justify-center border-b border-border p-6 transition-all duration-500 ease-in-out sm:p-8 lg:border-r lg:border-b-0 lg:p-10">
          <div className="mb-6 text-base leading-relaxed text-foreground transition-opacity duration-500 sm:mb-8 sm:text-lg">
            &ldquo;{testimonials[currentTestimonial].content}&rdquo;
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-xs text-muted-foreground sm:text-sm">
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
                    ? "w-4 bg-foreground sm:w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT METRIC */}
        <div className="flex flex-col items-start justify-center bg-card p-6 sm:items-end sm:p-8 lg:p-10">
          <div className="text-left sm:text-right w-full">
            <div className="mb-2 text-4xl font-normal text-foreground transition-all duration-500 sm:text-5xl lg:text-6xl xl:text-7xl">
              {testimonials[currentTestimonial].metric}
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
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
