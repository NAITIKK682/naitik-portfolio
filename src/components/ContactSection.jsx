import {
  GithubIcon,
  InstagramIcon,
  Linkedin,
  LinkedinIcon,
  Mail,
  Map,
  MapPin,
  Send,
  Sparkles,
  Phone
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsSubmitting(true);

    // Simulate async form submission
    setTimeout(() => {
      toast.success("Message sent 🎉, Will get back to you soon!");
      event.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Background Layer */}
      <StarBackground />
      
      {/* Decorative Aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} /> Available for opportunities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">TOUCH.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's build something great</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind or want to collaborate? I'm currently looking for new opportunities and my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard 
                icon={<Mail className="text-primary" />} 
                title="Email" 
                value="naitikk682@gmail.com" 
                link="mailto:naitikk682@gmail.com"
              />
              <ContactInfoCard 
                icon={<MapPin className="text-primary" />} 
                title="Location" 
                value="Vasai, Maharashtra, India" 
              />
            </div>

            <div className="p-8 rounded-3xl bg-secondary/10 border border-white/5 backdrop-blur-md">
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Follow the journey</h4>
              <div className="flex gap-4">
                <SocialLink href="https://www.linkedin.com/in/naitik-kushwaha/" icon={<LinkedinIcon size={20} />} />
                <SocialLink href="https://www.instagram.com/mr_naitik_maurya/" icon={<InstagramIcon size={20} />} />
                <SocialLink href="https://github.com/NAITIKK682" icon={<GithubIcon size={20} />} />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Naitik Kushwaha"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="naitikk@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-white/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? "Initiating Transmission..." : "Send Message"}
                  <Send size={18} className={cn(isSubmitting && "animate-pulse")} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Sub-components for cleaner structure
function ContactInfoCard({ icon, title, value, link }) {
  const Content = (
    <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{title}</p>
        <p className="text-white font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link}>{Content}</a> : Content;
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}