// import { forwardRef, useState, useRef, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   CheckCircle2,
//   Cpu,
//   Snowflake,
//   Magnet,
//   Microscope,
//   Zap,
//   Layers,
//   Activity,
//   Camera,
//   Settings,
//   Database,
//   Beaker,
//   Factory,
//   Waves,
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// // ==========================================
// // 1. DATA FROM BROCHURES (RESEARCH / PRODUCTS)
// // ==========================================
// const productCatalog = [
//   {
//     id: "quantum-volt",
//     category: "Quantum Hardware",
//     icon: Cpu,
//     title: "QuantumVolt™",
//     subtitle: "Precision Isolated Voltage Source",
//     description:
//       "Ultra-low-noise gate and bias control delivering stable, precise control through fully isolated bipolar outputs for quantum experiments.",
//     features: [
//       "Four Isolated Bipolar Outputs",
//       "16-Bit DAC Resolution",
//       "Native LabVIEW & Python support",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "cryo-clean",
//     category: "Quantum Hardware",
//     icon: Activity,
//     title: "CryoClean™",
//     subtitle: "Cryogenic RF Low-Pass Filters",
//     description:
//       "Engineered to suppress high-frequency EMI before it reaches sensitive quantum devices. Ensures clean measurements down to 2K.",
//     features: [
//       "~65 kHz-GHz noise suppression",
//       "High Out-of-Band Attenuation",
//       "4K/1K/Mixing chamber compatible",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "breakout-box",
//     category: "Quantum Hardware",
//     icon: Layers,
//     title: "Cryogenic Breakout Box",
//     subtitle: "Shielded Signal Integrity",
//     description:
//       "High-performance, fully shielded breakout solution extending your cryostat's Faraday cage for clean multi-channel measurements.",
//     features: [
//       "24 independent, shielded channels",
//       "Integrated low-pass filters",
//       "Twisted-pair EMI suppression",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "nano-stage",
//     category: "Cryogenics",
//     icon: Snowflake,
//     title: "Cryogenic NanoStage",
//     subtitle: "Vitrified Cryogenic Microscopy",
//     description:
//       "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM, cryo-fluorescence, and super-resolution imaging.",
//     features: [
//       "Operating below -195°C (LN2)",
//       "Motorised XY nano-positioning",
//       "Devitrification prevention",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "2d-transfer-system",
//     category: "Cryogenics",
//     icon: Layers,
//     title: "2D Transfer System",
//     subtitle: "Deterministic Heterostructure Stacking",
//     description:
//       "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene and hBN.",
//     features: [
//       "Sub-Micron XYZ & Theta",
//       "Programmable Thermal Chuck",
//       "Long-WD Optical Microscope",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "psm-100",
//     category: "Cryogenics",
//     icon: Microscope,
//     title: "100 PSM Probe Station",
//     subtitle: "Wafer-Level Characterization",
//     description:
//       "Cost-effective, manual wafer probe station built for reliable sub-micron electrical probing of nanoelectronic devices.",
//     features: [
//       "Supports up to 100 mm wafers",
//       "Up to 6 micro-positioners",
//       "I-V and C-V device characterization",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "dipstick",
//     category: "Cryogenics",
//     icon: Snowflake,
//     title: "Cryogenic Dip Stick",
//     subtitle: "Precision Cryogenic Sample Control",
//     description:
//       "A high-performance liquid nitrogen (LN2)-cooled probe station insert engineered for precision electrical, materials, and device characterization down to 77K.",
//     features: [
//       "Operating range ~77 K to 325 K+",
//       "OFHC copper cold stage",
//       "Vacuum-compatible construction",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "cryoscope-controller",
//     category: "Microscopes",
//     icon: Microscope,
//     title: "CryoScope™ Hub",
//     subtitle: "Advanced Motorised Motion Controller",
//     description:
//       "Deterministic sub-micron positioning for cryogenic microscopes, enabling complex CLEM workflows, stacking, and perfect twist-angle control.",
//     features: [
//       "< 50nm Resolution",
//       "Sub-Micron Relocation",
//       "Twist-Angle Control",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1579316168884-60c70edc260f?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "ultraclear-4k",
//     category: "Microscopes",
//     icon: Camera,
//     title: "UltraClear 4K Smart Microscope",
//     subtitle: "Precision Imaging Meets Intelligent Automation",
//     description:
//       "Apochromatic optics combined with a 4K ultra-HD Sony sensor and integrated AI-assisted measurement for advanced research and industrial inspection.",
//     features: ["10:1 Intelligent Zoom", "4K @ 60fps Zero-Latency", "AI Edge Detection"],
//     image: "/images/ultraclear-hero.png",
//   },
//   {
//     id: "2d-transfer-motorised",
//     category: "Microscopes",
//     icon: Layers,
//     title: "2D Material Transfer System",
//     subtitle: "Motorised Controller with Sub-micron Resolution",
//     description:
//       "Fully motorised XY, Z, R, T stages with integrated high-resolution imaging for precise deterministic placement of graphene, TMDCs, and van der Waals heterostructures.",
//     features: [
//       "Sub-micron XY Resolution",
//       "±5° Motorised Tilt",
//       "Automated Flake Mapping Option",
//     ],
//     image: "/images/2d-transfer-hero.png",
//   },
//   {
//     id: "spectroscopy-magnet",
//     category: "Electromagnets",
//     icon: Magnet,
//     title: "Spectroscopy Electromagnet",
//     subtitle: "Precision Dipole Architecture for Optical Integration",
//     description:
//       "Ultra-compact and lightweight dipole electromagnet delivering exceptional magnetic field strength, ideal for spectroscopy and optical research applications.",
//     features: [
//       "Low-profile coil geometry",
//       "Patent-pending closed-loop cooling",
//       "High field stability with low noise",
//     ],
//     image: "/images/spectroscopy-electromagnet.png",
//   },
//   {
//     id: "bitter-magnet",
//     category: "Electromagnets",
//     icon: Zap,
//     title: "Bitter Type Electromagnet",
//     subtitle: "High-Field Air-Core DC Magnet",
//     description:
//       "Engineered with stacked copper plates forming a helical current path to achieve exceptionally high current density and continuous operation up to 1.1 Tesla.",
//     features: [
//       "Stacked Copper Plates",
//       "De-ionized Water Cooling",
//       "Up to 1000A Operating Current",
//     ],
//     image: "/images/bitter-magnet-hero.png",
//   },
//   {
//     id: "emc2t-2-magnet",
//     category: "Electromagnets",
//     icon: Magnet,
//     title: "EMC2T- 2 Tesla Electromagnet",
//     subtitle: "Advanced Variable Gap C-Frame Dipole",
//     description:
//       "Compact 2 Tesla variable-gap C-frame dipole electromagnet engineered for laboratory-scale magnetic field experiments, featuring water-cooled coils for continuous operation.",
//     features: [
//       "Up to 2 Tesla Field Strength",
//       "0–50 mm Variable Pole Gap",
//       "Water-Cooled Copper Coils",
//     ],
//     image: "/images/emc2t-hero.png",
//   },
// ];

