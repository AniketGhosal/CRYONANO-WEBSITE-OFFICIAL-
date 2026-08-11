// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Send,
//   CheckCircle2,
//   Sparkles,
//   ArrowUpRight,
//   Cpu,
//   Snowflake,
//   Magnet,
//   Microscope,
//   Zap,
//   Layers,
//   FileText,
//   Upload,
//   X,
//   Mail,
//   ChevronDown,
// } from "lucide-react";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" as const },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.15 },
//   },
// };

// const RequestQuoteResearch = () => {
//   const [formState, setFormState] = useState<"idle" | "submitting">("idle");
//   const [showModal, setShowModal] = useState(false); // NEW MODAL STATE

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     institution: "",
//     applicationArea: "",
//     projectDetails: "",
//     requirements: "",
//     projectStage: "",
//     purchaseTimeline: "",
//     budgetRange: "",
//     additionalInfo: "",
//   });

//   const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
//   const [attachments, setAttachments] = useState<File[]>([]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleProductToggle = (product: string) => {
//     setSelectedProducts((prev) =>
//       prev.includes(product)
//         ? prev.filter((p) => p !== product)
//         : [...prev, product]
//     );
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setAttachments([...attachments, ...Array.from(e.target.files)]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");

//     // NEW LOGIC: Use FormData to properly handle file attachments over network
//     const submitData = new FormData();
    
//     // Append all text fields
//     Object.entries(formData).forEach(([key, value]) => {
//       submitData.append(key, value as string);
//     });
    
//     // Append the selected products as a comma-separated string
//     submitData.append("selectedProducts", selectedProducts.join(", "));
    
//     // Append all files
//     attachments.forEach((file) => {
//       submitData.append("attachments", file);
//     });

//     // // 1. Add the dynamic URL definition here
//     // const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
//     // 1. Add the dynamic URL definition here
//     // 1. Local backend URL for testing
//     const API_URL = "http://localhost:5000";

//     try {
//       const response = await fetch(`${API_URL}/api/forms/research-quote`, {
//         method: "POST",
//         // Note: Do NOT set Content-Type header. Fetch sets it automatically with the multi-part boundary
//         body: submitData
//       });

//       if (response.ok) {
//         setFormState("idle");
//         setShowModal(true); // Trigger the new Confirmation Modal
        
//         // Reset form
//         setFormData({
//           firstName: "", lastName: "", email: "", phone: "", country: "", institution: "",
//           applicationArea: "", projectDetails: "", requirements: "", projectStage: "",
//           purchaseTimeline: "", budgetRange: "", additionalInfo: "",
//         });
//         setSelectedProducts([]);
//         setAttachments([]);
//       } else {
//         setFormState("idle");
//         alert("Failed to submit quote. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setFormState("idle");
//       alert("Network error. Is the server running?");
//     }
//   };

//   const productCategories = [
//     {
//       title: "Quantum Hardware",
//       icon: Cpu,
//       products: [
//         "QuantumVibe – Isolated Voltage Source DAC",
//         "CryoConnect – Cryostat Breakout Box",
//         "DACsys – Cryogenic Data Acquisition & Control System",
//       ],
//     },
//     {
//       title: "Cryogenics & Microscopes",
//       icon: Snowflake,
//       products: [
//         "Cryogenic Nano Stage",
//         "2D Transfer System",
//         "2D Transfer System with Motorised Controller",
//         "Cryogenic Probe Station",
//         "Motorised Controller with Precision Stages",
//         "Cryogenic Dipstick",
//         "4K Microscope",
//       ],
//     },
//     {
//       title: "Electromagnets",
//       icon: Magnet,
//       products: [
//         "Spectroscopy Electromagnet",
//         "EMC2T – 2 TESLA Electromagnet",
//         "Bitter Electromagnet",
//       ],
//     },
//   ];

//   const applicationAreas = [
//     "Materials Research",
//     "Quantum Computing",
//     "Spintronics",
//     "Semiconductors",
//     "Low Temperature Physics",
//     "Nanotechnology",
//     "Others",
//   ];

//   const stages = [
//     "Planning",
//     "Prototype",
//     "Research Use",
//     "Funding Approved",
//     "Ready to Purchase",
//   ];

//   const timelines = ["Immediate", "1–3 Months", "3–6 Months", "6+ Months"];

//   const budgetRanges = ["< ₹10,000", "₹10,000 – ₹50,000", "₹50,000 – ₹100,000", "₹100,000+"];

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//         <Navbar />

//         <main>
//           {/* Breadcrumb */}
//           <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
//             <div className="container py-2.5 flex items-center gap-3">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
//               >
//                 <ArrowLeft className="h-3 w-3" />
//                 Back to Home
//               </Link>
//               <span className="text-slate-300 font-bold">/</span>
//               <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Request a Quote – Research</span>
//             </div>
//           </div>

//           {/* ============================== */}
//           {/* HERO SECTION */}
//           {/* ============================== */}
//           <section className="relative py-6 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//               <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//             </div>

//             <div className="container relative z-10 text-center max-w-3xl mx-auto">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 className="space-y-4"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.4 }}
//                   className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase"
//                 >
//                   <Sparkles className="w-3.5 h-3.5" />
//                   Research Quote
//                 </motion.div>

//                 <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
//                   Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700"> Research based Quote</span>
//                 </h1>

//                 <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
//                   Please complete this form with as much detail as possible.
//                   Our team will get back to you with a tailored quote promptly.
//                 </p>
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* FORM SECTION */}
//           {/* ============================== */}
//           <section className="container py-4 md:pb-12 pt-2">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-30px" }}
//               transition={{ duration: 0.6 }}
//               className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm"
//             >
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 {/* ============================== */}
//                 {/* SECTION 1: Contact Information */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">1</span>
//                     Contact Information
//                   </h2>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         First Name <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                         placeholder="John"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Last Name <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                         placeholder="Doe"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Email <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                         placeholder="john@institution.edu"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Phone Number <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                         placeholder="+1 (555) 000-0000"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Country
//                       </label>
//                       <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                       >
//                         <option value="">Select Country</option>
//                         <option value="India">India</option>
//                         <option value="USA">USA</option>
//                         <option value="UK">UK</option>
//                         <option value="Germany">Germany</option>
//                         <option value="France">France</option>
//                         <option value="Japan">Japan</option>
//                         <option value="China">China</option>
//                         <option value="Singapore">Singapore</option>
//                         <option value="Australia">Australia</option>
//                         <option value="Canada">Canada</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Institution or Company <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="institution"
//                         value={formData.institution}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                         placeholder="IISc Bangalore"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 2: Product of Interest */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">2</span>
//                     Product of Interest <span className="text-sm font-normal text-slate-500">(Select all that apply)</span>
//                   </h2>
//                   <div className="space-y-6">
//                     {productCategories.map((cat, idx) => (
//                       <div key={idx}>
//                         <div className="flex items-center gap-2 mb-3">
//                           <cat.icon className="w-5 h-5 text-primary" />
//                           <h3 className="font-bold text-slate-800">{cat.title}</h3>
//                         </div>
//                         <div className="grid sm:grid-cols-2 gap-2 pl-2">
//                           {cat.products.map((product) => (
//                             <label
//                               key={product}
//                               className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
//                             >
//                               <input
//                                 type="checkbox"
//                                 checked={selectedProducts.includes(product)}
//                                 onChange={() => handleProductToggle(product)}
//                                 className="w-4 h-4 accent-primary rounded"
//                               />
//                               <span className="text-sm text-slate-700">{product}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                     <div className="pl-2">
//                       <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
//                         <input
//                           type="checkbox"
//                           checked={selectedProducts.includes("Others")}
//                           onChange={() => handleProductToggle("Others")}
//                           className="w-4 h-4 accent-primary rounded"
//                         />
//                         <span className="text-sm text-slate-700">Others (Please specify in details below)</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 3: Application Area */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">3</span>
//                     Application Area <span className="text-primary">*</span>
//                   </h2>
//                   <select
//                     name="applicationArea"
//                     value={formData.applicationArea}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                   >
//                     <option value="">Select Application Area</option>
//                     {applicationAreas.map((area) => (
//                       <option key={area} value={area}>{area}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 4: Project Details */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">4</span>
//                     Research / Project Details
//                   </h2>
//                   <textarea
//                     name="projectDetails"
//                     value={formData.projectDetails}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
//                     placeholder="Please describe your research or project in brief. Include your goals, experimental setup, measurement requirements, and any specific expectations."
//                   />
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 5: Key Requirements */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">5</span>
//                     Key Requirements
//                   </h2>
//                   <textarea
//                     name="requirements"
//                     value={formData.requirements}
//                     onChange={handleChange}
//                     rows={3}
//                     className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
//                     placeholder="Please provide any specific requirements (specifications, features, temperature range, magnetic field, channels, interfaces, etc.)"
//                   />
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 6: Project / Purchase Info */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">6</span>
//                     Project / Purchase Information
//                   </h2>
//                   <div className="grid md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Project Stage
//                       </label>
//                       <select
//                         name="projectStage"
//                         value={formData.projectStage}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                       >
//                         <option value="">Select Stage</option>
//                         {stages.map((stage) => (
//                           <option key={stage} value={stage}>{stage}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Purchase Timeline
//                       </label>
//                       <select
//                         name="purchaseTimeline"
//                         value={formData.purchaseTimeline}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                       >
//                         <option value="">Select Timeline</option>
//                         {timelines.map((timeline) => (
//                           <option key={timeline} value={timeline}>{timeline}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Budget Range (Optional)
//                       </label>
//                       <select
//                         name="budgetRange"
//                         value={formData.budgetRange}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                       >
//                         <option value="">Select Range</option>
//                         {budgetRanges.map((range) => (
//                           <option key={range} value={range}>{range}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 7: Attachments */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">7</span>
//                     Attachments (Optional)
//                   </h2>
//                   <p className="text-sm text-slate-500 mb-3">
//                     Upload any relevant documents, drawings, specifications or datasheets.
//                   </p>
//                   <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
//                     <input
//                       type="file"
//                       id="file-upload"
//                       multiple
//                       onChange={handleFileUpload}
//                       className="hidden"
//                       // Removed the accept filter to allow all possible document extensions
//                     />
//                     <label
//                       htmlFor="file-upload"
//                       className="cursor-pointer flex flex-col items-center gap-2"
//                     >
//                       <Upload className="w-8 h-8 text-slate-400" />
//                       <span className="text-sm font-medium text-slate-600">
//                         Click to upload or drag and drop
//                       </span>
//                       <span className="text-xs text-slate-400">
//                         All file types supported (Max 25 MB each)
//                       </span>
//                     </label>
//                   </div>
//                   {attachments.length > 0 && (
//                     <div className="mt-3 space-y-2">
//                       {attachments.map((file, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200"
//                         >
//                           <span className="text-sm font-medium text-slate-700 truncate">
//                             {file.name}
//                           </span>
//                           <button
//                             type="button"
//                             onClick={() =>
//                               setAttachments(attachments.filter((_, i) => i !== idx))
//                             }
//                             className="text-slate-400 hover:text-red-500 transition-colors"
//                           >
//                             <X className="w-4 h-4" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* ============================== */}
//                 {/* SECTION 8: Additional Info */}
//                 {/* ============================== */}
//                 <div>
//                   <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">8</span>
//                     Additional Information (Optional)
//                   </h2>
//                   <textarea
//                     name="additionalInfo"
//                     value={formData.additionalInfo}
//                     onChange={handleChange}
//                     rows={3}
//                     className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
//                     placeholder="Any other information that would help us understand your requirement better."
//                   />
//                 </div>

