import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";
import udemyCertificate from "@/assets/projects/udemy.jpg";
import AnimatedCounter from "./AnimatedCounter";
import {
  containerVariants,
  itemVariants,
  titleVariants,
  titleVariantsLeft,
  defaultViewport,
} from "@/lib/motion";

const About = () => {
  const stats = [
    { value: 18, suffix: "", label: "Anos" },
    { value: 10, suffix: "+", label: "Projetos" },
    { value: 11, suffix: "", label: "Tecnologias" },
    { value: 1, suffix: "", label: "Estágio" },
  ];

  const experiences = [
    {
      title: "Estagiário de Desenvolvimento",
      company: "Blasternet Telecom",
      period: "03/2026 - 06/2026",
      description:
        "Desenvolvimento full-stack de chatbot com IA para WhatsApp, utilizando React no frontend e Laravel no backend.",
    },
    {
      title: "Assistente Administrativo",
      company: "Escritório Dinamara Lusa",
      period: "01/2023 - 09/2023",
      description:
        "Suporte administrativo, organização de documentos e rotinas do escritório, atendimento e apoio operacional.",
    },
    {
      title: "Estudante de Informática",
      company: "IFRS Campus Bento",
      period: "2024 - Presente",
      description:
        "Curso técnico em Informática com foco em desenvolvimento web e programação",
    },
  ];

  const education = [
    {
      degree: "Desenvolvimento Web Completo",
      institution: "Udemy",
      period: "2025",
      description:
        "20 cursos + 20 projetos - 120 horas totais. Certificação completa em desenvolvimento web full-stack.",
    },
    {
      degree: "Técnico em Informática",
      institution: "IFRS Campus Bento",
      period: "2024 - Presente",
      description:
        "Curso técnico com aprofundamento em desenvolvimento web, programação e aplicação prática de conceitos.",
    },
  ];

  return (
    <section id="about" className="py-20 relative section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={containerVariants}
        >
          <motion.div className="flex flex-col items-center mb-14" variants={titleVariants}>
            <span className="editorial-eyebrow mb-5">
              <span className="w-8 h-px bg-primary" />
              01 — Quem sou eu
            </span>
            <h2 className="font-display font-semibold tracking-tight text-5xl md:text-6xl text-center">
              Sobre <span className="text-shimmer italic">Mim</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 items-center max-w-5xl mx-auto">
            <motion.div
              className="lg:col-span-2 flex justify-center"
              variants={titleVariantsLeft}
            >
              <div className="relative group w-56 h-56 lg:w-64 lg:h-64">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
                <motion.img
                  src={profileImage}
                  alt="Artur Cagliari"
                  className="relative w-full h-full object-cover rounded-3xl border-2 border-primary/30 shadow-2xl"
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.div
                  className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-primary/30 shadow-glow-primary backdrop-blur"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">Carlos Barbosa, RS</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-3 space-y-6" variants={itemVariants}>
              <p className="text-muted-foreground text-lg leading-relaxed text-center lg:text-left">
                Sou desenvolvedor full stack de Carlos Barbosa, especializado em criar aplicações
                web completas, modernas e de fácil usabilidade — do frontend ao backend. Tenho 18
                anos e estou sempre buscando unir design e funcionalidade. Realizei estágio na{" "}
                <span className="text-primary font-medium">Blasternet Telecom</span>, onde desenvolvi
                um chatbot com IA para WhatsApp em stack full-stack com React e Laravel. Apaixonado
                por tecnologia, estudo por conta própria TypeScript, React e Node.js, enquanto pelo
                IFRS Campus Bento aprendi HTML, CSS, JavaScript, PHP, MySQL e outras tecnologias no
                curso técnico de Informática.
              </p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-display text-3xl lg:text-4xl font-semibold text-primary"
                    />
                    <div className="text-[11px] font-mono-ui uppercase tracking-[0.15em] text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Experiência
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Educação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <motion.div
              className="relative pl-8 md:pl-10 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              <div className="absolute left-3 md:left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <span className="absolute -left-[26px] md:-left-[30px] top-5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow-primary" />
                  <Card className="glass-card p-6 hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-primary mb-2">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="glass-card p-6">
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 shrink-0">
                          {index === 0 ? (
                            <Award className="w-5 h-5 text-accent" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-accent" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <span className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-accent mb-2">{edu.institution}</p>
                          <p className="text-muted-foreground">{edu.description}</p>
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="lg:w-48 w-full certificate-container">
                          <div className="relative group cursor-pointer certificate-glow rounded-lg">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-500 animate-pulse" />
                            <img
                              src={udemyCertificate}
                              alt="Certificado Udemy - Desenvolvimento Web Completo"
                              loading="lazy"
                              className="relative w-full h-auto rounded-lg border-2 border-accent/30 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:border-accent/60"
                            />
                            <div className="absolute inset-0 overflow-hidden rounded-lg">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                            <div className="absolute top-2 right-2 w-2 h-2 bg-accent/60 rounded-full particle-float" />
                            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-primary/60 rounded-full particle-float" style={{ animationDelay: "1s" }} />
                          </div>
                          <p className="text-xs text-muted-foreground text-center mt-2 group-hover:text-accent transition-colors duration-300">
                            Certificado de Conclusão
                          </p>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
