// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Calendar,
//   Users,
//   TrendingUp,
//   Quote,
//   ChevronRight,
//   Globe,
//   FileText,
//   Star,
//   Trophy,
//   BookOpen,
//   CheckCircle2,
//   Sparkles,
//   ArrowUpRight,
//   Newspaper,
//   Microscope,
//   Building2,
//   Cpu,
//   Zap,
//   Award,
//   ExternalLink,
//   Train,
//   Network,
//   Rocket,
//   RefreshCw,
//   Clock,
//   Pin,
//   Share2,
//   Eye,
//   MoveRight,
// } from "lucide-react";

// const NewsEvents = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
//   const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

//   // State for flip cards
//   const [flippedStates, setFlippedStates] = useState<{ [key: number]: boolean }>({});

//   const toggleFlip = (index: number) => {
//     setFlippedStates((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   // News data for the grid
//   const newsGrid = [
//     {
//       id: 2,
//       title: "Cryonano Showcases Advanced 2D Materials Solutions at ALMOND 2023",
//       date: "March 3–5, 2023",
//       location: "Toshali Sands Resort, Bhubaneswar",
//       image: "/images/Almond_2023.avif",
//       icon: Microscope,
//       excerpt:
//         "Cryonano Labs participated in the 1st National Conference on Advances in Low-dimensional Materials for Optoelectronic and Nano Devices...",
//       fullContent: `
//         Cryonano Labs participated in the 1st National Conference on "Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)", held at Toshali Sands Resort from March 3rd–5th, 2023. The conference was organized by the Institute of Physics, Bhubaneswar.
//         Alongside Aimil Ltd., Cryonano engaged with researchers, scientists, and industry professionals, showcasing its capabilities in advanced characterization and fabrication systems for low-dimensional materials.
//         As 2D materials continue to be a key area of research in next-generation electronics and optoelectronic applications, Cryonano's solutions demonstrated strong alignment with the needs of the scientific community—enabling precise control, repeatability, and reliability across experimental workflows.
//         Key Focus Areas at ALMOND 2023:
//         • 2D materials: synthesis and applications
//         • Resistive switching and neuromorphic computing
//         • Low-dimensional materials for energy and optoelectronic applications
//         • Computational studies: density functional theory and advanced material simulations
//         Conference Highlights:
//         At ALMOND 2023, Cryonano Labs showcased key subsystems supporting precision fabrication and measurement workflows:
//         Nano Stage System: Designed for high-resolution nanoscale positioning and probing, enabling precise electrical and physical characterization of advanced materials and devices.
//         Motorised Stages (XYθ Sample + XYZ Stamp Stage): An integrated stage system providing precise planar alignment (XYθ) along with controlled vertical and lateral motion (XYZ), enabling accurate layer alignment and deterministic transfer of 2D materials.
//         2D Transfer System (System-Level Representation): Showcased as part of the overall workflow, demonstrating Cryonano's capability to integrate motion control and transfer processes into a cohesive fabrication platform.
//         These systems together highlight Cryonano's modular and integrated approach to enabling reliable fabrication and characterization of low-dimensional material systems.
//         Driving the Future of Low-Dimensional Materials Research:
//         Cryonano's participation at ALMOND 2023 reflects its continued commitment to supporting cutting-edge research through application-driven instrumentation, bridging the gap between material development and real-world device innovation.
//       `,
//     },
//     {
//       id: 3,
//       title: "Cryonano Strengthens Global Partnerships to Accelerate Make-in-India Innovation",
//       date: "2024",
//       location: "Nanjing, China",
//       image: "/images/Agreement Signing Ceremony, Nanjing , China.avif",
//       icon: Network,
//       excerpt:
//         "Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives...",
//       fullContent: `
//         Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives in high-end scientific instrumentation.
//         These collaborations are aimed at accelerating in-house technology development, enabling faster innovation cycles and the introduction of high-quality products tailored for both Indian and international markets.
//         Through these partnerships, Cryonano is expanding its capabilities across key domains, including cryogenic technologies and advanced material science instrumentation, reinforcing its position as a growing contributor to the global research ecosystem.
//         The agreements are expected to significantly enhance product development efficiency, strengthen supply chains, and support the delivery of reliable, application-driven solutions to research and industrial communities.
//         Agreement Signing Ceremony:
//         The partnership agreements were formalized during a signing ceremony held in Nanjing, marking an important milestone in Cryonano's global collaboration efforts.
//         Looking Ahead:
//         With a strong focus on indigenous development supported by global collaboration, Cryonano continues to work towards building a robust ecosystem for next-generation research technologies.
//       `,
//     },
//   ];

