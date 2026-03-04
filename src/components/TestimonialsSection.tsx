import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Tridha Interior transformed our 3BHK into a dream home. Manoj and his team and highly professional and delivered the project exactly on time.",
    author: "Anitha Reddy",
    title: "Homeowner, Gachibowli",
    rating: 5,
  },
  {
    quote: "The modular kitchen design is both beautiful and highly functional. The materials used are premium, and the finish is exquisite. Truly happy with the results!",
    author: "Sandeep Varma",
    title: "Appartment Owner",
    rating: 5,
  },
  {
    quote: "We hired Tridha for our office renovation. Their space planning and 3D visualization helped us see the final look before even starting. Highly efficient work.",
    author: "Kiran Kumar",
    title: "CEO, Tech Solutions",
    rating: 5,
  },
  {
    quote: "Budget-friendly without compromising on luxury. They managed the entire turnkey project while I was away. A trustworthy team for NRI clients as well.",
    author: "Sneha Rao",
    title: "Villa Owner, Kokapet",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-foreground-muted">
            Satisfied homeowners and business owners in Hyderabad who chose TRIDHA for their interior journey.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + i * 0.1,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  >
                    <Star className="w-5 h-5 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-foreground-muted">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
