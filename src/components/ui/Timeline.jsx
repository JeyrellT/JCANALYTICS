import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="timeline my-10">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className={`relative w-1/2 ml-0 my-6 px-10 ${
            index % 2 === 0 ? 'left-0' : 'left-1/2'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10">
            {/* Subtle pattern background */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white to-gray-50 z-[-1]"></div>
            
            <h3 className="text-xl text-primary font-semibold mb-3 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-secondary text-white flex-shrink-0 mr-3 shadow-md flex items-center justify-center">
                {index + 1}
              </span>
              {item.title}
            </h3>
            
            <p className="text-text mb-3 pl-11">{item.description}</p>
            
            {item.highlight && (
              <div className="mt-4 bg-gray-50 p-4 rounded-md border-l-4 border-secondary">
                <p className="font-medium">
                  <strong className="text-secondary">{item.highlight.title}:</strong> {item.highlight.content}
                </p>
              </div>
            )}
          </div>
          
          <motion.div 
            className={`absolute top-4 timeline-dot
            ${index % 2 === 0 ? 'right-0 -mr-3' : 'left-0 -ml-3'}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
          ></motion.div>
          
          {/* Connecting line to the main timeline */}
          <div 
            className={`absolute top-4 h-1 bg-secondary
            ${index % 2 === 0 ? 'right-0 w-10' : 'left-0 w-10'}`}
          ></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;