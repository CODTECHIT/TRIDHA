import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PropertiesSection } from "@/components/PropertiesSection";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";

const Properties = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-background">
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
