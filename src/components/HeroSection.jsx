import React from "react";
import { ArrowDown, Sparkles, Terminal, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-slate-950"
    >
      {/* --- Background Layer (Z-0) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Modern radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[140px] rounded-full opacity-30" />
        {/* Structured Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- Main Content Layer (Z-10) --- */}
      <div className="container max-w-5xl mx-auto text-center z-10 py-20">
        <div className="space-y-10 flex flex-col items-center">
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mt-10 md:mt-14"
          >
            {/* Animated Glow Behind Image */}
            <motion.div 
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-30"
            />
            
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-primary via-violet-500 to-primary/40 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Naitik Kushwaha"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-slate-950"
              />
            </div>

            {/* Float Terminal Icon */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 bg-slate-900 border border-white/20 p-2.5 rounded-2xl shadow-2xl z-20"
            >
              <Terminal className="w-6 h-6 text-primary brightness-125" />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5" /> 
              <span>AI / ML Engineer & Full Stack Dev</span>
            </motion.div>

            <motion.h1 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white"
            >
              Hi, I'm <span className="text-white">Naitik</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-violet-400 to-primary brightness-110">
                Kushwaha
              </span>
            </motion.h1>

            <motion.p 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed px-4 font-medium"
            >
              Engineering the future through <span className="text-white font-bold underline decoration-primary/40 underline-offset-4">Intelligent Code</span>. 
              Specializing in scalable AI solutions and premium digital experiences.
            </motion.p>
          </div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 pt-4 relative z-20"
          >
            <a href="#projects" className="group relative px-12 py-4 bg-primary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_15px_30px_-10px_rgba(var(--primary),0.6)]">
               Explore Projects <Code2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </a>
            
            <a href="#about" className="px-12 py-4 rounded-full border border-white/20 hover:border-primary/50 hover:bg-white/5 transition-all font-bold text-white backdrop-blur-md flex items-center justify-center">
              Read Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* --- Footer Scroll Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 z-30 pointer-events-none flex flex-col items-center gap-3"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-3">Scroll</span>
          <div className="w-[1.5px] h-14 bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_8px_rgba(var(--primary),0.4)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}