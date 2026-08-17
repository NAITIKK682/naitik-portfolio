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
      className={`relative cursor-pointer group p-[1px] rounded-2xl transition-all duration-300 w-full ${
        isOpen
          ? "bg-gradient-to-br from-primary via-violet-500 to-primary/40 shadow-[0_0_20px_rgba(var(--primary),0.2)]"
          : "bg-gradient-to-br from-white/10 to-transparent hover:from-white/20"
      }`}
    >
      <div className="relative p-3.5 sm:p-4 md:p-5 bg-slate-900/90 backdrop-blur-2xl rounded-[15px] h-full overflow-hidden border border-white/5">
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className={`p-2 sm:p-2.5 rounded-xl transition-all duration-300 shrink-0 ${
              isOpen
                ? "bg-primary text-white shadow-md shadow-primary/30"
                : "bg-primary/10 text-primary border border-primary/20"
            }`}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <div className="flex-1 text-left min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 pr-1">
                <h4 className="font-bold text-sm sm:text-base md:text-lg text-white leading-snug tracking-tight break-words">
                  {title}
                </h4>
                <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5 brightness-125 break-words">
                  {subtitle}
                </p>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 group-hover:text-primary transition-colors shrink-0 mt-0.5"
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>

            <div className="mt-2 flex items-center">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-300 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/10 inline-block">
                {duration}
              </span>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 mt-3 border-t border-white/10 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {details}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-primary/20 border border-primary/30 text-white font-semibold tracking-wide"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
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
      subtitle: "Universal College of Engineering, Mumbai University",
      duration: "2023 – 2027",
      icon: GraduationCap,
      details:
        "Specializing in AI/ML fundamentals, Data Structures, and Deep Learning models with a 7.6 average CGPA.",
      skills: ["Neural Networks", "Python", "DSA", "TensorFlow", "OpenCV"],
    },
    {
      title: "Diploma in Cloud & Cyber Security",
      subtitle: "Jetking Infotrain Ltd., Vasai",
      duration: "2023 – 2024",
      icon: Zap,
      details:
        "Certified in Cloud Architecture (Grade A) with focused training on AWS infrastructure, Linux systems, and network security.",
      skills: ["AWS", "Networking", "Cyber Security", "Linux"],
    },
  ];

  const experience = [
    {
      title: "Frontend Development Intern",
      subtitle: "VELOOP Rewards",
      duration: "Aug 2026 – Present",
      icon: Briefcase,
      details:
        "Building responsive promotional UI components and animated promotional banners using React.js, Vite, and Bootstrap.",
      skills: ["React.js", "Vite", "JavaScript", "Bootstrap"],
    },
    {
      title: "Frontend Developer Intern",
      subtitle: "Zetheta Algorithms Private Limited",
      duration: "Apr 2026 – Jul 2026",
      icon: Briefcase,
      details:
        "Engineered a real-time stock screener handling thousands of data points using Next.js 14, TypeScript, Zustand, and TanStack Table.",
      skills: ["React 18", "Next.js 14", "TypeScript", "Zustand", "TanStack Table"],
    },
    {
      title: "Machine Learning Intern",
      subtitle: "Unified Mentor Pvt. Ltd.",
      duration: "Oct 2025 – Jan 2026",
      icon: Briefcase,
      details:
        "Trained Scikit-learn NLP models achieving 87% accuracy and integrated them via Flask REST APIs, cutting internal QA review time by 60%.",
      skills: ["Scikit-Learn", "Pandas", "Flask", "NLP", "REST APIs"],
    },
    {
      title: "Python Development Intern",
      subtitle: "Techno Hacks Solutions Pvt. Ltd.",
      duration: "Aug 2025 – Sep 2025",
      icon: Briefcase,
      details:
        "Developed Python/Flask backend scripts for data processing and integrated third-party REST APIs.",
      skills: ["Python", "Flask", "REST API", "Automation"],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-slate-950"
    >
      <StarBackground />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/15 rounded-full blur-[100px] sm:blur-[140px] -translate-y-1/2 translate-x-1/2 opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-violet-600/10 rounded-full blur-[100px] sm:blur-[140px] translate-y-1/2 -translate-x-1/2 opacity-30 mix-blend-screen" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold tracking-widest uppercase mb-3 border border-primary/40 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Intro */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Full-Stack Developer & <br className="hidden sm:block" />
                <span className="text-primary brightness-110 relative inline-block mt-1">
                  AI/ML Engineer
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

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  I'm <span className="text-white font-bold">Naitik Kushwaha</span>, an AIML engineering student at Universal College of Engineering (Mumbai University). I specialize in building full-stack applications with the <span className="text-white font-semibold">MERN Stack</span> and developing production-focused Machine Learning pipelines.
                </p>

                <p>
                  With <span className="text-primary font-semibold">4 internships</span>, <span className="text-primary font-semibold">3+ production web apps</span>, and over <span className="text-primary font-semibold">10 public GitHub projects</span>, I've worked across real-time web UI, state management, REST API architectures, and machine learning models.
                </p>

                <p>
                  Key work highlights:
                </p>

                <ul className="space-y-2 pl-1 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">▹</span>
                    <span><strong className="text-white">Full-Stack Tech:</strong> Hands-on with React.js, Next.js 14, Node.js, Express, MongoDB, PostgreSQL, Supabase, and JWT authentication.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">▹</span>
                    <span><strong className="text-white">Real Impact:</strong> Built real-time stock screeners and ML pipelines that reduced manual QA review time by 60%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">▹</span>
                    <span><strong className="text-white">Featured Projects:</strong> Developed Flexwear (E-Commerce with Razorpay), AgroVision AI (Crop Disease Detection), and Hospital EHR platforms.</span>
                  </li>
                </ul>

                <p className="text-xs sm:text-sm">
                  Selected for <span className="text-white font-semibold">Smart India Hackathon 2025</span> (Internal Round), competed in 5+ national hackathons, and certified as an <span className="text-white font-semibold">AWS Academy Cloud Architect</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-full font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center gap-2 text-sm transition-all"
              >
                Get In Touch{" "}
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/Naitikk.pdf"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md text-sm transition-all flex items-center justify-center gap-2 font-bold"
              >
                <FileText className="w-4 h-4" /> View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Education & Work Experience */}
          <div className="space-y-8 w-full min-w-0">
            {/* Education Section */}
            <motion.div variants={itemVariants} className="space-y-3.5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <GraduationCap className="text-primary h-5 w-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Education
                </h4>
              </div>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <ExpandableItem key={i} {...edu} defaultOpen={false} />
                ))}
              </div>
            </motion.div>

            {/* Work Experience Section */}
            <motion.div variants={itemVariants} className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                    <Briefcase className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Work Experience
                  </h4>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  4 Roles
                </span>
              </div>

              <div className="space-y-3 w-full">
                {experience.map((exp, i) => (
                  <ExpandableItem
                    key={i}
                    {...exp}
                    defaultOpen={false}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}