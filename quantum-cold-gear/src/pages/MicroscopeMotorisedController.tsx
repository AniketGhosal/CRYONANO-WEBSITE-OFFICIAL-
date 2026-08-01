// import { useState, useEffect, useRef } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   ArrowLeft, ArrowRight, Download, Phone, Mail, SlidersHorizontal, Map, 
//   Target as Reticle, Focus, CheckCircle2, Layers, Cpu, Wrench, 
//   Settings, Activity, Zap, ChevronRight, Binary, Target, ShieldCheck,
//   ArrowLeftCircle, ArrowRightCircle
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { productsData } from "@/data/products";

// // ==========================================
// // 1. FORMAL TELEMETRY (formal graphics, varied clinical palette)
// // ==========================================
// const MicroscopeTelemetry = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.1 }}
//       className="w-full bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden font-sans flex flex-col relative"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_2px,transparent_2px)] bg-[size:24px_24px] pointer-events-none" />
      
//       <div className="bg-slate-50 border-b border-slate-200 px-8 py-5 flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
//           <span className="text-slate-600 text-xs font-extrabold tracking-widest uppercase font-mono">Formal diagnostics</span>
//         </div>
//         <div className="flex gap-4">
//           <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-1 rounded shadow-sm">CLOSED LOOP</span>
//           <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100 border border-blue-200 px-2 py-1 rounded shadow-sm">XYZ LOCKED</span>
//         </div>
//       </div>

//       <div className="p-8 grid lg:grid-cols-3 gap-8 relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        
//         {/* GRAPH 1: Live Focus Intensity */}
//         <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pb-8 lg:pb-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-emerald-500 text-xs font-extrabold uppercase tracking-widest mb-1">Formal Diagnostics</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Active Focus</p>
//             </div>
//             <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100"><Focus className="w-6 h-6 text-emerald-500" /></div>
//           </div>
          
//           <div className="flex-grow w-full h-48 mt-2 border-l-2 border-b-2 border-slate-200 relative">
//             <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
//               <motion.path 
//                 d="M 0 180 Q 50 180, 100 170 T 200 170 T 300 170 Q 320 170, 330 100 T 340 30 T 350 100 Q 360 170, 400 170" 
//                 fill="none" stroke="#10b981" strokeWidth="4" 
//                 animate={{ strokeDashoffset: [0, 800, 0] }} 
//                 strokeDasharray="10 10"
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               />
//               <path d="M 0 180 Q 50 180, 100 170 T 200 170 T 300 170 Q 320 170, 330 100 T 340 30 T 350 100 Q 360 170, 400 170 L 400 200 L 0 200 Z" fill="rgba(16, 185, 129, 0.1)"/>
//             </svg>
//             <div className="absolute top-0 -left-12 transform -translate-y-full origin-bottom-right -rotate-90 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Focus Found</div>
//             <div className="absolute top-2 right-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded shadow-sm border border-emerald-100">Score Found (Z=450µm)</div>
//             <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Z-Displacement (µm)</div>
//           </div>
//         </div>

//         {/* GRAPH 2: Wafer minimap Relocation Monitor */}
//         <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden py-8 lg:py-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-blue-500 text-xs font-extrabold uppercase tracking-widest mb-1">Grid Navigation</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Relocation Map</p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100"><Map className="w-6 h-6 text-blue-500" /></div>
//           </div>
          
