// import { useEffect, useRef, useState, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   BookOpen, Microchip, FlaskConical, Layers, Quote, 
//   ChevronRight, Activity, Magnet, Radio, CheckCircle2, 
//   ThermometerSnowflake, FileText, Cpu, Microscope, Settings,
//   Zap, ShieldCheck, Target, Layers2, ArrowLeft, Sparkles
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar'; 
// import { Footer } from '../components/Footer'; 
// import { Link } from 'react-router-dom';

// // --- ANIMATION VARIANTS ---
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
// };
// const fadeInLeft = {
//   hidden: { opacity: 0, x: -30 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
// };
// const fadeInRight = {
//   hidden: { opacity: 0, x: 30 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
// };

// export function ApplicationNotesPage() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [activeDipstickFeature, setActiveDipstickFeature] = useState(0);

//   // Autonomous cycling for the 2D Transfer steps (4 steps)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % 4);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, []);

//   // Autonomous cycling for Helium Dipstick key features (6 features)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveDipstickFeature((prev) => (prev + 1) % 6);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);

//   // Helium Dipstick Key Features Data
//   const dipstickFeatures = [
//     { icon: ShieldCheck, title: "24-Channel Filtered DC", desc: "24 lines with integrated cryogenic low‑pass filters for clean measurements." },
//     { icon: Radio, title: "RF up to 18 GHz", desc: "Semi‑rigid RF cable routed as an antenna for high‑frequency excitation." },
//     { icon: Magnet, title: "Integrated Magnet (~0.1 T)", desc: "On‑board magnetic field source for Josephson junction characterization." },
//     { icon: ThermometerSnowflake, title: "Superior Thermal Anchoring", desc: "Wire thermalization bobbins and BeCu looms minimize heat load." },
//     { icon: Settings, title: "Modular & Scalable", desc: "Three isolated stainless steel tubes separate DC, heater/sensor, and magnet lines." },
//     { icon: Layers, title: "EMI Shielding", desc: "Mu‑metal shield with indium gaskets guards against ambient magnetic interference." }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden selection:bg-blue-100">
      
//       {/* Global Navbar */}
//       <div className="relative z-50">
//         <Navbar />
//       </div>

//       {/* ========================================== */}
//       {/* HERO SECTION                               */}
//       {/* ========================================== */}
//       <section className="relative pt-28 pb-24 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 overflow-hidden">
//         {/* Soft Animated Background */}
//         <motion.div 
//           animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }} 
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-indigo-50 to-transparent blur-3xl pointer-events-none"
//         />
        
//         {/* Back to Home Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="absolute top-6 left-6 z-20"
//         >
//           <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group">
//             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//             <span>Back to Home</span>
//           </Link>
//         </motion.div>

//         <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 max-w-4xl mx-auto">
//           <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
//             <BookOpen className="w-3.5 h-3.5" /> Research Library
//           </motion.div>
//           <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
//             Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Notes</span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="text-lg text-slate-500 leading-relaxed font-medium">
//             Detailed application notes written by staff and institutional users, demonstrating the deployment of CRYONANO instruments in cutting-edge quantum and cryogenic research.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ========================================== */}
//       {/* NOTE 1: IVS & QUANTUM HALL (Blue Theme)    */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-gradient-to-b from-blue-50/30 to-white">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Author & Title Block */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl">
//               Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source
//             </motion.h2>
//             <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 pr-8 rounded-2xl border border-blue-100 shadow-sm">
//               <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
//                 BK
//               </div>
//               <div>
//                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Application By</p>
//                 <p className="text-slate-900 font-bold">Prof. Biswajit Karmakar</p>
//                 <p className="text-slate-500 text-sm">Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Overview & IVS Box */}
//           <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="prose text-slate-600 font-medium leading-relaxed">
//               <motion.p variants={fadeInUp}>
//                 Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a <strong className="text-slate-900">16-bit Digital-to-Analog Isolated Voltage Source (IVS)</strong> from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements.
//               </motion.p>
//               <motion.div variants={fadeInUp} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-6">
//                 <h4 className="text-blue-800 font-bold mb-4">The IVS provides:</h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Four independent, truly bipolar outputs (±10 V each)</li>
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Computer-controlled operation (LabVIEW compatible)</li>
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Output current up to 10 mA</li>
//                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Electrical isolation to eliminate ground-loop noise</li>
//                 </ul>
//               </motion.div>
//               <motion.p variants={fadeInUp} className="mt-6 italic">
//                 These features make it particularly suitable for sensitive quantum transport experiments.
//               </motion.p>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-1 gap-6">
//               <img src="https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=800" alt="IVS Device Box Placeholder" className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover h-64 hover:shadow-xl transition-shadow" />
//               <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800" alt="Rack Mount Setup Placeholder" className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover h-48 hover:shadow-xl transition-shadow" />
//             </motion.div>
//           </div>

//           {/* 3 Pillars of Application */}
//           <div className="space-y-12">
//             {/* Pillar 1: Quantum Hall */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-7">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Activity className="text-blue-500 w-6 h-6"/> 1. Gate Voltage Control in Quantum Hall Systems</h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system.
//                 </p>
//                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
//                   <h5 className="font-bold text-slate-800 mb-3">Using the IVS:</h5>
//                   <ul className="space-y-2 text-sm text-slate-600 font-medium">
//                     <li>• Multiple gates can be independently biased with high precision</li>
//                     <li>• Stable and noise-free voltage control enables accurate tuning of edge mode interactions</li>
//                     <li>• The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes</li>
//                   </ul>
//                 </div>
//                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Published in: <span className="text-blue-600">Phys. Rev. Lett. (2020)</span> | <span className="text-blue-600">Phys. Rev. B (2021)</span></p>
//               </div>
//               <div className="lg:col-span-5">
//                 <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" alt="Quantum Hall Gate Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
//                 <p className="text-xs text-center text-slate-400 mt-3">Gates g1-g4 controlled by IVS (Placeholder)</p>
//               </div>
//             </motion.div>

//             {/* Pillar 2: Graphene */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-5 order-2 lg:order-1">
//                 <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800" alt="Graphene Device Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
//                 <p className="text-xs text-center text-slate-400 mt-3">Graphene device on SiO2/n-Si (Placeholder)</p>
//               </div>
//               <div className="lg:col-span-7 order-1 lg:order-2">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Layers className="text-blue-500 w-6 h-6"/> 2. Gate Control in Graphene Devices</h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density. The IVS proves highly effective for this application:
//                 </p>
//                 <ul className="space-y-3 text-sm text-slate-600 font-medium mb-6">
//                   <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Provides stable back-gate voltage control</li>
//                   <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Multiple channels can be connected in series to achieve up to ±40 V output</li>
//                   <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"/> Isolation minimizes interference and improves measurement reliability</li>
//                 </ul>
//                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Published in: <span className="text-blue-600">ACS Applied Nano Materials (2022)</span></p>
//               </div>
//             </motion.div>

//             {/* Pillar 3: I-V Spectroscopy */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow grid lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-7">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><Radio className="text-blue-500 w-6 h-6"/> 3. I–V Spectroscopy in Fractional Quantum Hall Systems</h3>
//                 <p className="text-slate-600 mb-4 leading-relaxed">
//                   I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements. Typical setup includes DC voltage excitation (provided by IVS) and AC modulation for lock-in detection.
//                 </p>
//                 <p className="font-bold text-slate-900 mb-3 mt-6">Key advantages of using the IVS:</p>
//                 <ul className="space-y-2 text-sm text-slate-600 font-medium">
//                   <li>• <strong className="text-slate-800">Low-noise 16-bit resolution</strong> enables precise voltage sweeps</li>
//                   <li>• <strong className="text-slate-800">Electrical isolation</strong> eliminates ground loops</li>
//                   <li>• <strong className="text-slate-800">Stable DC bias</strong> improves accuracy in differential conductance measurements</li>
//                 </ul>
//               </div>
//               <div className="lg:col-span-5">
//                 <motion.img whileHover={{ scale: 1.02 }} src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" alt="I-V Graph Placeholder" className="rounded-2xl shadow-md border border-slate-200 w-full" />
//                 <p className="text-xs text-center text-slate-400 mt-3">Spectroscopy Data (Placeholder)</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* NEW: Key Benefits of the IVS */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-[3rem] p-10 border border-blue-100 shadow-lg">
//             <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
//               <Sparkles className="w-7 h-7 text-blue-600" /> Key Benefits of the IVS in Research Applications
//             </h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { icon: CheckCircle2, title: "True Bipolar Outputs", desc: "Flexible biasing with ±10 V per channel." },
//                 { icon: Layers, title: "Scalable Voltage Range", desc: "Up to ±40 V via series configuration." },
//                 { icon: Activity, title: "Low‑Noise Performance", desc: "16‑bit resolution for sensitive measurements." },
//                 { icon: ShieldCheck, title: "Complete Isolation", desc: "Eliminates ground‑loop interference." },
//                 { icon: Zap, title: "Multi‑Channel Operation", desc: "Four independent channels for complex devices." },
//               ].map((benefit, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-slate-100"
//                 >
//                   <benefit.icon className="w-6 h-6 text-blue-600 mb-3" />
//                   <h5 className="font-bold text-slate-800 mb-2">{benefit.title}</h5>
//                   <p className="text-sm text-slate-500">{benefit.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* NEW: Conclusion for Note 1 */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white rounded-[2rem] p-8 md:p-10 border border-blue-200 shadow-md">
//             <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
//               <FileText className="w-6 h-6 text-blue-600" /> Conclusion
//             </h3>
//             <p className="text-slate-600 leading-relaxed font-medium">
//               The Isolated Voltage Source (IVS) from Cryonano Labs has proven to be a versatile and reliable tool for advanced condensed matter experiments. Its combination of precision, low noise, and isolation makes it particularly well-suited for quantum Hall edge state studies, graphene device characterization, and high‑resolution I–V spectroscopy. Its integration into experimental setups enables reproducible and high‑quality measurements, supporting cutting‑edge research in quantum transport.
//             </p>
//           </motion.div>

