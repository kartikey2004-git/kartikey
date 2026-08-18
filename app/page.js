import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import TechStack from "@/components/TechStack";
import GithubSection from "@/components/Github";
import BlogSection from "@/components/Blog";
import PersonalSection from "@/components/Personal";
import GetInTouch from "@/components/GetInTouch";
import HashScrollHandler from "@/components/HashScrollHandler";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden bg-background text-foreground min-w-0">
      <HashScrollHandler />
      <Hero />
      <ProjectsSection />
      <TechStack />
      <GithubSection />
      <BlogSection />
      <PersonalSection />
      <GetInTouch />
      <Footer />
    </main>
  );
}
