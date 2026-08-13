// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Box,
//   Network,
//   Settings,
//   Lightbulb,
//   Users,
//   Target,
//   UserCheck,
//   TrendingUp,
//   Search,
//   CheckCircle2,
//   Rocket,
//   Atom,
//   ThermometerSnowflake,
//   Magnet,
//   Cpu,
//   Zap,
//   Quote,
//   Mail,
//   ExternalLink,
//   Sparkles,
//   Globe,
//   BookOpen,
//   Award,
//   ArrowRight,
//   Send,
//   Upload,
//   X,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.08 } },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
// };

// // ==========================================
// // DATA BLOCKS
// // ==========================================
// const whyInternFeatures = [
//   {
//     icon: Box,
//     title: "Work on Products That Matter",
//     desc: "Contribute to real engineering products used by research institutions, national labs, industries and startups.",
//   },
//   {
//     icon: Network,
//     title: "Learn Across Disciplines",
//     desc: "Gain exposure across mechanical, electronics, software, cryogenics, magnetics, power electronics and more.",
//   },
//   {
//     icon: Settings,
//     title: "Build Real Hardware",
//     desc: "Work on real systems. Assemble, test, troubleshoot and improve prototypes that are deployed in the field.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Solve Problems That Don't Have Answers Yet",
//     desc: "Many challenges have no textbook solutions. You'll learn to think from first principles and innovate.",
//   },
//   {
//     icon: Users,
//     title: "Work With Scientists & Engineers",
//     desc: "Interact with researchers, professors, national laboratories and industry experts solving real-world problems.",
//   },
//   {
//     icon: Target,
//     title: "Learn Product Thinking",
//     desc: "Understand the complete product journey—from concept and design to prototyping, testing, manufacturing and customer support.",
//   },
//   {
//     icon: UserCheck,
//     title: "Ownership From Day One",
//     desc: "We believe in trust and responsibility. Your ideas can become part of products deployed worldwide.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Grow With CRYONANO",
//     desc: "Outstanding interns may be considered for Pre-Placement Offers (PPO) based on their performance.",
//   },
// ];

// const checklistItems = [
//   "You enjoy asking \"Why?\" and exploring deeper.",
//   "You love building things and solving difficult problems.",
//   "You are not afraid of learning unfamiliar topics.",
//   "You take ownership and pay attention to detail.",
//   "You enjoy collaborating with people from different backgrounds.",
//   "You care about quality and impact.",
// ];

// const skillsDeveloped = [
//   "Hands-on experience with real prototypes",
//   "Cross-functional team collaboration",
//   "System-level thinking and design",
//   "Exposure to advanced manufacturing processes",
//   "Problem-solving under real constraints",
// ];

// const intersectionDomains = [
//   { icon: Atom, label: "Quantum & Advanced Technologies" },
//   { icon: ThermometerSnowflake, label: "Cryogenics & Low Temperature Systems" },
//   { icon: Magnet, label: "Electromagnetics & Precision Systems" },
//   { icon: Cpu, label: "Instrumentation & Control Electronics" },
//   { icon: Zap, label: "Power Electronics & Embedded Systems" },
// ];

// // ==========================================
// // MAIN PAGE COMPONENT
// // ==========================================
// export default function Intern() {
//   const [formState, setFormState] = useState<"idle" | "submitting">("idle");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [attachments, setAttachments] = useState<File[]>([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     highestDegree: "",
//     experience: "",
//     projects: "",
//     whyCryonano: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setAttachments([...attachments, ...Array.from(e.target.files)]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");

//     const submitData = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       submitData.append(key, value as string);
//     });
//     attachments.forEach((file) => {
//       submitData.append("resume", file);
//     });

//     const API_URL = "http://localhost:5000";

//     try {
//       const response = await fetch(`${API_URL}/api/forms/intern-application`, {
//         method: "POST",
//         body: submitData,
//       });

//       if (response.ok) {
//         setFormState("idle");
//         setShowSuccess(true);

