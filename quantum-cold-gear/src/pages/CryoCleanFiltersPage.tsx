// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { CTASection } from "@/components/CTASection";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
//   Activity, Zap, Shield, Camera, Cpu, Target, Settings,
//   Waves, Layers, Network, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // Icon mapping
// const iconMap: Record<string, any> = { Shield, Activity, Waves, Target, Cpu, Settings, Layers, Network, Lock };

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

// // ── Application descriptions (static, for clean card layout) ──
// const appDescriptions: Record<string, string> = {
//   "Quantum Computing Systems": "Protect superconducting qubits and quantum circuits from environmental RF noise.",
//   "Quantum Transport Measurements": "Enable high-fidelity measurements of nanoscale devices and mesoscopic structures.",
//   "Cryogenic Electronics Testing": "Improve signal purity for characterization of cryogenic amplifiers and sensors.",
//   "Nanoelectronics Research": "Essential for experiments with semiconductor nanostructures and advanced quantum materials.",
//   "Cryogenic Signal Conditioning": "Provides essential line filtering in cryostats, dilution refrigerators, and probe stations."
// };

// export default function CryoCleanFiltersPage() {
//   const product = productsData["cryo-clean"];
//   const [activeSection, setActiveSection] = useState("overview");
//   const [openAccordion, setOpenAccordion] = useState<string | null>("Filter Performance");
//   const [currentImage, setCurrentImage] = useState(0);
  
//   // Refs
//   const overviewRef = useRef<HTMLDivElement>(null);
//   const featuresRef = useRef<HTMLDivElement>(null);
//   const techRef = useRef<HTMLDivElement>(null);
//   const specsRef = useRef<HTMLDivElement>(null);
//   const appsRef = useRef<HTMLDivElement>(null);

//   // Scroll spy
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

//   // Auto-carousel
//   const heroImages = product?.gallery || [];
//   useEffect(() => {
//     if (heroImages.length <= 1) return;
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [heroImages]);

//   const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
//   };

//   if (!product) return <div className="min-h-screen bg-background"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
//         <Navbar />

//         {/* 01. HERO SECTION */}
//         <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
//           <motion.div 
//             animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }} 
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" 
//           />
//           <motion.div 
//             animate={{ x: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }} 
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" 
//           />
//           <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[550px]">
//             <div className="lg:col-span-7 flex flex-col justify-center">
//               {product.statusBadge && (
//                 <motion.div 
//                   initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
//                   className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-4 bg-primary/10 shadow-[0_0_15px_rgba(255,0,0,0.2)]"
//                 >
//                   {product.statusBadge}
//                 </motion.div>
//               )}
//               <motion.h1 
//                 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
//                 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
//               >
//                 {product.hero.title}
//               </motion.h1>
//               <motion.p 
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
//                 className="text-lg text-cyan-400 font-bold mb-4 max-w-2xl leading-relaxed"
//               >
//                 {product.hero.subtitle}
//               </motion.p>
//               <motion.p 
//                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
//                 className="text-sm text-slate-300 font-medium mb-8 max-w-2xl leading-relaxed"
//               >
//                 {product.hero.description}
//               </motion.p>
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <button className="px-6 py-3.5 rounded bg-primary text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:bg-red-600 transition-all transform hover:-translate-y-1">
//                   Request Technical Proposal
//                 </button>
//                 <button className="px-6 py-3.5 rounded bg-slate-800/80 border border-slate-700 text-white font-bold text-sm tracking-wide hover:border-primary hover:bg-slate-800 transition-all transform hover:-translate-y-1 flex items-center gap-2">
//                   <Download className="w-4 h-4 text-primary" /> Download Datasheet
//                 </button>
//               </motion.div>
//             </div>

