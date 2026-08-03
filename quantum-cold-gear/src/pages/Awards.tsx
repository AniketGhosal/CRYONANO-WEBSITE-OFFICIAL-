// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Award,
//   Calendar,
//   Users,
//   TrendingUp,
//   Sparkles,
//   Quote,
//   ChevronRight,
//   Building2,
//   Microscope,
//   Globe,
//   FileText,
//   Star,
//   Trophy,
//   Medal,
//   BookOpen,
//   CheckCircle2,
// } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut" as const,
//     },
//   },
// };

// const Awards = () => {
//   const sectionRef = useRef(null);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//         <Navbar />

//         <main>
//           {/* Breadcrumb */}
//           <div className="bg-white/80 border-b border-slate-200 backdrop-blur-md sticky top-[var(--nav-height)] z-40 shadow-sm">
//             <div className="container py-2.5">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
//               >
//                 <ArrowLeft className="h-3.5 w-3.5" />
//                 Back to Home
//               </Link>
//               <span className="text-xs text-slate-400 mx-2">/</span>
//               <span className="text-xs font-bold text-primary">Awards and Recognition</span>
//             </div>
//           </div>

//           {/* ============================== */}
//           {/* HERO SECTION */}
//           {/* ============================== */}
//           <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
//             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
//             <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
//             <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />

//             <div className="container relative z-10 py-12 md:py-16 lg:py-20">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="max-w-4xl mx-auto text-center"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"
//                 >
//                   <Trophy className="w-4 h-4" />
//                   Achievements & Milestones
//                 </motion.div>

//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.6 }}
//                   className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
//                 >
//                   Awards &{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-600 to-primary">
//                     Recognition
//                   </span>
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.6 }}
//                   className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed"
//                 >
//                   Celebrating the achievements and contributions of Cryonano Labs
//                   and its leadership in advancing quantum research, cryogenic
//                   instrumentation, and indigenous technology development.
//                 </motion.p>
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* AWARDS GRID */}
//           {/* ============================== */}
//           <section ref={sectionRef} className="container py-12 md:py-16 lg:py-20">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, margin: "-100px" }}
//               className="space-y-12"
//             >
//               {/* ============================================ */}
//               {/* AWARD 1: Indian Physics Association Bulletin */}
//               {/* ============================================ */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   transition: { duration: 0.3, ease: "easeInOut" },
//                 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
//               >
//                 <div className="grid md:grid-cols-2 gap-0">
//                   {/* Image Side */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
//                   >
//                     <img
//                       src="/images/Meet the scientists.png"
//                       alt="Dr. Deep Talukdar featured in Indian Physics Association Bulletin"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-primary">
//                         <BookOpen className="w-3.5 h-3.5" />
//                         Featured Profile
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Content Side */}
//                   <div className="p-6 md:p-8 lg:p-10">
//                     <div className="flex items-start gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
//                         <Star className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <span className="text-xs font-bold text-primary uppercase tracking-widest">Recognition</span>
//                         <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
//                           Dr. Deep Talukdar Featured in Indian Physics Association Bulletin
//                         </h2>
//                       </div>
//                     </div>

//                     <p className="text-slate-600 leading-relaxed mb-4">
//                       Deep Talukdar, Director of Cryonano Labs, has been featured
//                       in the Physics News Bulletin published by the Indian
//                       Physics Association.
//                     </p>

//                     <p className="text-slate-600 leading-relaxed mb-4">
//                       The feature highlights his two decades of work in
//                       experimental condensed matter physics, nanophotonics,
//                       quantum transport, and cryogenic instrumentation, along
//                       with his journey as a scientist-entrepreneur contributing
//                       to the development of advanced research technologies in
//                       India.
//                     </p>

//                     <div className="bg-slate-50 rounded-xl p-4 md:p-6 border-l-4 border-primary mb-4">
//                       <div className="flex items-start gap-3">
//                         <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
//                         <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
//                           In the profile, Dr. Talukdar reflects on his passion
//                           for physics as a field that enables building and
//                           understanding complex systems, while also sharing his
//                           interests beyond science, including permaculture,
//                           social activism, and long drives.
//                         </p>
//                       </div>
//                     </div>

//                     <p className="text-slate-600 leading-relaxed mb-6">
//                       This recognition underscores the growing role of
//                       scientist-led innovation in bridging fundamental research
//                       and real-world technological applications.
//                     </p>