//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* NOTE 2: HELIUM DIPSTICK (Purple Theme)    */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-white border-t border-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Author & Title Block */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl">
//               Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions
//             </motion.h2>
//             <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-purple-50/50 p-4 pr-8 rounded-2xl border border-purple-100 shadow-sm">
//               <div className="w-12 h-12 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center font-bold text-xl">
//                 DT
//               </div>
//               <div>
//                 <p className="text-sm text-purple-400 font-bold uppercase tracking-wider">Application By</p>
//                 <p className="text-purple-900 font-bold">Dr. Deep Talukdar</p>
//                 <p className="text-purple-600 text-sm">Cryonano Labs</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <div className="grid lg:grid-cols-12 gap-16 mb-20">
//             {/* Content Column */}
//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-7 space-y-10">
              
//               <div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3"><ThermometerSnowflake className="text-purple-500 w-6 h-6"/> Overview & Objective</h3>
//                 <p className="text-slate-600 leading-relaxed font-medium mb-4">
//                   Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.
//                 </p>
//                 <p className="text-slate-600 leading-relaxed font-medium">
//                   This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under DC bias, RF excitation (up to 18 GHz), and external magnetic field (~0.1 Tesla).
//                 </p>
//               </div>

//               <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Microchip className="text-purple-500 w-5 h-5"/> Measurement Requirements</h3>
//                 <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> 24 DC measurement lines</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> 24-channel cryogenic DC-RF filters</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> In-plane & out-of-plane measurement support</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> Fisher to 24 BNC breakout</li>
//                   <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0"/> Room temperature RF filtering</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Settings className="text-purple-500 w-6 h-6"/> System Design and Implementation</h3>
//                 <div className="space-y-6">
//                   <motion.div whileHover={{ x: 5 }} className="border-l-2 border-purple-200 pl-4 transition-all">
//                     <h5 className="font-bold text-slate-800">Mechanical & Structural Design</h5>
//                     <p className="text-sm text-slate-600 mt-1">Stainless steel dipstick. Three independent tubes isolate: DC measurement lines, Heater/Cernox lines, and Magnet DC supply lines.</p>
//                   </motion.div>
//                   <motion.div whileHover={{ x: 5 }} className="border-l-2 border-purple-200 pl-4 transition-all">
//                     <h5 className="font-bold text-slate-800">RF Integration & Filtering</h5>
//                     <p className="text-sm text-slate-600 mt-1">Semi-rigid RF cable used as an antenna (up to 18 GHz). 24-line cryogenic low-pass filters and wire thermalization bobbins integrated inline.</p>
//                   </motion.div>
//                   <motion.div whileHover={{ x: 5 }} className="border-l-2 border-purple-200 pl-4 transition-all">
//                     <h5 className="font-bold text-slate-800">Sample Mounting & Shielding</h5>
//                     <p className="text-sm text-slate-600 mt-1">Gold-plated OFC holder for in-plane/out-of-plane chips. BeCu wire looms. Mu-metal shielding with indium gaskets protects against ambient magnetic interference.</p>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Images Column */}
//             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 grid grid-cols-1 gap-6">
//               <div className="relative group">
//                 <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800" alt="Dipstick Sketch Placeholder" className="rounded-[2rem] shadow-md border border-slate-200 w-full h-64 object-cover" />
//                 <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors rounded-[2rem]" />
//                 <p className="text-xs text-center text-slate-400 mt-2">Design Blueprint (Placeholder)</p>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400" alt="Lab Dipstick Vertical Placeholder" className="rounded-[1.5rem] shadow-md border border-slate-200 w-full h-48 object-cover" />
//                 </div>
//                 <div>
//                   <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=400" alt="PCB Holder Placeholder" className="rounded-[1.5rem] shadow-md border border-slate-200 w-full h-48 object-cover" />
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* NEW: Key Features and Advantages */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 bg-gradient-to-br from-purple-50 to-white rounded-[3rem] p-10 border border-purple-100 shadow-lg">
//             <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
//               <Sparkles className="w-7 h-7 text-purple-600" /> Key Features and Advantages
//             </h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {dipstickFeatures.map((feature, idx) => (
//                 <motion.div 
//                   key={idx} 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className={`bg-white p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
//                     activeDipstickFeature === idx ? 'border-purple-400 shadow-lg ring-2 ring-purple-100 scale-105' : 'border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1'
//                   }`}
//                   onClick={() => setActiveDipstickFeature(idx)}
//                 >
//                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${activeDipstickFeature === idx ? 'bg-purple-100 text-purple-600' : 'bg-slate-50 text-slate-500'}`}>
//                     <feature.icon className="w-5 h-5" />
//                   </div>
//                   <h5 className="font-bold text-slate-800 mb-2">{feature.title}</h5>
//                   <p className="text-sm text-slate-600">{feature.desc}</p>
//                   {activeDipstickFeature === idx && (
//                     <motion.div 
//                       initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3.5, ease: 'linear' }}
//                       className="h-1 bg-purple-300 mt-4 rounded-full"
//                     />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//             <p className="text-center text-slate-400 text-sm mt-6">
//               Click any feature or watch them auto-cycle every 3.5 seconds
//             </p>
//           </motion.div>

//           {/* NEW: Applications */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 bg-white rounded-[2rem] p-8 md:p-10 border border-purple-100 shadow-sm">
//             <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//               <Layers className="w-6 h-6 text-purple-500" /> Applications
//             </h3>
//             <ul className="grid sm:grid-cols-2 gap-3 text-slate-600 font-medium">
//               {['Josephson junction I–V characterization', 'Superconducting device research', 'Quantum transport experiments', 'RF-driven quantum systems', 'Low-temperature electronics testing'].map((app, idx) => (
//                 <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-2 items-center">
//                   <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> {app}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* NEW: Conclusion for Note 2 */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 md:p-10 border border-purple-200 shadow-md">
//             <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
//               <FileText className="w-6 h-6 text-purple-600" /> Conclusion
//             </h3>
//             <p className="text-slate-600 leading-relaxed font-medium">
//               The developed Helium Dipstick system provides a highly integrated and noise-optimized platform for Josephson junction characterization at cryogenic temperatures. By combining DC, RF, and magnetic field capabilities within a single architecture, it enables precise and reproducible measurements essential for superconducting and quantum device research.
//             </p>
//           </motion.div>

//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* NOTE 3: 2D TRANSFER (Emerald/Teal Theme)   */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-24 bg-gradient-to-b from-emerald-50/30 to-white border-t border-slate-100">
//         <div className="max-w-7xl mx-auto px-6">
          
//           {/* Author & Title Block */}
//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-16 text-center">
//             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 max-w-4xl mx-auto">
//               2D Transfer of Materials – Process and Dynamics
//             </motion.h2>
//             <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 px-8 rounded-full border border-emerald-100 shadow-sm mx-auto">
//               <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
//                 SP
//               </div>
//               <div className="text-left">
//                 <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Application By</p>
//                 <p className="text-slate-900 font-bold text-sm">Mr. Sourav Paul (with inputs from Mr. Vineet Pandey) — IIT Kharagpur</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto text-center mb-20">
//             <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
//               The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact. This application note outlines a universal dry transfer method implemented using the 2D Transfer System from Cryonano Labs.
//             </motion.p>
//             <motion.p variants={fadeInUp} className="text-sm font-bold text-slate-500 uppercase tracking-widest">
//               Published in: <span className="text-emerald-600">Journal of Applied Physics (2023)</span>
//             </motion.p>
//           </motion.div>

//           {/* Configuration & Process Dynamics Panels */}
//           <div className="grid md:grid-cols-2 gap-8 mb-24">
//             <motion.div initial={fadeInLeft.hidden} whileInView={fadeInLeft.show} viewport={{ once: true }} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
//               <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <Settings className="w-6 h-6 text-emerald-500" /> System Configuration
//               </h4>
//               <ul className="space-y-4 text-slate-600 font-medium">
//                 <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" /> <strong className="text-slate-800">XYθ Stage:</strong> Enables precise lateral positioning and rotational alignment.</li>
//                 <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" /> <strong className="text-slate-800">XYZ Stage:</strong> Equipped with a cantilever-mounted plate for controlled vertical motion.</li>
//               </ul>
//               <p className="mt-6 text-sm text-slate-500 italic">Allows fine control over alignment and contact under an optical microscope.</p>
//             </motion.div>

