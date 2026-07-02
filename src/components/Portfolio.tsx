import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import dinamaraImg from "@/assets/projects/dinamara.png";
import advteixeiraImg from "@/assets/projects/advteixeira.png";
import solidchoiceImg from "@/assets/projects/solidchoice.png";
import brokerManagerImg from "@/assets/projects/managerbrooker.png";
import brokerManagerLandingImg from "@/assets/projects/landingpageparasaas.png";
import flowcrmImg from "@/assets/projects/flowcrm.png";
import { containerVariants, itemVariants, titleVariants, defaultViewport } from "@/lib/motion";

const projects = [
  {
    title: "FlowCRM",
    category: "CRM Full Stack",
    description:
      "CRM comercial com pipeline Kanban, dashboard analítico, assistente de IA e inbox WhatsApp. Backend em Laravel 12 e frontend em React 19.",
    image: flowcrmImg,
    tags: ["React", "TypeScript", "Laravel"],
    url: "https://github.com/artcagliari/flowcrm",
    type: "code" as const,
  },
  {
    title: "Solid Choice",
    category: "E-commerce Premium",
    description:
      "Loja virtual em produção com vitrine cinematográfica, catálogo, área logada e integração WhatsApp. Operação com Supabase.",
    image: solidchoiceImg,
    tags: ["React", "TypeScript", "TailwindCSS"],
    url: "https://solidchoice.com.br",
    type: "demo" as const,
  },
  {
    title: "BrokerManager",
    category: "SaaS Imobiliário",
    description:
      "Aplicação SaaS para corretores e imobiliárias: agenda, leads, funil de atendimento, pós-visita, comissões e follow-up.",
    image: brokerManagerImg,
    tags: ["React", "TypeScript", "TailwindCSS"],
    url: "https://brookermanager-client.vercel.app",
    type: "demo" as const,
  },
  {
    title: "BrokerManager Landing",
    category: "Landing Page",
    description:
      "Página de conversão para o CRM BrokerManager, com apresentação do produto, fluxo comercial e CTA de demonstração.",
    image: brokerManagerLandingImg,
    tags: ["React", "TypeScript", "TailwindCSS"],
    url: "https://manager-broker.vercel.app",
    type: "demo" as const,
  },
  {
    title: "Dinamara Lusa",
    category: "Site Institucional",
    description:
      "Portfólio profissional para escritório de advocacia especializado em direito tributário, com design moderno e responsivo.",
    image: dinamaraImg,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://dinamaralusaadv.com/",
    type: "demo" as const,
  },
  {
    title: "Adv Teixeira",
    category: "Site Institucional",
    description:
      "Protótipo de portfólio para escritório de advocacia, com design profissional e layout responsivo.",
    image: advteixeiraImg,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://arttest19.github.io/",
    type: "demo" as const,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={containerVariants}
        >
          <div>
            <motion.span variants={titleVariants} className="editorial-eyebrow mb-5">
              <span className="w-8 h-px bg-primary" />
              02 — Trabalhos selecionados
            </motion.span>
            <motion.h2
              variants={titleVariants}
              className="font-display font-semibold tracking-tight text-5xl md:text-6xl"
            >
              Meus <span className="text-shimmer italic">Projetos</span>
            </motion.h2>
          </div>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-sm md:text-right"
          >
            Uma curadoria dos meus principais trabalhos em produto digital, e-commerce e
            aplicações web.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="border-t border-border"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group grid md:grid-cols-12 gap-6 md:gap-8 items-center py-8 border-b border-border relative"
            >
              <div className="hidden md:block md:col-span-1 font-display text-2xl text-primary/30 group-hover:text-primary transition-colors">
                0{index + 1}
              </div>

              <div className="md:col-span-4 order-2 md:order-none overflow-hidden rounded-lg aspect-video bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="md:col-span-5">
                <span className="text-xs font-mono-ui uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-medium mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono-ui uppercase tracking-wide px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 flex md:justify-end items-center order-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono-ui uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary transition-colors">
                  {project.type === "code" ? (
                    <>
                      <Github className="w-4 h-4" /> Código
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" /> Demo
                    </>
                  )}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