//           <div className="flex-grow flex items-center justify-center w-full h-48 mt-2 bg-slate-50 border-2 border-slate-100 rounded-xl relative overflow-hidden">
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_2px,transparent_2px),linear-gradient(to_bottom,#e2e8f0_2px,transparent_2px)] bg-[size:16.66%_16.66%]" />
//             <Reticle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-slate-300 opacity-50" />
            
//             <motion.div 
//               className="absolute w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)] border-2 border-white z-20"
//               animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], rotate: [0, 45, -45, 0] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <Reticle className="w-2.5 h-2.5 text-white" />
//             </motion.div>
//             <div className="absolute bottom-2 left-2 text-[10px] font-bold text-blue-700 bg-white px-2 py-1 rounded shadow-sm border border-blue-100">Confirmed (Grid A4)</div>
//             <div className="absolute top-1 left-1 text-[10px] font-bold text-slate-400 font-mono">A</div>
//             <div className="absolute top-1 left-[16.66%] text-[10px] font-bold text-slate-400 font-mono">B</div>
//             <div className="absolute top-1 right-[16.66%] text-[10px] font-bold text-slate-400 font-mono">C</div>
//           </div>
//         </div>

//         {/* DATA 3: Real-Time Coordinate Counters */}
//         <div className="px-0 lg:px-6 relative flex flex-col shadow-inner overflow-hidden pt-8 lg:pt-0">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <p className="text-amber-500 text-xs font-extrabold uppercase tracking-widest mb-1">Encoded Feedback</p>
//               <p className="text-2xl font-extrabold text-slate-900 tracking-tight">&lt; 50nm Res.</p>
//             </div>
//             <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100"><SlidersHorizontal className="w-6 h-6 text-amber-500" /></div>
//           </div>
          
//           <div className="flex-grow flex flex-col justify-center gap-3 w-full h-48 mt-2">
//             {[ {label: 'X (mm)', value: [0, 24.3821, -12.9431, 0]}, {label: 'Y (mm)', value: [0, -15.2234, 18.0022, 0]}, {label: 'Z (µm)', value: [0, 1000.5, 450.2, 0]} ].map((coord, i) => (
//               <div key={i} className="bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl flex items-center justify-between transition-colors duration-500 hover:border-amber-200">
//                 <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">{coord.label}</span>
//                 <motion.span 
//                   animate={{ opacity: [1, 0.5, 1] }}
//                   transition={{ duration: 4, repeat: Infinity, times: [0.1, 0.15, 0.2], delay: i * 0.3 }}
//                   className="text-xl font-black text-slate-900 font-mono"
//                 >
//                   {coord.value[1]} 
//                 </motion.span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 2. CAPABILITIES TRIPTYCH
// // ==========================================
// const CapabilitiesTriptych = ({ features }: { features: string[] }) => {
//   if (!features) return null;
//   const categories = [ 
//     { title: "Positioning Excellence", desc: features[0] || "Sub-micron positioning capability", color: "emerald", icon: Target }, 
//     { title: "Movement Integrity", desc: features[1] || "Closed-loop electronic feedback", color: "blue", icon: Activity }, 
//     { title: "System Reliability", desc: features[2] || "Compact, integration-ready design", color: "amber", icon: ShieldCheck } 
//   ];

//   return (
//     <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto py-8">
//       {categories.map((cat, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.1 }}
//           transition={{ duration: 0.5, delay: i * 0.1 }}
//           className={`bg-white border border-slate-200 rounded-3xl p-8 shadow-sm group hover:border-${cat.color}-300 hover:shadow-md transition-all duration-300 flex flex-col gap-4`}
//         >
//           <div className={`w-12 h-12 rounded-xl bg-${cat.color}-50 text-${cat.color}-600 flex items-center justify-center shrink-0 border border-${cat.color}-100`}>
//              <cat.icon className="w-6 h-6"/>
//           </div>
//           <div>
//             <h4 className="text-xl font-extrabold text-slate-900 mb-2">{cat.title}</h4>
//             <p className="text-sm text-slate-600 font-medium leading-relaxed">{cat.desc}</p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// // ==========================================
// // 3. MOTION CONTROL & ACCURACY (HORIZONTAL ROWS PATTERN)
// // ==========================================
// const AnimatedMotionGrid = ({ motionControl }: { motionControl: any }) => {
//   if (!motionControl) return null;
//   // const sections = [ 
//   //   { title: "Positioning Performance", icon: Target, color: "emerald", list: motionControl.performance }, 
//   //   { title: "Motion Modes", icon: SlidersHorizontal, color: "blue", list: motionControl.modes }, 
//   //   { title: "Controller Electronics", icon: Cpu, color: "amber", list: motionControl.electronics?.items || [], desc: motionControl.electronics?.description } 
//   // ];



//   const sections = [ 
//     { 
//       title: "Positioning Performance", 
//       icon: Target, 
//       color: "emerald", 
//       list: motionControl.performance,
//       desc: "Engineered for stable long-term operation, ensuring consistent positioning performance across repeated cycles." // Added explanation
//     }, 
//     { 
//       title: "Motion Modes", 
//       icon: SlidersHorizontal, 
//       color: "blue", 
//       list: motionControl.modes,
//       desc: "Programmable multi-mode operation optimized for alignment, continuous scanning, and synchronized tasks." // Added explanation
//     }, 
//     { 
//       title: "Controller Electronics", 
//       icon: Cpu, 
//       color: "amber", 
//       list: motionControl.electronics?.items || [], 
//       desc: motionControl.electronics?.description 
//     } 
//   ];

//   return (
//     <div className="flex flex-col gap-8 pt-8 max-w-6xl mx-auto">
//       {sections.map((section, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7, delay: i * 0.1 }}
//           className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-500"
//         >
//           {/* Animated Header Section (Left Side) */}
//           <div className={`md:w-1/3 p-8 bg-slate-50 border-r border-slate-100 flex flex-col justify-center relative overflow-hidden`}>
//             {/* Auto-animated background sweeps */}
//             <motion.div 
//               animate={{ x: ["-100%", "200%"] }} 
//               transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 1.5 }} 
//               className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-${section.color}-100/50 to-transparent skew-x-12`} 
//             />
            
//             <div className={`w-14 h-14 rounded-2xl bg-white text-${section.color}-500 flex items-center justify-center shrink-0 border border-slate-200 mb-6 relative z-10 shadow-sm`}>
//               <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
//                 <section.icon className="w-7 h-7"/>
//               </motion.div>
//             </div>
//             <h3 className="text-2xl font-extrabold text-slate-900 relative z-10">{section.title}</h3>
//             {section.desc && <p className="text-xs text-slate-500 mt-3 font-bold relative z-10">{section.desc}</p>}
//           </div>
          
//           {/* Animated Data Grid (Right Side) */}
//           <div className="md:w-2/3 p-8 flex items-center">
//             {/* <motion.ul 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//               className="grid sm:grid-cols-2 gap-x-8 gap-y-3 w-full"
//             > */}


//             <motion.ul 
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//               className="grid sm:grid-cols-2 gap-x-8 gap-y-3 content-center w-full"
//             >
//               {section.list.map((item: string, j: number) => (
//                 <motion.li 
//                   key={j} 
//                   variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} 
//                   className="flex items-start gap-3 text-slate-700 font-bold text-base leading-relaxed"
//                 >
//                   <motion.div 
//                     animate={{ scale: [1, 1.3, 1] }} 
//                     transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }} 
//                     className={`w-2 h-2 rounded-full bg-${section.color}-500 shrink-0 mt-1.5`}
//                   />
//                   {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };


// // // ==========================================
// // // 4. ENGINEERED STABILITY (IMAGE 2 DATA)
// // // ==========================================
// // const EngineeredStability = ({ architecture }: { architecture: any }) => {
// //   if (!architecture) return null;

// //   const hoverVariants = {
// //     hover: {
// //       scale: 1.02,
// //       transition: {
// //         duration: 0.3,
// //         ease: "easeInOut",
// //         when: "beforeChildren", 
// //         staggerChildren: 0.1 
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col gap-10 max-w-6xl mx-auto">
      
// //       {/* Top Animated Hub (Horizontal Pattern) */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         whileInView={{ opacity: 1, scale: 1 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //         className="w-full h-40 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm flex items-center justify-around relative overflow-hidden"
// //       >
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:20px_20px]" />
        
