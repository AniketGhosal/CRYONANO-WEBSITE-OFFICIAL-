// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   BookOpen, Activity, ThermometerSnowflake, Layers, Magnet,
//   CheckCircle2, FileText, ArrowLeft, Sparkles,
//   Award, Users, Globe, Mail, Microscope,
//   Target, Move, Eye, Layers2, ShieldCheck, Radio, Settings,
//   Droplets
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import { Link } from 'react-router-dom';

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 }
//   }
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" as const }
//   }
// };

// // ==========================================
// // DATA – Application Notes (Exact Content from Word Document)
// // ==========================================
// const applicationNotes = [
//   {
//     id: "ivs-quantum-hall",
//     title: "Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source",
//     author: "Prof. Biswajit Karmakar",
//     affiliation: "Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata",
//     icon: Activity,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a 16-bit Digital-to-Analog Isolated Voltage Source (IVS) from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements."
//         ]
//       },
//       {
//         type: "features",
//         title: "The IVS provides:",
//         items: [
//           "Four independent, truly bipolar outputs (±10 V each)",
//           "Computer-controlled operation (LabVIEW compatible)",
//           "Output current up to 10 mA",
//           "Electrical isolation to eliminate ground-loop noise"
//         ],
//         note: "These features make it particularly suitable for sensitive quantum transport experiments."
//       },
//       {
//         type: "subtitle",
//         title: "1. Gate Voltage Control in Quantum Hall Systems"
//       },
//       {
//         type: "content",
//         content: [
//           "In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system."
//         ]
//       },
//       {
//         type: "bullets",
//         title: "Using the IVS:",
//         items: [
//           "Multiple gates can be independently biased with high precision",
//           "Stable and noise-free voltage control enables accurate tuning of edge mode interactions",
//           "The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes"
//         ]
//       },
//       {
//         type: "publications",
//         title: "This setup has contributed to significant experimental results, leading to publications in:",
//         items: [
//           "Physical Review Letters (2020)",
//           "Physical Review B (2021)"
//         ],
//         note: "The low-noise and isolated outputs of the IVS are essential in maintaining signal integrity in these delicate measurements."
//       },
//       {
//         type: "subtitle",
//         title: "2. Gate Control in Graphene Devices"
//       },
//       {
//         type: "content",
//         content: [
//           "Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density.",
//           "The IVS proves highly effective for this application:"
//         ]
//       },
//       {
//         type: "bullets",
//         items: [
//           "Provides stable back-gate voltage control",
//           "Multiple channels can be connected in series to achieve up to ±40 V output",
//           "Isolation minimizes interference and improves measurement reliability"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "This makes the IVS a practical and flexible solution for graphene transport experiments, including carrier density tuning and field-effect measurements.",
//           "Representative graphene device studies can be found in: ACS Applied Nano Materials (2022)"
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "3. I–V Spectroscopy in Fractional Quantum Hall Systems"
//       },
//       {
//         type: "content",
//         content: [
//           "I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements.",
//           "Typical setup includes: DC voltage excitation (provided by IVS) and AC modulation for lock-in detection."
//         ]
//       },
//       {
//         type: "bullets",
//         title: "Key advantages of using the IVS in this context:",
//         items: [
//           "Low-noise 16-bit resolution enables precise voltage sweeps",
//           "Electrical isolation eliminates ground loops",
//           "Stable DC bias improves accuracy in differential conductance measurements"
//         ]
//       },
//       {
//         type: "content",
//         content: [
//           "This results in clean, high-resolution spectroscopic data, critical for studying fractional quantum Hall physics."
//         ]
//       },
//       {
//         type: "benefits",
//         title: "Key Benefits of the IVS in Research Applications",
//         items: [
//           { title: "True Bipolar Outputs", desc: "Flexible biasing with ±10 V per channel" },
//           { title: "Scalable Voltage Range", desc: "Up to ±40 V via series configuration" },
//           { title: "Low‑Noise Performance", desc: "16‑bit resolution for sensitive measurements" },
//           { title: "Complete Isolation", desc: "Eliminates ground‑loop interference" },
//           { title: "Multi‑Channel Operation", desc: "Four independent channels for complex devices" }
//         ]
//       },
//       {
//         type: "conclusion",
//         content: "The Isolated Voltage Source (IVS) from Cryonano Labs has proven to be a versatile and reliable tool for advanced condensed matter experiments. Its combination of precision, low noise, and isolation makes it particularly well-suited for: Quantum Hall edge state studies, Graphene device characterization, High-resolution I–V spectroscopy. Its integration into experimental setups enables reproducible and high-quality measurements, supporting cutting-edge research in quantum transport."
//       }
//     ]
//   },
//   {
//     id: "helium-dipstick",
//     title: "Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions",
//     author: "Dr. Deep Talukdar",
//     affiliation: "Cryonano Labs",
//     icon: ThermometerSnowflake,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.",
//           "This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under: DC bias conditions, RF excitation (up to 18 GHz), and External magnetic field (~0.1 Tesla).",
//           "The system integrates electrical isolation, thermal management, and electromagnetic shielding to ensure high-fidelity measurements."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Objective"
//       },
//       {
//         type: "content",
//         content: [
//           "The goal was to design and fabricate a dipstick system capable of:",
//           "• Performing low-noise I–V measurements of Josephson junctions at 4 K",
//           "• Supporting simultaneous DC, RF, and magnetic field inputs",
//           "• Providing a modular and scalable wiring architecture for complex devices"
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Measurement Requirements"
//       },
//       {
//         type: "content",
//         content: [
//           "The system was designed to meet the following specifications:",
//           "• 24 DC measurement lines",
//           "• Integrated 24-channel cryogenic low-pass DC-RF filters",
//           "• Support for both: in-plane measurements, out-of-plane measurements",
//           "• Signal breakout via: Fisher connectors → 24 BNC outputs",
//           "• Integrated room temperature RF filtering",
//           "This configuration enables clean signal routing while minimizing noise and interference."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "System Design and Implementation"
//       },
//       {
//         type: "content",
//         content: [
//           "To meet the above requirements, a robust and modular dipstick architecture was developed:"
//         ]
//       },
//       {
//         type: "design-grid",
//         items: [
//           {
//             title: "Mechanical & Structural Design",
//             desc: "Fabricated using a stainless steel dipstick for mechanical stability and cryogenic compatibility. Three independent stainless steel tubes used to isolate: DC measurement lines, Heater and temperature sensor (Cernox) lines, and Magnet DC supply lines."
//           },
//           {
//             title: "RF Integration",
//             desc: "A semi-rigid RF cable was routed from the top as an antenna. Supports RF signal injection up to 18 GHz. Enables high-frequency excitation for Josephson junction studies."
//           },
//           {
//             title: "Filtering & Thermal Management",
//             desc: "Integrated 24-line cryogenic low-pass filters for noise suppression. Wire thermalization bobbins used inline to reduce thermal load. Additional room temperature RF filters for improved signal integrity."
//           },
//           {
//             title: "Sample Mounting",
//             desc: "Custom gold-plated OFC (Oxygen-Free Copper) sample holder. Supports both: in-plane chip carriers, out-of-plane chip carriers. Ensures excellent thermal conductivity and electrical stability."
//           },
//           {
//             title: "Wiring & Connectivity",
//             desc: "BeCu (Beryllium Copper) wire looms used for reliable cryogenic connections. Designed with appropriate breaks for thermal anchoring and strain relief. External breakout via Fisher connectors to 24 BNC connectors."
//           },
//           {
//             title: "Magnetic Shielding",
//             desc: "Mu-metal shielding around the sample enclosure. Sealed using indium gaskets. Protects against ambient magnetic interference, including Earth's magnetic field."
//           }
//         ]
//       },
//       {
//         type: "features-grid",
//         title: "Key Features and Advantages",
//         items: [
//           { icon: ShieldCheck, title: "24-Channel Filtered DC", desc: "24 lines with integrated cryogenic low‑pass filters for clean measurements." },
//           { icon: Radio, title: "RF up to 18 GHz", desc: "Semi‑rigid RF cable routed as an antenna for high‑frequency excitation." },
//           { icon: Magnet, title: "Integrated Magnet (~0.1 T)", desc: "On‑board magnetic field source for Josephson junction characterization." },
//           { icon: ThermometerSnowflake, title: "Superior Thermal Anchoring", desc: "Wire thermalization bobbins and BeCu looms minimize heat load." },
//           { icon: Settings, title: "Modular & Scalable", desc: "Three isolated stainless steel tubes separate DC, heater/sensor, and magnet lines." },
//           { icon: Layers, title: "EMI Shielding", desc: "Mu‑metal shield with indium gaskets guards against ambient magnetic interference." }
//         ]
//       },
//       {
//         type: "applications",
//         title: "Applications",
//         items: [
//           "Josephson junction I–V characterization",
//           "Superconducting device research",
//           "Quantum transport experiments",
//           "RF-driven quantum systems",
//           "Low-temperature electronics testing"
//         ]
//       },
//       {
//         type: "conclusion",
//         content: "The developed Helium Dipstick system provides a highly integrated and noise-optimized platform for Josephson junction characterization at cryogenic temperatures. By combining DC, RF, and magnetic field capabilities within a single architecture, it enables precise and reproducible measurements essential for superconducting and quantum device research."
//       }
//     ]
//   },
//   {
//     id: "2d-transfer",
//     title: "2D Transfer of Materials – Process and Dynamics",
//     author: "Mr. Sourav Paul (with inputs from Mr. Vineet Pandey)",
//     affiliation: "Materials Science Centre, IIT Kharagpur",
//     icon: Layers,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact during transfer. This application note outlines a universal dry transfer method implemented using the 2D Transfer System from Cryonano Labs, enabling reliable and reproducible stacking of 2D materials such as graphene, h-BN, and TMDs.",
//           "Using this system, multiple heterostructures have been successfully fabricated with high precision, leading to published research on interlayer coupling and stacking order in layered materials."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "System Configuration"
//       },
//       {
//         type: "content",
//         content: [
//           "The 2D transfer setup consists of two primary stages:",
//           "• XYθ Stage: Enables precise lateral positioning and rotational alignment",
//           "• XYZ Stage: Equipped with a cantilever-mounted plate for controlled vertical motion",
//           "This configuration allows fine control over alignment and contact during the transfer process under an optical microscope."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Transfer Method: Universal Dry Transfer (PDMS/PPC)"
//       },
//       {
//         type: "content",
//         content: [
//           "The process uses a Polydimethylsiloxane (PDMS) / Polypropylene Carbonate (PPC) based dry transfer technique, widely adopted for clean and controlled stacking of 2D materials."
//         ]
//       },
//       {
//         type: "steps",
//         title: "Step-by-Step Process",
//         steps: [
//           {
//             title: "Stamp Preparation and Alignment",
//             description: "A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The PDMS/PPC stamp is then mounted upside down and aligned under the microscope with the target sample placed on the substrate (typically SiO₂/Si)."
//           },
//           {
//             title: "Pickup of h-BN Flake",
//             description: "A few-layer hexagonal boron nitride (h-BN) flake is first picked up from the substrate. Pickup temperature: ~65°C. Substrate: SiO₂/Si. During this step, real-time optical monitoring is critical to observe: initial contact between stamp and flake, interface formation, and successful pickup of the flake onto the PDMS/PPC stamp."
//           },
//           {
//             title: "Pickup of Additional 2D Materials",
//             description: "Other exfoliated 2D materials such as: Graphene, Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Pickup temperature: ~55°C. Requires precise alignment of the new flake with the existing stack. This step enables controlled stacking and formation of complex heterostructures."
//           },
//           {
//             title: "Final Transfer and Release",
//             description: "The assembled stack (hBN / 2D material / hBN) is transferred onto a target substrate. Transfer temperature: ~85°C. The stack is aligned and brought into contact with the substrate. The cantilever stage is slowly retracted, allowing the PDMS/PPC to detach. Post-transfer cleaning: Acetone rinse to remove PPC residue, followed by IPA cleaning. This results in a clean, well-defined heterostructure."
//           }
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Process Dynamics and Key Observations"
//       },
//       {
//         type: "content",
//         content: [
//           "A critical aspect of successful transfer is real-time optical monitoring during the contact phase.",
//           "• As the stamp approaches the substrate, interference fringes appear",
//           "• These fringes indicate proximity and uniformity of contact",
//           "• The transition from partial to full contact must be carefully controlled",
//           "Understanding these live optical micrographs is essential for: Avoiding bubbles and contaminants, Ensuring uniform stacking, and Achieving high-quality interfaces."
//         ]
//       },
//       {
//         type: "features-grid",
//         title: "Key Advantages of the Cryonano 2D Transfer System",
//         items: [
//           { icon: Target, title: "High‑Precision Alignment (XYθ)", desc: "Precise lateral and rotational control for accurate stacking." },
//           { icon: Move, title: "Stable Vertical Motion (XYZ)", desc: "Cantilever stage ensures smooth, controlled approach and retraction." },
//           { icon: Layers, title: "Dry Transfer Compatibility", desc: "Optimized for PDMS/PPC technique for clean, contamination‑free transfer." },
//           { icon: Eye, title: "Real‑Time Microscopy", desc: "Live optical monitoring to observe interference fringes and contact quality." },
//           { icon: Layers2, title: "Complex Heterostructures", desc: "Enables fabrication of multi‑layer stacks with diverse 2D materials." }
//         ]
//       },
//       {
//         type: "applications",
//         title: "Applications",
//         items: [
//           "Van der Waals heterostructure fabrication",
//           "Graphene-based devices",
//           "TMD-based optoelectronics",
//           "Quantum materials research",
//           "Layered material interface studies"
//         ]
//       },
//       {
//         type: "publication",
//         title: "Research Output",
//         content: "The described process has contributed to published work:",
//         citation: "\"Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂\" — Sourav Paul et al., Journal of Applied Physics, 133, 114301 (2023)"
//       },
//       {
//         type: "conclusion",
//         content: "The Cryonano 2D Transfer System enables precise, repeatable, and contamination-free assembly of 2D heterostructures using a universal dry transfer method. Control over alignment, temperature, and interfacial dynamics—combined with real-time optical feedback—ensures high-quality device fabrication for advanced materials research."
//       }
//     ]
//   },
//   {
//     id: "electromagnet-optical",
//     title: "Electromagnet with Optical Access — Installation at INST Mohali",
//     author: "Cryonano Labs Engineering Team",
//     affiliation: "Institute of Nano Science and Technology (INST), Mohali",
//     icon: Magnet,
//     sections: [
//       {
//         type: "overview",
//         content: [
//           "A custom electromagnet with optical access was designed and installed at the Institute of Nano Science and Technology (INST), Mohali. The system was engineered to meet the specific requirements of magneto-optic experiments, enabling laser-based characterization under controlled magnetic fields.",
//           "The complexity of the electromagnet involved drilling a bore at the center of the pole pieces for optical access. The user needed to send a laser through the center holes for Magneto-Optic experiments."
//         ]
//       },
//       {
//         type: "subtitle",
//         title: "Setup Details"
//       },
//       {
//         type: "content",
//         content: [
//           "• Datasheet created with Gaussmeter and transverse probes for checking field uniformity",
//           "• The electromagnet features straight, perfectly aligned holes along the axis of the magnetic pole pieces",
//           "• Final installation of the electromagnet along with the water chiller for cooling of the coils"
//         ]
//       },
//       {
//         type: "features-grid",
//         title: "Key Features",
//         items: [
//           { icon: Eye, title: "Optical Access", desc: "Precision-drilled holes through pole pieces for laser beam transmission." },
//           { icon: Magnet, title: "High Field Uniformity", desc: "Validated with Gaussmeter and transverse probes." },
//           { icon: Droplets, title: "Water Cooling", desc: "Integrated chiller for continuous high-current operation." },
//           { icon: Settings, title: "Seamless Integration", desc: "Compact design for lab-scale experiments." }
//         ]
//       },
//       {
//         type: "documentation",
//         title: "Documentation",
//         content: "Document: Manual of EMCT2 with optical access compatibility."
//       },
//       {
//         type: "conclusion",
//         content: "The electromagnet with optical access at INST Mohali demonstrates Cryonano's capability to deliver custom-engineered solutions for advanced research. The system supports magneto-optical studies, enabling innovative experiments in condensed matter physics and materials science."
//       }
//     ]
//   }
// ];

