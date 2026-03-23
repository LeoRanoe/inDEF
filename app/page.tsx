import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ValuesSection from "@/components/sections/ValuesSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyIndefSection from "@/components/sections/WhyIndefSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ValuesSection />
        <QuoteSection />
        <ProjectsSection />
        <WhyIndefSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
