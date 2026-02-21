import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import TechStack from "@/components/TechStack";

import GithubSection from "@/components/Github";

import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-black/70 overflow-x-hidden">
      <Hero />
      <ProjectsSection />
      <TechStack />
      <GithubSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