// // ==========================================
// // SECTION RENDERER COMPONENT
// // ==========================================
// const renderSection = (section: any, index: number) => {
//   const key = index;

//   switch (section.type) {
//     case "overview":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-3">
//           {section.content.map((p: string, idx: number) => (
//             <p key={idx} className="text-base">{p}</p>
//           ))}
//         </motion.div>
//       );

//     case "features":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mt-3">
//           <h4 className="font-bold text-slate-800 mb-2 text-sm">{section.title}</h4>
//           <ul className="space-y-1.5">
//             {section.items.map((item: string, idx: number) => (
//               <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
//                 <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
//                 <span className="font-medium">{item}</span>
//               </li>
//             ))}
//           </ul>
//           {section.note && (
//             <p className="text-sm text-slate-500 italic mt-3 border-t border-slate-100 pt-3">{section.note}</p>
//           )}
//         </motion.div>
//       );

//     case "subtitle":
//       return (
//         <motion.h3 key={key} variants={fadeInUp} className="text-lg lg:text-xl font-extrabold text-slate-900 mt-6 mb-3">
//           {section.title}
//         </motion.h3>
//       );

//     case "content":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-2">
//           {section.content.map((p: string, idx: number) => (
//             <p key={idx} className="text-base">{p}</p>
//           ))}
//         </motion.div>
//       );

