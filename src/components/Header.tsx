import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ease } from "@/lib/motion";
import ArrowSwap from "./ArrowSwap";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#portfolio", label: "Projetos" },
  { href: "#about", label: "Sobre" },
  { href: "#stacks", label: "Stacks" },
  { href: "#contact", label: "Contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const close = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="glass mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full pl-5 pr-2">
        <a href="#home" className="text-sm font-medium tracking-tight">
          Artur Cagliari<span className="text-muted-foreground">.</span>
        </a>

        {/* Pílula que desliza entre os links no hover */}
        <ul className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              {hovered === item.href && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-full bg-tint/[0.07]"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <a
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                className="relative block px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Magnetic className="hidden md:inline-flex">
            <a href="mailto:arturcagliari2018@gmail.com" className="button-light group !min-h-10">
              Vamos conversar
              <ArrowSwap className="h-3.5 w-3.5" />
            </a>
          </Magnetic>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-tint/[0.07] active:scale-95 md:hidden"
          >
            {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            className="glass-strong mx-auto mt-2 max-w-3xl rounded-3xl !bg-background/90 p-2 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-base transition-colors hover:bg-tint/[0.06]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:arturcagliari2018@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="button-light group mt-2 w-full"
            >
              Vamos conversar
              <ArrowSwap />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