//         setTimeout(() => {
//           setShowSuccess(false);
//           setFormData({
//             name: "",
//             email: "",
//             phone: "",
//             country: "",
//             highestDegree: "",
//             experience: "",
//             projects: "",
//             whyCryonano: "",
//           });
//           setAttachments([]);
//         }, 3000);
//       } else {
//         setFormState("idle");
//         alert("Failed to submit application. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setFormState("idle");
//       alert("Network error. Is the server running?");
//     }
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const countries = [
//     "India", "USA", "UK", "Germany", "France", "Japan", "China",
//     "Singapore", "Australia", "Canada", "Other"
//   ];

//   const degrees = [
//     "B.Tech / B.E.",
//     "M.Tech / M.E.",
//     "B.Sc.",
//     "M.Sc.",
//     "PhD",
//     "Diploma",
//     "Other",
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//       {/* ====== NAVBAR - FIXED AT TOP ====== */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Navbar />
//       </div>

//       <PageTransition>
//         <main className="pt-[80px]">
//           {/* ========================================== */}
//           {/* 1. HERO – Fully blended image */}
//           {/* ========================================== */}
//           <section className="relative pt-8 pb-0 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//               <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//             </div>

//             <div className="container relative z-10">
//               <div className="grid lg:grid-cols-2 gap-8 items-center">
//                 {/* Left Content */}
//                 <motion.div
//                   initial="hidden"
//                   animate="show"
//                   variants={staggerContainer}
//                   className="py-8 md:py-10 lg:py-12 pr-4 lg:pr-8"
//                 >
//                   <motion.div
//                     variants={fadeInUp}
//                     className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase mb-3 shadow-sm"
//                   >
//                     <Sparkles className="w-3 h-3" />
//                     Join Our Team
//                   </motion.div>

//                   <motion.h1
//                     variants={fadeInUp}
//                     className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3"
//                   >
//                     Intern at <br />
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
//                       CRYONANO
//                     </span>
//                   </motion.h1>

//                   <motion.h3
//                     variants={fadeInUp}
//                     className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4"
//                   >
//                     Think Science. <span className="text-primary">Build What Doesn't Exist.</span>
//                   </motion.h3>

//                   <motion.p
//                     variants={fadeInUp}
//                     className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mb-6"
//                   >
//                     Work on real engineering challenges and build technologies that empower
//                     researchers, industries and innovators to solve some of the world's most
//                     challenging problems.
//                   </motion.p>

//                   <motion.div
//                     variants={fadeInUp}
//                     className="flex flex-wrap gap-4"
//                   >
//                     <Link
//                       to="/products"
//                       className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
//                     >
//                       Explore Products
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                     <Link
//                       to="/contact"
//                       className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary text-slate-700 font-extrabold text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
//                     >
//                       Contact Team
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Right Image */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   className="relative h-[280px] md:h-[320px] lg:h-[400px] w-full overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent z-10 w-12 lg:w-16" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent z-10 h-8" />
//                   <img
//                     src="/images/intern/image2.jpg"
//                     alt="Engineering Intern working on hardware"
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* 2. WHY INTERN GRID */}
//           {/* ========================================== */}
//           <section className="py-10 md:py-12 bg-white border-t border-slate-100">
//             <div className="container max-w-7xl">
//               <div className="text-center mb-8">
//                 <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
//                   Why Intern
//                 </span>
//                 <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
//                   Why Intern at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">CRYONANO</span>
//                 </h2>
//               </div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-30px" }}
//                 variants={staggerContainer}
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
//               >
//                 {whyInternFeatures.map((feature, idx) => {
//                   const Icon = feature.icon;
//                   return (
//                     <motion.div
//                       key={idx}
//                       variants={fadeInUp}
//                       className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
//                     >
//                       <div className="flex items-start gap-3">
//                         <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                           <Icon className="w-5 h-5 text-primary group-hover:text-white transition-all duration-300" />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-slate-900 text-base mb-1 leading-tight">
//                             {feature.title}
//                           </h4>
//                           <p className="text-sm text-slate-600 leading-relaxed">
//                             {feature.desc}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* 3. TWO-COLUMN SPLIT */}
//           {/* ========================================== */}
//           <section className="py-10 md:py-12 bg-slate-50 border-y border-slate-100">
//             <div className="container max-w-7xl">
//               <div className="grid lg:grid-cols-2 gap-6 items-stretch">
//                 {/* LEFT: Who We're Looking For – Dark Panel */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col h-full relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