// const researchCategories = ["All Systems", "Quantum Hardware", "Cryogenics", "Microscopes", "Electromagnets"];

// // ==========================================
// // 1.5 DATA FOR INDUSTRY / SERVICES
// // ==========================================
// const servicesCatalog = [
//   {
//     id: "ac-dc-system-low",
//     category: "Converters",
//     icon: Zap,
//     title: "AC-DC System (Low Power)",
//     subtitle: "0.3kW - 6kW Power Conversion",
//     description:
//       "High-efficiency AC to DC power conversion modules designed for stable, continuous industrial delivery with integrated thermal management.",
//     features: ["0.3kW to 6kW Output", "High-efficiency Topology", "Industrial Grade Housing"],
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: "ac-dc-system-high",
//     category: "Converters",
//     icon: Zap,
//     title: "AC-DC System (High Power)",
//     subtitle: "6 kW - 30 kW Scalable Solutions",
//     description:
//       "Rugged, parallel-redundant AC-DC power systems delivering master-synchronized high current for heavy industrial, defense, and data center loads.",
//     features: ["Up to 30 kW Chassis", "Industrial 3-Phase Input", "N+1 Modular Redundancy"],
//     image: "/images/ac-dc-high-hero.png",
//   },
//   {
//     id: "dc-dc-system-low",
//     category: "Converters",
//     icon: Zap,
//     title: "DC-DC Converter (Low Power)",
//     subtitle: "Up to 5 kW Compact Solutions",
//     description:
//       "Space-optimized, high-efficiency DC-DC systems engineered for precise regulation in critical embedded instrumentation and telecom hubs.",
//     features: ["<5kW Output", "Compact Bento Density", "±0.1% Stability"],
//     image: "/images/dc-dc-low-hero.png",
//   },
//   {
//     id: "dc-dc-system-high",
//     category: "Converters",
//     icon: Zap,
//     title: "DC-DC Converter (High Power)",
//     subtitle: "6 kW – 30 kW Solutions",
//     description:
//       "Rugged, N+1 redundant DC-DC systems for severe industrial and defense loads, featuring master-orchestrated load sharing.",
//     features: ["30kW Chassis Density", "N+1 Redundancy", "MIL-STD Validated"],
//     image: "/images/dc-dc-high-hero.png",
//   },
//   {
//     id: "dc-ac-inverters",
//     category: "Inverters",
//     icon: Waves,
//     title: "DC-AC Pure Sine Wave Inverters",
//     subtitle: "Up to 10 kW Conversion",
//     description:
//       "Convert DC power into high-quality, grid-grade AC output with minimal distortion for sensitive mission-critical electronics.",
//     features: ["Pure Sine Wave", "Low EMI Design", "Up to 10 kW"],
//     image: "/images/dc-ac-inverter-hero.png",
//   },
//   {
//     id: "inverter-400hz-rugged",
//     category: "Inverters",
//     icon: Activity,
//     title: "400Hz Frequency Inverters",
//     subtitle: "Precision AC Power for Aerospace",
//     description:
//       "Deliver crystal-controlled AC power with exceptional frequency accuracy and waveform purity for aerospace, defense, and testing applications.",
//     features: ["400Hz Pure Sine Wave", "MIL-STD Validated", "Low EMI Design"],
//     image: "/images/400hz-inverter-hero.png",
//   },
// ];

// const industryCategories = ["All Solutions", "Converters", "Inverters", "Battery Chargers"];

