import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X, Rocket, Home, User, Cpu, Briefcase, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      setIsScrolled(window.scrollY > 40);
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
            ? "w-full max-w-5xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "w-full bg-transparent px-10 py-8"
        )}
      >
        {/* Logo Section */}
        <a href="#hero" className="flex items-center gap-3 group relative">
          <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-[15deg] transition-all duration-500 shadow-[0_0_25px_rgba(var(--primary),0.4)]">
            <Rocket className="text-white shrink-0" size={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">NAITIK</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] leading-none mt-1">Kushwaha</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-all group"
            >
              <span className="relative z-10">{item.name}</span>
              <motion.span 
                className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="navHover"
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest hover:shadow-[0_10px_20px_-5px_rgba(var(--primary),0.5)] transition-all whitespace-nowrap"
          >
            Hire Me <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 text-white bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all active:scale-90"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed inset-x-4 top-24 bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 z-50 md:hidden shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10" />
              
              <div className="grid grid-cols-1 gap-5">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white/[0.03] hover:bg-primary/10 transition-all group border border-white/5"
                    >
                      <div className="flex items-center gap-5">
                        <div className="p-3 bg-slate-800 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                          <Icon size={20} />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">{item.name}</span>
                      </div>
                      <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={18} />
                    </motion.a>
                  );
                })}
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/5 flex flex-col gap-6 items-center">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Let's Connect</p>
                <div className="flex justify-center gap-8">
                   <a href="https://github.com/NAITIKK682" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">GitHub</a>
                   <a href="https://www.linkedin.com/in/naitik-kushwaha/" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">LinkedIn</a>
                   <a href="mailto:naitikk682@gmail.com" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">Email</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}