// //         {/* Animated Connecting Lines */}
// //         <div className="absolute h-1 bg-slate-100 w-full top-1/2 -translate-y-1/2 left-0 z-0" />
// //         <motion.div 
// //           animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }} 
// //           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
// //           className="absolute h-1 bg-emerald-400 top-1/2 -translate-y-1/2 z-0" 
// //         />

// //         {/* 3 Animated Nodes */}
// //         <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-emerald-100 flex items-center justify-center shadow-md">
// //           <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}><Wrench className="w-8 h-8 text-emerald-500" /></motion.div>
// //         </div>
// //         <div className="z-10 w-24 h-24 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center shadow-lg relative">
// //            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-blue-200 rounded-full" />
// //            <Layers className="w-10 h-10 text-blue-500" />
// //         </div>
// //         <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-md">
// //           <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Settings className="w-8 h-8 text-slate-500" /></motion.div>
// //         </div>
// //       </motion.div>

// //       {/* Bottom Side-by-Side Cards (Horizontal Pattern) */}
// //       <div className="grid md:grid-cols-2 gap-8">
// //         {[ {title: "Mechanical Construction", icon: Wrench, color: "emerald", list: architecture.mechanical}, {title: "Modular Integration", icon: Layers, color: "blue", list: architecture.modular}].map((card, i) => (
// //           <motion.div 
// //             key={i}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: i * 0.2 }}
// //             variants={hoverVariants} 
// //             whileHover="hover" 
// //             className={`rounded-3xl p-8 lg:p-10 shadow-sm transition-colors border transition-all duration-300 ${
// //               card.color === 'emerald' 
// //                 ? 'bg-slate-50 border-slate-200 hover:bg-emerald-50 hover:border-emerald-200' 
// //                 : 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-200'
// //             }`}
// //           >
// //             <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
// //               <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
// //                 <card.icon className={`w-6 h-6 text-${card.color}-600`} />
// //               </div>
// //               <h3 className="text-2xl font-extrabold text-slate-900">{card.title}</h3>
// //             </div>
// //             <ul className="space-y-4">
// //               {card.list.map((item: string, j: number) => (
// //                 <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
// //                   <CheckCircle2 className={`w-5 h-5 text-${card.color}-500 shrink-0 mt-0.5`} />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };


