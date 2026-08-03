// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { CTASection } from "@/components/CTASection";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import { 
//   Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
//   Activity, Shield, Camera, Cpu, Target, Settings,
//   Waves, Layers, Network, Lock, ShieldAlert, Code, Zap, ArrowLeft, ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";
// import { useAuth } from "@/context/AuthContext";
// import { AuthModal } from "@/components/AuthModal";

// // Icon mapping
// const iconMap: Record<string, any> = { Shield, Activity, Waves, Target, Cpu, Settings, Zap, Layers, Code, Lock, ShieldAlert };

// // ── Scroll to Top ──
// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const toggle = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
//     window.addEventListener("scroll", toggle);
//     return () => window.removeEventListener("scroll", toggle);
//   }, []);
//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.5 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-colors"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// };

// // ── Fade‑in animation variants ──
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

// export default function QuantumVoltPage() {
//   const product = productsData["quantum-volt"];
//   const [activeSection, setActiveSection] = useState("overview");
//   const [openAccordion, setOpenAccordion] = useState<string | null>("Output Parameters");
//   const [expandedApp, setExpandedApp] = useState<number | null>(null);

//   // Auth Integration
//   const { token } = useAuth();
//   const [showAuthModal, setShowAuthModal] = useState(false);

//   const handleDownloadDatasheet = () => {
//     if (token) {
//       const link = document.createElement('a');
//       link.href = product.datasheetUrl;
//       link.download = `${product.name.replace(/\s+/g, '_')}_Datasheet.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       setShowAuthModal(true);
//     }
//   };

//   // Refs for scroll spy
//   const overviewRef = useRef<HTMLDivElement>(null);
//   const featuresRef = useRef<HTMLDivElement>(null);
//   const techRef = useRef<HTMLDivElement>(null);
//   const specsRef = useRef<HTMLDivElement>(null);
//   const appsRef = useRef<HTMLDivElement>(null);

//   // ── Scroll spy ──
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 200;
//       if (appsRef.current && scrollPos >= appsRef.current.offsetTop) setActiveSection("applications");
//       else if (specsRef.current && scrollPos >= specsRef.current.offsetTop) setActiveSection("specifications");
//       else if (techRef.current && scrollPos >= techRef.current.offsetTop) setActiveSection("technology");
//       else if (featuresRef.current && scrollPos >= featuresRef.current.offsetTop) setActiveSection("features");
//       else setActiveSection("overview");
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
//   };

//   if (!product) return <div className="min-h-screen bg-background"><Navbar /></div>;

//   // Determine hero image source with fallback
//   const heroImageSrc = product.heroImage || (product.gallery && product.gallery[0]?.url) || "/images/placeholder.png";

//   // ── Application claims ──
//   const appClaims: Record<string, string> = {
//     "Quantum transport experiments": "Precision voltage biasing for fragile quantum states.",
//     "Superconducting qubits": "Stable gate control with minimal crosstalk.",
//     "Graphene & 2D materials": "Ultra‑low noise for sensitive 2D transport measurements.",
//     "Spintronics research": "Independent channel isolation for spin‐based devices.",
//     "Cryogenic electronics": "Designed for low‑temperature stability and repeatability.",
//     "Nanoelectronics characterization": "High‑resolution DAC for fine parameter sweeps.",
//     "Quantum device tuning": "Simultaneous multi‑channel updates for complex tuning.",
//     "Low‑temperature transport measurements": "Minimal thermal drift over long experiments.",
//     "Hall effect studies": "Precision voltage sourcing for accurate Hall coefficient.",
//     "Precision gate control systems": "Scalable architecture for multi‑terminal gates."
//   };

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
//         <Navbar />

//         {/* 01. HERO SECTION */}
//         <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
//           <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
          