//             {/* Carousel */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
//               className="lg:col-span-5 flex justify-center w-full"
//             >
//               {/* <div className="w-full max-w-[550px] aspect-square rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">               */}
//               {/* REMOVED aspect-square, added h-auto to allow the box to scale to the filter picture dimensions naturally */}
//               <div className="w-full max-w-[550px] h-auto rounded-[2rem] bg-gradient-to-br from-[#0F294D] to-[#0A1B35] border border-slate-700 p-2 shadow-2xl relative overflow-hidden group">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentImage}
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="w-full h-full relative rounded-[1.5rem] overflow-hidden bg-slate-900 flex items-center justify-center"
//                   >
//                     {heroImages.length > 0 && heroImages[currentImage] ? (
//                       <>
//                         {/* <img src={heroImages[currentImage].url} alt={heroImages[currentImage].caption} className="w-full h-full object-cover opacity-85 mix-blend-screen" /> */}
//                         {/* Changed h-full to h-auto and object-cover to object-contain so the full PCB unit is rendered without any crop */}
//                         <img src={heroImages[currentImage].url} alt={heroImages[currentImage].caption} className="w-full h-auto object-contain opacity-85 mix-blend-screen p-4 pb-20" />
//                         <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
//                            <p className="text-sm font-bold text-white uppercase tracking-wider">{heroImages[currentImage].caption}</p>
//                         </div>
//                       </>
//                     ) : (
//                       <Camera className="w-16 h-16 text-slate-700" />
//                     )}
//                   </motion.div>
//                 </AnimatePresence>
//                 {heroImages.length > 1 && (
//                   <div className="absolute top-6 right-6 flex gap-2 z-20">
//                     {heroImages.map((_: any, idx: number) => (
//                       <button 
//                         key={idx} 
//                         onClick={() => setCurrentImage(idx)}
//                         className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImage ? 'w-6 bg-primary shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'w-2 bg-slate-500 hover:bg-slate-300'}`} 
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* 01a. QUICK SPECS */}
//         <div className="relative z-30 -mt-8 container max-w-5xl">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
//             className="bg-[#0A2647] rounded-xl border border-blue-900/50 p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {product.quickSpecs.map((spec: any, i: number) => (
//               <div key={i} className="text-center border-r last:border-none border-blue-800/50 px-2 group">
//                 <p className="text-2xl font-display font-extrabold text-white group-hover:text-primary transition-colors">{spec.value}</p>
//                 <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mt-1">{spec.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* 01b. STICKY NAV */}
//         <div className="sticky top-[var(--nav-height)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
//           <div className="container py-2 flex items-center justify-between">
//             <div className="flex-1" />
//             <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
//               {[
//                 { id: "overview", label: "Overview", ref: overviewRef },
//                 { id: "features", label: "Features", ref: featuresRef },
//                 { id: "technology", label: "Technology", ref: techRef },
//                 { id: "specifications", label: "Specifications", ref: specsRef },
//                 { id: "applications", label: "Applications", ref: appsRef }
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => scrollToRef(tab.ref)}
//                   className={`px-4 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all duration-300 ${activeSection === tab.id ? "bg-[#0A2647] text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//             <div className="flex-1 flex justify-end">
//               <button className="hidden sm:block px-4 py-2 bg-primary hover:bg-red-600 text-white font-bold text-[11px] tracking-wider rounded transition-colors shadow-sm transform hover:-translate-y-0.5">
//                 REQUEST PROPOSAL
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 02. OVERVIEW – Split layout (Title+Paragraphs left, Advantages right) */}
//         <section ref={overviewRef} className="py-16 bg-white border-b border-border">
//           <div className="container max-w-6xl">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               {/* Left */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">System Profile</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-4">
//                   {product.overview.title}
//                 </h2>
//                 <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
//                   {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
//                 </div>
//               </motion.div>

//               {/* Right – Advantages as checkmark list */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="bg-slate-50 border border-border rounded-2xl p-8 shadow-sm"
//               >
//                 <h3 className="text-sm font-bold text-[#0A2647] uppercase tracking-widest mb-6 border-b border-border pb-4">
//                   Why Cryogenic Filtering Matters
//                 </h3>
//                 <ul className="space-y-4">
//                   {product.overview.advantages.map((adv: string, i: number) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
//                       <span className="text-sm font-bold text-slate-800">{adv}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* 03. KEY FEATURES (unchanged) */}
//         <section ref={featuresRef} className="py-16 bg-slate-50/30 border-b border-border">
//           <div className="container">
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">High-Fidelity Engineering</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {product.keyFeatures.map((feat: any, i: number) => {
//                 const Icon = iconMap[feat.icon] || CheckCircle2;
//                 return (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
//                     key={i} 
//                     className="group relative bg-white border border-border p-8 rounded-xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//                   >
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//                     <div className="w-12 h-12 rounded bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
//                       <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
//                     </div>
//                     <h3 className="text-xl font-bold text-[#0A2647] mb-2">{feat.title}</h3>
//                     <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">{feat.desc}</p>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* 04. CORE TECHNOLOGIES – New professional card layout (no dashboard) */}
//         <section ref={techRef} className="py-16 bg-white border-b border-border">
//           <div className="container max-w-6xl">
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Technical Deep‑Dive</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
//               <p className="text-slate-600 font-medium mt-4">Engineered for ultra‑low‑noise cryogenic signal conditioning.</p>
//             </div>