//     case "bullets":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="mt-2 mb-3">
//           {section.title && <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>}
//           <ul className="space-y-1.5">
//             {section.items.map((item: string, idx: number) => (
//               <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
//                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                 <span className="font-medium">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       );

//     case "publications":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
//           <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
//           <ul className="space-y-1 text-sm text-slate-700 font-medium">
//             {section.items.map((item: string, idx: number) => (
//               <li key={idx}>• {item}</li>
//             ))}
//           </ul>
//           {section.note && (
//             <p className="text-sm text-slate-600 mt-2 border-t border-primary/10 pt-2">{section.note}</p>
//           )}
//         </motion.div>
//       );

//     case "benefits":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-primary/20 shadow-sm mt-4">
//           <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
//           <div className="grid sm:grid-cols-2 gap-3">
//             {section.items.map((item: any, idx: number) => (
//               <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
//                 <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-bold text-slate-800 text-sm">{item.title}</p>
//                   <p className="text-xs text-slate-500">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       );

//     case "design-grid":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="grid sm:grid-cols-2 gap-3 mt-3">
//           {section.items.map((item: any, idx: number) => (
//             <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <h5 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h5>
//               <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </motion.div>
//       );

//     case "features-grid":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="mt-4">
//           <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//             {section.items.map((item: any, idx: number) => {
//               const Icon = item.icon || CheckCircle2;
//               return (
//                 <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
//                   <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
//                     <Icon className="w-4.5 h-4.5 text-primary" />
//                   </div>
//                   <h5 className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</h5>
//                   <p className="text-xs text-slate-600">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//       );

//     case "applications":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mt-4">
//           <h4 className="text-base font-extrabold text-slate-900 mb-2.5">{section.title}</h4>
//           <div className="flex flex-wrap gap-2">
//             {section.items.map((item: string, idx: number) => (
//               <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
//                 {item}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       );

//     case "steps":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="mt-3">
//           <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
//           <div className="space-y-3">
//             {section.steps.map((step: any, idx: number) => (
//               <div key={idx} className="flex gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//                 <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                   <span className="text-sm font-extrabold text-primary">{idx + 1}</span>
//                 </div>
//                 <div>
//                   <h5 className="font-bold text-slate-800 text-sm">{step.title}</h5>
//                   <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       );

//     case "publication":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
//           <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
//           <p className="text-sm text-slate-600 mb-2">{section.content}</p>
//           <p className="text-sm font-semibold text-slate-800 italic">"{section.citation}"</p>
//         </motion.div>
//       );

//     case "documentation":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
//           <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
//           <p className="text-sm text-slate-600">{section.content}</p>
//         </motion.div>
//       );

//     case "conclusion":
//       return (
//         <motion.div key={key} variants={fadeInUp} className="bg-white border-l-4 border-primary rounded-r-xl p-5 mt-4 shadow-sm">
//           <div className="flex items-start gap-3">
//             <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
//             <div>
//               <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-widest mb-1.5">Conclusion</h4>
//               <p className="text-slate-700 leading-relaxed text-sm">{section.content}</p>
//             </div>
//           </div>
//         </motion.div>
//       );