//                     <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-xl p-4 md:p-5 border border-primary/20">
//                       <div className="flex items-start gap-3">
//                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                           <TrendingUp className="w-4 h-4 text-primary" />
//                         </div>
//                         <div>
//                           <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1">
//                             From Research to Innovation
//                           </p>
//                           <p className="text-sm text-slate-700 leading-relaxed">
//                             Through Cryonano Labs, Dr. Talukdar continues to
//                             contribute to the advancement of high-precision
//                             instrumentation and cryogenic technologies,
//                             supporting cutting-edge research across academic and
//                             industrial domains.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* ============================================ */}
//               {/* AWARD 2: TIFAC Annual Report */}
//               {/* ============================================ */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   transition: { duration: 0.3, ease: "easeInOut" },
//                 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
//               >
//                 <div className="grid md:grid-cols-2 gap-0 flex-row-reverse">
//                   {/* Image Side */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
//                   >
//                     <img
//                       src="/images/TIFAC-SIDBI.png"
//                       alt="TIFAC-SIDBI Recognition Certificate"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-primary">
//                         <FileText className="w-3.5 h-3.5" />
//                         Government Recognition
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Content Side */}
//                   <div className="p-6 md:p-8 lg:p-10">
//                     <div className="flex items-start gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
//                         <Medal className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <span className="text-xs font-bold text-primary uppercase tracking-widest">Government Recognition</span>
//                         <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
//                           Cryonano Recognized in TIFAC Annual Report for Indigenous Technology Development
//                         </h2>
//                       </div>
//                     </div>

//                     <p className="text-slate-600 leading-relaxed mb-4">
//                       Cryonano Labs was recognized in the annual report of the
//                       Technology Information, Forecasting and Assessment Council
//                       for its development of a low-cost, compact, and portable
//                       technology, driven by its in-house research and
//                       development efforts.
//                     </p>

//                     <p className="text-slate-600 leading-relaxed mb-4">
//                       This recognition highlights Cryonano's contribution to
//                       advancing indigenous innovation in high-technology
//                       domains, aligning with national initiatives to strengthen
//                       India's capabilities in scientific instrumentation and
//                       applied research.
//                     </p>

//                     <div className="bg-slate-50 rounded-xl p-4 md:p-6 border-l-4 border-primary mb-4">
//                       <p className="text-sm md:text-base text-slate-700 leading-relaxed">
//                         <span className="font-bold text-primary">Supported under the TIFAC-SIDBI SRIJAN Scheme</span>{" "}
//                         — a collaborative program between TIFAC and the Small
//                         Industries Development Bank of India. The scheme is
//                         designed to promote the development, demonstration, and
//                         commercialization of innovative technologies by
//                         supporting MSMEs working on high-risk, high-impact
//                         projects.
//                       </p>
//                     </div>

//                     <p className="text-slate-600 leading-relaxed mb-6">
//                       Through this initiative, Cryonano was able to accelerate
//                       the transition of its technology from research to
//                       real-world application, reinforcing its focus on building
//                       practical, scalable solutions for scientific and industrial
//                       use.
//                     </p>

//                     <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-xl p-4 md:p-5 border border-primary/20">
//                       <div className="flex items-start gap-3">
//                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                           <CheckCircle2 className="w-4 h-4 text-primary" />
//                         </div>
//                         <div>
//                           <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1">
//                             Enabling Innovation Through R&D
//                           </p>
//                           <p className="text-sm text-slate-700 leading-relaxed">
//                             This recognition reflects Cryonano's continued
//                             emphasis on:
//                           </p>
//                           <ul className="mt-2 space-y-1 text-sm text-slate-600">
//                             <li className="flex items-center gap-2">
//                               <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                               In-house technology development
//                             </li>
//                             <li className="flex items-center gap-2">
//                               <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                               Cost-effective and scalable engineering solutions
//                             </li>
//                             <li className="flex items-center gap-2">
//                               <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                               Bridging the gap between research innovation and
//                               commercialization
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* ============================================ */}
//               {/* AWARD 3: RPGR 2023 */}
//               {/* ============================================ */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   transition: { duration: 0.3, ease: "easeInOut" },
//                 }}
//                 viewport={{ once: true }}
//                 className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
//               >
//                 <div className="grid md:grid-cols-2 gap-0">
//                   {/* Image Side */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
//                   >
//                     <img
//                       src="/images/RPGR_2023.jpg"
//                       alt="RPGR 2023 Conference"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-primary">
//                         <Calendar className="w-3.5 h-3.5" />
//                         Invited Speaker • 2023
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Content Side */}
//                   <div className="p-6 md:p-8 lg:p-10">
//                     <div className="flex items-start gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
//                         <Users className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <span className="text-xs font-bold text-primary uppercase tracking-widest">International Conference</span>
//                         <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
//                           Dr. Deep Talukdar — Invited Speaker at RPGR 2023
//                         </h2>
//                       </div>
//                     </div>

