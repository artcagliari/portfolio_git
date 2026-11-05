import ArrowSwap from "./ArrowSwap";

const Footer = () => (
  <footer className="mt-24 flex flex-col gap-4 border-t border-tint/10 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
    <p>© {new Date().getFullYear()} Artur Cagliari. Feito com cuidado no Rio Grande do Sul.</p>
    <a href="#home" className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
      Voltar ao topo
      <ArrowSwap direction="up" className="h-3.5 w-3.5" />
    </a>
  </footer>
);

export default Footer;
