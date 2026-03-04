import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden p-1">
                <img
                  src="/logo.png"
                  alt="TRIDHA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xl leading-none text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                  TRIDHA
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase leading-none mt-1.5 text-white/70" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Architects | Interior Designers
                </span>
              </div>
            </button>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium Interior Design & Turnkey Interior Solutions.
              Transforming spaces into elegant living experiences with functionality and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Portfolio", path: "/properties" },
                { label: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Modular Kitchen",
                "Wardrobes & Furniture",
                "TV Units & Decor",
                "False Ceiling",
                "Residential Interiors",
                "Commercial Interiors",
                "3D Visualization",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavigation("/services")}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  AVR AVNR Residency, Secretariate Colony<br />
                  Gachibowli – 500032, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+919879877671"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  +91 98798 77671
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:interiorthridha@gmail.com"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  interiorthridha@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Mon - Sat: 10AM - 8PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} TRIDHA Interior Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button onClick={() => handleNavigation("/privacy")} className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
              Privacy Policy
            </button>
            <button onClick={() => handleNavigation("/terms")} className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
