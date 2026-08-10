// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Phone, Mail, UserPlus, Send, CheckCircle2, X, Sparkles } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export function CTASection() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const location = useLocation();

//   // Form state – matches ContactPage
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ==========================================
//   // DETERMINE QUOTE DESTINATION BASED ON ROUTE
//   // ==========================================
//   const getQuoteDestination = () => {
//     const path = location.pathname;

//     const researchPaths = [
//       "/products/quantum-volt",
//       "/products/breakout-box",
//       "/products/cryo-clean",
//       "/products/DAC-system",
//       "/products/nano-stage",
//       "/products/2d-transfer-system",
//       "/products/psm-100",
//       "/products/dipstick",
//       "/products/cryoscope-controller",
//       "/products/ultraclear-4k",
//       "/products/2d-transfer-motorised",
//       "/products/spectroscopy-magnet",
//       "/products/bitter-magnet",
//       "/products/emc2t-2-magnet",
//     ];

//     const industryPaths = [
//       "/products/ac-dc-system-low",
//       "/products/ac-dc-system-high",
//       "/products/dc-dc-system-low",
//       "/products/dc-dc-system-high",
//       "/products/dc-ac-inverters",
//       "/products/inverter-400hz-rugged",
//     ];

//     if (researchPaths.some((p) => path === p)) {
//       return "/request-quote/research";
//     }

//     if (industryPaths.some((p) => path === p)) {
//       return "/request-quote/industry";
//     }

//     return "/request-quote";
//   };

//   const quoteDestination = getQuoteDestination();

//   const getButtonLabel = () => {
//     if (quoteDestination === "/request-quote/research") return "Get Research Quote";
//     if (quoteDestination === "/request-quote/industry") return "Get Industry Quote";
//     return "Get a Quote";
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Handle Form Submission – matches ContactPage
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setShowModal(true);
//       // Reset form after success
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         country: "",
//         subject: "",
//         message: "",
//       });
//     }, 1200);
//   };

//   return (
//     <section className="relative py-10 lg:py-14 bg-white overflow-hidden border-t border-slate-200">
//       {/* Faint structural grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

//       <div className="container relative z-10">
//         {/* Animated background aura – updated to red */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <motion.div
//             animate={{
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.02, 1],
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             className="w-[110%] h-[110%] bg-gradient-to-tr from-primary/5 via-slate-200/50 to-primary/10 rounded-[4rem] blur-3xl opacity-70"
//           />
//         </div>

//         {/* Main container – background stays as current (slate-300) */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative bg-slate-300 border border-slate-200/80 rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
//         >
//           <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
//             {/* LEFT SIDE: Text, Buttons, Contact Cards */}
//             <div className="lg:col-span-7 flex flex-col gap-5">
//               {/* Animated badge – red theme */}
//               <motion.div
//                 animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                 className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 bg-[length:200%_200%] border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm"
//               >
//                 <motion.div
//                   animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-2 h-2 rounded-full bg-primary"
//                 />
//                 <UserPlus className="w-3.5 h-3.5" />
//                 Expert Consultation
//               </motion.div>

//               {/* Heading */}
//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
//                 Speak to a{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
//                   Scientist
//                 </span>
//               </h2>

//               {/* Description */}
//               <div className="space-y-4 mt-1">
//                 <p className="text-lg md:text-xl text-black leading-relaxed font-bold">
//                   CRYONANO's analytical scientists are available to answer your
//                   questions. Have a project you'd like to discuss? Give us a call
//                   or email us!
//                 </p>
//                 <p className="text-base md:text-lg text-black leading-relaxed font-medium">
//                   We are happy to talk to you about any of your applications and
//                   instruments. Please write us an email with your question,
//                   drawing requirements, etc., and we will get back to you as soon
//                   as possible.
//                 </p>
//               </div>

//               {/* BUTTONS - Context-aware */}
//               <div className="flex flex-wrap gap-3 mt-1">
//                 <Link
//                   to={quoteDestination}
//                   onClick={scrollToTop}
//                   className="group relative px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     {getButtonLabel()} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:-rotate-90 transition-transform duration-300" />
//                   </span>
//                   <motion.div
//                     animate={{ x: ["-100%", "200%"] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
//                   />
//                 </Link>

