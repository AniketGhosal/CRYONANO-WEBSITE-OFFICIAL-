// import { useEffect, useRef, useState, useCallback } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import {
//   Target, Activity, ThermometerSnowflake, Maximize, Lightbulb,
//   Microscope, Settings, Zap, Network, Box, Cable,
//   MonitorPlay, Sparkles, ShieldCheck, CheckCircle2, ChevronRight,
//   ImageIcon, ArrowLeft
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import { Link } from 'react-router-dom';

// // --- ANIMATION VARIANTS ---
// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// export function ArchivedProductsPage() {
//   const [activeSoftwareTab, setActiveSoftwareTab] = useState(0);

//   const softwareTabs = [
//     { title: "TABBED Control", content: "The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. Provides maximum automation for complex measurements." },
//     { title: "Measurement Modes", content: "Measurements such as ε (B,T,f) or Z, φ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display." },
//     { title: "Data Export", content: "The raw data files can later be processed seamlessly in Origin, MATLAB, and other standard analysis software suites." }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSoftwareTab((prev) => (prev + 1) % softwareTabs.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [softwareTabs.length]);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden">
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* HERO (dark, animated) */}
//       <section className="relative pt-28 pb-20 px-6 text-center z-10 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 border-b border-slate-700">
//         <motion.div
//           animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-full blur-3xl pointer-events-none"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-tl from-purple-900/30 to-pink-900/20 rounded-full blur-3xl pointer-events-none"
//         />
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           className="absolute top-6 left-6 z-20"
//         >
//           <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all group">
//             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//             <span>Back to Home</span>
//           </Link>
//         </motion.div>
//         <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
//             Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Instruments</span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed font-medium">
//             Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research. Explore the technical DNA of our foundational engineering.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ========================================== */}
//       {/* PRODUCT 1: MAGNETODIELECTRIC                */}
//       {/* ========================================== */}
//       <section className="relative z-10 pt-20 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Intro + Collage */}
//           <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
//             <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
//               <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-blue-100/80 text-blue-700 rounded-full shadow-sm">
//                 Archived Module
//               </span>
//               <h3 className="text-4xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">
//                 Magnetodielectric/ Pyroelectric Current Measurement Option for QD PPMS
//               </h3>
//               <div className="prose text-slate-600 font-medium leading-relaxed border-l-4 border-blue-300 pl-6 mb-8">
//                 <p>Using the versatile Quantum Design PPMS, CRYONANO's automated Magneto-dielectric Measurement Module Option enhances the wide measurement capabilities of the PPMS to allow popular AC measurements such as dielectric constant, AC conductivity, Capacitance, Phase information, and Nyquist Plots.</p>
//                 <p>The setup consists of an insert with low noise, guarded electrical wiring connected to an inbuilt breakout box which in turn is connected to an electronic instrument panel. The software controls the given experimental scheme seamlessly.</p>
//               </div>
//             </motion.div>
//             <div className="lg:col-span-7">
//               <div className="grid grid-cols-2 gap-4 h-[450px]">
//                 {[1, 2, 3, 4].map((num) => (
//                   <motion.div
//                     key={num}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     className="bg-slate-200 border border-slate-300 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
//                   >
//                     <ImageIcon className="w-12 h-12 text-slate-400 mb-2" />
//                     <span className="text-slate-500 font-medium text-sm">Image {num}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* KEY FEATURES – replaced with a single elegant text paragraph */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-24 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-lg"
//           >
//             <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
//               <Sparkles className="w-7 h-7 text-blue-600" /> Magnetodielectric System Key Features
//             </h3>
//             <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4 bg-blue-50/30 rounded-2xl p-8 border border-blue-100">
//               <p className="text-lg font-medium">
//                 <span className="font-bold text-blue-800">High Precision</span> — 1 mΩ to 200 MΩ, ΔZ = ±0.05%, Δθ = ±0.03%.<br />
//                 <span className="font-bold text-blue-800">Wide Frequency</span> — 4 Hz to 2 MHz, 10 mHz resolution, 1 ms acquisition speed.<br />
//                 <span className="font-bold text-blue-800">Cryo Optimized</span> — Built‑in cable length compensation and low‑noise wiring.<br />
//                 <span className="font-bold text-blue-800">Flexible Config</span> — In‑plane & out‑of‑plane measurement with respect to magnetic field.
//               </p>
//             </div>
//           </motion.div>

