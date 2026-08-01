// import { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ArrowLeft,
//   Search,
//   Download,
//   Eye,
//   FileText,
//   X,
//   ChevronDown,
//   Sparkles,
//   Mail,
//   HelpCircle,
//   BookOpen,
//   Calendar,
//   Clock,
//   ExternalLink,
//   File,
//   FolderOpen,
//   ChevronUp,
//   CheckCircle2
// } from 'lucide-react';
// import { Navbar } from '../components/Navbar';
// import { Footer } from '../components/Footer';
// import { PageTransition } from '../components/PageTransition';
// import { Link } from 'react-router-dom';
// import { productsData } from '@/data/products';

// // ==========================================
// // ANIMATION VARIANTS
// // ==========================================
// const fadeInUp = {
//   hidden: { opacity: 0, y: 15 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: 'easeOut' as const }
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.05 }
//   }
// };

// // ==========================================
// // GENERATE DOWNLOAD ITEMS
// // ==========================================
// const generateDownloadItems = () => {
//   const items: any[] = [];

//   Object.entries(productsData).forEach(([key, product]) => {
//     if (!product.datasheetUrl) return;

//     const fileType = product.datasheetUrl.split('.').pop()?.toUpperCase() || 'PDF';
//     const imageUrl = product.heroImage || null;

//     items.push({
//       id: `download-${key}`,
//       title: product.name || product.hero?.title || key,
//       description: product.subtitle || product.hero?.subtitle || '',
//       category: product.category || 'Documentation',
//       fileType: fileType,
//       fileSize: '1.8 MB',
//       date: '2024',
//       version: 'v1.0',
//       url: product.datasheetUrl,
//       image: imageUrl,
//       featured: false,
//     });
//   });

//   // Mark first 4 items as featured
//   items.forEach((item, idx) => {
//     if (idx < 4) item.featured = true;
//   });

//   return items.sort((a, b) => a.category.localeCompare(b.category));
// };

// // ==========================================
// // MAIN COMPONENT
// // ==========================================
// export function DownloadsPage() {
//   const [selectedCategory, setSelectedCategory] = useState('All Resources');
//   const [selectedDocType, setSelectedDocType] = useState('All Types');
//   const [selectedYear, setSelectedYear] = useState('All Years');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedItem, setSelectedItem] = useState<any>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

//   const downloadItems = generateDownloadItems();

//   // Get unique values for filters
//   const allCategories = useMemo(() => {
//     const cats = Array.from(new Set(downloadItems.map((item) => item.category)));
//     return ['All Resources', ...cats];
//   }, [downloadItems]);

//   const allDocTypes = useMemo(() => {
//     const types = Array.from(new Set(downloadItems.map((item) => item.fileType)));
//     return ['All Types', ...types];
//   }, [downloadItems]);

//   const allYears = useMemo(() => {
//     const years = Array.from(new Set(downloadItems.map((item) => item.date)));
//     return ['All Years', ...years.sort()];
//   }, [downloadItems]);

//   // Featured items (first 4)
//   const featuredItems = downloadItems.filter((item) => item.featured);

//   // Apply filters
//   const filteredItems = downloadItems.filter((item) => {
//     const matchesCategory = selectedCategory === 'All Resources' || item.category === selectedCategory;
//     const matchesDocType = selectedDocType === 'All Types' || item.fileType === selectedDocType;
//     const matchesYear = selectedYear === 'All Years' || item.date === selectedYear;
//     const matchesSearch =
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesDocType && matchesYear && matchesSearch;
//   });

//   // Group filtered items by category
//   const groupedItems: { [key: string]: any[] } = {};
//   filteredItems.forEach((item) => {
//     if (!groupedItems[item.category]) groupedItems[item.category] = [];
//     groupedItems[item.category].push(item);
//   });

//   const toggleCategoryExpand = (category: string) => {
//     setExpandedCategories((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(category)) {
//         newSet.delete(category);
//       } else {
//         newSet.add(category);
//       }
//       return newSet;
//     });
//   };