//             {/* Two‑column layout for the two tech items */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {product.coreTechnologies.map((tech: any, i: number) => {
//                 const Icon = tech.type === 'hardware' ? Waves : tech.type === 'software' ? Code : Lock;
//                 return (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: i * 0.1 }}
//                     className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col h-full"
//                   >
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="p-2 bg-primary/10 rounded-lg text-primary">
//                         <Icon className="w-6 h-6" />
//                       </div>
//                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{tech.subtitle}</span>
//                     </div>
//                     <h3 className="text-xl font-extrabold text-[#0A2647] mb-3">{tech.title}</h3>
//                     <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 flex-1">{tech.description}</p>
//                     <ul className="space-y-3 flex-1">
//                       {tech.bullets.map((b: string, idx: number) => (
//                         <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800">
//                           <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
//                           <span>{b}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     {/* Extra UI for highlights or platforms */}
//                     {tech.type === 'hardware' && tech.highlights && (
//                       <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-3">
//                         {tech.highlights.map((h: any, idx: number) => (
//                           <div key={idx} className="bg-slate-50 p-3 rounded-lg text-center">
//                             <p className="text-[10px] font-bold text-slate-400 uppercase">{h.label}</p>
//                             <p className="text-sm font-extrabold text-primary">{h.val}</p>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                     {tech.type === 'software' && (
//                       <div className="mt-6 pt-6 border-t border-border">
//                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Supported Systems</p>
//                         <div className="flex flex-wrap gap-2">
//                           {tech.platforms.map((p: string, idx: number) => (
//                             <span key={idx} className="px-3 py-1 bg-[#0A2647] text-white rounded text-xs font-bold">{p}</span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* 05. TECHNICAL SPECIFICATIONS (unchanged) */}
//         <section ref={specsRef} className="py-16 bg-slate-50/50 border-b border-border">
//           <div className="container max-w-4xl">
//             <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
//               <div>
//                 <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Data Sheet</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
//               </div>
//               <div className="flex gap-2">
//                 <button 
//                   onClick={() => setOpenAccordion("all")} 
//                   className="px-4 py-1.5 bg-white border border-border text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
//                 >
//                   Expand All
//                 </button>
//                 <button 
//                   onClick={() => setOpenAccordion(null)} 
//                   className="px-4 py-1.5 bg-white border border-border text-slate-700 font-bold text-[11px] uppercase tracking-wider rounded hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
//                 >
//                   Collapse
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-3">
//               {Object.entries(product.specifications).map(([category, items]: [string, any]) => {
//                 const isOpen = openAccordion === "all" || openAccordion === category;
//                 return (
//                   <div key={category} className="border border-border rounded-xl overflow-hidden shadow-sm bg-white">
//                     <button
//                       onClick={() => setOpenAccordion(isOpen ? null : category)}
//                       className="w-full px-6 py-4 bg-white flex items-center justify-between border-b border-border hover:bg-slate-50 transition-colors"
//                     >
//                       <span className="font-display font-bold text-sm text-[#0A2647] uppercase tracking-wide">{category}</span>
//                       {isOpen ? <ChevronDown className="w-4 h-4 text-primary" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
//                     </button>
//                     <AnimatePresence>
//                       {isOpen && (
//                         <motion.div
//                           initial={{ height: 0 }}
//                           animate={{ height: "auto" }}
//                           exit={{ height: 0 }}
//                           className="overflow-hidden bg-slate-50/50"
//                         >
//                           <div className="px-6 py-2 divide-y divide-border/50">
//                             {items.map((row: any, idx: number) => (
//                               <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 py-3 gap-1 hover:bg-blue-50/50 px-3 rounded transition-colors group">
//                                 <span className="text-xs font-bold text-slate-500 uppercase tracking-wide group-hover:text-primary transition-colors">{row.param}</span>
//                                 <span className="text-sm font-bold text-slate-900">{row.spec}</span>
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
//         </section>

