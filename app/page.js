import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
  return (
    <main className="bg-black/70">
      <Hero />
      <ProjectsSection />
      <WhoAmI />
      <TechStack />
      <Github />
      <Contact />
      <Footer />
    </main>
  );
}
