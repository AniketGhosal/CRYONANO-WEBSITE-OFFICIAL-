// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { PageTransition } from "@/components/PageTransition";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Clock,
//   CheckCircle2,
//   ArrowUpRight,
//   Linkedin,
//   Twitter,
//   Youtube,
//   Facebook,
//   MessageCircle,
//   Globe,
//   Building2,
//   Users,
//   Award,
//   Sparkles,
//   ExternalLink,
// } from "lucide-react";

// // Framer Motion variants
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
//     transition: { staggerChildren: 0.12, delayChildren: 0.15 },
//   },
// };

// const ContactPage = () => {
//   const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormState("submitting");

//     // // 1. Add the dynamic URL definition here
//     // const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
//     // 1. Local backend URL for testing
//     const API_URL = "http://localhost:5000";

//     try {
//       const response = await fetch(`${API_URL}/api/forms/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setFormState("success");
//         setTimeout(() => {
//           setFormState("idle");
//           setFormData({ name: "", email: "", phone: "", country: "", subject: "", message: "" });
//         }, 4000);
//       } else {
//         setFormState("idle");
//         alert("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setFormState("idle");
//       alert("Network error. Is the server running?");
//     }
//   };

//   const contactMethods = [
//     {
//       icon: Phone,
//       title: "Phone",
//       details: "+91 97481 81485",
//       description: "Mon–Fri, 9:00 AM – 6:00 PM IST",
//       link: "tel:+919748181485",
//       color: "text-primary",
//       bg: "bg-primary/10",
//       border: "border-primary/20",
//       hoverBg: "hover:bg-primary/5",
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       details: "contact@cryonano.com",
//       description: "For general inquiries and sales",
//       link: "mailto:contact@cryonano.com",
//       color: "text-blue-600",
//       bg: "bg-blue-50",
//       border: "border-blue-200",
//       hoverBg: "hover:bg-blue-50/50",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       details: "Kolkata & Bangalore, India",
//       description: "Global Operations Hub",
//       link: "#",
//       color: "text-emerald-600",
//       bg: "bg-emerald-50",
//       border: "border-emerald-200",
//       hoverBg: "hover:bg-emerald-50/50",
//     },
//   ];

//   const socialLinks = [
//     { name: "LinkedIn", icon: Linkedin, link: "#", color: "text-[#0a66c2]", hover: "hover:bg-[#0a66c2] hover:text-white" },
//     { name: "Twitter", icon: Twitter, link: "#", color: "text-[#1da1f2]", hover: "hover:bg-[#1da1f2] hover:text-white" },
//     { name: "YouTube", icon: Youtube, link: "#", color: "text-[#ff0000]", hover: "hover:bg-[#ff0000] hover:text-white" },
//     { name: "Facebook", icon: Facebook, link: "#", color: "text-[#1877f2]", hover: "hover:bg-[#1877f2] hover:text-white" },
//   ];

//   const addresses = [
//     {
//       city: "Kolkata (HQ)",
//       address: "WTL Building, 1st Floor, BP-5, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
//       icon: Building2,
//       mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.789!2d88.4339!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5b5d5a5a5%3A0x5a5a5a5a5a5a5a5a!2sWTL%20Building%2C%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1710000000000",
//     },
//     {
//       city: "Bangalore",
//       address: "GMN Complex, 2nd Floor, 5th 'A' Cross, 1st Block, HRBR Layout, Babusapalya, Banaswadi, Outer Ring Road, Bangalore-560043",
//       icon: MapPin,
//       mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.789!2d77.6661!3d13.0309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1667b5b5b5b5%3A0x5a5a5a5a5a5a5a5a!2sGMN%20Complex%2C%20HRBR%20Layout%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1710000000000",
//     },
//   ];

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
//         <Navbar />

//         <main>
//           {/* Breadcrumb - compact */}
//           <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
//             <div className="container py-2 flex items-center gap-3">
//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
//               >
//                 <ArrowLeft className="h-3 w-3" />
//                 Back to Home
//               </Link>
//               <span className="text-slate-300 font-bold">/</span>
//               <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Contact Us</span>
//             </div>
//           </div>

//           {/* HERO SECTION – compact */}
//           <section className="relative py-10 md:py-12 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//               <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
//               <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
//             </div>

