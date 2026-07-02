import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stacks from "@/components/Stacks";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <a href="#home" className="skip-link">Pular para o conteúdo</a>
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Stacks />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