//                   <div className="flex items-center gap-4 mb-5 relative z-10">
//                     <Search className="w-8 h-8 text-primary shrink-0" />
//                     <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-wide">
//                       Who We're Looking For
//                     </h3>
//                   </div>

//                   <p className="text-base text-slate-300 font-medium mb-5 leading-relaxed relative z-10">
//                     We're not looking for perfect résumés— <br />
//                     <span className="text-white font-bold">we're looking for curious minds.</span>
//                   </p>

//                   <ul className="space-y-3 mb-5 relative z-10 flex-grow">
//                     {checklistItems.map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-3">
//                         <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
//                         <span className="text-sm font-medium text-slate-300">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-start relative z-10 mt-auto">
//                     <Rocket className="w-6 h-6 text-primary shrink-0" />
//                     <p className="text-sm font-medium text-slate-300 leading-relaxed">
//                       If you're excited by challenging engineering problems and want to build
//                       products that advance science and industry, we'd love to hear from you.
//                     </p>
//                   </div>
//                 </motion.div>

//                 {/* RIGHT: Work at Intersection – Light Panel */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 flex flex-col h-full"
//                 >
//                   <h3 className="font-display text-2xl font-extrabold text-slate-900 uppercase tracking-wide mb-5">
//                     Work at the Intersection of Science and Engineering
//                   </h3>

//                   <div className="flex gap-4 items-start mb-6">
//                     <Atom className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
//                     <p className="text-sm text-slate-600 font-medium leading-relaxed">
//                       Our work bridges scientific research and industrial innovation. As an intern,
//                       you'll gain exposure to multidisciplinary engineering projects involving
//                       advanced instrumentation, cryogenic systems, precision mechanics, control
//                       electronics and intelligent engineering systems.
//                     </p>
//                   </div>

//                   <div className="flex items-start gap-3 mb-6">
//                     <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
//                     <div>
//                       <h4 className="font-bold text-slate-800 text-sm mb-1">What you'll build:</h4>
//                       <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
//                         {skillsDeveloped.map((skill, idx) => (
//                           <li key={idx} className="flex items-center gap-1.5">
//                             <span className="w-1 h-1 rounded-full bg-primary" />
//                             {skill}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-auto">
//                     {intersectionDomains.map((domain, idx) => {
//                       const Icon = domain.icon;
//                       return (
//                         <div
//                           key={idx}
//                           className="flex flex-col items-center text-center group"
//                         >
//                           <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-2 group-hover:border-primary group-hover:bg-primary/10 transition-all">
//                             <Icon
//                               className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors"
//                               strokeWidth={1.5}
//                             />
//                           </div>
//                           <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider leading-snug">
//                             {domain.label}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* 4. QUOTE BANNER – with image blend */}
//           {/* ========================================== */}
//           <section className="py-10 md:py-12 bg-white">
//             <div className="container max-w-7xl">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-slate-900 flex flex-col lg:flex-row"
//               >
//                 <div className="lg:w-1/2 p-8 md:p-12 relative z-20 flex flex-col justify-center">
//                   <Quote className="w-12 h-12 text-primary mb-4 opacity-80" />
//                   <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
//                     We don't hire interns to fill temporary roles. <br />
//                     <span className="text-primary">We invest in future engineers.</span>
//                   </h2>
//                   <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
//                     If you're passionate about science, engineering, and building technologies
//                     that make a difference, CRYONANO is the place to learn, grow, and create impact.
//                   </p>
//                   <p className="text-base font-bold text-white uppercase tracking-widest border-l-4 border-primary pl-4">
//                     Think Science. Build What Doesn't Exist.
//                   </p>
//                 </div>

