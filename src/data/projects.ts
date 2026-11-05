import brokerManager from "@/assets/projects/broker-manager.jpg";
import brokerManagerLanding from "@/assets/projects/broker-manager-landing.jpg";
import dinamaraLusa from "@/assets/projects/dinamara-lusa.jpg";
import advTeixeira from "@/assets/projects/adv-teixeira.jpg";
import viviConceito from "@/assets/projects/vivi-conceito.jpg";
import bemVino from "@/assets/projects/bem-vino.jpg";
import mcjVila from "@/assets/projects/mcj-vila.jpg";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "BrokerManager",
    category: "SaaS imobiliário",
    description: "Aplicação para corretores e imobiliárias com agenda, leads, funil comercial, comissões e follow-up.",
    image: brokerManager,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://brookermanager-client.vercel.app",
  },
  {
    title: "BrokerManager Landing",
    category: "Landing page",
    description: "Página de conversão do BrokerManager com apresentação do produto, fluxo comercial e CTA de demonstração.",
    image: brokerManagerLanding,
    tags: ["React", "TypeScript", "Conversão"],
    url: "https://manager-broker.vercel.app",
  },
  {
    title: "Dinamara Lusa",
    category: "Site institucional",
    description: "Portfólio profissional para escritório de advocacia especializado em direito tributário.",
    image: dinamaraLusa,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://dinamaralusaadv.com/",
  },
  {
    title: "Adv Teixeira",
    category: "Site institucional",
    description: "Protótipo de portfólio para escritório de advocacia com apresentação profissional e layout responsivo.",
    image: advTeixeira,
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://arttest19.github.io/",
  },
  {
    title: "Vivi Conceito",
    category: "Beleza & serviços",
    description: "Presença digital para salão de beleza com serviços, portfólio e agendamento direto pelo WhatsApp.",
    image: viviConceito,
    tags: ["React", "Landing page", "Conversão"],
    url: "https://viviconceito.vercel.app",
  },
  {
    title: "Bem Vino",
    category: "Viagens & experiências",
    description: "Vitrine imersiva para viagens personalizadas, enogastronomia e experiências autorais.",
    image: bemVino,
    tags: ["React", "Storytelling", "Animação"],
    url: "https://bem-vino-site.vercel.app",
  },
  {
    title: "MC JVILA",
    category: "Música & entretenimento",
    description: "Site oficial para reunir lançamentos, agenda de shows, vídeos e novidades do artista.",
    image: mcjVila,
    tags: ["React", "Audiovisual", "Landing page"],
    url: "https://mcjvila-site.vercel.app",
  },
];