//                 <Link
//                   to="/contact"
//                   onClick={scrollToTop}
//                   className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
//                 >
//                   Technical Support
//                 </Link>
//               </div>

//               {/* Contact Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
//                 <a
//                   href="tel:+919748181485"
//                   className="group relative flex items-center gap-3 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-md overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                   <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-primary transition-all duration-300 z-10">
//                     <Phone strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-primary transition-colors" />
//                   </div>
//                   <div className="relative z-10">
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 group-hover:text-primary transition-colors">
//                       Call Directly
//                     </p>
//                     <p className="text-sm md:text-base font-display font-extrabold text-white tracking-wide transition-colors">
//                       +91 97481 81485
//                     </p>
//                   </div>
//                 </a>

//                 <a
//                   href="mailto:contact@cryonano.com"
//                   className="group relative flex items-center gap-3 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-md overflow-hidden"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                   <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-primary transition-all duration-300 z-10">
//                     <Mail strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-primary transition-colors" />
//                   </div>
//                   <div className="relative z-10">
//                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 group-hover:text-primary transition-colors">
//                       Email Engineering
//                     </p>
//                     <p className="text-sm md:text-base font-display font-extrabold text-white tracking-wide transition-colors">
//                       contact@cryonano.com
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT SIDE: Form – matches ContactPage */}
//             <div className="lg:col-span-5 w-full relative">
//               <div className="bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

//                 <div className="relative z-10 mb-5">
//                   <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">
//                     Tell us about your application
//                   </h3>
//                   <p className="text-xs md:text-sm text-slate-400 font-medium">
//                     Drawings, requirements, environmental constraints — we'll
//                     respond promptly.
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="relative z-10 space-y-3.5">
//                   {/* Name & Email – row */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
//                         Name <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
//                         Email <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
//                         placeholder="john@company.com"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone & Country – row */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
//                         Phone Number <span className="text-primary">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
//                         placeholder="+91 98765 43210"
//                       />
//                     </div>
//                     <div className="space-y-1">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
//                         Country
//                       </label>
//                       <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleChange}
//                         className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
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
//                   </div>

//                   {/* Subject */}
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
//                       placeholder="Product Inquiry"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div className="space-y-1">
//                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
//                       Message <span className="text-primary">*</span>
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={3}
//                       placeholder="Tell us about your project..."
//                       className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-slate-600"
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     disabled={isSubmitting}
//                     type="submit"
//                     className="w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-red-700 shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? (
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
//                       />
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4" /> Request Consultation
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Success Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setShowModal(false)}
//               className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center"
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle2 className="w-10 h-10 text-emerald-500" />
//               </div>

//               <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
//               <p className="text-slate-600 font-medium mb-8 leading-relaxed">
//                 Your consultation request has been successfully submitted. Our
//                 engineering team will review your requirements and contact you
//                 shortly.
//               </p>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
//               >
//                 Close Window
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }







