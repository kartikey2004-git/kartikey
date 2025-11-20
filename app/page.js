import Footer from "@/components/Footer";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import UiLibraries from "@/components/UI-libraries";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Github />
      <UiLibraries />
      <Me />
      <Footer />
    </>
  );
}