//         {/* 06. APPLICATIONS – Static grid of cards with descriptions */}
//         <section ref={appsRef} className="py-16 bg-white border-b border-border">
//           <div className="container max-w-6xl">
//             <div className="text-center max-w-3xl mx-auto mb-12">
//               <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">Deployment Scenarios</span>
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {product.applications.map((app: string, i: number) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.05 }}
//                   className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-default flex flex-col"
//                 >
//                   <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
//                     <Target className="w-5 h-5" />
//                   </div>
//                   <h3 className="text-base font-extrabold text-[#0A2647] mb-2">{app}</h3>
//                   <p className="text-sm text-slate-600 leading-relaxed flex-1">
//                     {appDescriptions[app] || "Precision filtering for advanced research applications."}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* GALLERY (optional, if present) */}
//         {product.gallery && product.gallery.length > 0 && (
//           <section className="py-16 bg-slate-50/50 border-b border-border">
//             <div className="container max-w-6xl">
//               <div className="text-center max-w-3xl mx-auto mb-12">
//                 <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">System Imagery</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {product.gallery.map((img: any, i: number) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.05 }}
//                     className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//                   >
//                     {/* <div className="aspect-video w-full bg-slate-100 overflow-hidden relative">
//                       <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                     </div> */}
//                     {/* Changed aspect-video to a cleaner, looser aspect ratio or container sizing to fit the filter blueprints, using object-contain */}
// <div className="w-full h-48 bg-white flex items-center justify-center overflow-hidden relative p-4">
//   <img 
//     src={img.url} 
//     alt={img.caption} 
//     className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
//   />
// </div>
//                     <div className="p-4 bg-white border-t border-border/40">
//                       <p className="text-xs font-bold text-slate-700">{img.caption}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* GLOBAL CTA */}
//         <CTASection />

//         {/* BOTTOM NAV */}
//         <section className="bg-white py-10 border-t border-border">
//           <div className="container max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
//             <Link to="/" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
//               <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
//               <span className="text-xs font-bold tracking-widest uppercase">Back to Homepage</span>
//             </Link>
//             <Link to="/products" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#0A2647] text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
//               <span className="text-xs font-bold tracking-widest uppercase">Return to Catalogue</span>
//               <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
//             </Link>
//           </div>
//         </section>

//         <ScrollToTop />
//         <Footer />
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
  Activity, Zap, Shield, Camera, Cpu, Target, Settings,
  Waves, Layers, Network, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/AuthModal";

// Icon mapping
const iconMap: Record<string, any> = { Shield, Activity, Waves, Target, Cpu, Settings, Layers, Network, Lock, ShieldAlert, Code, Zap };

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

// ── Application descriptions (static, for clean card layout) ──
const appDescriptions: Record<string, string> = {
  "Quantum Computing Systems": "Protect superconducting qubits and quantum circuits from environmental RF noise.",
  "Quantum Transport Measurements": "Enable high-fidelity measurements of nanoscale devices and mesoscopic structures.",
  "Cryogenic Electronics Testing": "Improve signal purity for characterization of cryogenic amplifiers and sensors.",
  "Nanoelectronics Research": "Essential for experiments with semiconductor nanostructures and advanced quantum materials.",
  "Cryogenic Signal Conditioning": "Provides essential line filtering in cryostats, dilution refrigerators, and probe stations."
};

