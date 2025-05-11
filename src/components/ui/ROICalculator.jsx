import React, { useState } from 'react';

const ROICalculator = () => {  const [values] = useState({
    hoursLiberated: 223, // Monthly hours liberated
    fteEquivalents: 1.07, // FTE equivalents
    automatedProcesses: 33, // Number of automated processes
    implementationCost: 21194, // Implementation cost in USD
  });
  const calculateROI = () => {
    // Fixed values to match scenario data in the ROI component
    const roi = 180; // ROI percentage
    const paybackPeriod = 4.5; // Payback period in months (base scenario)
    const investmentTotal = 21194; // Investment total in USD

    return { roi, paybackPeriod, investmentTotal };
  };

  return (
    <div>
      <h1>ROI Calculator</h1>
      <p>Hours Liberated: {values.hoursLiberated}</p>
      <p>FTE Equivalents: {values.fteEquivalents}</p>
      <p>Automated Processes: {values.automatedProcesses}</p>
      <p>Implementation Cost: ${values.implementationCost}</p>
      <p>ROI: {calculateROI().roi}%</p>
      <p>Payback Period: {calculateROI().paybackPeriod} months</p>
      <p>Investment Total: ${calculateROI().investmentTotal}</p>
    </div>
  );
};

export default ROICalculator;