//           <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center min-h-[550px]">
//             <div className="lg:col-span-7 flex flex-col justify-center">
//               {product.statusBadge && (
//                 <div className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-6 bg-primary/5 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
//                   {product.statusBadge}
//                 </div>
//               )}
//               <h1 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
//                 {product.hero.title}
//               </h1>
//               {/* Subtitle – colorful */}
//               <p className="text-xl text-cyan-400 font-bold mb-4 max-w-2xl leading-relaxed">
//                 {product.hero.subtitle}
//               </p>
//               {/* Description – larger font */}
//               <p className="text-base text-slate-300 font-medium max-w-2xl leading-relaxed mb-8">
//                 {product.hero.description}
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 {/* Updated Button to Link */}
//                 <Link to="/contact" className="px-6 py-3.5 inline-flex items-center justify-center rounded bg-primary text-white font-bold text-base tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:bg-red-600 transition-all transform hover:-translate-y-1">
//                   Request Technical Proposal
//                 </Link>
                
//                 {/* Secure Datasheet Download */}
//                 <button 
//                   onClick={handleDownloadDatasheet}
//                   className="px-6 py-3.5 rounded bg-slate-800/80 border border-slate-700 text-white font-bold text-base tracking-wide hover:border-primary hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center gap-2"
//                 >
//                   <Download className="w-5 h-5 text-primary" /> Download Datasheet
//                 </button>
//               </div>
//             </div>

//             {/* Seamless, box-free main image */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
//               className="lg:col-span-5 flex justify-center items-center w-full"
//             >
//               <img 
//                 src={heroImageSrc} 
//                 alt={product.hero.title} 
//                 className="w-full max-w-[550px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] mix-blend-screen" 
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* 01a. QUICK SPECIFICATION STRIP */}
//         <div className="relative z-30 -mt-8 container max-w-5xl">
//           <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
//             {product.quickSpecs.map((spec: any, i: number) => (
//               <div key={i} className="text-center border-r last:border-none border-slate-700 px-2">
//                 <p className="text-2xl font-display font-extrabold text-white">{spec.value}</p>
//                 <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mt-1">{spec.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 01b. STICKY SUB-NAV */}
//         <div className="sticky top-[var(--nav-height)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
//           <div className="container py-1 flex items-center justify-between">
//             <div className="flex-1 flex justify-center">
//               <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
//                 {[
//                   { id: "overview", label: "Overview", ref: overviewRef },
//                   { id: "features", label: "Features", ref: featuresRef },
//                   { id: "technology", label: "Technology", ref: techRef },
//                   { id: "specifications", label: "Specifications", ref: specsRef },
//                   { id: "applications", label: "Applications", ref: appsRef }
//                 ].map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => scrollToRef(tab.ref)}
//                     className={`px-4 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all ${
//                       activeSection === tab.id ? "bg-[#0A2647] text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
//                     }`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="flex-1 flex justify-end">
//               <Link to="/request-quote/research" className="hidden sm:inline-block text-center px-4 py-2 bg-primary hover:bg-red-600 text-white font-bold text-[11px] tracking-wider rounded transition-colors shadow-sm transform hover:-translate-y-0.5 uppercase">
//                 REQUEST A QUOTE
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* 02. OVERVIEW & RESEARCH ADVANTAGES */}
//         <motion.section
//           ref={overviewRef}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="py-12 bg-white border-b border-border"
//         >
//           <div className="container grid lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-5 relative bg-slate-100 border border-border aspect-video lg:aspect-square rounded-2xl overflow-hidden flex items-center justify-center group cursor-pointer">
//               <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
//                 <Camera className="w-16 h-16 text-slate-400" />
//                 <span className="absolute bottom-4 text-xs text-slate-500 font-bold">QuantumVolt™ – System Render</span>
//               </div>
//             </div>
//             <div className="lg:col-span-7">
//               <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">System Profile</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-6">{product.overview.title}</h2>
//               <div className="space-y-4 text-base text-slate-600 font-medium leading-relaxed mb-8">
//                 {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
//               </div>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {product.overview.advantages.map((adv: string, i: number) => (
//                   <div key={i} className="flex items-center gap-2.5 py-1">
//                     <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
//                     <span className="text-base font-bold text-slate-700">{adv}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* 03. KEY FEATURES */}
//         <motion.section
//           ref={featuresRef}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="py-12 bg-slate-50/30 border-b border-border"
//         >
//           <div className="container">
//             <div className="text-center max-w-3xl mx-auto mb-16">
//               <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">High-Fidelity Engineering</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {product.keyFeatures.map((feat: any, i: number) => {
//                 const Icon = iconMap[feat.icon] || CheckCircle2;
//                 return (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: false }}
//                     transition={{ delay: i * 0.05 }}
//                     className="group relative bg-white border border-border p-8 rounded-xl shadow-sm hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//                   >
//                     <div className="w-14 h-14 rounded bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
//                       <Icon className="w-7 h-7" />
//                     </div>
//                     <h3 className="text-xl font-bold text-[#0A2647] mb-2">{feat.title}</h3>
//                     <p className="text-base text-slate-600 font-medium leading-relaxed relative z-10">{feat.desc}</p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.section>