//                     <p className="text-slate-600 leading-relaxed mb-4">
//                       Deep Talukdar, Director of Cryonano Labs, was invited as
//                       an expert participant at RPGR 2023, a leading international
//                       conference focused on graphene and low-dimensional
//                       materials, held in Bengaluru.
//                     </p>

//                     <div className="bg-slate-50 rounded-xl p-4 md:p-6 border-l-4 border-primary mb-4">
//                       <p className="text-sm md:text-base text-slate-700 leading-relaxed">
//                         The conference brought together prominent scientists,
//                         researchers, and industry innovators to discuss
//                         cutting-edge developments in quantum transport,
//                         nanophotonics, and emerging 2D technologies.
//                       </p>
//                     </div>

//                     <p className="text-slate-600 leading-relaxed mb-4">
//                       Dr. Talukdar contributed insights from his extensive
//                       experience in experimental condensed matter physics and
//                       cryogenic instrumentation, engaging with global experts on
//                       advancing next-generation research infrastructure.
//                     </p>

//                     <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-xl p-4 md:p-5 border border-primary/20">
//                       <div className="flex items-start gap-3">
//                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                           <Globe className="w-4 h-4 text-primary" />
//                         </div>
//                         <div>
//                           <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1">
//                             India's Growing Role
//                           </p>
//                           <p className="text-sm text-slate-700 leading-relaxed">
//                             His participation highlights both the growing impact
//                             of Cryonano Labs and India's expanding role in
//                             quantum and nanoscale research ecosystems.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </section>

//           {/* ============================== */}
//           {/* RECOGNITION STATS */}
//           {/* ============================== */}
//           <section className="relative py-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-y border-slate-200 overflow-hidden">
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
//                 className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
//               >
//                 {[
//                   { value: "20+", label: "Years in Physics", icon: Microscope },
//                   { value: "3", label: "National & International Recognitions", icon: Award },
//                   { value: "1", label: "Government Supported Initiative", icon: Building2 },
//                   { value: "1", label: "International Conference Invite", icon: Users },
//                 ].map((item, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.1 * idx, duration: 0.5 }}
//                     className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="flex justify-center mb-3">
//                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <item.icon className="w-6 h-6 text-primary" />
//                       </div>
//                     </div>
//                     <p className="font-display text-3xl font-extrabold text-slate-900">{item.value}</p>
//                     <p className="text-sm text-slate-600 font-medium mt-1">{item.label}</p>
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
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
//                   <Trophy className="w-8 h-8 text-primary" />
//                 </div>

//                 <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
//                   Driving Innovation,<br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
//                     Building Recognition
//                   </span>
//                 </h2>
//                 <p className="text-slate-600 text-lg mb-10 leading-relaxed">
//                   Cryonano Labs continues to push the boundaries of quantum
//                   research, cryogenic technology, and indigenous innovation.
//                 </p>

//                 <Link to="/about/news" className="inline-block">
//                   <button className="group relative px-8 py-4 rounded-xl font-bold text-base text-white bg-primary shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1">
//                     <span className="relative z-10 flex items-center gap-2">
//                       Explore More About Us
//                       <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

// export default Awards;










import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Globe,
  Users,
  Calendar,
  ArrowRight,
  BookOpen,
  Presentation,
  Building2,
  FlaskConical,
  Settings,
  Rocket,
  Quote,
  Sparkles,
  Mail,
  Award,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// ==========================================
// DATA BLOCKS
// ==========================================
const stats = [
  { icon: Calendar, value: "20+", label: "Years of Research Excellence" },
  { icon: Medal, value: "3", label: "National & International Recognitions" },
  { icon: Globe, value: "1", label: "International Conference Participation" },
  { icon: Users, value: "100+", label: "Research Labs & Institutions Served" },
];