//                 <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-full overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-10" />
//                   <img
//                     src="/images/intern/image4.jpg"
//                     alt="Intern testing electronics"
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* 5. INTERNSHIP APPLICATION FORM - NEW */}
//           {/* ========================================== */}
//           <section className="py-10 md:py-12 bg-slate-50 border-y border-slate-100">
//             <div className="container max-w-4xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="text-center mb-8"
//               >
//                 <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
//                   Apply Now
//                 </span>
//                 <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
//                   Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Application</span>
//                 </h2>
//                 <p className="text-slate-600 text-base mt-2 max-w-2xl mx-auto">
//                   Fill in the form below to apply for an internship at CRYONANO.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-30px" }}
//                 transition={{ duration: 0.6 }}
//                 className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden"
//               >
//                 {/* ====== SUCCESS MESSAGE - overlay ====== */}
//                 <AnimatePresence>
//                   {showSuccess && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="absolute inset-x-0 bottom-6 md:bottom-10 z-30 flex justify-center px-4"
//                       style={{ pointerEvents: "none" }}
//                     >
//                       <div className="w-full max-w-2xl bg-emerald-50 border-2 border-emerald-200 rounded-xl py-4 px-6 text-center shadow-lg pointer-events-auto">
//                         <div className="flex items-center justify-center gap-3">
//                           <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
//                           <div className="text-left">
//                             <p className="font-extrabold text-emerald-800 text-base">
//                               Application Submitted!
//                             </p>
//                             <p className="text-sm text-emerald-700 font-medium">
//                               Thank you for applying. Our team will review your application and contact you shortly.
//                             </p>
//                           </div>
//                         </div>
//                         <p className="text-xs text-emerald-600 mt-2">Redirecting back to form...</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* ====== FORM WRAPPER - fades on success ====== */}
//                 <div
//                   className={`transition-all duration-500 ${
//                     showSuccess ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"
//                   }`}
//                 >
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Name & Email */}
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Full Name <span className="text-primary">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                           placeholder="John Doe"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Email <span className="text-primary">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                           placeholder="john@institution.edu"
//                         />
//                       </div>
//                     </div>

//                     {/* Phone & Country */}
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Phone Number <span className="text-primary">*</span>
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                           placeholder="+91 98765 43210"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Country <span className="text-primary">*</span>
//                         </label>
//                         <select
//                           name="country"
//                           value={formData.country}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                         >
//                           <option value="">Select Country</option>
//                           {countries.map((country) => (
//                             <option key={country} value={country}>{country}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>

//                     {/* Highest Degree */}
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Highest Qualified Degree <span className="text-primary">*</span>
//                       </label>
//                       <select
//                         name="highestDegree"
//                         value={formData.highestDegree}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                       >
//                         <option value="">Select Degree</option>
//                         {degrees.map((degree) => (
//                           <option key={degree} value={degree}>{degree}</option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Resume/CV Upload */}
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Upload Resume/CV <span className="text-primary">*</span>
//                       </label>
//                       <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
//                         <input
//                           type="file"
//                           id="resume-upload"
//                           multiple={false}
//                           onChange={handleFileUpload}
//                           className="hidden"
//                           required={attachments.length === 0}
//                         />
//                         <label
//                           htmlFor="resume-upload"
//                           className="cursor-pointer flex flex-col items-center gap-2"
//                         >
//                           <Upload className="w-8 h-8 text-slate-400" />
//                           <span className="text-sm font-medium text-slate-600">
//                             Click to upload your resume
//                           </span>
//                           <span className="text-xs text-slate-400">
//                             All file types supported (PDF, DOC, DOCX, etc.)
//                           </span>
//                         </label>
//                       </div>
//                       {attachments.length > 0 && (
//                         <div className="mt-3 space-y-2">
//                           {attachments.map((file, idx) => (
//                             <div
//                               key={idx}
//                               className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200"
//                             >
//                               <span className="text-sm font-medium text-slate-700 truncate">
//                                 {file.name}
//                               </span>
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   setAttachments(attachments.filter((_, i) => i !== idx))
//                                 }
//                                 className="text-slate-400 hover:text-red-500 transition-colors"
//                               >
//                                 <X className="w-4 h-4" />
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     {/* Experience */}
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Experience (if any)
//                       </label>
//                       <textarea
//                         name="experience"
//                         value={formData.experience}
//                         onChange={handleChange}
//                         rows={2}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
//                         placeholder="Briefly describe any relevant experience (internships, projects, jobs, etc.)"
//                       />
//                     </div>

