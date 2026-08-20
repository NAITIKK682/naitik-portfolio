import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import {
  Menu,
  X,
  Home,
  User,
  Cpu,
  Briefcase,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Zap,
  Star,
  Shield,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero", icon: Home, description: "Welcome & Landing Overview" },
  { name: "About", href: "#about", icon: User, description: "Background & Professional Journey" },
  { name: "Skills", href: "#skills", icon: Cpu, description: "Technical Stack & Expertise" },
  { name: "Projects", href: "#projects", icon: Briefcase, description: "Featured Production Works" },
  { name: "Contact", href: "#contact", icon: MessageSquare, description: "Get in Touch & Inquiries" },
];

const quickHighlights = [
  { title: "Full-Stack AI Solutions", icon: Zap },
  { title: "Awwwards-Level Design", icon: Star },
  { title: "Scalable Architecture", icon: Shield },
];

// 3D Stagger Flip Variants for Option 2
const containerFlipVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const letterFlipVariants = {
  initial: {
    rotateX: 0,
    y: 0,
    opacity: 1,
  },
  hover: {
    rotateX: [0, -90, 0],
    y: [0, -4, 0],
    color: ["#ffffff", "#38bdf8", "#a855f7"],
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Lock body scroll when mobile/tablet full-screen overlay is opened
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* 
        Top Header Navigation Bar 
        - Hides completely when scrolling down on all screens.
      */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out flex justify-center px-4 sm:px-6 lg:px-8",
          isScrolled
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
        )}
      >
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 md:py-8 bg-transparent">
          {/* Brand Logo Section - Option 2: 3D Kinetic Depth Flip & Shimmer */}
          <motion.a
            href="#hero"
            initial="initial"
            whileHover="hover"
            className="flex flex-col group relative focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl p-2 transition-all cursor-pointer select-none [perspective:1000px]"
            aria-label="NAITIK Kushwaha - Home"
          >
            {/* Ambient Backlight Glow Overlay */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-primary to-cyan-400 rounded-2xl blur-md opacity-25 group-hover:opacity-90 group-hover:blur-xl transition-all duration-500 -z-10" />

            <div className="relative flex flex-col">
              {/* NAITIK - 3D Letter Stagger Flip */}
              <motion.div
                variants={containerFlipVariants}
                className="flex items-center text-xl sm:text-2xl font-black text-white leading-none tracking-tight [transform-style:preserve-3d]"
              >
                {"NAITIK".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterFlipVariants}
                    className="inline-block origin-center transition-colors duration-300"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              {/* KUSHWAHA - Shimmer Light Wave & Kinetic Tracking */}
              <div className="relative mt-1 overflow-hidden">
                <motion.span
                  variants={{
                    initial: { letterSpacing: "0.35em" },
                    hover: { letterSpacing: "0.5em" },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[10px] sm:text-[11px] font-extrabold text-primary group-hover:text-cyan-300 uppercase leading-none transition-colors duration-300"
                >
                  Kushwaha
                </motion.span>

                {/* Metallic Shimmer Pass */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>
            </div>
          </motion.a>

          {/* Desktop Only Navigation Links (lg and above) */}
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-900/60 p-2 rounded-full border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full flex items-center gap-2",
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabHeader"
                      className="absolute inset-0 bg-gradient-to-r from-primary/80 to-violet-600/80 rounded-full shadow-lg -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover Background */}
                  {hoveredIndex === index && !isActive && (
                    <motion.div
                      layoutId="hoverTabHeader"
                      className="absolute inset-0 bg-white/10 rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative group overflow-hidden flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.8)] transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Hire Me <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          </div>

          {/* Mobile & Tablet View Header Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-3 text-white bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/15 hover:bg-white/10 transition-all active:scale-90 focus:outline-none focus:ring-2 focus:ring-primary shadow-xl"
              aria-label="Toggle Navigation Menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* 
        Single Floating Menu Trigger Button (For Mobile & Tablet View on Scroll)
      */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open Navigation Menu"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <Menu size={20} className="text-white" />
            <span className="text-xs font-extrabold uppercase tracking-widest pr-1">Menu</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 
        Side Floating Navigation Dots
      */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 p-3 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            aria-label="Quick Scroll Side Navigation"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center justify-center p-1.5 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                  aria-label={`Scroll to ${item.name}`}
                >
                  {/* Tooltip Label */}
                  <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0 shadow-2xl">
                    {item.name}
                  </span>

                  {/* Dot Icon Indicator */}
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 relative",
                      isActive
                        ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.9)] scale-110"
                        : "bg-white/5 text-slate-400 hover:bg-white/20 hover:text-white"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {isActive && (
                      <motion.span
                        layoutId="activeSideDotPulse"
                        className="absolute inset-0 border-2 border-primary rounded-full animate-ping opacity-40 pointer-events-none"
                      />
                    )}
                  </div>
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 
        Unified Full Screen Overlay Navigation Menu (For Mobile & Tablet View)
      */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Modal Ambient Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Mobile/Tablet Header Bar inside Overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col group relative"
              >
                <span className="text-lg font-black tracking-tighter text-white">NAITIK</span>
                <span className="text-[9px] font-bold text-primary uppercase tracking-[0.3em]">
                  Kushwaha
                </span>
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 text-slate-300 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="my-auto py-8 grid grid-cols-1 gap-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2 px-2">
                Navigation Menu
              </p>
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 border group",
                      isActive
                        ? "bg-primary/20 border-primary/40 shadow-lg shadow-primary/10"
                        : "bg-white/[0.03] border-white/5 hover:bg-white/[0.08] hover:border-white/15"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "p-3 rounded-xl transition-all duration-300",
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/40"
                            : "bg-slate-800/80 text-slate-300 group-hover:bg-primary group-hover:text-white"
                        )}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium line-clamp-1">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={cn(
                        "transition-transform duration-300",
                        isActive
                          ? "text-primary translate-x-1"
                          : "text-slate-500 group-hover:text-white group-hover:translate-x-1"
                      )}
                      size={20}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Footer Section */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-2">
                {quickHighlights.map((hl) => {
                  const HlIcon = hl.icon;
                  return (
                    <div
                      key={hl.title}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center"
                    >
                      <HlIcon size={16} className="text-primary mb-1" />
                      <span className="text-[9px] font-bold text-slate-300 leading-tight">
                        {hl.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/30"
                >
                  Hire Me Now <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/NAITIKK682"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    GitHub <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naitik-kushwaha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    LinkedIn <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}