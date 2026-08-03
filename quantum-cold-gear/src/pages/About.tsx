// import { useState, useEffect } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence, Variants } from "framer-motion";
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
//   Star,
//   TrendingUp,
//   Shield,
//   CheckCircle,
//   Info
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // 1. HERO IMAGES DATA
// const heroImages = [
//   {
//     type: "back",
//     src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
//     alt: "Precision Engineering Lab",
//   },
//   {
//     type: "front",
//     src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
//     alt: "Quantum Chip Control",
//   },
//   {
//     type: "back",
//     src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop",
//     alt: "Cryogenic System View",
//   },
//   {
//     type: "front",
//     src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
//     alt: "Power Control Board",
//   },
// ];

// // 2. CORE CAPABILITIES DATA (updated colors to red/brand palette)
// const capabilities = [
//   {
//     icon: Atom,
//     title: "Quantum Instrument Design",
//     items: [
//       { text: "Isolated voltage sources & DACs", detail: "High-precision transport measurement gate control." },
//       { text: "Cryogenic data acquisition & control", detail: "Real-time monitoring at millikelvin temperatures." },
//       { text: "Cryogenic RF low-pass filters", detail: "Ensuring clean qubit state manipulation." },
//     ],
//     hoverBorder: "group-hover:border-red-500",
//     hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.25)]",
//     traceColor: "rgba(220,38,38,1)",
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
//     hoverBorder: "group-hover:border-blue-500",
//     hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.25)]",
//     traceColor: "rgba(59,130,246,1)",
//     iconBg: "bg-blue-50",
//     iconColor: "text-blue-600",
//   },
//   {
//     icon: Magnet,
//     title: "Electromagnet Solutions",
//     items: [
//       { text: "Spectroscopy & Transport Magnet Systems", detail: "Up to 3 Tesla field with split-coil access." },
//       { text: "Bitter electromagnets", detail: "High-field research configurations up to 20 Tesla." },
//       { text: "Optical-access electromagnet setups", detail: "Interchangeable pole pieces and sample space." },
//     ],
//     hoverBorder: "group-hover:border-purple-500",
//     hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.25)]",
//     traceColor: "rgba(168,85,247,1)",
//     iconBg: "bg-purple-50",
//     iconColor: "text-purple-600",
//   },
//   {
//     icon: Zap,
//     title: "Power Conversion Electronics",
//     items: [
//       { text: "AC-DC & DC-DC converters (0.3kW–30kW)", detail: "High-efficiency industrial-grade power." },
//       { text: "DC-AC pure sine wave & 400Hz inverters", detail: "Rugged aerospace power systems." },
//       { text: "Battery chargers & custom power systems", detail: "Configurable multi-channel solutions." },
//     ],
//     hoverBorder: "group-hover:border-red-500",
//     hoverShadow: "group-hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.25)]",
//     traceColor: "rgba(220,38,38,1)",
//     iconBg: "bg-red-50",
//     iconColor: "text-primary",
//   },
// ];

// // 3. MARKETS DATA
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

// // 4. STATS DATA
// const stats = [
//   { value: "32+", label: "Systems Delivered", icon: Building },
//   { value: "15+", label: "IIT Partners", icon: GraduationCap },
//   { value: "5+", label: "Countries Reached", icon: Globe },
//   { value: "15+", label: "Publications", icon: Award },
// ];

// // 5. TEAM DATA
// const teamMembers = [
//   {
//     name: "Dr. Ananya Sharma",
//     role: "Founder & Chief Scientist",
//     bio: "PhD in Quantum Physics with 15+ years of experience in cryogenic instrumentation and quantum transport.",
//     avatar: "https://ui-avatars.com/api/?name=Ananya+Sharma&background=dc2626&color=fff&size=128",
//   },
//   {
//     name: "Vikram Singh",
//     role: "CTO & Head of Engineering",
//     bio: "Expert in power electronics and control systems with a passion for building mission-critical hardware.",
//     avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=2563eb&color=fff&size=128",
//   },
//   {
//     name: "Dr. Priya Patel",
//     role: "Director of Research",
//     bio: "Former postdoctoral researcher at leading quantum labs, specializing in 2D materials and nanofabrication.",
//     avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=7c3aed&color=fff&size=128",
//   },
//   {
//     name: "Arjun Mehta",
//     role: "VP of Operations",
//     bio: "Operations and supply chain expert with deep experience in scaling deep-tech manufacturing.",
//     avatar: "https://ui-avatars.com/api/?name=Arjun+Mehta&background=dc2626&color=fff&size=128",
//   },
// ];