//             {/* Replaced dark panel with light design */}
//             <motion.div initial={fadeInRight.hidden} whileInView={fadeInRight.show} viewport={{ once: true }} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-[2rem] border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
//               <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <Microscope className="w-6 h-6 text-emerald-600" /> Process Dynamics & Observation
//               </h4>
//               <p className="text-slate-700 leading-relaxed mb-4">
//                 A critical aspect of successful transfer is <strong className="text-emerald-800">real-time optical monitoring</strong>. As the stamp approaches the substrate, interference fringes appear, indicating proximity and uniformity of contact.
//               </p>
//               <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-emerald-200 text-emerald-900 font-medium">
//                 Understanding live optical micrographs is essential for avoiding bubbles, ensuring uniform stacking, and achieving high-quality interfaces.
//               </div>
//             </motion.div>
//           </div>

//           {/* Autonomous Animated Pipeline: Step-by-Step Process */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-xl overflow-hidden">
//             <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
//               Universal Dry Transfer Process (PDMS/PPC)
//             </h3>
            
//             <div className="flex flex-wrap md:flex-nowrap gap-4 mb-12 justify-center relative">
//               <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-slate-100 -z-10 -translate-y-1/2" />
              
//               {["Stamp Prep", "h-BN Pickup", "2D Pickup", "Final Release"].map((stepTitle, idx) => (
//                 <button 
//                   key={idx} 
//                   onClick={() => setActiveStep(idx)}
//                   className={`relative flex-1 py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 ${
//                     activeStep === idx 
//                     ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105' 
//                     : 'bg-white border border-slate-200 text-slate-500 hover:border-emerald-300 hover:text-emerald-700'
//                   }`}
//                 >
//                   Step {idx + 1}: {stepTitle}
//                 </button>
//               ))}
//             </div>

//             <div className="bg-emerald-50/50 rounded-[2rem] p-8 md:p-12 border border-emerald-100 min-h-[250px] flex items-center">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeStep}
//                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
//                   className="w-full"
//                 >
//                   {activeStep === 0 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Stamp Preparation and Alignment</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed">
//                         A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The stamp is mounted upside down and aligned under the microscope with the target sample on SiO₂/Si.
//                       </p>
//                     </div>
//                   )}
//                   {activeStep === 1 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Pickup of h-BN Flake</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed mb-4">
//                         A few-layer hexagonal boron nitride (h-BN) flake is picked up from the substrate.
//                       </p>
//                       <div className="flex gap-4">
//                         <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm">Temp: ~65°C</span>
//                         <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm">Substrate: SiO₂/Si</span>
//                       </div>
//                     </div>
//                   )}
//                   {activeStep === 2 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Pickup of Additional 2D Materials</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed mb-4">
//                         Exfoliated 2D materials like Graphene and Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Requires precise alignment for complex heterostructures.
//                       </p>
//                       <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm inline-block">Temp: ~55°C</span>
//                     </div>
//                   )}
//                   {activeStep === 3 && (
//                     <div>
//                       <h4 className="text-2xl font-bold text-emerald-900 mb-4">Final Transfer and Release</h4>
//                       <p className="text-slate-600 text-lg leading-relaxed mb-4">
//                         The assembled stack is aligned and brought into contact with the target substrate. The cantilever stage is slowly retracted to detach the PDMS/PPC. Followed by Acetone/IPA cleaning to remove residue.
//                       </p>
//                       <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-emerald-700 font-bold text-sm inline-block">Transfer Temp: ~85°C</span>
//                     </div>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
            
//             <div className="w-full bg-slate-100 h-1.5 rounded-full mt-8 overflow-hidden">
//               <motion.div 
//                 key={activeStep}
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 4.5, ease: "linear" }}
//                 className="h-full bg-emerald-400"
//               />
//             </div>
//           </motion.div>

//           {/* NEW: Key Advantages of the Cryonano 2D Transfer System */}
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 bg-white rounded-[3rem] p-10 border border-emerald-100 shadow-lg">
//             <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
//               <Sparkles className="w-7 h-7 text-emerald-600" /> Key Advantages of the Cryonano 2D Transfer System
//             </h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 { title: "High‑Precision Alignment (XYθ)", desc: "Precise lateral and rotational control for accurate stacking." },
//                 { title: "Stable Vertical Motion (XYZ)", desc: "Cantilever stage ensures smooth, controlled approach and retraction." },
//                 { title: "Dry Transfer Compatibility", desc: "Optimized for PDMS/PPC technique for clean, contamination‑free transfer." },
//                 { title: "Real‑Time Microscopy", desc: "Live optical monitoring to observe interference fringes and contact quality." },
//                 { title: "Complex Heterostructures", desc: "Enables fabrication of multi‑layer stacks with diverse 2D materials." },
//               ].map((advantage, idx) => (
//                 <motion.div 
//                   key={idx} 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 hover:shadow-md hover:-translate-y-1 transition-all"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
//                     <CheckCircle2 className="w-4 h-4" />
//                   </div>
//                   <h5 className="font-bold text-slate-800 mb-1">{advantage.title}</h5>
//                   <p className="text-sm text-slate-600">{advantage.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* NEW: Applications */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-white rounded-[2rem] p-8 md:p-10 border border-emerald-100 shadow-sm">
//             <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//               <Layers className="w-6 h-6 text-emerald-500" /> Applications
//             </h3>
//             <ul className="grid sm:grid-cols-2 gap-3 text-slate-600 font-medium">
//               {['Van der Waals heterostructure fabrication', 'Graphene-based devices', 'TMD-based optoelectronics', 'Quantum materials research', 'Layered material interface studies'].map((app, idx) => (
//                 <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-2 items-center">
//                   <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {app}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* NEW: Research Output */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-gradient-to-r from-emerald-50 to-white rounded-[2rem] p-8 border border-emerald-200 shadow-md">
//             <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
//               <FileText className="w-5 h-5 text-emerald-600" /> Research Output
//             </h3>
//             <p className="text-slate-700 leading-relaxed italic">
//               “Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂” <br />
//               Sourav Paul <em>et al.</em>, <span className="font-bold">Journal of Applied Physics</span>, 133, 114301 (2023)
//             </p>
//           </motion.div>

//           {/* NEW: Conclusion for Note 3 */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-white rounded-[2rem] p-8 md:p-10 border border-emerald-200 shadow-md">
//             <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
//               <FileText className="w-6 h-6 text-emerald-600" /> Conclusion
//             </h3>
//             <p className="text-slate-600 leading-relaxed font-medium">
//               The Cryonano 2D Transfer System enables precise, repeatable, and contamination‑free assembly of 2D heterostructures using a universal dry transfer method. Control over alignment, temperature, and interfacial dynamics — combined with real‑time optical feedback — ensures high‑quality device fabrication for advanced materials research.
//             </p>
//           </motion.div>

//         </div>
//       </section>

//       {/* Global Footer */}
//       <div className="relative z-50">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ApplicationNotesPage;


















































// import { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   BookOpen, Microchip, FlaskConical, Layers, Quote,
//   ChevronRight, Activity, Magnet, Radio, CheckCircle2,
//   ThermometerSnowflake, FileText, Cpu, Microscope, Settings,
//   Zap, ShieldCheck, Target, Layers2, ArrowLeft, Sparkles,
//   Award, Users, Globe, TrendingUp, Clock, Mail, Send,
//   ExternalLink, Download, PlayCircle, Image, Eye, Move,
//   Plus, Minus, ChevronDown, ArrowUpRight, Lightbulb, Droplets
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { PageTransition } from '@/components/PageTransition';
// import { CTASection } from '@/components/CTASection';

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 }
//   }
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" as const }
//   }
// };

