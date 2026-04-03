import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
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
    setIsSubmitting(true);

    // Simulate async form submission
    setTimeout(() => {
      toast.success("Message sent 🎉, Will get back to you soon!");
      event.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-slate-950">
      <StarBackground />
      
      {/* Dynamic Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" /> Available for opportunities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-primary brightness-110">TOUCH.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tight">Let's build something great</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">
                Have a project in mind or want to collaborate? I'm currently looking for new opportunities and my inbox is always open.
              </p>
            </div>

            <div className="space-y-5">
              <ContactInfoCard 
                icon={<Mail size={20} />} 
                title="Email" 
                value="naitikk682@gmail.com" 
                link="mailto:naitikk682@gmail.com"
              />
              <ContactInfoCard 
                icon={<MapPin size={20} />} 
                title="Location" 
                value="Vasai, Maharashtra, India" 
              />
            </div>

            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-inner">
              <h4 className="font-bold text-slate-500 mb-8 uppercase tracking-[0.25em] text-[10px]">Follow the journey</h4>
              <div className="flex gap-5">
                <SocialLink href="https://www.linkedin.com/in/naitik-kushwaha/" icon={<LinkedinIcon size={22} />} />
                <SocialLink href="https://www.instagram.com/mr_naitik_maurya/" icon={<InstagramIcon size={22} />} />
                <SocialLink href="https://github.com/NAITIKK682" icon={<GithubIcon size={22} />} />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-14 rounded-[2.5rem] bg-slate-900/40 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 group-hover:bg-primary/10 transition-all duration-700" />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Naitik Kushwaha"
                      className="w-full px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-slate-600 font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="naitikk@example.com"
                      className="w-full px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-slate-600 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all resize-none placeholder:text-slate-600 font-medium"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:shadow-[0_20px_40px_-10px_rgba(var(--primary),0.5)] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Initiating Transmission..." : "Send Message"}
                  <Send size={18} className={cn("transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", isSubmitting && "animate-bounce")} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ icon, title, value, link }) {
  const Content = (
    <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-500 group">
      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-xl">
        <span className="text-primary group-hover:text-white transition-colors">
          {icon}
        </span>
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{title}</p>
        <p className="text-white font-bold text-lg tracking-tight group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  return link ? <a href={link} className="block">{Content}</a> : Content;
}

function SocialLink({ href, icon }) {
  return (
    <motion.a 
      whileHover={{ y: -5, scale: 1.1 }}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-lg"
    >
      {icon}
    </motion.a>
  );
}