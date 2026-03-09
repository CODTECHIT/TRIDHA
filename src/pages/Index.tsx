import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { SEO } from "@/components/SEO";

import { motion } from "framer-motion";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      <SEO
        title="Best Interior Designers in Hyderabad | Modular Kitchen & Turnkey Interiors"
        description="THRIDHA Architects & Interior Designers provide premium residential and office interior design services in Hyderabad. Experts in modular kitchens, wardrobes, and false ceilings. Book a free consultation."
        keywords="Interior Designers Hyderabad, Modular Kitchen Hyderabad, Office Interiors Gachibowli, Residential Interior Design Hyderabad, Turnkey Interior Solutions"
      />
      <Navbar onOpenContact={openContact} />
      <main>
        <HeroSection onOpenContact={openContact} />
        <AboutSection />
        <ServicesSection onOpenContact={openContact} />
        <PropertiesSection onOpenContact={openContact} />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection onOpenContact={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <FloatingContactButton onClick={openContact} />
    </motion.div>
  );
};

export default Index;
