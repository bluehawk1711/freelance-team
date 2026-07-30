import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  FeaturedServicesSection,
  PortfolioSection,
  TestimonialsSection,
  ProcessSection,
  ContactSection,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <FeaturedServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
