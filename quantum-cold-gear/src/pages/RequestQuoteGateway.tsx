import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  ArrowUpRight,
  Microscope,
  Factory,
  Cpu,
  Zap,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const RequestQuoteGateway = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />
        <main>
          {/* Breadcrumb */}
          <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
            <div className="container py-2.5 flex items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to Home
              </Link>
              <span className="text-slate-300 font-bold">/</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Request a Quote</span>
            </div>
          </div>

          {/* Hero */}
          <section className="relative py-5 bg-white overflow-hidden">
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
                  Get Started
                </motion.div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700">Quote</span>
                </h1>

                <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Please select the category that best matches your requirement.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Two cards */}
          <section className="container py-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link to="/request-quote/research" className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Microscope className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-extrabold text-slate-900 mb-2">Research</h2>
                  <p className="text-slate-500 text-sm">
                    Quantum hardware, cryogenics, microscopes, electromagnets, and more.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    Get Started <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>

              <Link to="/request-quote/industry" className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Factory className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-extrabold text-slate-900 mb-2">Industry</h2>
                  <p className="text-slate-500 text-sm">
                    Power electronics, converters, inverters, and industrial solutions.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    Get Started <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default RequestQuoteGateway;