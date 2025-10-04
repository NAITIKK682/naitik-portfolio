import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col items-center">
          {/* Profile Photo */}
          <img
            src="/profile.jpg"   // <-- photo placed in D:/Portfolio/public/profile.jpg
            alt="Naitik Kushwaha"
            className="w-40 h-40 rounded-full shadow-lg object-cover opacity-0 animate-fade-in"
          />

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Naitik{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Kushwaha{" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Hi, I’m Naitik K — an aspiring Full stack Developer and AIML Enthusiast. 
            Third year B.E. student specializing in Artificial Intelligence & Machine 
            Learning at Universal College of Engineering, Mumbai University. Passionate 
            about developing intelligent solutions and leveraging data to solve real-world problems.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
