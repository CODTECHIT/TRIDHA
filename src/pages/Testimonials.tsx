import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { SEO } from "@/components/SEO";

const Testimonials = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Client Reviews & Testimonials | THRIDHA Interiors Hyderabad"
                description="Read what our happy clients say about THRIDHA Architects & Interior Designers. Trusted reviews for residential and commercial projects in Hyderabad."
                keywords="Interior Design Reviews Hyderabad, Customer Testimonials THRIDHA, Best Interior Designer Feedback"
            />
            <Navbar onOpenContact={openContact} />
            <main className="pt-20">
                <TestimonialsSection />
            </main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
            <FloatingContactButton onClick={openContact} />
        </div>
    );
};

export default Testimonials;