import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, UserPlus, Send, CheckCircle2, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Form state – matches ContactPage
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ==========================================
  // DETERMINE QUOTE DESTINATION BASED ON ROUTE
  // ==========================================
  const getQuoteDestination = () => {
    const path = location.pathname;

    const researchPaths = [
      "/products/quantum-volt",
      "/products/breakout-box",
      "/products/cryo-clean",
      "/products/DAC-system",
      "/products/nano-stage",
      "/products/2d-transfer-system",
      "/products/psm-100",
      "/products/dipstick",
      "/products/cryoscope-controller",
      "/products/ultraclear-4k",
      "/products/2d-transfer-motorised",
      "/products/spectroscopy-magnet",
      "/products/bitter-magnet",
      "/products/emc2t-2-magnet",
    ];

    const industryPaths = [
      "/products/ac-dc-system-low",
      "/products/ac-dc-system-high",
      "/products/dc-dc-system-low",
      "/products/dc-dc-system-high",
      "/products/dc-ac-inverters",
      "/products/inverter-400hz-rugged",
      "/products/battery-chargers",
    ];

    if (researchPaths.some((p) => path === p)) {
      return "/request-quote/research";
    }

    if (industryPaths.some((p) => path === p)) {
      return "/request-quote/industry";
    }

    return "/request-quote";
  };

  const quoteDestination = getQuoteDestination();

  const getButtonLabel = () => {
    if (quoteDestination === "/request-quote/research") return "Get Research Quote";
    if (quoteDestination === "/request-quote/industry") return "Get Industry Quote";
    return "Get a Quote";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Form Submission – API Integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Add the dynamic URL definition here
    const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/forms/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowModal(true);
        // Reset form after success
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          subject: "",
          message: "",
        });
      } else {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Network error. Is the server running?");
    }
  };

  return (
    <section className="relative py-10 lg:py-14 bg-white overflow-hidden border-t border-slate-200">
      {/* Faint structural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Animated background aura – updated to red */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110%] h-[110%] bg-gradient-to-tr from-primary/5 via-slate-200/50 to-primary/10 rounded-[4rem] blur-3xl opacity-70"
          />
        </div>

        {/* Main container – background stays as current (slate-300) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-slate-300 border border-slate-200/80 rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* LEFT SIDE: Text, Buttons, Contact Cards */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Animated badge – red theme */}
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 bg-[length:200%_200%] border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase w-fit shadow-sm"
              >
                <motion.div
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <UserPlus className="w-3.5 h-3.5" />
                Expert Consultation
              </motion.div>

              {/* Heading */}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
                Speak to a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                  Scientist
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-4 mt-1">
                <p className="text-lg md:text-xl text-black leading-relaxed font-bold">
                  CRYONANO's analytical scientists are available to answer your
                  questions. Have a project you'd like to discuss? Give us a call
                  or email us!
                </p>
                <p className="text-base md:text-lg text-black leading-relaxed font-medium">
                  We are happy to talk to you about any of your applications and
                  instruments. Please write us an email with your question,
                  drawing requirements, etc., and we will get back to you as soon
                  as possible.
                </p>
              </div>

              {/* BUTTONS - Context-aware */}
              <div className="flex flex-wrap gap-3 mt-1">
                <Link
                  to={quoteDestination}
                  onClick={scrollToTop}
                  className="group relative px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base text-white bg-primary shadow-lg hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {getButtonLabel()} <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:-rotate-90 transition-transform duration-300" />
                  </span>
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                  />
                </Link>

                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base text-slate-700 bg-white border-2 border-slate-200 hover:border-primary/50 hover:bg-slate-50 hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-md hover:-translate-y-1"
                >
                  Technical Support
                </Link>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <a
                  href="tel:+919748181485"
                  className="group relative flex items-center gap-3 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-md overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-primary transition-all duration-300 z-10">
                    <Phone strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 group-hover:text-primary transition-colors">
                      Call Directly
                    </p>
                    <p className="text-sm md:text-base font-display font-extrabold text-white tracking-wide transition-colors">
                      +91 97481 81485
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contact@cryonano.com"
                  className="group relative flex items-center gap-3 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-md overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center group-hover:border-primary transition-all duration-300 z-10">
                    <Mail strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 group-hover:text-primary transition-colors">
                      Email Engineering
                    </p>
                    <p className="text-sm md:text-base font-display font-extrabold text-white tracking-wide transition-colors">
                      contact@cryonano.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Form – matches ContactPage */}
            <div className="lg:col-span-5 w-full relative">
              <div className="bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 mb-5">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">
                    Tell us about your application
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-medium">
                    Drawings, requirements, environmental constraints — we'll
                    respond promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-3.5">
                  {/* Name & Email – row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Country – row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
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
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="Product Inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Tell us about your project..."
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-slate-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-red-700 shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Request Consultation
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                Your consultation request has been successfully submitted. Our
                engineering team will review your requirements and contact you
                shortly.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}