//                 {/* ============================== */}
//                 {/* SUBMIT BUTTON */}
//                 {/* ============================== */}
//                 <button
//                   type="submit"
//                   disabled={formState === "submitting"}
//                   className="w-full group relative px-6 py-4 bg-primary hover:bg-red-700 text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     {formState === "submitting" ? "Submitting..." : "Submit Request"}
//                     <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   </span>
//                   <motion.div
//                     animate={{ x: ["-100%", "200%"] }}
//                     transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                   />
//                 </button>

//                 <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
//                   <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
//                   Your information is secure and will not be shared.
//                 </p>
//               </form>
//             </motion.div>
//           </section>

//           {/* ============================== */}
//           {/* CTA SECTION */}
//           {/* ============================== */}
//           <section className="relative py-12 bg-primary/5 border-y border-primary/10 overflow-hidden">
//             <div className="container relative z-10 text-center max-w-2xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
//                   Need Technical Assistance?
//                 </h2>
//                 <p className="text-slate-600 text-base mb-4">
//                   Our engineering team is ready to help you find the right solution.
//                 </p>
//                 <a
//                   href="mailto:contact@cryonano.com"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-extrabold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
//                 >
//                   <Mail className="w-4 h-4" />
//                   Email Our Team
//                   <ArrowUpRight className="w-4 h-4" />
//                 </a>
//               </motion.div>
//             </div>
//           </section>
//         </main>

