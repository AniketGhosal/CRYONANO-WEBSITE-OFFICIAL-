// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion } from "framer-motion";
// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Calendar,
//   Users,
//   Globe,
//   FileText,
//   Sparkles,
//   ArrowUpRight,
//   Newspaper,
//   Microscope,
//   Train,
//   Network,
//   ExternalLink,
//   Clock,
//   Pin,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// // News data
// const newsItems = [
//   {
//     id: 1,
//     title: "AI-Powered Predictive Maintenance System for Vande Bharat Trains",
//     date: "December 2024",
//     location: "Howrah Division, Indian Railways",
//     category: "Innovation",
//     icon: Train,
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
//     featured: true,
//     excerpt:
//       "Cryonano Labs has developed and delivered an advanced predictive maintenance system powered by Artificial Intelligence (AI) and Machine Learning (ML) for deployment within Indian Railways, supporting the next-generation Vande Bharat Express train sets.",
//     fullContent: `
//       <p>Cryonano Labs has developed and delivered an advanced predictive maintenance system powered by Artificial Intelligence (AI) and Machine Learning (ML) for deployment within Indian Railways, supporting the next-generation Vande Bharat Express train sets.</p>
//       <p>The system enables real-time monitoring and intelligent analysis of critical parameters, allowing early detection of potential failures and significantly improving operational reliability and uptime. By leveraging data-driven insights, the platform helps shift maintenance strategies from reactive to predictive—reducing downtime and optimizing performance.</p>
//       <p>This solution has been implemented in collaboration with the Howrah Division, contributing to ongoing efforts to modernize railway infrastructure through advanced technologies.</p>
//       <p>A recent article by The Times of India highlights the broader initiative towards enhancing reliability through predictive systems in this division.</p>
//       <p class="font-semibold text-primary">At Cryonano, we are committed to building intelligent, end-to-end technology solutions that bridge advanced analytics with real-world infrastructure challenges.</p>
//       <a href="http://timesofindia.indiatimes.com/articleshow/114425799.cms" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-2">
//         <ExternalLink className="w-4 h-4" /> Read the Times of India coverage
//       </a>
//     `,
//   },
//   {
//     id: 2,
//     title: "Cryonano Showcases Advanced 2D Materials Solutions at ALMOND 2023",
//     date: "March 3–5, 2023",
//     location: "Toshali Sands Resort, Bhubaneswar",
//     category: "Conference",
//     icon: Microscope,
//     image: "/images/Almond_2023.avif",
//     featured: false,
//     excerpt:
//       "Cryonano Labs participated in the 1st National Conference on 'Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)', held at Toshali Sands Resort from March 3rd–5th, 2023. The conference was organized by the Institute of Physics, Bhubaneswar.",
//     fullContent: `
//       <p>Cryonano Labs participated in the 1st National Conference on "Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)", held at Toshali Sands Resort from March 3rd–5th, 2023. The conference was organized by the Institute of Physics, Bhubaneswar.</p>
//       <p>Alongside Aimil Ltd., Cryonano engaged with researchers, scientists, and industry professionals, showcasing its capabilities in advanced characterization and fabrication systems for low-dimensional materials.</p>
//       <p>As 2D materials continue to be a key area of research in next-generation electronics and optoelectronic applications, Cryonano's solutions demonstrated strong alignment with the needs of the scientific community—enabling precise control, repeatability, and reliability across experimental workflows.</p>
//       <h4 class="font-bold text-slate-800 mt-4 mb-2">Key Focus Areas at ALMOND 2023</h4>
//       <ul class="list-disc pl-5 space-y-1 text-slate-600">
//         <li>2D materials: synthesis and applications</li>
//         <li>Resistive switching and neuromorphic computing</li>
//         <li>Low-dimensional materials for energy and optoelectronic applications</li>
//         <li>Computational studies: density functional theory and advanced material simulations</li>
//       </ul>
//       <h4 class="font-bold text-slate-800 mt-4 mb-2">Conference Highlights</h4>
//       <p>At ALMOND 2023, Cryonano Labs showcased key subsystems supporting precision fabrication and measurement workflows:</p>
//       <ul class="list-disc pl-5 space-y-1 text-slate-600">
//         <li><span class="font-semibold">Nano Stage System:</span> Designed for high-resolution nanoscale positioning and probing, enabling precise electrical and physical characterization of advanced materials and devices.</li>
//         <li><span class="font-semibold">Motorised Stages (XYθ Sample + XYZ Stamp Stage):</span> An integrated stage system providing precise planar alignment (XYθ) along with controlled vertical and lateral motion (XYZ), enabling accurate layer alignment and deterministic transfer of 2D materials.</li>
//         <li><span class="font-semibold">2D Transfer System (System-Level Representation):</span> Showcased as part of the overall workflow, demonstrating Cryonano's capability to integrate motion control and transfer processes into a cohesive fabrication platform.</li>
//       </ul>
//       <p>These systems together highlight Cryonano's modular and integrated approach to enabling reliable fabrication and characterization of low-dimensional material systems.</p>
//       <div class="bg-primary/5 border-l-4 border-primary p-4 mt-4 rounded-r">
//         <p class="font-semibold text-slate-800">Driving the Future of Low-Dimensional Materials Research</p>
//         <p class="text-slate-600">Cryonano's participation at ALMOND 2023 reflects its continued commitment to supporting cutting-edge research through application-driven instrumentation, bridging the gap between material development and real-world device innovation.</p>
//       </div>
//     `,
//   },
//   {
//     id: 3,
//     title: "Cryonano Strengthens Global Partnerships to Accelerate Make-in-India Innovation",
//     date: "2024",
//     location: "Nanjing, China",
//     category: "Partnership",
//     icon: Network,
//     image: "/images/Agreement Signing Ceremony, Nanjing , China.avif",
//     featured: false,
//     excerpt:
//       "Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives in high-end scientific instrumentation.",
//     fullContent: `
//       <p>Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives in high-end scientific instrumentation.</p>
//       <p>These collaborations are aimed at accelerating in-house technology development, enabling faster innovation cycles and the introduction of high-quality products tailored for both Indian and international markets.</p>
//       <p>Through these partnerships, Cryonano is expanding its capabilities across key domains, including cryogenic technologies and advanced material science instrumentation, reinforcing its position as a growing contributor to the global research ecosystem.</p>
//       <p>The agreements are expected to significantly enhance product development efficiency, strengthen supply chains, and support the delivery of reliable, application-driven solutions to research and industrial communities.</p>
//       <div class="bg-primary/5 border-l-4 border-primary p-4 mt-4 rounded-r">
//         <p class="font-semibold text-slate-800">Agreement Signing Ceremony</p>
//         <p class="text-slate-600">The partnership agreements were formalized during a signing ceremony held in Nanjing, marking an important milestone in Cryonano's global collaboration efforts.</p>
//       </div>
//       <div class="bg-slate-50 border border-slate-200 p-4 mt-4 rounded">
//         <p class="font-semibold text-slate-800">Looking Ahead</p>
//         <p class="text-slate-600">With a strong focus on indigenous development supported by global collaboration, Cryonano continues to work towards building a robust ecosystem for next-generation research technologies.</p>
//       </div>
//     `,
//   },
// ];

