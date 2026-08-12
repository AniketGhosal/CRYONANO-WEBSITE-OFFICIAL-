// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, Variants } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Microscope,
//   Zap,
//   Cpu,
//   Atom,
//   Magnet,
//   Mail,
//   ChevronRight,
//   Sparkles,
//   Award,
//   Calendar,
//   Users,
//   Video,
//   GraduationCap,
//   Target,
//   Eye,
//   Heart,
//   Globe,
//   Briefcase,
//   Building,
//   Info,
//   ShieldCheck,
//   Lightbulb,
//   HeartHandshake,
//   Gauge,
//   Layers,
//   Activity,
//   Aperture,
//   RadioTower,
//   Hexagon,
//   Grid,
//   Network,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // 1. CORE CAPABILITIES DATA
// const capabilities = [
//   {
//     icon: Atom,
//     title: "Quantum Instrument Design",
//     items: [
//       { text: "Isolated voltage sources & DACs", detail: "High-precision transport measurement gate control." },
//       { text: "Cryogenic data acquisition & control", detail: "Real-time monitoring at millikelvin temperatures." },
//       { text: "Cryogenic RF low-pass filters", detail: "Ensuring clean qubit state manipulation." },
//     ],
//     iconBg: "bg-red-50",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Microscope,
//     title: "Nano-Characterization Systems",
//     items: [
//       { text: "Cryogenic nano-positioning stages", detail: "10nm resolution, 50mm travel at 4K." },
//       { text: "2D transfer systems", detail: "Motorised controller with integrated 4K microscope." },
//       { text: "Cryogenic probe stations & dipsticks", detail: "Versatile setups for novel material testing." },
//     ],
//     iconBg: "bg-red-50/70",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Magnet,
//     title: "Electromagnet Solutions",
//     items: [
//       { text: "Spectroscopy & Transport Magnet Systems", detail: "Up to 3 Tesla field with split-coil access." },
//       { text: "Bitter electromagnets", detail: "High-field research configurations up to 20 Tesla." },
//       { text: "Optical-access electromagnet setups", detail: "Interchangeable pole pieces and sample space." },
//     ],
//     iconBg: "bg-red-50/60",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Zap,
//     title: "Power Conversion Electronics",
//     items: [
//       { text: "AC-DC & DC-DC converters (0.3kW–30kW)", detail: "High-efficiency industrial-grade power." },
//       { text: "DC-AC pure sine wave & 400Hz inverters", detail: "Rugged aerospace power systems." },
//       { text: "Battery chargers & custom power systems", detail: "Configurable multi-channel solutions." },
//     ],
//     iconBg: "bg-red-50/50",
//     iconColor: "text-primary",
//   },
// ];

// // 2. MARKETS DATA
// const markets = [
//   "Quantum Computing",
//   "Condensed Matter Physics",
//   "Nanoelectronics & 2D Materials",
//   "Cryogenic Electronics Testing",
//   "Aerospace & Defence",
//   "Industrial Power Systems",
//   "Academic & Government Research",
//   "Renewable Energy Infrastructure",
// ];

// // 3. STATS DATA
// const stats = [
//   { value: "32+", label: "Systems Delivered", icon: Building },
//   { value: "15+", label: "IIT Partners", icon: GraduationCap },
//   { value: "5+", label: "Countries Reached", icon: Globe },
//   { value: "15+", label: "Publications", icon: Award },
// ];

// // 4. VALUES DATA
// const valuesData = [
//   {
//     icon: Gauge,
//     title: "Engineering First, Always",
//     description:
//       "At Cryonano, engineering precedes everything. We prioritize noise performance, thermal stability, mechanical precision, uptime, and safety over superficial specifications.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Built With Empathy",
//     description:
//       "We understand experimental reality because we have lived it. We know what it means to run an experiment at 3 a.m. This empathy shapes how we design.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Safety by Architecture",
//     description:
//       "Safety is not an afterthought. From cryogenic systems and high-voltage electronics to rugged industrial power supplies, protection, isolation, and fault handling are integral to our designs. We engineer for safe extremes.",
//   },
//   {
//     icon: Target,
//     title: "Reliability",
//     description:
//       "Our systems are designed for long-term stability, repeatability, and resilience—quietly embedded into larger setups, delivering consistent performance over years of operation.",
//   },
//   {
//     icon: Users,
//     title: "Partnerships Over Transactions",
//     description:
//       "We believe enduring systems are built through collaboration. We work closely with our partners to adapt designs, support deployments, and ensure long-term performance.",
//   },
// ];

// // 5. SUB-PAGES NAVIGATION DATA
// const subPages = [
//   { name: "About Us", path: "/about", icon: Info },
//   { name: "Awards and Recognition", path: "/about/awards", icon: Award },
//   { name: "News & Events", path: "/about/news", icon: Calendar },
//   { name: "Careers", path: "/about/careers", icon: Briefcase },
//   { name: "Product Videos", path: "/about/product-videos", icon: Video },
//   { name: "Intern with Us", path: "/about/intern", icon: GraduationCap },
// ];

// // 6. ANIMATION VARIANTS
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.08 } },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 15 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// // 7. ADVANCED RESEARCH DATA FROM IMAGE
// const advancedResearchGrid = [
//   { title: "Quantum Materials Research", icon: Atom },
//   { title: "Magnetic Materials Characterization", icon: Magnet },
//   { title: "Superconductivity Studies", icon: Activity },
//   { title: "Plasma and Accelerator Research", icon: Aperture },
//   { title: "RF and Microwave Research", icon: RadioTower },
//   { title: "Advanced Materials Science", icon: Hexagon },
//   { title: "Condensed Matter Physics", icon: Grid },
//   { title: "Nano Electronic Research", icon: Network },
//   { title: "Semiconductor", icon: Cpu },
// ];

// // ==========================================
// // MAIN COMPONENT
// // ==========================================
// const About = () => {
//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//         <Navbar />

//         <main>
//           {/* ========================================== */}
//           {/* BREADCRUMB */}
//           {/* ========================================== */}
//           <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
//             <div className="container py-2 flex items-center gap-2">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
//               >
//                 <ArrowLeft className="h-3 w-3" />
//                 Back
//               </Link>
//               <span className="text-slate-300 font-bold text-[10px]">/</span>
//               <span className="text-[10px] font-bold text-primary uppercase tracking-widest">About Us</span>
//             </div>
//           </div>

//           {/* ========================================== */}
//           {/* HERO – Merged "About Us" + "Innovators in Quantum & Power" */}
//           {/* ========================================== */}
//           <section className="relative py-10 lg:py-12 overflow-hidden bg-white border-b border-slate-100">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//               <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//             </div>

