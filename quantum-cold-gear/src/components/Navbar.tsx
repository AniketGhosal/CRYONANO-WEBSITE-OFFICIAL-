// import { useState } from "react";
// import { ChevronDown, Menu, X, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";

// // FULLY RESTORED MEGA MENU DATA
// const productCategories = [
//   {
//     title: "Quantum Hardware",
//     items: [
//       { name: "QuantumVibe – Isolated Voltage Source DAC", path: "/products/quantum-volt" },
//       { name: "CryoConnect – Cryostat Breakout Box", path: "/products/breakout-box" },
//       { name: "CryoClean – Cryogenic RF Low-Pass Filters", path: "/products/cryo-clean" },
//       { name: "DACsys™ Cryogenic Data Acquisition System", path: "/products/DAC-system" },
//     ],
//   },
//   {
//     title: "Cryogenics",
//     items: [
//       { name: "Cryogenic Nano Stage", path: "/products/nano-stage" },
//       // { name: "2D Transfer System", path: "/products/2d-transfer-system" },
//       { name: "Cryogenic Probe Station", path: "/products/psm-100" },
//       { name: "Variable Temperature Insert", path: "/products/dipstick" }
//     ],
//   },
//   {
//     title: "Microscopes",
//     items: [
//       { name: "Motorised Controller with Precision Stages", path: "/products/cryoscope-controller" },
//       { name: "4K Microscope", path: "/products/ultraclear-4k" },
//       { name: "Manual 2D Transfer System", path: "/products/2d-transfer-system" },
//       { name: "Motorised 2D Transfer System", path: "/products/2d-transfer-motorised" },
//     ],
//   },
//   {
//     title: "Electromagnets",
//     items: [
//       { name: "Spectroscopy Electromagnet", path: "/products/spectroscopy-magnet" },
//       { name: "Bitter Electromagnet", path: "/products/bitter-magnet" },
//       { name: "EMC2T-2 Electromagnet", path: "/products/emc2t-2-magnet" },
//     ],
//   },
//     {
//     title: "Quick Links",
//     items: [
//       { name: "Request a Quote", path: "/request-quote/research" },
//     ],
//   },
// ];

// const powerCategories = [
//   {
//     title: "Converters",
//     items: [
//       { name: "AC-DC System – Low Power (0.3kW–6kW)", path: "/products/ac-dc-system-low" },
//       { name: "AC-DC System – High Power (6kW–30kW)", path: "/products/ac-dc-system-high" },
//       { name: "DC-DC System – Low Power (0.3kW–6kW)", path: "/products/dc-dc-system-low" },
//       { name: "DC-DC System – High Power (6kW–30kW)", path: "/products/dc-dc-system-high" },
//     ],
//   },
//   {
//     title: "Inverters",
//     items: [
//       { name: "DC-AC Pure Sine Wave Inverters", path: "/products/dc-ac-inverters" },
//       { name: "400Hz Frequency Inverters", path: "/products/inverter-400hz-rugged" },
//     ],
//   },
//   {
//     title: "Battery Chargers",
//     items: [
//       { name: "Intelligent Battery Chargers", path: "/products/battery-chargers" },
//       // { name: "Talk to our Engineers / R&D Team", path: "/contact" },
//     ],
//   },
//     {
//     title: "Quick Links",
//     items: [
//       { name: "Request a Quote", path: "/request-quote/industry" },
//     ],
//   },
// ];

// const aboutCategories = [
//   { name: "Who We Are", path:"/about" },
//   { name: "Awards and Recognition", path: "/about/awards" },
//   { name: "News & Events", path: "/about/news" },
//   { name: "Careers", path: "/about/careers" },
//   { name: "Product Videos", path: "/about/product-videos" },
//   { name: "Intern with Us", path: "/about/intern" },
// ];

// const knowledgeCategories = [
//   {
//     title: "",
//     items: [
//       { name: "Downloads", path: "/knowledge-bank/downloads" },
//       { name: "Archived Products", path: "/knowledge-bank/archives" },
//       { name: "Application Notes", path: "/knowledge-bank/application-notes" },
//     ],
//   },
// ];