// // ==========================================
// // 4. ENGINEERED STABILITY (IMAGE 2 DATA)
// // ==========================================
// const EngineeredStability = ({ architecture }: { architecture: any }) => {
//   if (!architecture) return null;

//   // FIX 1: Added "as const" to fix the TypeScript strict typing error
//   const hoverVariants = {
//     hover: {
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut" as const,
//         when: "beforeChildren" as const, 
//         staggerChildren: 0.1 
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col gap-10 max-w-6xl mx-auto">
      
//       {/* Top Animated Hub (Horizontal Pattern) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="w-full h-40 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm flex items-center justify-around relative overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:20px_20px]" />
        
//         {/* Animated Connecting Lines */}
//         <div className="absolute h-1 bg-slate-100 w-full top-1/2 -translate-y-1/2 left-0 z-0" />
//         <motion.div 
//           animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }} 
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
//           className="absolute h-1 bg-emerald-400 top-1/2 -translate-y-1/2 z-0" 
//         />

//         {/* 3 Animated Nodes */}
//         <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-emerald-100 flex items-center justify-center shadow-md">
//           <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}><Wrench className="w-8 h-8 text-emerald-500" /></motion.div>
//         </div>
//         <div className="z-10 w-24 h-24 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center shadow-lg relative">
//            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 border-2 border-blue-200 rounded-full" />
//            <Layers className="w-10 h-10 text-blue-500" />
//         </div>
//         <div className="z-10 w-20 h-20 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-md">
//           <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Settings className="w-8 h-8 text-slate-500" /></motion.div>
//         </div>
//       </motion.div>

//       {/* Bottom Side-by-Side Cards (Horizontal Pattern) */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {[ {title: "Mechanical Construction", icon: Wrench, color: "emerald", list: architecture.mechanical}, {title: "Modular Integration", icon: Layers, color: "blue", list: architecture.modular}].map((card, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             variants={hoverVariants} 
//             whileHover="hover" 
//             // FIX 2: Removed "transition-colors" to fix the Tailwind CSS conflict warning
//             className={`rounded-3xl p-8 lg:p-10 shadow-sm border transition-all duration-300 ${
//               card.color === 'emerald' 
//                 ? 'bg-slate-50 border-slate-200 hover:bg-emerald-50 hover:border-emerald-200' 
//                 : 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-200'
//             }`}
//           >
//             <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
//               <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
//                 <card.icon className={`w-6 h-6 text-${card.color}-600`} />
//               </div>
//               <h3 className="text-2xl font-extrabold text-slate-900">{card.title}</h3>
//             </div>
//             <ul className="space-y-4">
//               {card.list.map((item: string, j: number) => (
//                 <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
//                   <CheckCircle2 className={`w-5 h-5 text-${card.color}-500 shrink-0 mt-0.5`} />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };


// // ==========================================
// // 5. SCALABLE INTEGRATION (Network & Marquee Pattern)
// // ==========================================
// const ScalableIntegrationPattern = ({ integration, applications }: { integration: any, applications: string[] }) => {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   const scrollMarquee = (direction: 'left' | 'right') => {
//     if (marqueeRef.current) {
//       const scrollAmount = 400; 
//       const newScrollPos = direction === 'left' 
//         ? marqueeRef.current.scrollLeft - scrollAmount
//         : marqueeRef.current.scrollLeft + scrollAmount;

//       marqueeRef.current.scrollTo({
//         left: newScrollPos,
//         behavior: 'smooth' 
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-8 max-w-6xl mx-auto pt-8">
//       {/* Network Grid for Features */}
//       <div className="relative">
//         <h3 className="text-xl font-extrabold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
//           <Binary className="w-6 h-6 text-emerald-600" /> Integration Capabilities
//         </h3>
//         <div className="flex flex-wrap justify-center gap-4 relative z-10">
//           {integration?.features.map((feature: string, i: number) => (
//             <motion.div 
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white border border-emerald-200 px-6 py-4 rounded-2xl shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
//             >
//               <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
//               <span className="text-sm font-bold text-slate-700">{feature}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Applications Section with Interactive Marquee Controls */}
//       <div className="relative w-full bg-slate-50 border-y border-slate-200 py-10 flex flex-col group">
        
