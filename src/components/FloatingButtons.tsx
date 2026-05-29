import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiX, FiPhone } from 'react-icons/fi';

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              href="tel:+18001234567"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              title="Call Us"
            >
              <FiPhone size={20} />
            </motion.a>
            <motion.a
              href="mailto:info@aerox.com"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              title="Email Us"
            >
              <FiMail size={20} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <a
        href="https://wa.me/7904395270"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl transition-colors"
        title="WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-navy-light border border-white/20 hover:border-primary text-white rounded-full flex items-center justify-center shadow-lg transition-all"
        title="Contact Options"
      >
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <FiX size={20} /> : <FiPhone size={18} />}
        </motion.div>
      </button>
    </div>
  );
}
