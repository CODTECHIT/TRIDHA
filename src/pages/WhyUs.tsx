import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { SEO } from "@/components/SEO";

const WhyUs = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Why Choose Us | Top Interior Designers in Hyderabad"
                description="Discover why THRIDHA is the preferred choice for home and office interiors in Hyderabad. 10+ years experience, 500+ projects, and luxury turnkey solutions."
                keywords="Top Interior Designers Hyderabad, Professional Design Team, Luxury Interior Quality, Turnkey Project Benefits"
            />
            <Navbar onOpenContact={openContact} />
            <main className="pt-20">
                <WhyChooseSection />
            </main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
            <FloatingContactButton onClick={openContact} />
        </div>
    );
};

export default WhyUs;