//   const isCategoryExpanded = (category: string) => expandedCategories.has(category);

//   const handlePreview = (item: any) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   const handleDownload = (item: any) => {
//     const link = document.createElement('a');
//     link.href = item.url;
//     link.download = `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}.${item.fileType.toLowerCase()}`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const resetFilters = () => {
//     setSelectedCategory('All Resources');
//     setSelectedDocType('All Types');
//     setSelectedYear('All Years');
//     setSearchQuery('');
//     setExpandedCategories(new Set());
//   };

//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-primary/20 selection:text-primary">
//         <Navbar />

//         {/* ========================================== */}
//         {/* HERO SECTION – Compact */}
//         {/* ========================================== */}
//         <section className="relative pt-14 pb-8 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100 overflow-hidden">
//           <motion.div
//             animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
//             transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
//             className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none"
//           />

//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="absolute top-3 left-3 z-20"
//           >
//             <Link to="/" className="flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group text-[10px]">
//               <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
//               <span>Back</span>
//             </Link>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="relative z-10 max-w-4xl mx-auto"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase mb-3 shadow-sm">
//               <BookOpen className="w-3 h-3" /> Resource Center
//             </motion.div>
//             <motion.h1 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
//               Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Center</span>
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-sm text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
//               Access product brochures, technical datasheets, application notes, software manuals, installation documents, archived resources, and engineering documentation for the complete Cryonano portfolio.
//             </motion.p>
//           </motion.div>
//         </section>

//         {/* ========================================== */}
//         {/* SEARCH & FILTERS – Dropdown + Apply Button */}
//         {/* ========================================== */}
//         <section className="py-4 bg-white border-b border-slate-100">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex flex-col md:flex-row md:items-end gap-4">
//               {/* Search */}
//               <div className="flex-1 min-w-[200px]">
//                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Search</label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <input
//                     type="text"
//                     placeholder="Search documentation..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
//                   />
//                 </div>
//               </div>

//               {/* Category Dropdown */}
//               <div className="w-full md:w-48">
//                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Category</label>
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="w-full px-3 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
//                 >
//                   {allCategories.map((cat) => (
//                     <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Document Type Dropdown */}
//               <div className="w-full md:w-48">
//                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Document Type</label>
//                 <select
//                   value={selectedDocType}
//                   onChange={(e) => setSelectedDocType(e.target.value)}
//                   className="w-full px-3 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
//                 >
//                   {allDocTypes.map((type) => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Year Dropdown */}
//               <div className="w-full md:w-40">
//                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Year</label>
//                 <select
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(e.target.value)}
//                   className="w-full px-3 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
//                 >
//                   {allYears.map((year) => (
//                     <option key={year} value={year}>{year}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Apply / Reset Buttons */}
//               <div className="flex gap-2 items-end pb-0.5">
//                 <button
//                   onClick={() => {
//                     // Apply filters – collapse all categories
//                     setExpandedCategories(new Set());
//                   }}
//                   className="px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center gap-2"
//                 >
//                   <CheckCircle2 className="w-4 h-4" /> Apply
//                 </button>
//                 <button
//                   onClick={resetFilters}
//                   className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all"
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* FEATURED DOWNLOADS */}
//         {/* ========================================== */}
//         {featuredItems.length > 0 && (
//           <section className="py-8 bg-white border-b border-slate-100">
//             <div className="max-w-7xl mx-auto px-6">
//               <h2 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
//                 <Sparkles className="w-4 h-4 text-primary" /> Featured Downloads
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {featuredItems.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
//                   >
//                     {/* Image */}
//                     <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
//                       {item.image ? (
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
//                           <FileText className="w-10 h-10" />
//                         </div>
//                       )}
//                       <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-primary border border-primary/20">
//                         {item.fileType}
//                       </div>
//                     </div>
//                     <div className="p-3">
//                       <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{item.title}</h3>
//                       <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
//                       <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
//                         <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
//                         <span className="flex items-center gap-1"><Download className="w-3 h-3" /> {item.fileSize}</span>
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button
//                           onClick={() => handlePreview(item)}
//                           className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
//                         >
//                           <Eye className="w-3.5 h-3.5" /> Preview
//                         </button>
//                         <button
//                           onClick={() => handleDownload(item)}
//                           className="flex-1 px-2.5 py-1.5 rounded-lg bg-primary text-white font-bold text-xs hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
//                         >
//                           <Download className="w-3.5 h-3.5" /> Download
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ========================================== */}
//         {/* ALL DOWNLOADS – Expandable Categories */}
//         {/* ========================================== */}
//         <section className="py-8 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-extrabold text-slate-900">All Downloads</h2>
//               <span className="text-sm text-slate-500">{filteredItems.length} items</span>
//             </div>

