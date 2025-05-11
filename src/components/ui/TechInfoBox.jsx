import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * TechInfoBox - A reusable component for displaying technical information
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the info box
 * @param {Object} props.icon - FontAwesome icon to display
 * @param {string} props.bgColor - Background color class (default: "bg-blue-50")
 * @param {string} props.iconColor - Icon color class (default: "text-blue-800")
 * @param {Array} props.items - Array of items to display (each with title and description)
 * @param {string} props.benefit - Text describing the measurable benefit
 * @param {React.ReactNode} props.children - Additional content
 */
const TechInfoBox = ({ 
  title, 
  icon, 
  bgColor = "bg-blue-50", 
  iconColor = "text-blue-800",
  items = [],
  benefit,
  children
}) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg`}>
      <h4 className={`font-bold ${iconColor} mb-2 flex items-center`}>
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {title}
      </h4>
      
      {children}
      
      {items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded p-3 shadow-sm">
              <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {benefit && (
        <div className="mt-3 text-sm text-gray-700">
          <strong>Beneficio medible:</strong> {benefit}
        </div>
      )}
    </div>
  );
};

export default TechInfoBox;