// const navLinks = [
//   { label: "Research", href: "/products", dropdown: "products" },
//   { label: "Industry", dropdown: "solutions" },
//   { label: "Knowledge Bank", dropdown: "knowledge" },
//   { label: "About Us", href: "/about", dropdown: "about" },
//   { label: "Contact", href: "/contact" },
// ];

// const isPathInCategories = (categories: any[], currentPath: string) => {
//   return categories.some(cat => cat.items && cat.items.some((item: any) => item.path === currentPath));
// };

// const isAboutPath = (path: string) => {
//   return path === "/about" || path.startsWith("/about/");
// };

// export function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const [isSearchHovered, setIsSearchHovered] = useState(false);
  
//   const location = useLocation();

//   return (
//     <>
//       <div className="bg-slate-100 text-slate-600 text-xs relative z-[60]">
//         <div className="container flex items-center justify-end gap-8 py-2.5">
//           {["Global", "Careers", "Contact"].map((item) => (
//             <motion.span
//               key={item}
//               whileHover={{ y: -2, color: "var(--primary)" }}
//               whileTap={{ scale: 0.9, color: "#22d3ee" }}
//               className="opacity-75 cursor-pointer font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       <nav className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-300 shadow-md">
//         <div className="container flex items-center justify-between h-[var(--nav-height)] py-4">
          
//           {/* <Link to="/" className="flex flex-col items-start justify-center cursor-pointer group">
//             <div className="flex gap-1.5 mb-0.5">
//               {[0, 1, 2].map((i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ opacity: [0.3, 1, 0.3] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
//                   className="w-2.5 h-2.5 rounded-full bg-primary"
//                 />
//               ))}
//             </div>
//             <span className="font-sans text-3xl font-extrabold tracking-widest text-slate-900 leading-none group-hover:text-primary transition-colors duration-300">
//               CRYONANO
//             </span>
//           </Link> */}

//           <Link to="/" className="flex flex-col items-start justify-center cursor-pointer group relative">
//             {/* Import the exact geometric font needed to match the image */}
//             <style>
//               {`@import url('https://fonts.googleapis.com/css2?family=Jost:wght@600;700;800&display=swap');`}
//             </style>
            
//             {/* 1. Three Dots: Maroon color, sized and spaced to perfectly span over C, R, and Y */}
//             <div className="flex gap-[7px] mb-1.5 ml-1">
//               {[0, 1, 2].map((i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ opacity: [0.3, 1, 0.3] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
//                   className="w-[20px] h-[20px] rounded-full bg-[#800000]"
//                 />
//               ))}
//             </div>
            
//             {/* 2. CRYONANO: Clean, geometric sans-serif, matching the exact weight and spacing */}
//             {/* <span 
//               className="text-[30px] font-[700] text-slate-900 leading-none group-hover:text-primary transition-colors duration-300"
//               style={{ fontFamily: "'Jost', 'Century Gothic', sans-serif", letterSpacing: "0.04em" }}
//             >
//               CRYONANO
//             </span> */}

//             <span 
//               className="text-[30px] font-[400] text-slate-900 leading-none group-hover:text-primary transition-colors duration-300"
//               style={{ fontFamily: "'Jost', 'Century Gothic', sans-serif", letterSpacing: "0.04em" }}
//               >
//               CRYONANO
//             </span>
            
//             {/* 3. TAGLINE: THINK SCIENCE - aligned flush, sized correctly */}
//             <span 
//               className="text-primary text-[11.5px] font-[800] mt-1.0 leading-none ml-[2px]"
//               style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.28em" }}
//             >
//               THINK SCIENCE
//             </span>
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden lg:flex items-center gap-1 xl:gap-4 h-full">
//             {navLinks.map((link) => {
              
//               let isActive = false;
//               if (location.pathname === link.href) {
//                 isActive = true;
//               } else if (link.dropdown && location.pathname !== "/contact") {
//                 if (link.dropdown === "products") {
//                   isActive = isPathInCategories(productCategories, location.pathname);
//                 } else if (link.dropdown === "solutions") {
//                   isActive = isPathInCategories(powerCategories, location.pathname);
//                 } else if (link.dropdown === "knowledge") {
//                   isActive = isPathInCategories(knowledgeCategories, location.pathname);
//                 } else if (link.dropdown === "about") {
//                   isActive = isAboutPath(location.pathname);
//                 }
//               }

