import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ number, prefix = '', suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(number);
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16)); // ~60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);
  
  return (
    <motion.div 
      ref={ref}
      className="text-center p-8 bg-white rounded-lg enhanced-card relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
      
      {icon && (
        <div className="text-secondary text-3xl mb-3 relative z-10">
          {icon}
        </div>
      )}
      
      <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary relative z-10">
        {prefix}<span className="counter">{count}</span>{suffix}
      </div>
      
      <div className="text-text font-medium relative z-10">{label}</div>
      
      {/* Bottom highlight bar */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default StatItem;