//             <div className="container relative z-10 max-w-5xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col gap-4"
//               >
//                 <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase w-fit shadow-sm">
//                   <Sparkles className="w-3.5 h-3.5" />
//                   Who We Are
//                 </div>

//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
//                   About Us
//                 </h1>
//                 {/* <div className="text-xl lg:text-2xl font-bold text-primary/80 mt-1">
//                   Innovators in{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">
//                     Quantum
//                   </span>{" "}
//                   &{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
//                     Power
//                   </span>
//                 </div> */}

//                 <div className="space-y-4">
//                   <p className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-primary/30 pl-4 rounded-l-sm">
//                     Cryonano is an engineering-led advanced instrumentation company building the core 
//                     hardware that modern scientific and industrial systems depend on. We are evolving 
//                     from a manufacturer of scientific instruments into a systems engineering company 
//                     that delivers complete environments for precision science and advanced applications.
//                   </p>

//                   <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4">
//                     Our expertise bridges demanding markets. For research laboratories, we provide 
//                     cryogenic systems, electromagnets, ultraprecise positioning, and quantum 
//                     instrumentation that empower scientists to prepare, measure, and characterize 
//                     next-generation materials. For industrial applications, we build rugged power 
//                     systems—including AC-DC and DC-DC converters, inverters, and intelligent battery 
//                     charging systems—that operate quietly, reliably, and continuously at the heart of 
//                     complex environments.
//                   </p>

//                   <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4 font-medium">
//                     Every CRYONANO system is built to be embedded seamlessly. Intelligence, monitoring, 
//                     and protection are designed directly into the architecture, allowing our hardware 
//                     to remain omnipresent without becoming a point of failure. Whether powering critical 
//                     infrastructure or enabling quantum discovery, we deliver an integrated engineering 
//                     stack, giving customers a single partner from concept to complete system.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* STATS SECTION */}
//           {/* ========================================== */}
//           <section className="relative py-6 bg-slate-50 border-y border-slate-200">
//             <div className="container">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="grid grid-cols-2 md:grid-cols-4 gap-3"
//               >
//                 {stats.map((stat, idx) => {
//                   const Icon = stat.icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.05 }}
//                       className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
//                     >
//                       <div className="flex justify-center mb-1.5">
//                         <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
//                           <Icon className="w-5 h-5 text-primary" />
//                         </div>
//                       </div>
//                       <p className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">{stat.value}</p>
//                       <p className="text-xs text-slate-600 font-semibold mt-0.5">{stat.label}</p>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* SUPPORTING ADVANCED RESEARCH – updated styling */}
//           {/* ========================================== */}
//           <section className="relative py-12 bg-white border-b border-slate-100">
//             <div className="container max-w-5xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-6"
//               >
//                 <div>
//                   <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1">
//                     Supporting <span className="text-primary">Advanced Research</span>
//                   </h2>
//                   <div className="h-1 w-16 bg-primary rounded-full mb-6" />
//                   <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
//                     Cryonano works closely with universities, national laboratories, and advanced R&D organizations to
//                     translate complex scientific requirements into deployable systems hardware. Our customer base
//                     spans leading research institutions across India, Asia, and Europe.
//                   </p>
//                 </div>

//                 {/* Compact grid with larger font and less whitespace */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-slate-200 rounded-xl overflow-hidden shadow-sm mt-8">
//                   {advancedResearchGrid.map((item, idx) => {
//                     const Icon = item.icon;
//                     return (
//                       <div 
//                         key={idx} 
//                         className="bg-white border-b border-r border-slate-200 p-4 flex flex-col items-center justify-center gap-2 hover:bg-red-50/80 transition-colors group text-center min-h-[100px]"
//                       >
//                         <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
//                           <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
//                         </div>
//                         <span className="font-extrabold text-sm md:text-base text-slate-800 uppercase tracking-widest leading-relaxed group-hover:text-primary transition-colors">
//                           {item.title}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* OUR VALUES */}
//           {/* ========================================== */}
//           <section className="relative py-10 bg-slate-50 border-y border-slate-200">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//               <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//             </div>

//             <div className="container relative z-10 max-w-5xl mx-auto">
//               <div className="text-center mb-8">
//                 <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
//                   Our Foundation
//                 </span>
//                 <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">
//                   Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Values</span>
//                 </h2>
//               </div>

//               <div className="space-y-6">
//                 {valuesData.map((value, idx) => {
//                   const Icon = value.icon;
//                   const isEven = idx % 2 === 0;
//                   return (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: isEven ? -20 : 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true, margin: "-30px" }}
//                       transition={{ duration: 0.5, delay: idx * 0.05 }}
//                       className={`flex flex-col md:flex-row gap-5 items-start ${
//                         isEven ? "" : "md:flex-row-reverse"
//                       }`}
//                     >
//                       {/* Icon & line connector */}
//                       <div className="flex items-start gap-4 w-full md:w-auto">
//                         <div className="relative flex flex-col items-center">
//                           <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                             <Icon className="w-6 h-6 text-primary" />
//                           </div>
//                           {idx < valuesData.length - 1 && (
//                             <div className="w-0.5 h-10 bg-primary/20 mt-2 hidden md:block" />
//                           )}
//                         </div>
//                         <div className="md:hidden">
//                           <h3 className="font-display font-bold text-slate-900 text-base mb-1">
//                             {value.title}
//                           </h3>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//                         <h3 className="font-display font-bold text-slate-900 text-base mb-2 hidden md:block">
//                           {value.title}
//                         </h3>
//                         <p className="text-sm md:text-base text-slate-600 leading-relaxed">
//                           {value.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* CORE CAPABILITIES */}
//           {/* ========================================== */}
//           <section className="relative py-10 bg-white border-b border-slate-100">
//             <div className="container">
//               <div className="text-center mb-8">
//                 <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
//                   Expertise
//                 </span>
//                 <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
//                   Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Capabilities</span>
//                 </h2>
//                 <p className="text-sm text-slate-500 max-w-2xl mx-auto">
//                   Our expertise spans four interconnected domains, delivering integrated solutions for the most demanding applications.
//                 </p>
//               </div>

