import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-sm"
      } animate-slide-from-top`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary animate-fade-in-left text-shimmer">Artur Cagliari</h2>

          <div className="hidden md:flex gap-8">
            {[
              { id: "home", label: "Início" },
              { id: "about", label: "Sobre" },
              { id: "portfolio", label: "Portfólio" },
              { id: "contact", label: "Contato" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-muted-foreground hover:text-primary font-medium transition-all duration-300 relative group animate-fade-in-right animate-stagger-${index + 1} hover:scale-105`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 bg-primary/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden animate-bounce-in animate-stagger-4 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 animate-rotate-in" /> : <Menu className="h-6 w-6 animate-rotate-in" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-up-fade">
            {[
              { id: "home", label: "Início" },
              { id: "about", label: "Sobre" },
              { id: "portfolio", label: "Portfólio" },
              { id: "contact", label: "Contato" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-muted-foreground hover:text-primary font-medium transition-all duration-300 py-2 hover:scale-105 hover:translate-x-2 animate-fade-in-up animate-stagger-${index + 1}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
