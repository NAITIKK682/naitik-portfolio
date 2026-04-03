import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import StarBackground from "./StarBackground"; 

import { 
  Code2, Terminal, Database, Cpu, Layout, Settings, 
  Layers, Search, MousePointer2, ExternalLink,
  ChevronRight, Sparkles, Box, ShieldCheck, Globe, Cloud
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DATA DEFINITION - Updated as per Resume                                    */
/* -------------------------------------------------------------------------- */

const skills = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 90, icon: "R", color: "#61DAFB" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, icon: "T", color: "#38B2AC" },
  { name: "JavaScript", category: "Frontend", level: 92, icon: "J", color: "#F7DF1E" },
  { name: "HTML5/CSS3", category: "Frontend", level: 98, icon: "H", color: "#E34F26" },

  // Backend
  { name: "Node.js", category: "Backend", level: 88, icon: "Node", color: "#339933" },
  { name: "Python (Flask)", category: "Backend", level: 85, icon: "Py", color: "#3776AB" },
  { name: "REST APIs", category: "Backend", level: 94, icon: "API", color: "#007ACC" },
  { name: "Auth & Security", category: "Backend", level: 85, icon: "S", color: "#FF5733" },

  // Database
  { name: "SQL", category: "Database", level: 85, icon: "SQL", color: "#4479A1" },
  { name: "PostgreSQL", category: "Database", level: 80, icon: "PS", color: "#336791" },

  // Cloud & Deployment
  { name: "AWS", category: "Cloud", level: 75, icon: "AWS", color: "#FF9900" },
  { name: "Vercel", category: "Cloud", level: 85, icon: "Vc", color: "#000000" },
  { name: "Render", category: "Cloud", level: 80, icon: "Rd", color: "#46E3B7" },
  { name: "Google Cloud", category: "Cloud", level: 70, icon: "GC", color: "#4285F4" },

  // Tools
  { name: "Git/GitHub", category: "Tools", level: 92, icon: "G", color: "#F05032" },
  { name: "VS Code", category: "Tools", level: 95, icon: "V", color: "#007ACC" },
  { name: "Google Colab", category: "Tools", level: 85, icon: "Col", color: "#F9AB00" },
];

const categories = [
  { id: "All", icon: Layers, desc: "Complete Technical Stack" },
  { id: "Frontend", icon: Layout, desc: "UI/UX & Web Development" },
  { id: "Backend", icon: Code2, desc: "Server Logic & APIs" },
  { id: "Database", icon: Database, desc: "Data Management" },
  { id: "Cloud", icon: Cloud, desc: "Deployment & Cloud Services" },
  { id: "Tools", icon: Settings, desc: "Development Tools" },
];

/* -------------------------------------------------------------------------- */
/* HELPER COMPONENTS                                                          */
/* -------------------------------------------------------------------------- */

const SkillCard = ({ skill }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-6 rounded-2xl bg-white/8 border border-white/20 hover:border-primary/60 transition-colors duration-500 backdrop-blur-sm"
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black shadow-inner"
            style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
          >
            {skill.icon}
          </div>
          <div className="text-[10px] font-bold py-1 px-2 rounded-md bg-white/15 text-white border border-white/20 uppercase tracking-tighter">
            {skill.category}
          </div>
        </div>

        <h3 className="font-bold text-lg text-white mb-1 group-hover:text-primary transition-colors">
          {skill.name}
        </h3>

        {/* Progress Bar */}
        <div className="mt-auto pt-4">
          <div className="flex justify-between text-[10px] mb-1 font-bold uppercase text-white/80">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-primary to-violet-500"
            />
          </div>
        </div>
      </div>

      {/* Background Glow Overlay */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent)` }}
      />
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (!mounted) return null;

  return (
    <section id="skills" className="py-32 px-4 relative min-h-screen bg-background overflow-hidden">
      
      {/* --- STAR BACKGROUND INTEGRATION --- */}
      <StarBackground />

      {/* --- PRE-RENDERED DECORATIONS (AURORA) --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]"
            >
              TECHNICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-violet-600">
                ECOSYSTEM.
              </span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative min-w-[300px]"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all backdrop-blur-md text-white placeholder:text-white/50"
            />
          </motion.div>
        </div>

        {/* --- CATEGORY SELECTOR --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 group backdrop-blur-sm",
                  isActive 
                    ? "bg-primary border-primary text-primary-foreground shadow-2xl shadow-primary/20" 
                    : "bg-white/8 border-white/20 text-white/80 hover:bg-white/12 hover:border-white/30"
                )}
              >
                <Icon className={cn("mb-3 transition-transform duration-500", !isActive && "text-primary group-hover:scale-110")} size={24} />
                <span className="text-[11px] font-bold uppercase tracking-widest leading-none text-center">
                  {cat.id}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="pill"
                    className="absolute inset-0 bg-primary rounded-2xl -z-10 shadow-[0_0_20px_rgba(var(--primary),0.4)]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* --- GRID DISPLAY --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- EMPTY STATE --- */}
        {filteredSkills.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <div className="inline-flex p-6 rounded-full bg-white/10 border border-white/20 mb-6">
              <MousePointer2 className="w-12 h-12 text-white/60" />
            </div>
            <h3 className="text-xl font-bold text-white/80">No matching technologies found</h3>
            <p className="text-sm text-white/70">Try refining your search or category filter.</p>
          </motion.div>
        )}

        {/* --- FOOTER STATS --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-8 border-t border-white/20 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="flex gap-12">
            <div>
              <div className="text-3xl font-black text-white">{skills.length}+</div>
              <div className="text-[10px] uppercase font-bold text-white/80 tracking-widest">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">{categories.length - 1}</div>
              <div className="text-[10px] uppercase font-bold text-white/80 tracking-widest">Specializations</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Full Stack Developer & AIML Enthusiast</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}