//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-30px" }}
//                 className="grid md:grid-cols-2 gap-5"
//               >
//                 {capabilities.map((cap) => {
//                   const Icon = cap.icon;
//                   return (
//                     <motion.div
//                       key={cap.title}
//                       variants={itemVariants}
//                       className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
//                     >
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${cap.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
//                           <Icon className={`h-5 w-5 ${cap.iconColor} relative z-10`} />
//                         </div>
//                         <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors">
//                           {cap.title}
//                         </h3>
//                       </div>

//                       <ul className="space-y-3">
//                         {cap.items.map((item, idx) => (
//                           <motion.li
//                             key={item.text}
//                             variants={itemVariants}
//                             transition={{ delay: idx * 0.05 }}
//                             className="group/item flex flex-col p-3 bg-slate-50 border border-slate-200 rounded-lg hover:bg-white hover:border-primary/30 transition-all duration-300 cursor-default"
//                           >
//                             <div className="flex items-start gap-2.5">
//                               <ChevronRight className={`h-3.5 w-3.5 shrink-0 mt-0.5 text-primary opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
//                               <span className="font-bold text-slate-800 group-hover/item:text-primary transition-colors text-sm md:text-base">
//                                 {item.text}
//                               </span>
//                             </div>
//                             <p className="h-0 opacity-0 overflow-hidden group-hover/item:h-auto group-hover/item:opacity-100 group-hover/item:mt-1.5 transition-all duration-300 text-sm text-slate-600 pl-6 leading-relaxed font-medium">
//                               {item.detail}
//                             </p>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* MARKETS WE SERVE */}
//           {/* ========================================== */}
//           <section className="relative py-8 bg-slate-50 border-y border-slate-200">
//             <div className="container">
//               <div className="text-center mb-5">
//                 <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
//                   Reach
//                 </span>
//                 <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-1">
//                   Markets We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Serve</span>
//                 </h2>
//                 <p className="text-sm text-slate-500 max-w-2xl mx-auto">
//                   Our solutions deliver precision hardware across mission-critical sectors globally.
//                 </p>
//               </div>

//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto"
//               >
//                 {markets.map((market) => (
//                   <motion.div
//                     key={market}
//                     variants={itemVariants}
//                     className="group px-4 py-2 rounded-lg bg-white border border-slate-200 cursor-default hover:border-primary/40 hover:shadow-md transition-all duration-300"
//                   >
//                     <p className="text-xs md:text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
//                       {market}
//                     </p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* SUB-PAGES NAVIGATION */}
//           {/* ========================================== */}
//           <section className="relative py-6 bg-white border-y border-slate-200">
//             <div className="container">
//               <div className="text-center mb-4">
//                 <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">Explore More About Us</h2>
//                 <p className="text-sm text-slate-500">Learn more about our journey, achievements, and opportunities.</p>
//               </div>
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
//               >
//                 {subPages.map((page) => {
//                   const Icon = page.icon;
//                   const isCurrent = page.path === "/about";
//                   return (
//                     <motion.div
//                       key={page.name}
//                       variants={itemVariants}
//                       className={`group relative p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
//                         isCurrent
//                           ? "bg-primary/5 border-primary/50"
//                           : "bg-white border-slate-200 hover:border-primary/30"
//                       }`}
//                     >
//                       <Link to={page.path} className="flex items-center gap-3">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                           isCurrent ? "bg-primary text-white" : "bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
//                         } transition-colors duration-300`}>
//                           <Icon className="w-4 h-4" />
//                         </div>
//                         <span className={`text-sm font-semibold ${isCurrent ? "text-primary" : "text-slate-700 group-hover:text-primary"} transition-colors duration-300`}>
//                           {page.name}
//                         </span>
//                         {isCurrent && <span className="ml-auto text-[10px] font-bold text-primary">(current)</span>}
//                       </Link>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* CTA SECTION */}
//           {/* ========================================== */}
//           <section className="relative py-8 bg-primary/5 border-y border-primary/10">
//             <div className="container relative z-10 text-center max-w-2xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <div className="w-12 h-12 mx-auto bg-white rounded-xl border border-primary/20 flex items-center justify-center mb-3 shadow-sm">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>

//                 <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
//                   Ready to accelerate <br />your research?
//                 </h2>
//                 <p className="text-slate-600 text-sm mb-5 max-w-xl mx-auto">
//                   Whether you need custom quantum instruments, cryogenic systems, or aerospace power electronics — our R&D team is ready to help.
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-3">
//                   <Link to="/products" className="w-full sm:w-auto">
//                     <button className="w-full group relative px-6 py-2.5 rounded-lg font-bold text-sm text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-0.5">
//                       <span className="relative z-10 flex items-center gap-2">
//                         Explore Systems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </span>
//                       <motion.div
//                         animate={{ x: ["-100%", "200%"] }}
//                         transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                       />
//                     </button>
//                   </Link>

//                   <Link to="/contact" className="w-full sm:w-auto">
//                     <button className="w-full group px-6 py-2.5 rounded-lg font-bold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
//                       <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
//                       Contact Engineering
//                     </button>
//                   </Link>
//                 </div>
//               </motion.div>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default About;
















































// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, Variants } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Microscope,
//   Zap,
//   Cpu,
//   Atom,
//   Magnet,
//   Mail,
//   ChevronRight,
//   Sparkles,
//   Award,
//   Calendar,
//   Users,
//   Video,
//   GraduationCap,
//   Target,
//   Eye,
//   Heart,
//   Globe,
//   Briefcase,
//   Building,
//   Info,
//   ShieldCheck,
//   Lightbulb,
//   HeartHandshake,
//   Gauge,
//   Layers,
//   Activity,
//   Aperture,
//   RadioTower,
//   Hexagon,
//   Grid,
//   Network,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // 1. CORE CAPABILITIES DATA
// const capabilities = [
//   {
//     icon: Atom,
//     title: "Quantum Instrument Design",
//     items: [
//       { text: "Isolated voltage sources & DACs", detail: "High-precision transport measurement gate control." },
//       { text: "Cryogenic data acquisition & control", detail: "Real-time monitoring at millikelvin temperatures." },
//       { text: "Cryogenic RF low-pass filters", detail: "Ensuring clean qubit state manipulation." },
//     ],
//     iconBg: "bg-red-50",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Microscope,
//     title: "Nano-Characterization Systems",
//     items: [
//       { text: "Cryogenic nano-positioning stages", detail: "10nm resolution, 50mm travel at 4K." },
//       { text: "2D transfer systems", detail: "Motorised controller with integrated 4K microscope." },
//       { text: "Cryogenic probe stations & dipsticks", detail: "Versatile setups for novel material testing." },
//     ],
//     iconBg: "bg-red-50/70",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Magnet,
//     title: "Electromagnet Solutions",
//     items: [
//       { text: "Spectroscopy & Transport Magnet Systems", detail: "Up to 3 Tesla field with split-coil access." },
//       { text: "Bitter electromagnets", detail: "High-field research configurations up to 20 Tesla." },
//       { text: "Optical-access electromagnet setups", detail: "Interchangeable pole pieces and sample space." },
//     ],
//     iconBg: "bg-red-50/60",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Zap,
//     title: "Power Conversion Electronics",
//     items: [
//       { text: "AC-DC & DC-DC converters (0.3kW–30kW)", detail: "High-efficiency industrial-grade power." },
//       { text: "DC-AC pure sine wave & 400Hz inverters", detail: "Rugged aerospace power systems." },
//       { text: "Battery chargers & custom power systems", detail: "Configurable multi-channel solutions." },
//     ],
//     iconBg: "bg-red-50/50",
//     iconColor: "text-primary",
//   },
// ];

// // 2. MARKETS DATA
// const markets = [
//   "Quantum Computing",
//   "Condensed Matter Physics",
//   "Nanoelectronics & 2D Materials",
//   "Cryogenic Electronics Testing",
//   "Aerospace & Defence",
//   "Industrial Power Systems",
//   "Academic & Government Research",
//   "Renewable Energy Infrastructure",
// ];

// // 3. STATS DATA
// const stats = [
//   { value: "32+", label: "Systems Delivered", icon: Building },
//   { value: "15+", label: "IIT Partners", icon: GraduationCap },
//   { value: "5+", label: "Countries Reached", icon: Globe },
//   { value: "15+", label: "Publications", icon: Award },
// ];

// // 4. VALUES DATA
// const valuesData = [
//   {
//     icon: Gauge,
//     title: "Engineering First, Always",
//     description:
//       "At Cryonano, engineering precedes everything. We prioritize noise performance, thermal stability, mechanical precision, uptime, and safety over superficial specifications.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Built With Empathy",
//     description:
//       "We understand experimental reality because we have lived it. We know what it means to run an experiment at 3 a.m. This empathy shapes how we design.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Safety by Architecture",
//     description:
//       "Safety is not an afterthought. From cryogenic systems and high-voltage electronics to rugged industrial power supplies, protection, isolation, and fault handling are integral to our designs. We engineer for safe extremes.",
//   },
//   {
//     icon: Target,
//     title: "Reliability",
//     description:
//       "Our systems are designed for long-term stability, repeatability, and resilience—quietly embedded into larger setups, delivering consistent performance over years of operation.",
//   },
//   {
//     icon: Users,
//     title: "Partnerships Over Transactions",
//     description:
//       "We believe enduring systems are built through collaboration. We work closely with our partners to adapt designs, support deployments, and ensure long-term performance.",
//   },
// ];

// // 5. SUB-PAGES NAVIGATION DATA
// const subPages = [
//   { name: "About Us", path: "/about", icon: Info },
//   { name: "Awards and Recognition", path: "/about/awards", icon: Award },
//   { name: "News & Events", path: "/about/news", icon: Calendar },
//   { name: "Careers", path: "/about/careers", icon: Briefcase },
//   { name: "Product Videos", path: "/about/product-videos", icon: Video },
//   { name: "Intern with Us", path: "/about/intern", icon: GraduationCap },
// ];

// // 6. ANIMATION VARIANTS
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.08 } },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 15 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// // 7. ADVANCED RESEARCH DATA FROM IMAGE
// const advancedResearchGrid = [
//   { title: "Quantum Materials Research", icon: Atom },
//   { title: "Magnetic Materials Characterization", icon: Magnet },
//   { title: "Superconductivity Studies", icon: Activity },
//   { title: "Plasma and Accelerator Research", icon: Aperture },
//   { title: "RF and Microwave Research", icon: RadioTower },
//   { title: "Advanced Materials Science", icon: Hexagon },
//   { title: "Condensed Matter Physics", icon: Grid },
//   { title: "Nano Electronic Research", icon: Network },
//   { title: "Semiconductor", icon: Cpu },
// ];

