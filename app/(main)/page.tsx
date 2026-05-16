// import WhySection from "../_components/WhySection";
// import CategoriesSection from "../_components/CategoriesSection";
// import { LandingSection } from "../_components/LandingSection";
// import HowSection from "../_components/HowSection";
// import About from "../_components/About";
// import ReadySection from "../_components/ReadySection";
// import FeaturedFieldsSection from "../_components/FeaturedFieldsSection";

// export default function Home() {
//   return (
//     <>
//       <LandingSection />
//       <WhySection />
//       <CategoriesSection />
//       <HowSection />
//       <FeaturedFieldsSection />
//       <About />
//       <ReadySection />
//     </>
//   );
// }
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { LandingSection } from "../_components/LandingSection";
import WhySection from "../_components/WhySection";
import CategoriesSection from "../_components/CategoriesSection";
import HowSection from "../_components/HowSection";
import FeaturedFieldsSection from "../_components/FeaturedFieldsSection";
import ReadySection from "../_components/ReadySection";
import About from "../_components/About";
import Footer from "../_components/Footer";

import { MouseEffect } from "../_components/MouseEffect";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
      <MouseEffect />
      {/* Global Background Effects */}
      <div className="noise" />
      <div className="fixed inset-0 spotlight pointer-events-none z-40 opacity-50" />


      <main>
        <LandingSection />
        <WhySection />
        <CategoriesSection />
        <HowSection />
        <FeaturedFieldsSection />
        <About />
        <ReadySection />
      </main>

      <Footer />
    </div>
  );
}