// Full content – exact text from the user
const timelineEvents = [
  {
    year: "2023",
    tag: "Invited Speaker",
    title: "Dr. Deep Talukdar — Invited Speaker at RPGR 2023",
    icon: Presentation,
    content: `Deep Talukdar, Director of Cryonano Labs, was invited as an expert participant at RPGR 2023, a leading international conference focused on graphene and low-dimensional materials, held in Bengaluru.

The conference brought together prominent scientists, researchers, and industry innovators to discuss cutting-edge developments in quantum transport, nanophotonics, and emerging 2D technologies.

Dr. Talukdar contributed insights from his extensive experience in experimental condensed matter physics and cryogenic instrumentation, engaging with global experts on advancing next-generation research infrastructure.

His participation highlights both the growing impact of Cryonano Labs and India's expanding role in quantum and nanoscale research ecosystems.`,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2023",
    tag: "Technology Recognition",
    title: "Cryonano Recognized in TIFAC Annual Report for Indigenous Technology Development",
    icon: Building2,
    content: `Cryonano Labs was recognized in the annual report of the Technology Information, Forecasting and Assessment Council for its development of a low-cost, compact, and portable technology, driven by its in-house research and development efforts.

This recognition highlights Cryonano's contribution to advancing indigenous innovation in high-technology domains, aligning with national initiatives to strengthen India's capabilities in scientific instrumentation and applied research.

The work was supported under the TIFAC-SIDBI SRIJAN Scheme—a collaborative program between TIFAC and the Small Industries Development Bank of India. The scheme is designed to promote the development, demonstration, and commercialization of innovative technologies by supporting MSMEs working on high-risk, high-impact projects.

Through this initiative, Cryonano was able to accelerate the transition of its technology from research to real-world application, reinforcing its focus on building practical, scalable solutions for scientific and industrial use.`,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  },
];