// // ==========================================
// // MAIN COMPONENT
// // ==========================================
// // const About = () => {
// //   return (
// //     <>
// //       {/* ====== FIXED NAVBAR ====== */}
// //       <div className="fixed top-0 left-0 w-full z-50">
// //         <Navbar />
// //       </div>

// //       {/* ====== SPACER ====== */}
// //       <div className="h-[112px] w-full" />

// //       <PageTransition>
// //         <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
// //           <main>
// //             {/* ========================================== */}
// //             {/* BREADCRUMB – updated top position */}
// //             {/* ========================================== */}
// //             <div className="bg-white border-b border-slate-200 sticky top-[112px] z-40 shadow-sm">
// //               <div className="container py-2 flex items-center gap-2">
// //                 <Link
// //                   to="/"
// //                   className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
// //                 >
// //                   <ArrowLeft className="h-3 w-3" />
// //                   Back
// //                 </Link>
// //                 <span className="text-slate-300 font-bold text-[10px]">/</span>
// //                 <span className="text-[10px] font-bold text-primary uppercase tracking-widest">About Us</span>
// //               </div>
// //             </div>

// //             {/* ========================================== */}
// //             {/* HERO – Merged "About Us" + "Innovators in Quantum & Power" */}
// //             {/* ========================================== */}
// //             <section className="relative py-10 lg:py-12 overflow-hidden bg-white border-b border-slate-100">
// const About = () => {
//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        
//         {/* 1. FIXED NAVBAR - Guaranteed to stay at the top */}
//         <div className="fixed top-0 left-0 w-full z-[50] shadow-sm">
//           <Navbar />
//         </div>

//         <main>
//           {/* ========================================== */}
//           {/* BREADCRUMB (With padding to push content safely below the fixed Navbar) */}
//           {/* ========================================== */}
//           <div className="bg-white border-b border-slate-200 pt-[110px]">
//             <div className="container py-3 flex items-center gap-2">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
//               >
//                 <ArrowLeft className="h-3 w-3" />
//                 Back
//               </Link>
//               <span className="text-slate-300 font-bold text-[10px]">/</span>
//               <span className="text-[10px] font-bold text-primary uppercase tracking-widest">About Us</span>
//             </div>
//           </div>

//           {/* ========================================== */}
//           {/* HERO – Merged "About Us" + "Innovators in Quantum & Power" */}
//           {/* ========================================== */}
//           <section className="relative py-10 lg:py-12 overflow-hidden bg-white border-b border-slate-100">
//               <div className="absolute inset-0 z-0">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//               </div>

//               <div className="container relative z-10 max-w-5xl mx-auto">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="flex flex-col gap-4"
//                 >
//                   <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase w-fit shadow-sm">
//                     <Sparkles className="w-3.5 h-3.5" />
//                     Who We Are
//                   </div>