// // ==========================================
// // 2. PROFESSIONAL PRODUCT CARD (No 3D Tilt)
// // ==========================================
// const InteractiveProductCard = forwardRef<HTMLDivElement, { product: any }>(
//   ({ product, ...props }, ref) => {
//     const Icon = product.icon;

//     return (
//       <motion.div
//         ref={ref}
//         layout
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         transition={{ duration: 0.5, type: "spring" }}
//         className="h-full z-10 hover:z-20 relative"
//         {...props}
//       >
//         <div className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:border-primary/50">
//           {/* Image container – auto height based on image, with a fallback min-height */}
//           <div className="relative w-full bg-slate-100 overflow-hidden min-h-[220px] md:min-h-[260px]">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//             />
//             <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.03)] pointer-events-none" />

//             {/* Category Badge – now red */}
//             <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-extrabold text-primary uppercase tracking-wider shadow-sm flex items-center gap-1.5 group-hover:-translate-y-1 transition-transform duration-500">
//               <Icon className="w-4 h-4 text-primary" /> {product.category}
//             </div>
//           </div>

//           <div className="flex flex-col flex-grow p-6 md:p-8">
//             <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors duration-300">
//               {product.subtitle}
//             </p>
//             <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
//               {product.title}
//             </h3>
//             <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-grow group-hover:text-slate-800 transition-colors duration-300">
//               {product.description}
//             </p>
//             <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-primary/20 transition-colors duration-500" />
//             <ul className="space-y-3 mb-8">
//               {product.features.map((feature: string, i: number) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-2.5 text-sm text-slate-700 group-hover:translate-x-1 transition-transform duration-500"
//                   style={{ transitionDelay: `${i * 40}ms` }}
//                 >
//                   <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
//                   <span className="font-semibold group-hover:text-slate-900 transition-colors duration-300">
//                     {feature}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <Link to={`/products/${product.id}`} className="mt-auto block">
//               <button className="relative w-full py-4 rounded-xl font-bold overflow-hidden border-2 border-slate-200 bg-white text-slate-700 shadow-sm group/btn transition-all duration-300 hover:border-primary hover:shadow-md">
//                 <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
//                 <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
//                   View Specifications
//                   <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
//                 </span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     );
//   }
// );
// InteractiveProductCard.displayName = "InteractiveProductCard";

// // ==========================================
// // 3. FULL WIDTH AUTONOMOUS CAROUSEL WITH VIDEO BACKGROUNDS
// // ==========================================
// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: "brand",
//       label: "CRYONANO LABS",
//       title: "CRYONANO",
//       subtitle: "Engineering the Future of Quantum & Cryogenic Technology",
//       description:
//         "We design and manufacture the mission-critical hardware that modern science depends on—from isolated quantum voltage sources to high-field electromagnets and advanced power electronics.",
//       icon: Database,
//       videoUrl:
//         "https://cdn.pixabay.com/video/2020/07/31/46074-445474431_large.mp4",
//     },
//     {
//       id: "discover",
//       label: "LIVE INVENTORY",
//       title: "Discover the Catalog",
//       subtitle: "Explore our complete range of precision instruments.",
//       description:
//         "Navigate through our highly engineered product lines. Every system is built to uncompromising standards to support the most demanding research and industrial environments.",
//       icon: Settings,
//       videoUrl:
//         "https://cdn.pixabay.com/video/2023/03/26/156170-811776510_large.mp4",
//     },
//     {
//       id: "interface",
//       label: "SEAMLESS NAVIGATION",
//       title: "Explore the Interface",
//       subtitle: "Research-Grade Hardware & Industrial Solutions",
//       description:
//         "Below you will find our comprehensive catalog divided into logical segments. Use the interactive buttons to seamlessly switch between our core Research products and Industrial Power solutions.",
//       icon: Layers,
//       videoUrl:
//         "https://cdn.pixabay.com/video/2020/11/11/56885-481358989_large.mp4",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-slate-200 bg-white">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
//             src={slides[currentSlide].videoUrl}
//           />
//           <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

//           <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
//             <motion.div
//               initial={{ y: 15, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <div className="w-full flex justify-center mb-6">
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-slate-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
//                   {(() => {
//                     const Icon = slides[currentSlide].icon;
//                     return <Icon className="w-4 h-4 text-primary" />;
//                   })()}
//                   {slides[currentSlide].label}
//                 </div>
//               </div>

//               {slides[currentSlide].id === "brand" ? (
//                 <div className="w-full flex justify-center mb-6">
//                   <div className="flex flex-col items-start">
//                     <div className="flex gap-2 mb-1.5 ml-1">
//                       <motion.div
//                         animate={{ opacity: [0.3, 1, 0.3] }}
//                         transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
//                         className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary"
//                       />
//                       <motion.div
//                         animate={{ opacity: [0.3, 1, 0.3] }}
//                         transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
//                         className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary"
//                       />
//                       <motion.div
//                         animate={{ opacity: [0.3, 1, 0.3] }}
//                         transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
//                         className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary"
//                       />
//                     </div>
//                     <h1 className="font-sans text-6xl md:text-7xl lg:text-[5rem] font-black text-slate-900 leading-none tracking-[0.15em] uppercase">
//                       {slides[currentSlide].title}
//                     </h1>
//                   </div>
//                 </div>
//               ) : (
//                 <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
//                   {slides[currentSlide].title}
//                 </h1>
//               )}

