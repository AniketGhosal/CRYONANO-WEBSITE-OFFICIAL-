import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="container py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-10 h-10 text-primary" />
              <h1 className="font-display text-4xl font-extrabold text-slate-900">Careers at Cryonano</h1>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Join us in building the future of quantum technology and precision instrumentation.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
              <p className="text-slate-600 mb-4">We are always looking for talented engineers, physicists, and innovators.</p>
              <p className="text-slate-500">Current openings will be posted here soon. For inquiries, contact us at <a href="mailto:careers@cryonano.com" className="text-primary hover:underline">careers@cryonano.com</a></p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Careers;