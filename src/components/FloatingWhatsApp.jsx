//src/components/FloatingWhatsApp.jsx
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function FloatingWhatsApp() {
    const { content } = useLanguage();
const { coach } = content;

  return (
    <motion.a
      href={coach.whatsappUrl}
      target="_blank"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-yellow-400 text-black shadow-[0_18px_60px_rgba(250,204,21,0.45)] transition active:scale-95 md:bottom-7 md:right-7 md:h-16 md:w-16 md:hover:-translate-y-1"
      aria-label="Contact on WhatsApp"
    >
      <motion.span
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute inset-0 rounded-full border border-yellow-300/60"
      />

      <MessageCircle className="relative h-7 w-7" />
    </motion.a>
  );
}

export default FloatingWhatsApp;