import WhySection from "../_components/WhySection";
import CategoriesSection from "../_components/CategoriesSection";
import { LandingSection } from "../_components/LandingSection";
import HowSection from "../_components/HowSection";
import About from "../_components/About";
import ReadySection from "../_components/ReadySection";
import FeaturedFieldsSection from "../_components/FeaturedFieldsSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <WhySection />
      <CategoriesSection />
      <HowSection />
      <FeaturedFieldsSection />
      <About />
      <ReadySection />
    </>
  );
}