//   return (
//     <PageTransition>
//       <div ref={containerRef} className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//         <Navbar />

//         <main>
//           {/* Breadcrumb */}
//           <div className="bg-white/80 border-b border-slate-200 backdrop-blur-md sticky top-[var(--nav-height)] z-40 shadow-sm">
//             <div className="container py-2.5 flex items-center gap-2">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
//               >
//                 <ArrowLeft className="h-3.5 w-3.5" />
//                 Back to Home
//               </Link>
//               <span className="text-xs text-slate-400">/</span>
//               <span className="text-xs font-bold text-primary">News & Events</span>
//             </div>
//           </div>

//           {/* ============================== */}
//           {/* CINEMATIC HERO WITH PULSE EFFECT */}
//           {/* ============================== */}
//           <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-24 lg:py-32">
//             <div className="absolute inset-0 z-0 pointer-events-none">
//               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
//               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
//               <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />

//               {/* Pulse ring animation */}
//               <motion.div
//                 animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-primary/10"
//               />
//               <motion.div
//                 animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
//                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/5"
//               />
//             </div>

//             <motion.div
//               style={{ opacity: heroOpacity, scale: heroScale }}
//               className="container relative z-10 text-center max-w-4xl mx-auto"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="space-y-6"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase shadow-lg shadow-primary/5 backdrop-blur-sm"
//                 >
//                   <Newspaper className="w-4 h-4" />
//                   Latest Updates
//                 </motion.div>

//                 <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
//                   News &{" "}
//                   <span className="relative inline-block">
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-600 to-primary">
//                       Events
//                     </span>
//                     <motion.span
//                       initial={{ width: 0 }}
//                       animate={{ width: "100%" }}
//                       transition={{ delay: 0.8, duration: 0.8 }}
//                       className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full"
//                     />
//                   </span>
//                 </h1>

//                 <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
//                   Stay updated with the latest developments, partnerships, and
//                   industry engagements from Cryonano Labs.
//                 </p>

//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="flex flex-wrap justify-center gap-3 pt-4"
//                 >
//                   <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
//                     <Train className="w-3.5 h-3.5 text-primary" />
//                     AI Predictive Maintenance
//                   </span>
//                   <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
//                     <Microscope className="w-3.5 h-3.5 text-primary" />
//                     ALMOND 2023
//                   </span>
//                   <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
//                     <Globe className="w-3.5 h-3.5 text-primary" />
//                     Global Partnerships
//                   </span>
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400"
//             >
//               <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//                 className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
//               />
//             </motion.div>
//           </section>

//           {/* ============================== */}
//           {/* FEATURED STORY - Vande Bharat (Full-width hero card) */}
//           {/* ============================== */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="container -mt-8 relative z-20"
//           >
//             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl group">
//               {/* Background image with overlay */}
//               <div className="absolute inset-0">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center opacity-20"
//                   style={{
//                     backgroundImage:
//                       "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop')",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
//               </div>

//               <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
//                 <div className="flex flex-wrap items-center gap-4 mb-6">
//                   <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/30 backdrop-blur-sm rounded-full text-xs font-extrabold text-white uppercase tracking-widest border border-primary/30">
//                     <Pin className="w-3.5 h-3.5" />
//                     Featured Story
//                   </span>
//                   <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/10">
//                     <Train className="w-3.5 h-3.5" />
//                     Vande Bharat
//                   </span>
//                   <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white/80 border border-white/10">
//                     <Clock className="w-3.5 h-3.5" />
//                     December 2024
//                   </span>
//                 </div>

