import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { 
  Lightbulb, Users, Rocket, Globe, Atom, ThermometerSnowflake, 
  Microscope, Brain, Factory, Zap, Target, Cpu, CheckCircle2, 
  FileText, Search, MessageSquare, ClipboardList, UserCheck, 
  PartyPopper, BookOpen, Presentation, Building2, Heart, Scale, 
  Briefcase, Mail, ArrowRight, Microchip, Code, PenTool, Settings 
} from "lucide-react";
import { Link } from "react-router-dom";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

// ==========================================
// DATA BLOCKS & BACKEND PLACEHOLDERS
// ==========================================

// Easily replaceable from your backend API later
const pageImages = {
  hero: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  whoWeLookFor: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
};

const whyCryonano = [
  { icon: Lightbulb, title: "Innovation First", desc: "Work on real-world products that solve complex scientific and engineering challenges." },
  { icon: Users, title: "Advanced Research", desc: "Collaborate with leading scientists, academic institutions and industry partners worldwide." },
  { icon: Rocket, title: "Cutting-edge Technologies", desc: "Quantum, Cryogenics, AI, Robotics, Nanotechnology and Precision Engineering at the core." },
  { icon: Globe, title: "Global Impact", desc: "Our technologies empower research laboratories and industries across the globe." }
];

const workOnNodes = [
  { icon: Atom, label: "Quantum Hardware" },
  { icon: ThermometerSnowflake, label: "Cryogenic Systems" },
  { icon: Microscope, label: "Scientific Instruments" },
  { icon: Brain, label: "AI Solutions" },
  { icon: Factory, label: "Industrial Electronics" },
  { icon: Zap, label: "Power Electronics" },
  { icon: Target, label: "Precision Motion Systems" }
];

const engineeringDomains = [
  { icon: Settings, label: "Mechanical Engineering" },
  { icon: ThermometerSnowflake, label: "Cryogenic Engineering" },
  { icon: Cpu, label: "Electronics Engineering" },
  { icon: Microchip, label: "Embedded Systems" },
  { icon: Cpu, label: "FPGA Design & Development" },
  { icon: Zap, label: "Power Electronics" },
  { icon: Code, label: "Computer Science" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Target, label: "Computer Vision" },
  { icon: Rocket, label: "Robotics & Automation" },
  { icon: FileText, label: "Scientific Software" },
  { icon: PenTool, label: "Product Design" },
  { icon: Factory, label: "Manufacturing & Production" },
  { icon: Atom, label: "Research Physics" }
];

const whoWeLookFor = [
  "Curiosity & Passion for Technology",
  "Strong Problem Solving Skills",
  "Research-Oriented Mindset",
  "Ownership & Accountability",
  "Drive for Innovation",
  "Team Collaboration",
  "Continuous Learning Attitude"
];

const recruitmentProcess = [
  { step: "01", icon: FileText, title: "Application Submission" },
  { step: "02", icon: Search, title: "Resume Review" },
  { step: "03", icon: MessageSquare, title: "Technical Discussion" },
  { step: "04", icon: ClipboardList, title: "Assignment / Evaluation" },
  { step: "05", icon: Users, title: "Interview Rounds" },
  { step: "06", icon: UserCheck, title: "Offer Extended" },
  { step: "07", icon: PartyPopper, title: "Welcome to Cryonano!" }
];

