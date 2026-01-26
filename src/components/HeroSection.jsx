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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-background"
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- Main Content Layer (Z-10) --- */}
      <div className="container max-w-5xl mx-auto text-center z-10 py-20">
        <div className="space-y-8 flex flex-col items-center">
          
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-20"
            />
            
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary to-violet-500 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Naitik Kushwaha"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-background"
              />
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-1 -right-1 bg-background/90 backdrop-blur-md border border-primary/20 p-2 rounded-xl shadow-xl z-20"
            >
              <Terminal className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 text-primary font-medium tracking-[0.2em] uppercase text-xs"
            >
              <Sparkles className="w-4 h-4" /> 
              <span>AI / ML Engineer & Full Stack Dev</span>
            </motion.div>

            <motion.h1 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            >
              Hi, I'm <span className="text-foreground">Naitik</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">
                Kushwaha
              </span>
            </motion.h1>

            <motion.p 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
            >
              Building the future through <span className="text-foreground font-semibold">Intelligent Code</span>. 
              Specializing in scalable AIML solutions at Universal College of Engineering.
            </motion.p>
          </div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 pt-2 relative z-20"
          >
            <a href="#projects" className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_10px_20px_-10px_rgba(var(--primary),0.5)]">
               Explore Projects <Code2 className="w-5 h-5" />
            </a>
            
            <a href="#about" className="px-10 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all font-medium backdrop-blur-sm flex items-center justify-center">
              Read Story
            </a>
          </motion.div>
        </div>
      </div>

      {/* --- Top-Level Scroll Layer (Z-30) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-0 right-0 z-30 pointer-events-none flex flex-col items-center gap-2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-2 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}