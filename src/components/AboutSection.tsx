import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Award, Users, CheckCircle, Briefcase } from "lucide-react";

const stats = [
  { number: 10, suffix: "+", label: "Years Experience", icon: Award },
  { number: 500, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { number: 100, suffix: "+", label: "Commercial Interiors", icon: Briefcase },
  { number: 1000, suffix: "+", label: "Happy Clients", icon: Users },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl lg:text-4xl font-bold text-primary block">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-20">
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Our Legacy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Crafting Spaces with <span className="text-gold">Passion</span> & Precision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted leading-relaxed"
          >
            THRIDHA Interior Solutions is more than just a design company. Led by visionary D. Manoj Kumar Varma,
            we blend artistic vision with technical excellence to transform your dreams into reality.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Founder & Story */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative shrink-0 group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-gold to-primary/30 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80">
                    <img
                      src="/image/founder.jpeg"
                      alt="D. Manoj Kumar Varma"
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-1 block">Visionary Founder</span>
                    <h3 className="text-3xl font-bold text-primary">D. Manoj Kumar Varma</h3>
                  </div>
                  <p className="text-foreground-muted leading-relaxed text-base lg:text-lg">
                    With over a decade of hands-on expertise, Manoj has pioneered a design philosophy that prioritizes
                    the human experience. His approach ensures that every project is not just a structure, but a
                    timeless testament to elegance and comfort.
                  </p>

                  <div className="relative bg-muted/50 p-6 rounded-2xl border-l-4 border-gold shadow-sm mt-6">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/10" />
                    <p className="text-lg italic text-primary/90 leading-relaxed font-medium">
                      "We don't just design rooms; we curate environments where every corner tells a story and every space creates a memory."
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold mb-3 text-primary">Residential Excellence</h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Personalized living spaces that reflect your lifestyle, combining luxury with daily functionality.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold mb-3 text-primary">Commercial Innovation</h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Dynamic work environments designed to inspire productivity and reflect corporate identity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats & Branding */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group p-8 rounded-3xl bg-white border border-border/60 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                    </div>
                    <CountUp target={stat.number} suffix={stat.suffix} />
                    <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Company Logo / Branding card */}
              <div className="relative overflow-hidden rounded-3xl bg-primary p-1">
                <div className="relative bg-primary/95 p-8 rounded-[22px] flex flex-col items-center text-center">
                  <div className="bg-white/10 p-3 rounded-2xl mb-6 backdrop-blur-sm border border-white/5">
                    <img
                      src="/logo.png"
                      alt="THRIDHA Logo"
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-px w-20 bg-gold/50 mb-6" />
                  <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
                    Committed to excellence in every detail. Delivering turnkey solutions across India with standard-setting quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Structured Data for Founder & Organization (AEO/SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "D. Manoj Kumar Varma",
            "jobTitle": "Founder & Visionary",
            "worksFor": {
              "@type": "Organization",
              "name": "THRIDHA Interior Solutions",
            },
            "description": "Founder of THRIDHA Interior Solutions with over a decade of expertise in residential and commercial interior design.",
            "image": "https://THRIDHAinteriors.com/image/founder.jpeg",
          }),
        }}
      />
    </section>
  );
};