//         {/* CHANNEL CONFIGURATIONS */}
//         <motion.section
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="py-12 bg-slate-50/60 border-b border-border"
//         >
//           <div className="container max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//               <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Scalable System Deployment</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-4">Multi-Channel Architectures</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {product.channelConfigs.map((config: any, i: number) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: false }}
//                   transition={{ delay: i * 0.1 }}
//                   className="bg-white rounded-xl border border-border p-8 shadow-sm flex flex-col group hover:border-red-400 transition-colors duration-300"
//                 >
//                   <div className="w-14 h-14 rounded bg-slate-50 flex items-center justify-center text-slate-700 mb-6 border border-border">
//                     <Layers className="w-7 h-7 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-2">{config.name}</h3>
//                   <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6">{config.desc}</p>
//                   <ul className="space-y-3 mt-auto">
//                     {config.points.map((pt: string, idx: number) => (
//                       <li key={idx} className="flex items-start gap-2.5">
//                         <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
//                         <span className="text-sm font-bold text-slate-600">{pt}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* 04. CORE TECHNOLOGIES */}
//         <motion.section
//           ref={techRef}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="py-16 bg-white border-b border-border"
//         >
//           <div className="container max-w-7xl">
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Technical Deep‑Dive</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
//             </div>

//             <div className="space-y-12">
//               {product.coreTechnologies.map((tech: any, i: number) => {
//                 const Icon = tech.type === 'hardware' ? Waves : tech.type === 'software' ? Code : Lock;
//                 return (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: false }}
//                     transition={{ delay: i * 0.1 }}
//                     className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col lg:flex-row gap-8"
//                   >
//                     {/* Left: Icon & metadata */}
//                     <div className="lg:w-1/4 flex flex-col items-center lg:items-start justify-center">
//                       <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-4">
//                         <Icon className="w-12 h-12" />
//                       </div>
//                       <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tech.subtitle}</span>
//                     </div>

//                     {/* Right: Content */}
//                     <div className="lg:w-3/4 flex flex-col">
//                       <h3 className="text-2xl font-extrabold text-[#0A2647] mb-2">{tech.title}</h3>
//                       <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">{tech.description}</p>

//                       {/* Bullets */}
//                       <div className={`grid ${tech.bullets.length > 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mb-6`}>
//                         {tech.bullets.map((b: string, idx: number) => (
//                           <div key={idx} className="flex items-start gap-2.5 text-sm font-bold text-slate-700">
//                             <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
//                             <span>{b}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Extra sections */}
//                       {tech.type === 'hardware' && tech.highlights && (
//                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 pt-4 border-t border-border">
//                           {tech.highlights.map((h: any, idx: number) => (
//                             <div key={idx} className="bg-slate-50 p-3 rounded-lg text-center">
//                               <p className="text-[10px] font-bold text-slate-400 uppercase">{h.label}</p>
//                               <p className="text-base font-extrabold text-primary">{h.val}</p>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {tech.type === 'software' && (
//                         <div className="mt-2 pt-4 border-t border-border">
//                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Supported Platforms</p>
//                           <div className="flex flex-wrap gap-2">
//                             {tech.platforms.map((p: string, idx: number) => (
//                               <span key={idx} className="px-4 py-2 bg-[#0A2647] text-white rounded-lg text-sm font-bold">{p}</span>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {tech.type === 'protection' && (
//                         <div className="mt-2 pt-4 border-t border-border">
//                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Active Safety</p>
//                           <div className="flex flex-wrap gap-2">
//                             {tech.protects.map((p: string, idx: number) => (
//                               <span key={idx} className="px-3 py-1.5 bg-red-50 text-primary border border-red-100 rounded-lg text-sm font-bold flex items-center gap-1.5">
//                                 <ShieldAlert className="w-4 h-4" /> {p}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.section>