// const NewsEvents = () => {
//   const [expandedId, setExpandedId] = useState<number | null>(null);

//   const toggleExpand = (id: number) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   // Featured story is the first one
//   const featured = newsItems.find((item) => item.featured);
//   const otherNews = newsItems.filter((item) => !item.featured);

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
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
//           {/* HERO – Minimal with accent line */}
//           {/* ============================== */}
//           <section className="relative py-16 md:py-24 bg-white">
//             <div className="container text-center max-w-3xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold tracking-widest uppercase mb-6">
//                   <Sparkles className="w-4 h-4" />
//                   Latest Updates
//                 </div>
//                 <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
//                   News &{" "}
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
//                     Events
//                   </span>
//                 </h1>
//                 <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
//                 <p className="text-slate-600 text-lg mt-6 leading-relaxed">
//                   Stay updated with the latest developments, partnerships, and
//                   industry engagements from Cryonano Labs.
//                 </p>
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* FEATURED STORY */}
//           {/* ============================== */}
//           {featured && (
//             <section className="container -mt-4 pb-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6 }}
//                 className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl group"
//               >
//                 <div className="absolute inset-0">
//                   <img
//                     src={featured.image}
//                     alt={featured.title}
//                     className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
//                 </div>
//                 <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
//                   <div className="flex flex-wrap items-center gap-3 mb-4">
//                     <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/30 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-widest border border-primary/30">
//                       <Pin className="w-3.5 h-3.5" />
//                       Featured Story
//                     </span>
//                     <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
//                       <Calendar className="w-3.5 h-3.5" />
//                       {featured.date}
//                     </span>
//                     <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
//                       <Train className="w-3.5 h-3.5" />
//                       {featured.category}
//                     </span>
//                   </div>
//                   <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
//                     {featured.title}
//                   </h2>
//                   <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
//                     {featured.excerpt}
//                   </p>
//                   <div className="flex flex-wrap items-center gap-4">
//                     <button
//                       onClick={() => toggleExpand(featured.id)}
//                       className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
//                     >
//                       {expandedId === featured.id ? "Close Story" : "Read Full Story"}
//                       {expandedId === featured.id ? (
//                         <ChevronUp className="w-4 h-4" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4" />
//                       )}
//                     </button>
//                     <span className="text-white/50 text-sm italic">
//                       {featured.location}
//                     </span>
//                   </div>
//                   {/* Expandable content */}
//                   {expandedId === featured.id && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       transition={{ duration: 0.4 }}
//                       className="mt-6 pt-6 border-t border-white/10 prose prose-invert max-w-none text-white/90"
//                       dangerouslySetInnerHTML={{ __html: featured.fullContent }}
//                     />
//                   )}
//                 </div>
//               </motion.div>
//             </section>
//           )}

