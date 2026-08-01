import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
// import { WhatWeBuild } from "@/components/WhatWeBuild";
import { SynergisticStack } from "@/components/SynergisticStack";
import { FlagshipProduct } from "../components/FlagshipProduct";
import { ProductCategories } from "@/components/ProductCategories";
// import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ImpactSection } from "@/components/ImpactSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition"; // Added our wrapper

// const Index = () => {
//   return (
//     <PageTransition>
//       <div className="min-h-screen bg-background">
//         <Navbar />
//         <main>
//           <HeroSection />
//           {/* <WhatWeBuild /> */}
//           <SynergisticStack />
//           <FlagshipProduct />
//           <ProductCategories />
//           {/* <FeaturedProducts /> */}

         
//           <ImpactSection />
//           <TestimonialSection />
//           <CTASection />
//         </main>
//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">   {/* ← no 'homepage' class */}
        <Navbar />
        <main>
          <HeroSection />
          <SynergisticStack />
          <FlagshipProduct />
          <ProductCategories />
          <ImpactSection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;