//                   <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
//                     About Us
//                   </h1>
//                   {/* <div className="text-xl lg:text-2xl font-bold text-primary/80 mt-1">
//                     Innovators in{" "}
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">
//                       Quantum
//                     </span>{" "}
//                     &{" "}
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
//                       Power
//                     </span>
//                   </div> */}

//                   <div className="space-y-4">
//                     <p className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-primary/30 pl-4 rounded-l-sm">
//                       Cryonano is an engineering-led advanced instrumentation company building the core 
//                       hardware that modern scientific and industrial systems depend on. We are evolving 
//                       from a manufacturer of scientific instruments into a systems engineering company 
//                       that delivers complete environments for precision science and advanced applications.
//                     </p>

//                     <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4">
//                       Our expertise bridges demanding markets. For research laboratories, we provide 
//                       cryogenic systems, electromagnets, ultraprecise positioning, and quantum 
//                       instrumentation that empower scientists to prepare, measure, and characterize 
//                       next-generation materials. For industrial applications, we build rugged power 
//                       systems—including AC-DC and DC-DC converters, inverters, and intelligent battery 
//                       charging systems—that operate quietly, reliably, and continuously at the heart of 
//                       complex environments.
//                     </p>

//                     <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4 font-medium">
//                       Every CRYONANO system is built to be embedded seamlessly. Intelligence, monitoring, 
//                       and protection are designed directly into the architecture, allowing our hardware 
//                       to remain omnipresent without becoming a point of failure. Whether powering critical 
//                       infrastructure or enabling quantum discovery, we deliver an integrated engineering 
//                       stack, giving customers a single partner from concept to complete system.
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* STATS SECTION */}
//             {/* ========================================== */}
//             <section className="relative py-6 bg-slate-50 border-y border-slate-200">
//               <div className="container">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="grid grid-cols-2 md:grid-cols-4 gap-3"
//                 >
//                   {stats.map((stat, idx) => {
//                     const Icon = stat.icon;
//                     return (
//                       <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: idx * 0.05 }}
//                         className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
//                       >
//                         <div className="flex justify-center mb-1.5">
//                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
//                             <Icon className="w-5 h-5 text-primary" />
//                           </div>
//                         </div>
//                         <p className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">{stat.value}</p>
//                         <p className="text-xs text-slate-600 font-semibold mt-0.5">{stat.label}</p>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* SUPPORTING ADVANCED RESEARCH – updated styling */}
//             {/* ========================================== */}
//             <section className="relative py-12 bg-white border-b border-slate-100">
//               <div className="container max-w-5xl mx-auto">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="space-y-6"
//                 >
//                   <div>
//                     <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1">
//                       Supporting <span className="text-primary">Advanced Research</span>
//                     </h2>
//                     <div className="h-1 w-16 bg-primary rounded-full mb-6" />
//                     <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
//                       Cryonano works closely with universities, national laboratories, and advanced R&D organizations to
//                       translate complex scientific requirements into deployable systems hardware. Our customer base
//                       spans leading research institutions across India, Asia, and Europe.
//                     </p>
//                   </div>

//                   {/* Compact grid with larger font and less whitespace */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-slate-200 rounded-xl overflow-hidden shadow-sm mt-8">
//                     {advancedResearchGrid.map((item, idx) => {
//                       const Icon = item.icon;
//                       return (
//                         <div 
//                           key={idx} 
//                           className="bg-white border-b border-r border-slate-200 p-4 flex flex-col items-center justify-center gap-2 hover:bg-red-50/80 transition-colors group text-center min-h-[100px]"
//                         >
//                           <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
//                             <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
//                           </div>
//                           <span className="font-extrabold text-sm md:text-base text-slate-800 uppercase tracking-widest leading-relaxed group-hover:text-primary transition-colors">
//                             {item.title}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* OUR VALUES */}
//             {/* ========================================== */}
//             <section className="relative py-10 bg-slate-50 border-y border-slate-200">
//               <div className="absolute inset-0 z-0">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//               </div>

//               <div className="container relative z-10 max-w-5xl mx-auto">
//                 <div className="text-center mb-8">
//                   <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
//                     Our Foundation
//                   </span>
//                   <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">
//                     Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Values</span>
//                   </h2>
//                 </div>

//                 <div className="space-y-6">
//                   {valuesData.map((value, idx) => {
//                     const Icon = value.icon;
//                     const isEven = idx % 2 === 0;
//                     return (
//                       <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, x: isEven ? -20 : 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true, margin: "-30px" }}
//                         transition={{ duration: 0.5, delay: idx * 0.05 }}
//                         className={`flex flex-col md:flex-row gap-5 items-start ${
//                           isEven ? "" : "md:flex-row-reverse"
//                         }`}
//                       >
//                         {/* Icon & line connector */}
//                         <div className="flex items-start gap-4 w-full md:w-auto">
//                           <div className="relative flex flex-col items-center">
//                             <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                               <Icon className="w-6 h-6 text-primary" />
//                             </div>
//                             {idx < valuesData.length - 1 && (
//                               <div className="w-0.5 h-10 bg-primary/20 mt-2 hidden md:block" />
//                             )}
//                           </div>
//                           <div className="md:hidden">
//                             <h3 className="font-display font-bold text-slate-900 text-base mb-1">
//                               {value.title}
//                             </h3>
//                           </div>
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//                           <h3 className="font-display font-bold text-slate-900 text-base mb-2 hidden md:block">
//                             {value.title}
//                           </h3>
//                           <p className="text-sm md:text-base text-slate-600 leading-relaxed">
//                             {value.description}
//                           </p>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* CORE CAPABILITIES */}
//             {/* ========================================== */}
//             <section className="relative py-10 bg-white border-b border-slate-100">
//               <div className="container">
//                 <div className="text-center mb-8">
//                   <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
//                     Expertise
//                   </span>
//                   <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
//                     Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Capabilities</span>
//                   </h2>
//                   <p className="text-sm text-slate-500 max-w-2xl mx-auto">
//                     Our expertise spans four interconnected domains, delivering integrated solutions for the most demanding applications.
//                   </p>
//                 </div>

//                 <motion.div
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: true, margin: "-30px" }}
//                   className="grid md:grid-cols-2 gap-5"
//                 >
//                   {capabilities.map((cap) => {
//                     const Icon = cap.icon;
//                     return (
//                       <motion.div
//                         key={cap.title}
//                         variants={itemVariants}
//                         className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
//                       >
//                         <div className="flex items-center gap-4 mb-4">
//                           <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${cap.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
//                             <Icon className={`h-5 w-5 ${cap.iconColor} relative z-10`} />
//                           </div>
//                           <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors">
//                             {cap.title}
//                           </h3>
//                         </div>