//           {/* ============================== */}
//           {/* NEWS GRID */}
//           {/* ============================== */}
//           <section className="container py-8 md:py-12">
//             <div className="flex items-center gap-4 mb-8">
//               <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//               <h2 className="text-xs font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                 More Stories
//                 <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//               </h2>
//               <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {otherNews.map((item, index) => {
//                 const Icon = item.icon;
//                 const isExpanded = expandedId === item.id;
//                 return (
//                   <motion.article
//                     key={item.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="relative h-48 overflow-hidden bg-slate-200">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         onError={(e) => {
//                           e.currentTarget.src =
//                             "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//                       <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
//                         <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-primary shadow-lg">
//                           <Calendar className="w-3 h-3" />
//                           {item.date}
//                         </span>
//                         <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-primary shadow-lg">
//                           <Pin className="w-3 h-3" />
//                           {item.location.split(",")[0]}
//                         </span>
//                       </div>
//                       <div className="absolute top-3 right-3">
//                         <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-white shadow-lg">
//                           <Icon className="w-3 h-3" />
//                           {item.category}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <h3 className="font-display text-xl font-extrabold text-slate-900 leading-tight mb-2 line-clamp-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
//                         {item.excerpt}
//                       </p>
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-red-700 transition-colors group/btn"
//                       >
//                         {isExpanded ? "Close" : "Read More"}
//                         {isExpanded ? (
//                           <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
//                         ) : (
//                           <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
//                         )}
//                       </button>
//                       {isExpanded && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           transition={{ duration: 0.4 }}
//                           className="mt-4 pt-4 border-t border-slate-100 prose prose-sm max-w-none text-slate-600"
//                           dangerouslySetInnerHTML={{ __html: item.fullContent }}
//                         />
//                       )}
//                     </div>
//                   </motion.article>
//                 );
//               })}
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* IMPACT STATS */}
//           {/* ============================== */}
//           <section className="relative py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
//             <div className="container">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="text-center max-w-2xl mx-auto mb-12"
//               >
//                 <h2 className="font-display text-3xl font-extrabold text-slate-900">
//                   Our Impact at a Glance
//                 </h2>
//                 <p className="text-slate-600 mt-2">Key milestones from our recent engagements.</p>
//               </motion.div>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//                 {[
//                   { value: "1", label: "AI Predictive Maintenance System", icon: Train },
//                   { value: "1", label: "National Conference Participation", icon: Microscope },
//                   { value: "1", label: "International Partnership Agreement", icon: Globe },
//                   { value: "Multiple", label: "Global Strategic Partnerships", icon: Network },
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
//                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                         <item.icon className="w-6 h-6 text-primary" />
//                       </div>
//                     </div>
//                     <p className="font-display text-3xl font-extrabold text-slate-900">{item.value}</p>
//                     <p className="text-sm text-slate-600 font-medium mt-1">{item.label}</p>
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
//             <div className="container relative z-10 text-center max-w-2xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
//                   <Newspaper className="w-8 h-8 text-primary" />
//                 </div>
//                 <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
//                   Stay Connected with <br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
//                     Cryonano Labs
//                   </span>
//                 </h2>
//                 <p className="text-slate-600 text-lg mb-10 leading-relaxed">
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










