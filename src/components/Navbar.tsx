import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onOpenContact: () => void;
}

const navItems = [
  { label: "Home", href: "/", type: "link" },
  { label: "About", href: "/about", type: "link" },
  { label: "Services", href: "/services", type: "link" },
  { label: "Properties", href: "/properties", type: "link" },
  { label: "Why Us", href: "/why-us", type: "link" },
  { label: "Testimonials", href: "/testimonials", type: "link" },
  { label: "Contact", href: "/contact", type: "link" },
];

export const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { label: string; href: string; type: string }) => {
    setIsMobileMenuOpen(false);
    navigate(item.href);
    window.scrollTo(0, 0); // Ensure we scroll to top on navigation
  };

  const isActiveNav = (item: { label: string; href: string; type: string }) => {
    return location.pathname === item.href;
  };

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${!isTransparent
          ? "bg-background/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => navigate("/")} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden p-0.5">
                <img
                  src="/logo.png"
                  alt="TRIDHA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className={`font-bold text-xl leading-none transition-colors ${isTransparent ? "text-white" : "text-primary"}`} style={{ fontFamily: "'Cinzel', serif" }}>
                  TRIDHA
                </span>
                <span className={`text-[10px] font-medium tracking-[0.15em] uppercase leading-none mt-1.5 transition-colors ${isTransparent ? "text-white/70" : "text-primary/70"}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Architects | Interior Designers
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link py-2 ${isActiveNav(item) ? "active" : ""
                    } ${isTransparent ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                variant={isTransparent ? "vihaan-secondary" : "vihaan-cta"}
                onClick={() => navigate("/contact")}
                className={`gap-2 ${isTransparent ? "bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary" : ""}`}
              >
                <Phone className="w-4 h-4" />
                Get Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/90 backdrop-blur-sm text-primary shadow-sm border border-white/20"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-background shadow-xl">
              <div className="pt-24 px-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item)}
                      className={`text-left py-3 px-4 rounded-lg text-lg font-medium transition-colors ${isActiveNav(item)
                        ? "bg-muted text-primary"
                        : "text-foreground hover:bg-muted"
                        }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button
                      variant="vihaan-cta"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/contact");
                      }}
                    >
                      <Phone className="w-4 h-4" />
                      Get Consultation
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