//         {/* Combined Header/Navigation Container */}
//         <div className="container max-w-6xl mx-auto flex items-center justify-between mb-8 px-4 w-full">
//           <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
//             <Map className="w-6 h-6 text-blue-600" /> Target Applications
//           </h3>
          
//           <div className="flex gap-3 text-blue-600">
//             {/* Left Button */}
//             <button 
//               onClick={() => scrollMarquee('left')}
//               className="p-2 bg-white rounded-full shadow-md border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-300" 
//               aria-label="Scroll applications left"
//             >
//               <ArrowLeftCircle className="w-7 h-7" strokeWidth={1.5} />
//             </button>

//             {/* Right Button */}
//             <button 
//               onClick={() => scrollMarquee('right')}
//               className="p-2 bg-white rounded-full shadow-md border border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:scale-110 transition-all duration-300"
//               aria-label="Scroll applications right"
//             >
//               <ArrowRightCircle className="w-7 h-7" strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>
        
//         {/* Applications Container */}
//         <div 
//           ref={marqueeRef}
//           className="flex whitespace-nowrap overflow-hidden hide-scrollbar w-full relative z-10 scroll-smooth" 
//         >
//           <motion.div 
//             animate={{ x: [0, -2000] }} 
//             transition={{ repeat: Infinity, duration: 40, ease: "linear" }} 
//             className="flex gap-4 shrink-0 px-4"
//           >
//             {applications?.concat(applications).map((app: string, i: number) => (
//               <div key={i} className="px-6 py-3 rounded-full bg-white border border-blue-200 text-blue-700 font-bold shadow-sm">
//                 {app}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 6. COMPREHENSIVE SPECS TABS
// // ==========================================
// const ComprehensiveSpecsTabs = ({ specs }: { specs: any }) => {
//   if (!specs) return null;
//   const categories = Object.keys(specs);
//   const [activeTab, setActiveTab] = useState(categories[0]);
  
//   const accentColors = [
//     "border-emerald-200 text-emerald-700 bg-emerald-50", 
//     "border-blue-200 text-blue-700 bg-blue-50", 
//     "border-amber-200 text-amber-700 bg-amber-50",
//     "border-slate-200 text-slate-700 bg-slate-100"
//   ];

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.1 }}
//       transition={{ duration: 0.5 }}
//       className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-10"
//     >
//       <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar lg:w-1/3 shrink-0 pb-2 lg:pb-0">
//         {categories.map((cat, index) => {
//           const colorClass = accentColors[index % accentColors.length];
//           return (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`relative px-5 py-3 text-left rounded-2xl font-bold transition-all duration-300 flex items-center justify-between whitespace-nowrap outline-none ${
//                 activeTab === cat 
//                   ? `${colorClass} shadow-sm border` 
//                   : "text-slate-600 bg-white hover:bg-slate-50 border border-slate-200"
//               }`}
//             >
//               <span className="relative z-10 text-sm">{cat}</span>
//               {activeTab === cat && <ChevronRight className={`w-4 h-4`} />}
//             </button>
//           )
//         })}
//       </div>

//       <div className="lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[350px]">
//         <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
//           <Settings className="w-5 h-5 text-slate-500" />
//           <h3 className="font-display font-extrabold text-slate-900 text-lg">{activeTab} Parameters</h3>
//         </div>
//         <div className="p-6">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 10 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -10 }}
//               transition={{ duration: 0.2 }}
//               className="flex flex-col"
//             >
//               {Object.entries(specs[activeTab] || {}).map(([param, val]: [string, any], i) => (
//                 <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 rounded-lg px-2 -mx-2 transition-colors">
//                   <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest sm:w-1/2 pr-4 mb-1 sm:mb-0">
//                     {param}
//                   </span>
//                   <span className="text-sm font-bold text-slate-900 sm:w-1/2 sm:text-right">
//                     {val}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==========================================
// // 7. MAIN PAGE COMPONENT
// // ==========================================
// const MicroscopeMotorisedController = () => {
//   const product = productsData["cryoscope-controller"];
//   const [currentImg, setCurrentImg] = useState(0);
//   const images = product ? [product.heroImage, ...(product.gallery || [])].filter(Boolean) : [];
//   const { scrollY } = useScroll();
//   const headerOpacity = useTransform(scrollY, [200, 300], [0, 1]);

