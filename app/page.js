import About from "@/components/About";
import Hero from "@/components/Hero";
import Me from "@/components/Me";
import TechStack from "@/components/TechStack";
import ThemeToggle from "@/components/toggle-theme";
import UiLibraries from "@/components/UI-libraries";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <About />
      <TechStack />
      <Me />
      <UiLibraries />
      <Footer />
    </>
  );
}
