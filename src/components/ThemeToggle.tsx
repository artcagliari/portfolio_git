import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f7f7f7" : "#0a0a0a");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // armazenamento indisponível (aba privada): o tema só não é lembrado
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={next === "light" ? "Ativar tema claro" : "Ativar tema escuro"}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full text-muted-foreground transition-colors hover:bg-tint/[0.07] hover:text-foreground active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
        >
          {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
