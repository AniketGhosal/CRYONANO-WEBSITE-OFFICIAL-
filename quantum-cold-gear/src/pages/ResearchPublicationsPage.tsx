// import { motion } from "framer-motion";
// import { BookOpen, Quote, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";

// // You can move this array to a separate data file later, but for now, we keep it here to render the full list.
// const allPublications = [
//   { year: "2025", title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe under Pressure", authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui", journal: "Phys. Rev. B 112, 024109" },
//   { year: "2025", title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics", authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das", journal: "Phys. Rev. Applied 23, 054013" },
//   { year: "2025", title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure", authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De", journal: "Phys. Rev. B 111, L140407" },
//   { year: "2023", title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe2", authors: "Sourav Paul et. al.", journal: "Journal of Applied Physics 133, 114301" },
//   { year: "2020", title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes", authors: "Tanmay Maiti, et. al.", journal: "Phys. Rev. Lett. 125, 076802" },
//   { year: "2019", title: "Gap states controlled transmission through 1D metal-nanotube junctions", authors: "U.N. Nandi et. al.", journal: "Carbon, Volume 146, Pages 106-115" }
// ];

// export default function ResearchPublicationsPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">
//       <Navbar />
      
//       {/* Page Header */}
//       <div className="pt-32 pb-16 bg-white border-b border-slate-200">
//         <div className="container max-w-4xl">
//           <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-8">
//             <ArrowLeft className="w-4 h-4" /> Back to Home
//           </Link>
//           <div className="flex items-center gap-4 mb-6">
//             <div className="p-3 rounded-xl bg-primary/10 text-primary">
//               <BookOpen className="w-8 h-8" />
//             </div>
//             <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
//               Research & Publications
//             </h1>
//           </div>
//           <p className="text-xl text-slate-600 leading-relaxed">
//             A comprehensive archive of peer-reviewed literature and groundbreaking research powered by our integrated quantum and cryogenic systems.
//           </p>
//         </div>
//       </div>

//       {/* Full Timeline List */}
//       <div className="flex-grow py-20">
//         <div className="container max-w-4xl">
//           <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
//             {allPublications.map((pub, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.1, duration: 0.5 }}
//                 className="relative group cursor-default"
//               >
//                 <div className="absolute -left-[41px] md:-left-[57px] top-4 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-primary transition-colors duration-300 shadow-sm" />
//                 <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
//                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
//                     <div className="flex-shrink-0 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold text-xl px-5 py-2.5 rounded-xl shadow-inner group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
//                       {pub.year}
//                     </div>
//                     <div className="flex-grow space-y-2">
//                       <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
//                         {pub.title}
//                       </h4>
//                       <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
//                         <p className="text-slate-600 font-medium flex items-center gap-1.5">
//                           <Quote className="w-3.5 h-3.5 text-slate-400" /> {pub.authors}
//                         </p>
//                         <span className="hidden sm:block text-slate-300">•</span>
//                         <p className="text-slate-800 font-bold">
//                           {pub.journal}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, Calendar } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// --- PUBLICATIONS DATA WITH CORRECT URLs ---
const publications = [
  {
    year: "2025",
    title: "Dimensional Crossover and Emergence of Novel Phases in Puckered PdSe₂ under Pressure",
    authors: "T Kundu, S Das, K Dey, B Joseph, C Nayak, M Palit, SK Mahatha, K Dolui",
    journal: "Phys. Rev. B 112, 024109",
    url: "https://journals.aps.org/prb/abstract/10.1103/y5tk-c2qw"
  },
  {
    year: "2025",
    title: "Tailored one-dimensional/two-dimensional van der Waals heterostructures for unified analog and digital electronics",
    authors: "B Karmakar, B Das, S Mandal, R Paramanik, S Maity, T Kundu, S Das",
    journal: "Phys. Rev. Applied 23, 054013",
    url: "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.23.054013"
  },
  {
    year: "2025",
    title: "Electron-Magnon Coupling Mediated Magnetotransport in Antiferromagnetic van der Waals Heterostructure",
    authors: "S Maity, S Das, M Palit, K Dey, B Das, T Kundu, R Paramanik, BK De",
    journal: "Phys. Rev. B 111, L140407",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.L140407"
  },
  {
    year: "2023",
    title: "Raman spectroscopic studies on the evolution of interlayer coupling and stacking order in twisted bilayers and polytypes of WSe₂",
    authors: "Sourav Paul et. al.",
    journal: "Journal of Applied Physics 133, 114301",
    url: "#" // placeholder – replace when available
  },
  {
    year: "2020",
    title: "Magnetic-Field-Dependent Equilibration of Fractional Quantum Hall Edge Modes",
    authors: "Tanmay Maiti, et. al.",
    journal: "Phys. Rev. Lett. 125, 076802",
    url: "https://journals.aps.org/prb/abstract/10.1103/y5tk-c2qw"
  },
  {
    year: "2021",
    title: "Temperature-Dependent Equilibration of Spin Orthogonal Quantum Hall Edge Modes",
    authors: "Tanmay Maiti, Pooja Agarwal, Suvankar Purkait, G.J. Sreejith, Sourin Das, Giorgio Biasiol, Lucia Sorba, Biswajit Karmakar",
    journal: "Phys. Rev. B 104, 085304",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.085304"
  },
  {
    year: "2019",
    title: "Gap states controlled transmission through 1D metal-nanotube junctions",
    authors: "U.N. Nandi et. al.",
    journal: "Carbon, Volume 146, Pages 106-115",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0008622319300958"
  }
];

// Group publications by year
const groupedPublications = publications.reduce((acc, pub) => {
  if (!acc[pub.year]) {
    acc[pub.year] = [];
  }
  acc[pub.year].push(pub);
  return acc;
}, {} as Record<string, typeof publications>);

// Sort years in descending order
const sortedYears = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));

export function ResearchPublications() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section className="relative pt-28 pb-16 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-24 left-6 z-20"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-[11px] font-black tracking-widest uppercase mb-6 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" /> Research Library
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Publications</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            A comprehensive archive of peer-reviewed literature and groundbreaking research powered by our integrated quantum and cryogenic systems.
          </p>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* PUBLICATIONS LIST */}
      {/* ========================================== */}
      <section className="flex-1 py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {sortedYears.map((year, yearIdx) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: yearIdx * 0.1, duration: 0.5 }}
              className="mb-12 last:mb-0"
            >
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-red-500" />
                  <h2 className="text-3xl font-extrabold text-slate-900">{year}</h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-transparent" />
              </div>

              {/* Publications for this year */}
              <div className="space-y-4">
                {groupedPublications[year].map((pub, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="group bg-white rounded-2xl border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-extrabold text-slate-900 group-hover:text-red-700 transition-colors duration-300 leading-snug">
                          {pub.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                          <span className="font-medium">{pub.authors}</span>
                          <span className="hidden sm:inline text-slate-300">•</span>
                          <span className="text-sm font-semibold text-slate-500">{pub.journal}</span>
                        </div>
                      </div>

                      {/* Read More Button - Red, positioned on the right */}
                      <div className="flex-shrink-0">
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all duration-300 ${
                            pub.url !== "#"
                              ? "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-red-500/30 hover:-translate-y-0.5"
                              : "bg-slate-200 text-slate-400 cursor-not-allowed"
                          }`}
                        >
                          <span>Read More</span>
                          {pub.url !== "#" && (
                            <ExternalLink className="w-4 h-4" />
                          )}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ResearchPublications;