//   useEffect(() => {
//     if (images.length <= 1) return;
//     const timer = setInterval(() => setCurrentImg((prev) => (prev + 1) % images.length), 4000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   if (!product) return <div className="min-h-screen bg-slate-50"><Navbar /></div>;

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
//         <Navbar />

//         {/* Sticky Header */}
//         <div 
//           className="sticky z-30 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm"
//           style={{ top: '64px' }}
//         >
//           <div className="container py-3 flex items-center justify-between">
//             <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
//               <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
//               <span>/</span>
//               <Link to="/products" className="hover:text-emerald-600 transition-colors">Catalog</Link>
//               <span>/</span>
//               <span className="hidden sm:inline-block cursor-default">{product.category}</span>
//               <span className="hidden sm:inline-block">/</span>
//               <span className="text-emerald-600 font-bold">{product.name}</span>
//             </div>

//             <motion.div style={{ opacity: headerOpacity }} className="flex items-center gap-4 pointer-events-none">
//               <span className="hidden lg:block font-display font-bold text-slate-900">{product.name}</span>
//               <button className="px-5 py-2 rounded-xl font-bold text-white bg-emerald-600 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all pointer-events-auto">
//                 Request Quote
//               </button>
//             </motion.div>
//           </div>
//         </div>
        
//         <main className="pt-8 lg:pt-12">
//           {/* HERO SECTION */}
//           <section className="container pb-8 overflow-hidden relative">
//             <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
//               <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
//                   {product.name}
//                 </h1>
//                 <p className="text-xl text-emerald-600 font-bold mb-6">{product.subtitle}</p>
                
//                 <div className="space-y-4 mb-8">
//                   {product.overview?.map((p: string, i: number) => (
//                     <p key={i} className="text-base text-slate-600 leading-relaxed font-medium">{p}</p>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-3">
//                   <button className="group px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5">
//                     Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 shadow-sm hover:-translate-y-0.5">
//                     <Download className="w-4 h-4 text-emerald-500" /> Full Specs
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Clean Hero Image */}
//               <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative w-full aspect-[4/3] lg:aspect-square">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-slate-100 rounded-[2.5rem] transform rotate-3 scale-105 opacity-60 pointer-events-none" />
//                 <div className="relative w-full h-full rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden group">
//                   <AnimatePresence mode="wait">
//                     {images.length > 0 && (
//                       <motion.img key={currentImg} src={images[currentImg]} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* CAPABILITIES TRIPTYCH */}
//           <section className="bg-slate-50 border-y border-slate-200 py-10 relative overflow-hidden">
//              <div className="container relative z-10">
//                 <CapabilitiesTriptych features={product.coreFeatures} />
//              </div>
//           </section>

//           {/* TELEMETRY SECTION */}
//           <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
//             <div className="container relative z-10">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true, amount: 0.1 }} 
//                 transition={{ duration: 0.5 }} 
//                 className="text-center max-w-3xl mx-auto mb-10"
//               >
//                 <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Formal Performance Diagnostics</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Deterministic. Precise. Automated.</h2>
//                 <p className="text-base text-slate-600 font-medium">Analyze formal system feedback including precise focus intensity readouts and formalized grid relocation mapping data.</p>
//               </motion.div>
//               <div className="max-w-6xl mx-auto">
//                 <MicroscopeTelemetry />
//               </div>
//             </div>
//           </section>

//           {/* ENGINEERED STABILITY (Animated Horizontal Flow) */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50 border-y border-slate-200">
//             <div className="container max-w-6xl mx-auto">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true, amount: 0.1 }} 
//                 transition={{ duration: 0.5 }} 
//                 className="text-center mb-12"
//               >
//                 <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Architecture & Mechanical Design</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Engineered Stability</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">{product.architecture?.description}</p>
//               </motion.div>
              
//               <EngineeredStability architecture={product.architecture} />
//             </div>
//           </section>

//           {/* MOTION CONTROL & ACCURACY (Animated Horizontal Rows) */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
//             <div className="container max-w-6xl mx-auto relative z-10">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true, amount: 0.1 }} 
//                 transition={{ duration: 0.5 }} 
//                 className="text-center max-w-2xl mx-auto"
//               >
//                 <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Sub-Micron Precision</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Motion Control & Accuracy</h2>
//                 <p className="text-base text-slate-600 font-medium">{product.motionControl?.description}</p>
//               </motion.div>

