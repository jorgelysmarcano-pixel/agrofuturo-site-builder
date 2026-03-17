import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "paradigma", label: "Novo Paradigma" },
  { id: "solo", label: "Saúde do Solo" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "ilpf", label: "ILPF" },
  { id: "futuro", label: "O Futuro" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#inicio" className="font-display text-lg font-bold text-primary-foreground">
          🌱 Agronomia
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="nav-link">
              {s.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary border-t border-primary/20 pb-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary/20 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
