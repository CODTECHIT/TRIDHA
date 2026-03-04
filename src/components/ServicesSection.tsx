import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceResidentialImage from "@/assets/residential-interior.png";
import serviceCommercialImage from "@/assets/office-interior.png";
import serviceSpacePlanningImage from "@/assets/space-planning.png";
import service3DImage from "@/assets/3d-visualization.png";
import serviceRenovationImage from "@/assets/renovation.png";

interface ServicesSectionProps {
  onOpenContact: () => void;
}

const services = [
  {
    image: serviceResidentialImage,
    title: "Residential Interior Design",
    description: "Transform your home into a personalized sanctuary. Best residential interior designers in Hyderabad for luxury homes.",
    highlights: ["Custom Wardrobes", "Modular Kitchens", "False Ceilings"],
    cta: "Explore Home Designs",
  },
  {
    image: serviceCommercialImage,
    title: "Office & Commercial Interiors",
    description: "Functional work spaces by expert office interior designers in Hyderabad. Commercial interior design with precision.",
    highlights: ["Space Optimization", "Ergonomic Layouts", "Turnkey Office Solutions"],
    cta: "View Office Designs",
  },
  {
    image: serviceSpacePlanningImage,
    title: "Space Planning & Layout",
    description: "Maximizing every square foot with smart zoning and traffic flow management for better utility in Hyderabad homes.",
    highlights: ["Furniture Layouts", "Zoning Plans", "Traffic Flow"],
    cta: "Optimize Your Space",
  },
  {
    image: serviceRenovationImage,
    title: "Renovation & Remodeling",
    description: "Top home renovation company in Hyderabad. We handle complete home and office makeovers with civil work.",
    highlights: ["Old-to-New Refurbish", "Civil & Structural", "Finish Updates"],
    cta: "Start Your Makeover",
  },
];

export const ServicesSection = ({ onOpenContact }: ServicesSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Premium Interior Design Services in Hyderabad
          </h2>
          <p className="text-lg text-foreground-muted">
            End-to-end interior solutions from concept to execution. We handle everything from residential to commercial spaces.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="service-card group cursor-pointer overflow-hidden"
            >
              {/* Image with Parallax Zoom */}
              <div className="relative h-48 lg:h-56 overflow-hidden rounded-t-xl -mx-10 -mt-10 mb-6">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Hyderabad by TRIDHA Architects & Interior Designers`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-foreground-muted mb-6">{service.description}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {service.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    <span className="text-foreground-muted">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="tridha-secondary"
                className="w-full"
                onClick={onOpenContact}
              >
                {service.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