//                 <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
//                   AI-Powered Predictive Maintenance System for Vande Bharat Trains
//                 </h2>

//                 <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
//                   Cryonano Labs has developed and delivered an advanced predictive
//                   maintenance system powered by Artificial Intelligence (AI) and
//                   Machine Learning (ML) for deployment within Indian Railways,
//                   supporting the next-generation Vande Bharat Express train sets.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-4 mb-6">
//                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                     <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Impact</p>
//                     <p className="text-white/90 text-sm leading-relaxed">
//                       Real-time monitoring and intelligent analysis of critical
//                       parameters, enabling early detection of potential failures
//                       and significantly improving operational reliability and
//                       uptime.
//                     </p>
//                   </div>
//                   <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
//                     <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Collaboration</p>
//                     <p className="text-white/90 text-sm leading-relaxed">
//                       Implemented in collaboration with the Howrah Division,
//                       contributing to ongoing efforts to modernize railway
//                       infrastructure through advanced technologies.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-4 mt-4">
//                   <a
//                     href="http://timesofindia.indiatimes.com/articleshow/114425799.cms"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     Read Times of India Coverage
//                     <ArrowUpRight className="w-4 h-4" />
//                   </a>
//                   <span className="text-white/50 text-sm italic">
//                     At Cryonano, we are committed to building intelligent, end-to-end
//                     technology solutions that bridge advanced analytics with
//                     real-world infrastructure challenges.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* ============================== */}
//           {/* DIVIDER WITH TIMELINE ACCENT */}
//           {/* ============================== */}
//           <div className="container relative z-10 py-8">
//             <div className="flex items-center gap-4">
//               <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//               <span className="text-xs font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                 More Stories
//                 <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//               </span>
//               <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//             </div>
//           </div>

//           {/* ============================== */}
//           {/* DYNAMIC FLIP CARD GRID */}
//           {/* ============================== */}
//           <section className="container py-4 md:py-8">
//             <div className="grid md:grid-cols-2 gap-8">
//               {newsGrid.map((item, index) => {
//                 const Icon = item.icon;
//                 const isFlipped = flippedStates[index] || false;