//     default:
//       return null;
//   }
// };

// // ==========================================
// // MAIN COMPONENT
// // ==========================================
// export function ApplicationNotesPage() {
//   const [activeNote, setActiveNote] = useState<string | null>(null);
//   const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.getAttribute('data-note-id');
//             if (id) setActiveNote(id);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     Object.values(sectionRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
//       <Navbar />

//       {/* ========================================== */}
//       {/* HERO SECTION - Reduced Whitespace */}
//       {/* ========================================== */}
//       <section className="relative pt-20 pb-12 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100 overflow-hidden">
//         <motion.div
//           animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none"
//         />

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="absolute top-4 left-4 z-20"
//         >
//           <Link to="/" className="flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group text-xs">
//             <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
//             <span>Back to Home</span>
//           </Link>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="show"
//           className="relative z-10 max-w-4xl mx-auto"
//         >
//           <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm">
//             <BookOpen className="w-3 h-3" /> Research Library
//           </motion.div>
//           <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
//             Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Notes</span>
//           </motion.h1>
//           <motion.p variants={fadeInUp} className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
//             Detailed application notes written by staff and institutional users,
//             demonstrating the deployment of CRYONANO instruments in cutting-edge
//             quantum and cryogenic research.
//           </motion.p>

//           {/* Quick Stats */}
//           <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-5 mt-5">
//             <div className="flex items-center gap-2 text-sm text-slate-600">
//               <Award className="w-4 h-4 text-primary" />
//               <span className="font-bold">{applicationNotes.length}</span>
//               <span>Application Notes</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-slate-600">
//               <Users className="w-4 h-4 text-primary" />
//               <span className="font-bold">3+</span>
//               <span>Institutions</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-slate-600">
//               <Globe className="w-4 h-4 text-primary" />
//               <span className="font-bold">5+</span>
//               <span>Publications</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ========================================== */}
//       {/* APPLICATION NOTES - Reduced Whitespace */}
//       {/* ========================================== */}
//       {applicationNotes.map((note, idx) => {
//         const Icon = note.icon;
//         const isEven = idx % 2 === 0;

//         return (
//           <section
//             key={note.id}
//             ref={(el) => { sectionRefs.current[note.id] = el; }}
//             data-note-id={note.id}
//             className={`relative z-10 py-10 lg:py-12 ${isEven ? 'bg-white' : 'bg-slate-50/50'} border-t border-slate-100`}
//           >
//             <div className="max-w-6xl mx-auto px-6">
//               {/* Header */}
//               <motion.div
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, margin: "-30px" }}
//                 variants={staggerContainer}
//                 className="mb-6"
//               >
//                 <motion.div variants={fadeInUp} className="flex items-start gap-3 mb-3">
//                   <div className="rounded-lg bg-primary/10 p-2.5 shrink-0 border border-primary/20">
//                     <Icon className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
//                       {note.title}
//                     </h2>
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mt-1">
//                       <span className="text-sm font-bold text-primary">{note.author}</span>
//                       <span className="text-xs text-slate-400 hidden sm:block">•</span>
//                       <span className="text-sm text-slate-500">{note.affiliation}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>

//               {/* Sections */}
//               <div className="space-y-3">
//                 {note.sections.map((section: any, sectionIdx: number) => {
//                   return renderSection(section, sectionIdx);
//                 })}
//               </div>

//               {/* Separator between notes */}
//               {idx < applicationNotes.length - 1 && (
//                 <div className="mt-8 pt-6 border-t border-slate-200">
//                   <div className="flex items-center gap-4">
//                     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
//                     <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
//                       <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                       Next Application
//                       <span className="w-1.5 h-1.5 rounded-full bg-primary" />
//                     </span>
//                     <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </section>
//         );
//       })}

//       {/* ========================================== */}
//       {/* CTA SECTION - with Contact Us Button */}
//       {/* ========================================== */}
//       <section className="relative z-10 py-12 bg-primary/5 border-t border-primary/10">
//         <div className="container text-center max-w-3xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="w-14 h-14 mx-auto bg-white rounded-xl border border-primary/20 flex items-center justify-center mb-4 shadow-sm">
//               <BookOpen className="w-7 h-7 text-primary" />
//             </div>
//             <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
//               Have a Research Application?
//             </h2>
//             <p className="text-slate-600 text-base mb-5 max-w-xl mx-auto">
//               Share your application note with us or contact our engineering team
//               for custom solutions tailored to your experiments.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link to="/products">
//                 <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
//                   <Microscope className="w-4 h-4" />
//                   Explore Products
//                 </button>
//               </Link>
//               <a href="mailto:contact@cryonano.com">
//                 <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
//                   <Mail className="w-4 h-4" />
//                   Submit Your Application Note
//                 </button>
//               </a>
//               <Link to="/contact">
//                 <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary text-slate-700 font-extrabold text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default ApplicationNotesPage;



import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Activity, ThermometerSnowflake, Layers, Magnet,
  CheckCircle2, FileText, ArrowLeft, Sparkles,
  Award, Users, Globe, Mail, Microscope,
  Target, Move, Eye, Layers2, ShieldCheck, Radio, Settings,
  Droplets, Download
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/AuthModal";

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