//           {/* TECHNICAL SPECIFICATIONS (Product 1) – enhanced with hover */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 lg:p-16 text-white shadow-xl"
//           >
//             <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
//               <ShieldCheck className="w-8 h-8 text-cyan-400" /> Technical Specifications
//             </h3>
//             <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//               {[
//                 "Enhances the Quantum Design PPMS to perform advanced AC measurements such as dielectric constant, AC conductivity, capacitance, phase information, and Nyquist plots under magnetic fields up to ±16 T and temperatures from 1.9–400 K.",
//                 "Insert with low-noise, guarded electrical wiring connects to a breakout box and instrument panel, controlled via PC software for magnetic field, temperature, and frequency sweeps.",
//                 "Guaranteed accuracy in the range of 1 mΩ to 200 MΩ, with ΔZ = ±0.05% and Δθ = ±0.03%, even under cryogenic and high-field conditions.",
//                 "Operates from 4 Hz to 2 MHz with fine 10 mHz resolution and ultra-fast 1 ms acquisition speed.",
//                 "Built-in cable length compensation ensures reliable measurements at low temperatures.",
//                 "Supports in-plane and out-of-plane configurations relative to applied magnetic fields.",
//                 "Special PCB design allows rapid sample changes and efficient thermalization.",
//                 "Fully automated LabVIEW software enables parameter sweeps, live graphical display, and easy export to Origin/Matlab.",
//                 "What’s Included: Custom insert with BNC connectors, cryogenic coaxial wiring, breakout box, impedance analyzer with Ethernet interface, portable 19-inch rack system, and automation software.",
//                 "Multi-Function Probe: Converts PPMS into a cryostat system with external measurement access via LAN, direct puck connector interface, and high-isolation BNC breakout.",
//                 "TABBED software integrates with PPMS MultiVu for synchronized control of temperature, magnetic field, and frequency. Supports measurements such as ε(B,T,f) or Z, φ(B,T,f), with live visualization and automated workflows."
//               ].map((point, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.05 }}
//                   className="flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
//                 >
//                   <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
//                   <p className="text-slate-200 leading-relaxed">{point}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Architecture Flow (unchanged) */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 relative bg-white rounded-[3rem] p-12 shadow-lg border border-slate-100 text-center overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
//             <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center justify-center gap-3 relative z-10">
//               <Network className="w-8 h-8 text-cyan-500" /> Autonomous Signal Architecture
//             </h3>
//             <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-10">
//               {['Insert', 'Breakout Box', 'Instrument Rack', 'Control Software', 'PPMS'].map((step, i) => (
//                 <div key={i} className="flex flex-col md:flex-row items-center gap-4 group">
//                   <motion.div
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     className="px-6 py-4 bg-white rounded-2xl shadow-md border-b-4 border-cyan-400 text-slate-700 font-bold hover:bg-cyan-50 hover:text-cyan-900 transition-all cursor-default"
//                   >
//                     {step}
//                   </motion.div>
//                   {i < 4 && (
//                     <motion.div
//                       animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
//                       transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
//                       className="text-cyan-300 hidden md:block"
//                     >
//                       <ChevronRight className="w-8 h-8" />
//                     </motion.div>
//                   )}
//                   {i < 4 && <ChevronRight className="w-6 h-6 text-cyan-300 md:hidden rotate-90 my-2" />}
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Inclusions & Probe (unchanged) */}
//           <div className="grid md:grid-cols-2 gap-10 mb-24">
//             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group p-10 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
//               <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <Box className="w-8 h-8 text-blue-500" /> What's Included
//               </h4>
//               <ul className="space-y-4 text-slate-600 font-medium">
//                 {['Custom measurement insert with BNC', 'Cryogenic coaxial wiring', 'Integrated breakout box', 'Impedance analyzer + interface', 'Portable 19-inch rack', 'Automation software'].map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
//                     <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="group p-10 bg-gradient-to-br from-slate-900 to-blue-950 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-white">
//               <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//                 <Cable className="w-8 h-8 text-cyan-400" /> Multi-Function Probe
//               </h4>
//               <p className="text-slate-300 leading-relaxed text-lg mb-6">
//                 The setup comes with a multi-function probe option which allows the use of PPMS just as a cryostat with a magnetic field while making the electrical measurements from outside using a separate computer.
//               </p>
//               <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm text-sm text-cyan-100">
//                 Direct access to sample chamber puck connector. Signal accessed from top goes into instrument rack via LAN.
//               </div>
//             </motion.div>
//           </div>

