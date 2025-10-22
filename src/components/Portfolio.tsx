import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import cafeteriaImg from "@/assets/projects/cafeteria.png";
import academiaImg from "@/assets/projects/academia.png";
import dinamaraImg from "@/assets/projects/dinamara.png";
import napneImg from "@/assets/projects/napne.png";
import advteixeiraImg from "@/assets/projects/advteixeira.png";
import scoutImg from "@/assets/projects/scout.png";
import eccomerceImg from "@/assets/projects/eccomerce.png";
import dashboardImg from "@/assets/projects/dashboard.png";

const Portfolio = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const projects = [
    {
      title: "Landing Page Cafeteria",
      description: "Design de cafeteria moderno com experiência de usuário elegante e aconchegante",
      image: cafeteriaImg,
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://artcagliari.github.io/Landing-Page-Cafeteria/",
      showDemo: true,
    },
    {
      title: "Landing Page Academia",
      description: "Design de academia moderno com layout responsivo e sistema de matrículas",
      image: academiaImg,
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://artcagliari.github.io/Landing-Page-Academia/",
      showDemo: true,
    },
    {
      title: "Portfolio Dinamara Lusa",
      description: "Design de portfolio moderno para escritório de advocacia especializado em direito tributário",
      image: dinamaraImg,
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://dinamaralusaadv.com/",
      showDemo: true,
    },
    {
      title: "Sistema NAPNE",
      description: "Sistema escolar para inclusão e gerenciamento de PEIs (Planos Educacionais Individualizados)",
      image: napneImg,
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://artcagliari.github.io/Prot-tito-front-end-de-projeto-integrado/",
      showDemo: true,
    },
    {
      title: "Portfolio Adv Texeira",
      description: "Prototipo portfolio para escritório de advocacia",
      image: advteixeiraImg,
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://arttest19.github.io/",
      showDemo: true,
    },
      {
        title: "Projeto Scout de volei",
        description: "Projeto de site para o Scout de volei",
        image: scoutImg,
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://artcagliari.github.io/projeto-scout/",
        showDemo: true,
      },
      {
        title: "Eccomerce",
        description: "Projeto de site para eccomerce",
        image: eccomerceImg,
        tags: ["Typescript", "React", "TailwindCSS"],
        demoUrl: "https://ecommerce-ts-prototipe.vercel.app",
        showDemo: true,
      },
      {
        title: "Dashboard",
        description: "Projeto de dashboard para gerenciamento de dados",
        image: dashboardImg,
        tags: ["Typescript", "React", "TailwindCSS"],
        demoUrl: "https://dashboard-finan-as.vercel.app",
        showDemo: true,
      },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={titleVariants}
            whileHover={{ scale: 1.05 }}
          >
            Meu <motion.span 
              className="text-primary"
              style={{
                background: "linear-gradient(90deg, #e2e8f0, #64b5f6, #e2e8f0)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "text-shimmer 3s linear infinite"
              }}
            >
              Portfólio
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            Aqui estão alguns dos meus projetos recentes mostrando minhas habilidades em desenvolvimento frontend
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary h-full">
                <div className="relative overflow-hidden aspect-video bg-secondary">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 2,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating particles on hover */}
                  <motion.div 
                    className="absolute top-2 right-2 w-2 h-2 bg-accent/60 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0],
                      transition: { duration: 0.6, repeat: Infinity }
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-primary/60 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0],
                      transition: { duration: 0.6, repeat: Infinity, delay: 0.3 }
                    }}
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <motion.h3 
                    className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary"
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: Math.random() * 10 - 5,
                          boxShadow: "0 0 15px rgba(100, 181, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex justify-left pt-2">
                    {project.showDemo ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:bg-primary/10 hover:scale-102 transition-all duration-200 text-xs py-1.5 px-4 min-h-[28px] w-auto"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.demoUrl, "_blank");
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1.5" />
                        Demo
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 hover:bg-primary/10 hover:scale-102 transition-all duration-200 text-xs py-1.5 px-4 min-h-[28px] w-auto"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.demoUrl, "_blank");
                        }}
                      >
                        <Github className="w-3 h-3 mr-1.5" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