//                 return (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.6, delay: index * 0.15 }}
//                     className="relative h-[500px] perspective-1000"
//                     onMouseLeave={() => setFlippedStates((prev) => ({ ...prev, [index]: false }))}
//                   >
//                     <motion.div
//                       className="relative w-full h-full transition-transform duration-700 transform-style-3d"
//                       animate={{ rotateY: isFlipped ? 180 : 0 }}
//                       transition={{ duration: 0.6, ease: "easeInOut" }}
//                     >
//                       {/* FRONT OF CARD */}
//                       <div
//                         className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
//                         onClick={() => toggleFlip(index)}
//                       >
//                         <div className="relative h-48 overflow-hidden bg-slate-200">
//                           <img
//                             src={item.image}
//                             alt={item.title}
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                             onError={(e) => {
//                               e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                           <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
//                             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-primary shadow-lg">
//                               <Calendar className="w-3 h-3" />
//                               {item.date}
//                             </span>
//                             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-primary shadow-lg">
//                               <Pin className="w-3 h-3" />
//                               {item.location}
//                             </span>
//                           </div>
//                         </div>

//                         <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
//                           <div className="flex items-center gap-2 mb-3">
//                             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                               <Icon className="w-4 h-4 text-primary" />
//                             </div>
//                             <span className="text-xs font-bold text-primary uppercase tracking-widest">
//                               News
//                             </span>
//                           </div>

//                           <h3 className="font-display text-xl font-extrabold text-slate-900 leading-tight mb-3 line-clamp-2">
//                             {item.title}
//                           </h3>

//                           <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
//                             {item.excerpt}
//                           </p>

//                           <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
//                             <span className="text-xs text-slate-400 flex items-center gap-1">
//                               <Eye className="w-3 h-3" />
//                               Click to flip
//                             </span>
//                             <motion.div
//                               animate={{ x: [0, 4, 0] }}
//                               transition={{ duration: 1.5, repeat: Infinity }}
//                               className="text-xs font-bold text-primary flex items-center gap-1"
//                             >
//                               Read More <MoveRight className="w-3 h-3" />
//                             </motion.div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* BACK OF CARD (flipped content) */}
//                       <div
//                         className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg cursor-pointer"
//                         style={{ transform: "rotateY(180deg)" }}
//                         onClick={() => toggleFlip(index)}
//                       >
//                         <div className="h-full p-6 overflow-y-auto custom-scrollbar bg-gradient-to-br from-white to-slate-50">
//                           <div className="flex items-center gap-2 mb-4">
//                             <button
//                               onClick={() => toggleFlip(index)}
//                               className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-red-700 transition-colors"
//                             >
//                               <ArrowLeft className="w-3.5 h-3.5" />
//                               Back
//                             </button>
//                             <span className="text-xs text-slate-400">|</span>
//                             <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
//                               Full Story
//                             </span>
//                           </div>

//                           <h3 className="font-display text-lg font-extrabold text-slate-900 leading-tight mb-4">
//                             {item.title}
//                           </h3>

//                           <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed space-y-3">
//                             {item.fullContent.split("\n").map((paragraph, idx) => {
//                               if (paragraph.trim().startsWith("•")) {
//                                 return (
//                                   <li key={idx} className="flex items-start gap-2 text-sm ml-4 list-none">
//                                     <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                                     <span>{paragraph.trim().replace("• ", "")}</span>
//                                   </li>
//                                 );
//                               }
//                               if (paragraph.trim().startsWith("Key Focus Areas") || paragraph.trim().startsWith("Conference Highlights")) {
//                                 return (
//                                   <p key={idx} className="text-sm font-bold text-slate-800 mt-3">
//                                     {paragraph.trim()}
//                                   </p>
//                                 );
//                               }
//                               if (paragraph.trim().startsWith("Nano Stage System") || paragraph.trim().startsWith("Motorised Stages") || paragraph.trim().startsWith("2D Transfer System")) {
//                                 return (
//                                   <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200 mt-2">
//                                     <p className="text-sm font-bold text-slate-800">{paragraph.trim()}</p>
//                                   </div>
//                                 );
//                               }
//                               if (paragraph.trim().startsWith("Agreement Signing Ceremony") || paragraph.trim().startsWith("Looking Ahead") || paragraph.trim().startsWith("Driving the Future")) {
//                                 return (
//                                   <div key={idx} className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-3 border-l-4 border-primary mt-2">
//                                     <p className="text-sm font-bold text-slate-800">{paragraph.trim()}</p>
//                                   </div>
//                                 );
//                               }
//                               if (paragraph.trim()) {
//                                 return (
//                                   <p key={idx} className="text-sm leading-relaxed">
//                                     {paragraph.trim()}
//                                   </p>
//                                 );
//                               }
//                               return null;
//                             })}
//                           </div>

//                           <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-3">
//                             <span className="text-[10px] text-slate-400 flex items-center gap-1">
//                               <Share2 className="w-3 h-3" />
//                               Share this story
//                             </span>
//                             <span className="text-[10px] text-slate-400">|</span>
//                             <span className="text-[10px] text-slate-400 flex items-center gap-1">
//                               <Calendar className="w-3 h-3" />
//                               {item.date}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* IMPACT STATS */}
//           {/* ============================== */}
//           <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-y border-slate-200 overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl" />
//               <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100/20 rounded-full blur-2xl" />
//             </div>

//             <div className="container relative z-10">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="text-center max-w-2xl mx-auto mb-12"
//               >
//                 <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
//                   Impact Across Domains
//                 </h2>
//                 <p className="text-slate-600 mt-2">Key highlights from our recent engagements.</p>
//               </motion.div>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//                 {[
//                   { value: "1", label: "AI Predictive Maintenance System", icon: Train, color: "from-primary/10 to-red-100/10" },
//                   { value: "1", label: "National Conference Participation", icon: Microscope, color: "from-blue-50 to-primary/5" },
//                   { value: "1", label: "International Conference Invite", icon: Globe, color: "from-green-50 to-emerald-100/10" },
//                   { value: "Multiple", label: "Global Strategic Partnerships", icon: Network, color: "from-purple-50 to-pink-100/10" },
//                 ].map((item, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.1 * idx, duration: 0.5 }}
//                     className="group relative text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden"
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                     <div className="relative z-10">
//                       <div className="flex justify-center mb-3">
//                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                           <item.icon className="w-6 h-6 text-primary" />
//                         </div>
//                       </div>
//                       <p className="font-display text-3xl font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-300">
//                         {item.value}
//                       </p>
//                       <p className="text-sm text-slate-600 font-medium mt-1">{item.label}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* CTA */}
//           {/* ============================== */}
//           <section className="relative py-20 bg-white overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5" />
//             <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//             <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />

//             <div className="container relative z-10 text-center max-w-2xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-lg shadow-primary/5 group-hover:shadow-primary/10 transition-shadow">
//                   <Newspaper className="w-8 h-8 text-primary" />
//                 </div>

//                 <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
//                   Stay Connected with<br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
//                     Cryonano Labs
//                   </span>
//                 </h2>
//                 <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
//                   Follow our journey as we continue to innovate, collaborate, and
//                   drive impact across quantum research, cryogenic technology, and
//                   industrial innovation.
//                 </p>

//                 <Link to="/about/awards" className="inline-block">
//                   <button className="group relative px-10 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-primary to-red-600 shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1">
//                     <span className="relative z-10 flex items-center gap-2">
//                       Explore Awards & Recognition
//                       <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//                     </span>
//                     <motion.div
//                       animate={{ x: ["-100%", "200%"] }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                     />
//                   </button>
//                 </Link>
//               </motion.div>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default NewsEvents;






import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Globe,
  FileText,
  Sparkles,
  ArrowUpRight,
  Newspaper,
  Microscope,
  Train,
  Network,
  ExternalLink,
  Clock,
  Pin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// News data
const newsItems = [
  {
    id: 1,
    title: "AI-Powered Predictive Maintenance System for Vande Bharat Trains",
    date: "December 2024",
    location: "Howrah Division, Indian Railways",
    category: "Innovation",
    icon: Train,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    featured: true,
    excerpt:
      "Cryonano Labs has developed and delivered an advanced predictive maintenance system powered by Artificial Intelligence (AI) and Machine Learning (ML) for deployment within Indian Railways, supporting the next-generation Vande Bharat Express train sets.",
    fullContent: `
      <p>Cryonano Labs has developed and delivered an advanced predictive maintenance system powered by Artificial Intelligence (AI) and Machine Learning (ML) for deployment within Indian Railways, supporting the next-generation Vande Bharat Express train sets.</p>
      <p>The system enables real-time monitoring and intelligent analysis of critical parameters, allowing early detection of potential failures and significantly improving operational reliability and uptime. By leveraging data-driven insights, the platform helps shift maintenance strategies from reactive to predictive—reducing downtime and optimizing performance.</p>
      <p>This solution has been implemented in collaboration with the Howrah Division, contributing to ongoing efforts to modernize railway infrastructure through advanced technologies.</p>
      <p>A recent article by The Times of India highlights the broader initiative towards enhancing reliability through predictive systems in this division.</p>
      <p class="font-semibold text-primary">At Cryonano, we are committed to building intelligent, end-to-end technology solutions that bridge advanced analytics with real-world infrastructure challenges.</p>
      <a href="http://timesofindia.indiatimes.com/articleshow/114425799.cms" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-2">
        <ExternalLink className="w-4 h-4" /> Read the Times of India coverage
      </a>
    `,
  },
  {
    id: 2,
    title: "Cryonano Showcases Advanced 2D Materials Solutions at ALMOND 2023",
    date: "March 3–5, 2023",
    location: "Toshali Sands Resort, Bhubaneswar",
    category: "Conference",
    icon: Microscope,
    image: "/images/Almond_2023.avif",
    featured: false,
    excerpt:
      "Cryonano Labs participated in the 1st National Conference on 'Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)', held at Toshali Sands Resort from March 3rd–5th, 2023. The conference was organized by the Institute of Physics, Bhubaneswar.",
    fullContent: `
      <p>Cryonano Labs participated in the 1st National Conference on "Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)", held at Toshali Sands Resort from March 3rd–5th, 2023. The conference was organized by the Institute of Physics, Bhubaneswar.</p>
      <p>Alongside Aimil Ltd., Cryonano engaged with researchers, scientists, and industry professionals, showcasing its capabilities in advanced characterization and fabrication systems for low-dimensional materials.</p>
      <p>As 2D materials continue to be a key area of research in next-generation electronics and optoelectronic applications, Cryonano's solutions demonstrated strong alignment with the needs of the scientific community—enabling precise control, repeatability, and reliability across experimental workflows.</p>
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Key Focus Areas at ALMOND 2023</h4>
      <ul class="list-disc pl-5 space-y-1 text-slate-600">
        <li>2D materials: synthesis and applications</li>
        <li>Resistive switching and neuromorphic computing</li>
        <li>Low-dimensional materials for energy and optoelectronic applications</li>
        <li>Computational studies: density functional theory and advanced material simulations</li>
      </ul>
      <h4 class="font-bold text-slate-800 mt-4 mb-2">Conference Highlights</h4>
      <p>At ALMOND 2023, Cryonano Labs showcased key subsystems supporting precision fabrication and measurement workflows:</p>
      <ul class="list-disc pl-5 space-y-1 text-slate-600">
        <li><span class="font-semibold">Nano Stage System:</span> Designed for high-resolution nanoscale positioning and probing, enabling precise electrical and physical characterization of advanced materials and devices.</li>
        <li><span class="font-semibold">Motorised Stages (XYθ Sample + XYZ Stamp Stage):</span> An integrated stage system providing precise planar alignment (XYθ) along with controlled vertical and lateral motion (XYZ), enabling accurate layer alignment and deterministic transfer of 2D materials.</li>
        <li><span class="font-semibold">2D Transfer System (System-Level Representation):</span> Showcased as part of the overall workflow, demonstrating Cryonano's capability to integrate motion control and transfer processes into a cohesive fabrication platform.</li>
      </ul>
      <p>These systems together highlight Cryonano's modular and integrated approach to enabling reliable fabrication and characterization of low-dimensional material systems.</p>
      <div class="bg-primary/5 border-l-4 border-primary p-4 mt-4 rounded-r">
        <p class="font-semibold text-slate-800">Driving the Future of Low-Dimensional Materials Research</p>
        <p class="text-slate-600">Cryonano's participation at ALMOND 2023 reflects its continued commitment to supporting cutting-edge research through application-driven instrumentation, bridging the gap between material development and real-world device innovation.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: "Cryonano Strengthens Global Partnerships to Accelerate Make-in-India Innovation",
    date: "2024",
    location: "Nanjing, China",
    category: "Partnership",
    icon: Network,
    image: "/images/Agreement Signing Ceremony, Nanjing , China.avif",
    featured: false,
    excerpt:
      "Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives in high-end scientific instrumentation.",
    fullContent: `
      <p>Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives in high-end scientific instrumentation.</p>
      <p>These collaborations are aimed at accelerating in-house technology development, enabling faster innovation cycles and the introduction of high-quality products tailored for both Indian and international markets.</p>
      <p>Through these partnerships, Cryonano is expanding its capabilities across key domains, including cryogenic technologies and advanced material science instrumentation, reinforcing its position as a growing contributor to the global research ecosystem.</p>
      <p>The agreements are expected to significantly enhance product development efficiency, strengthen supply chains, and support the delivery of reliable, application-driven solutions to research and industrial communities.</p>
      <div class="bg-primary/5 border-l-4 border-primary p-4 mt-4 rounded-r">
        <p class="font-semibold text-slate-800">Agreement Signing Ceremony</p>
        <p class="text-slate-600">The partnership agreements were formalized during a signing ceremony held in Nanjing, marking an important milestone in Cryonano's global collaboration efforts.</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 p-4 mt-4 rounded">
        <p class="font-semibold text-slate-800">Looking Ahead</p>
        <p class="text-slate-600">With a strong focus on indigenous development supported by global collaboration, Cryonano continues to work towards building a robust ecosystem for next-generation research technologies.</p>
      </div>
    `,
  },
];

const NewsEvents = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Featured story is the first one
  const featured = newsItems.find((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />

        <main>
          {/* Breadcrumb */}
          <div className="bg-white/80 border-b border-slate-200 backdrop-blur-md sticky top-[var(--nav-height)] z-40 shadow-sm">
            <div className="container py-2.5 flex items-center gap-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>
              <span className="text-xs text-slate-400">/</span>
              <span className="text-xs font-bold text-primary">News & Events</span>
            </div>
          </div>

          {/* ============================== */}
          {/* HERO – Minimal with accent line */}
          {/* ============================== */}
          <section className="relative py-16 md:py-24 bg-white">
            <div className="container text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold tracking-widest uppercase mb-6">
                  <Sparkles className="w-4 h-4" />
                  Latest Updates
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                  News &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                    Events
                  </span>
                </h1>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
                <p className="text-slate-600 text-lg mt-6 leading-relaxed">
                  Stay updated with the latest developments, partnerships, and
                  industry engagements from Cryonano Labs.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ============================== */}
          {/* FEATURED STORY */}
          {/* ============================== */}
          {featured && (
            <section className="container -mt-4 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl group"
              >
                <div className="absolute inset-0">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
                </div>
                <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/30 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-widest border border-primary/30">
                      <Pin className="w-3.5 h-3.5" />
                      Featured Story
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
                      <Train className="w-3.5 h-3.5" />
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => toggleExpand(featured.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                    >
                      {expandedId === featured.id ? "Close Story" : "Read Full Story"}
                      {expandedId === featured.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <span className="text-white/50 text-sm italic">
                      {featured.location}
                    </span>
                  </div>
                  {/* Expandable content */}
                  {expandedId === featured.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 pt-6 border-t border-white/10 prose prose-invert max-w-none text-white/90"
                      dangerouslySetInnerHTML={{ __html: featured.fullContent }}
                    />
                  )}
                </div>
              </motion.div>
            </section>
          )}

          {/* ============================== */}
          {/* NEWS GRID */}
          {/* ============================== */}
          <section className="container py-8 md:py-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h2 className="text-xs font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                More Stories
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedId === item.id;
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-primary shadow-lg">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-primary shadow-lg">
                          <Pin className="w-3 h-3" />
                          {item.location.split(",")[0]}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-white shadow-lg">
                          <Icon className="w-3 h-3" />
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-extrabold text-slate-900 leading-tight mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-red-700 transition-colors group/btn"
                      >
                        {isExpanded ? "Close" : "Read More"}
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                        ) : (
                          <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                        )}
                      </button>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 pt-4 border-t border-slate-100 prose prose-sm max-w-none text-slate-600"
                          dangerouslySetInnerHTML={{ __html: item.fullContent }}
                        />
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* ============================== */}
          {/* IMPACT STATS */}
          {/* ============================== */}
          <section className="relative py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto mb-12"
              >
                <h2 className="font-display text-3xl font-extrabold text-slate-900">
                  Our Impact at a Glance
                </h2>
                <p className="text-slate-600 mt-2">Key milestones from our recent engagements.</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: "1", label: "AI Predictive Maintenance System", icon: Train },
                  { value: "1", label: "National Conference Participation", icon: Microscope },
                  { value: "1", label: "International Partnership Agreement", icon: Globe },
                  { value: "Multiple", label: "Global Strategic Partnerships", icon: Network },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="font-display text-3xl font-extrabold text-slate-900">{item.value}</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================== */}
          {/* CTA */}
          {/* ============================== */}
          <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5" />
            <div className="container relative z-10 text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <Newspaper className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                  Stay Connected with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                    Cryonano Labs
                  </span>
                </h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  Follow our journey as we continue to innovate, collaborate, and
                  drive impact across quantum research, cryogenic technology, and
                  industrial innovation.
                </p>
                <Link to="/about/awards" className="inline-block">
                  <button className="group relative px-10 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-primary to-red-600 shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Awards & Recognition
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                    />
                  </button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default NewsEvents;