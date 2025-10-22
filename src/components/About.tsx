import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Code2, Briefcase, GraduationCap, Award } from "lucide-react";
import CodeWindow from "./CodeWindow";
import profileImage from "@/assets/profile.jpg";
import udemyCertificate from "@/assets/projects/udemy.jpg";

const About = () => {


  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelancer",
      period: "2024 - Presente",
      description: "Criação de websites responsivos, landing pages e sistemas web modernos para diversos clientes",
    },
    {
      title: "Estudante de Informática",
      company: "IFRS Campus Bento",
      period: "2024 - Presente",
      description: "Curso técnico em Informática com foco em desenvolvimento web e programação",
    },
  ];

  const education = [
    {
      degree: "Desenvolvimento Web Completo",
      institution: "Udemy",
      period: "2025",
      description: "20 cursos + 20 projetos - 120 horas totais. Certificação completa em desenvolvimento web full-stack.",
    },
    {
      degree: "Técnico em Informática",
      institution: "IFRS Campus Bento",
      period: "2024 - Presente",
      description: "Curso técnico com aprofundamento em desenvolvimento web, programação e aplicação prática de conceitos.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in-up">
            Sobre <span 
              className="text-primary"
              style={{
                background: "linear-gradient(90deg, #e2e8f0, #64b5f6, #e2e8f0)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "text-shimmer 3s linear infinite"
              }}
            >
              Mim
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
            <div className="lg:col-span-1 flex justify-center lg:justify-start animate-fade-in-left">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl" />
                <img
                  src={profileImage}
                  alt="Artur Cagliari"
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300"
                />
                
              </div>
            </div>

            <div className="lg:col-span-2 text-center lg:text-left animate-fade-in-right">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou desenvolvedor front-end de Carlos Barbosa, especializado em criar interfaces modernas, responsivas e de fácil usabilidade. Tenho 18 anos e já possuo experiência com HTML, CSS e JavaScript, sempre buscando unir design e funcionalidade. Apaixonado por tecnologia, estou em constante aprendizado e atualmente focado em adquirir conhecimentos em TypeScript e React. Estudo no IFRS Campus Bento, no curso técnico de Informática.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="skills" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 animate-fade-in-up animate-stagger-1">
            <TabsTrigger 
              value="skills" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:scale-105 transition-transform duration-300"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Habilidades
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:scale-105 transition-transform duration-300"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Experiência
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:scale-105 transition-transform duration-300"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Educação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <div className="tech-icons-grid">
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" title="HTML5" />
                </div>
                <span>HTML5</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" title="CSS3"/>
                </div>
                <span>CSS3</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title="JavaScript"/>
                </div>
                <span>JavaScript</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" title="bootstrap"/>
                </div>
                <span>Bootstrap</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="tailwindcss"/>
                </div>
                <span>Tailwind CSS</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" title="Mysql"/>
                </div>
                <span>MySQL</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="React"/>
                </div>
                <span>React</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="Typescript"/>
                </div>
                <span>Typescript</span>
              </div>
              <div className="tech-icon">
                <div className="icon-container">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" title="NodeJS"/>
                </div>
                <span>NodeJS</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-4">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + (index * 200)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + (index * 200)}
              >
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                      {index === 0 ? (
                        <Award className="w-5 h-5 text-accent" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-accent mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <div className="lg:w-48 w-full animate-in fade-in slide-in-from-right duration-700 delay-300 certificate-container">
                      <div className="relative group cursor-pointer certificate-glow">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-500 animate-pulse" />
                        
                        <img
                          src={udemyCertificate}
                          alt="Certificado Udemy - Desenvolvimento Web Completo"
                          className="relative w-full h-auto rounded-lg border-2 border-accent/30 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:border-accent/60"
                        />
                        
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-500" />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg certificate-shimmer" />
                        
                        <div className="absolute top-2 right-2 w-2 h-2 bg-accent/60 rounded-full particle-float" />
                        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-primary/60 rounded-full particle-float" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 left-2 w-1 h-1 bg-accent/40 rounded-full particle-float" style={{ animationDelay: '2s' }} />
                      </div>
                      
                      <p className="text-xs text-muted-foreground text-center mt-2 group-hover:text-accent transition-colors duration-300 animate-in fade-in slide-in-from-bottom duration-500 delay-500">
                        Certificado de Conclusão
                      </p>
                      
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center animate-pulse">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