//               <AnimatedMotionGrid motionControl={product.motionControl} />
//             </div>
//           </section>

//           {/* INTEGRATION & APPLICATIONS (Animated Network & Marquee) */}
//           <section className="py-12 lg:py-16 relative overflow-hidden bg-white border-t border-slate-200">
//             <div className="container max-w-6xl mx-auto">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true, amount: 0.1 }} 
//                 transition={{ duration: 0.5 }} 
//                 className="text-center mb-8"
//               >
//                 <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Scalable Integration</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Optical & Instrument Integration</h2>
//                 <p className="text-base text-slate-600 font-medium max-w-3xl mx-auto">{product.integration?.description}</p>
//               </motion.div>

//               <ScalableIntegrationPattern integration={product.integration} applications={product.applications} />
//             </div>
//           </section>

//           {/* MASSIVE TECHNICAL SPECS TABS */}
//           <section className="py-12 lg:py-16 bg-slate-50 relative border-t border-slate-200">
//             <div className="container mx-auto">
//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true, amount: 0.1 }} 
//                 transition={{ duration: 0.5 }} 
//                 className="text-center max-w-2xl mx-auto"
//               >
//                 <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-xs mb-2 block">Clinical Precision Parameters</span>
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">Technical Specifications</h2>
//                 <p className="text-base text-slate-600 font-medium">Explore the comprehensive engineering parameters below.</p>
//               </motion.div>
              
//               <ComprehensiveSpecsTabs specs={product.detailedSpecs} />
//             </div>
//           </section>

//           {/* SPEAK TO A SCIENTIST CTA */}
//           <section className="container py-12 lg:py-16 border-t border-slate-200 bg-white">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }} 
//               whileInView={{ opacity: 1, y: 0 }} 
//               viewport={{ once: true, amount: 0.1 }} 
//               transition={{ duration: 0.5 }} 
//               className="bg-[#e2e8f0] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-sm border border-slate-300 relative overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-transparent pointer-events-none" />
              
//               <div className="lg:w-1/2 relative z-10">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-300 text-slate-800 text-[10px] font-extrabold tracking-widest uppercase mb-4 shadow-sm"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Engineering Support</div>
//                 <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Speak to a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Specialist</span></h2>
//                 <p className="text-base text-slate-700 font-medium mb-8">CRYONANO's systems engineers are available to answer your questions. Discuss your microscopy integration requirements today.</p>
//                 <div className="flex flex-wrap gap-3">
//                   <button className="px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 shadow-sm hover:shadow-md transition-all flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4" /></button>
//                 </div>
//               </div>

//               <div className="lg:w-5/12 flex flex-col gap-4 w-full relative z-10">
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-white hover:border-emerald-200 transition-colors">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-emerald-600" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Call Us Directly</p><p className="text-xl font-extrabold text-slate-900">+91 97481 81485</p></div>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm border border-white hover:border-emerald-200 transition-colors">
//                   <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-emerald-600" /></div>
//                   <div><p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Email Engineering</p><p className="text-lg font-extrabold text-slate-900">contact@cryonano.com</p></div>
//                 </div>
//               </div>
//             </motion.div>
//           </section>

//           {/* BOTTOM NAVIGATION */}
//           <section className="border-t border-slate-200 bg-white py-6">
//             <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
//               <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50">
//                 <ArrowLeft className="w-4 h-4" /> Back to Homepage
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50">
//                 Return to Product Catalog <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </section>

//         </main>
        
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default MicroscopeMotorisedController;


import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, ArrowUp, CheckCircle2, ChevronRight, ChevronDown, Plus, Minus,
  Activity, Zap, Shield, Camera, Cpu, Target, Settings, ThermometerSnowflake,
  Waves, Layers, Lock, ShieldAlert, Code, ArrowLeft, ArrowRight, Move, Eye,
  Image, Maximize2, Focus, Sun, RotateCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/AuthModal";

