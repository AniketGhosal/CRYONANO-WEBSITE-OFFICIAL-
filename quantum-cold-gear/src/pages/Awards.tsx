import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Calendar,
  Users,
  TrendingUp,
  Sparkles,
  Quote,
  ChevronRight,
  Building2,
  Microscope,
  Globe,
  FileText,
  Star,
  Trophy,
  Medal,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Awards = () => {
  const sectionRef = useRef(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Navbar />

        <main>
          {/* Breadcrumb */}
          <div className="bg-white/80 border-b border-slate-200 backdrop-blur-md sticky top-[var(--nav-height)] z-40 shadow-sm">
            <div className="container py-2.5">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>
              <span className="text-xs text-slate-400 mx-2">/</span>
              <span className="text-xs font-bold text-primary">Awards and Recognition</span>
            </div>
          </div>

          {/* ============================== */}
          {/* HERO SECTION */}
          {/* ============================== */}
          <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />

            <div className="container relative z-10 py-12 md:py-16 lg:py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm"
                >
                  <Trophy className="w-4 h-4" />
                  Achievements & Milestones
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
                >
                  Awards &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-600 to-primary">
                    Recognition
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed"
                >
                  Celebrating the achievements and contributions of Cryonano Labs
                  and its leadership in advancing quantum research, cryogenic
                  instrumentation, and indigenous technology development.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* ============================== */}
          {/* AWARDS GRID */}
          {/* ============================== */}
          <section ref={sectionRef} className="container py-12 md:py-16 lg:py-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {/* ============================================ */}
              {/* AWARD 1: Indian Physics Association Bulletin */}
              {/* ============================================ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
                  >
                    <img
                      src="/images/Meet the scientists.png"
                      alt="Dr. Deep Talukdar featured in Indian Physics Association Bulletin"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-primary">
                        <BookOpen className="w-3.5 h-3.5" />
                        Featured Profile
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Recognition</span>
                        <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                          Dr. Deep Talukdar Featured in Indian Physics Association Bulletin
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      Deep Talukdar, Director of Cryonano Labs, has been featured
                      in the Physics News Bulletin published by the Indian
                      Physics Association.
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      The feature highlights his two decades of work in
                      experimental condensed matter physics, nanophotonics,
                      quantum transport, and cryogenic instrumentation, along
                      with his journey as a scientist-entrepreneur contributing
                      to the development of advanced research technologies in
                      India.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 md:p-6 border-l-4 border-primary mb-4">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
                          In the profile, Dr. Talukdar reflects on his passion
                          for physics as a field that enables building and
                          understanding complex systems, while also sharing his
                          interests beyond science, including permaculture,
                          social activism, and long drives.
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      This recognition underscores the growing role of
                      scientist-led innovation in bridging fundamental research
                      and real-world technological applications.
                    </p>

                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-xl p-4 md:p-5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1">
                            From Research to Innovation
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            Through Cryonano Labs, Dr. Talukdar continues to
                            contribute to the advancement of high-precision
                            instrumentation and cryogenic technologies,
                            supporting cutting-edge research across academic and
                            industrial domains.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ============================================ */}
              {/* AWARD 2: TIFAC Annual Report */}
              {/* ============================================ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0 flex-row-reverse">
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
                  >
                    <img
                      src="/images/TIFAC-SIDBI.png"
                      alt="TIFAC-SIDBI Recognition Certificate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-primary">
                        <FileText className="w-3.5 h-3.5" />
                        Government Recognition
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Medal className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Government Recognition</span>
                        <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                          Cryonano Recognized in TIFAC Annual Report for Indigenous Technology Development
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      Cryonano Labs was recognized in the annual report of the
                      Technology Information, Forecasting and Assessment Council
                      for its development of a low-cost, compact, and portable
                      technology, driven by its in-house research and
                      development efforts.
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      This recognition highlights Cryonano's contribution to
                      advancing indigenous innovation in high-technology
                      domains, aligning with national initiatives to strengthen
                      India's capabilities in scientific instrumentation and
                      applied research.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 md:p-6 border-l-4 border-primary mb-4">
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        <span className="font-bold text-primary">Supported under the TIFAC-SIDBI SRIJAN Scheme</span>{" "}
                        — a collaborative program between TIFAC and the Small
                        Industries Development Bank of India. The scheme is
                        designed to promote the development, demonstration, and
                        commercialization of innovative technologies by
                        supporting MSMEs working on high-risk, high-impact
                        projects.
                      </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      Through this initiative, Cryonano was able to accelerate
                      the transition of its technology from research to
                      real-world application, reinforcing its focus on building
                      practical, scalable solutions for scientific and industrial
                      use.
                    </p>

                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-xl p-4 md:p-5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1">
                            Enabling Innovation Through R&D
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            This recognition reflects Cryonano's continued
                            emphasis on:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              In-house technology development
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Cost-effective and scalable engineering solutions
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Bridging the gap between research innovation and
                              commercialization
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ============================================ */}
              {/* AWARD 3: RPGR 2023 */}
              {/* ============================================ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
                  >
                    <img
                      src="/images/RPGR_2023.jpg"
                      alt="RPGR 2023 Conference"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-primary">
                        <Calendar className="w-3.5 h-3.5" />
                        Invited Speaker • 2023
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">International Conference</span>
                        <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                          Dr. Deep Talukdar — Invited Speaker at RPGR 2023
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      Deep Talukdar, Director of Cryonano Labs, was invited as
                      an expert participant at RPGR 2023, a leading international
                      conference focused on graphene and low-dimensional
                      materials, held in Bengaluru.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 md:p-6 border-l-4 border-primary mb-4">
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        The conference brought together prominent scientists,
                        researchers, and industry innovators to discuss
                        cutting-edge developments in quantum transport,
                        nanophotonics, and emerging 2D technologies.
                      </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      Dr. Talukdar contributed insights from his extensive
                      experience in experimental condensed matter physics and
                      cryogenic instrumentation, engaging with global experts on
                      advancing next-generation research infrastructure.
                    </p>

                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-xl p-4 md:p-5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Globe className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1">
                            India's Growing Role
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            His participation highlights both the growing impact
                            of Cryonano Labs and India's expanding role in
                            quantum and nanoscale research ecosystems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* ============================== */}
          {/* RECOGNITION STATS */}
          {/* ============================== */}
          <section className="relative py-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100/20 rounded-full blur-2xl" />
            </div>

            <div className="container relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {[
                  { value: "20+", label: "Years in Physics", icon: Microscope },
                  { value: "3", label: "National & International Recognitions", icon: Award },
                  { value: "1", label: "Government Supported Initiative", icon: Building2 },
                  { value: "1", label: "International Conference Invite", icon: Users },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="font-display text-3xl font-extrabold text-slate-900">{item.value}</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ============================== */}
          {/* CTA SECTION */}
          {/* ============================== */}
          <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5" />

            <div className="container relative z-10 text-center max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                  Driving Innovation,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                    Building Recognition
                  </span>
                </h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  Cryonano Labs continues to push the boundaries of quantum
                  research, cryogenic technology, and indigenous innovation.
                </p>

                <Link to="/about/news" className="inline-block">
                  <button className="group relative px-8 py-4 rounded-xl font-bold text-base text-white bg-primary shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden hover:-translate-y-1">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore More About Us
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
                    />
                  </button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Awards;