//         {/* 05. INTERACTIVE TECHNICAL SPECIFICATIONS */}
//         <motion.section
//           ref={specsRef}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="py-12 bg-white border-b border-border"
//         >
//           <div className="container max-w-4xl">
//             <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
//               <div>
//                 <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Data Sheet</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
//               </div>
//               <div className="flex gap-2">
//                 <button 
//                   onClick={() => setOpenAccordion("all")} 
//                   className="px-4 py-2 bg-slate-100 border border-border text-slate-600 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-200 transition-colors"
//                 >
//                   Expand All
//                 </button>
//                 <button 
//                   onClick={() => setOpenAccordion(null)} 
//                   className="px-4 py-2 bg-slate-100 border border-border text-slate-600 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-200 transition-colors"
//                 >
//                   Collapse
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {Object.entries(product.specifications).map(([category, items]: [string, any]) => {
//                 const isOpen = openAccordion === "all" || openAccordion === category;
//                 return (
//                   <div key={category} className="border border-border rounded-xl overflow-hidden shadow-sm bg-white">
//                     <button
//                       onClick={() => setOpenAccordion(isOpen ? null : category)}
//                       className="w-full px-6 py-5 bg-slate-50 flex items-center justify-between border-b border-border hover:bg-slate-100/60 transition-colors"
//                     >
//                       <span className="font-display font-bold text-base text-[#0A2647] uppercase tracking-wide">{category}</span>
//                       {isOpen ? <ChevronDown className="w-5 h-5 text-slate-500" /> : <ChevronRight className="w-5 h-5 text-slate-500" />}
//                     </button>
//                     <AnimatePresence>
//                       {isOpen && (
//                         <motion.div
//                           initial={{ height: 0 }}
//                           animate={{ height: "auto" }}
//                           exit={{ height: 0 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="px-6 py-2 divide-y divide-border/50">
//                             {items.map((row: any, idx: number) => (
//                               <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-1 hover:bg-slate-50/40 px-3 rounded transition-colors group">
//                                 <span className="text-sm font-bold text-slate-500 uppercase tracking-wide group-hover:text-primary transition-colors">{row.param}</span>
//                                 <span className="text-base font-bold text-slate-900">{row.spec}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.section>

//         {/* 07. APPLICATIONS */}
//         <motion.section
//           ref={appsRef}
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="py-12 bg-white border-b border-border"
//         >
//           <div className="container max-w-6xl">
//             <div className="text-center max-w-3xl mx-auto mb-16">
//               <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Deployment Scenarios</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Research Applications</h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {product.applications.map((app: string, i: number) => {
//                 const isExpanded = expandedApp === i;
//                 return (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: false }}
//                     transition={{ delay: i * 0.03 }}
//                     className={`bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
//                       isExpanded ? "border-primary shadow-lg" : ""
//                     }`}
//                     onClick={() => setExpandedApp(isExpanded ? null : i)}
//                   >
//                     <div className="flex items-center justify-between gap-4">
//                       <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 rounded bg-slate-50 border border-border flex items-center justify-center shrink-0 group-hover:bg-[#0A2647] group-hover:text-white transition-colors">
//                           {isExpanded ? (
//                             <Minus className="w-5 h-5 text-primary" />
//                           ) : (
//                             <Plus className="w-5 h-5 text-primary" />
//                           )}
//                         </div>
//                         <span className="font-bold text-slate-700 text-base leading-tight">{app}</span>
//                       </div>
//                     </div>
//                     <AnimatePresence>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="mt-4 pl-14"
//                         >
//                           <p className="text-sm text-slate-600 font-medium leading-relaxed">
//                             {appClaims[app] || "Precision control for advanced research applications."}
//                           </p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.section>

//         {/* 09. VISUAL GALLERY */}
//         {product.gallery && product.gallery.length > 0 && (
//           <motion.section
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.2 }}
//             className="py-12 bg-slate-50/50 border-b border-border"
//           >
//             <div className="container">
//               <div className="text-center max-w-3xl mx-auto mb-16">
//                 <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">System Imagery</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
//               </div> 
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {product.gallery.map((img: any, i: number) => (
//                   <motion.div
//                     key={i}
//                     variants={fadeInUp}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: false }}
//                     transition={{ delay: i * 0.05 }}
//                     className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//                   >
//                     <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
//                       <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                     </div>
//                     <div className="p-5 bg-white border-t border-border/40">
//                       <p className="text-sm font-bold text-slate-700">{img.caption}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         )}

//         {/* 10. FINAL CTA */}
//         <CTASection />

//         {/* Footer Navigation Links */}
//         <section className="bg-white py-10 border-t border-border">
//           <div className="container max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
//             <Link to="/" className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
//               <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
//               <span className="text-sm font-bold tracking-widest uppercase">Back to Homepage</span>
//             </Link>
//             <Link to="/products" className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
//               <span className="text-sm font-bold tracking-widest uppercase">Return to Catalogue</span>
//               <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
//             </Link>
//           </div>
//         </section>

//         <ScrollToTop />
//         <Footer />
        
//         {/* ADDED MODAL */}
//         <AuthModal 
//           isOpen={showAuthModal} 
//           onClose={() => setShowAuthModal(false)} 
//           onSuccess={handleDownloadDatasheet} 
//         />
//       </div>
//     </PageTransition>
//   );
// }









import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Shield, Camera, Cpu, Target, Settings,
  Waves, Layers, Network, Lock, ShieldAlert, Code, Zap, ArrowLeft, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/AuthModal";

// Icon mapping
const iconMap: Record<string, any> = { Shield, Activity, Waves, Target, Cpu, Settings, Zap, Layers, Code, Lock, ShieldAlert };

// ── Scroll to Top ──
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ── Fade‑in animation variants ──
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function QuantumVoltPage() {
  const product = productsData["quantum-volt"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Output Parameters");
  const [expandedApp, setExpandedApp] = useState<number | null>(null);

  // Auth Integration
  const { token } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleDownloadDatasheet = () => {
    if (token) {
      const link = document.createElement('a');
      link.href = product.datasheetUrl;
      link.download = `${product.name.replace(/\s+/g, '_')}_Datasheet.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setShowAuthModal(true);
    }
  };

  // Refs for scroll spy
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);

  // ── Scroll spy ──
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
    if (ref.current) window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
  };

  if (!product) return <div className="min-h-screen bg-background"><Navbar /></div>;

  // Determine hero image source with fallback
  const heroImageSrc = product.heroImage || (product.gallery && product.gallery[0]?.url) || "/images/placeholder.png";

  // ── Application claims ──
  const appClaims: Record<string, string> = {
    "Quantum transport experiments": "Precision voltage biasing for fragile quantum states.",
    "Superconducting qubits": "Stable gate control with minimal crosstalk.",
    "Graphene & 2D materials": "Ultra‑low noise for sensitive 2D transport measurements.",
    "Spintronics research": "Independent channel isolation for spin‐based devices.",
    "Cryogenic electronics": "Designed for low‑temperature stability and repeatability.",
    "Nanoelectronics characterization": "High‑resolution DAC for fine parameter sweeps.",
    "Quantum device tuning": "Simultaneous multi‑channel updates for complex tuning.",
    "Low‑temperature transport measurements": "Minimal thermal drift over long experiments.",
    "Hall effect studies": "Precision voltage sourcing for accurate Hall coefficient.",
    "Precision gate control systems": "Scalable architecture for multi‑terminal gates."
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
        <Navbar />

        {/* 01. HERO SECTION */}
        <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center min-h-[550px]">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {product.statusBadge && (
                <div className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-6 bg-primary/5 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                  {product.statusBadge}
                </div>
              )}
              <h1 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                {product.hero.title}
              </h1>
              {/* Subtitle – colorful */}
              <p className="text-xl text-cyan-400 font-bold mb-4 max-w-2xl leading-relaxed">
                {product.hero.subtitle}
              </p>
              {/* Description – larger font */}
              <p className="text-base text-slate-300 font-medium max-w-2xl leading-relaxed mb-8">
                {product.hero.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {/* Updated Button to Link */}
                <Link to="/contact" className="px-6 py-3.5 inline-flex items-center justify-center rounded bg-primary text-white font-bold text-base tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:bg-red-600 transition-all transform hover:-translate-y-1">
                  Request Technical Proposal
                </Link>
                
                {/* Secure Datasheet Download */}
                <button 
                  onClick={handleDownloadDatasheet}
                  className="px-6 py-3.5 rounded bg-slate-800/80 border border-slate-700 text-white font-bold text-base tracking-wide hover:border-primary hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Download className="w-5 h-5 text-primary" /> Download Datasheet
                </button>
              </div>
            </div>

            {/* Seamless, box-free main image */}
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
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            {product.quickSpecs.map((spec: any, i: number) => (
              <div key={i} className="text-center border-r last:border-none border-slate-700 px-2">
                <p className="text-2xl font-display font-extrabold text-white">{spec.value}</p>
                <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mt-1">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 01b. STICKY SUB-NAV */}
        <div className="sticky top-[var(--nav-height)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container py-1 flex items-center justify-between">
            <div className="flex-1 hidden md:block" />
            <div className="flex items-center justify-center gap-1 overflow-x-auto no-scrollbar py-2">
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
                  className={`px-4 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all ${
                    activeSection === tab.id ? "bg-[#0A2647] text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 flex justify-end">
              <Link to="/request-quote/research" className="hidden sm:inline-block text-center px-4 py-2 bg-primary hover:bg-red-600 text-white font-bold text-[11px] tracking-wider rounded transition-colors shadow-sm transform hover:-translate-y-0.5 uppercase">
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* 02. OVERVIEW & RESEARCH ADVANTAGES */}
        <motion.section
          ref={overviewRef}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-12 bg-white border-b border-border"
        >
          <div className="container max-w-5xl mx-auto">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">System Profile</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-6">{product.overview.title}</h2>
              <div className="space-y-4 text-base text-slate-600 font-medium leading-relaxed mb-8">
                {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.overview.advantages.map((adv: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5 py-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-base font-bold text-slate-700">{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* 03. KEY FEATURES */}
        <motion.section
          ref={featuresRef}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-12 bg-slate-50/30 border-b border-border"
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">High-Fidelity Engineering</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.keyFeatures.map((feat: any, i: number) => {
                const Icon = iconMap[feat.icon] || CheckCircle2;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative bg-white border border-border p-8 rounded-xl shadow-sm hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="w-14 h-14 rounded bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2647] mb-2">{feat.title}</h3>
                    <p className="text-base text-slate-600 font-medium leading-relaxed relative z-10">{feat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* CHANNEL CONFIGURATIONS */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-12 bg-slate-50/60 border-b border-border"
        >
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Scalable System Deployment</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-4">Multi-Channel Architectures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.channelConfigs.map((config: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-border p-8 shadow-sm flex flex-col group hover:border-red-400 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded bg-slate-50 flex items-center justify-center text-slate-700 mb-6 border border-border">
                    <Layers className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{config.name}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6">{config.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {config.points.map((pt: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="text-sm font-bold text-slate-600">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 04. CORE TECHNOLOGIES */}
        <motion.section
          ref={techRef}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-16 bg-white border-b border-border"
        >
          <div className="container max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Technical Deep‑Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>

            <div className="space-y-12">
              {product.coreTechnologies.map((tech: any, i: number) => {
                const Icon = tech.type === 'hardware' ? Waves : tech.type === 'software' ? Code : Lock;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col lg:flex-row gap-8"
                  >
                    {/* Left: Icon & metadata */}
                    <div className="lg:w-1/4 flex flex-col items-center lg:items-start justify-center">
                      <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-4">
                        <Icon className="w-12 h-12" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tech.subtitle}</span>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:w-3/4 flex flex-col">
                      <h3 className="text-2xl font-extrabold text-[#0A2647] mb-2">{tech.title}</h3>
                      <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">{tech.description}</p>

                      {/* Bullets */}
                      <div className={`grid ${tech.bullets.length > 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mb-6`}>
                        {tech.bullets.map((b: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2.5 text-sm font-bold text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Extra sections */}
                      {tech.type === 'hardware' && tech.highlights && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 pt-4 border-t border-border">
                          {tech.highlights.map((h: any, idx: number) => (
                            <div key={idx} className="bg-slate-50 p-3 rounded-lg text-center">
                              <p className="text-[10px] font-bold text-slate-400 uppercase">{h.label}</p>
                              <p className="text-base font-extrabold text-primary">{h.val}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {tech.type === 'software' && (
                        <div className="mt-2 pt-4 border-t border-border">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Supported Platforms</p>
                          <div className="flex flex-wrap gap-2">
                            {tech.platforms.map((p: string, idx: number) => (
                              <span key={idx} className="px-4 py-2 bg-[#0A2647] text-white rounded-lg text-sm font-bold">{p}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.type === 'protection' && (
                        <div className="mt-2 pt-4 border-t border-border">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Active Safety</p>
                          <div className="flex flex-wrap gap-2">
                            {tech.protects.map((p: string, idx: number) => (
                              <span key={idx} className="px-3 py-1.5 bg-red-50 text-primary border border-red-100 rounded-lg text-sm font-bold flex items-center gap-1.5">
                                <ShieldAlert className="w-4 h-4" /> {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* 05. INTERACTIVE TECHNICAL SPECIFICATIONS */}
        <motion.section
          ref={specsRef}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-12 bg-white border-b border-border"
        >
          <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Data Sheet</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setOpenAccordion("all")} 
                  className="px-4 py-2 bg-slate-100 border border-border text-slate-600 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-200 transition-colors"
                >
                  Expand All
                </button>
                <button 
                  onClick={() => setOpenAccordion(null)} 
                  className="px-4 py-2 bg-slate-100 border border-border text-slate-600 font-bold text-xs uppercase tracking-wider rounded hover:bg-slate-200 transition-colors"
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
                      className="w-full px-6 py-5 bg-slate-50 flex items-center justify-between border-b border-border hover:bg-slate-100/60 transition-colors"
                    >
                      <span className="font-display font-bold text-base text-[#0A2647] uppercase tracking-wide">{category}</span>
                      {isOpen ? <ChevronDown className="w-5 h-5 text-slate-500" /> : <ChevronRight className="w-5 h-5 text-slate-500" />}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden bg-slate-50/50"
                        >
                          <div className="px-6 py-2 divide-y divide-border/50">
                            {items.map((row: any, idx: number) => (
                              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-1 hover:bg-slate-50/40 px-3 rounded transition-colors group">
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
        </motion.section>

        {/* 07. APPLICATIONS */}
        <motion.section
          ref={appsRef}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="py-12 bg-white border-b border-border"
        >
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Research Applications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.applications.map((app: string, i: number) => {
                const isExpanded = expandedApp === i;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.03 }}
                    className={`bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                      isExpanded ? "border-primary shadow-lg" : ""
                    }`}
                    onClick={() => setExpandedApp(isExpanded ? null : i)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded bg-slate-50 border border-border flex items-center justify-center shrink-0 group-hover:bg-[#0A2647] group-hover:text-white transition-colors">
                          {isExpanded ? (
                            <Minus className="w-5 h-5 text-primary" />
                          ) : (
                            <Plus className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <span className="font-bold text-slate-700 text-base leading-tight">{app}</span>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pl-14"
                        >
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            {appClaims[app] || "Precision control for advanced research applications."}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* 09. VISUAL GALLERY */}
        {product.gallery && product.gallery.length > 0 && (
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="py-12 bg-slate-50/50 border-b border-border"
          >
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">System Imagery</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
              </div> 
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.gallery.map((img: any, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5 bg-white border-t border-border/40">
                      <p className="text-sm font-bold text-slate-700">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* 10. FINAL CTA */}
        <CTASection />

        {/* Footer Navigation Links */}
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