import { ArrowRight, ExternalLink, Github, Eye, Sparkles } from "lucide-react";
import StarBackground from "./StarBackground";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AgroVision AI",
    description:
      "Enterprise-grade AI crop disease detection system with voice assistant, real-time weather integration, and offline-first capabilities. Features a professional camera UI and automated PDF reporting.",
    image: "/projects/agrovision.png",
    tags: ["React 18", "Flask", "TensorFlow", "PWA", "Tailwind"],
    liveUrl: "https://agro-vision-ily2libj3-naitikk682s-projects.vercel.app/", 
    githubUrl: "https://github.com/NAITIKK682/AgroVision-AI",
  },
  {
    id: 2,
    title: "Vornix Developers Agency",
    description:
      "Stunning, high-performance agency website featuring Three.js 3D hero scenes, Framer Motion transitions, responsive service architecture, and interactive client conversion flows.",
    image: "/projects/vornix.png",
    tags: ["React 18", "Three.js", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://vornix-developers-5d3b.onrender.com/",
    githubUrl: "https://github.com/NAITIKK682/Vornix-Developers",
  },
  {
    id: 3,
    title: "EHR System with AI Chatbot",
    description:
      "Electronic Health Record system with integrated AI chatbot for patient assistance and medical data management.",
    image: "/projects/project3.png",
    tags: ["Flask", "SQLite", "Python", "AI Chatbot", "JS"],
    liveUrl: "https://ehr-system-2.onrender.com",
    githubUrl: "https://github.com/NAITIKK682/EHR-SYSTEM",
  },
  {
    id: 4,
    title: "TasteMelt Restaurant Website",
    description:
      "A premium, responsive restaurant website featuring dynamic menus and reservation systems built with modern web tech.",
    image: "/projects/project8.png",
    tags: ["React", "Tailwind CSS", "Vite", "UX/UI"],
    liveUrl: "https://tastemelt.vercel.app/",
    githubUrl: "https://github.com/NAITIKK682/TasteMelt-Restaurant-Website",
  },
  {
    id: 5,
    title: "Flexwear E-Commerce Platform",
    description:
      "Production-ready MERN stack e-commerce system featuring JWT authentication, Razorpay payments, product filtering, cart state management, and an enterprise admin dashboard.",
    image: "/projects/flexwear.png",
    tags: ["MongoDB", "Express", "React 18", "Node.js", "Razorpay", "Tailwind"],
    githubUrl: "https://github.com/NAITIKK682/flexwear-collection",
  },
  {
    id: 6,
    title: "Fake News Detection",
    description:
      "An NLP + ML project to classify news as real or fake. Built with Python, scikit-learn, and Flask with a clean UI.",
    image: "/projects/project2.jpg",
    tags: ["ML", "NLP", "Flask", "Python", "Bootstrap"],
    githubUrl: "https://github.com/NAITIKK682/Fake-News-Detection-Flask",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
      <StarBackground />

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-500/10 rounded-full blur-[100px] md:blur-[120px] opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold tracking-widest uppercase mb-6 border border-primary/40 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" /> Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium px-2"
          >
            A collection of my most impactful work, bridging the gap between 
            <span className="text-white font-bold"> Intelligent Algorithms</span> and 
            <span className="text-white font-bold"> Premium User Interfaces</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {projects.map((project, key) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: key * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover="animate"
              whileTap="animate"
              className="group bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:border-primary/40 transition-all duration-500 w-full"
            >
              {/* Image with Vertical Scroll Animation */}
              <div className="h-56 sm:h-64 overflow-hidden relative cursor-pointer bg-slate-800">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  variants={{
                    animate: { y: "calc(-100% + 256px)" }
                  }}
                  transition={{ duration: 5, ease: "easeInOut" }}
                  className="w-full h-auto object-cover absolute top-0 left-0"
                  loading="lazy"
                />
                
                {/* Overlay Hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-xl border border-white/20">
                      <Eye size={16} /> Detailed View
                   </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-black border rounded-lg bg-primary/20 text-white border-primary/30 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-8 line-clamp-3 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex space-x-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-primary brightness-125 hover:underline underline-offset-8 transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 rounded-md"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={16} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-24">
          <motion.a
            whileHover={{ scale: 1.05, translateY: -4 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/NAITIKK682"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-primary text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_20px_40px_-10px_rgba(var(--primary),0.5)] transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Explore Full Archive <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}