// Icon mapping dictionary
const iconMap: Record<string, any> = { 
  Camera, Cpu, Focus, Eye, Maximize2, Sun, Activity, Zap, Shield, Layers, Target, Settings, Move, Waves, RotateCw
};

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
// CORE TECHNOLOGIES – Vertical Accordion Pattern
// ==========================================
const CoreTechAccordion = ({ technologies }: { technologies: any[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const iconMapTech: Record<string, any> = {
    hardware: Move,
    software: Code,
    protection: Shield
  };

  const colorMap: Record<string, string> = {
    hardware: "border-blue-500",
    software: "border-cyan-500",
    protection: "border-red-500"
  };

  const bgMap: Record<string, string> = {
    hardware: "bg-blue-50",
    software: "bg-cyan-50",
    protection: "bg-red-50"
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {technologies.map((tech, idx) => {
        const isOpen = openIndex === idx;
        const Icon = iconMapTech[tech.type] || Settings;
        const borderColor = colorMap[tech.type] || "border-slate-300";
        const bgColor = bgMap[tech.type] || "bg-slate-50";

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className={`border-l-4 ${borderColor} bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider">{tech.subtitle}</p>
                  <h3 className="text-lg font-extrabold text-[#0A2647]">{tech.title}</h3>
                </div>
              </div>
              {isOpen ? <ChevronDown className="w-5 h-5 text-primary" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <p className="text-base text-slate-600 font-medium leading-relaxed mb-4">{tech.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {tech.bullets.map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {tech.highlights && tech.highlights.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Specifications</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {tech.highlights.map((h: any, i: number) => (
                              <div key={i} className="bg-slate-50 rounded-lg p-3 text-center border border-border">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{h.label}</p>
                                <p className="text-base font-extrabold text-[#0A2647]">{h.val}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.platforms && tech.platforms.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Platform Capabilities</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.platforms.map((p: string, i: number) => (
                              <span key={i} className="px-3 py-1.5 bg-[#0A2647] text-white text-sm font-bold rounded-lg">{p}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.protects && tech.protects.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Protection & Integration</h4>
                          <div className="flex flex-wrap gap-2">
                            {tech.protects.map((p: string, i: number) => (
                              <span key={i} className="px-3 py-1.5 bg-red-50 text-red-700 text-sm font-bold rounded-lg border border-red-200">{p}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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
            className={`bg-white p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
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
                  animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-600 font-medium pl-14">
                    Engineered for high-precision deterministic alignment, robust mechanical stability, and repeatable positioning tailored for {app.toLowerCase()} workflows.
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
// OPTIONAL ENHANCEMENTS – Highlighted Grid
// ==========================================
const OptionalEnhancements = ({ configs }: { configs: string[] }) => {
  const icons = [Settings, Maximize2, Focus, Layers, Activity, Target, Camera, RotateCw];
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-border shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          <Settings className="w-3.5 h-3.5" /> Customize Your System
        </div>
        <h3 className="text-2xl font-extrabold text-[#0A2647] mt-3">Optional Enhancements</h3>
        <p className="text-base text-slate-500 mt-2">Configure your controller framework for specific research and industrial requirements</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {configs.map((config, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white border border-border rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <p className="text-base font-bold text-slate-700 group-hover:text-primary transition-colors">{config}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// VISUAL REFERENCE – 3-Column Image Gallery
// ==========================================
const VisualReference = ({ gallery }: { gallery: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
export default function CryoscopeControllerPage() {
  const product = productsData["cryoscope-controller"];
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>("Stage Structure");
  
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

  const heroImageSrc = product.heroImage || (product.gallery && product.gallery[0]?.url) || "/images/placeholder.png";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
        <Navbar />

        {/* 01. HERO SECTION */}
        <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#061B35] to-[#0A2647] text-white">
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
                  <Download className="w-5 h-5 text-primary" /> Download Datasheet
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
                  key={i} className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full shadow-sm transition-all cursor-default"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-base font-bold text-[#0A2647]">{adv}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 03. KEY FEATURES */}
        <section ref={featuresRef} className="py-16 bg-slate-50/30 border-b border-border">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">High-Fidelity Engineering</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Key Platform Capabilities</h2>
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
          <div className="container max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-3 block">Technical Deep-Dive</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#0A2647]">Core Technologies</h2>
            </div>
            
            <CoreTechAccordion technologies={product.coreTechnologies} />
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

        {/* 07. OPTIONAL ENHANCEMENTS */}
        {product.configurations && (
          <section className="py-16 bg-white border-b border-border">
            <div className="container max-w-6xl">
              <OptionalEnhancements configs={product.configurations} />
            </div>
          </section>
        )}

        {/* 08. APPLICATIONS */}
        <section ref={appsRef} className="py-16 bg-slate-50/30 border-b border-border">
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
          <section className="py-12 bg-white border-b border-border">
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
        {product.gallery && product.gallery.length > 0 && (
          <section className="py-16 bg-slate-50 border-b border-border">
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