import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ExternalLink,
  Image as ImageIcon,
  CheckCircle2,
  Mail,
  ChevronLeft,
  ChevronRight,
  Newspaper,
  Award,
  Presentation,
  Network,
  Globe,
  Sparkles,
  Rocket,
  Minus
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

// ==========================================
// DATA BLOCKS – All Content Preserved
// ==========================================
const tabs = [
  { id: "all", label: "All Updates", icon: Calendar },
  { id: "news", label: "Company News", icon: Newspaper },
  { id: "events", label: "Events", icon: Presentation },
  { id: "collaborations", label: "Collaborations", icon: Network },
  { id: "media", label: "Media Coverage", icon: Globe },
  { id: "achievements", label: "Achievements", icon: Award },
];

const newsData = [
  {
    id: "01",
    category: "COMPANY NEWS",
    filter: "news media",
    date: "December 2024",
    location: "Howrah Division, Indian Railways",
    title: "AI-Powered Predictive Maintenance System for Vande Bharat Trains",
    description:
      "Cryonano Labs has developed and delivered an advanced predictive maintenance system powered by Artificial Intelligence (AI) and Machine Learning (ML) for deployment within Indian Railways, supporting the next-generation Vande Bharat Express train sets. The system enables real-time monitoring and intelligent analysis of critical parameters, allowing early detection of potential failures and significantly improving operational reliability and uptime.",
    highlightsTitle: "Key Highlights",
    highlights: [
      "Real-time monitoring of critical parameters",
      "Early detection of potential failures",
      "Shift from reactive to predictive maintenance",
      "Implemented in collaboration with Howrah Division",
    ],
    // image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop",
    image: "/images/news/Vande_Bharat.cms",
    linkText: "Read Media Coverage",
    linkUrl: "http://timesofindia.indiatimes.com/articleshow/114425799.cms",
    fullContent: [
      "Cryonano Labs has developed and delivered an advanced predictive maintenance system powered by Artificial Intelligence (AI) and Machine Learning (ML) for deployment within Indian Railways, supporting the next-generation Vande Bharat Express train sets.",
      "The system enables real-time monitoring and intelligent analysis of critical parameters, allowing early detection of potential failures and significantly improving operational reliability and uptime. By leveraging data-driven insights, the platform helps shift maintenance strategies from reactive to predictive—reducing downtime and optimizing performance.",
      "This solution has been implemented in collaboration with the Howrah Division, contributing to ongoing efforts to modernize railway infrastructure through advanced technologies.",
      "A recent article by The Times of India highlights the broader initiative towards enhancing reliability through predictive systems in this division.",
      "At Cryonano, we are committed to building intelligent, end-to-end technology solutions that bridge advanced analytics with real-world infrastructure challenges.",
    ],
    mediaLink: "http://timesofindia.indiatimes.com/articleshow/114425799.cms",
  },
  {
    id: "02",
    category: "EVENT",
    filter: "events",
    date: "3–5 March 2023",
    location: "Toshali Sands Resort, Puri",
    title: "Cryonano Showcases Advanced 2D Materials Solutions at ALMOND 2023",
    description:
      "CRYONANO and AIMIL both companies participated in the 1st National Conference on 'Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)', held at Toshali Sands Resort, Puri during March 3rd–5th, 2023, organized by the Institute of Physics, Bhubaneswar.",
    highlightsTitle: "Key Focus Areas",
    highlights: [
      "2D materials: synthesis and applications",
      "Resistive switching and neuromorphic computing",
      "Low-dimensional materials for energy and optoelectronic applications",
      "Computational studies: Density functional theory, simulations for Advanced Materials",
    ],
    // image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    image: "/images/news/Almond_2023.avif",
    linkText: "View Gallery",
    linkUrl: "#gallery",
    fullContent: [
      "CRYONANO and AIMIL both companies participated in the 1st National Conference on 'Advances in Low-dimensional Materials for Optoelectronic and Nano Devices (ALMOND 2023)', held at Toshali Sands Resort, Puri during March 3rd–5th, 2023, organized by the Institute of Physics, Bhubaneswar.",
      "CRYONANO displayed its new range of products at the conference.",
      "As 2D materials are an active area of research and we make characterization equipment for the same it was a natural fit.",
      "The main topics of discussion at ALMOND 2023 were:",
      "• 2D materials: synthesis and applications",
      "• Resistive switching and Neuromorphic computing",
      "• Low-dimensional materials for energy and optoelectronic applications",
      "• Computational studies: Density functional theory, simulations for Advanced Materials",
      "Alongside Aimil Ltd., Cryonano engaged with researchers, scientists, and industry professionals, showcasing its capabilities in advanced characterization and fabrication systems for low-dimensional materials.",
      "As 2D materials continue to be a key area of research in next-generation electronics and optoelectronic applications, Cryonano's solutions demonstrated strong alignment with the needs of the scientific community—enabling precise control, repeatability, and reliability across experimental workflows.",
    ],
    conferenceHighlights: {
      title: "Conference Highlights",
      items: [
        "Nano Stage System – Designed for high-resolution nanoscale positioning and probing, enabling precise electrical and physical characterization of advanced materials and devices.",
        "Motorised Stages (XYθ Sample + XYZ Stamp Stage) – An integrated stage system providing precise planar alignment (XYθ) along with controlled vertical and lateral motion (XYZ), enabling accurate layer alignment and deterministic transfer of 2D materials.",
        "2D Transfer System (System-Level Representation) – Showcased as part of the overall workflow, demonstrating Cryonano's capability to integrate motion control and transfer processes into a cohesive fabrication platform.",
      ],
      conclusion:
        "These systems together highlight Cryonano's modular and integrated approach to enabling reliable fabrication and characterization of low-dimensional material systems. Cryonano's participation at ALMOND 2023 reflects its continued commitment to supporting cutting-edge research through application-driven instrumentation, bridging the gap between material development and real-world device innovation.",
    },
  },
  {
    id: "03",
    category: "COLLABORATION",
    filter: "collaborations news",
    date: "2024",
    location: "Nanjing, China",
    title: "Cryonano Strengthens Global Partnerships to Accelerate Make-in-India Innovation",
    description:
      "To speed up the make-in-India initiatives of CRYONANO we have signed multiple agreements with various vendors/partners across the globe. Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners.",
    highlightsTitle: "Key Outcomes",
    highlights: [
      "Accelerated in-house technology development",
      "Strengthened global collaboration network",
      "Expansion in cryogenic and material science technologies",
      "Enhanced supply chains and global market reach",
    ],
    image: "/images/news/image1.jpg",
    linkText: "Read More",
    linkUrl: "#",
    fullContent: [
      "To speed up the make-in-India initiatives of CRYONANO we have signed multiple agreements with various vendors/partners across the globe.",
      "Cryonano Labs has entered into multiple strategic agreements with global vendors and technology partners as part of its commitment to advancing Make-in-India initiatives in high-end scientific instrumentation.",
      "These collaborations are aimed at accelerating in-house technology development, enabling faster innovation cycles and the introduction of high-quality products tailored for both Indian and international markets.",
      "Through these partnerships, Cryonano is expanding its capabilities across key domains, including cryogenic technologies and advanced material science instrumentation, reinforcing its position as a growing contributor to the global research ecosystem.",
      "The agreements are expected to significantly enhance product development efficiency, strengthen supply chains, and support the delivery of reliable, application-driven solutions to research and industrial communities.",
    ],
    agreementDetails:
      "The partnership agreements were formalized during a signing ceremony held in Nanjing, marking an important milestone in Cryonano's global collaboration efforts.",
    lookingAhead:
      "With a strong focus on indigenous development supported by global collaboration, Cryonano continues to work towards building a robust ecosystem for next-generation research technologies.",
  },
  {
    id: "04",
    category: "EVENT",
    filter: "events",
    date: "22–23 May 2026",
    location: "IISc, Bengaluru",
    title: "Cryonano at Quantum Pitch Fest 2026 – Building India's Quantum Ecosystem",
    description:
      "CRYONANO was proud to participate in the Quantum Pitch Fest 2026, held on 22–23 May 2026 at the Indian Institute of Science (IISc), Bengaluru. The event brought together researchers, startups, industry leaders, investors, and policymakers to accelerate the growth of India's quantum technology ecosystem.",
    highlightsTitle: "Key Takeaways",
    highlights: [
      "Importance of cryogenic infrastructure for quantum technologies",
      "Supporting India's National Quantum Mission",
      "Vision for a robust domestic cryogenic ecosystem",
      "Empowering research labs, institutions & quantum startups",
    ],
    image: "/images/news/IISC.jpeg",
    linkText: "Event Details",
    linkUrl: "#",
    fullContent: [
      "CRYONANO was proud to participate in the Quantum Pitch Fest 2026, held on 22–23 May 2026 at the Indian Institute of Science (IISc), Bengaluru. The event, organized by the IISc Quantum Technology Initiative (IQTI) and its ecosystem partners, brought together researchers, startups, industry leaders, investors, and policymakers to accelerate the growth of India's quantum technology ecosystem.",
      'As part of the "Building Quantum Ecosystem – Session 2", Dr. Deep Talukdar, representing CRYONANO, delivered a presentation titled:',
      '"Cooling the Quantum Revolution: Building India\'s Cryogenic Ecosystem for Quantum Technologies"',
      "The talk highlighted the critical role of cryogenic infrastructure in enabling quantum technologies, including quantum computing, quantum sensing, and superconducting devices. Dr. Talukdar discussed the importance of developing indigenous cryogenic capabilities to support India's National Quantum Mission and emphasized how reliable low-temperature systems are fundamental to deploying next-generation quantum hardware successfully.",
      "CRYONANO also shared its vision of building a robust domestic ecosystem for advanced cryogenic solutions, supporting research laboratories, academic institutions, and emerging quantum startups with high-performance cooling technologies.",
      "We are honored to have been invited to contribute to this prestigious event and remain committed to advancing India's quantum ecosystem through innovation in cryogenic engineering and scientific instrumentation.",
    ],
    eventDetails: {
      event: "Quantum Pitch Fest 2026",
      dates: "22–23 May 2026",
      venue: "Indian Institute of Science (IISc), Bengaluru",
      session: "Building Quantum Ecosystem – Session 2",
      speaker: "Dr. Deep Talukdar, CRYONANO",
      presentation: "Cooling the Quantum Revolution: Building India's Cryogenic Ecosystem for Quantum Technologies",
    },
  },
];