//             {filteredItems.length === 0 ? (
//               <div className="text-center py-10 text-slate-500">
//                 <FileText className="w-10 h-10 mx-auto mb-2 text-slate-300" />
//                 <p className="font-medium">No documents found matching your criteria.</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {Object.entries(groupedItems).map(([category, items]) => {
//                   const isExpanded = isCategoryExpanded(category);
//                   const displayItems = isExpanded ? items : items.slice(0, 4);
//                   const hasMore = items.length > 4;

//                   return (
//                     <div key={category} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
//                       {/* Category Header */}
//                       <button
//                         onClick={() => toggleCategoryExpand(category)}
//                         className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors"
//                       >
//                         <div className="flex items-center gap-2">
//                           <FolderOpen className="w-4 h-4 text-primary" />
//                           <span className="font-extrabold text-slate-900 text-sm">
//                             {category}
//                           </span>
//                           <span className="text-xs font-normal text-slate-500">({items.length} resources)</span>
//                         </div>
//                         <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
//                           {isExpanded ? 'Show Less' : 'Show More'}
//                           {isExpanded ? (
//                             <ChevronUp className="w-4 h-4" />
//                           ) : (
//                             <ChevronDown className="w-4 h-4" />
//                           )}
//                         </div>
//                       </button>

//                       {/* Category Items – with thumbnail column */}
//                       <div className="overflow-x-auto">
//                         <table className="w-full text-sm border-collapse">
//                           <thead>
//                             <tr className="border-b border-slate-200 bg-white text-left">
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Image</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Type</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Title</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Product</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Version</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Size</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Updated</th>
//                               <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px] text-right">Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {displayItems.map((item) => (
//                               <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
//                                 <td className="py-2 px-3">
//                                   <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
//                                     {item.image ? (
//                                       <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         className="w-full h-full object-cover"
//                                       />
//                                     ) : (
//                                       <FileText className="w-5 h-5 text-slate-400" />
//                                     )}
//                                   </div>
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary">
//                                     <File className="w-3 h-3" /> {item.fileType}
//                                   </span>
//                                 </td>
//                                 <td className="py-2 px-3 font-semibold text-slate-800 text-sm">{item.title}</td>
//                                 <td className="py-2 px-3 text-slate-600 text-sm">{item.description}</td>
//                                 <td className="py-2 px-3 text-slate-600 text-sm">{item.version}</td>
//                                 <td className="py-2 px-3 text-slate-600 text-sm">{item.fileSize}</td>
//                                 <td className="py-2 px-3 text-slate-600 text-sm">{item.date}</td>
//                                 <td className="py-2 px-3 text-right">
//                                   <div className="flex items-center justify-end gap-1.5">
//                                     <button
//                                       onClick={() => handlePreview(item)}
//                                       className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 font-bold text-[10px] hover:bg-slate-50 transition-colors flex items-center gap-1"
//                                     >
//                                       <Eye className="w-3 h-3" /> Preview
//                                     </button>
//                                     <button
//                                       onClick={() => handleDownload(item)}
//                                       className="px-2.5 py-1 rounded-lg bg-primary text-white font-bold text-[10px] hover:bg-red-700 transition-colors flex items-center gap-1"
//                                     >
//                                       <Download className="w-3 h-3" /> Download
//                                     </button>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>

