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
