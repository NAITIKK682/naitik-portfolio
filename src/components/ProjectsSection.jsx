import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import StarBackground from "./StarBackground";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Responsive Tour and Travel Website",
    description:
      "A modern, responsive website showcasing destinations and bookings. Built with HTML, CSS, and JavaScript.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://naitikk682.github.io/Responsive-Tour-And-Travel-website/",
    githubUrl: "https://github.com/NAITIKK682/Responsive-Tour-And-Travel-website",
  },
  {
    id: 2,
    title: "Fake News Detection",
    description:
      "An NLP + ML project to classify news as real or fake. Built with Python, scikit-learn, and Flask with a clean UI.",
    image: "/projects/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap CSS", "Flask", "Python", "Machine Learning", "NLP"],
    githubUrl: "https://github.com/NAITIKK682/Fake-News-Detection-Flask",
  },
  {
    id: 3,
    title: "EHR System with AI Chatbot",
    description:
      "Electronic Health Record system with integrated AI chatbot for patient assistance and medical data management.",
    image: "/projects/project3.png",
    tags: ["flask", "sqlite", "python", "AI Chatbot", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://ehr-system-2.onrender.com",
    githubUrl: "https://github.com/NAITIKK682/EHR-SYSTEM",
  },
  {
    id: 4,
    title: "Vehicle Price Prediction",
    description:
      "ML model to predict used car prices using features like brand, year, mileage, and condition. Built with Flask and scikit-learn.",
    image: "/projects/project4.png",
    tags: ["Python", "Machine Learning", "Pandas", "Regression", "Scikit-learn"],
    githubUrl: "https://github.com/NAITIKK682/vehicle-price-prediction",
  },
  {
    id: 5,
    title: "Heart Disease Prediction",
    description:
      "ML-based system to predict likelihood of heart disease using patient health metrics. Built with Flask and scikit-learn.",
    image: "/projects/project5.png",
    tags: ["Python", "Machine Learning", "Pandas", "Flask", "Scikit-learn"],
    githubUrl: "https://github.com/NAITIKK682/Heart-Disease-Prediction",
  },
  {
    id: 6,
    title: "Fraud Transaction Detection",
    description:
      "AI-powered system to detect fraudulent financial transactions using classification and anomaly detection models.",
    image: "/projects/project6.png",
    tags: ["Python", "Imbalanced Data", "Machine Learning", "Flask", "Scikit-learn"],
    githubUrl: "https://github.com/NAITIKK682/Fraud-Transaction-Detection",
  },
  {
    id: 7,
    title: "Agri Smart 2.0",
    description:
      "AI-powered farming platform for modern India. Provides real-time crop advice, disease detection, smart irrigation, weather forecasts, and a digital marketplace.",
    image: "/projects/project7.png",
    tags: ["Python", "Machine Learning", "Flask", "AI Assistant"],
    liveUrl: "https://agri-smart-2-0.vercel.app/",
    githubUrl: "https://github.com/NAITIKK682/AgriSmart-2.0.git",
  },
  {
    id: 8,
    title: "TasteMelt Restaurant Website",
    description:
      "Built a responsive restaurant website with React, Vite, and Tailwind CSS, including Home, Menu, Contact, and Reserve pages.",
    image: "/projects/project8.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://tastemelt.vercel.app/",
    githubUrl: "https://github.com/NAITIKK682/TasteMelt-Restaurant-Website",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-background">
      <StarBackground />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of my most impactful projects, highlighting my experience
            in web development, machine learning, and AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: key * 0.1 }}
              viewport={{ once: true }}
              whileHover="animate"
              whileTap="animate" // Triggers animation on mobile tap
              className="group bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Image with Vertical Scroll Animation */}
              <div className="h-64 overflow-hidden relative cursor-pointer bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  variants={{
                    animate: { y: "calc(-100% + 256px)" }
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="w-full h-auto object-cover absolute top-0 left-0"
                />
                
                {/* Mobile Hint - Only visible on small screens when not interacting */}
                <div className="absolute inset-0 bg-black/30 md:hidden flex items-center justify-center group-hover:opacity-0 transition-opacity">
                   <div className="bg-primary/90 text-white px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2">
                      <Eye size={14} /> Tap to See Full View
                   </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-bold border rounded bg-primary/10 text-primary border-primary/20 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="flex space-x-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-foreground/60 hover:text-white transition-colors"
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

        <div className="text-center mt-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/NAITIKK682"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all"
          >
            Explore More on GitHub <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}