// Easily replaceable from your backend API later
const lifeGallery = [
  { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", label: "Advanced R&D Laboratories" },
  { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop", label: "Collaborative Environment" },
  { img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop", label: "Precision Engineering" },
  { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop", label: "Global Conferences" },
  { img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop", label: "Innovation in Action" },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", label: "Teamwork & Growth" }
];

const benefits = [
  { icon: Target, label: "Challenging Projects" },
  { icon: BookOpen, label: "Continuous Learning" },
  { icon: Presentation, label: "Conference Participation" },
  { icon: Lightbulb, label: "Innovation Culture" },
  { icon: Building2, label: "State-of-the-art Facilities" },
  { icon: Users, label: "Mentorship & Guidance" },
  { icon: Heart, label: "Health & Wellness Programs" },
  { icon: Scale, label: "Work-Life Balance" }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative selection:bg-primary/20 selection:text-primary">
        <Navbar />

        {/* ========================================== */}
        {/* 1. HERO SECTION (White Theme)              */}
        {/* ========================================== */}
        <section className="relative pt-24 pb-12 bg-white overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="container relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="show" variants={staggerContainer} className="pr-4 py-10">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-primary" />
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Careers</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2647] tracking-tight leading-[1.1] mb-6">
                Build Technologies That Power <span className="text-primary">Tomorrow's Scientific Discoveries</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
                Join a team of physicists, engineers, researchers and innovators developing advanced cryogenic systems, quantum hardware and precision scientific instrumentation for laboratories around the world.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a href="#openings" className="bg-primary hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 transform">
                  Explore Opportunities <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/about/intern" className="bg-white border-2 border-slate-200 hover:border-primary/50 text-slate-700 hover:text-primary px-8 py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 transform">
                  <Briefcase className="w-4 h-4" /> Intern With Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Decorative Image & Floating Tags */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              className="relative hidden lg:flex justify-center items-center h-full min-h-[500px]"
            >
              <div className="relative w-full h-full max-h-[500px] rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl">
                <img 
                  src={pageImages.hero} 
                  alt="Scientist working in lab" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A2647]/40 mix-blend-overlay" />
                
                {/* Floating Tags Overlay */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-8">
                  {[
                    { icon: Atom, label: "Quantum Computing" },
                    { icon: ThermometerSnowflake, label: "Cryogenics" },
                    { icon: Brain, label: "AI & Machine Learning" },
                    { icon: Target, label: "Precision Engineering" },
                    { icon: Microscope, label: "Scientific Instrumentation" },
                    { icon: Lightbulb, label: "Research & Innovation" }
                  ].map((tag, idx) => (
                    <motion.div 
                      key={idx}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: idx * 0.4, ease: "easeInOut" }}
                      className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/50 shadow-lg flex items-center gap-2"
                    >
                      <tag.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-extrabold text-[#0A2647] uppercase tracking-wider">{tag.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. WHY CRYONANO?                           */}
        {/* ========================================== */}
        <section className="py-14 bg-slate-50">
          <div className="container max-w-7xl">
            <div className="flex items-center justify-center mb-10">
               <div className="w-full h-px bg-slate-200 relative flex items-center justify-center max-w-xl">
                 <div className="bg-slate-50 px-6">
                   <h2 className="font-display text-2xl font-extrabold text-[#0A2647] tracking-wider uppercase text-center">
                     Why Cryonano?
                   </h2>
                 </div>
               </div>
            </div>

            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {whyCryonano.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
                    <div className="w-14 h-14 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-[#0A2647] text-lg mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. WHAT YOU'LL WORK ON (Timeline style)    */}
        {/* ========================================== */}
        <section className="py-14 bg-[#0A2647] relative border-y border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)] pointer-events-none" />
          <div className="container max-w-7xl relative z-10">
            <div className="flex items-center justify-center mb-12">
               <div className="w-full h-px bg-slate-700 relative flex items-center justify-center max-w-xl">
                 <div className="bg-[#0A2647] px-6">
                   <h2 className="font-display text-2xl font-extrabold text-white tracking-wider uppercase text-center">
                     What You'll Work On
                   </h2>
                 </div>
               </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-0 relative">
              {/* Connecting Line for desktop */}
              <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 bg-slate-700 z-0" />
              
              {workOnNodes.map((node, idx) => (
                <motion.div 
                  key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="flex-1 flex flex-col items-center text-center relative z-10 min-w-[120px]"
                >
                  <div className="w-20 h-20 rounded-full bg-[#051121] border-2 border-slate-600 flex items-center justify-center mb-4 hover:border-primary hover:bg-primary/10 transition-colors group shadow-lg">
                    <node.icon className="w-8 h-8 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 tracking-wide">{node.label}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. ENGINEERING DOMAINS GRID                */}
        {/* ========================================== */}
        <section className="py-14 bg-white">
          <div className="container max-w-7xl">
            <div className="flex items-center justify-center mb-10">
               <div className="w-full h-px bg-slate-200 relative flex items-center justify-center max-w-xl">
                 <div className="bg-white px-6">
                   <h2 className="font-display text-2xl font-extrabold text-[#0A2647] tracking-wider uppercase text-center">
                     Engineering Domains
                   </h2>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {engineeringDomains.map((domain, idx) => (
                <motion.div 
                  key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="bg-slate-50 rounded-xl p-6 flex flex-col items-center text-center border border-slate-100 hover:border-primary hover:bg-red-50 transition-colors group cursor-default"
                >
                  <domain.icon className="w-8 h-8 text-slate-500 mb-3 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-widest leading-snug">{domain.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. WHO WE LOOK FOR                         */}
        {/* ========================================== */}
        <section className="py-14 bg-slate-50 border-y border-slate-200">
          <div className="container max-w-6xl">
            <div className="flex items-center justify-center mb-10">
               <div className="w-full h-px bg-slate-200 relative flex items-center justify-center max-w-xl">
                 <div className="bg-slate-50 px-6">
                   <h2 className="font-display text-2xl font-extrabold text-[#0A2647] tracking-wider uppercase text-center">
                     Who We Look For
                   </h2>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative min-h-[300px]">
                <img 
                  src={pageImages.whoWeLookFor} 
                  alt="Engineer analyzing data" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </div>
              <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                <ul className="space-y-5">
                  {whoWeLookFor.map((trait, idx) => (
                    <motion.li 
                      key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-lg font-bold text-slate-800">{trait}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. RECRUITMENT PROCESS & CURRENT OPENINGS    */}
        {/* ========================================== */}
        <section id="openings" className="py-14 bg-white">
          <div className="container max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              
              {/* Left: Recruitment Process */}
              <motion.div 
                initial={fadeInLeft.hidden} whileInView={fadeInLeft.show} viewport={{ once: true }}
                className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-center mb-10">
                   <div className="w-full h-px bg-slate-200 relative flex items-center justify-center">
                     <div className="bg-slate-50 px-4">
                       <h2 className="font-display text-xl font-extrabold text-[#0A2647] tracking-wider uppercase">Our Recruitment Process</h2>
                     </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
                  {recruitmentProcess.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                      <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:border-primary group-hover:shadow-md transition-all relative">
                        <step.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                        <div className="absolute -bottom-2 bg-[#0A2647] text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                          {step.step}
                        </div>
                      </div>
                      <p className="text-xs font-bold text-slate-700 leading-tight px-2">{step.title}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Current Openings */}
              <motion.div 
                initial={fadeInRight.hidden} whileInView={fadeInRight.show} viewport={{ once: true }}
                className="bg-[#0A2647] rounded-[2rem] p-10 border border-slate-800 shadow-lg relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.2)_0%,transparent_60%)] pointer-events-none" />
                <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4">
                  <Rocket className="w-64 h-64 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-0.5 w-8 bg-primary" />
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Current Openings</span>
                  </div>
                  
                  <h3 className="font-display text-3xl font-extrabold text-white mb-4">
                    No current openings
                  </h3>
                  
                  <p className="text-base text-slate-300 font-medium leading-relaxed mb-8 max-w-md">
                    We are always interested in exceptional talent. If you're passionate about technology and innovation, send us your resume and we'll reach out when the perfect opportunity arises.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:contact@cryonano.com" className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg w-fit">
                      Submit Your Resume <ArrowRight className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-2 text-slate-300 font-medium text-sm px-4">
                      <Mail className="w-4 h-4 text-primary" /> contact@cryonano.com
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. LIFE AT CRYONANO (Gallery)              */}
        {/* ========================================== */}
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="container max-w-7xl">
            <div className="flex items-center justify-center mb-10">
               <div className="w-full h-px bg-slate-200 relative flex items-center justify-center max-w-xl">
                 <div className="bg-slate-50 px-6">
                   <h2 className="font-display text-2xl font-extrabold text-[#0A2647] tracking-wider uppercase text-center">
                     Life at Cryonano
                   </h2>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {lifeGallery.map((item, idx) => (
                <motion.div 
                  key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-slate-200 relative group">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#0A2647]/0 group-hover:bg-[#0A2647]/20 transition-colors" />
                  </div>
                  <p className="text-center text-sm font-extrabold text-slate-800">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. BENEFITS & PERKS                        */}
        {/* ========================================== */}
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="container max-w-6xl">
            <div className="flex items-center justify-center mb-10">
               <div className="w-full h-px bg-slate-200 relative flex items-center justify-center max-w-xl">
                 <div className="bg-white px-6">
                   <h2 className="font-display text-2xl font-extrabold text-[#0A2647] tracking-wider uppercase text-center">
                     Benefits & Perks
                   </h2>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-red-50 transition-colors">
                    <benefit.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-extrabold text-slate-800">{benefit.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 9. FOOTER CTA                              */}
        {/* ========================================== */}
        <section className="bg-[#051121] py-14 border-t border-slate-800">
          <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Ready to Build the Future?</h2>
              <p className="text-slate-400 text-lg font-medium">Whether you're a researcher, engineer or student, we'd love to hear from you.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a href="mailto:contact@cryonano.com" className="bg-primary hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 transform">
                <Mail className="w-5 h-5" /> Send Your Resume
              </a>
              <Link to="/contact" className="border-2 border-slate-600 hover:border-white text-white px-8 py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 transform">
                Contact with us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}