//             <div className="container relative z-10 text-center max-w-3xl mx-auto">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeInUp}
//                 className="space-y-3"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.4 }}
//                   className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase"
//                 >
//                   <Sparkles className="w-3.5 h-3.5" />
//                   Get in Touch
//                 </motion.div>

//                 <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
//                   Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Connect</span>
//                 </h1>

//                 <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
//                   Have a question about our products or services? Reach out to our team.
//                 </p>

//                 <motion.div
//                   variants={staggerContainer}
//                   initial="hidden"
//                   animate="visible"
//                   className="flex flex-wrap justify-center gap-2.5 pt-1.5"
//                 >
//                   {[
//                     { value: "32+", label: "Systems Delivered", icon: Building2 },
//                     { value: "15+", label: "IIT Partners", icon: Users },
//                     { value: "5+", label: "Countries", icon: Globe },
//                     { value: "15+", label: "Publications", icon: Award },
//                   ].map((item, idx) => (
//                     <motion.div
//                       key={idx}
//                       variants={fadeInUp}
//                       className="flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200"
//                     >
//                       <item.icon className="w-3.5 h-3.5 text-primary" />
//                       <span className="font-extrabold text-slate-900 text-sm">{item.value}</span>
//                       <span className="text-xs text-slate-500">{item.label}</span>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             </div>
//           </section>

//           {/* ============================== */}
//           {/* CONTACT METHODS */}
//           {/* ============================== */}
//           <section className="container -mt-4 relative z-20">
//             <motion.div
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-30px" }}
//               className="grid md:grid-cols-3 gap-4"
//             >
//               {contactMethods.map((method, idx) => {
//                 const Icon = method.icon;
//                 return (
//                   <motion.a
//                     key={idx}
//                     href={method.link}
//                     variants={fadeInUp}
//                     className={`group block bg-white border ${method.border} rounded-xl p-5 shadow-sm transition-all duration-300 relative overflow-hidden ${method.hoverBg} hover:shadow-lg hover:-translate-y-0.5`}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className={`w-10 h-10 rounded-lg ${method.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
//                         <Icon className={`w-5 h-5 ${method.color}`} />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-display font-bold text-slate-900 text-base">{method.title}</h3>
//                         <p className="font-semibold text-slate-800 text-sm">{method.details}</p>
//                         <p className="text-xs text-slate-500">{method.description}</p>
//                       </div>
//                     </div>
//                     <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <span className="text-xs font-extrabold text-primary uppercase tracking-widest flex items-center gap-1.5">
//                         <ExternalLink className="w-3 h-3" />
//                         Connect
//                       </span>
//                       <ArrowUpRight className="w-4 h-4 text-primary" />
//                     </div>
//                   </motion.a>
//                 );
//               })}
//             </motion.div>
//           </section>

//           {/* ============================== */}
//           {/* FORM + ADDRESS SECTION – with Maps */}
//           {/* ============================== */}
//           <section className="container py-10 md:py-12">
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
//               {/* Left: Contact Form – enhanced */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-30px" }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden h-full flex flex-col"
//               >
//                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

//                 <div className="relative z-10 flex-1 flex flex-col">
//                   <div className="flex items-center gap-3 mb-1">
//                     <div className="w-1 h-6 bg-primary rounded-full" />
//                     <h2 className="font-display text-xl font-extrabold text-slate-900">Send us a Message</h2>
//                   </div>
//                   <p className="text-sm text-slate-500 mb-4">
//                     Fill in the form and our team will get back to you.
//                   </p>

//                   <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Name <span className="text-primary">*</span>
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
//                           placeholder="john@company.com"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Phone Number <span className="text-primary">*</span>
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                           placeholder="+91 98765 43210"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                           Country
//                         </label>
//                         <select
//                           name="country"
//                           value={formData.country}
//                           onChange={handleChange}
//                           className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
//                         >
//                           <option value="">Select Country</option>
//                           <option value="India">India</option>
//                           <option value="USA">USA</option>
//                           <option value="UK">UK</option>
//                           <option value="Germany">Germany</option>
//                           <option value="France">France</option>
//                           <option value="Japan">Japan</option>
//                           <option value="China">China</option>
//                           <option value="Singapore">Singapore</option>
//                           <option value="Australia">Australia</option>
//                           <option value="Canada">Canada</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Subject
//                       </label>
//                       <input
//                         type="text"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
//                         placeholder="Product Inquiry"
//                       />
//                     </div>

