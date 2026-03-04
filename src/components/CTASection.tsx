import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection = ({ onOpenContact }: CTASectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/20" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full border border-white/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Book a Free Interior Consultation
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Let's talk about your dream interior project in Hyderabad and make it a reality.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              variant="THRIDHA-cta"
              size="xl"
              onClick={onOpenContact}
              className="pulse-gold group"
            >
              Discuss Your Interior Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