//               <h2 className="text-xl md:text-2xl text-primary font-extrabold mb-5">
//                 {slides[currentSlide].subtitle}
//               </h2>
//               <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
//                 {slides[currentSlide].description}
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`h-2.5 rounded-full transition-all duration-500 ${
//               currentSlide === i
//                 ? "w-10 bg-primary"
//                 : "w-2.5 bg-slate-300 hover:bg-slate-400"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 4. MAIN PRODUCTS PAGE
// // ==========================================
// const Products = () => {
//   const location = useLocation();

//   const initialFilter = location.state?.filter || "RESEARCH";
//   const initialCategory = location.state?.category || "All Systems";

//   const [primaryFilter, setPrimaryFilter] = useState<"RESEARCH" | "INDUSTRY">(
//     initialFilter
//   );
//   const [activeCategory, setActiveCategory] = useState(initialCategory);

//   useEffect(() => {
//     if (location.state?.filter) setPrimaryFilter(location.state.filter);
//     if (location.state?.category) setActiveCategory(location.state.category);
//   }, [location.state]);

//   const isResearch = primaryFilter === "RESEARCH";
//   const currentCategories = isResearch ? researchCategories : industryCategories;
//   const currentCatalog = isResearch ? productCatalog : servicesCatalog;

//   const filteredProducts =
//     activeCategory === "All Systems" || activeCategory === "All Solutions"
//       ? currentCatalog
//       : currentCatalog.filter((p) => p.category === activeCategory);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//         <Navbar />

//         <main>
//           <div className="bg-white border-b border-slate-200">
//             <div className="container py-2.5">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors w-fit"
//               >
//                 <ArrowLeft className="h-4 w-4" /> Back to Home
//               </Link>
//             </div>
//           </div>

//           <HeroCarousel />

//           <section className="pt-8 pb-6 bg-white border-b border-slate-200 relative overflow-hidden">
//             <div className="container max-w-4xl mx-auto text-center relative z-10">
//               <span className="text-primary font-extrabold tracking-widest uppercase text-xs mb-2 block">
//                 Catalog Interface
//               </span>
//               <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-4">
//                 Precision Hardware Catalog
//               </h2>
//               <p className="text-base text-slate-600 font-medium mb-8">
//                 Select your area of interest below. The{" "}
//                 <strong className="text-slate-900">Research</strong> catalog
//                 features our cryogenic, quantum, and microscopy instruments. The{" "}
//                 <strong className="text-slate-900">Industry</strong> catalog
//                 features our heavy-duty power electronics, converters, and
//                 industrial inverters.
//               </p>

//               <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-slate-100 p-2 rounded-3xl w-fit mx-auto border border-slate-200">
//                 <button
//                   onClick={() => {
//                     setPrimaryFilter("RESEARCH");
//                     setActiveCategory("All Systems");
//                   }}
//                   className={`relative w-48 h-14 rounded-2xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
//                     primaryFilter === "RESEARCH"
//                       ? "text-white shadow-lg shadow-primary/30"
//                       : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
//                   }`}
//                 >
//                   {primaryFilter === "RESEARCH" && (
//                     <motion.div
//                       layoutId="toggleBg"
//                       className="absolute inset-0 bg-primary rounded-2xl z-0"
//                       transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                     />
//                   )}
//                   <Beaker className="w-5 h-5 relative z-10" />
//                   <span className="relative z-10">Research</span>
//                 </button>

//                 <button
//                   onClick={() => {
//                     setPrimaryFilter("INDUSTRY");
//                     setActiveCategory("All Solutions");
//                   }}
//                   className={`relative w-48 h-14 rounded-2xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
//                     primaryFilter === "INDUSTRY"
//                       ? "text-white shadow-lg shadow-primary/30"
//                       : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
//                   }`}
//                 >
//                   {primaryFilter === "INDUSTRY" && (
//                     <motion.div
//                       layoutId="toggleBg"
//                       className="absolute inset-0 bg-primary rounded-2xl z-0"
//                       transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                     />
//                   )}
//                   <Factory className="w-5 h-5 relative z-10" />
//                   <span className="relative z-10">Industry</span>
//                 </button>
//               </div>
//             </div>
//           </section>

//           <div className="sticky top-[var(--nav-height,72px)] z-40 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3">
//             <div className="container">
//               <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center px-4">
//                 <AnimatePresence mode="popLayout">
//                   {currentCategories.map((cat) => {
//                     const isActive = activeCategory === cat;
//                     return (
//                       <motion.button
//                         key={cat}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         transition={{ duration: 0.2 }}
//                         onClick={() => setActiveCategory(cat)}
//                         className={`relative px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 outline-none ${
//                           isActive
//                             ? "text-white shadow-md"
//                             : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
//                         }`}
//                       >
//                         {isActive && (
//                           <motion.div
//                             layoutId="activeFilter"
//                             className="absolute inset-0 bg-primary rounded-full z-0"
//                             transition={{
//                               type: "spring",
//                               stiffness: 300,
//                               damping: 25,
//                             }}
//                           />
//                         )}
//                         <span className="relative z-10">{cat}</span>
//                       </motion.button>
//                     );
//                   })}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           <section className="py-10 lg:py-12 container relative z-10 min-h-[50vh]">
//             <motion.div
//               layout
//               className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
//             >
//               <AnimatePresence mode="popLayout">
//                 {filteredProducts.map((product) => (
//                   <InteractiveProductCard key={product.id} product={product} />
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default Products;




