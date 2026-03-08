import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroInterior from "@/assets/hero-interior.png";
import kitchenImage from "@/assets/modular-kitchen.png";
import customFurnitureImage from "@/assets/tv-unit.png";
import officeInteriorImage from "@/assets/office-interior.png";

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroInterior})`,
        }}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />

      <div className="container mx-auto px-4 lg:px-20 relative z-10 flex-grow flex items-start lg:items-center pt-32 pb-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left w-full">
          {/* Content */}
          <div className="text-white flex flex-col items-center lg:items-start">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 lg:mb-6 text-white"
            >
              Interior Designers in Hyderabad – <span className="text-gold">THRIDHA</span> Interior Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mb-6 lg:mb-8 w-full"
            >
              <p className="text-base sm:text-lg md:text-2xl font-semibold mb-3 text-white/90">
                Premium Interior Design & Turnkey Solutions for Homes and Offices.
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-4 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-gold" />
                  <span className="text-[11px] sm:text-xs lg:text-sm font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-gold" />
                  <span className="text-[11px] sm:text-xs lg:text-sm font-medium">150+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-gold" />
                  <span className="text-[11px] sm:text-xs lg:text-sm font-medium">Hyderabad Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-gold" />
                  <span className="text-[11px] sm:text-xs lg:text-sm font-medium">Turnkey Solutions</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 lg:mb-8 max-w-xl"
            >
              THRIDHA Interior Solutions provides premium residential and office interior design services in Hyderabad. Experts in modular kitchens, wardrobes, false ceilings, and turnkey interior solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-0"
            >
              <Button
                variant="THRIDHA-hero"
                size="lg"
                onClick={onOpenContact}
                className="group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="THRIDHA-secondary"
                size="lg"
                onClick={scrollToServices}
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                View Our Services
              </Button>
            </motion.div>
          </div>

          {/* Floating Property Cards with Images */}
          <div className="relative hidden lg:block h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute top-0 right-0 w-72"
            >
              <div className="float bg-white rounded-xl overflow-hidden shadow-xl" style={{ animationDelay: "0s" }}>
                <div className="h-40 overflow-hidden">
                  <img
                    src={kitchenImage}
                    alt="Modern modular kitchen design in Hyderabad by THRIDHA Interior Designers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-xs font-semibold px-2 py-1 bg-gold/10 text-gold rounded">Premium</span>
                  <h4 className="font-semibold text-primary text-sm">Modular Kitchen</h4>
                  <p className="text-xs text-foreground-muted">Custom Design</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="absolute top-32 right-40 w-64"
            >
              <div className="float bg-white rounded-xl overflow-hidden shadow-xl" style={{ animationDelay: "1s" }}>
                <div className="h-32 overflow-hidden">
                  <img
                    src={officeInteriorImage}
                    alt="Commercial office interior design in Hyderabad by THRIDHA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-xs font-semibold px-2 py-1 bg-secondary/10 text-secondary rounded">Commercial</span>
                  <h4 className="font-semibold text-primary text-sm">Office Interiors</h4>
                  <p className="text-xs text-foreground-muted">Productive Spaces</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="absolute bottom-10 right-16 w-60"
            >
              <div className="float bg-white rounded-xl overflow-hidden shadow-xl" style={{ animationDelay: "2s" }}>
                <div className="h-28 overflow-hidden">
                  <img
                    src={customFurnitureImage}
                    alt="Luxury living room interior design in Gachibowli Hyderabad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">Residential</span>
                  <h4 className="font-semibold text-primary text-sm">Living Room Units</h4>
                  <p className="text-xs text-foreground-muted">Elegant Furniture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
