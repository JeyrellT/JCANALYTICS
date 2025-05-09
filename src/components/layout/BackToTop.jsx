import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-secondary to-[#217dbb] text-white rounded-full flex justify-center items-center shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          onClick={scrollToTop}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated ripple effect */}
            <motion.div 
              className="absolute w-full h-full rounded-full bg-white opacity-30"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.2, 0.1, 0.2] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;