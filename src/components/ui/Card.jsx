import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ header, title, children, className = '', icon }) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg overflow-hidden enhanced-card h-full flex flex-col ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {header && (
        <div className="bg-gradient-primary from-primary to-dark text-white p-6 text-center relative overflow-hidden">
          {/* SVG Pattern Overlay for header */}
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          </div>
          
          {icon && <div className="text-2xl mb-2">{icon}</div>}
          <h3 className="text-xl font-semibold relative z-10">{title}</h3>
          
          {/* Animated accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
        </div>
      )}
      
      <div className="p-8 text-text flex-grow flex flex-col">
        {!header && title && (
          <div className="mb-4 flex items-center">
            {icon && <span className="text-secondary mr-2 text-xl">{icon}</span>}
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default Card;