// // ==========================================
// // DATA – Application Notes (Strictly from Document)
// // ==========================================
// const applicationNotes = [
//   {
//     id: "ivs-quantum-hall",
//     title: "Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source",
//     author: "Prof. Biswajit Karmakar",
//     affiliation: "Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata",
//     icon: Activity,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a 16-bit Digital-to-Analog Isolated Voltage Source (IVS) from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements."
//         ]
//       },
//       {
//         type: "features",
//         title: "The IVS provides:",
//         items: [
//           "Four independent, truly bipolar outputs (±10 V each)",
//           "Computer-controlled operation (LabVIEW compatible)",
//           "Output current up to 10 mA",
//           "Electrical isolation to eliminate ground-loop noise"
//         ],
//         note: "These features make it particularly suitable for sensitive quantum transport experiments."
//       },
//       {
//         type: "subtitle",
//         title: "1. Gate Voltage Control in Quantum Hall Systems"
//       },
//       {
//         type: "content",
//         content: [
//           "In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system."
//         ]
//       },
//       {
//         type: "bullets",
//         title: "Using the IVS:",
//         items: [
//           "Multiple gates can be independently biased with high precision",
//           "Stable and noise-free voltage control enables accurate tuning of edge mode interactions",
//           "The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes"
//         ]
//       },
//       {
//         type: "publications",
//         title: "This setup has contributed to significant experimental results, leading to publications in:",
//         items: [
//           "Physical Review Letters (2020)",
//           "Physical Review B (2021)"
//         ],
//         note: "The low-noise and isolated outputs of the IVS are essential in maintaining signal integrity in these delicate measurements."
//       },
//       {
//         type: "subtitle",
//         title: "2. Gate Control in Graphene Devices"
//       },
//       {
//         type: "content",
//         content: [
//           "Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density.",
//           "The IVS proves highly effective for this application:"
//         ]
//       },
//       {
//         type: "bullets",
//         items: [
//           "Provides stable back-gate voltage control",
//           "Multiple channels can be connected in series to achieve up to ±40 V output",
//           "Isolation minimizes interference and improves measurement reliability"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "This makes the IVS a practical and flexible solution for graphene transport experiments, including carrier density tuning and field-effect measurements.",
//           "Representative graphene device studies can be found in: ACS Applied Nano Materials (2022)"
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "3. I–V Spectroscopy in Fractional Quantum Hall Systems"
//       },
//       {
//         type: "content",
//         content: [
//           "I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements."
//         ]
//       },
//       {
//         type: "bullets",
//         title: "Typical setup includes:",
//         items: [
//           "DC voltage excitation (provided by IVS)",
//           "AC modulation for lock-in detection"
//         ]
//       },
//       {
//         type: "bullets",
//         title: "Key advantages of using the IVS in this context:",
//         items: [
//           "Low-noise 16-bit resolution enables precise voltage sweeps",
//           "Electrical isolation eliminates ground loops",
//           "Stable DC bias improves accuracy in differential conductance measurements"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "This results in clean, high-resolution spectroscopic data, critical for studying fractional quantum Hall physics."
//         ]
//       },
//       {
//         type: "benefits",
//         title: "Key Benefits of the IVS in Research Applications",
//         items: [
//           { title: "True Bipolar Outputs", desc: "Flexible biasing with ±10 V per channel" },
//           { title: "Scalable Voltage Range", desc: "Up to ±40 V via series configuration" },
//           { title: "Low‑Noise Performance", desc: "16‑bit resolution for sensitive measurements" },
//           { title: "Complete Isolation", desc: "Eliminates ground‑loop interference" },
//           { title: "Multi‑Channel Operation", desc: "Four independent channels for complex device configurations" }
//         ]
//       },
//       {
//         type: "conclusion",
//         content: "The Isolated Voltage Source (IVS) from Cryonano Labs has proven to be a versatile and reliable tool for advanced condensed matter experiments. Its combination of precision, low noise, and isolation makes it particularly well-suited for Quantum Hall edge state studies, Graphene device characterization, and High-resolution I–V spectroscopy. Its integration into experimental setups enables reproducible and high-quality measurements, supporting cutting-edge research in quantum transport."
//       }
//     ]
//   },
//   {
//     id: "helium-dipstick",
//     title: "Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions",
//     author: "Dr. Deep Talukdar",
//     affiliation: "Cryonano Labs",
//     icon: ThermometerSnowflake,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.",
//           "This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under DC bias conditions, RF excitation (up to 18 GHz), and External magnetic field (~0.1 Tesla).",
//           "The system integrates electrical isolation, thermal management, and electromagnetic shielding to ensure high-fidelity measurements."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Objective"
//       },
//       {
//         type: "content",
//         content: [
//           "The goal was to design and fabricate a dipstick system capable of:"
//         ]
//       },
//       {
//         type: "bullets",
//         items: [
//           "Performing low-noise I–V measurements of Josephson junctions at 4 K",
//           "Supporting simultaneous DC, RF, and magnetic field inputs",
//           "Providing a modular and scalable wiring architecture for complex devices"
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Measurement Requirements"
//       },
//       {
//         type: "content",
//         content: [
//           "The system was designed to meet the following specifications:"
//         ]
//       },
//       {
//         type: "bullets",
//         items: [
//           "24 DC measurement lines",
//           "Integrated 24-channel cryogenic low-pass DC-RF filters",
//           "Support for both in-plane and out-of-plane measurements",
//           "Signal breakout via Fisher connectors → 24 BNC outputs",
//           "Integrated room temperature RF filtering"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "This configuration enables clean signal routing while minimizing noise and interference."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "System Design and Implementation"
//       },
//       {
//         type: "content",
//         content: [
//           "To meet the above requirements, a robust and modular dipstick architecture was developed:"
//         ]
//       },
//       {
//         type: "design-grid",
//         items: [
//           {
//             title: "Mechanical & Structural Design",
//             desc: "Fabricated using a stainless steel dipstick for mechanical stability and cryogenic compatibility. Three independent stainless steel tubes used to isolate DC measurement lines, Heater and temperature sensor (Cernox) lines, and Magnet DC supply lines."
//           },
//           {
//             title: "RF Integration",
//             desc: "A semi-rigid RF cable was routed from the top as an antenna. Supports RF signal injection up to 18 GHz. Enables high-frequency excitation for Josephson junction studies."
//           },
//           {
//             title: "Filtering & Thermal Management",
//             desc: "Integrated 24-line cryogenic low-pass filters for noise suppression. Wire thermalization bobbins used inline to reduce thermal load. Additional room temperature RF filters for improved signal integrity."
//           },
//           {
//             title: "Sample Mounting",
//             desc: "Custom gold-plated OFC (Oxygen-Free Copper) sample holder. Supports both in-plane and out-of-plane chip carriers. Ensures excellent thermal conductivity and electrical stability."
//           },
//           {
//             title: "Wiring & Connectivity",
//             desc: "BeCu (Beryllium Copper) wire looms used for reliable cryogenic connections. Designed with appropriate breaks for thermal anchoring and strain relief. External breakout via Fisher connectors to 24 BNC connectors."
//           },
//           {
//             title: "Magnetic Shielding",
//             desc: "Mu-metal shielding around the sample enclosure. Sealed using indium gaskets. Protects against ambient magnetic interference, including Earth's magnetic field."
//           }
//         ]
//       },
//       {
//         type: "features-grid",
//         title: "Key Features and Advantages",
//         items: [
//           { icon: ShieldCheck, title: "24-Channel Filtered DC", desc: "24 lines with integrated cryogenic low‑pass filters for clean measurements." },
//           { icon: Radio, title: "RF up to 18 GHz", desc: "Semi‑rigid RF cable routed as an antenna for high‑frequency excitation." },
//           { icon: Magnet, title: "Integrated Magnet (~0.1 T)", desc: "On‑board magnetic field source for Josephson junction characterization." },
//           { icon: ThermometerSnowflake, title: "Superior Thermal Anchoring", desc: "Wire thermalization bobbins and BeCu looms minimize heat load." },
//           { icon: Settings, title: "Modular & Scalable", desc: "Three isolated stainless steel tubes separate DC, heater/sensor, and magnet lines." },
//           { icon: Layers, title: "EMI Shielding", desc: "Mu‑metal shield with indium gaskets guards against ambient magnetic interference." }
//         ]
//       },
//       {
//         type: "applications",
//         title: "Applications",
//         items: [
//           "Josephson junction I–V characterization",
//           "Superconducting device research",
//           "Quantum transport experiments",
//           "RF-driven quantum systems",
//           "Low-temperature electronics testing"
//         ]
//       },
//       {
//         type: "conclusion",
//         content: "The developed Helium Dipstick system provides a highly integrated and noise-optimized platform for Josephson junction characterization at cryogenic temperatures. By combining DC, RF, and magnetic field capabilities within a single architecture, it enables precise and reproducible measurements essential for superconducting and quantum device research."
//       }
//     ]
//   },
//   {
//     id: "2d-transfer",
//     title: "2D Transfer of Materials – Process and Dynamics",
//     author: "Mr. Sourav Paul (with inputs from Mr. Vineet Pandey)",
//     affiliation: "Materials Science Centre, IIT Kharagpur",
//     icon: Layers,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact during transfer. This application note outlines a universal dry transfer method implemented using the 2D Transfer System from Cryonano Labs, enabling reliable and reproducible stacking of 2D materials such as graphene, h-BN, and TMDs.",
//           "Using this system, multiple heterostructures have been successfully fabricated with high precision, leading to published research on interlayer coupling and stacking order in layered materials."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "System Configuration"
//       },
//       {
//         type: "content",
//         content: [
//           "The 2D transfer setup consists of two primary stages:"
//         ]
//       },
//       {
//         type: "bullets",
//         items: [
//           "XYθ Stage: Enables precise lateral positioning and rotational alignment",
//           "XYZ Stage: Equipped with a cantilever-mounted plate for controlled vertical motion"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "This configuration allows fine control over alignment and contact during the transfer process under an optical microscope."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Transfer Method: Universal Dry Transfer (PDMS/PPC)"
//       },
//       {
//         type: "content",
//         content: [
//           "The process uses a Polydimethylsiloxane (PDMS) / Polypropylene Carbonate (PPC) based dry transfer technique, widely adopted for clean and controlled stacking of 2D materials."
//         ]
//       },
//       {
//         type: "steps",
//         title: "Step-by-Step Process",
//         steps: [
//           {
//             title: "Step 1: Stamp Preparation and Alignment",
//             description: "A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The PDMS/PPC stamp is then mounted upside down and aligned under the microscope with the target sample placed on the substrate (typically SiO₂/Si)."
//           },
//           {
//             title: "Step 2: Pickup of h-BN Flake",
//             description: "A few-layer hexagonal boron nitride (h-BN) flake is first picked up from the substrate. Pickup temperature: ~65°C. Substrate: SiO₂/Si. During this step, real-time optical monitoring is critical to observe initial contact, interface formation, and successful pickup of the flake onto the PDMS/PPC stamp."
//           },
//           {
//             title: "Step 3: Pickup of Additional 2D Materials",
//             description: "Other exfoliated 2D materials such as Graphene and Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Pickup temperature: ~55°C. Requires precise alignment of the new flake with the existing stack. This step enables controlled stacking and formation of complex heterostructures."
//           },
//           {
//             title: "Step 4: Final Transfer and Release",
//             description: "The assembled stack (hBN / 2D material / hBN) is transferred onto a target substrate. Transfer temperature: ~85°C. The stack is aligned and brought into contact with the substrate. The cantilever stage is slowly retracted, allowing the PDMS/PPC to detach. Post-transfer cleaning: Acetone rinse to remove PPC residue, followed by IPA cleaning. This results in a clean, well-defined heterostructure."
//           }
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Process Dynamics and Key Observations"
//       },
//       {
//         type: "content",
//         content: [
//           "A critical aspect of successful transfer is real-time optical monitoring during the contact phase."
//         ]
//       },
//       {
//         type: "bullets",
//         items: [
//           "As the stamp approaches the substrate, interference fringes appear",
//           "These fringes indicate proximity and uniformity of contact",
//           "The transition from partial to full contact must be carefully controlled"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "Understanding these live optical micrographs is essential for: avoiding bubbles and contaminants, ensuring uniform stacking, and achieving high-quality interfaces."
//         ]
//       },
//       {
//         type: "features-grid",
//         title: "Key Advantages of the Cryonano 2D Transfer System",
//         items: [
//           { icon: Target, title: "High‑Precision Alignment (XYθ)", desc: "Precise lateral and rotational control for accurate stacking." },
//           { icon: Move, title: "Stable Vertical Motion (XYZ)", desc: "Cantilever stage ensures smooth, controlled approach and retraction." },
//           { icon: Layers, title: "Dry Transfer Compatibility", desc: "Optimized for PDMS/PPC technique for clean, contamination‑free transfer." },
//           { icon: Eye, title: "Real‑Time Microscopy", desc: "Live optical monitoring to observe interference fringes and contact quality." },
//           { icon: Layers2, title: "Complex Heterostructures", desc: "Enables fabrication of multi‑layer stacks with diverse 2D materials." }
//         ]
//       },
//       {
//         type: "applications",
//         title: "Applications",
//         items: [
//           "Van der Waals heterostructure fabrication",
//           "Graphene-based devices",
//           "TMD-based optoelectronics",
//           "Quantum materials research",
//           "Layered material interface studies"
//         ]
//       },
//       {
//         type: "publication",
//         title: "Research Output",
//         content: "The described process has contributed to published work:",
//         citation: "\"Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂\" — Sourav Paul et al., Journal of Applied Physics, 133, 114301 (2023)"
//       },
//       {
//         type: "conclusion",
//         content: "The Cryonano 2D Transfer System enables precise, repeatable, and contamination-free assembly of 2D heterostructures using a universal dry transfer method. Control over alignment, temperature, and interfacial dynamics—combined with real-time optical feedback—ensures high-quality device fabrication for advanced materials research."
//       }
//     ]
//   },
//   {
//     id: "electromagnet-optical",
//     title: "Electromagnet with Optical Access — Installation at INST Mohali",
//     author: "Cryonano Labs Engineering Team",
//     affiliation: "Institute of Nano Science and Technology (INST), Mohali",
//     icon: Magnet,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "A custom electromagnet with optical access was designed and installed at the Institute of Nano Science and Technology (INST), Mohali. The system was engineered to meet the specific requirements of magneto-optic experiments, enabling laser-based characterization under controlled magnetic fields.",
//           "The complexity of the electromagnet involved drilling a bore at the center of the pole pieces for optical access. The user needed to send a laser through the center holes for Magneto-Optic experiments."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Setup Details"
//       },
//       {
//         type: "bullets",
//         items: [
//           "Datasheet created with Gaussmeter and transverse probes for checking field uniformity",
//           "The electromagnet features straight, perfectly aligned holes along the axis of the magnetic pole pieces",
//           "Final installation of the electromagnet along with the water chiller for cooling of the coils"
//         ]
//       },
//       {
//         type: "features-grid",
//         title: "Key Features",
//         items: [
//           { icon: Eye, title: "Optical Access", desc: "Precision-drilled holes through pole pieces for laser beam transmission." },
//           { icon: Magnet, title: "High Field Uniformity", desc: "Validated with Gaussmeter and transverse probes." },
//           { icon: Droplets, title: "Water Cooling", desc: "Integrated chiller for continuous high-current operation." },
//           { icon: Settings, title: "Seamless Integration", desc: "Compact design for lab-scale experiments." }
//         ]
//       },
//       {
//         type: "documentation",
//         title: "Documentation",
//         content: "Document: Manual of EMCT2 with optical access compatibility."
//       },
//       {
//         type: "conclusion",
//         content: "The electromagnet with optical access at INST Mohali demonstrates Cryonano's capability to deliver custom-engineered solutions for advanced research. The system supports magneto-optical studies, enabling innovative experiments in condensed matter physics and materials science."
//       }
//     ]
//   }
// ];

// // ==========================================
// // SECTION RENDERER COMPONENT
// // ==========================================
// const renderSection = (section: any, index: number) => {
//   const key = index;

//   switch (section.type) {
//     case "overview":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
//           {section.content.map((p: string, idx: number) => (
//             <p key={idx} className="text-base">{p}</p>
//           ))}
//         </motion.div>
//       );

//     case "features":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm mt-6">
//           <h4 className="text-lg font-bold text-slate-800 mb-4">{section.title}</h4>
//           <ul className="space-y-3">
//             {section.items.map((item: string, idx: number) => (
//               <li key={idx} className="flex items-start gap-3 text-base text-slate-700 font-medium">
//                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//           {section.note && (
//             <p className="text-sm text-slate-500 font-medium mt-4 border-t border-slate-200 pt-4">{section.note}</p>
//           )}
//         </motion.div>
//       );

//     case "subtitle":
//       return (
//         <motion.h3 key={key} variants={fadeInUp} className="font-display text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-4">
//           {section.title}
//         </motion.h3>
//       );

//     case "content":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-4">
//           {section.content.map((p: string, idx: number) => (
//             <p key={idx} className="text-base">{p}</p>
//           ))}
//         </motion.div>
//       );

//     case "bullets":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="mt-4 mb-6">
//           {section.title && <h4 className="text-lg font-bold text-slate-800 mb-3">{section.title}</h4>}
//           <ul className="space-y-2">
//             {section.items.map((item: string, idx: number) => (
//               <li key={idx} className="flex items-start gap-3 text-base text-slate-600 font-medium">
//                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       );

//     case "publications":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-red-50/50 border border-red-100 rounded-2xl p-6 mt-6 shadow-sm">
//           <h4 className="text-base font-bold text-slate-800 mb-3">{section.title}</h4>
//           <ul className="space-y-2 text-base text-slate-700 font-medium">
//             {section.items.map((item: string, idx: number) => (
//               <li key={idx} className="flex gap-2 items-center"><ChevronRight className="w-4 h-4 text-primary" /> {item}</li>
//             ))}
//           </ul>
//           {section.note && (
//             <p className="text-sm text-slate-600 font-medium mt-4 border-t border-red-100 pt-4">{section.note}</p>
//           )}
//         </motion.div>
//       );

//     case "benefits":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm mt-8">
//           <h4 className="font-display text-2xl font-bold text-slate-900 mb-6">{section.title}</h4>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {section.items.map((item: any, idx: number) => (
//               <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
//                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-bold text-slate-800 text-sm mb-1">{item.title}</p>
//                   <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       );

//     case "design-grid":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="grid sm:grid-cols-2 gap-5 mt-6">
//           {section.items.map((item: any, idx: number) => (
//             <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
//               <h5 className="font-bold text-slate-900 text-base mb-2">{item.title}</h5>
//               <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </motion.div>
//       );

//     case "features-grid":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm mt-8">
//           <h4 className="font-display text-2xl font-bold text-slate-900 mb-6">{section.title}</h4>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {section.items.map((item: any, idx: number) => {
//               const Icon = item.icon || CheckCircle2;
//               return (
//                 <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:-translate-y-1 transition-all">
//                   <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4">
//                     <Icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <h5 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h5>
//                   <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       );