//                       {/* Show more/less toggle at bottom of table if not expanded */}
//                       {hasMore && !isExpanded && (
//                         <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-center">
//                           <button
//                             onClick={() => toggleCategoryExpand(category)}
//                             className="text-xs font-bold text-primary hover:text-red-700 transition-colors flex items-center gap-1.5 mx-auto"
//                           >
//                             Show {items.length - 4} more items <ChevronDown className="w-3.5 h-3.5" />
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* FAQ & HELP – Compact */}
//         {/* ========================================== */}
//         <section className="py-8 bg-slate-50/50 border-t border-slate-100">
//           <div className="max-w-4xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
//                   <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
//                 </h3>
//                 <ul className="space-y-2 text-sm text-slate-600">
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                     Can't find a document you're looking for?
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                     Need archived datasheets or older versions?
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                     Looking for firmware, drivers, or software?
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
//                     Need custom drawings or system documentation?
//                   </li>
//                 </ul>
//                 <div className="mt-4">
//                   <Link to="/contact">
//                     <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-xs transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
//                       Talk to an Engineer
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
//                   <Mail className="w-5 h-5 text-primary" /> Need Help Finding the Right Document?
//                 </h3>
//                 <p className="text-sm text-slate-600 mb-3">
//                   Our engineering team is here to help you identify the correct technical resources for your research or industrial application.
//                 </p>
//                 <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
//                   <p className="text-sm text-slate-700 font-medium">Ready to Discuss Your Requirements?</p>
//                   <p className="text-xs text-slate-500 mt-1">Connect with our engineering team for product selection, system integration, or customized measurement solutions.</p>
//                   <Link to="/contact">
//                     <button className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all">
//                       Contact Us <ExternalLink className="w-3.5 h-3.5" />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* PREVIEW MODAL with Product Image – Centered */}
//         {/* ========================================== */}
//         <AnimatePresence>
//           {isModalOpen && selectedItem && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//               />
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
//                 className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto"
//               >
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="absolute top-3 right-3 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>

//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Product Image */}
//                   <div className="md:w-1/3 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center p-4">
//                     {selectedItem.image ? (
//                       <img
//                         src={selectedItem.image}
//                         alt={selectedItem.title}
//                         className="w-full h-auto object-contain max-h-64"
//                       />
//                     ) : (
//                       <FileText className="w-20 h-20 text-slate-300" />
//                     )}
//                   </div>

//                   {/* Details */}
//                   <div className="md:w-2/3">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//                         <FileText className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-extrabold text-slate-900">{selectedItem.title}</h3>
//                         <p className="text-sm text-slate-500">{selectedItem.description}</p>
//                       </div>
//                     </div>

//                     <div className="bg-slate-50 rounded-xl p-4 space-y-3 mt-3">
//                       <div className="grid grid-cols-2 gap-3 text-sm">
//                         <div>
//                           <span className="text-slate-500 font-medium">Version</span>
//                           <p className="text-slate-900 font-bold">{selectedItem.version || 'v1.0'}</p>
//                         </div>
//                         <div>
//                           <span className="text-slate-500 font-medium">File Type</span>
//                           <p className="text-slate-900 font-bold">{selectedItem.fileType}</p>
//                         </div>
//                         <div>
//                           <span className="text-slate-500 font-medium">File Size</span>
//                           <p className="text-slate-900 font-bold">{selectedItem.fileSize}</p>
//                         </div>
//                         <div>
//                           <span className="text-slate-500 font-medium">Last Updated</span>
//                           <p className="text-slate-900 font-bold">{selectedItem.date}</p>
//                         </div>
//                       </div>
//                       <div>
//                         <span className="text-slate-500 font-medium">Category</span>
//                         <p className="text-slate-700 text-sm mt-0.5">{selectedItem.category}</p>
//                       </div>
//                     </div>

