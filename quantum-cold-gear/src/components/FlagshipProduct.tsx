
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { 
//   Crosshair, 
//   Eye, 
//   Settings, 
//   Repeat, 
//   ArrowRight, 
//   Sparkles,
//   AlertCircle,
//   CheckCircle2,
//   Award,
//   Maximize,
//   RotateCw,
//   Activity
// } from "lucide-react";

// const capabilities = [
//   { icon: Crosshair, title: "Sub-Micron Accuracy", desc: "Positioning accuracy down to < 1µm", color: "text-blue-600", bg: "bg-blue-50", border: "group-hover:border-blue-300", shadow: "hover:shadow-blue-500/10" },
//   { icon: Eye, title: "Optical Telemetry", desc: "Real-time 4K visual feedback", color: "text-indigo-600", bg: "bg-indigo-50", border: "group-hover:border-indigo-300", shadow: "hover:shadow-indigo-500/10" },
//   { icon: Settings, title: "Motorized Control", desc: "Automated multi-axis manipulation", color: "text-cyan-600", bg: "bg-cyan-50", border: "group-hover:border-cyan-300", shadow: "hover:shadow-cyan-500/10" },
//   { icon: Repeat, title: "High-Yield Scalability", desc: "Engineered for deterministic repeatability", color: "text-emerald-600", bg: "bg-emerald-50", border: "group-hover:border-emerald-300", shadow: "hover:shadow-emerald-500/10" }
// ];

// const imagePlaceholders = [
//   { id: 1, text: "System Overview Layout", color: "bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600" },
//   { id: 2, text: "Optical Visualization Interface", color: "bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600" },
//   { id: 3, text: "Micron-level Stage Detail", color: "bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-600" }
// ];

// export function FlagshipProduct() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % imagePlaceholders.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     // <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white relative overflow-hidden">



//     // <section className="pt-2 pb-20 lg:pt-4 lg:pb-28 bg-white relative overflow-hidden">
      
//     //   <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">

    

//     <section className="pt-20 pb-24 lg:pt-10 lg:pb-10 relative overflow-hidden bg-white border-none group">
      
//       {/* THE FIX: Radial Mask
//         This creates the "blue in the middle, white on the margins" effect. 
//         It fades to completely transparent well before touching the top, bottom, left, or right edges.
//         Because the base section is bg-white, the edges will be pure white, eliminating ALL horizontal lines!
//       */}
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]">
        
//         {/* Solid Blue Base behind the content in the center */}
//         <div className="absolute inset-0 bg-blue-50/80" />

//         {/* Sky Blue - Deeper Shade (Center-Left) */}
//         <motion.div 
//           animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[5%] left-[5%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-blue-400/30 blur-[120px] group-hover:bg-blue-400/40 transition-colors duration-1000" 
//         />
        
//         {/* Sky Blue - Lighter Shade (Center-Right) */}
//         <motion.div 
//           animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//           className="absolute bottom-[5%] right-[5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-sky-300/30 blur-[120px] group-hover:bg-sky-300/40 transition-colors duration-1000" 
//         />
        
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-20">
        
//         {/* SECTION HEADER */}
//         <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black tracking-widest uppercase mb-6 shadow-sm"
//           >
//             <Award className="w-4 h-4" />
//             Flagship Innovations
//           </motion.div>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
//           >
//             Redefining Precision with the <br className="hidden lg:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
//               2D Material Transfer System
//             </span>
//           </motion.h2>
//         </div>

//         {/* LAYOUT: items-stretch ensures left and right columns equal height */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
//           {/* LEFT COLUMN: Image Carousel stretches to match right column height */}
//           <motion.div 
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, type: "spring" }}
//             className="lg:col-span-5 relative flex flex-col h-full min-h-[400px]"
//           >
//             <div className="relative flex-grow w-full rounded-[2.5rem] overflow-hidden border-2 border-slate-100 bg-white shadow-sm group">
              
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentImage}
//                   initial={{ opacity: 0, scale: 1.05 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className={`absolute inset-0 flex flex-col items-center justify-center ${imagePlaceholders[currentImage].color}`}
//                 >
//                   <Sparkles className="w-12 h-12 mb-6 opacity-40 animate-pulse" />
//                   <span className="font-bold tracking-widest uppercase text-sm md:text-base">
//                     {imagePlaceholders[currentImage].text}
//                   </span>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Technical Overlay Graphics */}
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-current opacity-20" />
//                 <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-current opacity-20" />
//                 <motion.div 
//                   animate={{ y: ["0%", "100%", "0%"] }}
//                   transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//                   className="absolute left-0 right-0 h-[1px] bg-current opacity-10" 
//                 />
//               </div>

