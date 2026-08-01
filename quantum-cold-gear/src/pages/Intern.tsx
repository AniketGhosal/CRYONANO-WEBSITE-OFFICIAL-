import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap } from "lucide-react";

const Intern = () => {
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
              <GraduationCap className="w-10 h-10 text-primary" />
              <h1 className="font-display text-4xl font-extrabold text-slate-900">Intern with Us</h1>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Gain hands-on experience in quantum technology, cryogenics, and power electronics.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Why Intern at Cryonano?</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span> Work on real-world projects with industry experts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span> Access to state-of-the-art labs and equipment.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span> Mentorship from leading scientists and engineers.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span> Opportunity to contribute to publications and patents.
                </li>
              </ul>
              <p className="mt-6 text-slate-500">Applications are open year-round. Send your CV to <a href="mailto:intern@cryonano.com" className="text-primary hover:underline">intern@cryonano.com</a></p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Intern;