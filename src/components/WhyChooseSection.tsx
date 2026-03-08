import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Shield,
  Users,
  FileCheck,
  Heart,
  Globe,
  Headphones
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "10+ Years Experience",
    description: "Expertise in residential and turnkey commercial projects",
  },
  {
    icon: Heart,
    title: "Personalized Designs",
    description: "Tailored to your lifestyle, workspace, and taste",
  },
  {
    icon: FileCheck,
    title: "On-Time Delivery",
    description: "We respect your timelines with planned execution",
  },
  {
    icon: Users,
    title: "End-to-End Management",
    description: "From concept to final project handover",
  },
  {
    icon: Globe,
    title: "Budget-Friendly",
    description: "Premium interior solutions within your budget",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Continuous guidance throughout the project lifecycle",
  },
];

const stats = [
  { number: 10, suffix: "+", label: "Years Experience" },
  { number: 150, suffix: "+", label: "Projects Completed" },
  { number: 100, suffix: "%", label: "On-Time Delivery" },
  { number: 200, suffix: "+", label: "Happy Clients" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
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
  }, [inView, target]);

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  );
};

export const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={sectionRef} className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
                Why Choose THRIDHA Interior Designers
              </h2>
              <p className="text-base lg:text-lg text-foreground-muted mb-6">
                THRIDHA provides premium residential and office interior design services in Hyderabad. We combine aesthetics with functionality to create spaces that inspire.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-foreground-muted">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-muted rounded-2xl p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Our Achievement Map
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="stat-card"
                  >
                    <CountUp target={stat.number} suffix={stat.suffix} inView={isInView} />
                    <p className="text-sm text-foreground-muted mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