//                         <ul className="space-y-3">
//                           {cap.items.map((item, idx) => (
//                             <motion.li
//                               key={item.text}
//                               variants={itemVariants}
//                               transition={{ delay: idx * 0.05 }}
//                               className="group/item flex flex-col p-3 bg-slate-50 border border-slate-200 rounded-lg hover:bg-white hover:border-primary/30 transition-all duration-300 cursor-default"
//                             >
//                               <div className="flex items-start gap-2.5">
//                                 <ChevronRight className={`h-3.5 w-3.5 shrink-0 mt-0.5 text-primary opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
//                                 <span className="font-bold text-slate-800 group-hover/item:text-primary transition-colors text-sm md:text-base">
//                                   {item.text}
//                                 </span>
//                               </div>
//                               <p className="h-0 opacity-0 overflow-hidden group-hover/item:h-auto group-hover/item:opacity-100 group-hover/item:mt-1.5 transition-all duration-300 text-sm text-slate-600 pl-6 leading-relaxed font-medium">
//                                 {item.detail}
//                               </p>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* MARKETS WE SERVE */}
//             {/* ========================================== */}
//             <section className="relative py-8 bg-slate-50 border-y border-slate-200">
//               <div className="container">
//                 <div className="text-center mb-5">
//                   <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
//                     Reach
//                   </span>
//                   <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-1">
//                     Markets We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Serve</span>
//                   </h2>
//                   <p className="text-sm text-slate-500 max-w-2xl mx-auto">
//                     Our solutions deliver precision hardware across mission-critical sectors globally.
//                   </p>
//                 </div>

//                 <motion.div
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: true }}
//                   className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto"
//                 >
//                   {markets.map((market) => (
//                     <motion.div
//                       key={market}
//                       variants={itemVariants}
//                       className="group px-4 py-2 rounded-lg bg-white border border-slate-200 cursor-default hover:border-primary/40 hover:shadow-md transition-all duration-300"
//                     >
//                       <p className="text-xs md:text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
//                         {market}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* SUB-PAGES NAVIGATION */}
//             {/* ========================================== */}
//             <section className="relative py-6 bg-white border-y border-slate-200">
//               <div className="container">
//                 <div className="text-center mb-4">
//                   <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">Explore More About Us</h2>
//                   <p className="text-sm text-slate-500">Learn more about our journey, achievements, and opportunities.</p>
//                 </div>
//                 <motion.div
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: true }}
//                   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
//                 >
//                   {subPages.map((page) => {
//                     const Icon = page.icon;
//                     const isCurrent = page.path === "/about";
//                     return (
//                       <motion.div
//                         key={page.name}
//                         variants={itemVariants}
//                         className={`group relative p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
//                           isCurrent
//                             ? "bg-primary/5 border-primary/50"
//                             : "bg-white border-slate-200 hover:border-primary/30"
//                         }`}
//                       >
//                         <Link to={page.path} className="flex items-center gap-3">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                             isCurrent ? "bg-primary text-white" : "bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
//                           } transition-colors duration-300`}>
//                             <Icon className="w-4 h-4" />
//                           </div>
//                           <span className={`text-sm font-semibold ${isCurrent ? "text-primary" : "text-slate-700 group-hover:text-primary"} transition-colors duration-300`}>
//                             {page.name}
//                           </span>
//                           {isCurrent && <span className="ml-auto text-[10px] font-bold text-primary">(current)</span>}
//                         </Link>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>
//               </div>
//             </section>

//             {/* ========================================== */}
//             {/* CTA SECTION */}
//             {/* ========================================== */}
//             <section className="relative py-8 bg-primary/5 border-y border-primary/10">
//               <div className="container relative z-10 text-center max-w-2xl mx-auto">
//                 <motion.div
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="w-12 h-12 mx-auto bg-white rounded-xl border border-primary/20 flex items-center justify-center mb-3 shadow-sm">
//                     <Mail className="w-6 h-6 text-primary" />
//                   </div>

//                   <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
//                     Ready to accelerate <br />your research?
//                   </h2>
//                   <p className="text-slate-600 text-sm mb-5 max-w-xl mx-auto">
//                     Whether you need custom quantum instruments, cryogenic systems, or aerospace power electronics — our R&D team is ready to help.
//                   </p>

//                   <div className="flex flex-col sm:flex-row justify-center gap-3">
//                     <Link to="/products" className="w-full sm:w-auto">
//                       <button className="w-full group relative px-6 py-2.5 rounded-lg font-bold text-sm text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-0.5">
//                         <span className="relative z-10 flex items-center gap-2">
//                           Explore Systems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                         </span>
//                         <motion.div
//                           animate={{ x: ["-100%", "200%"] }}
//                           transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                         />
//                       </button>
//                     </Link>

//                     <Link to="/contact" className="w-full sm:w-auto">
//                       <button className="w-full group px-6 py-2.5 rounded-lg font-bold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
//                         <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
//                         Contact Engineering
//                       </button>
//                     </Link>
//                   </div>
//                 {/* </motion.div>
//               </div>
//             </section>
//           </main>

//           <Footer />
//         </div>
//       </PageTransition>
//     </>
//   );
// };

// export default About; */}
//               </motion.div>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default About;





















import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Microscope,
  Zap,
  Cpu,
  Atom,
  Magnet,
  Mail,
  ChevronRight,
  Sparkles,
  Award,
  Calendar,
  Users,
  Video,
  GraduationCap,
  Target,
  Eye,
  Heart,
  Globe,
  Briefcase,
  Building,
  Info,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Gauge,
  Layers,
  Activity,
  Aperture,
  RadioTower,
  Hexagon,
  Grid,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

