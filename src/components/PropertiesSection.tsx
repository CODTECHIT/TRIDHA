import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Palette, Sofa, Sparkles, Tv, Archive, Paintbrush, Rows, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

import kitchenImage from "@/assets/modular-kitchen.png";
import wardrobesImage from "@/assets/wardrobes.png";
import tvUnitImage from "@/assets/tv-unit.png";
import ceilingImage from "@/assets/false-ceiling.png";
import paintingImage from "@/assets/painting.png";
import blindsImage from "@/assets/blinds.png";
import wallpaperImage from "@/assets/wallpapers.png";

interface PropertiesSectionProps {
  onOpenContact: () => void;
}

const interiorSolutions = [
  {
    type: "Modular",
    badge: "Most Popular",
    title: "Modular Kitchen",
    location: "Modular Kitchen Designers Hyderabad",
    image: kitchenImage,
    details: [
      { icon: Layout, label: "L/U/Parallel" },
      { icon: Sparkles, label: "Acrylic & Laminate" },
    ],
    startingAt: "Modern Kitchen Interior",
  },
  {
    type: "Storage",
    badge: "Essential",
    title: "Wardrobes",
    location: "Custom Wardrobe Design Hyderabad",
    image: wardrobesImage,
    details: [
      { icon: Archive, label: "Sliding/Hinged" },
      { icon: Palette, label: "Premium Finish" },
    ],
    startingAt: "Bedroom Wardrobe Designers",
  },
  {
    type: "Entertainment",
    badge: "Designer",
    title: "TV Units",
    location: "Living Room Accent",
    image: tvUnitImage,
    details: [
      { icon: Tv, label: "Modern Layouts" },
      { icon: Sofa, label: "Cable Management" },
    ],
    startingAt: "Elegant Designs",
  },
  {
    type: "Ceiling",
    badge: "Atmospheric",
    title: "False Ceiling",
    location: "False Ceiling Design Hyderabad",
    image: ceilingImage,
    details: [
      { icon: Layout, label: "Gypsum & POP" },
      { icon: Sparkles, label: "LED Integration" },
    ],
    startingAt: "Gypsum Ceiling Specialist",
  },
  {
    type: "Wall Care",
    badge: "Protective",
    title: "Painting",
    location: "Premium Emulsion",
    image: paintingImage,
    details: [
      { icon: Paintbrush, label: "Matte/Glossy" },
      { icon: Palette, label: "Infinite Shades" },
    ],
    startingAt: "Zero VOC Opts",
  },
  {
    type: "Window Decor",
    badge: "Functional",
    title: "Window Blinds",
    location: "Motorized & Manual",
    image: blindsImage,
    details: [
      { icon: Rows, label: "Zebra/Roller" },
      { icon: Sparkles, label: "Custom Fabrics" },
    ],
    startingAt: "UV Protection",
  },
  {
    type: "Decor",
    badge: "Exclusive",
    title: "Imported Wallpapers",
    location: "Designer Series",
    image: wallpaperImage,
    details: [
      { icon: Image, label: "Architectural" },
      { icon: Palette, label: "3D Textures" },
    ],
    startingAt: "Imported Stock",
  },
];

const badgeColors: Record<string, string> = {
  "Most Popular": "bg-gold/10 text-gold",
  "Designer": "bg-blue-500/10 text-blue-600",
  "Essential": "bg-green-500/10 text-green-700",
  "Atmospheric": "bg-purple-500/10 text-purple-600",
  "Protective": "bg-orange-500/10 text-orange-600",
  "Functional": "bg-cyan-500/10 text-cyan-600",
  "Exclusive": "bg-pink-500/10 text-pink-600",
};

export const PropertiesSection = ({ onOpenContact }: PropertiesSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="properties" ref={sectionRef} className="py-12 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Interior Design Projects in Hyderabad
          </h2>
          <p className="text-base lg:text-lg text-foreground-muted">
            Explore our curated range of interior solutions from modular kitchens to luxury wardrobes in Hyderabad.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="property-card group"
            >
              {/* Image with Zoom Effect */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={solution.image}
                  alt={
                    solution.title === "Modular Kitchen"
                      ? "Modern modular kitchen design in Hyderabad by THRIDHA Interior Designers"
                      : solution.title === "Wardrobes"
                        ? "Custom wardrobe design for bedroom in Hyderabad apartment"
                        : solution.title === "TV Units"
                          ? "Luxury living room interior design in Gachibowli Hyderabad"
                          : `${solution.title} design in Hyderabad by THRIDHA Interior Solutions`
                  }
                  className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.08]"
                  loading="lazy"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[solution.badge]}`}>
                    {solution.badge}
                  </span>
                </div>
                {/* Type */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 text-foreground">
                    {solution.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                  {solution.title}
                </h3>

                {/* Tagline */}
                <div className="flex items-center gap-2 text-sm text-foreground-muted mb-4">
                  <Palette className="w-4 h-4" />
                  <span>{solution.location}</span>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {solution.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground-muted">
                      <detail.icon className="w-4 h-4 text-secondary" />
                      <span>{detail.label}</span>
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-foreground-muted">Service Type</p>
                    <p className="text-lg font-bold text-secondary">{solution.startingAt}</p>
                  </div>
                  <Button
                    variant="THRIDHA-primary"
                    size="sm"
                    onClick={onOpenContact}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="THRIDHA-primary" size="lg" onClick={onOpenContact}>
            View Design Portfolio
          </Button>
        </motion.div>

        {/* Feature Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 lg:mt-20 pt-10 lg:pt-16 border-t border-border"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-semibold mb-4">
              Featured Setup
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Smart Space Solutions
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Customized designs for every corner of your home, maximizing both aesthetics and utility.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border h-auto relative group">
            <img
              src={ceilingImage}
              alt="Living Room Setup"
              className="w-full h-auto object-contain max-h-[600px]"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4">
              <Button variant="THRIDHA-secondary" size="sm" onClick={onOpenContact}>
                Book a Site Visit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
