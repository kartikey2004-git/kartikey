import Github from "@/components/Github";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <main className="bg-black/70">
      <Hero />
      <TechStack />
      <Projects />
      <Github />
      {/* <Footer /> */}
    </main>
  );
}