// 1. CORE CAPABILITIES DATA
const capabilities = [
  {
    icon: Atom,
    title: "Quantum Instrument Design",
    items: [
      { text: "Isolated voltage sources & DACs", detail: "High-precision transport measurement gate control." },
      { text: "Cryogenic data acquisition & control", detail: "Real-time monitoring at millikelvin temperatures." },
      { text: "Cryogenic RF low-pass filters", detail: "Ensuring clean qubit state manipulation." },
    ],
    iconBg: "bg-red-50",
    iconColor: "text-primary",
  },
  {
    icon: Microscope,
    title: "Nano-Characterization Systems",
    items: [
      { text: "Cryogenic nano-positioning stages", detail: "10nm resolution, 50mm travel at 4K." },
      { text: "2D transfer systems", detail: "Motorised controller with integrated 4K microscope." },
      { text: "Cryogenic probe stations & dipsticks", detail: "Versatile setups for novel material testing." },
    ],
    iconBg: "bg-red-50/70",
    iconColor: "text-primary",
  },
  {
    icon: Magnet,
    title: "Electromagnet Solutions",
    items: [
      { text: "Spectroscopy & Transport Magnet Systems", detail: "Up to 3 Tesla field with split-coil access." },
      { text: "Bitter electromagnets", detail: "High-field research configurations up to 20 Tesla." },
      { text: "Optical-access electromagnet setups", detail: "Interchangeable pole pieces and sample space." },
    ],
    iconBg: "bg-red-50/60",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Power Conversion Electronics",
    items: [
      { text: "AC-DC & DC-DC converters (0.3kW–30kW)", detail: "High-efficiency industrial-grade power." },
      { text: "DC-AC pure sine wave & 400Hz inverters", detail: "Rugged aerospace power systems." },
      { text: "Battery chargers & custom power systems", detail: "Configurable multi-channel solutions." },
    ],
    iconBg: "bg-red-50/50",
    iconColor: "text-primary",
  },
];

// 2. MARKETS DATA
const markets = [
  "Quantum Computing",
  "Condensed Matter Physics",
  "Nanoelectronics & 2D Materials",
  "Cryogenic Electronics Testing",
  "Aerospace & Defence",
  "Industrial Power Systems",
  "Academic & Government Research",
  "Renewable Energy Infrastructure",
];

// 3. STATS DATA
const stats = [
  { value: "32+", label: "Systems Delivered", icon: Building },
  { value: "15+", label: "IIT Partners", icon: GraduationCap },
  { value: "5+", label: "Countries Reached", icon: Globe },
  { value: "15+", label: "Publications", icon: Award },
];

// 4. VALUES DATA
const valuesData = [
  {
    icon: Gauge,
    title: "Engineering First, Always",
    description:
      "At Cryonano, engineering precedes everything. We prioritize noise performance, thermal stability, mechanical precision, uptime, and safety over superficial specifications.",
  },
  {
    icon: HeartHandshake,
    title: "Built With Empathy",
    description:
      "We understand experimental reality because we have lived it. We know what it means to run an experiment at 3 a.m. This empathy shapes how we design.",
  },
  {
    icon: ShieldCheck,
    title: "Safety by Architecture",
    description:
      "Safety is not an afterthought. From cryogenic systems and high-voltage electronics to rugged industrial power supplies, protection, isolation, and fault handling are integral to our designs. We engineer for safe extremes.",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "Our systems are designed for long-term stability, repeatability, and resilience—quietly embedded into larger setups, delivering consistent performance over years of operation.",
  },
  {
    icon: Users,
    title: "Partnerships Over Transactions",
    description:
      "We believe enduring systems are built through collaboration. We work closely with our partners to adapt designs, support deployments, and ensure long-term performance.",
  },
];

// 5. SUB-PAGES NAVIGATION DATA
const subPages = [
  { name: "About Us", path: "/about", icon: Info },
  { name: "Awards and Recognition", path: "/about/awards", icon: Award },
  { name: "News & Events", path: "/about/news", icon: Calendar },
  { name: "Careers", path: "/about/careers", icon: Briefcase },
  { name: "Product Videos", path: "/about/product-videos", icon: Video },
  { name: "Intern with Us", path: "/about/intern", icon: GraduationCap },
];