//         {/* CONFIRMATION MODAL */}
//         <AnimatePresence>
//           {showModal && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setShowModal(false)}
//                 className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
//               />
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
//                 className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center"
//               >
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//                 <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle2 className="w-10 h-10 text-emerald-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
//                 <p className="text-slate-600 font-medium mb-8 leading-relaxed">
//                   Thank You for your request. Our team will process it and will contact you shortly.
//                 </p>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
//                 >
//                   CONTINUE EXPLORING
//                 </button>
//               </motion.div>
//             </div>
//           )}
//         </AnimatePresence>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default RequestQuoteResearch;



import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Cpu,
  Snowflake,
  Magnet,
  Microscope,
  Zap,
  Layers,
  FileText,
  Upload,
  X,
  Mail,
  ChevronDown,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const RequestQuoteResearch = () => {
  const [formState, setFormState] = useState<"idle" | "submitting">("idle");
  const [showSuccess, setShowSuccess] = useState(false); // Replaces modal

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    institution: "",
    applicationArea: "",
    projectDetails: "",
    requirements: "",
    projectStage: "",
    purchaseTimeline: "",
    budgetRange: "",
    additionalInfo: "",
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductToggle = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
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
    submitData.append("selectedProducts", selectedProducts.join(", "));
    attachments.forEach((file) => {
      submitData.append("attachments", file);
    });

    const API_URL = "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/forms/research-quote`, {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        setFormState("idle");
        setShowSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            institution: "",
            applicationArea: "",
            projectDetails: "",
            requirements: "",
            projectStage: "",
            purchaseTimeline: "",
            budgetRange: "",
            additionalInfo: "",
          });
          setSelectedProducts([]);
          setAttachments([]);
        }, 3000);
      } else {
        setFormState("idle");
        alert("Failed to submit quote. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setFormState("idle");
      alert("Network error. Is the server running?");
    }
  };

  const productCategories = [
    {
      title: "Quantum Hardware",
      icon: Cpu,
      products: [
        "QuantumVibe – Isolated Voltage Source DAC",
        "CryoConnect – Cryostat Breakout Box",
        "DACsys – Cryogenic Data Acquisition & Control System",
      ],
    },
    {
      title: "Cryogenics & Microscopes",
      icon: Snowflake,
      products: [
        "Cryogenic Nano Stage",
        "2D Transfer System",
        "2D Transfer System with Motorised Controller",
        "Cryogenic Probe Station",
        "Motorised Controller with Precision Stages",
        "Cryogenic Dipstick",
        "4K Microscope",
      ],
    },
    {
      title: "Electromagnets",
      icon: Magnet,
      products: [
        "Spectroscopy Electromagnet",
        "EMC2T – 2 TESLA Electromagnet",
        "Bitter Electromagnet",
      ],
    },
  ];

  const applicationAreas = [
    "Materials Research",
    "Quantum Computing",
    "Spintronics",
    "Semiconductors",
    "Low Temperature Physics",
    "Nanotechnology",
    "Others",
  ];

  const stages = [
    "Planning",
    "Prototype",
    "Research Use",
    "Funding Approved",
    "Ready to Purchase",
  ];

  const timelines = ["Immediate", "1–3 Months", "3–6 Months", "6+ Months"];

  const budgetRanges = ["< ₹10,000", "₹10,000 – ₹50,000", "₹50,000 – ₹100,000", "₹100,000+"];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* ====== NAVBAR - FIXED AT TOP ====== */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <PageTransition>
        <main className="pt-[80px]">
          {/* Breadcrumb - adjusted top position */}
          <div className="bg-white border-b border-slate-200 sticky top-[112px] z-40 shadow-sm">
            <div className="container py-2.5 flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to Home
              </Link>
              <span className="text-slate-300 font-bold">/</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Request a Quote – Research</span>
            </div>
          </div>

          {/* ============================== */}
          {/* HERO SECTION - added top padding */}
          {/* ============================== */}
          <section className="relative pt-8 pb-6 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Research Quote
                </motion.div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700"> Research based Quote</span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Please complete this form with as much detail as possible.
                  Our team will get back to you with a tailored quote promptly.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ============================== */}
          {/* FORM SECTION */}
          {/* ============================== */}
          <section className="container py-4 md:pb-12 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden"
            >
              {/* ====== SUCCESS MESSAGE - overlay with full opacity ====== */}
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
                            Thank You!
                          </p>
                          <p className="text-sm text-emerald-700 font-medium">
                            Your request has been submitted. Our team will contact you shortly.
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* ============================== */}
                  {/* SECTION 1: Contact Information */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">1</span>
                      Contact Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          First Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                          placeholder="Doe"
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
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Country</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Japan">Japan</option>
                          <option value="China">China</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Institution or Company <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                          placeholder="IISc Bangalore"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ============================== */}
                  {/* SECTION 2: Product of Interest */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">2</span>
                      Product of Interest <span className="text-sm font-normal text-slate-500">(Select all that apply)</span>
                    </h2>
                    <div className="space-y-6">
                      {productCategories.map((cat, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 mb-3">
                            <cat.icon className="w-5 h-5 text-primary" />
                            <h3 className="font-bold text-slate-800">{cat.title}</h3>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2 pl-2">
                            {cat.products.map((product) => (
                              <label
                                key={product}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedProducts.includes(product)}
                                  onChange={() => handleProductToggle(product)}
                                  className="w-4 h-4 accent-primary rounded"
                                />
                                <span className="text-sm text-slate-700">{product}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="pl-2">
                        <label className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes("Others")}
                            onChange={() => handleProductToggle("Others")}
                            className="w-4 h-4 accent-primary rounded"
                          />
                          <span className="text-sm text-slate-700">Others (Please specify in details below)</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* ============================== */}
                  {/* SECTION 3: Application Area */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">3</span>
                      Application Area <span className="text-primary">*</span>
                    </h2>
                    <select
                      name="applicationArea"
                      value={formData.applicationArea}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                    >
                      <option value="">Select Application Area</option>
                      {applicationAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  {/* ============================== */}
                  {/* SECTION 4: Project Details */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">4</span>
                      Research / Project Details
                    </h2>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                      placeholder="Please describe your research or project in brief. Include your goals, experimental setup, measurement requirements, and any specific expectations."
                    />
                  </div>

                  {/* ============================== */}
                  {/* SECTION 5: Key Requirements */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">5</span>
                      Key Requirements
                    </h2>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                      placeholder="Please provide any specific requirements (specifications, features, temperature range, magnetic field, channels, interfaces, etc.)"
                    />
                  </div>

                  {/* ============================== */}
                  {/* SECTION 6: Project / Purchase Info */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">6</span>
                      Project / Purchase Information
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Project Stage
                        </label>
                        <select
                          name="projectStage"
                          value={formData.projectStage}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Stage</option>
                          {stages.map((stage) => (
                            <option key={stage} value={stage}>{stage}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Purchase Timeline
                        </label>
                        <select
                          name="purchaseTimeline"
                          value={formData.purchaseTimeline}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                          Budget Range (Optional)
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ============================== */}
                  {/* SECTION 7: Attachments */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">7</span>
                      Attachments (Optional)
                    </h2>
                    <p className="text-sm text-slate-500 mb-3">
                      Upload any relevant documents, drawings, specifications or datasheets.
                    </p>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="w-8 h-8 text-slate-400" />
                        <span className="text-sm font-medium text-slate-600">
                          Click to upload or drag and drop
                        </span>
                        <span className="text-xs text-slate-400">
                          All file types supported (Max 25 MB each)
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

                  {/* ============================== */}
                  {/* SECTION 8: Additional Info */}
                  {/* ============================== */}
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-black">8</span>
                      Additional Information (Optional)
                    </h2>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                      placeholder="Any other information that would help us understand your requirement better."
                    />
                  </div>

                  {/* ============================== */}
                  {/* SUBMIT BUTTON - disabled when success is shown */}
                  {/* ============================== */}
                  <button
                    type="submit"
                    disabled={formState === "submitting" || showSuccess}
                    className="w-full group relative px-6 py-4 bg-primary hover:bg-red-700 text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {formState === "submitting" ? "Submitting..." : "Submit Request"}
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
          </section>

          {/* ============================== */}
          {/* CTA SECTION */}
          {/* ============================== */}
          <section className="relative py-12 bg-primary/5 border-y border-primary/10 overflow-hidden">
            <div className="container relative z-10 text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                  Need Technical Assistance?
                </h2>
                <p className="text-slate-600 text-base mb-4">
                  Our engineering team is ready to help you find the right solution.
                </p>
                <a
                  href="mailto:contact@cryonano.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-extrabold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Email Our Team
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default RequestQuoteResearch;