//           {/* Software Auto-Cycling (unchanged) */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl flex flex-col lg:flex-row gap-12">
//             <div className="lg:w-1/3">
//               <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
//                 <MonitorPlay className="w-8 h-8 text-blue-600" /> Software Control
//               </h3>
//               <div className="flex flex-col gap-4">
//                 {softwareTabs.map((tab, idx) => (
//                   <button
//                     key={idx} onClick={() => setActiveSoftwareTab(idx)}
//                     className={`text-left px-6 py-4 rounded-2xl transition-all font-bold ${
//                       activeSoftwareTab === idx
//                         ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 translate-x-2'
//                         : 'bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-700'
//                     }`}
//                   >
//                     {tab.title}
//                     {activeSoftwareTab === idx && (
//                       <motion.div
//                         initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }}
//                         className="h-1 bg-white/30 mt-3 rounded-full"
//                       />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:w-2/3 bg-blue-50/50 rounded-3xl p-10 flex items-center border border-blue-100">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeSoftwareTab}
//                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
//                 >
//                   <h4 className="text-2xl font-bold text-blue-900 mb-4">{softwareTabs[activeSoftwareTab].title}</h4>
//                   <p className="text-slate-600 text-xl leading-relaxed">{softwareTabs[activeSoftwareTab].content}</p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PRODUCT 2: UV MASK ALIGNER */}
//       <section className="relative z-10 py-24 bg-gradient-to-b from-white to-purple-50/40 border-t border-slate-200">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
//             <span className="px-6 py-2 text-xs font-bold tracking-widest uppercase bg-purple-100/80 text-purple-700 rounded-full shadow-sm">
//               Archived Lithography System
//             </span>
//             <h2 className="text-5xl font-extrabold mt-8 mb-6 bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
//               UV Mask Aligner — Model CN500
//             </h2>
//           </motion.div>