const galleryHighlights = [
  { img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=500&auto=format&fit=crop", title: "ALMOND 2023", subtitle: "Exhibition Booth" },
  { img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=500&auto=format&fit=crop", title: "Prototype & Product", subtitle: "Showcase" },
  { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500&auto=format&fit=crop", title: "ALMOND 2023", subtitle: "Team" },
  { img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500&auto=format&fit=crop", title: "RPGR 2023", subtitle: "Session" },
  { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=500&auto=format&fit=crop", title: "Agreement Signing", subtitle: "Nanjing, China" },
  { img: "https://images.unsplash.com/photo-1635048424329-a9bfb10440f4?q=80&w=500&auto=format&fit=crop", title: "Quantum Pitch Fest 2026", subtitle: "IISc, Bengaluru" },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState("all");
  
  // Track which news card is expanded inline
  const [expandedNewsId, setExpandedNewsId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNews = activeTab === "all" 
    ? newsData 
    : newsData.filter((news) => news.filter.includes(activeTab));

  const toggleExpand = (id: string) => {
    setExpandedNewsId(expandedNewsId === id ? null : id);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden relative">
        <Navbar />

        {/* ========================================== */}
        {/* 1. HERO */}
        {/* ========================================== */}
        <section className="relative pt-8 pb-8 bg-white border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase shadow-sm mb-3"
              >
                <Sparkles className="w-3.5 h-3.5" />
                About Us
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3"
              >
                News &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">
                  Events
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
              >
                Stay updated with the latest news, milestones and events from Cryonano Labs as
                we advance scientific research, engineering innovation and global collaborations.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4 mt-4"
              >
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Newspaper className="w-5 h-5 text-primary" /> Latest Updates
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Calendar className="w-5 h-5 text-primary" /> Key Events
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Award className="w-5 h-5 text-primary" /> Milestones
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. FILTER TABS */}
        {/* ========================================== */}
        <section className="relative z-20 -mt-2 container max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2 flex flex-wrap lg:flex-nowrap items-center justify-between">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setExpandedNewsId(null); // Close any expanded card on tab change
                  }}
                  className={`flex-1 flex items-center justify-center gap-3 py-3.5 px-3 rounded-xl transition-all duration-300 min-w-[100px] ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                  <span className={`text-sm font-extrabold uppercase tracking-wider ${isActive ? "text-white" : ""}`}>
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div layoutId="activeTab" className="absolute -bottom-2 w-10 h-1 bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. NEWS & EVENTS IN-LINE EXPANDING GRID */}
        {/* ========================================== */}
        <section className="pt-10 pb-10 bg-white relative z-10">
          <div className="container max-w-7xl">
            <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <AnimatePresence mode="popLayout">
                {filteredNews.map((news) => {
                  const isExpanded = expandedNewsId === news.id;

                  return (
                    <motion.div
                      layout
                      key={news.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      // When expanded on desktop, make it span both columns for a beautiful reading layout
                      className={`bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group ${
                        isExpanded ? "col-span-1 lg:col-span-2 ring-1 ring-primary/20" : "col-span-1"
                      }`}
                    >
                      {/* Top Image Section (adjusts height dynamically if expanded) */}
                      <motion.div layout className={`relative w-full overflow-hidden bg-slate-100 ${isExpanded ? "h-64 lg:h-96" : "h-56"}`}>
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary font-extrabold text-lg px-3 py-1 rounded-lg shadow-sm border border-slate-200">
                          {news.id}
                        </div>
                        <div className="absolute top-3 right-3 bg-primary text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                          {news.category}
                        </div>
                      </motion.div>

                      {/* Fixed Content Header (Always visible) */}
                      <motion.div layout className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-primary" /> {news.date}
                          </span>
                          {news.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-primary" /> {news.location}
                            </span>
                          )}
                        </div>

                        <h3 className={`font-display font-extrabold text-slate-900 leading-snug group-hover:text-primary transition-colors ${isExpanded ? "text-2xl md:text-4xl mb-6" : "text-xl mb-3"}`}>
                          {news.title}
                        </h3>

                        {/* Collapsed State View */}
                        <AnimatePresence>
                          {!isExpanded && (
                            <motion.div 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="flex flex-col flex-grow"
                            >
                              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4 line-clamp-3">
                                {news.description}
                              </p>
                              <div className="mb-5 mt-auto">
                                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2">
                                  {news.highlightsTitle}
                                </h4>
                                <ul className="space-y-1.5">
                                  {news.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium line-clamp-1">
                                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expanded State View (In-line details) */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="overflow-hidden"
                            >
                              {/* Full content paragraphs */}
                              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-medium mb-8">
                                {news.fullContent.map((paragraph: string, idx: number) => (
                                  <p key={idx}>{paragraph}</p>
                                ))}
                              </div>

                              <div className="grid lg:grid-cols-2 gap-6">
                                {/* Highlights Box */}
                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                  <h4 className="text-sm font-extrabold text-primary uppercase tracking-widest mb-4">
                                    {news.highlightsTitle}
                                  </h4>
                                  <ul className="space-y-3">
                                    {news.highlights.map((highlight: string, idx: number) => (
                                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span>{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Dynamic Extra Sections */}
                                <div className="space-y-6">
                                  {news.conferenceHighlights && (
                                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5">
                                      <h4 className="text-sm font-extrabold text-primary uppercase tracking-widest mb-3">
                                        {news.conferenceHighlights.title}
                                      </h4>
                                      <ul className="space-y-2 mb-4">
                                        {news.conferenceHighlights.items.map((item: string, idx: number) => (
                                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                        {news.conferenceHighlights.conclusion}
                                      </p>
                                    </div>
                                  )}

                                  {news.agreementDetails && (
                                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5">
                                      <p className="text-sm font-bold text-slate-800 mb-1">Agreement Signing</p>
                                      <p className="text-sm text-slate-600 font-medium">{news.agreementDetails}</p>
                                    </div>
                                  )}

                                  {news.lookingAhead && (
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                      <p className="text-sm font-bold text-slate-800 mb-1">Looking Ahead</p>
                                      <p className="text-sm text-slate-600 font-medium">{news.lookingAhead}</p>
                                    </div>
                                  )}

                                  {news.eventDetails && (
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <span className="font-bold text-slate-800 block mb-1">Event:</span>
                                        <p className="text-slate-600">{news.eventDetails.event}</p>
                                      </div>
                                      <div>
                                        <span className="font-bold text-slate-800 block mb-1">Dates:</span>
                                        <p className="text-slate-600">{news.eventDetails.dates}</p>
                                      </div>
                                      <div className="col-span-1 md:col-span-2">
                                        <span className="font-bold text-slate-800 block mb-1">Venue:</span>
                                        <p className="text-slate-600">{news.eventDetails.venue}</p>
                                      </div>
                                      <div className="col-span-1 md:col-span-2">
                                        <span className="font-bold text-slate-800 block mb-1">Session / Speaker:</span>
                                        <p className="text-slate-600">{news.eventDetails.session} | {news.eventDetails.speaker}</p>
                                      </div>
                                      <div className="col-span-1 md:col-span-2">
                                        <span className="font-bold text-slate-800 block mb-1">Presentation:</span>
                                        <p className="text-slate-600 italic">"{news.eventDetails.presentation}"</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Expanded Media Link */}
                              {news.mediaLink && (
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                  <a
                                    href={news.mediaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-red-700 transition-colors bg-red-50 px-6 py-3 rounded-xl border border-red-100"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    Open Official Media Coverage
                                  </a>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Card Footer Actions */}
                        <motion.div layout className={`flex items-center justify-between pt-5 mt-auto border-t ${isExpanded ? 'border-transparent mt-8' : 'border-slate-100'}`}>
                          <button
                            onClick={() => toggleExpand(news.id)}
                            className={`flex items-center gap-2 font-bold text-sm transition-colors border px-5 py-2 rounded-full ${
                              isExpanded 
                                ? "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200" 
                                : "text-primary border-primary/20 hover:bg-red-50 hover:text-red-700"
                            }`}
                          >
                            {isExpanded ? (
                              <>Close Article <Minus className="w-4 h-4" /></>
                            ) : (
                              <>Read More <ArrowRight className="w-4 h-4" /></>
                            )}
                          </button>

                          {/* Only show top-level external link if not expanded (since it's inside when expanded) */}
                          {!isExpanded && news.linkUrl && (
                            <a
                              href={news.linkUrl}
                              target={news.linkUrl.startsWith('http') ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-slate-600 font-bold text-sm hover:text-primary transition-colors"
                            >
                              {news.linkText} <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </motion.div>

                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. EVENT HIGHLIGHTS GALLERY */}
        {/* ========================================== */}
        <section id="gallery" className="py-10 bg-slate-50 border-y border-slate-200">
          <div className="container max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-extrabold text-slate-900 uppercase tracking-wide">
                Event Highlights
              </h2>
            </div>

            <div className="relative flex items-center group">
              <button className="absolute left-0 -ml-3 z-10 w-9 h-9 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary shadow-md hover:bg-red-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full px-6">
                {galleryHighlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group/img cursor-pointer">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/10 transition-colors flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-extrabold text-slate-900 leading-tight">{item.title}</p>
                      <p className="text-xs font-medium text-slate-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="absolute right-0 -mr-3 z-10 w-9 h-9 bg-white border border-slate-200 rounded-full flex items-center justify-center text-primary shadow-md hover:bg-red-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. CTA SECTION */}
        {/* ========================================== */}
        <section className="py-10 bg-white border-t border-slate-100">
          <div className="container text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
                Stay Connected with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                  Cryonano
                </span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-6 max-w-xl mx-auto">
                Have questions or want to explore our solutions? Reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full group px-8 py-3 rounded-lg font-extrabold text-sm text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                    <Mail className="w-4 h-4" />
                    Contact Our Engineers
                  </button>
                </Link>
                <Link to="/products" className="w-full sm:w-auto">
                  <button className="w-full group px-8 py-3 rounded-lg font-extrabold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    <Rocket className="w-4 h-4" />
                    Explore Systems
                  </button>
                </Link>
                <Link to="/request-quote" className="w-full sm:w-auto">
                  <button className="w-full group px-8 py-3 rounded-lg font-extrabold text-sm text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    <Award className="w-4 h-4" />
                    Request Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}