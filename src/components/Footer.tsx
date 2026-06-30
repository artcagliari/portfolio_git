import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";

const navLinks = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contact", label: "Contato" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/artcagliari", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/artur-cagliari-206b0936b", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/artur.cagliari", label: "Instagram" },
];

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="mt-20 pt-12 border-t border-primary/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-bold text-primary mb-3">Artur Cagliari</h3>
          <p className="text-sm text-muted-foreground">
            Frontend Developer criando experiências digitais modernas e funcionais.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Redes Sociais</h4>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-secondary/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Icon className="w-4 h-4 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-primary/10">
        <p className="text-sm text-muted-foreground">© 2025 Artur Cagliari. Todos os direitos reservados.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          Voltar ao topo
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
