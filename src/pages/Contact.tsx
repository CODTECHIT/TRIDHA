import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, Clock, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import heroInterior from "@/assets/hero-interior.png";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    content: "+91 98798 77671",
    cta: "Call Now",
    action: "tel:+919879877671",
    color: "text-secondary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick response on WhatsApp",
    content: "+91 98798 77671",
    cta: "Message on WhatsApp",
    action: "https://wa.me/919879877671?text=Hi%20TRIDHA%20Team,%20I%20am%20interested%20in%20interior%20solutions",
    color: "text-[#25D366]",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your layout or inquiry",
    content: "interiorthridha@gmail.com",
    cta: "Send Email",
    action: "mailto:interiorthridha@gmail.com",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our design studio in Gachibowli",
    content: "Gachibowli, Hyderabad - 500032",
    cta: "Get Directions",
    action: "https://maps.google.com/?q=AVR+AVNR+Residency+Secretariate+Colony+Gachibowli",
    color: "text-secondary",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "10+ Years Experience",
    description: "Proven track record in high-end residential and commercial interiors",
  },
  {
    icon: CheckCircle,
    title: "Turnkey Execution",
    description: "We handle everything from civil work to the last piece of decor",
  },
  {
    icon: Globe,
    title: "Premium Materials",
    description: "Partnerships with leading material brands for long-lasting quality",
  },
  {
    icon: Clock,
    title: "Timely Handover",
    description: "Committed to delivering projects as per scheduled timelines",
  },
];

const Contact = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const heroRef = useRef(null);
  const methodsRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isMethodsInView = useInView(methodsRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const messageContent = formData.get("message") as string;

    // Construct WhatsApp message
    const whatsappNumber = "919879877671";
    const message = `*Quick Quote Request - TRIDHA Interior Solutions*%0A%0A` +
      `*Name:* ${fullName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Service/Space:* ${subject}%0A` +
      `*Requirements:* ${messageContent}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Simulate form submission effect
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Opening WhatsApp...",
      description: "Redirecting you to our design team.",
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />

        <div className="container mx-auto px-4 lg:px-20 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Consult with <span className="text-gold">TRIDHA Interior</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-4"
            >
              Let's discuss your vision and create a space that works for you.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg text-white/80"
            >
              Whether it's a new home, a renovation, or a commercial office space, we provide complete turnkey interior solutions tailored to your lifestyle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={methodsRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isMethodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-muted border border-border rounded-xl p-8 text-center hover:shadow-xl hover:border-gold/50 transition-all duration-300 h-full flex flex-col"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-background flex items-center justify-center ${method.color}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                <p className="text-sm text-foreground-muted mb-4">{method.description}</p>
                <p className="text-secondary font-semibold mb-6">{method.content}</p>
                <Button
                  variant="tridha-primary"
                  className="w-full mt-auto"
                  asChild
                >
                  <a href={method.action} target={method.action.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {method.cta}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Benefits Section */}
      <section ref={formRef} className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-background rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Request a Design Quote
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Inquiry Received!</h3>
                  <p className="text-foreground-muted">
                    Our design team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Your Name"
                        required
                        className="bg-muted border-border focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-muted border-border focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98798 77671"
                        required
                        className="bg-muted border-border focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Service Type *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Kitchen, Wardrobe, Full Home, etc."
                        required
                        className="bg-muted border-border focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Brief Requirements *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements (e.g., 3BHK Modular Kitchen, Full Interior, etc.)"
                      required
                      className="bg-muted border-border focus:border-secondary min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="tridha-cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
                Why Consulting Us?
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{benefit.title}</h3>
                      <p className="text-foreground-muted text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Visit Our Studio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Map */}
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.123456789!2d78.34!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzI0LjAiTiA3OMKwMjAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TRIDHA Interior Office Location"
              />
            </div>

            {/* Office Info */}
            <div className="bg-muted rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Studio Location</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    Address
                  </h4>
                  <p className="text-foreground-muted text-sm">
                    AVR AVNR Residency,<br />
                    Secretariate Colony,<br />
                    Gachibowli – 500032, Hyderabad
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    Hours
                  </h4>
                  <div className="text-foreground-muted text-sm space-y-1">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>

                <Button variant="tridha-primary" className="w-full" asChild>
                  <a
                    href="https://maps.google.com/?q=AVR+AVNR+Residency+Secretariate+Colony+Gachibowli"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FloatingContactButton onClick={() => setIsContactOpen(true)} />
    </div>
  );
};

export default Contact;