//                     {/* Projects */}
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Projects
//                       </label>
//                       <textarea
//                         name="projects"
//                         value={formData.projects}
//                         onChange={handleChange}
//                         rows={2}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
//                         placeholder="Describe any projects you've worked on (academic, personal, or professional)"
//                       />
//                     </div>

//                     {/* Why CRYONANO? */}
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Why CRYONANO? <span className="text-primary">*</span>
//                       </label>
//                       <textarea
//                         name="whyCryonano"
//                         value={formData.whyCryonano}
//                         onChange={handleChange}
//                         required
//                         rows={3}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
//                         placeholder="Tell us why you want to intern at CRYONANO and what excites you about our work."
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       type="submit"
//                       disabled={formState === "submitting" || showSuccess}
//                       className="w-full group relative px-6 py-4 bg-primary hover:bg-red-700 text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
//                     >
//                       <span className="relative z-10 flex items-center gap-2">
//                         {formState === "submitting" ? "Submitting..." : "Submit Application"}
//                         <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                       </span>
//                       <motion.div
//                         animate={{ x: ["-100%", "200%"] }}
//                         transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                       />
//                     </button>

//                     <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
//                       <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
//                       Your information is secure and will not be shared.
//                     </p>
//                   </form>
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ========================================== */}
//           {/* 6. FINAL CTA – Keep as is */}
//           {/* ========================================== */}
//           {/* <section className="bg-slate-900 py-8 border-t border-slate-800">
//             <div className="container max-w-7xl">
//               <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//                 <div className="flex items-center gap-5 w-full lg:w-1/2">
//                   <div className="w-12 h-12 rounded-full border border-slate-700 bg-white/5 flex items-center justify-center shrink-0">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
//                       Ready to build the future with us?
//                     </p>
//                     <p className="text-slate-400 text-xs mb-0.5">Send your CV to</p>
//                     <a
//                       href="mailto:careers@cryonano.com"
//                       className="text-2xl md:text-3xl font-extrabold text-white hover:text-primary transition-colors"
//                     >
//                       contact@cryonano.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="hidden lg:block w-px h-16 bg-slate-700" />

//                 <div className="flex flex-col items-center lg:items-start gap-3 w-full lg:w-auto">
//                   <div className="flex items-center gap-2">
//                     <Globe className="w-4 h-4 text-slate-400" />
//                     <p className="text-xs font-medium text-slate-400">Or apply through our website</p>
//                   </div>
//                   <a
//                     href="https://www.cryonano.com/careers"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-6 py-2.5 rounded-full border border-slate-600 text-white font-bold text-sm hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2"
//                   >
//                     www.cryonano.com/careers
//                     <ExternalLink className="w-3.5 h-3.5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </section> */}
//         </main>
//       </PageTransition>

//       <Footer />
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Network,
  Settings,
  Lightbulb,
  Users,
  Target,
  UserCheck,
  TrendingUp,
  Search,
  CheckCircle2,
  Rocket,
  Atom,
  ThermometerSnowflake,
  Magnet,
  Cpu,
  Zap,
  Quote,
  Mail,
  ExternalLink,
  Sparkles,
  Globe,
  BookOpen,
  Award,
  ArrowRight,
  Send,
  Upload,
  X, ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// ==========================================
