import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { SEO } from "@/components/SEO";

const About = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="About Us | Expert Interior Designers in Hyderabad"
                description="Learn about THRIDHA Architects & Interior Designers. Led by D. Manoj Kumar Varma, we bring 10+ years of experience in luxury residential and commercial interior design in Hyderabad."
                keywords="Manoj Kumar Varma, THRIDHA Interiors, Interior Design Team Hyderabad, Best Architects Hyderabad"
            />
            <Navbar onOpenContact={openContact} />
            <main className="pt-20">
                <AboutSection />
            </main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
            <FloatingContactButton onClick={openContact} />
        </div>
    );
};

export default About;
