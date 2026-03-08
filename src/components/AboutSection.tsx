import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";
import residentialInterior from "@/assets/residential-interior.png";

const stats = [
  { number: 10, suffix: "+", label: "Years Experience" },
  { number: 500, suffix: "+", label: "Projects Completed" },
  { number: 100, suffix: "+", label: "Commercial Interiors" },
  { number: 1000, suffix: "+", label: "Happy Clients" },
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
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-20 mb-12 lg:mb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 lg:p-12 rounded-2xl shadow-sm border border-border">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">About THRIDHA</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              THRIDHA Interior Solutions is a professional interior design company founded by D. Manoj Kumar Varma,
              specializing in residential and commercial interior projects.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              With over 10 years of experience, we focus on delivering personalized designs that combine
              functionality, elegance, and comfort. Our team handles everything from concept development
              to final project execution, ensuring high-quality results and timely delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <img
                src="/logo.png"
                alt="THRIDHA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Expertise Driven by Passion & Experience
            </h2>

            {/* Founder Bio - Featured Quote/Intro */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 group">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-gold to-primary/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <img
                  src="/image/founder.jpeg"
                  alt="D. Manoj Kumar Varma"
                  className="relative w-32 h-32 rounded-2xl object-cover shadow-md border border-white/50"
                />
              </div>
              <div className="flex-grow">
                <div className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">
                  Visionary Founder
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">D. Manoj Kumar Varma</h3>
                <p className="text-foreground-muted leading-relaxed text-sm lg:text-base">
                  With over a decade of expertise, Manoj has transformed hundreds of spaces into
                  exquisite environments. His philosophy blends technical precision with
                  artisanal design, ensuring every project is both unique and timeless.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-secondary/5 rounded-2xl p-6 mb-8 border-l-4 border-gold">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-gold/20" />
              <p className="text-lg italic text-primary/80 font-medium">
                "We don't just design rooms, we build environments where memories are made."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="stat-card border border-border/40 hover:border-gold/30 transition-colors"
                >
                  <CountUp target={stat.number} suffix={stat.suffix} />
                  <p className="text-sm text-foreground-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