//                     <div className="mt-5 flex justify-end gap-3">
//                       <button
//                         onClick={() => setIsModalOpen(false)}
//                         className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
//                       >
//                         Close Preview
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleDownload(selectedItem);
//                           setIsModalOpen(false);
//                         }}
//                         className="px-4 py-2 rounded-lg bg-primary hover:bg-red-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
//                       >
//                         <Download className="w-4 h-4" /> Download {selectedItem.fileType}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           )}
//         </AnimatePresence>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// }

// export default DownloadsPage;






import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Download,
  Eye,
  FileText,
  X,
  ChevronDown,
  Sparkles,
  Mail,
  HelpCircle,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  File,
  FolderOpen,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { productsData } from '@/data/products';
import { useAuth } from '@/context/AuthContext';
import { AuthModal } from '@/components/AuthModal';

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

// ==========================================
// GENERATE DOWNLOAD ITEMS
// ==========================================
const generateDownloadItems = () => {
  const items: any[] = [];

  Object.entries(productsData).forEach(([key, product]) => {
    if (!product.datasheetUrl) return;

    const fileType = product.datasheetUrl.split('.').pop()?.toUpperCase() || 'PDF';
    const imageUrl = product.heroImage || null;

    items.push({
      id: `download-${key}`,
      title: product.name || product.hero?.title || key,
      description: product.subtitle || product.hero?.subtitle || '',
      category: product.category || 'Documentation',
      fileType: fileType,
      fileSize: '1.8 MB',
      date: '2024',
      version: 'v1.0',
      url: product.datasheetUrl,
      image: imageUrl,
      featured: false,
    });
  });

  // Mark first 4 items as featured
  items.forEach((item, idx) => {
    if (idx < 4) item.featured = true;
  });

  return items.sort((a, b) => a.category.localeCompare(b.category));
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Resources');
  const [selectedDocType, setSelectedDocType] = useState('All Types');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // --- AUTHENTICATION STATES ---
  const { token } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<any>(null);

  const downloadItems = generateDownloadItems();

  // Get unique values for filters
  const allCategories = useMemo(() => {
    const cats = Array.from(new Set(downloadItems.map((item) => item.category)));
    return ['All Resources', ...cats];
  }, [downloadItems]);

  const allDocTypes = useMemo(() => {
    const types = Array.from(new Set(downloadItems.map((item) => item.fileType)));
    return ['All Types', ...types];
  }, [downloadItems]);

  const allYears = useMemo(() => {
    const years = Array.from(new Set(downloadItems.map((item) => item.date)));
    return ['All Years', ...years.sort()];
  }, [downloadItems]);

  // Featured items (first 4)
  const featuredItems = downloadItems.filter((item) => item.featured);

  // Apply filters
  const filteredItems = downloadItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All Resources' || item.category === selectedCategory;
    const matchesDocType = selectedDocType === 'All Types' || item.fileType === selectedDocType;
    const matchesYear = selectedYear === 'All Years' || item.date === selectedYear;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDocType && matchesYear && matchesSearch;
  });

  // Group filtered items by category
  const groupedItems: { [key: string]: any[] } = {};
  filteredItems.forEach((item) => {
    if (!groupedItems[item.category]) groupedItems[item.category] = [];
    groupedItems[item.category].push(item);
  });

  const toggleCategoryExpand = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const isCategoryExpanded = (category: string) => expandedCategories.has(category);

  const handlePreview = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // --- ACTUAL DOWNLOAD LOGIC ---
  const executeDownload = (item: any) => {
    const link = document.createElement('a');
    link.href = item.url;
    link.download = `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}.${item.fileType.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- AUTHENTICATION INTERCEPT LOGIC ---
  const handleDownload = (item: any) => {
    if (token) {
      executeDownload(item);
    } else {
      setPendingDownload(item);
      setShowAuthModal(true);
    }
  };

  const handleAuthSuccess = () => {
    if (pendingDownload) {
      executeDownload(pendingDownload);
    }
    setShowAuthModal(false);
    setPendingDownload(null);
  };

  const resetFilters = () => {
    setSelectedCategory('All Resources');
    setSelectedDocType('All Types');
    setSelectedYear('All Years');
    setSearchQuery('');
    setExpandedCategories(new Set());
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-primary/20 selection:text-primary">
        <Navbar />

        {/* ========================================== */}
        {/* HERO SECTION – Compact */}
        {/* ========================================== */}
        <section className="relative pt-14 pb-8 px-6 text-center z-10 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-100 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-bl from-primary/5 to-transparent blur-3xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-3 left-3 z-20"
          >
            <Link to="/" className="flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-white hover:shadow-md transition-all group text-[10px]">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black tracking-widest uppercase mb-3 shadow-sm">
              <BookOpen className="w-3 h-3" /> Resource Center
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Center</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-sm text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
              Access product brochures, technical datasheets, application notes, software manuals, installation documents, archived resources, and engineering documentation for the complete Cryonano portfolio.
            </motion.p>
          </motion.div>
        </section>

        {/* ========================================== */}
        {/* SEARCH & FILTERS – Dropdown + Apply Button */}
        {/* ========================================== */}
        <section className="py-4 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
              {/* Search */}
              <div className="flex-1 min-w-[200px]">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="w-full md:w-48">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  {allCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Document Type Dropdown */}
              <div className="w-full md:w-48">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Document Type</label>
                <select
                  value={selectedDocType}
                  onChange={(e) => setSelectedDocType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  {allDocTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Year Dropdown */}
              <div className="w-full md:w-40">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border-2 border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  {allYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Apply / Reset Buttons */}
              <div className="flex gap-2 items-end pb-0.5">
                <button
                  onClick={() => {
                    // Apply filters – collapse all categories
                    setExpandedCategories(new Set());
                  }}
                  className="px-5 py-2.5 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" /> Apply
                </button>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* FEATURED DOWNLOADS */}
        {/* ========================================== */}
        {featuredItems.length > 0 && (
          <section className="py-8 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Featured Downloads
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                          <FileText className="w-10 h-10" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-primary border border-primary/20">
                        {item.fileType}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.description}</p>
                      <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                        <span className="flex items-center gap-1"><Download className="w-3 h-3" /> {item.fileSize}</span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => handlePreview(item)}
                          className="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" /> Preview
                        </button>
                        <button
                          onClick={() => handleDownload(item)}
                          className="flex-1 px-2.5 py-1.5 rounded-lg bg-primary text-white font-bold text-xs hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
                        >
                          <Download className="w-3.5 h-3.5" /> Download
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* ALL DOWNLOADS – Expandable Categories */}
        {/* ========================================== */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-extrabold text-slate-900">All Downloads</h2>
              <span className="text-sm text-slate-500">{filteredItems.length} items</span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-10 text-slate-500">
                <FileText className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                <p className="font-medium">No documents found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(groupedItems).map(([category, items]) => {
                  const isExpanded = isCategoryExpanded(category);
                  const displayItems = isExpanded ? items : items.slice(0, 4);
                  const hasMore = items.length > 4;

                  return (
                    <div key={category} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                      {/* Category Header */}
                      <button
                        onClick={() => toggleCategoryExpand(category)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <FolderOpen className="w-4 h-4 text-primary" />
                          <span className="font-extrabold text-slate-900 text-sm">
                            {category}
                          </span>
                          <span className="text-xs font-normal text-slate-500">({items.length} resources)</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                          {isExpanded ? 'Show Less' : 'Show More'}
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {/* Category Items – with thumbnail column */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-slate-200 bg-white text-left">
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Image</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Type</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Title</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Product</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Version</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Size</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Updated</th>
                              <th className="py-2 px-3 font-bold text-slate-600 uppercase tracking-wider text-[10px] text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayItems.map((item) => (
                              <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                <td className="py-2 px-3">
                                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                                    {item.image ? (
                                      <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <FileText className="w-5 h-5 text-slate-400" />
                                    )}
                                  </div>
                                </td>
                                <td className="py-2 px-3">
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary">
                                    <File className="w-3 h-3" /> {item.fileType}
                                  </span>
                                </td>
                                <td className="py-2 px-3 font-semibold text-slate-800 text-sm">{item.title}</td>
                                <td className="py-2 px-3 text-slate-600 text-sm">{item.description}</td>
                                <td className="py-2 px-3 text-slate-600 text-sm">{item.version}</td>
                                <td className="py-2 px-3 text-slate-600 text-sm">{item.fileSize}</td>
                                <td className="py-2 px-3 text-slate-600 text-sm">{item.date}</td>
                                <td className="py-2 px-3 text-right">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      onClick={() => handlePreview(item)}
                                      className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-600 font-bold text-[10px] hover:bg-slate-50 transition-colors flex items-center gap-1"
                                    >
                                      <Eye className="w-3 h-3" /> Preview
                                    </button>
                                    <button
                                      onClick={() => handleDownload(item)}
                                      className="px-2.5 py-1 rounded-lg bg-primary text-white font-bold text-[10px] hover:bg-red-700 transition-colors flex items-center gap-1"
                                    >
                                      <Download className="w-3 h-3" /> Download
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Show more/less toggle at bottom of table if not expanded */}
                      {hasMore && !isExpanded && (
                        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-center">
                          <button
                            onClick={() => toggleCategoryExpand(category)}
                            className="text-xs font-bold text-primary hover:text-red-700 transition-colors flex items-center gap-1.5 mx-auto"
                          >
                            Show {items.length - 4} more items <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ========================================== */}
        {/* FAQ & HELP – Compact */}
        {/* ========================================== */}
        <section className="py-8 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    Can't find a document you're looking for?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    Need archived datasheets or older versions?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    Looking for firmware, drivers, or software?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    Need custom drawings or system documentation?
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/contact">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-red-700 text-white font-extrabold text-xs transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                      Talk to an Engineer
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" /> Need Help Finding the Right Document?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Our engineering team is here to help you identify the correct technical resources for your research or industrial application.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <p className="text-sm text-slate-700 font-medium">Ready to Discuss Your Requirements?</p>
                  <p className="text-xs text-slate-500 mt-1">Connect with our engineering team for product selection, system integration, or customized measurement solutions.</p>
                  <Link to="/contact">
                    <button className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border-2 border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all">
                      Contact Us <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* PREVIEW MODAL with Product Image – Centered */}
        {/* ========================================== */}
        <AnimatePresence>
          {isModalOpen && selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="md:w-1/3 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center p-4">
                    {selectedItem.image ? (
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-auto object-contain max-h-64"
                      />
                    ) : (
                      <FileText className="w-20 h-20 text-slate-300" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900">{selectedItem.title}</h3>
                        <p className="text-sm text-slate-500">{selectedItem.description}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 space-y-3 mt-3">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-slate-500 font-medium">Version</span>
                          <p className="text-slate-900 font-bold">{selectedItem.version || 'v1.0'}</p>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">File Type</span>
                          <p className="text-slate-900 font-bold">{selectedItem.fileType}</p>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">File Size</span>
                          <p className="text-slate-900 font-bold">{selectedItem.fileSize}</p>
                        </div>
                        <div>
                          <span className="text-slate-500 font-medium">Last Updated</span>
                          <p className="text-slate-900 font-bold">{selectedItem.date}</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 font-medium">Category</span>
                        <p className="text-slate-700 text-sm mt-0.5">{selectedItem.category}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-3">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                      >
                        Close Preview
                      </button>
                      <button
                        onClick={() => {
                          handleDownload(selectedItem);
                          setIsModalOpen(false);
                        }}
                        className="px-4 py-2 rounded-lg bg-primary hover:bg-red-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
                      >
                        <Download className="w-4 h-4" /> Download {selectedItem.fileType}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* AUTH MODAL INJECTION */}
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => {
            setShowAuthModal(false);
            setPendingDownload(null);
          }} 
          onSuccess={handleAuthSuccess} 
        />

        <Footer />
      </div>
    </PageTransition>
  );
}

export default DownloadsPage;