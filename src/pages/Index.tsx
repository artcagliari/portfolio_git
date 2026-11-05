import { MotionConfig } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Stacks from "@/components/Stacks";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <a href="#home" className="skip-link">Pular para o conteúdo</a>
        <Header />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Stacks />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
};

export default Index;
