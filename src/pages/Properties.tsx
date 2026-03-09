import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PropertiesSection } from "@/components/PropertiesSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { SEO } from "@/components/SEO";

const Properties = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Interior Design Portfolio | Completed Projects in Hyderabad"
                description="View our latest interior design projects in Hyderabad, featuring modular kitchens, elegant TV units, and premium bedroom wardrobes."
                keywords="Interior Design Portfolio Hyderabad, Home Interior Projects, Gachibowli Interior Design, THRIDHA Projects"
            />
            <Navbar onOpenContact={openContact} />
            <main className="pt-20">
                <PropertiesSection onOpenContact={openContact} />
            </main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
            <FloatingContactButton onClick={openContact} />
        </div>
    );
};

export default Properties;
