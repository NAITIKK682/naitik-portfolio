import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-slate-950 border-t border-white/10 mt-20">
      {/* Subtle background glow for the footer area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm text-slate-300 font-medium tracking-wide">
            &copy; {currentYear}{" "}
            <span className="text-white font-bold">Naitik Kushwaha</span>. 
            <span className="hidden sm:inline"> All Rights Reserved.</span>
          </p>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-bold">
            Built with React & Intelligence
          </p>
        </div>

        <motion.a
          href="#hero"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-primary transition-all backdrop-blur-md shadow-lg group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="transition-transform group-hover:scale-110" />
        </motion.a>
      </div>
    </footer>
  );
}