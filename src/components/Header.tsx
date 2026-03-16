import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="font-[var(--font-display)] text-xl tracking-tight text-foreground">
          Meridian<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            Get Started
          </a>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-base text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
