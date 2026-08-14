import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  FileText,
  ChevronDown,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StarBackground from "./StarBackground";

/* --- Reusable Expandable Card --- */
const ExpandableItem = ({
  title,
  subtitle,
  duration,
  details,
  skills,
  icon: Icon,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={`relative cursor-pointer group p-[1px] rounded-2xl transition-all duration-500 ${
        isOpen
          ? "bg-gradient-to-br from-primary via-violet-500 to-primary/40 shadow-[0_0_25px_rgba(var(--primary),0.25)]"
          : "bg-gradient-to-br from-white/20 to-transparent hover:from-white/40"
      }`}
    >
      <div className="relative p-4 md:p-5 bg-slate-900/90 backdrop-blur-2xl rounded-[15px] h-full overflow-hidden border border-white/5">
        <div className="flex items-start gap-4">
          <div
            className={`p-2.5 rounded-xl transition-all duration-300 shrink-0 ${
              isOpen
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-primary/20 text-primary-foreground border border-primary/30"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h4 className="font-bold text-base md:text-lg text-white leading-tight tracking-tight truncate">
                  {title}
                </h4>
                <p className="text-xs md:text-sm text-primary font-semibold mt-0.5 brightness-125 truncate">
                  {subtitle}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="text-slate-300 group-hover:text-primary transition-colors shrink-0"
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>
            <span className="text-[10px] md:text-[11px] font-bold text-slate-300 mt-2 inline-block uppercase tracking-[0.15em] bg-white/5 px-2 py-0.5 rounded">
              {duration}
            </span>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                  className="pt-3 space-y-3"
                >
                  <div className="h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                    {details}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-md bg-primary/20 border border-primary/40 text-white font-bold tracking-wide uppercase"
                      >
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
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const education = [
    {
      title: "B.E. in AI & ML",
      subtitle: "Universal College of Engineering",
      duration: "2023 – 2027",
      icon: GraduationCap,
      details:
        "Focusing on Neural Networks, Deep Learning, and Computational Intelligence. Maintaining excellence in both core engineering and AI specializations.",
      skills: ["Neural Networks", "Python", "Data Structures", "TensorFlow"],
    },
    {
      title: "Diploma in Cloud & Cyber Security",
      subtitle: "Jetking Vasai",
      duration: "2022 – 2024",
      icon: Zap,
      details:
        "Professional certification covering AWS architecture, network security protocols, and Linux administration.",
      skills: ["AWS", "Networking", "Cyber Security", "Linux"],
    },
  ];

  const experience = [
    {
      title: "Frontend Development Intern",
      subtitle: "VELoop Rewards",
      duration: "Aug 2026 – Present",
      icon: Briefcase,
      details:
        "Selected as a Frontend Development Intern at VELOOP Rewards to engineer production-ready web interfaces and gain hands-on expertise building enterprise frontend architectures.",
      skills: ["React.js", "Front-End Development", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer Intern",
      subtitle: "Zetheta Algorithms Private Limited",
      duration: "Apr 2026 – Jul 2026",
      icon: Briefcase,
      details:
        "Engineered a high-performance Real-Time Stock Screener handling 5000+ stock records with fast filtering and virtual scrolling. Integrated live WebSocket price updates, interactive candlestick charts, and technical indicators using Zustand and TanStack Table.",
      skills: [
        "React 18",
        "Next.js 14",
        "TypeScript",
        "Zustand",
        "TanStack Table",
      ],
    },
    {
      title: "Machine Learning Intern",
      subtitle: "Unified Mentor Pvt. Ltd",
      duration: "Oct 2025 – Jan 2026",
      icon: Briefcase,
      details:
        "Spearheaded predictive model development and optimized data pipelines, achieving a 15% increase in model accuracy.",
      skills: ["Scikit-Learn", "Pandas", "Feature Engineering", "Data Viz"],
    },
    {
      title: "Python Development Intern",
      subtitle: "Techno Hacks EduTech",
      duration: "Aug 2025 – Sep 2025",
      icon: Briefcase,
      details:
        "Developed backend automation scripts and contributed to core internal tool APIs using Flask and Python.",
      skills: ["Flask", "Automation", "SQL", "Python"],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-24 px-4 relative overflow-hidden bg-slate-950"
    >
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
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold tracking-widest uppercase mb-4 border border-primary/40 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Passionate Full Stack Developer & <br />
                <span className="text-primary brightness-110 relative inline-block mt-1">
                  AIML Enthusiast
                  <svg
                    className="absolute w-full h-2 bottom-0 left-0 text-primary opacity-50"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h3>

              <div className="space-y-4 text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                <p>
                  I'm{" "}
                  <span className="text-white font-bold decoration-primary/50 underline-offset-4 underline">
                    Naitik Kushwaha
                  </span>
                  , a B.E. AI & ML student with{" "}
                  <span className="font-semibold text-primary">
                    4 internships, 5+ live projects
                  </span>
                  , and a proven track record of delivering high-impact solutions.
                  I specialize in building scalable full-stack applications with
                  React.js & Node.js, and training deep learning models achieving{" "}
                  <span className="font-semibold text-primary">
                    87–94% accuracy
                  </span>
                  .
                </p>
                <p>
                  My internships transformed complex processes: I cut manual
                  review time by{" "}
                  <span className="font-semibold text-primary">60%</span> with NLP
                  models, improved data pipelines by{" "}
                  <span className="font-semibold text-primary">40%</span>, and
                  delivered production-grade code. Whether architecting secure EHR
                  systems, deploying AI-powered crop detection at scale, or
                  crafting premium digital experiences, I bridge intelligent
                  algorithms with user-centric interfaces—obsessed with clean code
                  and measurable impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full justify-start items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto group relative px-8 py-3.5 bg-primary text-white rounded-full font-bold overflow-hidden shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center gap-2 transition-all"
              >
                Get In Touch{" "}
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="/Naitikk.pdf"
                target="_blank"
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto group px-8 py-3.5 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 font-bold"
              >
                <FileText className="w-4 h-4" /> View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Equal Height Column */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Education Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <GraduationCap className="text-primary h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Education
                </h4>
              </div>
              <div className="grid gap-3">
                {education.map((edu, i) => (
                  <ExpandableItem key={i} {...edu} />
                ))}
              </div>
            </motion.div>

            {/* Work Experience Section with Scrollable Glass Box */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Briefcase className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Work Experience
                  </h4>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  4 Roles
                </span>
              </div>

              {/* Fixed max-height scrollable container for perfect height alignment */}
              <div className="max-h-[380px] overflow-y-auto pr-1.5 space-y-3 custom-scrollbar rounded-2xl">
                {experience.map((exp, i) => (
                  <ExpandableItem
                    key={i}
                    {...exp}
                    defaultOpen={i === 0} // Open only the top one by default
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Embedded CSS for custom scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(var(--primary), 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--primary), 0.8);
        }
      `}</style>
    </section>
  );
}