//     case "applications":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mt-8">
//           <h4 className="font-display text-xl font-bold text-slate-900 mb-4">{section.title}</h4>
//           <div className="flex flex-wrap gap-3">
//             {section.items.map((item: string, idx: number) => (
//               <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700">
//                 {item}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       );

//     case "steps":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="mt-8">
//           <h4 className="font-display text-2xl font-bold text-slate-900 mb-6">{section.title}</h4>
//           <div className="space-y-4">
//             {section.steps.map((step: any, idx: number) => (
//               <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
//                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
//                   <span className="text-base font-extrabold text-primary">{idx + 1}</span>
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h5>
//                   <p className="text-base text-slate-600 font-medium leading-relaxed">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       );

//     case "publication":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-8">
//           <h4 className="font-display text-xl font-bold text-slate-900 mb-2">{section.title}</h4>
//           <p className="text-base text-slate-600 font-medium mb-3">{section.content}</p>
//           <div className="bg-white p-4 border border-slate-200 rounded-xl">
//              <p className="text-sm font-bold text-slate-800 italic">"{section.citation}"</p>
//           </div>
//         </motion.div>
//       );

//     case "documentation":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-red-50/50 border border-red-100 rounded-2xl p-6 mt-8">
//           <h4 className="font-bold text-slate-800 mb-2">{section.title}</h4>
//           <p className="text-base text-slate-700 font-medium">{section.content}</p>
//         </motion.div>
//       );

//     case "conclusion":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-slate-50 border-l-4 border-primary rounded-r-3xl p-8 mt-10 shadow-sm">
//           <div className="flex items-start gap-4">
//             <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
//             <div>
//               <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-widest mb-3">Conclusion</h4>
//               <p className="text-slate-700 leading-relaxed font-medium text-base">{section.content}</p>
//             </div>
//           </div>
//         </motion.div>
//       );

//     default:
//       return null;
//   }
// };

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// export function ApplicationNotesPage() {
//   const [activeNote, setActiveNote] = useState<string | null>(null);
//   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.getAttribute('data-note-id');
//             if (id) setActiveNote(id);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     Object.values(sectionRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
//         <Navbar />

//         {/* ========================================== */}
//         {/* HERO SECTION */}
//         {/* ========================================== */}
//         <section className="relative pt-32 pb-24 px-6 text-center z-10 bg-white border-b border-slate-200 overflow-hidden">
//           <motion.div
//             animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-red-100 to-transparent blur-3xl pointer-events-none"
//           />

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="absolute top-24 left-6 z-20 hidden lg:block"
//           >
//             <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 font-bold hover:text-primary hover:border-primary transition-all group text-sm shadow-sm">
//               <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//               <span>Back to Home</span>
//             </Link>
//           </motion.div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="show"
//             className="relative z-10 max-w-4xl mx-auto"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-red-50 text-primary text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
//               <BookOpen className="w-3.5 h-3.5" /> Research Library
//             </motion.div>
//             <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#0A2647] tracking-tight mb-8">
//               Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Notes</span>
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
//               Explore detailed deployments of CRYONANO instruments in cutting-edge 
//               condensed matter, quantum, and cryogenic research experiments.
//             </motion.p>
//           </motion.div>
//         </section>

//         {/* ========================================== */}
//         {/* APPLICATION NOTES DYNAMIC RENDER */}
//         {/* ========================================== */}
//         <div className="bg-slate-50">
//           {applicationNotes.map((note, idx) => {
//             const Icon = note.icon;
//             return (
//               <section
//                 key={note.id}
//                 ref={(el) => { sectionRefs.current[note.id] = el; }}
//                 data-note-id={note.id}
//                 className="relative z-10 py-20 lg:py-28 border-b border-slate-200 last:border-b-0"
//               >
//                 <div className="max-w-4xl mx-auto px-6">
                  
//                   {/* Note Header */}
//                   <motion.div
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, margin: "-50px" }}
//                     variants={staggerContainer}
//                     className="mb-12"
//                   >
//                     <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
//                       <div className="rounded-2xl bg-white border border-slate-200 p-4 shrink-0 shadow-sm">
//                         <Icon className="h-8 w-8 text-primary" />
//                       </div>
//                       <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A2647] leading-[1.1]">
//                         {note.title}
//                       </h2>
//                     </motion.div>
                    
//                     <motion.div variants={fadeInUp} className="inline-flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 pr-8 rounded-2xl border border-slate-200 shadow-sm">
//                       <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xl shrink-0">
//                         {note.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
//                       </div>
//                       <div>
//                         <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-0.5">Application By</p>
//                         <p className="text-[#0A2647] font-extrabold text-lg">{note.author}</p>
//                         <p className="text-slate-600 text-sm font-medium">{note.affiliation}</p>
//                       </div>
//                     </motion.div>
//                   </motion.div>

//                   {/* Note Sections */}
//                   <motion.div 
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true }}
//                     variants={staggerContainer}
//                     className="space-y-4"
//                   >
//                     {note.sections.map((section, sectionIdx) => renderSection(section, sectionIdx))}
//                   </motion.div>

//                 </div>
//               </section>
//             );
//           })}
//         </div>

//         {/* ========================================== */}
//         {/* GLOBAL CTA SECTION                         */}
//         {/* ========================================== */}
//         <CTASection />
        
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// }






















import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Activity, ThermometerSnowflake, Layers, Magnet,
  CheckCircle2, FileText, ArrowLeft, Sparkles,
  Award, Users, Globe, Mail, Microscope,
  Target, Move, Eye, Layers2, ShieldCheck, Radio, Settings,
  Droplets
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