// // 6. MISSION, VISION, VALUES
// const missionVisionValues = {
//   mission: {
//     icon: Target,
//     title: "Our Mission",
//     description: "To accelerate scientific discovery and industrial innovation by delivering precision-engineered hardware for quantum research, cryogenic systems, and critical power applications.",
//   },
//   vision: {
//     icon: Eye,
//     title: "Our Vision",
//     description: "To become the world's most trusted partner for precision instrumentation — enabling breakthroughs in quantum technology, materials science, and next-generation power systems.",
//   },
//   values: {
//     icon: Heart,
//     title: "Our Values",
//     description: "We are driven by a commitment to quality, integrity, innovation, and excellence in everything we do — from R&D to customer delivery.",
//   },
// };

// // 7. SUB-PAGES NAVIGATION DATA
// const subPages = [
//   { name: "About Us", path: "/about", icon: Info },
//   { name: "Awards and Recognition", path: "/about/awards", icon: Award },
//   { name: "News & Events", path: "/about/news", icon: Calendar },
//   { name: "Careers", path: "/about/careers", icon: Briefcase },
//   { name: "Product Videos", path: "/about/product-videos", icon: Video },
//   { name: "Intern with Us", path: "/about/intern", icon: GraduationCap },
// ];

// // 8. ANIMATION VARIANTS
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 15 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const About = () => {
//   const [currentBack, setCurrentBack] = useState(0);
//   const [currentFront, setCurrentFront] = useState(1);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentBack((prev) => (prev + 2) % heroImages.length);
//       setCurrentFront((prev) => (prev + 2) % heroImages.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20 selection:text-primary">
//         <Navbar />

//         <main>
//           {/* Breadcrumb */}
//           <div className="bg-white/80 border-b border-slate-200 backdrop-blur-md sticky top-[var(--nav-height)] z-40 shadow-sm">
//             <div className="container py-2.5">
//               <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
//                 <ArrowLeft className="h-3.5 w-3.5" />
//                 Back to Home
//               </Link>
//               <span className="text-xs text-slate-400 mx-2">/</span>
//               <span className="text-xs font-bold text-primary">About Us</span>
//             </div>
//           </div>

//           {/* ============================== */}
//           {/* HERO SECTION */}
//           {/* ============================== */}
//           <section className="relative container py-12 lg:py-16 overflow-hidden">
//             <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col gap-4"
//               >
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm">
//                   <Sparkles className="w-4 h-4" />
//                   Who We Are
//                 </div>

//                 <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
//                   Innovators in <br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-blue-600">
//                     Quantum
//                   </span> &{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
//                     Power
//                   </span>
//                 </h1>

//                 <p className="text-lg text-slate-600 leading-relaxed max-w-xl border-l-4 border-primary/30 pl-5 rounded-l-sm">
//                   Our innovations enable breakthroughs through access to state-of-the-art quantum hardware, cryogenic microscopy platforms, and high-performance power electronics.
//                 </p>
//                 <p className="text-slate-600 leading-relaxed max-w-xl pl-5">
//                   We are present across research and industry — driving the next generation of scientific discovery, from nanoelectronics fabrication to aerospace power systems.
//                 </p>
//               </motion.div>

//               {/* Hero Image Grid */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="relative h-[400px] lg:h-[450px] w-full"
//               >
//                 <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-3xl overflow-hidden border border-slate-200 shadow-xl z-10 bg-slate-900">
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={currentBack}
//                       src={heroImages[currentBack].src}
//                       alt={heroImages[currentBack].alt}
//                       initial={{ opacity: 0, scale: 1.05 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className="w-full h-full object-cover"
//                     />
//                   </AnimatePresence>
//                   <div className="absolute inset-0 bg-gradient-to-bl from-red-900/10 to-transparent" />
//                 </div>

//                 <div className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20 bg-slate-900">
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={currentFront}
//                       src={heroImages[currentFront].src}
//                       alt={heroImages[currentFront].alt}
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className="w-full h-full object-cover"
//                     />
//                   </AnimatePresence>

//                   <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 flex items-center gap-3.5 shadow-lg">
//                     <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
//                       <Atom className="w-5 h-5 text-primary animate-[spin_8s_linear_infinite]" />
//                     </div>
//                     <div>
//                       <p className="text-slate-900 font-extrabold font-display leading-none text-sm">Precision.</p>
//                       <p className="text-[10px] text-primary mt-1.5 tracking-widest uppercase font-extrabold">Reliability.</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* NEW: EXPLORE MORE ABOUT US (SUB-PAGES) */}
//           {/* ============================== */}
//           <section className="relative py-12 bg-white border-y border-slate-200">
//             <div className="container">
//               <div className="text-center mb-8">
//                 <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">Explore More About Us</h2>
//                 <p className="text-slate-500 mt-2">Learn more about our journey, achievements, and opportunities.</p>
//               </div>
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//               >
//                 {subPages.map((page) => {
//                   const Icon = page.icon;
//                   const isCurrent = page.path === "/about";
//                   return (
//                     <motion.div
//                       key={page.name}
//                       variants={itemVariants}
//                       className={`group relative p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
//                         isCurrent
//                           ? "bg-primary/5 border-primary/50"
//                           : "bg-white border-slate-200 hover:border-primary/30"
//                       }`}
//                     >
//                       <Link to={page.path} className="flex items-center gap-3">
//                         <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                           isCurrent ? "bg-primary text-white" : "bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary"
//                         } transition-colors duration-300`}>
//                           <Icon className="w-5 h-5" />
//                         </div>
//                         <span className={`font-semibold ${isCurrent ? "text-primary" : "text-slate-700 group-hover:text-primary"} transition-colors duration-300`}>
//                           {page.name}
//                         </span>
//                         {isCurrent && <span className="ml-auto text-xs font-bold text-primary">(current)</span>}
//                       </Link>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* STATS SECTION */}
//           {/* ============================== */}
//           <section className="relative py-12 bg-slate-50 border-y border-slate-200">
//             <div className="container">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="grid grid-cols-2 md:grid-cols-4 gap-6"
//               >
//                 {stats.map((stat, idx) => {
//                   const Icon = stat.icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
//                     >
//                       <div className="flex justify-center mb-3">
//                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                           <Icon className="w-6 h-6 text-primary" />
//                         </div>
//                       </div>
//                       <p className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900">{stat.value}</p>
//                       <p className="text-sm text-slate-600 font-semibold mt-1">{stat.label}</p>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* MISSION, VISION, VALUES */}
//           {/* ============================== */}
//           <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
//               <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
//             </div>

//             <div className="container relative z-10">
//               <div className="text-center mb-12">
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
//                   Our Mission, Vision & Values
//                 </h2>
//                 <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
//                   Guiding principles that drive everything we do.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//                 {Object.values(missionVisionValues).map((item, idx) => {
//                   const Icon = item.icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                     >
//                       <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                         <Icon className="w-7 h-7 text-primary" />
//                       </div>
//                       <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
//                       <p className="text-slate-600 leading-relaxed">{item.description}</p>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* CORE CAPABILITIES */}
//           {/* ============================== */}
//           <section className="relative container py-16 lg:py-20 bg-slate-50">
//             <div className="text-center mb-12">
//               <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Core Capabilities</h2>
//               <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
//                 Our expertise spans four interconnected domains, delivering integrated solutions for the most demanding applications.
//               </p>
//             </div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-50px" }}
//               className="grid md:grid-cols-2 gap-6 lg:gap-8"
//             >
//               {capabilities.map((cap) => {
//                 const Icon = cap.icon;
//                 return (
//                   <motion.div
//                     key={cap.title}
//                     variants={itemVariants}
//                     className={`group relative bg-white border border-slate-200 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${cap.hoverShadow} ${cap.hoverBorder}`}
//                   >
//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                       <div
//                         className="absolute inset-[-50%] animate-[spin_4s_linear_infinite]"
//                         style={{ background: `conic-gradient(from 0deg, transparent 0 320deg, ${cap.traceColor} 360deg)` }}
//                       />
//                     </div>
//                     <div className="absolute inset-[2.5px] bg-white rounded-[13.5px] z-0 transition-colors duration-500 group-hover:bg-slate-50/50" />

//                     <div className="relative z-10">
//                       <div className="flex items-center gap-4 mb-6">
//                         <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl ${cap.iconBg} border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
//                           <Icon className={`h-6 w-6 ${cap.iconColor} relative z-10`} />
//                         </div>
//                         <h3 className="font-display text-2xl font-extrabold text-slate-900 group-hover:text-slate-800 transition-colors">{cap.title}</h3>
//                       </div>

//                       <ul className="space-y-4 stagger-list">
//                         {cap.items.map((item, idx) => (
//                           <motion.li
//                             key={item.text}
//                             variants={itemVariants}
//                             transition={{ delay: idx * 0.05 }}
//                             className="group/item relative flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-slate-300 transition-all duration-300 cursor-default"
//                           >
//                             <div className="flex items-start gap-3">
//                               <ChevronRight className={`h-4 w-4 shrink-0 mt-0.5 ${cap.iconColor} opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
//                               <span className="font-bold text-slate-800 group-hover/item:text-slate-950 transition-colors">{item.text}</span>
//                             </div>
//                             <p className="h-0 opacity-0 overflow-hidden group-hover/item:h-auto group-hover/item:opacity-100 group-hover/item:mt-2 transition-all duration-300 text-xs text-slate-600 pl-7 leading-relaxed font-medium">
//                               {item.detail}
//                             </p>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </section>

//           {/* ============================== */}
//           {/* TEAM SECTION */}
//           {/* ============================== */}
//           <section className="relative py-16 lg:py-20 bg-white border-y border-slate-200 overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
//               <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
//             </div>

//             <div className="container relative z-10">
//               <div className="text-center mb-12">
//                 <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
//                   Our Leadership Team
//                 </h2>
//                 <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
//                   Passionate experts driving innovation in quantum technology and power systems.
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {teamMembers.map((member, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.1 }}
//                     className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-slate-200 group-hover:border-primary/50 transition-all duration-300 mb-4">
//                       <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
//                     </div>
//                     <h3 className="font-display text-lg font-bold text-slate-900">{member.name}</h3>
//                     <p className="text-sm text-primary font-semibold mb-2">{member.role}</p>
//                     <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* MARKETS WE SERVE */}
//           {/* ============================== */}
//           <section className="relative py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
//             <div className="container relative z-10 text-center mb-10">
//               <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">Markets We Serve</h2>
//               <p className="text-slate-500 max-w-2xl mx-auto">
//                 Our solutions deliver precision hardware across mission-critical sectors globally.
//               </p>
//             </div>

//             <div className="container relative z-10">
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto"
//               >
//                 {markets.map((market) => (
//                   <motion.div
//                     key={market}
//                     variants={itemVariants}
//                     className="group relative px-6 py-3.5 rounded-xl bg-white border border-slate-200 cursor-default hover:border-red-400 hover:shadow-md transition-all duration-300 overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <p className="relative z-10 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
//                       {market}
//                     </p>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* CTA SECTION */}
//           {/* ============================== */}
//           <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5" />

//             <div className="container relative z-10 text-center max-w-2xl">
//               <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
//                 <Mail className="w-8 h-8 text-primary" />
//               </div>

//               <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
//                 Ready to accelerate <br />your research?
//               </h2>
//               <p className="text-slate-600 text-lg mb-10 leading-relaxed">
//                 Whether you need custom quantum instruments, cryogenic systems, or aerospace power electronics — our R&D team is ready to help.
//               </p>

//               <div className="flex flex-col sm:flex-row justify-center gap-5 mt-4">
//                 <Link to="/products" className="w-full sm:w-auto">
//                   <button className="w-full group relative px-10 py-4 rounded-xl font-bold text-lg text-white bg-primary shadow-xl hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden hover:-translate-y-1">
//                     <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
//                       Explore Systems <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </span>
//                     <motion.div
//                       animate={{ x: ["-100%", "200%"] }}
//                       transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
//                     />
//                   </button>
//                 </Link>

//                 <a href="mailto:contact@cryonano.com" className="w-full sm:w-auto">
//                   <button className="w-full group px-10 py-4 rounded-xl font-bold text-lg text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1">
//                     <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
//                     Contact Engineering
//                   </button>
//                 </a>
//               </div>
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
} from "lucide-react";
import { Link } from "react-router-dom";

// 1. CORE CAPABILITIES DATA – removed blue/purple, replaced with red variants
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

// 2. MARKETS DATA – unchanged
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

// 4. VALUES DATA – will be presented with a new professional pattern
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

// ==========================================
// MAIN COMPONENT
// ==========================================
const About = () => {
  // Removed image slider logic – no longer needed
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />

        <main>
          {/* ========================================== */}
          {/* BREADCRUMB – compact */}
          {/* ========================================== */}
          <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
            <div className="container py-2 flex items-center gap-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="h-3 w-3" />
                Back
              </Link>
              <span className="text-slate-300 font-bold text-[10px]">/</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">About Us</span>
            </div>
          </div>

          {/* ========================================== */}
          {/* HERO – No image slider, only content */}
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
                  Innovators in <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">
                    Quantum
                  </span> &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                    Power
                  </span>
                </h1>

                <div className="space-y-4">
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-primary/30 pl-4 rounded-l-sm">
                    CRYONANO is evolving from a manufacturer of scientific instruments and power
                    electronic products into a systems engineering company that delivers complete
                    environments for precision science and advanced industrial applications. We design
                    integrated platforms that orchestrate energy, signals, magnetic fields, motion, and
                    cryogenic environment delivering uncompromising accuracy and reliability where
                    performance is nonnegotiable.
                  </p>

                  <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4">
                    Our expertise bridges demanding markets. For research laboratories, we provide
                    cryogenic systems, electromagnets, ultraprecise positioning, and quantum
                    instrumentation that empower scientists to prepare, measure, and characterize
                    nextgeneration materials. For industrial applications, we build AC-DC and DC-DC
                    converters, inverters, and intelligent battery charging systems that convert, regulate,
                    and deliver electrical energy with maximum efficiency.
                  </p>

                  <p className="text-base md:text-lg text-slate-600 leading-relaxed pl-4 font-medium">
                    Whether powering critical infrastructure or enabling quantum discovery, every
                    CRYONANO solution is designed as part of an integrated engineering stack, giving
                    customers a single partner from concept to complete system.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ========================================== */}
          {/* STATS SECTION – compact */}
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
          {/* ABOUT US – Second Content Block */}
          {/* ========================================== */}
          <section className="relative py-8 bg-white border-b border-slate-100">
            <div className="container max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full" />
                  About Us
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Cryonano is an engineering-led advanced instrumentation company building the core
                  hardware that modern scientific and industrial systems depend on. We design and
                  manufacture high-performance research instruments and rugged power systems that
                  operate quietly, reliably, and continuously at the heart of complex environments:
                  often unseen, but essential.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Cryonano systems are built to be embedded everywhere they are deployed.
                  Intelligence, monitoring, and protection are designed directly into the architecture,
                  allowing our hardware to remain omnipresent within larger systems without becoming a
                  point of failure. Whether enabling a delicate quantum measurement or supporting rail,
                  aerospace, marine, or defense platforms, our products are engineered to sit at the core
                  of every system they serve.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  We work closely with researchers, institutions, and industrial teams to translate
                  complex requirements into robust, deployable systems hardware that becomes part of
                  the experimental or operational fabric, rather than an external dependency.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ========================================== */}
          {/* OUR VALUES – New Professional Pattern (Timeline style) */}
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
                      {/* Icon & line connector */}
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

                      {/* Content */}
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
          {/* CORE CAPABILITIES – Removed hover gradient spinning */}
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
          {/* CTA SECTION – compact */}
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

                  {/* <a href="mailto:contact@cryonano.com" className="w-full sm:w-auto">
                    <button className="w-full group px-6 py-2.5 rounded-lg font-bold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      Contact Engineering
                    </button>
                  </a> */}
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
  );
};

export default About;