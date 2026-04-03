import React, { useState } from "react";
import { Briefcase, GraduationCap, Sparkles, ExternalLink, FileText, ChevronDown, Award, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StarBackground from "./StarBackground"; 

/* --- Reusable Expandable Card --- */
const ExpandableItem = ({ title, subtitle, duration, details, skills, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={`relative cursor-pointer group p-[1px] rounded-2xl transition-all duration-500 ${
        isOpen 
          ? "bg-gradient-to-br from-primary via-violet-500 to-primary/40 shadow-[0_0_30px_rgba(var(--primary),0.3)]" 
          : "bg-gradient-to-br from-white/30 to-transparent hover:from-white/50"
      }`}
    >
      <div className="relative p-5 bg-slate-900/90 backdrop-blur-2xl rounded-[15px] h-full overflow-hidden border border-white/5">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl transition-all duration-300 ${isOpen ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-primary/20 text-primary-foreground border border-primary/30"}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 text-left">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg text-white leading-tight tracking-tight">{title}</h4>
                <p className="text-sm text-primary font-semibold mt-1 brightness-125">{subtitle}</p>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="text-slate-300 group-hover:text-primary transition-colors"
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>
            <span className="text-[11px] font-bold text-slate-200 mt-2 inline-block uppercase tracking-[0.15em] bg-white/5 px-2 py-0.5 rounded">
              {duration}
            </span>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="pt-4 space-y-4"
                >
                  <div className="h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="text-[10px] px-2.5 py-1 rounded-md bg-primary/20 border border-primary/40 text-white font-bold tracking-wide uppercase">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const education = [
    {
      title: "B.E. in AI & ML",
      subtitle: "Universal College of Engineering",
      duration: "2023 – 2027",
      icon: GraduationCap,
      details: "Focusing on Neural Networks, Deep Learning, and Computational Intelligence. Maintaining excellence in both core engineering and AI specializations.",
      skills: ["Neural Networks", "Python", "Data Structures", "TensorFlow"]
    },
    {
      title: "Diploma in Cloud & Cyber Security",
      subtitle: "Jetking Vasai",
      duration: "2022 – 2024",
      icon: Zap,
      details: "Professional certification covering AWS architecture, network security protocols, and Linux administration.",
      skills: ["AWS", "Networking", "Cyber Security", "Linux"]
    }
  ];

  const experience = [
    {
      title: "Machine Learning Intern",
      subtitle: "Unified Mentor Pvt. Ltd",
      duration: "Sep 2025 – Dec 2025",
      icon: Briefcase,
      details: "Spearheaded predictive model development and optimized data pipelines, achieving a 15% increase in model accuracy.",
      skills: ["Scikit-Learn", "Pandas", "Feature Engineering", "Data Viz"]
    },
    {
      title: "Python Development Intern",
      subtitle: "Techno Hacks EduTech",
      duration: "Aug 2025 – Sep 2025",
      icon: Briefcase,
      details: "Developed backend automation scripts and contributed to core internal tool APIs using Flask and Python.",
      skills: ["Flask", "Automation", "SQL", "Python"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-slate-950">
      <StarBackground />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 opacity-30 mix-blend-screen" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold tracking-widest uppercase mb-4 border border-primary/40 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight text-white">
              Passionate Full Stack Developer & <br />
              <span className="text-primary brightness-110 relative inline-block">
                AIML Enthusiast
                <svg className="absolute w-full h-2 bottom-0 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h3>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
              <p>
                Hello! I'm <span className="text-white font-bold decoration-primary/50 underline-offset-4 underline">Naitik Kushwaha</span>, a third-year student specializing in AI & ML. My journey is defined by bridging the gap between intelligent algorithms and user-centric interfaces.
              </p>
              <p>
                Whether it's building scalable full-stack applications or training deep learning models, I strive for clean code and high-impact solutions that move the needle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3.5 bg-primary text-white rounded-full font-bold overflow-hidden shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center gap-2 transition-all"
              >
                Get In Touch <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="/Naitikk.pdf"
                target="_blank"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3.5 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 font-bold"
              >
                <FileText className="w-4 h-4" /> View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Interactive Sections */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <GraduationCap className="text-primary h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">Education</h4>
              </div>
              <div className="grid gap-4">
                {education.map((edu, i) => (
                  <ExpandableItem key={i} {...edu} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">Work Experience</h4>
              </div>
              <div className="grid gap-4">
                {experience.map((exp, i) => (
                  <ExpandableItem key={i} {...exp} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}