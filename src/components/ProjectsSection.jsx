import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Responsive Tour and Travel Website",
    description:
      "A modern, responsive website showcasing destinations and bookings. Built with HTML, CSS, and JavaScript.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "Javascript", "Responsive Design"],
    Live: "https://naitikk682.github.io/Responsive-Tour-And-Travel-website/",
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
    tags: ["flask", "sqlite", "python", "AI Chatbot", "HTML", "CSS", "JavaScript" ],
    githubUrl: "https://github.com/NAITIKK682/EHR-SYSTEM",
  },

  {
    id: 4,
    title: "Vehicle Price Prediction",
    description:
      "ML model to predict used car prices using features like brand, year, mileage, and condition. Built with Flask and scikit-learn.",
    image: "/projects/project4.png",
    tags: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Regression",
      "Scikit-learn",
    ],
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

];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-4 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my most impactful projects, highlighting my experience
          in web development, machine learning, and IoT. These projects
          demonstrate my ability to design, develop, and deploy real-world
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}{" "}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/NAITIKK682"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
