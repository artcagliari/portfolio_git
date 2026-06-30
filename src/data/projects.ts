import dinamaraImg from "@/assets/projects/dinamara.png";
import advteixeiraImg from "@/assets/projects/advteixeira.png";
import solidchoiceImg from "@/assets/projects/solidchoice.png";
import brokerManagerImg from "@/assets/projects/managerbrooker.png";
import brokerManagerLandingImg from "@/assets/projects/landingpageparasaas.png";
import flowcrmImg from "@/assets/projects/flowcrm.png";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl?: string;
  showDemo: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Adv Texeira",
    description: "Prototipo portfolio para escritório de advocacia",
    longDescription: "Protótipo de portfolio para escritório de advocacia com design profissional e responsivo.",
    image: advteixeiraImg,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://arttest19.github.io/",
    showDemo: true,
  },
  {
    title: "Portfolio Dinamara Lusa",
    description: "Design de portfolio moderno para escritório de advocacia especializado em direito tributário",
    longDescription: "Portfolio profissional para escritório de advocacia com foco em direito tributário e presença digital elegante.",
    image: dinamaraImg,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://dinamaralusaadv.com/",
    showDemo: true,
  },
  {
    title: "BrokerManager Landing",
    description: "Landing page de conversão para CRM de corretores e imobiliárias",
    longDescription: "Página institucional do BrokerManager com foco em conversão: apresentação do CRM, fluxo comercial, especificações do produto e CTA para demonstração via WhatsApp.",
    image: brokerManagerLandingImg,
    tags: ["Typescript", "React", "TailwindCSS"],
    demoUrl: "https://manager-broker.vercel.app",
    showDemo: true,
  },
  {
    title: "BrokerManager",
    description: "SaaS de gestão imobiliária com agenda, leads, funil comercial e follow-up",
    longDescription: "Aplicação SaaS para corretores e imobiliárias: agenda de visitas, gestão de leads, funil de atendimento, registro pós-visita, comissões e alertas de follow-up em uma rotina comercial centralizada.",
    image: brokerManagerImg,
    tags: ["Typescript", "React", "TailwindCSS"],
    demoUrl: "https://brookermanager-client.vercel.app",
    showDemo: true,
  },
  {
    title: "FlowCRM",
    description: "CRM comercial full-stack com pipeline Kanban, dashboard, IA e inbox WhatsApp",
    longDescription: "CRM comercial full-stack com pipeline Kanban, dashboard analítico, assistente de IA, inbox WhatsApp e integrações. Backend em Laravel 12 com API REST e Sanctum; frontend em React 19 com Vite e Tailwind CSS.",
    image: flowcrmImg,
    tags: ["Typescript", "React", "Laravel"],
    demoUrl: "https://github.com/artcagliari/flowcrm",
    githubUrl: "https://github.com/artcagliari/flowcrm",
    showDemo: false,
  },
  {
    title: "Solid Choice",
    description: "E-commerce premium com landing cinematográfica e compra assistida internacional",
    longDescription: "Plataforma em produção para a Solid Choice: vitrine de conversão, catálogo, área logada, integração com WhatsApp e experiência visual cinematográfica. Operação com Supabase e UX/UI refinado.",
    image: solidchoiceImg,
    tags: ["Typescript", "React", "TailwindCSS"],
    demoUrl: "https://solidchoice.com.br",
    showDemo: true,
    featured: true,
  },
];

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
};

export const filterProjects = (tag: string | null): Project[] => {
  if (!tag || tag === "Todos") return projects;
  return projects.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
};

export const getFilterCategories = (): string[] => {
  return ["Todos", "React", "HTML", "CSS", "JavaScript", "Typescript", "TailwindCSS", "Laravel"];
};