// DATA BLOCKS
// ==========================================
const whyInternFeatures = [
  {
    icon: Box,
    title: "Work on Products That Matter",
    desc: "Contribute to real engineering products used by research institutions, national labs, industries and startups.",
  },
  {
    icon: Network,
    title: "Learn Across Disciplines",
    desc: "Gain exposure across mechanical, electronics, software, cryogenics, magnetics, power electronics and more.",
  },
  {
    icon: Settings,
    title: "Build Real Hardware",
    desc: "Work on real systems. Assemble, test, troubleshoot and improve prototypes that are deployed in the field.",
  },
  {
    icon: Lightbulb,
    title: "Solve Problems That Don't Have Answers Yet",
    desc: "Many challenges have no textbook solutions. You'll learn to think from first principles and innovate.",
  },
  {
    icon: Users,
    title: "Work With Scientists & Engineers",
    desc: "Interact with researchers, professors, national laboratories and industry experts solving real-world problems.",
  },
  {
    icon: Target,
    title: "Learn Product Thinking",
    desc: "Understand the complete product journey—from concept and design to prototyping, testing, manufacturing and customer support.",
  },
  {
    icon: UserCheck,
    title: "Ownership From Day One",
    desc: "We believe in trust and responsibility. Your ideas can become part of products deployed worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Grow With CRYONANO",
    desc: "Outstanding interns may be considered for Pre-Placement Offers (PPO) based on their performance.",
  },
];

const checklistItems = [
  "You enjoy asking \"Why?\" and exploring deeper.",
  "You love building things and solving difficult problems.",
  "You are not afraid of learning unfamiliar topics.",
  "You take ownership and pay attention to detail.",
  "You enjoy collaborating with people from different backgrounds.",
  "You care about quality and impact.",
];

const skillsDeveloped = [
  "Hands-on experience with real prototypes",
  "Cross-functional team collaboration",
  "System-level thinking and design",
  "Exposure to advanced manufacturing processes",
  "Problem-solving under real constraints",
];

