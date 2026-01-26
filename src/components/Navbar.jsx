import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X, Rocket, Home, User, Cpu, Briefcase, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: MessageSquare },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-500 flex justify-center px-4",
        isScrolled ? "top-6" : "top-0"
      )}
    >
      <nav
        className={cn(
          "transition-all duration-500 ease-in-out flex items-center justify-between",
          isScrolled 
            ? "w-full max-w-4xl bg-background/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
            : "w-full bg-transparent px-8 py-6"
        )}
      >
        {/* Logo Section */}
        <a href="#hero" className="flex items-center gap-2 group relative">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
            <Rocket className="text-primary-foreground shrink-0" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-white leading-none">NAITIK</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Portfolio</span>
          </div>
        </a>

        {/* Desktop Menu - Floating Capsule Style */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors group"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Action Area (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Vertical Separator */}
          <div className="h-6 w-px bg-white/20" />
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all active:scale-95 whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed inset-x-4 top-24 bg-background/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 z-50 md:hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 gap-4">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-primary/20 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <span className="text-lg font-bold text-white">{item.name}</span>
                      </div>
                      <X className="rotate-45 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </motion.a>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Get In Touch</p>
                <div className="flex justify-center gap-6">
                   <a href="#" className="text-muted-foreground hover:text-primary transition-colors italic">LinkedIn</a>
                   <a href="#" className="text-muted-foreground hover:text-primary transition-colors italic">GitHub</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}