//               return (
//                 <div
//                   key={link.label}
//                   className="relative group h-full flex items-center py-2"
//                   onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <motion.div whileTap={{ scale: 0.92, color: "#22d3ee" }}>
//                     <Link
//                       to={link.href || "#"}
//                       className={`flex items-center gap-1.5 px-3 py-2 text-base font-bold tracking-wide transition-colors rounded-md relative ${isActive ? "text-primary" : "text-slate-600 hover:text-slate-950"}`}
//                     >
//                       {link.label}
//                       {link.dropdown && (
//                         <motion.div
//                           animate={{ rotate: openDropdown === link.dropdown ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <ChevronDown className={`h-4 w-4 transition-colors ${isActive ? "text-cyan-400 opacity-100" : "opacity-70 group-hover:text-cyan-400"}`} />
//                         </motion.div>
//                       )}
//                       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400 transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"}`} />
//                     </Link>
//                   </motion.div>

//                   {/* Desktop Dropdown (pt-4 creates an invisible hover bridge so it doesn't close) */}
//                   <AnimatePresence>
//                     {link.dropdown && openDropdown === link.dropdown && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute top-[100%] left-0 pt-4 z-[100]"
//                       >
//                         <div className={`bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 ${
//                           link.dropdown === "knowledge" || link.dropdown === "about" 
//                             ? "min-w-[220px]" 
//                             : "min-w-[700px]"
//                         }`}>
//                           <div className={`grid gap-8 ${
//                             link.dropdown === "products" ? "grid-cols-4" :
//                             link.dropdown === "solutions" ? "grid-cols-3" :
//                             "grid-cols-1"
//                           }`}>
//                             {(link.dropdown === "products" ? productCategories :
//                               link.dropdown === "solutions" ? powerCategories :
//                               link.dropdown === "knowledge" ? knowledgeCategories :
//                               [{ title: "", items: aboutCategories }]
//                             ).map((cat, idx) => (
//                               <div key={cat.title || idx}>
//                                 {cat.title && (
//                                   <h4 className="font-display font-bold text-sm text-primary uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
//                                     {cat.title}
//                                   </h4>
//                                 )}
//                                 <ul className="space-y-3">
//                                   {cat.items.map((item: any) => (
//                                     <motion.li 
//                                       key={item.name}
//                                       whileHover={{ x: 4 }}
//                                       whileTap={{ scale: 0.98 }}
//                                       transition={{ duration: 0.2 }}
//                                     >
//                                       <Link
//                                         to={item.path}
//                                         onClick={() => setOpenDropdown(null)}
//                                         className="text-sm font-medium text-slate-600 hover:text-primary transition-colors leading-snug block"
//                                       >
//                                         {item.name}
//                                       </Link>
//                                     </motion.li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="flex items-center gap-3 relative">
//             <div 
//               className="flex items-center"
//               onMouseEnter={() => setIsSearchHovered(true)}
//               onMouseLeave={() => setIsSearchHovered(false)}
//             >
//               <AnimatePresence>
//                 {isSearchHovered && (
//                   <motion.div
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ width: 180, opacity: 1 }}
//                     exit={{ width: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeOut" }}
//                     className="overflow-hidden mr-2"
//                   >
//                     <input 
//                       type="text" 
//                       placeholder="Search systems..." 
//                       className="w-full bg-white border border-slate-300 text-slate-900 text-sm rounded-full px-4 py-2 outline-none focus:border-primary transition-colors placeholder:text-slate-400 shadow-inner"
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//               <motion.button 
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={`p-2.5 rounded-full transition-colors ${isSearchHovered ? 'bg-primary text-white' : 'hover:bg-slate-300 text-slate-700 hover:text-slate-900'}`}
//               >
//                 <Search className="h-5 w-5" />
//               </motion.button>
//             </div>