//               {/* Carousel Indicators */}
//               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm">
//                 {imagePlaceholders.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImage(idx)}
//                     className={`w-2 h-2 rounded-full transition-all duration-500 ${currentImage === idx ? "bg-blue-600 w-6" : "bg-slate-400 hover:bg-slate-600"}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Interactive Content & Data */}
//           <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            
//             {/* 1. Technical Data Specs Bar */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-3 gap-3 md:gap-4"
//             >
//               <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">
//                 <span className="text-xl md:text-2xl font-black text-slate-900">&lt; 1 µm</span>
//                 <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 text-center">XY Precision</span>
//               </div>
//               <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 hover:bg-cyan-50 hover:border-cyan-200 transition-colors cursor-default">
//                 <span className="text-xl md:text-2xl font-black text-slate-900">0.01°</span>
//                 <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 text-center">Theta Control</span>
//               </div>
//               <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-default">
//                 <span className="text-xl md:text-2xl font-black text-slate-900">50 nm</span>
//                 <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 text-center">Z-Resolution</span>
//               </div>
//             </motion.div>

//             {/* 2. Challenge & Solution (Side-by-Side to save vertical space) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="p-5 rounded-2xl bg-rose-50 border border-rose-100 shadow-sm transition-transform"
//               >
//                 <div className="flex items-center gap-2 mb-2 text-rose-600">
//                   <AlertCircle className="w-4 h-4" />
//                   <span className="text-xs font-bold uppercase tracking-widest">The Challenge</span>
//                 </div>
//                 <p className="text-rose-900/80 leading-relaxed text-sm font-medium">
//                   Precise alignment of 2D materials is traditionally complex, error-prone, and difficult to scale consistently.
//                 </p>
//               </motion.div>

//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm transition-transform"
//               >
//                 <div className="flex items-center gap-2 mb-2 text-emerald-600">
//                   <CheckCircle2 className="w-4 h-4" />
//                   <span className="text-xs font-bold uppercase tracking-widest">The Solution</span>
//                 </div>
//                 <p className="text-emerald-950 leading-relaxed text-sm font-bold">
//                   An optically guided transfer system designed for highly accurate, repeatable, and deterministic placement.
//                 </p>
//               </motion.div>
//             </div>

//             {/* 3. Compact Key Capabilities (Horizontal Layout) */}
//             <div>
//               <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
//                 Key Capabilities
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {capabilities.map((cap, index) => (
//                   <motion.div 
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -3 }}
//                     className={`group flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 transition-all duration-300 cursor-default ${cap.border} ${cap.shadow}`}
//                   >
//                     <div className={`shrink-0 w-10 h-10 rounded-xl ${cap.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
//                       <cap.icon className={`w-5 h-5 ${cap.color}`} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-sm text-slate-900">{cap.title}</h4>
//                       <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">{cap.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* 4. Call to Action */}
//             {/* <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-2"
//             >
//               <Link 
//                 to="/products/2d-transfer-system"
//                 className="group relative inline-flex items-center justify-between w-full px-8 py-4 bg-slate-900 text-white font-bold text-base rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:bg-blue-900 active:scale-95"
//               >
//                 <motion.div 
//                   animate={{ x: ["-100%", "200%"] }}
//                   transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                 />
                
//                 <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
//                   View Full Technical Specifications
//                 </span>
                
//                 <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300 group-hover:translate-x-1">
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </Link>
//             </motion.div> */}
//             {/* 4. Call to Action */}
//             {/* <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               // 1. Added flex & justify-center to center the button in the column
//               className="mt-4 flex justify-center lg:justify-start" 
//             > */}


//             {/* 4. Call to Action */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mt-4 flex justify-center w-full"
//             >
//               <Link 
//                 to="/products/2d-transfer-system"
//                 // 2. Changed w-full to w-fit, and adjusted alignment classes (justify-center gap-4)
//                 className="group relative inline-flex items-center justify-center gap-4 w-fit px-8 py-4 bg-slate-900 text-white font-bold text-base rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:bg-blue-900 active:scale-95"
//               >
//                 <motion.div 
//                   animate={{ x: ["-100%", "200%"] }}
//                   transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                 />
                
//                 <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
//                   View Full Technical Specifications
//                 </span>
                
//                 <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300 group-hover:translate-x-1">
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </Link>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Crosshair, 
  Eye, 
  Settings, 
  Repeat, 
  ArrowRight, 
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Award
} from "lucide-react";

const capabilities = [
  { icon: Crosshair, title: "Sub-Micron Accuracy", desc: "Positioning accuracy down to < 1µm" },
  { icon: Eye, title: "Optical Telemetry", desc: "Real-time 4K visual feedback" },
  { icon: Settings, title: "Motorized Control", desc: "Automated multi-axis manipulation" },
  { icon: Repeat, title: "High-Yield Scalability", desc: "Engineered for deterministic repeatability" }
];

