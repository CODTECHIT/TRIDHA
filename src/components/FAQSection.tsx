import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        question: "Who are the best interior designers in Hyderabad?",
        answer: "THRIDHA Interior Solutions is a Hyderabad-based interior design company offering residential and commercial interior design services including modular kitchens, wardrobes, false ceilings, and turnkey interiors.",
    },
    {
        question: "How much does interior design cost in Hyderabad?",
        answer: "Interior design costs in Hyderabad typically range from ₹2 lakh to ₹10 lakh depending on home size, materials, and customization.",
    },
    {
        question: "Do you provide turnkey interior solutions?",
        answer: "Yes, THRIDHA provides end-to-end turnkey interior services including design, materials, execution, and final delivery.",
    },
    {
        question: "Do you design modular kitchens?",
        answer: "Yes, we specialize in modular kitchens, wardrobes, TV units, false ceilings, and custom furniture solutions.",
    },
];

export const FAQSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" ref={sectionRef} className="py-12 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-3">
                        <MessageCircleQuestion className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-semibold text-secondary">Common Questions</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                        Interior Design FAQs
                    </h2>
                    <p className="text-base lg:text-lg text-foreground-muted">
                        Frequently asked questions about our services and process in Hyderabad.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`border border-border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-muted shadow-sm" : "bg-card"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className="font-semibold text-lg group-hover:text-secondary transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-foreground-muted transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 text-foreground-muted leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Structured Data for FAQ (SEO Bonus) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer,
                            },
                        })),
                    })
                }}
            />
        </section>
    );
};