const innovationPillars = [
  {
    icon: FlaskConical,
    title: "In-house Technology Development",
    desc: "Continuous investment in R&D to develop proprietary technologies and high-precision instruments for advanced research.",
  },
  {
    icon: Settings,
    title: "Cost-effective & Scalable Engineering",
    desc: "Designing affordable, robust, and scalable engineering solutions that empower research labs and industries across the country.",
  },
  {
    icon: Rocket,
    title: "Bridging Research & Commercialization",
    desc: "Transforming laboratory innovations into practical, commercially viable technologies that create real-world impact.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=500&auto=format&fit=crop",
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Awards() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />

        {/* ========================================== */}
        {/* 1. HERO – White background, red accents */}
        {/* ========================================== */}
        <section className="relative pt-12 pb-10 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="pr-4"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase shadow-sm mb-3"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Awards & Recognition
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3"
                >
                  Recognition for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">
                    Excellence & Innovation
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-5"
                >
                  Acknowledged by prestigious scientific bodies, government organizations, and
                  global research communities for our contributions to quantum science, cryogenic
                  technologies, and indigenous innovation.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-700">
                    <FlaskConical className="w-4 h-4 text-primary" /> Scientific Excellence
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-700">
                    <Rocket className="w-4 h-4 text-primary" /> Indigenous Innovation
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-700">
                    <Trophy className="w-4 h-4 text-primary" /> Research Leadership
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center items-center"
              >
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1550592704-6c76defa9985?q=80&w=800&auto=format&fit=crop"
                    alt="Excellence Recognition"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. STATS STRIP – Overlapping, compact */}
        {/* ========================================== */}
        <section className="relative z-20 -mt-6 container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-3 border-b md:border-b-0 md:border-r last:border-0 border-slate-100 pb-3 md:pb-0"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
                    <p className="text-xs font-bold text-slate-500 leading-tight">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================== */}
        {/* 3. IPA BULLETIN – Featured Recognition (FULL CONTENT) */}
        {/* ========================================== */}
        <section className="py-10 bg-slate-50 border-y border-slate-200">
          <div className="container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="md:w-5/12 bg-slate-100 relative min-h-[280px] overflow-hidden p-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                <img
                  src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Deep Talukdar IPA Bulletin"
                  className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
                  Featured Recognition
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                  Dr. Deep Talukdar Featured in Indian Physics Association Bulletin
                </h2>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                    <Calendar className="w-3.5 h-3.5" /> Published 2023
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
                    <BookOpen className="w-3.5 h-3.5" /> Featured Profile
                  </span>
                </div>

                <div className="space-y-3 text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                  <p>
                    Deep Talukdar, Director of Cryonano Labs, has been featured in the Physics News
                    Bulletin published by the Indian Physics Association.
                  </p>
                  <p>
                    The feature highlights his two decades of work in experimental condensed matter
                    physics, nanophotonics, quantum transport, and cryogenic instrumentation, along
                    with his journey as a scientist-entrepreneur contributing to the development of
                    advanced research technologies in India.
                  </p>
                  <p>
                    In the profile, Dr. Talukdar reflects on his passion for physics as a field that
                    enables building and understanding complex systems, while also sharing his
                    interests beyond science, including permaculture, social activism, and long drives.
                  </p>
                  <p>
                    This recognition underscores the growing role of scientist-led innovation in
                    bridging fundamental research and real-world technological applications.
                  </p>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4">
                  <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                    From Research to Innovation
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 font-medium">
                    Through Cryonano Labs, Dr. Talukdar continues to contribute to the advancement
                    of high-precision instrumentation and cryogenic technologies, supporting
                    cutting-edge research across academic and industrial domains.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. RECOGNITION TIMELINE – Full content */}
        {/* ========================================== */}
        <section className="py-10 bg-white">
          <div className="container max-w-5xl">
            <div className="text-center mb-8">
              <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
                Milestones
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">
                Recognition <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Timeline</span>
              </h2>
            </div>

            <div className="space-y-6">
              {timelineEvents.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 items-center"
                  >
                    {/* Left: Timeline Marker */}
                    <motion.div
                      variants={fadeInLeft}
                      className="flex flex-col md:items-end md:pr-8 md:border-r-4 border-slate-200 relative"
                    >
                      <div className="absolute hidden md:block -right-[11px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary" />
                      <h3 className="text-3xl font-black text-primary mb-1">{event.year}</h3>
                      <p className="text-sm md:text-base font-extrabold text-slate-900 leading-tight md:text-right">
                        {event.tag}
                      </p>
                    </motion.div>

                    {/* Right: Card */}
                    <motion.div
                      variants={fadeInUp}
                      className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row group"
                    >
                      <div className="sm:w-2/5 relative overflow-hidden min-h-[180px]">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                      </div>
                      <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center relative">
                        <Icon className="absolute top-6 right-6 w-8 h-8 text-slate-300" />
                        <h4 className="text-xl font-extrabold text-slate-900 mb-3 pr-10 leading-tight">
                          {event.title}
                        </h4>
                        <div className="space-y-3 text-sm md:text-base text-slate-600 leading-relaxed max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                          {event.content.split("\n").map((paragraph, idx) => (
                            <p key={idx}>{paragraph.trim()}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. ENABLING INNOVATION (TIFAC Sub-points) */}
        {/* ========================================== */}
        <section className="py-10 bg-slate-50 border-y border-slate-200">
          <div className="container max-w-6xl">
            <div className="text-center mb-8">
              <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
                Our Approach
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">
                Enabling <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Innovation Through R&D</span>
              </h2>
              <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mt-2">
                This recognition reflects Cryonano's continued emphasis on:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {innovationPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-primary/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 mb-3 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                    <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full group-hover:bg-primary transition-colors" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 6. MOMENTS OF RECOGNITION GALLERY */}
        {/* ========================================== */}
        <section className="py-10 bg-white">
          <div className="container max-w-7xl">
            <div className="text-center mb-8">
              <span className="text-primary font-extrabold tracking-widest uppercase text-[10px] block mb-1">
                Captured Moments
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900">
                Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Recognition</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200 group relative"
                >
                  <img
                    src={src}
                    alt={`Recognition Moment ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 7. QUOTE SECTION – Dark Band */}
        {/* ========================================== */}
        <section className="py-14 bg-slate-900 border-y border-primary/20 relative overflow-hidden">
          {/* Subtle red glow behind the quote */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
          </div>

          <div className="container max-w-4xl relative z-10 text-center">
            <Quote className="w-14 h-14 text-primary/40 mx-auto mb-5 rotate-180" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight italic mb-8"
            >
              "Scientific innovation creates value only when it reaches society."
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-1 bg-primary rounded-full mb-5" />
              <p className="text-xl font-bold text-white tracking-wide">— Dr. Deep Talukdar</p>
              <p className="text-slate-400 font-medium mt-1 uppercase tracking-widest text-sm">
                Director, Cryonano Labs Pvt. Ltd.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 8. CUSTOM CTA – Two buttons */}
        {/* ========================================== */}
        <section className="relative py-12 bg-white border-t border-slate-100">
          <div className="container text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
                Interested in Collaborating with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                  Cryonano
                </span>
                ?
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-6 max-w-xl mx-auto">
                Let's build the future of science and technology together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full group px-8 py-3 rounded-lg font-extrabold text-sm text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                    <Mail className="w-4 h-4" />
                    Request Collaboration
                  </button>
                </Link>
                <Link to="/request-quote" className="w-full sm:w-auto">
                  <button className="w-full group px-8 py-3 rounded-lg font-extrabold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    <Rocket className="w-4 h-4" />
                    Request Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <div className="relative z-50">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}