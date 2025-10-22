import { ArrowRight, Code, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeWindow from "./CodeWindow";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const codeWindowVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Code className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium">Ready to Innovate</span>
            </motion.div>

            <div>
              <motion.h1 className="text-5xl md:text-7xl font-bold mb-4">
                <motion.span 
                  className="text-foreground inline-block"
                  variants={titleVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  Front-end
                </motion.span>
                <br />
                <motion.span 
                  className="text-primary drop-shadow-glow-primary inline-block"
                  variants={titleVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: "linear-gradient(90deg, #e2e8f0, #64b5f6, #e2e8f0)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "text-shimmer 3s linear infinite"
                  }}
                >
                  Developer
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-accent font-semibold mb-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                Tech Enthusiast
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground text-lg max-w-xl"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                Criando websites inovadores, funcionais e user-friendly para soluções digitais modernas e eficientes.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {["JavaScript", "CSS", "React", "TailwindCSS", "Typescript", "Node.js"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: Math.random() * 10 - 5,
                    boxShadow: "0 0 20px rgba(100, 181, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary group"
                  asChild
                >
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    Ver Projetos
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </motion.button>
                </Button>
              </motion.div>
              
              <motion.div variants={buttonVariants}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    Entrar em Contato
                  </motion.button>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/artcagliari"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/artur-cagliari-206b0936b"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/artur.cagliari"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={codeWindowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { type: "spring" as const, stiffness: 300, damping: 20 }
            }}
          >
            <div className="flex justify-center">
              <CodeWindow />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
