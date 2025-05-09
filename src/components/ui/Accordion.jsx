import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className="rounded-lg overflow-hidden shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <button
            className="w-full bg-gradient-to-r from-white to-gray-50 p-5 flex justify-between items-center cursor-pointer transition-colors duration-300 hover:from-gray-50 hover:to-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-left"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`content-${index}`}
          >
            <div className="flex items-center">
              {item.badge && (
                <div className="flex justify-center items-center w-10 h-10 bg-gradient-to-r from-secondary to-[#217dbb] text-white rounded-full font-bold mr-4 flex-shrink-0 shadow-md">
                  {item.badge}
                </div>
              )}
              <h3 className="text-lg font-medium text-primary">{item.title}</h3>
            </div>
            <motion.div 
              className="text-secondary bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center"
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                id={`content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-white"
              >
                <div className="p-6 border-t border-gray-100">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;