//                     <div className="flex-1">
//                       <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
//                         Message <span className="text-primary">*</span>
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows={4}
//                         className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none h-24"
//                         placeholder="Tell us about your project..."
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={formState === "submitting"}
//                       className="w-full group relative px-6 py-3 bg-primary hover:bg-red-700 text-white font-extrabold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
//                     >
//                       <span className="relative z-10 flex items-center gap-2">
//                         {formState === "submitting" ? "Sending..." : "Send Message"}
//                         <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                       </span>
//                       <motion.div
//                         animate={{ x: ["-100%", "200%"] }}
//                         transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
//                       />
//                     </button>
//                   </form>

//                   <AnimatePresence>
//                     {formState === "success" && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2"
//                       >
//                         <CheckCircle2 className="w-4 h-4 text-emerald-500" />
//                         <span className="text-emerald-800 text-sm font-medium">
//                           Message sent successfully!
//                         </span>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>

//               {/* Right: Addresses & Hours – with Maps */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-30px" }}
//                 transition={{ duration: 0.5, delay: 0.15 }}
//                 className="flex flex-col gap-4 h-full"
//               >
//                 {/* Opening Hours */}
//                 <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-5 shadow-sm">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                       <Clock className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-display font-bold text-slate-900 text-lg">Opening Hours</h3>
//                       <p className="text-sm text-slate-600 font-medium">Mon - Fri: 8:00 am – 4:30 pm IST</p>
//                     </div>
//                   </div>
//                   <p className="text-xs text-slate-500 mt-1 ml-[52px]">Closed on weekends and public holidays</p>
//                 </div>

//                 {/* Two Addresses – with maps inside */}
//                 <div className="grid gap-3 flex-1">
//                   {addresses.map((loc, idx) => {
//                     const Icon = loc.icon;
//                     return (
//                       <div
//                         key={idx}
//                         className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
//                       >
//                         <div className="flex flex-col gap-3">
//                           {/* Address Header */}
//                           <div className="flex items-start gap-3">
//                             <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
//                               <Icon className="w-5 h-5 text-primary" />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h4 className="font-display font-bold text-slate-900 text-base">
//                                 {loc.city}
//                               </h4>
//                               <p className="text-xs text-slate-600 leading-relaxed">
//                                 {loc.address}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Map – compact, fits within whitespace */}
//                           <div className="w-full h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 relative">
//                             <iframe
//                               src={loc.mapSrc}
//                               className="absolute inset-0 w-full h-full"
//                               style={{ border: 0 }}
//                               allowFullScreen
//                               loading="lazy"
//                               referrerPolicy="no-referrer-when-downgrade"
//                               title={`Map showing ${loc.city} location`}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* SOCIAL SECTION – compact */}
//           <section className="container pb-10 md:pb-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-30px" }}
//               transition={{ duration: 0.5 }}
//               className="bg-slate-50 rounded-2xl p-5 md:p-6 text-center border border-slate-200"
//             >
//               <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 mb-1">
//                 Connect with Us
//               </h2>
//               <p className="text-sm text-slate-500 mb-3">
//                 Follow us for the latest updates and product news.
//               </p>
//               <div className="flex flex-wrap justify-center gap-2.5">
//                 {socialLinks.map((social, idx) => {
//                   const Icon = social.icon;
//                   return (
//                     <motion.a
//                       key={idx}
//                       href={social.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ y: -3 }}
//                       className={`w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center ${social.color} ${social.hover} transition-all duration-300 shadow-sm hover:shadow-lg`}
//                     >
//                       <Icon className="w-5 h-5" />
//                     </motion.a>
//                   );
//                 })}
//                 <a
//                   href="https://wa.me/919748181485"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-11 h-11 rounded-lg bg-[#25d366] hover:bg-[#1ebe5c] flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                 </a>
//               </div>
//             </motion.div>
//           </section>