// ==========================================
// DATA – Application Notes (Exact Content from Word Document)
// ==========================================
const applicationNotes = [
  {
    id: "ivs-quantum-hall",
    title: "Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source",
    author: "Prof. Biswajit Karmakar",
    affiliation: "Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata",
    icon: Activity,
    sections: [
      {
        type: "overview",
        content: [
          "Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a 16-bit Digital-to-Analog Isolated Voltage Source (IVS) from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements."
        ]
      },
      {
        type: "features",
        title: "The IVS provides:",
        items: [
          "Four independent, truly bipolar outputs (±10 V each)",
          "Computer-controlled operation (LabVIEW compatible)",
          "Output current up to 10 mA",
          "Electrical isolation to eliminate ground-loop noise"
        ],
        note: "These features make it particularly suitable for sensitive quantum transport experiments."
      },
      {
        type: "subtitle",
        title: "1. Gate Voltage Control in Quantum Hall Systems"
      },
      {
        type: "content",
        content: [
          "In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system."
        ]
      },
      {
        type: "bullets",
        title: "Using the IVS:",
        items: [
          "Multiple gates can be independently biased with high precision",
          "Stable and noise-free voltage control enables accurate tuning of edge mode interactions",
          "The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes"
        ]
      },
      {
        type: "publications",
        title: "This setup has contributed to significant experimental results, leading to publications in:",
        items: [
          "Physical Review Letters (2020)",
          "Physical Review B (2021)"
        ],
        note: "The low-noise and isolated outputs of the IVS are essential in maintaining signal integrity in these delicate measurements."
      },
      {
        type: "subtitle",
        title: "2. Gate Control in Graphene Devices"
      },
      {
        type: "content",
        content: [
          "Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density.",
          "The IVS proves highly effective for this application:"
        ]
      },
      {
        type: "bullets",
        items: [
          "Provides stable back-gate voltage control",
          "Multiple channels can be connected in series to achieve up to ±40 V output",
          "Isolation minimizes interference and improves measurement reliability"
        ]
      },
      {
        type: "content",
        content: [
          "This makes the IVS a practical and flexible solution for graphene transport experiments, including carrier density tuning and field-effect measurements.",
          "Representative graphene device studies can be found in: ACS Applied Nano Materials (2022)"
        ]
      },
      {
        type: "subtitle",
        title: "3. I–V Spectroscopy in Fractional Quantum Hall Systems"
      },
      {
        type: "content",
        content: [
          "I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements.",
          "Typical setup includes: DC voltage excitation (provided by IVS) and AC modulation for lock-in detection."
        ]
      },
      {
        type: "bullets",
        title: "Key advantages of using the IVS in this context:",
        items: [
          "Low-noise 16-bit resolution enables precise voltage sweeps",
          "Electrical isolation eliminates ground loops",
          "Stable DC bias improves accuracy in differential conductance measurements"
        ]
      },
      {
        type: "content",
        content: [
          "This results in clean, high-resolution spectroscopic data, critical for studying fractional quantum Hall physics."
        ]
      },
      {
        type: "benefits",
        title: "Key Benefits of the IVS in Research Applications",
        items: [
          { title: "True Bipolar Outputs", desc: "Flexible biasing with ±10 V per channel" },
          { title: "Scalable Voltage Range", desc: "Up to ±40 V via series configuration" },
          { title: "Low‑Noise Performance", desc: "16‑bit resolution for sensitive measurements" },
          { title: "Complete Isolation", desc: "Eliminates ground‑loop interference" },
          { title: "Multi‑Channel Operation", desc: "Four independent channels for complex devices" }
        ]
      },
      {
        type: "conclusion",
        content: "The Isolated Voltage Source (IVS) from Cryonano Labs has proven to be a versatile and reliable tool for advanced condensed matter experiments. Its combination of precision, low noise, and isolation makes it particularly well-suited for: Quantum Hall edge state studies, Graphene device characterization, High-resolution I–V spectroscopy. Its integration into experimental setups enables reproducible and high-quality measurements, supporting cutting-edge research in quantum transport."
      }
    ]
  },
  {
    id: "helium-dipstick",
    title: "Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions",
    author: "Dr. Deep Talukdar",
    affiliation: "Cryonano Labs",
    icon: ThermometerSnowflake,
    sections: [
      {
        type: "overview",
        content: [
          "Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.",
          "This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under: DC bias conditions, RF excitation (up to 18 GHz), and External magnetic field (~0.1 Tesla).",
          "The system integrates electrical isolation, thermal management, and electromagnetic shielding to ensure high-fidelity measurements."
        ]
      },
      {
        type: "subtitle",
        title: "Objective"
      },
      {
        type: "content",
        content: [
          "The goal was to design and fabricate a dipstick system capable of:",
          "• Performing low-noise I–V measurements of Josephson junctions at 4 K",
          "• Supporting simultaneous DC, RF, and magnetic field inputs",
          "• Providing a modular and scalable wiring architecture for complex devices"
        ]
      },
      {
        type: "subtitle",
        title: "Measurement Requirements"
      },
      {
        type: "content",
        content: [
          "The system was designed to meet the following specifications:",
          "• 24 DC measurement lines",
          "• Integrated 24-channel cryogenic low-pass DC-RF filters",
          "• Support for both: in-plane measurements, out-of-plane measurements",
          "• Signal breakout via: Fisher connectors → 24 BNC outputs",
          "• Integrated room temperature RF filtering",
          "This configuration enables clean signal routing while minimizing noise and interference."
        ]
      },
      {
        type: "subtitle",
        title: "System Design and Implementation"
      },
      {
        type: "content",
        content: [
          "To meet the above requirements, a robust and modular dipstick architecture was developed:"
        ]
      },
      {
        type: "design-grid",
        items: [
          {
            title: "Mechanical & Structural Design",
            desc: "Fabricated using a stainless steel dipstick for mechanical stability and cryogenic compatibility. Three independent stainless steel tubes used to isolate: DC measurement lines, Heater and temperature sensor (Cernox) lines, and Magnet DC supply lines."
          },
          {
            title: "RF Integration",
            desc: "A semi-rigid RF cable was routed from the top as an antenna. Supports RF signal injection up to 18 GHz. Enables high-frequency excitation for Josephson junction studies."
          },
          {
            title: "Filtering & Thermal Management",
            desc: "Integrated 24-line cryogenic low-pass filters for noise suppression. Wire thermalization bobbins used inline to reduce thermal load. Additional room temperature RF filters for improved signal integrity."
          },
          {
            title: "Sample Mounting",
            desc: "Custom gold-plated OFC (Oxygen-Free Copper) sample holder. Supports both: in-plane chip carriers, out-of-plane chip carriers. Ensures excellent thermal conductivity and electrical stability."
          },
          {
            title: "Wiring & Connectivity",
            desc: "BeCu (Beryllium Copper) wire looms used for reliable cryogenic connections. Designed with appropriate breaks for thermal anchoring and strain relief. External breakout via Fisher connectors to 24 BNC connectors."
          },
          {
            title: "Magnetic Shielding",
            desc: "Mu-metal shielding around the sample enclosure. Sealed using indium gaskets. Protects against ambient magnetic interference, including Earth's magnetic field."
          }
        ]
      },
      {
        type: "features-grid",
        title: "Key Features and Advantages",
        items: [
          { icon: ShieldCheck, title: "24-Channel Filtered DC", desc: "24 lines with integrated cryogenic low‑pass filters for clean measurements." },
          { icon: Radio, title: "RF up to 18 GHz", desc: "Semi‑rigid RF cable routed as an antenna for high‑frequency excitation." },
          { icon: Magnet, title: "Integrated Magnet (~0.1 T)", desc: "On‑board magnetic field source for Josephson junction characterization." },
          { icon: ThermometerSnowflake, title: "Superior Thermal Anchoring", desc: "Wire thermalization bobbins and BeCu looms minimize heat load." },
          { icon: Settings, title: "Modular & Scalable", desc: "Three isolated stainless steel tubes separate DC, heater/sensor, and magnet lines." },
          { icon: Layers, title: "EMI Shielding", desc: "Mu‑metal shield with indium gaskets guards against ambient magnetic interference." }
        ]
      },
      {
        type: "applications",
        title: "Applications",
        items: [
          "Josephson junction I–V characterization",
          "Superconducting device research",
          "Quantum transport experiments",
          "RF-driven quantum systems",
          "Low-temperature electronics testing"
        ]
      },
      {
        type: "conclusion",
        content: "The developed Helium Dipstick system provides a highly integrated and noise-optimized platform for Josephson junction characterization at cryogenic temperatures. By combining DC, RF, and magnetic field capabilities within a single architecture, it enables precise and reproducible measurements essential for superconducting and quantum device research."
      }
    ]
  },
  {
    id: "2d-transfer",
    title: "2D Transfer of Materials – Process and Dynamics",
    author: "Mr. Sourav Paul (with inputs from Mr. Vineet Pandey)",
    affiliation: "Materials Science Centre, IIT Kharagpur",
    icon: Layers,
    sections: [
      {
        type: "overview",
        content: [
          "The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact during transfer. This application note outlines a universal dry transfer method implemented using the 2D Transfer System from Cryonano Labs, enabling reliable and reproducible stacking of 2D materials such as graphene, h-BN, and TMDs.",
          "Using this system, multiple heterostructures have been successfully fabricated with high precision, leading to published research on interlayer coupling and stacking order in layered materials."
        ]
      },
      {
        type: "subtitle",
        title: "System Configuration"
      },
      {
        type: "content",
        content: [
          "The 2D transfer setup consists of two primary stages:",
          "• XYθ Stage: Enables precise lateral positioning and rotational alignment",
          "• XYZ Stage: Equipped with a cantilever-mounted plate for controlled vertical motion",
          "This configuration allows fine control over alignment and contact during the transfer process under an optical microscope."
        ]
      },
      {
        type: "subtitle",
        title: "Transfer Method: Universal Dry Transfer (PDMS/PPC)"
      },
      {
        type: "content",
        content: [
          "The process uses a Polydimethylsiloxane (PDMS) / Polypropylene Carbonate (PPC) based dry transfer technique, widely adopted for clean and controlled stacking of 2D materials."
        ]
      },
      {
        type: "steps",
        title: "Step-by-Step Process",
        steps: [
          {
            title: "Stamp Preparation and Alignment",
            description: "A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The PDMS/PPC stamp is then mounted upside down and aligned under the microscope with the target sample placed on the substrate (typically SiO₂/Si)."
          },
          {
            title: "Pickup of h-BN Flake",
            description: "A few-layer hexagonal boron nitride (h-BN) flake is first picked up from the substrate. Pickup temperature: ~65°C. Substrate: SiO₂/Si. During this step, real-time optical monitoring is critical to observe: initial contact between stamp and flake, interface formation, and successful pickup of the flake onto the PDMS/PPC stamp."
          },
          {
            title: "Pickup of Additional 2D Materials",
            description: "Other exfoliated 2D materials such as: Graphene, Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Pickup temperature: ~55°C. Requires precise alignment of the new flake with the existing stack. This step enables controlled stacking and formation of complex heterostructures."
          },
          {
            title: "Final Transfer and Release",
            description: "The assembled stack (hBN / 2D material / hBN) is transferred onto a target substrate. Transfer temperature: ~85°C. The stack is aligned and brought into contact with the substrate. The cantilever stage is slowly retracted, allowing the PDMS/PPC to detach. Post-transfer cleaning: Acetone rinse to remove PPC residue, followed by IPA cleaning. This results in a clean, well-defined heterostructure."
          }
        ]
      },
      {
        type: "subtitle",
        title: "Process Dynamics and Key Observations"
      },
      {
        type: "content",
        content: [
          "A critical aspect of successful transfer is real-time optical monitoring during the contact phase.",
          "• As the stamp approaches the substrate, interference fringes appear",
          "• These fringes indicate proximity and uniformity of contact",
          "• The transition from partial to full contact must be carefully controlled",
          "Understanding these live optical micrographs is essential for: Avoiding bubbles and contaminants, Ensuring uniform stacking, and Achieving high-quality interfaces."
        ]
      },
      {
        type: "features-grid",
        title: "Key Advantages of the Cryonano 2D Transfer System",
        items: [
          { icon: Target, title: "High‑Precision Alignment (XYθ)", desc: "Precise lateral and rotational control for accurate stacking." },
          { icon: Move, title: "Stable Vertical Motion (XYZ)", desc: "Cantilever stage ensures smooth, controlled approach and retraction." },
          { icon: Layers, title: "Dry Transfer Compatibility", desc: "Optimized for PDMS/PPC technique for clean, contamination‑free transfer." },
          { icon: Eye, title: "Real‑Time Microscopy", desc: "Live optical monitoring to observe interference fringes and contact quality." },
          { icon: Layers2, title: "Complex Heterostructures", desc: "Enables fabrication of multi‑layer stacks with diverse 2D materials." }
        ]
      },
      {
        type: "applications",
        title: "Applications",
        items: [
          "Van der Waals heterostructure fabrication",
          "Graphene-based devices",
          "TMD-based optoelectronics",
          "Quantum materials research",
          "Layered material interface studies"
        ]
      },
      {
        type: "publication",
        title: "Research Output",
        content: "The described process has contributed to published work:",
        citation: "\"Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂\" — Sourav Paul et al., Journal of Applied Physics, 133, 114301 (2023)"
      },
      {
        type: "conclusion",
        content: "The Cryonano 2D Transfer System enables precise, repeatable, and contamination-free assembly of 2D heterostructures using a universal dry transfer method. Control over alignment, temperature, and interfacial dynamics—combined with real-time optical feedback—ensures high-quality device fabrication for advanced materials research."
      }
    ]
  },
  {
    id: "electromagnet-optical",
    title: "Electromagnet with Optical Access — Installation at INST Mohali",
    author: "Cryonano Labs Engineering Team",
    affiliation: "Institute of Nano Science and Technology (INST), Mohali",
    icon: Magnet,
    sections: [
      {
        type: "overview",
        content: [
          "A custom electromagnet with optical access was designed and installed at the Institute of Nano Science and Technology (INST), Mohali. The system was engineered to meet the specific requirements of magneto-optic experiments, enabling laser-based characterization under controlled magnetic fields.",
          "The complexity of the electromagnet involved drilling a bore at the center of the pole pieces for optical access. The user needed to send a laser through the center holes for Magneto-Optic experiments."
        ]
      },
      {
        type: "subtitle",
        title: "Setup Details"
      },
      {
        type: "content",
        content: [
          "• Datasheet created with Gaussmeter and transverse probes for checking field uniformity",
          "• The electromagnet features straight, perfectly aligned holes along the axis of the magnetic pole pieces",
          "• Final installation of the electromagnet along with the water chiller for cooling of the coils"
        ]
      },
      {
        type: "features-grid",
        title: "Key Features",
        items: [
          { icon: Eye, title: "Optical Access", desc: "Precision-drilled holes through pole pieces for laser beam transmission." },
          { icon: Magnet, title: "High Field Uniformity", desc: "Validated with Gaussmeter and transverse probes." },
          { icon: Droplets, title: "Water Cooling", desc: "Integrated chiller for continuous high-current operation." },
          { icon: Settings, title: "Seamless Integration", desc: "Compact design for lab-scale experiments." }
        ]
      },
      {
        type: "documentation",
        title: "Documentation",
        content: "Document: Manual of EMCT2 with optical access compatibility."
      },
      {
        type: "conclusion",
        content: "The electromagnet with optical access at INST Mohali demonstrates Cryonano's capability to deliver custom-engineered solutions for advanced research. The system supports magneto-optical studies, enabling innovative experiments in condensed matter physics and materials science."
      }
    ]
  }
];

