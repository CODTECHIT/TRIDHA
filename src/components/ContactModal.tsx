import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  serviceType: z.string().min(1, "Please select a service type"),
  budgetRange: z.string().optional(),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof contactSchema>;

const serviceTypes = [
  "Residential Interior Design",
  "Commercial & Office Interior",
  "Modular Kitchen",
  "Wardrobes & Storage",
  "TV Units & Entertainment",
  "False Ceiling & Lighting",
  "Painting & Wall Decor",
  "Window Blinds & Treatment",
  "Imported Wallpapers",
  "Space Planning & Optimization",
  "3D Design & Visualization",
  "Renovation & Remodeling",
];

const budgetRanges = [
  "Below 5 Lakhs",
  "5-10 Lakhs",
  "10-25 Lakhs",
  "25-50 Lakhs",
  "50 Lakhs+",
];

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    budgetRange: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Construct WhatsApp message
    const whatsappNumber = "919879877671";
    const message = `*New Inquiry for TRIDHA Interior Solutions*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Service:* ${formData.serviceType}%0A` +
      `*Budget:* ${formData.budgetRange || "Not Specified"}%0A` +
      `*Message:* ${formData.message || "No message provided"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset and close after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        serviceType: "",
        budgetRange: "",
        message: "",
      });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative w-full max-w-lg bg-background rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-foreground transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Inquiry Received!</h3>
                <p className="text-foreground-muted">
                  We'll contact you within 24 hours to discuss your dream interior project.
                </p>
              </motion.div>
            ) : (
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                    Book Your Design Consultation
                  </h2>
                  <p className="text-foreground-muted">
                    Tell us about your space and we'll help you bring your vision to life.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`form-input ${errors.fullName ? "border-destructive" : ""}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? "border-destructive" : ""}`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "border-destructive" : ""}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Interior Service Interested <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`form-input ${errors.serviceType ? "border-destructive" : ""}`}
                    >
                      <option value="">Select service type</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-destructive text-sm mt-1">{errors.serviceType}</p>
                    )}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us more
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Tell us about your space and requirements..."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="vihaan-cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