import { forwardRef, useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Snowflake,
  Magnet,
  Microscope,
  Zap,
  Layers,
  Activity,
  Camera,
  Settings,
  Database,
  Beaker,
  Factory,
  Waves,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// ==========================================
// 1. DATA FROM PRODUCTS (RESEARCH / PRODUCTS)
// ==========================================
const productCatalog = [
  {
    id: "quantum-volt",
    category: "Quantum Hardware",
    icon: Cpu,
    title: "QuantumVolt™",
    subtitle: "Precision Isolated Voltage Source",
    description:
      "Ultra-low-noise gate and bias control delivering stable, precise control through fully isolated bipolar outputs for quantum experiments.",
    features: [
      "Four Isolated Bipolar Outputs",
      "16-Bit DAC Resolution",
      "Native LabVIEW & Python support",
    ],
    image: "/images/Quantum Hardware/quantum-volt/image1.png",
  },
  {
    id: "cryo-clean",
    category: "Quantum Hardware",
    icon: Activity,
    title: "CryoClean™",
    subtitle: "Cryogenic RF Low-Pass Filters",
    description:
      "Engineered to suppress high-frequency EMI before it reaches sensitive quantum devices. Ensures clean measurements down to 2K.",
    features: [
      "~65 kHz-GHz noise suppression",
      "High Out-of-Band Attenuation",
      "4K/1K/Mixing chamber compatible",
    ],
    image: "/images/Quantum Hardware/cryo-clean/image1.png",
  },
  {
    id: "breakout-box",
    category: "Quantum Hardware",
    icon: Layers,
    title: "Cryogenic Breakout Box",
    subtitle: "Shielded Signal Integrity",
    description:
      "High-performance, fully shielded breakout solution extending your cryostat's Faraday cage for clean multi-channel measurements.",
    features: [
      "24 independent, shielded channels",
      "Integrated low-pass filters",
      "Twisted-pair EMI suppression",
    ],
    image: "/images/Quantum Hardware/breakout-box/image2.png",
  },
  // ✅ ADDED: DACsys™ under Quantum Hardware
  {
    id: "DAC-system",
    category: "Quantum Hardware",
    icon: Database,
    title: "DACsys™",
    subtitle: "Cryogenic Data Acquisition System",
    description:
      "Modular high-resolution DAQ and control platform for cryogenic experiments, superconducting systems, and precision quantum measurements.",
    features: [
      "Multi-Channel High-Resolution Logging",
      "Low-Noise Analog Front-End",
      "Real-Time Data Export",
    ],
    image: "/images/Quantum Hardware/DAC-system/image1.png",
  },
  {
    id: "nano-stage",
    category: "Cryogenics",
    icon: Snowflake,
    title: "Cryogenic NanoStage",
    subtitle: "Vitrified Cryogenic Microscopy",
    description:
      "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM, cryo-fluorescence, and super-resolution imaging.",
    features: [
      "Operating below -195°C (LN2)",
      "Motorised XY nano-positioning",
      "Devitrification prevention",
    ],
    image: "/images/Cryogenics/nano-stage/image2.png",
  },
  // {
  //   id: "2d-transfer-system",
  //   category: "Cryogenics",
  //   icon: Layers,
  //   title: "2D Transfer System",
  //   subtitle: "Deterministic Heterostructure Stacking",
  //   description:
  //     "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene and hBN.",
  //   features: [
  //     "Sub-Micron XYZ & Theta",
  //     "Programmable Thermal Chuck",
  //     "Long-WD Optical Microscope",
  //   ],
  //   image: "/images/Cryogenics/2d-transfer-system/Automated 2DTS.png",
  // },
  {
    id: "psm-100",
    category: "Cryogenics",
    icon: Microscope,
    title: "100 PSM Probe Station",
    subtitle: "Wafer-Level Characterization",
    description:
      "Cost-effective, manual wafer probe station built for reliable sub-micron electrical probing of nanoelectronic devices.",
    features: [
      "Supports up to 100 mm wafers",
      "Up to 6 micro-positioners",
      "I-V and C-V device characterization",
    ],
    image: "/images/Cryogenics/psm-100/image1.avif",
  },
  {
    id: "dipstick",
    category: "Cryogenics",
    icon: Snowflake,
    title: "Cryogenic Dip Stick",
    subtitle: "Precision Cryogenic Sample Control",
    description:
      "A high-performance liquid nitrogen (LN2)-cooled probe station insert engineered for precision electrical, materials, and device characterization down to 77K.",
    features: [
      "Operating range ~77 K to 325 K+",
      "OFHC copper cold stage",
      "Vacuum-compatible construction",
    ],
    image: "/images/Cryogenics/dipstick/image3.png",
  },
  {
    id: "cryoscope-controller",
    category: "Microscopes",
    icon: Microscope,
    title: "CryoScope™ Hub",
    subtitle: "Advanced Motorised Motion Controller",
    description:
      "Deterministic sub-micron positioning for cryogenic microscopes, enabling complex CLEM workflows, stacking, and perfect twist-angle control.",
    features: [
      "< 50nm Resolution",
      "Sub-Micron Relocation",
      "Twist-Angle Control",
    ],
    image: "/images/Microscopes/cryoscope-controller/image1.png",
  },
  {
    id: "ultraclear-4k",
    category: "Microscopes",
    icon: Camera,
    title: "UltraClear 4K Smart Microscope",
    subtitle: "Precision Imaging Meets Intelligent Automation",
    description:
      "Apochromatic optics combined with a 4K ultra-HD Sony sensor and integrated AI-assisted measurement for advanced research and industrial inspection.",
    features: ["10:1 Intelligent Zoom", "4K @ 60fps Zero-Latency", "AI Edge Detection"],
    image: "/images/Microscopes/ultraclear-4k/image1.png",
  },
  {
    id: "2d-transfer-system",
    category: "Microscopes",
    icon: Layers,
    title: "Manual 2D Transfer System",
    subtitle: "Deterministic Heterostructure Stacking",
    description:
      "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene and hBN.",
    features: [
      "Sub-Micron XYZ & Theta",
      "Programmable Thermal Chuck",
      "Long-WD Optical Microscope",
    ],
    image: "/images/Cryogenics/2d-transfer-system/Automated 2DTS.png",
  },
  {
    id: "2d-transfer-motorised",
    category: "Microscopes",
    icon: Layers,
    title: "Motorised 2D transfer system",
    subtitle: "Motorised Controller with Sub-micron Resolution",
    description:
      "Fully motorised XY, Z, R, T stages with integrated high-resolution imaging for precise deterministic placement of graphene, TMDCs, and van der Waals heterostructures.",
    features: [
      "Sub-micron XY Resolution",
      "±5° Motorised Tilt",
      "Automated Flake Mapping Option",
    ],
    image: "/images/Microscopes/2d-transfer-motorised/image3.png",
  },
  {
    id: "spectroscopy-magnet",
    category: "Electromagnets",
    icon: Magnet,
    title: "Spectroscopy Electromagnet",
    subtitle: "Precision Dipole Architecture for Optical Integration",
    description:
      "Ultra-compact and lightweight dipole electromagnet delivering exceptional magnetic field strength, ideal for spectroscopy and optical research applications.",
    features: [
      "Low-profile coil geometry",
      "Patent-pending closed-loop cooling",
      "High field stability with low noise",
    ],
    image: "/images/Electromagnets/spectroscopy-magnet/image4.avif",
  },
  {
    id: "bitter-magnet",
    category: "Electromagnets",
    icon: Zap,
    title: "Bitter Type Electromagnet",
    subtitle: "High-Field Air-Core DC Magnet",
    description:
      "Engineered with stacked copper plates forming a helical current path to achieve exceptionally high current density and continuous operation up to 1.1 Tesla.",
    features: [
      "Stacked Copper Plates",
      "De-ionized Water Cooling",
      "Up to 1000A Operating Current",
    ],
    image: "/images/Electromagnets/bitter-magnet/image1.png",
  },
  {
    id: "emc2t-2-magnet",
    category: "Electromagnets",
    icon: Magnet,
    title: "EMC2T- 2 Tesla Electromagnet",
    subtitle: "Advanced Variable Gap C-Frame Dipole",
    description:
      "Compact 2 Tesla variable-gap C-frame dipole electromagnet engineered for laboratory-scale magnetic field experiments, featuring water-cooled coils for continuous operation.",
    features: [
      "Up to 2 Tesla Field Strength",
      "0–50 mm Variable Pole Gap",
      "Water-Cooled Copper Coils",
    ],
    image: "/images/Electromagnets/emc2t-2-magnet/image4.avif",
  },
];

const researchCategories = ["All Systems", "Quantum Hardware", "Cryogenics", "Microscopes", "Electromagnets"];

// ==========================================
// 1.5 DATA FOR INDUSTRY / SERVICES
// ==========================================
const servicesCatalog = [
  {
    id: "ac-dc-system-low",
    category: "Converters",
    icon: Zap,
    title: "AC-DC System (Low Power)",
    subtitle: "0.3kW - 6kW Power Conversion",
    description:
      "High-efficiency AC to DC power conversion modules designed for stable, continuous industrial delivery with integrated thermal management.",
    features: ["0.3kW to 6kW Output", "High-efficiency Topology", "Industrial Grade Housing"],
    image: "/images/Power Converters & Inverters/ac-dc-system-low/ACDC1.avif",
  },
  {
    id: "ac-dc-system-high",
    category: "Converters",
    icon: Zap,
    title: "AC-DC System (High Power)",
    subtitle: "6 kW - 30 kW Scalable Solutions",
    description:
      "Rugged, parallel-redundant AC-DC power systems delivering master-synchronized high current for heavy industrial, defense, and data center loads.",
    features: ["Up to 30 kW Chassis", "Industrial 3-Phase Input", "N+1 Modular Redundancy"],
    image: "/images/Power Converters & Inverters/ac-dc-system-high/ACDC1.avif",
  },
  {
    id: "dc-dc-system-low",
    category: "Converters",
    icon: Zap,
    title: "DC-DC Converter (Low Power)",
    subtitle: "Up to 5 kW Compact Solutions",
    description:
      "Space-optimized, high-efficiency DC-DC systems engineered for precise regulation in critical embedded instrumentation and telecom hubs.",
    features: ["<5kW Output", "Compact Bento Density", "±0.1% Stability"],
    image: "/images/Power Converters & Inverters/dc-dc-system-low/DCDC1.avif",
  },
  {
    id: "dc-dc-system-high",
    category: "Converters",
    icon: Zap,
    title: "DC-DC Converter (High Power)",
    subtitle: "6 kW – 30 kW Solutions",
    description:
      "Rugged, N+1 redundant DC-DC systems for severe industrial and defense loads, featuring master-orchestrated load sharing.",
    features: ["30kW Chassis Density", "N+1 Redundancy", "MIL-STD Validated"],
    image: "/images/Power Converters & Inverters/dc-dc-system-high/DCDC1.avif",
  },
  {
    id: "dc-ac-inverters",
    category: "Inverters",
    icon: Waves,
    title: "DC-AC Pure Sine Wave Inverters",
    subtitle: "Up to 10 kW Conversion",
    description:
      "Convert DC power into high-quality, grid-grade AC output with minimal distortion for sensitive mission-critical electronics.",
    features: ["Pure Sine Wave", "Low EMI Design", "Up to 10 kW"],
    image: "/images/Power Converters & Inverters/dc-ac-inverters/DCAC1.avif",
  },
  {
    id: "inverter-400hz-rugged",
    category: "Inverters",
    icon: Activity,
    title: "400Hz Frequency Inverters",
    subtitle: "Precision AC Power for Aerospace",
    description:
      "Deliver crystal-controlled AC power with exceptional frequency accuracy and waveform purity for aerospace, defense, and testing applications.",
    features: ["400Hz Pure Sine Wave", "MIL-STD Validated", "Low EMI Design"],
    image: "/images/Power Converters & Inverters/inverter-400hz-rugged/INVERTER1.avif",
  },
  {
    id: "battery-chargers",
    category: "Battery Chargers",
    icon: Zap,
    title: "Intelligent Battery Chargers",
    subtitle: "Reliable & Rugged Power",
    description:
      "Deliver safe, stable, and efficient power for embedded systems, off-grid installations, and mission-critical defense applications.",
    features: ["Multi-Chemistry Support", "Advanced Protection Systems", "MIL-STD Compliant"],
    image: "/images/Power Converters & Inverters/battery chargers/image2.avif",
  },
];

const industryCategories = ["All Solutions", "Converters", "Inverters", "Battery Chargers"];

// ==========================================
// 2. PROFESSIONAL PRODUCT CARD (Uniform Height)
// ==========================================
const InteractiveProductCard = forwardRef<HTMLDivElement, { product: any }>(
  ({ product, ...props }, ref) => {
    const Icon = product.icon;

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="h-full z-10 hover:z-20 relative"
        {...props}
      >
        <div className="group relative flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:border-primary/50">
          {/* Image container – fixed height, images fully visible with object-contain */}
          <div className="relative w-full bg-slate-100 overflow-hidden h-56">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.03)] pointer-events-none" />

            {/* Category Badge – red */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-extrabold text-primary uppercase tracking-wider shadow-sm flex items-center gap-1.5 group-hover:-translate-y-1 transition-transform duration-500">
              <Icon className="w-4 h-4 text-primary" /> {product.category}
            </div>
          </div>

          <div className="flex flex-col flex-grow p-6 md:p-8">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors duration-300">
              {product.subtitle}
            </p>
            <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-grow group-hover:text-slate-800 transition-colors duration-300">
              {product.description}
            </p>
            <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-primary/20 transition-colors duration-500" />
            <ul className="space-y-3 mb-8">
              {product.features.map((feature: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700 group-hover:translate-x-1 transition-transform duration-500"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold group-hover:text-slate-900 transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link to={`/products/${product.id}`} className="mt-auto block">
              <button className="relative w-full py-4 rounded-xl font-bold overflow-hidden border-2 border-slate-200 bg-white text-slate-700 shadow-sm group/btn transition-all duration-300 hover:border-primary hover:shadow-md">
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                  View Specifications
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }
);
InteractiveProductCard.displayName = "InteractiveProductCard";

// ==========================================
// 3. FULL WIDTH AUTONOMOUS CAROUSEL WITH VIDEO BACKGROUNDS
// ==========================================
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "brand",
      label: "CRYONANO LABS",
      title: "CRYONANO",
      subtitle: "Engineering the Future of Quantum & Cryogenic Technology",
      description:
        "We design and manufacture the mission-critical hardware that modern science depends on—from isolated quantum voltage sources to high-field electromagnets and advanced power electronics.",
      icon: Database,
      videoUrl:
        "https://cdn.pixabay.com/video/2020/07/31/46074-445474431_large.mp4",
    },
    {
      id: "discover",
      label: "LIVE INVENTORY",
      title: "Discover the Catalog",
      subtitle: "Explore our complete range of precision instruments.",
      description:
        "Navigate through our highly engineered product lines. Every system is built to uncompromising standards to support the most demanding research and industrial environments.",
      icon: Settings,
      videoUrl:
        "https://cdn.pixabay.com/video/2023/03/26/156170-811776510_large.mp4",
    },
    {
      id: "interface",
      label: "SEAMLESS NAVIGATION",
      title: "Explore the Interface",
      subtitle: "Research-Grade Hardware & Industrial Solutions",
      description:
        "Below you will find our comprehensive catalog divided into logical segments. Use the interactive buttons to seamlessly switch between our core Research products and Industrial Power solutions.",
      icon: Layers,
      videoUrl:
        "https://cdn.pixabay.com/video/2020/11/11/56885-481358989_large.mp4",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[40vh] min-h-[340px] flex items-center justify-center overflow-hidden border-b border-slate-200 bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
            src={slides[currentSlide].videoUrl}
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

          <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-full flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-slate-700 text-xs font-extrabold tracking-widest uppercase shadow-sm">
                  {(() => {
                    const Icon = slides[currentSlide].icon;
                    return <Icon className="w-4 h-4 text-primary" />;
                  })()}
                  {slides[currentSlide].label}
                </div>
              </div>

              {slides[currentSlide].id === "brand" ? (
                <div className="w-full flex justify-center mb-4">
                  <div className="flex flex-col items-start">
                    <div className="flex gap-2 mb-1 ml-1">
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary"
                      />
                    </div>
                    <h1 className="font-sans text-6xl md:text-7xl lg:text-[5rem] font-black text-slate-900 leading-none tracking-[0.15em] uppercase">
                      {slides[currentSlide].title}
                    </h1>
                  </div>
                </div>
              ) : (
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4">
                  {slides[currentSlide].title}
                </h1>
              )}

              <h2 className="text-xl md:text-2xl text-primary font-extrabold mb-4">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === i
                ? "w-8 bg-primary"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 4. MAIN PRODUCTS PAGE
// ==========================================
const Products = () => {
  const location = useLocation();

  const initialFilter = location.state?.filter || "RESEARCH";
  const initialCategory = location.state?.category || "All Systems";

  const [primaryFilter, setPrimaryFilter] = useState<"RESEARCH" | "INDUSTRY">(
    initialFilter
  );
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    if (location.state?.filter) setPrimaryFilter(location.state.filter);
    if (location.state?.category) setActiveCategory(location.state.category);
  }, [location.state]);

  const isResearch = primaryFilter === "RESEARCH";
  const currentCategories = isResearch ? researchCategories : industryCategories;
  const currentCatalog = isResearch ? productCatalog : servicesCatalog;

  const filteredProducts =
    activeCategory === "All Systems" || activeCategory === "All Solutions"
      ? currentCatalog
      : currentCatalog.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />

        <main>
          <div className="bg-white border-b border-slate-200">
            <div className="container py-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors w-fit"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </div>
          </div>

          <HeroCarousel />

          <section className="pt-6 pb-4 bg-white border-b border-slate-200 relative overflow-hidden">
            <div className="container max-w-4xl mx-auto text-center relative z-10">
              <span className="text-primary font-extrabold tracking-widest uppercase text-xs mb-2 block">
                Catalog Interface
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
                Precision Hardware Catalog
              </h2>
              <p className="text-sm text-slate-600 font-medium mb-6">
                Select your area of interest below. The{" "}
                <strong className="text-slate-900">Research</strong> catalog
                features our cryogenic, quantum, and microscopy instruments. The{" "}
                <strong className="text-slate-900">Industry</strong> catalog
                features our heavy-duty power electronics, converters, and
                industrial inverters.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 bg-slate-100 p-1.5 rounded-2xl w-fit mx-auto border border-slate-200">
                <button
                  onClick={() => {
                    setPrimaryFilter("RESEARCH");
                    setActiveCategory("All Systems");
                  }}
                  className={`relative w-44 h-12 rounded-xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
                    primaryFilter === "RESEARCH"
                      ? "text-white shadow-lg shadow-primary/30"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                  }`}
                >
                  {primaryFilter === "RESEARCH" && (
                    <motion.div
                      layoutId="toggleBg"
                      className="absolute inset-0 bg-primary rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <Beaker className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Research</span>
                </button>

                <button
                  onClick={() => {
                    setPrimaryFilter("INDUSTRY");
                    setActiveCategory("All Solutions");
                  }}
                  className={`relative w-44 h-12 rounded-xl font-extrabold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 outline-none ${
                    primaryFilter === "INDUSTRY"
                      ? "text-white shadow-lg shadow-primary/30"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                  }`}
                >
                  {primaryFilter === "INDUSTRY" && (
                    <motion.div
                      layoutId="toggleBg"
                      className="absolute inset-0 bg-primary rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <Factory className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Industry</span>
                </button>
              </div>
            </div>
          </section>

          <div className="sticky top-[var(--nav-height,72px)] z-40 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-2.5">
            <div className="container">
              <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center px-4">
                <AnimatePresence mode="popLayout">
                  {currentCategories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <motion.button
                        key={cat}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`relative px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 outline-none ${
                          isActive
                            ? "text-white shadow-md"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 bg-primary rounded-full z-0"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                            }}
                          />
                        )}
                        <span className="relative z-10">{cat}</span>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <section className="py-8 lg:py-10 container relative z-10 min-h-[50vh]">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <InteractiveProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Products;