export default function CryoCleanFiltersPage() {
  const product = productsData["cryo-clean"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Filter Performance");
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
  
  // Refs
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);

  // Scroll spy
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

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
        <Navbar />

        {/* 01. HERO SECTION */}
        <section className="relative pt-5 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <motion.div 
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" 
          />
          <motion.div 
            animate={{ x: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" 
          />
          <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[550px]">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {product.statusBadge && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="w-fit px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-4 bg-primary/10 shadow-[0_0_15px_rgba(255,0,0,0.2)]"
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
                  <Download className="w-5 h-5 text-primary" /> Download Datasheet
                </button>
              </motion.div>
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

        {/* 01a. QUICK SPECS */}
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

        {/* 01b. STICKY NAV */}
        <div className="sticky top-[var(--nav-height)] z-40 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm mt-12">
          <div className="container py-2 flex items-center justify-between">
            <div className="flex-1" />
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
              <Link to="/request-quote/research" className="hidden sm:inline-block text-center px-4 py-2 bg-primary hover:bg-red-600 text-white font-bold text-xs tracking-wider rounded transition-colors shadow-sm transform hover:-translate-y-0.5 uppercase">
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* 02. OVERVIEW – Split layout (Title+Paragraphs left, Advantages right) */}
        <section ref={overviewRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">System Profile</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647] mb-4">
                  {product.overview.title}
                </h2>
                <div className="space-y-4 text-base text-slate-600 font-medium leading-relaxed">
                  {product.overview.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              </motion.div>

              {/* Right – Advantages as checkmark list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-50 border border-border rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-base font-bold text-[#0A2647] uppercase tracking-widest mb-6 border-b border-border pb-4">
                  Why Cryogenic Filtering Matters
                </h3>
                <ul className="space-y-4">
                  {product.overview.advantages.map((adv: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-base font-bold text-slate-800">{adv}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 03. KEY FEATURES */}
        <section ref={featuresRef} className="py-16 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">High-Fidelity Engineering</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.keyFeatures.map((feat: any, i: number) => {
                const Icon = iconMap[feat.icon] || CheckCircle2;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    key={i} 
                    className="group relative bg-white border border-border p-8 rounded-xl shadow-sm hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="w-14 h-14 rounded bg-slate-50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
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
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Technical Deep‑Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
              <p className="text-base text-slate-600 font-medium mt-4">Engineered for ultra‑low‑noise cryogenic signal conditioning.</p>
            </div>

            {/* Two‑column layout for the tech items */}
            <div className="grid md:grid-cols-2 gap-8">
              {product.coreTechnologies.map((tech: any, i: number) => {
                const Icon = tech.type === 'hardware' ? Waves : tech.type === 'software' ? Code : Lock;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tech.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0A2647] mb-3">{tech.title}</h3>
                    <p className="text-base text-slate-600 font-medium leading-relaxed mb-6 flex-1">{tech.description}</p>
                    <ul className="space-y-3 flex-1">
                      {tech.bullets.map((b: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Extra UI for highlights or platforms */}
                    {tech.type === 'hardware' && tech.highlights && (
                      <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-3">
                        {tech.highlights.map((h: any, idx: number) => (
                          <div key={idx} className="bg-slate-50 p-4 rounded-lg text-center">
                            <p className="text-xs font-bold text-slate-400 uppercase">{h.label}</p>
                            <p className="text-base font-extrabold text-primary">{h.val}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {tech.type === 'software' && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Supported Systems</p>
                        <div className="flex flex-wrap gap-2">
                          {tech.platforms.map((p: string, idx: number) => (
                            <span key={idx} className="px-4 py-2 bg-[#0A2647] text-white rounded-lg text-sm font-bold">{p}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05. TECHNICAL SPECIFICATIONS */}
        <section ref={specsRef} className="py-16 bg-slate-50/50 border-b border-border">
          <div className="container max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Data Sheet</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Technical Specifications</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setOpenAccordion("all")} 
                  className="px-4 py-2 bg-white border border-border text-slate-700 font-bold text-xs uppercase tracking-wider rounded hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  Expand All
                </button>
                <button 
                  onClick={() => setOpenAccordion(null)} 
                  className="px-4 py-2 bg-white border border-border text-slate-700 font-bold text-xs uppercase tracking-wider rounded hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  Collapse
                </button>
              </div>
            </div>

            <div className="space-y-3">
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
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
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

        {/* 06. APPLICATIONS */}
        <section ref={appsRef} className="py-16 bg-white border-b border-border">
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Deployment Scenarios</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Scientific & Industrial Applications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((app: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 group cursor-default flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0A2647] mb-2">{app}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed flex-1">
                    {appDescriptions[app] || "Precision filtering for advanced research applications."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. GALLERY */}
        {product.gallery && product.gallery.length > 0 && (
          <section className="py-16 bg-slate-50/50 border-b border-border">
            <div className="container max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">System Imagery</span>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Visual Reference</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.gallery.map((img: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-full h-56 bg-white flex items-center justify-center overflow-hidden relative p-4">
                      <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-5 bg-white border-t border-border/40">
                      <p className="text-sm font-bold text-slate-700">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* GLOBAL CTA */}
        <CTASection />

        {/* BOTTOM NAV */}
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