//           {/* CTA SECTION – compact */}
//           <section className="relative py-10 bg-primary/5 border-y border-primary/10 overflow-hidden">
//             <div className="container relative z-10 text-center max-w-2xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
//                   Ready to discuss your project?
//                 </h2>
//                 <p className="text-slate-600 text-base mb-4">
//                   Our engineering team is standing by to assist you.
//                 </p>
//                 <a
//                   href="mailto:contact@cryonano.com"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-extrabold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
//                 >
//                   <Mail className="w-4 h-4" />
//                   Email Us Directly
//                   <ArrowUpRight className="w-4 h-4" />
//                 </a>
//               </motion.div>
//             </div>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default ContactPage;










import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  MessageCircle,
  Globe,
  Building2,
  Users,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";

// Framer Motion variants
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
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const ContactPage = () => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const API_URL = "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/forms/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState("success");
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState("idle");
          setFormData({ name: "", email: "", phone: "", country: "", subject: "", message: "" });
        }, 3000);
      } else {
        setFormState("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setFormState("idle");
      alert("Network error. Is the server running?");
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 97481 81485",
      description: "Mon–Fri, 9:00 AM – 6:00 PM IST",
      link: "tel:+919748181485",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      hoverBg: "hover:bg-primary/5",
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@cryonano.com",
      description: "For general inquiries and sales",
      link: "mailto:contact@cryonano.com",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      hoverBg: "hover:bg-blue-50/50",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kolkata & Bangalore, India",
      description: "Global Operations Hub",
      link: "#",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      hoverBg: "hover:bg-emerald-50/50",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, link: "https://share.google/okMbitk3aGNAxsApF", color: "text-[#0a66c2]", hover: "hover:bg-[#0a66c2] hover:text-white" },
    { name: "Twitter", icon: Twitter, link: "#", color: "text-[#1da1f2]", hover: "hover:bg-[#1da1f2] hover:text-white" },
    { name: "YouTube", icon: Youtube, link: "https://youtube.com/@cryonano?si=-hNviSoyvrnoRYUI", color: "text-[#ff0000]", hover: "hover:bg-[#ff0000] hover:text-white" },
    { name: "Facebook", icon: Facebook, link: "#", color: "text-[#1877f2]", hover: "hover:bg-[#1877f2] hover:text-white" },
  ];

  const addresses = [
    {
      city: "Kolkata (HQ)",
      address: "WTL Building, 1st Floor, BP-5, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
      icon: Building2,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.789!2d88.4339!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5b5d5a5a5%3A0x5a5a5a5a5a5a5a5a!2sWTL%20Building%2C%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1710000000000",
    },
    {
      city: "Bangalore",
      address: "GMN Complex, 2nd Floor, 5th 'A' Cross, 1st Block, HRBR Layout, Babusapalya, Banaswadi, Outer Ring Road, Bangalore-560043",
      icon: MapPin,
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.789!2d77.6661!3d13.0309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1667b5b5b5b5%3A0x5a5a5a5a5a5a5a5a!2sGMN%20Complex%2C%20HRBR%20Layout%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1710000000000",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* ====== NAVBAR - FIXED AT TOP ====== */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* ====== MAIN CONTENT WITH TOP PADDING ====== */}
      <PageTransition>
        <main className="pt-[80px]">
          {/* Breadcrumb - compact */}
          <div className="bg-white border-b border-slate-200 sticky top-[120px] z-40 shadow-sm">
            <div className="container py-2 flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to Home
              </Link>
              <span className="text-slate-300 font-bold">/</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Contact Us</span>
            </div>
          </div>

          {/* HERO SECTION – compact */}
          <section className="relative py-10 md:py-12 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/20 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 text-center max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="space-y-3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest uppercase"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Get in Touch
                </motion.div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Connect</span>
                </h1>

                <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Have a question about our products or services? Reach out to our team.
                </p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap justify-center gap-2.5 pt-1.5"
                >
                  {[
                    { value: "32+", label: "Systems Delivered", icon: Building2 },
                    { value: "15+", label: "IIT Partners", icon: Users },
                    { value: "5+", label: "Countries", icon: Globe },
                    { value: "15+", label: "Publications", icon: Award },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200"
                    >
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                      <span className="font-extrabold text-slate-900 text-sm">{item.value}</span>
                      <span className="text-xs text-slate-500">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ============================== */}
          {/* CONTACT METHODS */}
          {/* ============================== */}
          <section className="container -mt-4 relative z-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="grid md:grid-cols-3 gap-4"
            >
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={idx}
                    href={method.link}
                    variants={fadeInUp}
                    className={`group block bg-white border ${method.border} rounded-xl p-5 shadow-sm transition-all duration-300 relative overflow-hidden ${method.hoverBg} hover:shadow-lg hover:-translate-y-0.5`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${method.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-slate-900 text-base">{method.title}</h3>
                        <p className="font-semibold text-slate-800 text-sm">{method.details}</p>
                        <p className="text-xs text-slate-500">{method.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-extrabold text-primary uppercase tracking-widest flex items-center gap-1.5">
                        <ExternalLink className="w-3 h-3" />
                        Connect
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </section>

          {/* ============================== */}
          {/* FORM + ADDRESS SECTION – with Maps */}
          {/* ============================== */}
          <section className="container py-10 md:py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Left: Contact Form – enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h2 className="font-display text-xl font-extrabold text-slate-900">Send us a Message</h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">
                    Fill in the form and our team will get back to you.
                  </p>

                  <AnimatePresence mode="wait">
                    {formState === "success" ? (
                      // ✅ SUCCESS MESSAGE (replaces the entire form)
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex-1 flex flex-col items-center justify-center py-8 text-center"
                      >
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                        <p className="text-sm text-slate-600 max-w-xs mx-auto">
                          Your message has been sent. Our team will get back to you shortly.
                        </p>
                        <p className="text-xs text-slate-400 mt-4">Redirecting back to form...</p>
                      </motion.div>
                    ) : (
                      // 📝 FORM
                      <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={handleSubmit}
                        className="space-y-4 flex-1 flex flex-col"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                              Name <span className="text-primary">*</span>
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
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                              Phone Number <span className="text-primary">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                              placeholder="+91 98765 43210"
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
                        </div>

                        <div>
                          <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all"
                            placeholder="Product Inquiry"
                          />
                        </div>

                        <div className="flex-1">
                          <label className="block text-[10px] font-extrabold text-slate-700 uppercase tracking-widest mb-1">
                            Message <span className="text-primary">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:bg-white transition-all resize-none h-24"
                            placeholder="Tell us about your project..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={formState === "submitting"}
                          className="w-full group relative px-6 py-3 bg-primary hover:bg-red-700 text-white font-extrabold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {formState === "submitting" ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                          <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                          />
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Right: Addresses & Hours – with Maps */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col gap-4 h-full"
              >
                {/* Opening Hours */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-900 text-lg">Opening Hours</h3>
                      <p className="text-sm text-slate-600 font-medium">Mon - Fri: 8:00 am – 4:30 pm IST</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 ml-[52px]">Closed on weekends and public holidays</p>
                </div>

                {/* Two Addresses – with maps inside */}
                <div className="grid gap-3 flex-1">
                  {addresses.map((loc, idx) => {
                    const Icon = loc.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <div className="flex flex-col gap-3">
                          {/* Address Header */}
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-display font-bold text-slate-900 text-base">
                                {loc.city}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {loc.address}
                              </p>
                            </div>
                          </div>

                          {/* Map – compact, fits within whitespace */}
                          <div className="w-full h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 relative">
                            <iframe
                              src={loc.mapSrc}
                              className="absolute inset-0 w-full h-full"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`Map showing ${loc.city} location`}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>

          {/* SOCIAL SECTION – compact */}
          <section className="container pb-10 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-5 md:p-6 text-center border border-slate-200"
            >
              <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 mb-1">
                Connect with Us
              </h2>
              <p className="text-sm text-slate-500 mb-3">
                Follow us for the latest updates and product news.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center ${social.color} ${social.hover} transition-all duration-300 shadow-sm hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
                <a
                  href="https://wa.me/919748181485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#25d366] hover:bg-[#1ebe5c] flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </section>

          {/* CTA SECTION – compact */}
          <section className="relative py-10 bg-primary/5 border-y border-primary/10 overflow-hidden">
            <div className="container relative z-10 text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                  Ready to discuss your project?
                </h2>
                <p className="text-slate-600 text-base mb-4">
                  Our engineering team is standing by to assist you.
                </p>
                <a
                  href="mailto:contact@cryonano.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-red-700 text-white font-extrabold text-sm rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Email Us Directly
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

export default ContactPage;