// 6. ANIMATION VARIANTS
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// 7. ADVANCED RESEARCH DATA FROM IMAGE
const advancedResearchGrid = [
  { title: "Quantum Materials Research", icon: Atom },
  { title: "Magnetic Materials Characterization", icon: Magnet },
  { title: "Superconductivity Studies", icon: Activity },
  { title: "Plasma and Accelerator Research", icon: Aperture },
  { title: "RF and Microwave Research", icon: RadioTower },
  { title: "Advanced Materials Science", icon: Hexagon },
  { title: "Condensed Matter Physics", icon: Grid },
  { title: "Nano Electronic Research", icon: Network },
  { title: "Semiconductor", icon: Cpu },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
const About = () => {
  return (
    <>
      {/* ====== 1. FIXED NAVBAR (always stays at top) ====== */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* ====== 2. SPACER (pushes content down so it doesn't overlap the navbar) ====== */}
      <div className="h-[120px] w-full" />

      <PageTransition>
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
          <main>
            {/* ========================================== */}
            {/* BREADCRUMB – sits below the fixed navbar */}
            {/* ========================================== */}
            <div className="bg-white border-b border-slate-200">
              <div className="container py-3 flex items-center gap-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-[15px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  <ArrowLeft className="h-6 w-3" />
                  Back
                </Link>
                <span className="text-slate-300 font-bold text-[15px]">/</span>
                <span className="text-[15px] font-bold text-primary uppercase tracking-widest">About Us</span>
              </div>
            </div>

            {/* ========================================== */}
            {/* HERO – Merged "About Us" + "Innovators in Quantum & Power" */}
            {/* ========================================== */}
            <section className="relative py-10 lg:py-12 overflow-hidden bg-white border-b border-slate-100">
              <div className="absolute inset-0 z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
              </div>

              <div className="container relative z-10 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase w-fit shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Who We Are
                  </div>

                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    About Us
                  </h1>

                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-primary/30 pl-4 rounded-l-sm">
                      Cryonano is an engineering-led advanced instrumentation company building the core 
                      hardware that modern scientific and industrial systems depend on. We are evolving 
                      from a manufacturer of scientific instruments into a systems engineering company 
                      that delivers complete environments for precision science and advanced applications.
                    </p>

                    <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4">
                      Our expertise bridges demanding markets. For research laboratories, we provide 
                      cryogenic systems, electromagnets, ultraprecise positioning, and quantum 
                      instrumentation that empower scientists to prepare, measure, and characterize 
                      next-generation materials. For industrial applications, we build rugged power 
                      systems—including AC-DC and DC-DC converters, inverters, and intelligent battery 
                      charging systems—that operate quietly, reliably, and continuously at the heart of 
                      complex environments.
                    </p>

                    <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4 font-medium">
                      Every CRYONANO system is built to be embedded seamlessly. Intelligence, monitoring, 
                      and protection are designed directly into the architecture, allowing our hardware 
                      to remain omnipresent without becoming a point of failure. Whether powering critical 
                      infrastructure or enabling quantum discovery, we deliver an integrated engineering 
                      stack, giving customers a single partner from concept to complete system.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* STATS SECTION */}
            {/* ========================================== */}
            <section className="relative py-6 bg-slate-50 border-y border-slate-200">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex justify-center mb-1.5">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <p className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">{stat.value}</p>
                        <p className="text-xs text-slate-600 font-semibold mt-0.5">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* SUPPORTING ADVANCED RESEARCH */}
            {/* ========================================== */}
            <section className="relative py-12 bg-white border-b border-slate-100">
              <div className="container max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1">
                      Supporting <span className="text-primary">Advanced Research</span>
                    </h2>
                    <div className="h-1 w-16 bg-primary rounded-full mb-6" />
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
                      Cryonano works closely with universities, national laboratories, and advanced R&D organizations to
                      translate complex scientific requirements into deployable systems hardware. Our customer base
                      spans leading research institutions across India, Asia, and Europe.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-slate-200 rounded-xl overflow-hidden shadow-sm mt-8">
                    {advancedResearchGrid.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={idx} 
                          className="bg-white border-b border-r border-slate-200 p-4 flex flex-col items-center justify-center gap-2 hover:bg-red-50/80 transition-colors group text-center min-h-[100px]"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                            <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <span className="font-extrabold text-sm md:text-base text-slate-800 uppercase tracking-widest leading-relaxed group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* OUR VALUES */}
            {/* ========================================== */}
            <section className="relative py-10 bg-slate-50 border-y border-slate-200">
              <div className="absolute inset-0 z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
              </div>

              <div className="container relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
                    Our Foundation
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Values</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  {valuesData.map((value, idx) => {
                    const Icon = value.icon;
                    const isEven = idx % 2 === 0;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className={`flex flex-col md:flex-row gap-5 items-start ${
                          isEven ? "" : "md:flex-row-reverse"
                        }`}
                      >
                        <div className="flex items-start gap-4 w-full md:w-auto">
                          <div className="relative flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            {idx < valuesData.length - 1 && (
                              <div className="w-0.5 h-10 bg-primary/20 mt-2 hidden md:block" />
                            )}
                          </div>
                          <div className="md:hidden">
                            <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                              {value.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <h3 className="font-display font-bold text-slate-900 text-base mb-2 hidden md:block">
                            {value.title}
                          </h3>
                          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ========================================== */}
            {/* CORE CAPABILITIES */}
            {/* ========================================== */}
            <section className="relative py-10 bg-white border-b border-slate-100">
              <div className="container">
                <div className="text-center mb-8">
                  <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
                    Expertise
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
                    Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Capabilities</span>
                  </h2>
                  <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                    Our expertise spans four interconnected domains, delivering integrated solutions for the most demanding applications.
                  </p>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className="grid md:grid-cols-2 gap-5"
                >
                  {capabilities.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <motion.div
                        key={cap.title}
                        variants={itemVariants}
                        className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${cap.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                            <Icon className={`h-5 w-5 ${cap.iconColor} relative z-10`} />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-slate-900 group-hover:text-primary transition-colors">
                            {cap.title}
                          </h3>
                        </div>

                        <ul className="space-y-3">
                          {cap.items.map((item, idx) => (
                            <motion.li
                              key={item.text}
                              variants={itemVariants}
                              transition={{ delay: idx * 0.05 }}
                              className="group/item flex flex-col p-3 bg-slate-50 border border-slate-200 rounded-lg hover:bg-white hover:border-primary/30 transition-all duration-300 cursor-default"
                            >
                              <div className="flex items-start gap-2.5">
                                <ChevronRight className={`h-3.5 w-3.5 shrink-0 mt-0.5 text-primary opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
                                <span className="font-bold text-slate-800 group-hover/item:text-primary transition-colors text-sm md:text-base">
                                  {item.text}
                                </span>
                              </div>
                              <p className="h-0 opacity-0 overflow-hidden group-hover/item:h-auto group-hover/item:opacity-100 group-hover/item:mt-1.5 transition-all duration-300 text-sm text-slate-600 pl-6 leading-relaxed font-medium">
                                {item.detail}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* MARKETS WE SERVE */}
            {/* ========================================== */}
            <section className="relative py-8 bg-slate-50 border-y border-slate-200">
              <div className="container">
                <div className="text-center mb-5">
                  <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] mb-1 block">
                    Reach
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-1">
                    Markets We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Serve</span>
                  </h2>
                  <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                    Our solutions deliver precision hardware across mission-critical sectors globally.
                  </p>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto"
                >
                  {markets.map((market) => (
                    <motion.div
                      key={market}
                      variants={itemVariants}
                      className="group px-4 py-2 rounded-lg bg-white border border-slate-200 cursor-default hover:border-primary/40 hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-xs md:text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
                        {market}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* SUB-PAGES NAVIGATION */}
            {/* ========================================== */}
            <section className="relative py-6 bg-white border-y border-slate-200">
              <div className="container">
                <div className="text-center mb-4">
                  <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900">Explore More About Us</h2>
                  <p className="text-sm text-slate-500">Learn more about our journey, achievements, and opportunities.</p>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                >
                  {subPages.map((page) => {
                    const Icon = page.icon;
                    const isCurrent = page.path === "/about";
                    return (
                      <motion.div
                        key={page.name}
                        variants={itemVariants}
                        className={`group relative p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
                          isCurrent
                            ? "bg-primary/5 border-primary/50"
                            : "bg-white border-slate-200 hover:border-primary/30"
                        }`}
                      >
                        <Link to={page.path} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isCurrent ? "bg-primary text-white" : "bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
                          } transition-colors duration-300`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-semibold ${isCurrent ? "text-primary" : "text-slate-700 group-hover:text-primary"} transition-colors duration-300`}>
                            {page.name}
                          </span>
                          {isCurrent && <span className="ml-auto text-[10px] font-bold text-primary">(current)</span>}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* CTA SECTION */}
            {/* ========================================== */}
            <section className="relative py-8 bg-primary/5 border-y border-primary/10">
              <div className="container relative z-10 text-center max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 mx-auto bg-white rounded-xl border border-primary/20 flex items-center justify-center mb-3 shadow-sm">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>

                  <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
                    Ready to accelerate <br />your research?
                  </h2>
                  <p className="text-slate-600 text-sm mb-5 max-w-xl mx-auto">
                    Whether you need custom quantum instruments, cryogenic systems, or aerospace power electronics — our R&D team is ready to help.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <Link to="/products" className="w-full sm:w-auto">
                      <button className="w-full group relative px-6 py-2.5 rounded-lg font-bold text-sm text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center gap-2">
                          Explore Systems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                        />
                      </button>
                    </Link>

                    <Link to="/contact" className="w-full sm:w-auto">
                      <button className="w-full group px-6 py-2.5 rounded-lg font-bold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        Contact Engineering
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default About;