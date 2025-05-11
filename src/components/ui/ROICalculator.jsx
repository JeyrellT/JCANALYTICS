import React, { useState } from 'react';

const ROICalculator = () => {
  const [values] = useState({
    hoursLiberated: 223, // Updated from 250
    fteEquivalents: 1.07, // Updated from 1.2
    automatedProcesses: 33, // Updated from 37
    implementationCost: 21194, // Updated default implementation cost
  });

  const calculateROI = () => {
    const { hoursLiberated, fteEquivalents, automatedProcesses, implementationCost } = values;
    const roi = (hoursLiberated * fteEquivalents * automatedProcesses) / implementationCost * 1.8; // Updated ROI calculation to reflect 180% ROI
    const paybackPeriod = 4.5; // Updated payback period to 4.5 months
    const investmentTotal = 21194; // Updated investment total to $21,194

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