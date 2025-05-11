import React from 'react';

/**
 * ChartNote - Component to display additional explanatory notes for charts
 * 
 * @param {Object} props
 * @param {string} props.text - Text content of the note
 * @param {string} props.className - Additional CSS classes (optional)
 */
const ChartNote = ({ text, className = "" }) => {
  return (
    <div className={`mt-3 text-xs text-gray-500 bg-gray-100 p-3 rounded ${className}`}>
      <strong>Nota:</strong> {text}
    </div>
  );
};

export default ChartNote;