// ==========================================
// SECTION RENDERER COMPONENT
// ==========================================
const renderSection = (section: any, index: number) => {
  const key = index;

  switch (section.type) {
    case "overview":
      return (
        <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-3">
          {section.content.map((p: string, idx: number) => (
            <p key={idx} className="text-base">{p}</p>
          ))}
        </motion.div>
      );

    case "features":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mt-3">
          <h4 className="font-bold text-slate-800 mb-2 text-sm">{section.title}</h4>
          <ul className="space-y-1.5">
            {section.items.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          {section.note && (
            <p className="text-sm text-slate-500 italic mt-3 border-t border-slate-100 pt-3">{section.note}</p>
          )}
        </motion.div>
      );

    case "subtitle":
      return (
        <motion.h3 key={key} variants={fadeInUp} className="text-lg lg:text-xl font-extrabold text-slate-900 mt-6 mb-3">
          {section.title}
        </motion.h3>
      );

    case "content":
      return (
        <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-2">
          {section.content.map((p: string, idx: number) => (
            <p key={idx} className="text-base">{p}</p>
          ))}
        </motion.div>
      );

    case "bullets":
      return (
        <motion.div key={key} variants={fadeInUp} className="mt-2 mb-3">
          {section.title && <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>}
          <ul className="space-y-1.5">
            {section.items.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      );

    case "publications":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
          <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
          <ul className="space-y-1 text-sm text-slate-700 font-medium">
            {section.items.map((item: string, idx: number) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
          {section.note && (
            <p className="text-sm text-slate-600 mt-2 border-t border-primary/10 pt-2">{section.note}</p>
          )}
        </motion.div>
      );

    case "benefits":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-primary/20 shadow-sm mt-4">
          <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {section.items.map((item: any, idx: number) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      );

    case "design-grid":
      return (
        <motion.div key={key} variants={fadeInUp} className="grid sm:grid-cols-2 gap-3 mt-3">
          {section.items.map((item: any, idx: number) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h5 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h5>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      );

    case "features-grid":
      return (
        <motion.div key={key} variants={fadeInUp} className="mt-4">
          <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {section.items.map((item: any, idx: number) => {
              const Icon = item.icon || CheckCircle2;
              return (
                <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h5 className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</h5>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      );

    case "applications":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mt-4">
          <h4 className="text-base font-extrabold text-slate-900 mb-2.5">{section.title}</h4>
          <div className="flex flex-wrap gap-2">
            {section.items.map((item: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      );

    case "steps":
      return (
        <motion.div key={key} variants={fadeInUp} className="mt-3">
          <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
          <div className="space-y-3">
            {section.steps.map((step: any, idx: number) => (
              <div key={idx} className="flex gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-extrabold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 text-sm">{step.title}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      );

    case "publication":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
          <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
          <p className="text-sm text-slate-600 mb-2">{section.content}</p>
          <p className="text-sm font-semibold text-slate-800 italic">"{section.citation}"</p>
        </motion.div>
      );

    case "documentation":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
          <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
          <p className="text-sm text-slate-600">{section.content}</p>
        </motion.div>
      );

    case "conclusion":
      return (
        <motion.div key={key} variants={fadeInUp} className="bg-white border-l-4 border-primary rounded-r-xl p-5 mt-4 shadow-sm">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-widest mb-1.5">Conclusion</h4>
              <p className="text-slate-700 leading-relaxed text-sm">{section.content}</p>
            </div>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export function ApplicationNotesPage() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-note-id');
            if (id) setActiveNote(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* ========================================== */}
      {/* HERO SECTION - Reduced Whitespace */}
      {/* ========================================== */}
      <section className="relative pt-20 pb-12 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100 overflow-hidden">
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
            <BookOpen className="w-3 h-3" /> Research Library
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Notes</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Detailed application notes written by staff and institutional users,
            demonstrating the deployment of CRYONANO instruments in cutting-edge
            quantum and cryogenic research.
          </motion.p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-5 mt-5">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-bold">{applicationNotes.length}</span>
              <span>Application Notes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-bold">3+</span>
              <span>Institutions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-bold">5+</span>
              <span>Publications</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* APPLICATION NOTES - Reduced Whitespace */}
      {/* ========================================== */}
      {applicationNotes.map((note, idx) => {
        const Icon = note.icon;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={note.id}
            ref={(el) => { sectionRefs.current[note.id] = el; }}
            data-note-id={note.id}
            className={`relative z-10 py-10 lg:py-12 ${isEven ? 'bg-white' : 'bg-slate-50/50'} border-t border-slate-100`}
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* Header */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                variants={staggerContainer}
                className="mb-6"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 shrink-0 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
                      {note.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mt-1">
                      <span className="text-sm font-bold text-primary">{note.author}</span>
                      <span className="text-xs text-slate-400 hidden sm:block">•</span>
                      <span className="text-sm text-slate-500">{note.affiliation}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Sections */}
              <div className="space-y-3">
                {note.sections.map((section: any, sectionIdx: number) => {
                  return renderSection(section, sectionIdx);
                })}
              </div>

              {/* Separator between notes */}
              {idx < applicationNotes.length - 1 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Next Application
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* ========================================== */}
      {/* CTA SECTION - with Contact Us Button */}
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
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              Have a Research Application?
            </h2>
            <p className="text-slate-600 text-base mb-5 max-w-xl mx-auto">
              Share your application note with us or contact our engineering team
              for custom solutions tailored to your experiments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                  <Microscope className="w-4 h-4" />
                  Explore Products
                </button>
              </Link>
              <a href="mailto:contact@cryonano.com">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                  <Mail className="w-4 h-4" />
                  Submit Your Application Note
                </button>
              </a>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary text-slate-700 font-extrabold text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                  Contact Us
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

export default ApplicationNotesPage;