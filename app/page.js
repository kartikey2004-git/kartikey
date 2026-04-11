import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import TechStack from "@/components/TechStack";
import GithubSection from "@/components/Github";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/Blog";

export default function Home() {
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