const imagePlaceholders = [
  { id: 1, text: "System Overview Layout", color: "bg-gradient-to-br from-slate-900 to-[#16191e] text-red-500" },
  { id: 2, text: "Optical Visualization Interface", color: "bg-gradient-to-br from-slate-800 to-slate-900 text-red-500" },
  { id: 3, text: "Micron-level Stage Detail", color: "bg-gradient-to-br from-[#1c1f26] to-slate-900 text-red-500" }
];

export function FlagshipProduct() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagePlaceholders.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Base section is pure white (bg-white) to mix perfectly with the rest of the page
    <section className="pt-20 pb-24 lg:pt-20 lg:pb-20 relative overflow-hidden bg-white border-none group">
      
      {/* THE BACKGROUND FIX: 
        Left & Right transitions removed (full width).
        Top & Bottom transitions kept (fades into the white base).
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      >
        {/* EXACT COLOR FROM YOUR UPLOADED IMAGE: Light Slate/Ash Blue */}
        <div className="absolute inset-0 bg-[#cdd4dc]" />

        {/* Ambient Dark/Red Glow (Center-Left) */}
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-red-900/10 blur-[100px] transition-colors duration-1000" 
        />
        
        {/* Ambient Dark Gray Glow (Center-Right) */}
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-slate-500/20 blur-[120px] transition-colors duration-1000" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-20">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
          {/* <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 text-slate-900 text-xs font-black tracking-widest uppercase mb-6 shadow-sm"
          >
            <Award className="w-4 h-4 text-red-600" />
            Flagship Innovations
          </motion.div> */}
          

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 text-[12px] font-extrabold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(220,38,38,0.15)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse" />
            Flagship Innovations
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Redefining Precision with the <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-900 drop-shadow-sm">
              2D Material Transfer System
            </span>
          </motion.h2>
        </div>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="lg:col-span-5 relative flex flex-col h-full min-h-[400px]"
          >
            {/* BOX COLOR UPDATE: Deep Slate instead of pure black */}
            <div className="relative flex-grow w-full rounded-[2.5rem] overflow-hidden border border-slate-700/50 bg-[#16191e] shadow-2xl group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center ${imagePlaceholders[currentImage].color}`}
                >
                  <Sparkles className="w-12 h-12 mb-6 opacity-40 animate-pulse text-red-500" />
                  <span className="font-bold tracking-widest uppercase text-sm md:text-base text-red-500">
                    {imagePlaceholders[currentImage].text}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Technical Overlay Graphics */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-red-500/20" />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-red-500/20" />
                <motion.div 
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-red-500/10" 
                />
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                {imagePlaceholders.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${currentImage === idx ? "bg-red-600 w-6" : "bg-slate-600 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Content & Data */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            
            {/* 1. Technical Data Specs Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 md:gap-4"
            >
              {/* BOX COLOR UPDATE: Lightened off-black / slate to match background */}
              <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-[#1c1f26] border border-slate-700/50 hover:border-red-900/50 transition-colors cursor-default shadow-lg">
                <span className="text-xl md:text-2xl font-black text-white">&lt; 1 µm</span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">XY Precision</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-[#1c1f26] border border-slate-700/50 hover:border-red-900/50 transition-colors cursor-default shadow-lg">
                <span className="text-xl md:text-2xl font-black text-white">0.01°</span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">Theta Control</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-[#1c1f26] border border-slate-700/50 hover:border-red-900/50 transition-colors cursor-default shadow-lg">
                <span className="text-xl md:text-2xl font-black text-white">50 nm</span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">Z-Resolution</span>
              </div>
            </motion.div>

            {/* 2. Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#1c1f26] border border-slate-700/50 shadow-lg transition-transform"
              >
                <div className="flex items-center gap-2 mb-2 text-red-500">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">The Challenge</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm font-medium">
                  Precise alignment of 2D materials is traditionally complex, error-prone, and difficult to scale consistently.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#1c1f26] border border-slate-700/50 shadow-lg transition-transform"
              >
                <div className="flex items-center gap-2 mb-2 text-red-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">The Solution</span>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm font-bold">
                  An optically guided transfer system designed for highly accurate, repeatable, and deterministic placement.
                </p>
              </motion.div>
            </div>

            {/* 3. Compact Key Capabilities */}
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4 drop-shadow-sm">
                Key Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-[#1c1f26] border border-slate-700/50 transition-all duration-300 cursor-default hover:border-red-500/40 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] shadow-lg"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <cap.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{cap.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed mt-0.5">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4. Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 flex justify-center w-full"
            >
              <Link 
                to="/products/2d-transfer-system"
                className="group relative inline-flex items-center justify-center gap-4 w-fit px-8 py-4 bg-red-600 text-white font-bold text-base rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-red-500 active:scale-95"
              >
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                />
                
                <span className="relative z-10 transition-colors duration-300">
                  View Full Technical Specifications
                </span>
                
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}