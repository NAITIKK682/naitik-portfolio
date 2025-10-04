import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  

  //Backend
  { name: "Node.js", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Authentication & Security ", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },

  //Database
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },

  //Programming Languages
  { name: "JavaScript", category: "Programming language" },
  { name: "Python", category: "Programming language" },

  //Tools
  { name: "VS Code", category: "tools" },
  { name: "Git/Github", category: "tools" },
  { name: "Bash", category: "tools" },
  { name: "Google Colab ", category: "tools" },
  { name: "Jupyter Notebook", category: "tools" },

  //Operating Systems
  { name: "Linux", category: "OS" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "tools",
  "OS",
  "Database",
  "Programming language",
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
