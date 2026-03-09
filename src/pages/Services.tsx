import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { SEO } from "@/components/SEO";

const Services = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Interior Design Services | Residential & Commercial Hyderabad"
                description="Explore our wide range of interior services in Hyderabad: Modular Kitchens, Wardrobes, False Ceilings, 3D Visualization, and Turnkey Office Interiors."
                keywords="Interior Design Services, Modular Kitchen Hyderabad, Office Interior Designer, Luxury Home Interiors Hyderabad"
            />
            <Navbar onOpenContact={openContact} />
            <main className="pt-20">
                <ServicesSection onOpenContact={openContact} />
            </main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
            <FloatingContactButton onClick={openContact} />
        </div>
    );
};

export default Services;