//           {/* Split Layout (unchanged) */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
//               <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1000" alt="UV Lithography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
//               <div className="absolute bottom-10 left-10 right-10">
//                 <h3 className="text-3xl font-bold text-white mb-2">High-Precision Nanofabrication</h3>
//                 <p className="text-purple-200 font-medium">Compact UV Lithography for Research & Prototyping</p>
//               </div>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//               <div className="prose text-slate-600 text-lg font-medium leading-relaxed">
//                 <p className="mb-6">Photolithography and mask aligners are part of a process called nanofabrication. It is a process by which a series of thin layers of different materials can be patterned to a desired shape. Lithographic techniques have played a central role in the advancement of semiconductor process technologies.</p>
//                 <p>MODEL CN500 MASK ALIGNER developed by CRYONANO is a state of the art system developed with highest quality at extremely low cost. It is completely UV LED based with automatic vacuum and Mask holding controls.</p>
//               </div>
//               <div className="mt-10 flex gap-6">
//                 <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
//                   <span className="block text-3xl font-black text-purple-600 mb-1">1 µm</span>
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resolution</span>
//                 </div>
//                 <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
//                   <span className="block text-3xl font-black text-purple-600 mb-1">100 mm</span>
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Max Wafer Size</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* KEY FEATURES – different pattern: horizontal rows with left border accent */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-24 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-lg"
//           >
//             <h3 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-center gap-3">
//               <Sparkles className="w-7 h-7 text-purple-600" /> System Features & Parameters
//             </h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {[
//                 { icon: Lightbulb, title: "Advanced UV-LED Optics", desc: "No complex, high voltage power supply. Almost monochromatic radiation ensures uniformity in deposition." },
//                 { icon: Zap, title: "Instant Operation", desc: "No waiting time after switching on, operation can be done immediately. Very fast response time." },
//                 { icon: Microscope, title: "High Precision Alignment", desc: "High precision X-Y-Z-θ aligner. High resolution microscope (Eye piece: 10x | Objective: 4x, 10x & 20x)." },
//                 { icon: Settings, title: "Automation Control", desc: "Permits precise, accurate electronic control on the exposure time and power." }
//               ].map((feature, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="flex gap-4 items-start p-4 rounded-xl border-l-4 border-purple-200 hover:border-purple-500 bg-purple-50/20 hover:bg-purple-50 transition-all duration-300"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1">
//                     <feature.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-slate-800 text-lg mb-1">{feature.title}</h4>
//                     <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* TECHNICAL SPECIFICATIONS (Product 2) – restyled dark professional, with hover */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-24 bg-gradient-to-br from-slate-800 to-indigo-950 rounded-[3rem] p-10 lg:p-16 text-white shadow-xl"
//           >
//             <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
//               <ShieldCheck className="w-8 h-8 text-purple-300" /> Technical Specifications
//             </h3>
//             <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
//               {[
//                 "Semi-automatic UV mask aligner designed for research and small-scale fabrication, enabling precise nanofabrication with UV-LED technology at low cost and high efficiency.",
//                 "High-intensity UV-LED system eliminates the need for mercury lamps, ensuring uniform exposure and eco-friendly operation.",
//                 "No warm-up time required — ready for immediate use after switching on.",
//                 "Supports wafers up to 100 mm (4 inch) and smaller substrates with a dedicated chuck.",
//                 "High-precision X-Y-Z-θ aligner with microscope (10x eyepiece, 4x/10x/20x objectives) ensures accurate mask positioning.",
//                 "Capable of producing features down to 1 µm, ideal for advanced research and prototyping.",
//                 "Lightweight design with fast response time and minimal infrastructure requirements.",
//                 "No mercury toxicity risk, reduced UV hazards, minimal stray radiation, and only 0.5% of the power consumption compared to Hg-vapor systems.",
//                 "Automated vacuum, mask holding, and UV exposure with accurate control of exposure time and power.",
//                 "Approximately one-fourth the cost of traditional Hg-based systems, with reduced maintenance and infrastructure."
//               ].map((point, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.05 }}
//                   className="flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
//                 >
//                   <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
//                   <p className="text-slate-200 leading-relaxed">{point}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Metric Advantages (unchanged) */}
//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
//               <span className="block text-6xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">~4×</span>
//               <h4 className="text-xl font-bold mb-2">Lower Cost System</h4>
//               <p className="text-slate-400 text-sm">Price is almost one-fourth compared to traditional Hg-based systems.</p>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
//               <span className="block text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4">&lt;0.5%</span>
//               <h4 className="text-xl font-bold mb-2">Power Consumption</h4>
//               <p className="text-slate-400 text-sm">Requires less than 0.5% of the power required for Hg-vapor lamps.</p>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900 text-white rounded-[2rem] p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500">
//               <span className="block text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">Zero</span>
//               <h4 className="text-xl font-bold mb-2">Hg-Vapor Toxicity</h4>
//               <p className="text-slate-400 text-sm">Environment friendly. Less hazardous from high frequency UV radiation.</p>
//             </motion.div>
//           </div>