// ==========================================
// DATA – Application Notes
// ==========================================
const applicationNotes = [
  {
    id: "ivs-quantum-hall",
    title: "Gate Voltage Control and I–V Spectroscopy in Fractional Quantum Hall Systems Using an Isolated Voltage Source",
    author: "Prof. Biswajit Karmakar",
    affiliation: "Condensed Matter Physics Division, Saha Institute of Nuclear Physics (SINP), Kolkata",
    icon: Activity,
    sections: [
      {
        type: "overview",
        content: [
          "Precision voltage control is critical in low-temperature condensed matter experiments, especially in studies involving quantum Hall systems and graphene devices. This application note highlights the use of a 16-bit Digital-to-Analog Isolated Voltage Source (IVS) from Cryonano Labs in enabling high-fidelity gate control and low-noise electrical measurements."
        ]
      },
      {
        type: "features",
        title: "The IVS provides:",
        items: [
          "Four independent, truly bipolar outputs (±10 V each)",
          "Computer-controlled operation (LabVIEW compatible)",
          "Output current up to 10 mA",
          "Electrical isolation to eliminate ground-loop noise"
        ],
        note: "These features make it particularly suitable for sensitive quantum transport experiments."
      },
      {
        type: "split-section",
        layout: "text-image",
        title: "1. Gate Voltage Control in Quantum Hall Systems",
        content: [
          "In multi-terminal quantum Hall devices, electrostatic gates are used to selectively control and probe edge modes in a two-dimensional electron system."
        ],
        bulletsTitle: "Using the IVS:",
        bullets: [
          "Multiple gates can be independently biased with high precision",
          "Stable and noise-free voltage control enables accurate tuning of edge mode interactions",
          "The system allows detailed investigation of equilibration lengths in both integer and fractional quantum Hall regimes"
        ],
        image: "/images/ApplicationNotes/Gate Voltage Control.avif",
        caption: "Figure 1: Gates g1–g4 are controlled by IVS for separately contacting edge modes"
      },
      {
        type: "publications",
        title: "This setup has contributed to significant experimental results, leading to publications in:",
        items: [
          "Physical Review Letters (2020)",
          "Physical Review B (2021)"
        ],
        note: "The low-noise and isolated outputs of the IVS are essential in maintaining signal integrity in these delicate measurements."
      },
      {
        type: "split-section",
        layout: "image-text",
        title: "2. Gate Control in Graphene Devices",
        content: [
          "Graphene devices are typically fabricated on SiO₂/n-Si substrates, where the silicon layer acts as a global back gate to tune carrier density.",
          "The IVS proves highly effective for this application:"
        ],
        bullets: [
          "Provides stable back-gate voltage control",
          "Multiple channels can be connected in series to achieve up to ±40 V output",
          "Isolation minimizes interference and improves measurement reliability"
        ],
        contentAfterBullets: [
          "This makes the IVS a practical and flexible solution for graphene transport experiments, including carrier density tuning and field-effect measurements.",
          "Representative graphene device studies can be found in: ACS Applied Nano Materials (2022)"
        ],
        image: "/images/ApplicationNotes/Graphene device for H2 gas sensing.avif",
        caption: "Figure 2: Graphene device for H₂ gas sensing"
      },
      {
        type: "split-section",
        layout: "text-image",
        title: "3. I–V Spectroscopy in Fractional Quantum Hall Systems",
        content: [
          "I–V spectroscopy is a key technique for probing electronic transport properties, particularly through differential conductance (dI/dV) measurements.",
          "Typical setup includes: DC voltage excitation (provided by IVS) and AC modulation for lock-in detection."
        ],
        bulletsTitle: "Key advantages of using the IVS in this context:",
        bullets: [
          "Low-noise 16-bit resolution enables precise voltage sweeps",
          "Electrical isolation eliminates ground loops",
          "Stable DC bias improves accuracy in differential conductance measurements"
        ],
        contentAfterBullets: [
          "This results in clean, high-resolution spectroscopic data, critical for studying fractional quantum Hall physics."
        ],
        image: "/images/ApplicationNotes/e2h versus DC voltage bias.avif",
        caption: "Figure 3: Differential transmittance conductance (e²/h) versus DC voltage bias"
      },
      {
        type: "benefits",
        title: "Key Benefits of the IVS in Research Applications",
        items: [
          { title: "True Bipolar Outputs", desc: "Flexible biasing with ±10 V per channel" },
          { title: "Scalable Voltage Range", desc: "Up to ±40 V via series configuration" },
          { title: "Low‑Noise Performance", desc: "16‑bit resolution for sensitive measurements" },
          { title: "Complete Isolation", desc: "Eliminates ground‑loop interference" },
          { title: "Multi‑Channel Operation", desc: "Four independent channels for complex devices" }
        ]
      },
      {
        type: "conclusion",
        content: "The Isolated Voltage Source (IVS) from Cryonano Labs has proven to be a versatile and reliable tool for advanced condensed matter experiments. Its combination of precision, low noise, and isolation makes it particularly well-suited for: Quantum Hall edge state studies, Graphene device characterization, High-resolution I–V spectroscopy. Its integration into experimental setups enables reproducible and high-quality measurements, supporting cutting-edge research in quantum transport."
      }
    ]
  },
  {
    id: "helium-dipstick",
    title: "Helium Dipstick with DC, RF, and Integrated Magnet for Characterization of Josephson Junctions",
    author: "Dr. Deep Talukdar",
    affiliation: "Cryonano Labs",
    icon: ThermometerSnowflake,
    sections: [
      {
        type: "overview",
        content: [
          "Characterizing Josephson junctions at cryogenic temperatures requires a carefully engineered environment that combines low-noise DC measurements, RF signal delivery, and controlled magnetic fields.",
          "This application note describes the development of a custom Helium Dipstick system designed to operate at 4 K, enabling precise I–V characterization of Josephson junction devices under: DC bias conditions, RF excitation (up to 18 GHz), and External magnetic field (~0.1 Tesla).",
          "The system integrates electrical isolation, thermal management, and electromagnetic shielding to ensure high-fidelity measurements."
        ]
      },
      {
        type: "subtitle",
        title: "Objective"
      },
      {
        type: "content",
        content: [
          "The goal was to design and fabricate a dipstick system capable of:",
          "• Performing low-noise I–V measurements of Josephson junctions at 4 K",
          "• Supporting simultaneous DC, RF, and magnetic field inputs",
          "• Providing a modular and scalable wiring architecture for complex devices"
        ]
      },
      {
        type: "content-with-media",
        subtitle: "Measurement Requirements",
        content: [
          "The system was designed to meet the following specifications:",
          "• 24 DC measurement lines",
          "• Integrated 24-channel cryogenic low-pass DC-RF filters",
          "• Support for both: in-plane measurements, out-of-plane measurements",
          "• Signal breakout via: Fisher connectors → 24 BNC outputs",
          "• Integrated room temperature RF filtering",
          "This configuration enables clean signal routing while minimizing noise and interference."
        ],
        // UPDATED: Now rendering three images side-by-side
        multiImages: [
          "/images/ApplicationNotes/DC LINES_MAGNET.avif",
          "/images/ApplicationNotes/DC-RF filter_handmade.avif",
          "/images/ApplicationNotes/image3.avif"
        ]
      },
      {
        type: "content-with-media",
        subtitle: "System Design and Implementation",
        content: [
          "To meet the above requirements, a robust and modular dipstick architecture was developed:"
        ],
        wideImage: "/images/ApplicationNotes/PORTS.avif"
      },
      {
        type: "design-grid",
        items: [
          {
            title: "Mechanical & Structural Design",
            desc: "Fabricated using a stainless steel dipstick for mechanical stability and cryogenic compatibility. Three independent stainless steel tubes used to isolate: DC measurement lines, Heater and temperature sensor (Cernox) lines, and Magnet DC supply lines."
          },
          {
            title: "RF Integration",
            desc: "A semi-rigid RF cable was routed from the top as an antenna. Supports RF signal injection up to 18 GHz. Enables high-frequency excitation for Josephson junction studies."
          },
          {
            title: "Filtering & Thermal Management",
            desc: "Integrated 24-line cryogenic low-pass filters for noise suppression. Wire thermalization bobbins used inline to reduce thermal load. Additional room temperature RF filters for improved signal integrity."
          },
          {
            title: "Sample Mounting",
            desc: "Custom gold-plated OFC (Oxygen-Free Copper) sample holder. Supports both: in-plane chip carriers, out-of-plane chip carriers. Ensures excellent thermal conductivity and electrical stability."
          },
          {
            title: "Wiring & Connectivity",
            desc: "BeCu (Beryllium Copper) wire looms used for reliable cryogenic connections. Designed with appropriate breaks for thermal anchoring and strain relief. External breakout via Fisher connectors to 24 BNC connectors."
          },
          {
            title: "Magnetic Shielding",
            desc: "Mu-metal shielding around the sample enclosure. Sealed using indium gaskets. Protects against ambient magnetic interference, including Earth's magnetic field."
          }
        ]
      },
      {
        type: "features-grid",
        title: "Key Features and Advantages",
        items: [
          { icon: ShieldCheck, title: "24-Channel Filtered DC", desc: "24 lines with integrated cryogenic low‑pass filters for clean measurements." },
          { icon: Radio, title: "RF up to 18 GHz", desc: "Semi‑rigid RF cable routed as an antenna for high‑frequency excitation." },
          { icon: Magnet, title: "Integrated Magnet (~0.1 T)", desc: "On‑board magnetic field source for Josephson junction characterization." },
          { icon: ThermometerSnowflake, title: "Superior Thermal Anchoring", desc: "Wire thermalization bobbins and BeCu looms minimize heat load." },
          { icon: Settings, title: "Modular & Scalable", desc: "Three isolated stainless steel tubes separate DC, heater/sensor, and magnet lines." },
          { icon: Layers, title: "EMI Shielding", desc: "Mu‑metal shield with indium gaskets guards against ambient magnetic interference." }
        ]
      },
      {
        type: "applications",
        title: "Applications",
        items: [
          "Josephson junction I–V characterization",
          "Superconducting device research",
          "Quantum transport experiments",
          "RF-driven quantum systems",
          "Low-temperature electronics testing"
        ]
      },
      {
        type: "conclusion",
        content: "The developed Helium Dipstick system provides a highly integrated and noise-optimized platform for Josephson junction characterization at cryogenic temperatures. By combining DC, RF, and magnetic field capabilities within a single architecture, it enables precise and reproducible measurements essential for superconducting and quantum device research."
      }
    ]
  },
  {
    id: "2d-transfer",
    title: "2D Transfer of Materials – Process and Dynamics",
    author: "Mr. Sourav Paul (with inputs from Mr. Vineet Pandey)",
    affiliation: "Materials Science Centre, IIT Kharagpur",
    icon: Layers,
    sections: [
      {
        type: "overview",
        content: [
          "The fabrication of high-quality 2D heterostructures requires precise control over alignment, temperature, and interfacial contact during transfer. This application note outlines a universal dry transfer method implemented using the 2D Transfer System from Cryonano Labs, enabling reliable and reproducible stacking of 2D materials such as graphene, h-BN, and TMDs.",
          "Using this system, multiple heterostructures have been successfully fabricated with high precision, leading to published research on interlayer coupling and stacking order in layered materials."
        ]
      },
      {
        type: "image",
        url: "/images/ApplicationNotes/2D TRANSFER (a-g).avif",
        expanded: true // UPDATED: Will trigger much larger height bounds
      },
      {
        type: "subtitle",
        title: "System Configuration"
      },
      {
        type: "content",
        content: [
          "The 2D transfer setup consists of two primary stages:",
          "• XYθ Stage: Enables precise lateral positioning and rotational alignment",
          "• XYZ Stage: Equipped with a cantilever-mounted plate for controlled vertical motion",
          "This configuration allows fine control over alignment and contact during the transfer process under an optical microscope."
        ]
      },
      {
        type: "subtitle",
        title: "Transfer Method: Universal Dry Transfer (PDMS/PPC)"
      },
      {
        type: "content",
        content: [
          "The process uses a Polydimethylsiloxane (PDMS) / Polypropylene Carbonate (PPC) based dry transfer technique, widely adopted for clean and controlled stacking of 2D materials."
        ]
      },
      {
        type: "steps",
        title: "Step-by-Step Process",
        steps: [
          {
            title: "Stamp Preparation and Alignment",
            description: "A hemispherical PDMS stamp is prepared on a cleaned coverslip, followed by spin-coating of PPC on the PDMS surface. The PDMS/PPC stamp is then mounted upside down and aligned under the microscope with the target sample placed on the substrate (typically SiO₂/Si)."
            // UPDATED: image removed
          },
          {
            title: "Pickup of h-BN Flake",
            description: "A few-layer hexagonal boron nitride (h-BN) flake is first picked up from the substrate. Pickup temperature: ~65°C. Substrate: SiO₂/Si. During this step, real-time optical monitoring is critical to observe: initial contact between stamp and flake, interface formation, and successful pickup of the flake onto the PDMS/PPC stamp.",
            image: "/images/ApplicationNotes/image a and b.avif"
          },
          {
            title: "Pickup of Additional 2D Materials",
            description: "Other exfoliated 2D materials such as: Graphene, Transition Metal Dichalcogenides (TMDs) are picked up sequentially using the PDMS/PPC/h-BN stack. Pickup temperature: ~55°C. Requires precise alignment of the new flake with the existing stack. This step enables controlled stacking and formation of complex heterostructures."
          },
          {
            title: "Final Transfer and Release",
            description: "The assembled stack (hBN / 2D material / hBN) is transferred onto a target substrate. Transfer temperature: ~85°C. The stack is aligned and brought into contact with the substrate. The cantilever stage is slowly retracted, allowing the PDMS/PPC to detach. Post-transfer cleaning: Acetone rinse to remove PPC residue, followed by IPA cleaning. This results in a clean, well-defined heterostructure.",
            image: "/images/ApplicationNotes/STEP 1 to 4.avif"
          }
        ]
      },
      {
        type: "subtitle",
        title: "Process Dynamics and Key Observations"
      },
      {
        type: "content",
        content: [
          "A critical aspect of successful transfer is real-time optical monitoring during the contact phase.",
          "• As the stamp approaches the substrate, interference fringes appear",
          "• These fringes indicate proximity and uniformity of contact",
          "• The transition from partial to full contact must be carefully controlled",
          "Understanding these live optical micrographs is essential for: Avoiding bubbles and contaminants, Ensuring uniform stacking, and Achieving high-quality interfaces."
        ]
      },
      {
        type: "features-grid",
        title: "Key Advantages of the Cryonano 2D Transfer System",
        items: [
          { icon: Target, title: "High‑Precision Alignment (XYθ)", desc: "Precise lateral and rotational control for accurate stacking." },
          { icon: Move, title: "Stable Vertical Motion (XYZ)", desc: "Cantilever stage ensures smooth, controlled approach and retraction." },
          { icon: Layers, title: "Dry Transfer Compatibility", desc: "Optimized for PDMS/PPC technique for clean, contamination‑free transfer." },
          { icon: Eye, title: "Real‑Time Microscopy", desc: "Live optical monitoring to observe interference fringes and contact quality." },
          { icon: Layers2, title: "Complex Heterostructures", desc: "Enables fabrication of multi‑layer stacks with diverse 2D materials." }
        ]
      },
      {
        type: "applications",
        title: "Applications",
        items: [
          "Van der Waals heterostructure fabrication",
          "Graphene-based devices",
          "TMD-based optoelectronics",
          "Quantum materials research",
          "Layered material interface studies"
        ]
      },
      {
        type: "publication",
        title: "Research Output",
        content: "The described process has contributed to published work:",
        citation: "\"Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂\" — Sourav Paul et al., Journal of Applied Physics, 133, 114301 (2023)"
      },
      {
        type: "conclusion",
        content: "The Cryonano 2D Transfer System enables precise, repeatable, and contamination-free assembly of 2D heterostructures using a universal dry transfer method. Control over alignment, temperature, and interfacial dynamics—combined with real-time optical feedback—ensures high-quality device fabrication for advanced materials research."
      }
    ]
  },
  {
    id: "electromagnet-optical",
    title: "Electromagnet with Optical Access — Installation at INST Mohali",
    author: "Cryonano Labs Engineering Team",
    affiliation: "Institute of Nano Science and Technology (INST), Mohali",
    icon: Magnet,
    sections: [
      {
        type: "overview",
        content: [
          "A custom electromagnet with optical access was designed and installed at the Institute of Nano Science and Technology (INST), Mohali. The system was engineered to meet the specific requirements of magneto-optic experiments, enabling laser-based characterization under controlled magnetic fields.",
          "The complexity of the electromagnet involved drilling a bore at the center of the pole pieces for optical access. The user needed to send a laser through the center holes for Magneto-Optic experiments."
        ]
      },
      {
        type: "image",
        url: "/images/ApplicationNotes/electromagnet.avif"
      },
      {
        type: "subtitle",
        title: "Setup Details"
      },
      {
        type: "content",
        content: [
          "• Datasheet created with Gaussmeter and transverse probes for checking field uniformity",
          "• The electromagnet features straight, perfectly aligned holes along the axis of the magnetic pole pieces",
          "• Final installation of the electromagnet along with the water chiller for cooling of the coils"
        ]
      },
      {
        type: "image",
        url: "/images/ApplicationNotes/installation image.avif"
      },
      {
        type: "features-grid",
        title: "Key Features",
        items: [
          { icon: Eye, title: "Optical Access", desc: "Precision-drilled holes through pole pieces for laser beam transmission." },
          { icon: Magnet, title: "High Field Uniformity", desc: "Validated with Gaussmeter and transverse probes." },
          { icon: Droplets, title: "Water Cooling", desc: "Integrated chiller for continuous high-current operation." },
          { icon: Settings, title: "Seamless Integration", desc: "Compact design for lab-scale experiments." }
        ]
      },
      {
        type: "pdf-download",
        title: "Electromagnet Optical Access Manual",
        desc: "Document: Manual of EMCT2 with optical access compatibility.",
        url: "/images/ApplicationNotes/EMCT2T_optical access_INST MOhali_Manual (1).pdf",
        filename: "EMCT2_Optical_Manual.pdf"
      },
      {
        type: "conclusion",
        content: "The electromagnet with optical access at INST Mohali demonstrates Cryonano's capability to deliver custom-engineered solutions for advanced research. The system supports magneto-optical studies, enabling innovative experiments in condensed matter physics and materials science."
      }
    ]
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export function ApplicationNotesPage() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const { token } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingPdf, setPendingPdf] = useState<{ url: string; filename: string } | null>(null);

  const handleDownloadPdf = (url: string, filename: string) => {
    if (token) {
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setPendingPdf({ url, filename });
      setShowAuthModal(true);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    if (pendingPdf) {
      handleDownloadPdf(pendingPdf.url, pendingPdf.filename);
      setPendingPdf(null);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-note-id');
            if (id) setActiveNote(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Section Renderer
  const renderSection = (section: any, index: number) => {
    const key = index;

    switch (section.type) {
      case "overview":
        return (
          <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-3">
            {section.content.map((p: string, idx: number) => (
              <p key={idx} className="text-base">{p}</p>
            ))}
          </motion.div>
        );

      case "split-section":
        const isImgLeft = section.layout === 'image-text';
        return (
          <motion.div key={key} variants={fadeInUp} className={`flex flex-col lg:flex-row gap-8 items-center mt-8 mb-8 ${isImgLeft ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 space-y-4 w-full">
              {section.title && <h3 className="font-display text-lg lg:text-xl font-extrabold text-slate-900">{section.title}</h3>}
              {section.content && section.content.map((p: string, i: number) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base">{p}</p>
              ))}
              
              {section.bullets && (
                <div className="mt-2 mb-3">
                  {section.bulletsTitle && <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.bulletsTitle}</h4>}
                  <ul className="space-y-1.5">
                    {section.bullets.map((b: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {section.contentAfterBullets && section.contentAfterBullets.map((p: string, i: number) => (
                <p key={`after-${i}`} className="text-slate-600 leading-relaxed text-base">{p}</p>
              ))}
            </div>
            
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50/50 flex justify-center items-center w-full p-4 shadow-sm h-full min-h-[250px]">
                <img src={section.image} alt={section.caption || section.title} className="w-full max-h-[350px] object-contain rounded-md" />
              </div>
              {section.caption && (
                <div className="w-full mt-2 bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-center shadow-sm">
                  <p className="text-xs text-slate-500 italic text-center font-medium">{section.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        );

      case "content-with-media":
        return (
          <motion.div key={key} variants={fadeInUp} className="mb-10">
            {section.subtitle && <h3 className="font-display text-lg font-semibold text-slate-900 mt-6 mb-3">{section.subtitle}</h3>}
            <div className="space-y-3">
              {section.content.map((p: string, pi: number) => (
                <p key={pi} className="text-slate-600 leading-relaxed text-base">{p}</p>
              ))}
            </div>
            
            {section.multiImages && (
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                {section.multiImages.map((img: string, i: number) => (
                  <div key={i} className="flex-1 rounded-xl overflow-hidden border border-slate-200 bg-slate-50/50 flex justify-center items-center p-3 shadow-sm">
                    <img src={img} className="w-full max-h-[250px] object-contain rounded-md" />
                  </div>
                ))}
              </div>
            )}

            {section.wideImage && (
              <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50/50 flex justify-center items-center p-4 shadow-sm w-full">
                <img src={section.wideImage} className="w-full max-h-[400px] object-contain rounded-md" />
              </div>
            )}
          </motion.div>
        );

      case "image":
        return (
          <motion.div key={key} variants={fadeInUp} className={`mt-6 mb-4 flex flex-col items-center w-full`}>
            <div className={`rounded-xl overflow-hidden border border-slate-200 bg-slate-50/50 flex justify-center items-center w-full ${section.expanded ? 'p-2' : 'p-4'} shadow-sm`}>
              <img src={section.url} alt={section.caption || "Application Note Visual"} className={`w-full ${section.expanded ? 'max-h-[600px] lg:max-h-[800px]' : 'max-h-[400px]'} object-contain rounded-md`} />
            </div>
            {section.caption && (
              <div className="w-full mt-2 bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-center shadow-sm">
                <p className="text-xs text-slate-500 italic text-center font-medium">{section.caption}</p>
              </div>
            )}
          </motion.div>
        );

      case "pdf-download":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:border-primary/40 transition-colors">
            <div>
              <h4 className="font-bold text-slate-800 mb-1 text-sm">{section.title}</h4>
              {section.desc && <p className="text-sm text-slate-600">{section.desc}</p>}
            </div>
            <button
              onClick={() => handleDownloadPdf(section.url, section.filename || "Manual.pdf")}
              className="inline-flex shrink-0 items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </motion.div>
        );

      case "features":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mt-3">
            <h4 className="font-bold text-slate-800 mb-2 text-sm">{section.title}</h4>
            <ul className="space-y-1.5">
              {section.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            {section.note && (
              <p className="text-sm text-slate-500 italic mt-3 border-t border-slate-100 pt-3">{section.note}</p>
            )}
          </motion.div>
        );

      case "subtitle":
        return (
          <motion.h3 key={key} variants={fadeInUp} className="text-lg lg:text-xl font-extrabold text-slate-900 mt-6 mb-3">
            {section.title}
          </motion.h3>
        );

      case "content":
        return (
          <motion.div key={key} variants={fadeInUp} className="prose max-w-none text-slate-600 leading-relaxed space-y-2">
            {section.content.map((p: string, idx: number) => (
              <p key={idx} className="text-base">{p}</p>
            ))}
          </motion.div>
        );

      case "bullets":
        return (
          <motion.div key={key} variants={fadeInUp} className="mt-2 mb-3">
            {section.title && <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>}
            <ul className="space-y-1.5">
              {section.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );

      case "publications":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
            <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
            <ul className="space-y-1 text-sm text-slate-700 font-medium">
              {section.items.map((item: string, idx: number) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
            {section.note && (
              <p className="text-sm text-slate-600 mt-2 border-t border-primary/10 pt-2">{section.note}</p>
            )}
          </motion.div>
        );

      case "benefits":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-primary/20 shadow-sm mt-4">
            <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {section.items.map((item: any, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "design-grid":
        return (
          <motion.div key={key} variants={fadeInUp} className="grid sm:grid-cols-2 gap-3 mt-3">
            {section.items.map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h5>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        );

      case "features-grid":
        return (
          <motion.div key={key} variants={fadeInUp} className="mt-4">
            <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.items.map((item: any, idx: number) => {
                const Icon = item.icon || CheckCircle2;
                return (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <h5 className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</h5>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );

      case "applications":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mt-4">
            <h4 className="text-base font-extrabold text-slate-900 mb-2.5">{section.title}</h4>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        );

      case "steps":
        return (
          <motion.div key={key} variants={fadeInUp} className="mt-3">
            <h4 className="text-base font-extrabold text-slate-900 mb-3">{section.title}</h4>
            <div className="space-y-4">
              {section.steps.map((step: any, idx: number) => {
                const isWideImage = idx === 1 || idx === 3;
                const isImageLeft = idx === 1;

                return (
                  <div key={idx} className={`flex flex-col gap-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${isImageLeft ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                    <div className={`flex gap-3 ${isWideImage ? 'sm:w-1/3' : 'flex-1'}`}>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-extrabold text-primary">{idx + 1}</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm">{step.title}</h5>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">{step.description}</p>
                      </div>
                    </div>
                    
                    {step.image && (
                      <div className={`shrink-0 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center p-3 ${isWideImage ? 'flex-1 min-h-[250px]' : 'w-full sm:w-1/3 min-h-[150px]'}`}>
                         <img src={step.image} alt={step.title} className="w-full h-full object-contain rounded drop-shadow-sm" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        );

      case "publication":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-3">
            <h4 className="font-bold text-slate-800 mb-1.5 text-sm">{section.title}</h4>
            <p className="text-sm text-slate-600 mb-2">{section.content}</p>
            <p className="text-sm font-semibold text-slate-800 italic">"{section.citation}"</p>
          </motion.div>
        );

      case "conclusion":
        return (
          <motion.div key={key} variants={fadeInUp} className="bg-white border-l-4 border-primary rounded-r-xl p-5 mt-4 shadow-sm">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-widest mb-1.5">Conclusion</h4>
                <p className="text-slate-700 leading-relaxed text-sm">{section.content}</p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section className="relative pt-20 pb-12 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-4 left-4 z-20"
        >
          <Link to="/" className="flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group text-xs">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm">
            <BookOpen className="w-3 h-3" /> Research Library
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Notes</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Detailed application notes written by staff and institutional users,
            demonstrating the deployment of CRYONANO instruments in cutting-edge
            quantum and cryogenic research.
          </motion.p>

          {/* Quick Stats */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-5 mt-5">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-bold">{applicationNotes.length}</span>
              <span>Application Notes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-bold">3+</span>
              <span>Institutions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Globe className="w-4 h-4 text-primary" />
              <span className="font-bold">5+</span>
              <span>Publications</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* APPLICATION NOTES */}
      {/* ========================================== */}
      {applicationNotes.map((note, idx) => {
        const Icon = note.icon;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={note.id}
            ref={(el) => { sectionRefs.current[note.id] = el; }}
            data-note-id={note.id}
            className={`relative z-10 py-10 lg:py-12 ${isEven ? 'bg-white' : 'bg-slate-50/50'} border-t border-slate-100`}
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* Header */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                variants={staggerContainer}
                className="mb-6"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 shrink-0 border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
                      {note.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 mt-1">
                      <span className="text-sm font-bold text-primary">{note.author}</span>
                      <span className="text-xs text-slate-400 hidden sm:block">•</span>
                      <span className="text-sm text-slate-500">{note.affiliation}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Sections */}
              <div className="space-y-3">
                {note.sections.map((section: any, sectionIdx: number) => {
                  return renderSection(section, sectionIdx);
                })}
              </div>

              {/* Separator between notes */}
              {idx < applicationNotes.length - 1 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Next Application
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* ========================================== */}
      {/* CTA SECTION */}
      {/* ========================================== */}
      <section className="relative z-10 py-12 bg-primary/5 border-t border-primary/10">
        <div className="container text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-14 h-14 mx-auto bg-white rounded-xl border border-primary/20 flex items-center justify-center mb-4 shadow-sm">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              Have a Research Application?
            </h2>
            <p className="text-slate-600 text-base mb-5 max-w-xl mx-auto">
              Share your application note with us or contact our engineering team
              for custom solutions tailored to your experiments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                  <Microscope className="w-4 h-4" />
                  Explore Products
                </button>
              </Link>
              <a href="mailto:contact@cryonano.com">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                  <Mail className="w-4 h-4" />
                  Submit Your Application Note
                </button>
              </a>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border-2 border-slate-200 hover:border-primary/50 hover:text-primary text-slate-700 font-extrabold text-sm transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Authentication Modal for PDF Download */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        onSuccess={handleAuthSuccess} 
      />
    </div>
  );
}

export default ApplicationNotesPage;