const intersectionDomains = [
  { icon: Atom, label: "Quantum & Advanced Technologies" },
  { icon: ThermometerSnowflake, label: "Cryogenics & Low Temperature Systems" },
  { icon: Magnet, label: "Electromagnetics & Precision Systems" },
  { icon: Cpu, label: "Instrumentation & Control Electronics" },
  { icon: Zap, label: "Power Electronics & Embedded Systems" },
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function Intern() {
  const [formState, setFormState] = useState<"idle" | "submitting">("idle");
  const [showSuccess, setShowSuccess] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    highestDegree: "",
    experience: "",
    projects: "",
    whyCryonano: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value as string);
    });
    attachments.forEach((file) => {
      submitData.append("resume", file);
    });

    // const API_URL = "http://localhost:5000";
    const API_URL = "";

    try {
      const response = await fetch(`${API_URL}/api/forms/intern-application`, {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        setFormState("idle");
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            country: "",
            highestDegree: "",
            experience: "",
            projects: "",
            whyCryonano: "",
          });
          setAttachments([]);
        }, 3000);
      } else {
        setFormState("idle");
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setFormState("idle");
      alert("Network error. Is the server running?");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = [
    "India", "USA", "UK", "Germany", "France", "Japan", "China",
    "Singapore", "Australia", "Canada", "Other"
  ];

  const degrees = [
    "B.Tech / B.E.",
    "M.Tech / M.E.",
    "B.Sc.",
    "M.Sc.",
    "PhD",
    "Diploma",
    "Other",
  ];

  return (
    <>
      {/* ====== 1. FIXED NAVBAR ====== */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* ====== 2. SPACER ====== */}
      <div className="h-[120px] w-full" />

      {/* ====== 3. PAGE CONTENT ====== */}
      <PageTransition>
        <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-primary/20 selection:text-primary overflow-x-hidden">
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
                <span className="text-[15px] font-bold text-primary uppercase tracking-widest">Intern With Us</span>
              </div>
            </div>
            {/* ========================================== */}
            {/* 1. HERO – Fully blended image */}
            {/* ========================================== */}
            <section className="relative pt-2 pb-0 bg-white overflow-hidden">
              <div className="absolute inset-0 z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
              </div>

              <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="py-8 md:py-10 lg:py-12 pr-4 lg:pr-8"
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase mb-3 shadow-sm"
                    >
                      <Sparkles className="w-3 h-3" />
                      Join Our Team
                    </motion.div>

                    <motion.h1
                      variants={fadeInUp}
                      className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3"
                    >
                      Intern at <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                        CRYONANO
                      </span>
                    </motion.h1>

                    <motion.h3
                      variants={fadeInUp}
                      className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4"
                    >
                      Think Science. <span className="text-primary">Build What Doesn't Exist.</span>
                    </motion.h3>

                    <motion.p
                      variants={fadeInUp}
                      className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mb-6"
                    >
                      Work on real engineering challenges and build technologies that empower
                      researchers, industries and innovators to solve some of the world's most
                      challenging problems.
                    </motion.p>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                      >
                        Explore Products
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary text-slate-700 font-extrabold text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                      >
                        Contact Team
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Right Image */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative h-[280px] md:h-[320px] lg:h-[400px] w-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent z-10 w-12 lg:w-16" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent z-10 h-8" />
                    <img
                      src="/images/intern/image2.jpg"
                      alt="Engineering Intern working on hardware"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ========================================== */}
            {/* 2. WHY INTERN GRID */}
            {/* ========================================== */}
            <section className="py-10 md:py-12 bg-white border-t border-slate-100">
              <div className="container max-w-7xl">
                <div className="text-center mb-8">
                  <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
                    Why Intern
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
                    Why Intern at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">CRYONANO</span>
                  </h2>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                  {whyInternFeatures.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <Icon className="w-5 h-5 text-primary group-hover:text-white transition-all duration-300" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-base mb-1 leading-tight">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* 3. TWO-COLUMN SPLIT */}
            {/* ========================================== */}
            <section className="py-10 md:py-12 bg-slate-50 border-y border-slate-100">
              <div className="container max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                  {/* LEFT: Who We're Looking For – Dark Panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="flex items-center gap-4 mb-5 relative z-10">
                      <Search className="w-8 h-8 text-primary shrink-0" />
                      <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-wide">
                        Who We're Looking For
                      </h3>
                    </div>

                    <p className="text-base text-slate-300 font-medium mb-5 leading-relaxed relative z-10">
                      We're not looking for perfect résumés— <br />
                      <span className="text-white font-bold">we're looking for curious minds.</span>
                    </p>

                    <ul className="space-y-3 mb-5 relative z-10 flex-grow">
                      {checklistItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-start relative z-10 mt-auto">
                      <Rocket className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-sm font-medium text-slate-300 leading-relaxed">
                        If you're excited by challenging engineering problems and want to build
                        products that advance science and industry, we'd love to hear from you.
                      </p>
                    </div>
                  </motion.div>

                  {/* RIGHT: Work at Intersection – Light Panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 flex flex-col h-full"
                  >
                    <h3 className="font-display text-2xl font-extrabold text-slate-900 uppercase tracking-wide mb-5">
                      Work at the Intersection of Science and Engineering
                    </h3>

                    <div className="flex gap-4 items-start mb-6">
                      <Atom className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        Our work bridges scientific research and industrial innovation. As an intern,
                        you'll gain exposure to multidisciplinary engineering projects involving
                        advanced instrumentation, cryogenic systems, precision mechanics, control
                        electronics and intelligent engineering systems.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 mb-6">
                      <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">What you'll build:</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                          {skillsDeveloped.map((skill, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-auto">
                      {intersectionDomains.map((domain, idx) => {
                        const Icon = domain.icon;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center group"
                          >
                            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-2 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                              <Icon
                                className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors"
                                strokeWidth={1.5}
                              />
                            </div>
                            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider leading-snug">
                              {domain.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ========================================== */}
            {/* 4. QUOTE BANNER – with image blend */}
            {/* ========================================== */}
            <section className="py-10 md:py-12 bg-white">
              <div className="container max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-slate-900 flex flex-col lg:flex-row"
                >
                  <div className="lg:w-1/2 p-8 md:p-12 relative z-20 flex flex-col justify-center">
                    <Quote className="w-12 h-12 text-primary mb-4 opacity-80" />
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
                      We don't hire interns to fill temporary roles. <br />
                      <span className="text-primary">We invest in future engineers.</span>
                    </h2>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
                      If you're passionate about science, engineering, and building technologies
                      that make a difference, CRYONANO is the place to learn, grow, and create impact.
                    </p>
                    <p className="text-base font-bold text-white uppercase tracking-widest border-l-4 border-primary pl-4">
                      Think Science. Build What Doesn't Exist.
                    </p>
                  </div>

                  <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-10" />
                    <img
                      src="/images/intern/image4.jpg"
                      alt="Intern testing electronics"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ========================================== */}
            {/* 5. INTERNSHIP APPLICATION FORM */}
            {/* ========================================== */}
            <section className="py-10 md:py-12 bg-slate-50 border-y border-slate-100">
              <div className="container max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
                    Apply Now
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
                    Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Application</span>
                  </h2>
                  <p className="text-slate-600 text-base mt-2 max-w-2xl mx-auto">
                    Fill in the form below to apply for an internship at CRYONANO.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden"
                >
                  {/* ====== SUCCESS MESSAGE - overlay ====== */}
                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-x-0 bottom-6 md:bottom-10 z-30 flex justify-center px-4"
                        style={{ pointerEvents: "none" }}
                      >
                        <div className="w-full max-w-2xl bg-emerald-50 border-2 border-emerald-200 rounded-xl py-4 px-6 text-center shadow-lg pointer-events-auto">
                          <div className="flex items-center justify-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                            <div className="text-left">
                              <p className="font-extrabold text-emerald-800 text-base">
                                Application Submitted!
                              </p>
                              <p className="text-sm text-emerald-700 font-medium">
                                Thank you for applying. Our team will review your application and contact you shortly.
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-emerald-600 mt-2">Redirecting back to form...</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ====== FORM WRAPPER - fades on success ====== */}
                  <div
                    className={`transition-all duration-500 ${
                      showSuccess ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"
                    }`}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                            Email <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                            placeholder="john@institution.edu"
                          />
                        </div>
                      </div>

                      {/* Phone & Country */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                            Phone Number <span className="text-primary">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                            Country <span className="text-primary">*</span>
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                          >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Highest Degree */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Highest Qualified Degree <span className="text-primary">*</span>
                        </label>
                        <select
                          name="highestDegree"
                          value={formData.highestDegree}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Degree</option>
                          {degrees.map((degree) => (
                            <option key={degree} value={degree}>{degree}</option>
                          ))}
                        </select>
                      </div>

                      {/* Resume/CV Upload */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Upload Resume/CV <span className="text-primary">*</span>
                        </label>
                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                          <input
                            type="file"
                            id="resume-upload"
                            multiple={false}
                            onChange={handleFileUpload}
                            className="hidden"
                            required={attachments.length === 0}
                          />
                          <label
                            htmlFor="resume-upload"
                            className="cursor-pointer flex flex-col items-center gap-2"
                          >
                            <Upload className="w-8 h-8 text-slate-400" />
                            <span className="text-sm font-medium text-slate-600">
                              Click to upload your resume
                            </span>
                            <span className="text-xs text-slate-400">
                              All file types supported (PDF, DOC, DOCX, etc.)
                            </span>
                          </label>
                        </div>
                        {attachments.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {attachments.map((file, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200"
                              >
                                <span className="text-sm font-medium text-slate-700 truncate">
                                  {file.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setAttachments(attachments.filter((_, i) => i !== idx))
                                  }
                                  className="text-slate-400 hover:text-red-500 transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Experience */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Experience (if any)
                        </label>
                        <textarea
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          rows={2}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                          placeholder="Briefly describe any relevant experience (internships, projects, jobs, etc.)"
                        />
                      </div>

                      {/* Projects */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Projects
                        </label>
                        <textarea
                          name="projects"
                          value={formData.projects}
                          onChange={handleChange}
                          rows={2}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                          placeholder="Describe any projects you've worked on (academic, personal, or professional)"
                        />
                      </div>

                      {/* Why CRYONANO? */}
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Why CRYONANO? <span className="text-primary">*</span>
                        </label>
                        <textarea
                          name="whyCryonano"
                          value={formData.whyCryonano}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                          placeholder="Tell us why you want to intern at CRYONANO and what excites you about our work."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={formState === "submitting" || showSuccess}
                        className="w-full group relative px-6 py-4 bg-primary hover:bg-red-700 text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {formState === "submitting" ? "Submitting..." : "Submit Application"}
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                        />
                      </button>

                      <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        Your information is secure and will not be shared.
                      </p>
                    </form>
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
}