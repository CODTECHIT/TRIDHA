import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Mail } from "lucide-react";

interface FloatingContactButtonProps {
  onClick: () => void;
}

const subButtons = [
  {
    name: "Call",
    icon: Phone,
    color: "bg-secondary hover:bg-primary",
    action: "tel:+919879877671",
    position: { x: 0, y: -70 },
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366] hover:bg-[#128C7E]",
    action: "https://wa.me/919879877671?text=Hi%20Manoj%20Kumar,%20I%20am%20interested%20in%20interior%20solutions",
    position: { x: 0, y: -130 },
  },
  {
    name: "Email",
    icon: Mail,
    color: "bg-[#EA4335] hover:bg-[#D33426]",
    action: "mailto:interiorthridha@gmail.com",
    position: { x: 0, y: -190 },
  },
];

export const FloatingContactButton = ({ onClick }: FloatingContactButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubButtonClick = (action: string) => {
    window.open(action, action.startsWith("tel:") || action.startsWith("mailto:") ? "_self" : "_blank");
    setIsExpanded(false);
  };

  return (
    <>
      {/* Backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-12 right-6 z-[999]">
        {/* Sub Buttons */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {subButtons.map((button, index) => (
                <motion.button
                  key={button.name}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: button.position.x,
                    y: button.position.y,
                  }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  onClick={() => handleSubButtonClick(button.action)}
                  className={`absolute bottom-0 right-0 w-12 h-12 rounded-full ${button.color} text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 group`}
                  aria-label={button.name}
                >
                  <button.icon className="w-5 h-5" />
                  {/* Tooltip */}
                  <span className="absolute right-14 px-2 py-1 bg-foreground text-background text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {button.name}
                  </span>
                </motion.button>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <button
          onClick={toggleExpand}
          className={`relative w-14 h-14 rounded-full bg-secondary text-secondary-foreground items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary hover:scale-110 flex ${!isExpanded ? "floating-pulse" : ""
            }`}
          aria-label={isExpanded ? "Close contact options" : "Open contact options"}
        >
          <div
            className={`transition-transform duration-200 ${isExpanded ? "rotate-45" : "rotate-0"}`}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Phone className="w-6 h-6" />
            )}
          </div>
        </button>
      </div>
    </>
  );
};
