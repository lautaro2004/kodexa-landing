import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KodexaLogo() {
  const [showTag, setShowTag] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTag(true), 1500); // Cambia después de 2.5s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center space-x-1 text-4xl font-bold font-mono text-[#0F172A] select-none">
      <AnimatePresence mode="wait">
        {!showTag ? (
          <motion.span
            key="kodexa"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="text-[#0F172A]"
          >
            Kodexa
          </motion.span>
        ) : (
          <>
            <motion.span
              key="lt"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[#0F172A]"
            >
              &lt;
            </motion.span>

            <motion.span
              key="k"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#0F172A]"
            >
              K
            </motion.span>

            <motion.span
              key="gt"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#0F172A]"
            >
              /&gt;
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
