import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

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
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-20 mb-20 lg:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-border">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">About TRIDHA</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              TRIDHA Interior Solutions is a professional interior design company founded by D. Manoj Kumar Varma,
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
                alt="TRIDHA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              <img
                src="/src/assets/residential-interior.png"
                alt="TRIDHA Interior Design Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                <p className="text-gold text-sm font-bold uppercase tracking-widest mb-1 drop-shadow-md">Founder</p>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white drop-shadow-lg">
                  D. Manoj Kumar Varma
                </h3>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Expertise Driven by Passion & Experience
            </h2>

            {/* Quote */}
            <div className="relative bg-secondary/10 rounded-xl p-6 mb-8">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-gold/30" />
              <p className="text-lg italic text-foreground pl-8">
                "We don't just design rooms, we build environments where memories are made."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="stat-card"
                >
                  <CountUp target={stat.number} suffix={stat.suffix} />
                  <p className="text-sm text-foreground-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-foreground-muted leading-relaxed">
              D. Manoj Kumar Varma is a visionary in the interior design space. With a focus on
              turnkey solutions, he has transformed hundreds of homes and offices into premium,
              modern spaces. Our approach combines technical space planning with artisanal furniture
              and decor design, ensuring every project is unique and timeless.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
