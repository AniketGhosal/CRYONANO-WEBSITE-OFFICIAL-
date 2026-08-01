import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { ArrowLeft, Video } from "lucide-react";

const ProductVideos = () => {
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
              <Video className="w-10 h-10 text-primary" />
              <h1 className="font-display text-4xl font-extrabold text-slate-900">Product Videos</h1>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Explore our products in action. Product demonstrations and tutorials.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 mb-4">
                  [Video Placeholder]
                </div>
                <h3 className="font-display font-bold text-slate-900">QuantumVolt™ DAC Overview</h3>
                <p className="text-sm text-slate-500">Isolated voltage source for quantum transport measurements.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 mb-4">
                  [Video Placeholder]
                </div>
                <h3 className="font-display font-bold text-slate-900">2D Transfer System Demo</h3>
                <p className="text-sm text-slate-500">Deterministic heterostructure stacking with optical control.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProductVideos;