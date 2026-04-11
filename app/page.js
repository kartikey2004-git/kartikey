"use client";

import { useEffect } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import TechStack from "@/components/TechStack";
import GithubSection from "@/components/Github";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/Blog";

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling when page loads
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure all components are rendered
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden bg-background text-foreground min-w-0">
      <Hero />
      <ProjectsSection />
      <TechStack />
      <GithubSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </main>
  );
}