//             <button
//               className="lg:hidden p-2 hover:bg-slate-300 rounded transition-colors text-slate-700"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu with expanding Accordions */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="lg:hidden overflow-hidden border-t border-slate-300 bg-slate-100 shadow-inner absolute top-full left-0 w-full z-[100]"
//             >
//               <div className="container py-4 space-y-2 max-h-[75vh] overflow-y-auto">
//                 {navLinks.map((link) => {
//                   let isActive = false;
//                   if (location.pathname === link.href) {
//                     isActive = true;
//                   } else if (link.dropdown && location.pathname !== "/contact") {
//                     if (link.dropdown === "products") {
//                       isActive = isPathInCategories(productCategories, location.pathname);
//                     } else if (link.dropdown === "solutions") {
//                       isActive = isPathInCategories(powerCategories, location.pathname);
//                     } else if (link.dropdown === "knowledge") {
//                       isActive = isPathInCategories(knowledgeCategories, location.pathname);
//                     } else if (link.dropdown === "about") {
//                       isActive = isAboutPath(location.pathname);
//                     }
//                   }

//                   const isExpanded = mobileExpanded === link.dropdown;
//                   const dropdownData = link.dropdown === "products" ? productCategories :
//                                        link.dropdown === "solutions" ? powerCategories :
//                                        link.dropdown === "knowledge" ? knowledgeCategories :
//                                        link.dropdown === "about" ? [{ title: "", items: aboutCategories }] : null;

//                   return (
//                     <div key={link.label} className="block">
//                       <div className={`flex items-center justify-between rounded-md transition-colors ${isActive ? "bg-white text-primary border-l-4 border-primary shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-white border-l-4 border-transparent"}`}>
//                         <Link
//                           to={link.href || "#"}
//                           onClick={() => {
//                             if (!link.dropdown) setMobileOpen(false);
//                           }}
//                           className="flex-grow py-3 px-4 text-base font-bold"
//                         >
//                           {link.label}
//                         </Link>
//                         {link.dropdown && (
//                           <button 
//                             onClick={() => setMobileExpanded(isExpanded ? null : link.dropdown)}
//                             className="p-3 mr-1 text-slate-500 hover:text-primary transition-colors flex items-center justify-center"
//                           >
//                             <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180 text-primary" : ""}`} />
//                           </button>
//                         )}
//                       </div>

//                       {/* Mobile Accordion Sub-links */}
//                       <AnimatePresence>
//                         {link.dropdown && isExpanded && dropdownData && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             className="overflow-hidden"
//                           >
//                             <div className="pl-6 pr-4 py-3 space-y-5 bg-slate-200/50 rounded-b-md border-l-4 border-transparent">
//                               {dropdownData.map((cat, idx) => (
//                                 <div key={cat.title || idx} className="space-y-2">
//                                   {cat.title && (
//                                     <p className="text-[11px] font-black text-primary uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">
//                                       {cat.title}
//                                     </p>
//                                   )}
//                                   <div className="flex flex-col space-y-3">
//                                     {cat.items.map((item: any) => (
//                                       <Link
//                                         key={item.name}
//                                         to={item.path}
//                                         onClick={() => setMobileOpen(false)}
//                                         className="text-sm font-medium text-slate-700 hover:text-primary transition-colors block"
//                                       >
//                                         {item.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// }






import { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// ... (keep all your existing data arrays: productCategories, powerCategories, aboutCategories, knowledgeCategories, navLinks, etc.)

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  
  const location = useLocation();

  // ... (keep all existing state and functions)

  return (
    <>
      {/* ========================================== */}
      {/* TOP BAR – NOW WITH ROUTER LINKS           */}
      {/* ========================================== */}
      <div className="bg-slate-100 text-slate-600 text-xs relative z-[60]">
        <div className="container flex items-center justify-end gap-8 py-2.5">
          <Link
            to="/products"
            className="opacity-75 cursor-pointer font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 hover:text-primary hover:opacity-100"
          >
            Global
          </Link>
          <Link
            to="/about/careers"
            className="opacity-75 cursor-pointer font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 hover:text-primary hover:opacity-100"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="opacity-75 cursor-pointer font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 hover:text-primary hover:opacity-100"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* ========================================== */}
      {/* MAIN NAVBAR – unchanged                   */}
      {/* ========================================== */}
      <nav className="sticky top-0 z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-300 shadow-md">
        {/* ... keep everything below exactly as it was ... */}
      </nav>
    </>
  );
}