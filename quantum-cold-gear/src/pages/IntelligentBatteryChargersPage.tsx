import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection"; 
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Shield, Camera, Cpu, Target, Settings, ThermometerSnowflake,
  Waves, Layers, ShieldAlert, ArrowLeft, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/AuthModal";

const iconMap: Record<string, any> = { ThermometerSnowflake, Activity, Shield, Camera, Waves, Target, Cpu, Settings, Layers, ShieldAlert };

// ==========================================
// SCROLL TO TOP COMPONENT
// ==========================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ==========================================
// CORE TECHNOLOGIES – Vertical Stack
// ==========================================
const CoreTechnologiesStack = ({ technologies }: { technologies: any[] }) => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      {technologies.map((tech, idx) => {
        const TechIcon = iconMap[tech.icon] || Settings;
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
            className="w-full bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left shrink-0 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-4 border border-red-100 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <TechIcon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-extrabold text-slate-500 uppercase tracking-widest leading-relaxed group-hover:text-primary transition-colors">
                {tech.sideCaption}
              </p>
            </div>

            <div className="w-full md:w-3/4 flex flex-col justify-center relative z-10">
              <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">{tech.subtitle}</span>
              <h3 className="text-2xl font-extrabold text-[#0A2647] mb-3 group-hover:text-primary transition-colors">{tech.title}</h3>
              <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">{tech.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {tech.bullets.map((bullet: string, bIdx: number) => (
                  <div key={bIdx} className="flex items-start gap-3 group/bullet">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover/bullet:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-800 group-hover/bullet:text-slate-900 transition-colors">{bullet}</span>
                  </div>
                ))}
              </div>

              {tech.type === 'hardware' && tech.highlights && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-wrap gap-6 divide-x divide-slate-200 group-hover:border-primary/30 transition-colors">
                  {tech.highlights.map((h: any, hIdx: number) => (
                    <div key={hIdx} className="pl-6 first:pl-0 first:border-0 flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{h.label}</span>
                      <span className="text-base font-extrabold text-primary">{h.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {tech.type === 'protection' && tech.protects && (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Supported Configurations</span>
                  <div className="flex flex-wrap gap-2">
                    {tech.protects.map((p: string, pIdx: number) => (
                      <div key={pIdx} className="px-4 py-2 bg-red-50 text-primary border border-red-100 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-red-100 transition-colors cursor-default">
                        <ShieldAlert className="w-4 h-4" /> {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// ==========================================
// APPLICATIONS – Expandable 3-Column Grid
// ==========================================
const ApplicationsExpandableGrid = ({ apps }: { apps: string[] }) => {
  const [expandedApp, setExpandedApp] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {apps.map((app, i) => {
        const isExpanded = expandedApp === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setExpandedApp(isExpanded ? null : i)}
            className={`bg-white p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
              isExpanded ? 'border-primary shadow-md' : 'border-border shadow-sm hover:border-slate-400'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isExpanded ? 'bg-primary text-white' : 'bg-slate-100 text-primary'
              }`}>
                {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
              <span className="font-bold text-[#0A2647] text-base leading-tight">{app}</span>
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-600 font-medium pl-14">
                    Engineered to deliver safe, stable, and highly efficient charging control for {app.toLowerCase()}, ensuring dependable performance wherever power is critical.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

// ==========================================
// VISUAL REFERENCE – 3-Column Image Gallery
// ==========================================
const VisualReference = ({ gallery }: { gallery: any[] }) => {
  if (!gallery || gallery.length === 0) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {gallery.map((img: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.02, y: -6 }}
          className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="w-full h-56 bg-slate-50 flex items-center justify-center overflow-hidden relative p-4 border-b border-slate-100">
            <img 
              src={img.url} 
              alt={img.caption} 
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="p-5 text-center mt-auto bg-white">
            <p className="text-base font-bold text-[#0A2647]">{img.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function IntelligentBatteryChargersPage() {
  const product = productsData["battery-chargers"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Performance & Capability");
  
  // Auth Integration
  const { token } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleDownloadDatasheet = () => {
    if (token) {
      if(product.datasheetUrl && product.datasheetUrl !== "") {
        const link = document.createElement('a');
        link.href = product.datasheetUrl;
        link.download = `${product.name.replace(/\s+/g, '_')}_Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("Brochure will be available shortly.");
      }
    } else {
      setShowAuthModal(true);
    }
  };

  // Section references for Scroll Spy
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      if (appsRef.current && scrollPos >= appsRef.current.offsetTop) setActiveSection("applications");
      else if (specsRef.current && scrollPos >= specsRef.current.offsetTop) setActiveSection("specifications");
      else if (techRef.current && scrollPos >= techRef.current.offsetTop) setActiveSection("technology");
      else if (featuresRef.current && scrollPos >= featuresRef.current.offsetTop) setActiveSection("features");
      else setActiveSection("overview");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
    }
  };

  if (!product) return <div className="min-h-screen bg-background"><Navbar /></div>;

  // Fallback for backend images
  const heroImageSrc = product.heroImage || "/images/placeholder.png";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
        <Navbar />

        {/* 01. HERO SECTION */}
        <section className="relative pt-5 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" 
          />
          <motion.div 
            animate={{ x: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" 
          />
          
          <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {product.statusBadge && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-4 bg-primary/10 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                >
                  {product.statusBadge}
                </motion.div>
              )}
              <motion.h1 
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
              >
                {product.hero.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-cyan-400 font-bold mb-4 max-w-2xl leading-relaxed"
              >
                {product.hero.subtitle}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base text-slate-300 font-medium mb-8 max-w-2xl leading-relaxed"
              >
                {product.hero.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="px-6 py-3.5 inline-flex items-center justify-center rounded bg-primary text-white font-bold text-base tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:bg-red-600 transition-all transform hover:-translate-y-1">
                  Request Technical Proposal
                </Link>
                <button 
                  onClick={handleDownloadDatasheet}
                  className="px-6 py-3.5 rounded bg-slate-800/80 border border-slate-700 text-white font-bold text-base tracking-wide hover:border-primary hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Download className="w-5 h-5 text-primary" /> Download Brochure
                </button>
              </motion.div>
            </div>

            {/* Seamless, frame-free main image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center items-center w-full"
            >
              <img 
                src={heroImageSrc} 
                alt={product.hero.title} 
                className="w-full max-w-[550px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] mix-blend-screen" 
              />
            </motion.div>
          </div>
        </section>

        {/* 01a. QUICK SPECIFICATION STRIP */}
        <div className="relative z-30 -mt-8 container max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#0A2647] rounded-xl border border-blue-900/50 p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {product.quickSpecs.map((spec: any, i: number) => (
              <div key={i} className="text-center border-r last:border-none border-blue-800/50 px-2 group">
                <p className="text-2xl font-display font-extrabold text-white group-hover:text-primary transition-colors">{spec.value}</p>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mt-1">{spec.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 01b. DYNAMIC STICKY SUB-NAVIGATION */}
        <div className="sticky top-[var(--nav-height)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm mt-12">
          <div className="container py-2 flex items-center justify-between">
            <div className="flex-1 hidden md:block" />
            <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "overview", label: "Overview", ref: overviewRef },
                { id: "features", label: "Features", ref: featuresRef },
                { id: "technology", label: "Technology", ref: techRef },
                { id: "specifications", label: "Specifications", ref: specsRef },
                { id: "applications", label: "Applications", ref: appsRef }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToRef(tab.ref)}
                  className={`px-4 py-1.5 text-sm font-bold tracking-wide rounded-full transition-all duration-300 ${activeSection === tab.id ? "bg-[#0A2647] text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 flex justify-end">
              <Link to="/request-quote/industry" className="hidden sm:inline-block text-center px-4 py-2 bg-primary hover:bg-red-600 text-white font-bold text-xs tracking-wider rounded transition-colors shadow-sm transform hover:-translate-y-0.5 uppercase">
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* 02. OVERVIEW */}
        <section ref={overviewRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-5xl text-center">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block"
            >
              System Profile
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-6"
            >
              {product.overview.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="space-y-4 text-base text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {product.overview.advantages.map((adv: string, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, borderColor: '#0A2647', backgroundColor: '#f8fafc' }}
                  key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm transition-all cursor-default"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-base font-bold text-[#0A2647]">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. KEY FEATURES / BENEFITS */}
        <section ref={featuresRef} className="py-16 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">High-Fidelity Engineering</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.keyFeatures.map((feat: any, i: number) => {
                const Icon = iconMap[feat.icon] || CheckCircle2;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i} 
                    className="group relative bg-white border border-border p-8 rounded-xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="w-14 h-14 rounded-lg bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                      <Icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2647] mb-2">{feat.title}</h3>
                    <p className="text-base text-slate-600 font-medium leading-relaxed relative z-10">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04. CORE TECHNOLOGIES */}
        <section ref={techRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            <CoreTechnologiesStack technologies={product.coreTechnologies} />
          </div>
        </section>

        {/* 05. TECHNICAL SPECIFICATIONS */}
        <section ref={specsRef} className="py-16 bg-slate-50/50 border-b border-border">
          <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">Data Sheet</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setOpenAccordion("all")} 
                  className="px-4 py-2 bg-white border border-border text-slate-700 font-bold text-xs uppercase tracking-wider rounded hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Expand All
                </button>
                <button 
                  onClick={() => setOpenAccordion(null)} 
                  className="px-4 py-2 bg-white border border-border text-slate-700 font-bold text-xs uppercase tracking-wider rounded hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Collapse
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(product.specifications).map(([category, items]: [string, any]) => {
                const isOpen = openAccordion === "all" || openAccordion === category;
                return (
                  <div key={category} className="border border-border rounded-xl overflow-hidden shadow-sm bg-white">
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : category)}
                      className="w-full px-6 py-5 bg-white flex items-center justify-between border-b border-border hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-display font-bold text-base text-[#0A2647] uppercase tracking-wide">{category}</span>
                      {isOpen ? <ChevronDown className="w-5 h-5 text-primary" /> : <ChevronRight className="w-5 h-5 text-slate-500" />}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                          className="overflow-hidden bg-slate-50/50"
                        >
                          <div className="px-6 py-2 divide-y divide-border/50">
                            {items.map((row: any, idx: number) => (
                              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-1 hover:bg-blue-50/50 px-3 rounded transition-colors group">
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide group-hover:text-primary transition-colors">{row.param}</span>
                                <span className="text-base font-bold text-slate-900">{row.spec}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 08. APPLICATIONS */}
        <section ref={appsRef} className="py-16 bg-white border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
            </div>
            <ApplicationsExpandableGrid apps={product.applications} />
          </div>
        </section>

        {/* 09. FINAL TAGLINE */}
        {product.cta?.tagline && (
          <section className="py-16 bg-slate-50 border-b border-border">
            <div className="container text-center max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] tracking-tight"
              >
                {product.cta.tagline}
              </motion.h2>
            </div>
          </section>
        )}

        {/* 06. VISUAL REFERENCE – SYSTEM IMAGERY */}
        {product.gallery && product.gallery.length > 0 && product.gallery[0].url !== "" && (
          <section className="py-16 bg-white border-b border-border">
            <div className="container max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">System Imagery</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
              </div>
              <VisualReference gallery={product.gallery} />
            </div>
          </section>
        )}

        {/* GLOBAL CTA SECTION */}
        <CTASection />

        {/* BOTTOM NAVIGATION */}
        <section className="bg-white py-10 border-t border-border">
          <div className="container max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link to="/" className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-bold tracking-widest uppercase">Back to Homepage</span>
            </Link>
            <Link to="/products" className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span className="text-sm font-bold tracking-widest uppercase">Return to Catalogue</span>
              <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </section>

        <ScrollToTop />
        <Footer />
        
        {/* ADDED MODAL */}
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
          onSuccess={handleDownloadDatasheet} 
        />
      </div>
    </PageTransition>
  );
}