//           <p className="text-center text-rose-500 font-bold mt-16 max-w-2xl mx-auto bg-rose-50 py-4 px-6 rounded-full border border-rose-100">
//             This product is part of CRYONANO's archived portfolio. For upgraded lithography systems, contact our team.
//           </p>
//         </div>
//       </section>

//       <div className="relative z-50">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ArchivedProductsPage;




import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Box,
  Cable,
  MonitorPlay,
  Network,
  ChevronRight,
  ImageIcon,
  Activity,
  ThermometerSnowflake,
  Zap,
  Settings,
  Microscope,
  Lightbulb,
  Award,
  Users,
  Globe,
  Mail,
  FileText,
  Layers,
  Cpu,
  Target
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

// ==========================================
// PLACEHOLDER IMAGE COMPONENT
// ==========================================
// const ImagePlaceholder = ({ caption, className = "" }: { caption: string; className?: string }) => (
//   <div className={`relative bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 transition-all hover:border-primary/40 hover:bg-slate-50 ${className}`}>
//     <ImageIcon className="w-16 h-16 text-slate-400 mb-4" />
//     <span className="text-sm font-medium text-slate-500">{caption}</span>
//     <span className="text-xs text-slate-400 mt-1">(Image placeholder – replace with actual asset)</span>
//   </div>
// );
const ImagePlaceholder = ({ caption, className = "" }: { caption: string; className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center p-8 transition-all ${className}`}>
    <ImageIcon className="w-16 h-16 text-slate-300 mb-4" />
    <span className="text-sm font-medium text-slate-400">{caption}</span>
    <span className="text-xs text-slate-300 mt-1">(Image placeholder – replace with actual asset)</span>
  </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export function ArchivedProductsPage() {
  const [activeSoftwareTab, setActiveSoftwareTab] = useState(0);

  const softwareTabs = [
    {
      title: "TABBED Control",
      content: "The TABBED software provided with the system communicates with the PPMS MultiVu software for controlling its Temperature and Magnetic Field while measuring various parameters with the impedance analyzer in a larger phase space. Provides maximum automation for complex measurements."
    },
    {
      title: "Measurement Modes",
      content: "Measurements such as ε (B,T,f) or Z, φ (B,T,f) can be quickly measured using the TABBED program making it easy to use with live graphical display."
    },
    {
      title: "Data Export",
      content: "The raw data files can later be processed seamlessly in Origin, MATLAB, and other standard analysis software suites."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSoftwareTab((prev) => (prev + 1) % softwareTabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [softwareTabs.length]);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section className="relative pt-20 pb-16 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-4 left-4 z-20"
        >
          <Link to="/" className="flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group text-xs">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm">
            <FileText className="w-3 h-3" /> Archived Instruments
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Archived <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Products</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Legacy CRYONANO systems that contributed to breakthroughs in quantum and cryogenic research.
            Explore the technical DNA of our foundational engineering.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* PRODUCT 1: MAGNETODIELECTRIC MEASUREMENT   */}
      {/* ========================================== */}
      <section className="relative z-10 py-12 lg:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="mb-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <span className="px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                Archived Module
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              Magnetodielectric / Pyroelectric Current Measurement Option
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-medium mt-1">
              Enhance Your PPMS with Advanced AC Measurements Under Extreme Conditions
            </motion.p>
          </motion.div>

          {/* Overview & Image Placeholder */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed">
                Precise magnetodielectric and pyroelectric characterization across wide ranges of temperature, magnetic field, and frequency — fully automated and research-ready.
              </motion.p>
              <motion.div variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h4 className="font-bold text-slate-800 text-sm mb-2">Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Magnetodielectric / Pyroelectric Measurement Option enhances the capabilities of the Quantum Design PPMS, enabling advanced AC electrical characterization in extreme environments.
                  Researchers can measure dielectric constant, AC conductivity, capacitance, phase, and Nyquist plots as a function of:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>• Magnetic Field (±16 T)</li>
                  <li>• Temperature (1.9 K – 400 K)</li>
                  <li>• Frequency (4 Hz – 2 MHz)</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* <ImagePlaceholder caption="Magnetodielectric Measurement System" className="h-64" /> */}
              <img
                src="/images/archived/image1.png"
                alt="Magnetodielectric Measurement System"
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "High Precision Measurement", desc: "Range: 1 mΩ to 200 MΩ • ΔZ = ±0.05% • Δθ = ±0.03%" },
                { title: "Wide Frequency Capability", desc: "4 Hz to 2 MHz • 10 mHz resolution • 1 ms acquisition speed" },
                { title: "Cryogenic Optimization", desc: "Built-in cable length compensation • Low-noise coaxial wiring" },
                { title: "Flexible Configurations", desc: "In-plane & out-of-plane measurements • Magnetic field orientation compatibility" },
                { title: "User-Friendly Operation", desc: "Quick sample mounting PCB • Fast thermalization • Fully automated LabVIEW software" }
              ].map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{feat.title}</h4>
                    <p className="text-xs text-slate-500">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Network className="w-5 h-5 text-primary" /> System Architecture
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Insert', 'Breakout Box', 'Instrument Rack', 'Control Software', 'PPMS'].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 shadow-sm">{step}</span>
                  {i < 4 && <ChevronRight className="w-4 h-4 text-slate-400" />}
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-1 text-sm text-slate-600 list-disc pl-5">
              <li>Guarded cryogenic wiring ensures low-noise measurements</li>
              <li>Ethernet-enabled instrument communication</li>
              <li>Seamless integration with PPMS control systems</li>
            </ul>
          </motion.div>

          {/* What's Included + Multi-Function Probe */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Box className="w-5 h-5 text-primary" /> What's Included
              </h4>
              <ul className="space-y-2">
                {['Custom measurement insert with BNC connectors', 'Cryogenic coaxial wiring', 'Integrated breakout box', 'Impedance analyzer + interface hardware', 'Portable 19-inch rack system', 'Automation & acquisition software'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Cable className="w-5 h-5 text-primary" /> Multi-Function Probe
              </h4>
              <p className="text-sm text-slate-600 mb-3">Convert your PPMS into a flexible cryostat system:</p>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• External measurement access via LAN</li>
                <li>• Direct puck connector interface</li>
                <li>• High-isolation BNC breakout</li>
                <li>• Compatible with custom instrumentation setups</li>
              </ul>
            </motion.div>
          </div>

          {/* Software & Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <MonitorPlay className="w-5 h-5 text-primary" /> Software & Control
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {softwareTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSoftwareTab(idx)}
                  className={`text-left px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                    activeSoftwareTab === idx
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {tab.title}
                  {activeSoftwareTab === idx && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      className="h-0.5 bg-white/30 mt-2 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSoftwareTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <p className="text-sm text-slate-700 leading-relaxed">{softwareTabs[activeSoftwareTab].content}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" /> Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Magnetodielectric studies', 'Pyroelectric measurements', 'Multiferroics research', 'Low-temperature impedance spectroscopy', 'Frequency-dependent transport studies'].map((app, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  {app}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Archival Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5"
          >
            <p className="text-sm text-slate-700 font-medium">
              <span className="font-extrabold text-primary">Archival Note:</span> This product is part of CRYONANO's archived instrumentation portfolio. For next-generation solutions or custom configurations, please contact our team.
            </p>
          </motion.div>

          {/* Separator */}
          <div className="my-16 border-t border-slate-200">
            <div className="flex items-center gap-4 mt-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Next Product
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* PRODUCT 2: UV MASK ALIGNER CN500          */}
      {/* ========================================== */}
      <section className="relative z-10 py-12 lg:py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="mb-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <span className="px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                Archived Lithography System
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              UV Mask Aligner – Model CN500
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-medium mt-1">
              Compact, High-Precision UV Lithography for Research & Prototyping
            </motion.p>
          </motion.div>

          {/* Overview & Image Placeholder */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed">
                A semi-automatic UV mask aligner designed for nanofabrication, offering high-resolution patterning with low cost, low power consumption, and fast operation.
              </motion.p>
              <motion.div variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h4 className="font-bold text-slate-800 text-sm mb-2">Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The CN500 UV Mask Aligner is a semi-automatic photolithography system designed for research laboratories and small-scale fabrication environments.
                  Photolithography is a key process in nanofabrication, enabling precise patterning of thin material layers for semiconductor devices and advanced materials research. The CN500 delivers high performance using UV-LED technology, eliminating the need for complex and hazardous mercury-based systems.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* <ImagePlaceholder caption="UV Mask Aligner CN500" className="h-64" /> */}
              <img
                src="/images/archived/image2.png"
                alt="UV Mask Aligner CN500"
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Key Features & Parameters
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: "Advanced UV-LED System", desc: "High-intensity UV-LED optics • No high-voltage power supply • Instant ON/OFF – no warm-up time" },
                { icon: Microscope, title: "High Precision Alignment", desc: "X-Y-Z-θ precision aligner • High-resolution microscope (Eyepiece: 10x, Objectives: 4x, 10x, 20x) • Patterning resolution down to 1 µm" },
                { icon: Target, title: "Substrate Compatibility", desc: "Supports wafers up to 100 mm (4 inch) • Dedicated chuck for smaller substrates" },
                { icon: Settings, title: "Automation & Control", desc: "Automatic vacuum and mask holding • Automated UV exposure system • Precise electronic control of exposure time and power" }
              ].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{feat.title}</h4>
                      <p className="text-xs text-slate-500">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Performance Advantages, Safety, Cost, Capabilities – in a 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" /> Performance Advantages
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> No waiting time after power-on – immediate processing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Fast response time for rapid prototyping</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Consumes &lt;0.5% power compared to Hg-vapor systems</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Compact, portable, space-efficient design</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Easy to install and operate – no complex infrastructure</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Safety & Environmental Benefits
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> No mercury vapor – eliminates toxicity risks</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Reduced exposure to hazardous UV radiation</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Minimal stray radiation after shutdown</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Environment‑friendly operation</li>
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" /> Cost Advantage
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Approximately 4x lower cost compared to traditional Hg-based mask aligners</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Reduced maintenance and infrastructure requirements</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" /> System Capabilities
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> High-resolution photolithography (down to 1 µm)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Uniform exposure due to near-monochromatic UV source</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Rapid device prototyping and fabrication</li>
              </ul>
            </motion.div>
          </div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" /> Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Semiconductor device fabrication', 'MEMS and microfabrication', 'Thin film patterning', 'Academic and research labs', 'Rapid prototyping environments'].map((app, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  {app}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Archival Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5"
          >
            <p className="text-sm text-slate-700 font-medium">
              <span className="font-extrabold text-primary">Archival Note:</span> This product is part of CRYONANO's archived instrumentation portfolio. For upgraded lithography systems or custom solutions, please contact our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CTA SECTION */}
      {/* ========================================== */}
      <section className="relative z-10 py-12 bg-primary/5 border-t border-primary/10">
        <div className="container text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 mx-auto bg-white rounded-xl border border-primary/20 flex items-center justify-center mb-4 shadow-sm">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              Looking for Next-Generation Solutions?
            </h2>
            <p className="text-slate-600 text-base mb-5 max-w-xl mx-auto">
              Our team is ready to help you with upgraded instruments and custom configurations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                  Explore Current Products
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary text-slate-700 font-extrabold text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ArchivedProductsPage;