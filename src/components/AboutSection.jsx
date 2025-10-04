import { Briefcase, Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer & AIML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Hello! I’m Naitik Kushwaha, a third-year B.E. student specializing in
              Artificial Intelligence & Machine Learning at Universal College of Engineering,
              Mumbai University. I'm passionate about creating intelligent solutions that
              leverage data to solve complex real-world problems.
            </p>

            <p className="text-muted-foreground">
              My journey in technology began with a fascination for how machines
              can learn from data and make decisions. This led me to explore various
              domains including machine learning, deep learning, natural language processing,
              and full-stack development.
            </p>

            <p className="text-muted-foreground">
              When I'm not coding or studying, you'll find me exploring new technologies,
              participating in hackathons, or contributing to open-source projects. I
              believe in continuous learning and am always looking for opportunities
              to grow as a developer and problem solver.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Naitikk.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Cards: Education & Work Experience */}
          <div className="grid grid-cols-1 gap-6">
            {/* Education Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-3">Education</h4>
                  <ul className="space-y-3 text-muted-foreground text-base">
                    <li>
                      <span className="font-medium">B.E. in Artificial Intelligence & Machine Learning</span>
                      <br />
                      Universal College of Engineering, Mumbai University
                      <br />
                      <span className="text-sm text-muted-foreground">2023 – 2027 (Currently in 3rd Year)</span>
                    </li>
                    <li>
                      <span className="font-medium">Diploma in Cloud Computing & Cyber Security</span>
                      <br />
                      Jetking Vasai
                      <br />
                      <span className="text-sm text-muted-foreground">2022 – 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Work Experience Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-3">Work Experience</h4>
                  <ul className="space-y-3 text-muted-foreground text-base">
                    <li>
                      <span className="font-medium">Machine Learning Intern</span>
                      <br />
                      Unified Mentor Pvt. Ltd
                      <br />
                      <span className="text-sm text-muted-foreground">Sep 2025 – Dec 2025</span>
                    </li>
                    <li>
                      <span className="font-medium">Python Development Intern</span>
                      <br />
                      Techno Hacks EduTech
                      <br />
                      <span className="text-sm text-muted-foreground">Aug 2025 – Sep 2025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}