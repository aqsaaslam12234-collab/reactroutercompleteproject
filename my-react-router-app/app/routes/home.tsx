import ContactUs from "~/components/ContactUs";
import ContentSection from "~/components/ContentSection";
import { FeaturesSection } from "~/components/FeatureSection";
import Footer from "~/components/Footer";
import { Header } from "~/components/Header";
import { HeroSection } from "~/components/HeroSection";
import { PricingSection } from "~/components/PricingSection";
import TestimonialSection from "~/components/TestimonialSection";

const home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <PricingSection />
      <TestimonialSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default home;
