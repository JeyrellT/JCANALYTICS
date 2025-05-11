import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMoneyBillTrendUp, faStopwatch, faArrowTrendUp, faChartPie, faHandHoldingDollar, faRobot, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';

const ROI = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store the reference value
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Updated metrics based on new calculations
  const roiMetrics = [
    { 
      metric: 'Ahorro por automatización',
      value: '35%',
      baseline: '0%', 
      target: '35%', 
      description: 'Liberación de 223 horas/mes equivalentes a 1.07 FTE mediante automatización de 33 procesos.'
    },
    { 
      metric: 'Horas liberadas mensualmente',
      value: '223h',
      baseline: '0h', 
      target: '100%', 
      description: '≈33 procesos automatizados a 6.7h/proceso/mes, liberando 1.07 FTE anual.'
    }
  ];

  // New scenarios data
  const scenarios = [
    {
      name: "Conservador",
      processes: 25,
      hoursMonth: 169,
      savings: "$15,739",
      revenue: "$29,228",
      totalBenefit: "$44,967",
      roi: "112%",
      payback: "5.7 meses"
    },
    {
      name: "Base (recomendado)",
      processes: 33,
      hoursMonth: 223,
      savings: "$20,770",
      revenue: "$38,573",
      totalBenefit: "$59,343",
      roi: "180%",
      payback: "4.5 meses",
      recommended: true
    },
    {
      name: "Agresivo",
      processes: 40,
      hoursMonth: 270,
      savings: "$25,176",
      revenue: "$46,755",
      totalBenefit: "$71,931",
      roi: "239%",
      payback: "3.5 meses"
    }
  ];

  return (
    <section id="roi" className="py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4 section-title-underline inline-block">Retorno de Inversión (ROI)</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Transformamos datos en resultados financieros tangibles. Nuestros modelos de ROI están validados por metodologías Forrester TEI, Six Sigma y casos reales de la industria.
          </p>
        </motion.div>

        {/* Key Metrics Cards - Updated with new values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center" icon={<FontAwesomeIcon icon={faMoneyBillTrendUp} />} title="ROI Primer Año">
              <div className="mt-2 mb-3">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                  180%
                </span>
              </div>
              <p className="text-text">Supera benchmarks de la industria (Forrester: 216% en 3 años)</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="text-center" icon={<FontAwesomeIcon icon={faStopwatch} />} title="Payback Period">
              <div className="mt-2 mb-3">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-success">
                  4.5 meses
                </span>
              </div>
              <p className="text-text">Flujo positivo antes del primer año</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="text-center" icon={<FontAwesomeIcon icon={faRobot} />} title="Procesos Automatizados">
              <div className="mt-2 mb-3">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-success">
                  33
                </span>
              </div>
              <p className="text-text">Liberando 1.07 FTE (223h/mes)</p>
            </Card>
          </motion.div>
        </div>

        {/* New Section: Scenario Comparison */}
        <motion.div 
          className="bg-white rounded-lg shadow-elevation-1 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">Escenarios de Implementación</h3>
          
          <div className="overflow-x-auto">            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">Escenario</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Procesos</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Horas/mes</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Ahorro Anual</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Ingreso Extra</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Beneficio Total</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">ROI 1er Año</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Payback</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((scenario, index) => (
                  <tr key={index} className={scenario.recommended ? "bg-green-50" : (index % 2 === 0 ? "bg-gray-50" : "")}>
                    <td className="px-4 py-3 text-sm">
                      <div className="font-medium text-gray-900">
                        {scenario.name}
                        {scenario.recommended && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Recomendado</span>}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-sm">{scenario.processes}</td>
                    <td className="px-4 py-3 text-center text-sm">{scenario.hoursMonth}</td>
                    <td className="px-4 py-3 text-center text-sm">{scenario.savings}</td>
                    <td className="px-4 py-3 text-center text-sm">{scenario.revenue}</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold">{scenario.totalBenefit}</td>
                    <td className="px-4 py-3 text-center text-sm font-bold text-secondary">{scenario.roi}</td>
                    <td className="px-4 py-3 text-center text-sm">{scenario.payback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 italic">
            Base de cálculo: Inversión total $21,194 (6 meses con IVA incluido)
          </div>
        </motion.div>        {/* ROI Detailed Charts - Updated with new metrics */}
        <div className="bg-white rounded-lg shadow-elevation-1 p-8 mb-12">

          {/* Benefit Distribution Pie Chart Illustration */}
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden" style={{background: 'conic-gradient(#4c1d95 0% 35%, #2563eb 35% 100%)'}}>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center">
                      <FontAwesomeIcon icon={faChartPie} className="text-2xl text-secondary" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-purple-800 inline-block mr-2"></span>
                      <span className="text-sm">Ahorro (35%)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-600 inline-block mr-2"></span>
                      <span className="text-sm">Ingresos (65%)</span>
                    </div>
                  </div>
                </div>
              </div>
                <div className="md:w-2/3">                <h4 className="text-xl font-semibold mb-3">Distribución del Beneficio Total: $59,343</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faHandHoldingDollar} className="text-purple-800 mr-3 text-lg" />
                      <div>
                        <h5 className="font-medium">Ahorro por Automatización</h5>
                        <p className="text-lg font-bold mt-1">$20,770 <span className="text-sm font-normal">/año</span></p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Equivale a 1.07 FTE liberados para tareas de mayor valor</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="text-blue-600 mr-3 text-lg" />
                      <div>
                        <h5 className="font-medium">Incremento de Ingresos</h5>
                        <p className="text-lg font-bold mt-1">$38,573 <span className="text-sm font-normal">/año</span></p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Mediante pricing dinámico y mejor tasa de ocupación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Explanation - Updated methodology */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-lg shadow-elevation-1 p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Metodología ROI Validada</h3>
            <ul className="space-y-3 reveal-list">
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                <p><strong>Inversión con transparencia:</strong> $21,194 total (fee $3,126 + 13% IVA × 6 meses)</p>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                <p><strong>Medición del tiempo liberado:</strong> 33 procesos × 6.7h/proceso = 223h/mes (1.07 FTE)</p>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                <p><strong>Modelo mixto de beneficios:</strong> 35% ahorro operativo + 65% incremento de ingresos</p>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</div>
                <p><strong>Fórmula estándar de la industria:</strong> ROI = (Beneficio-Costo)/Costo = 180%</p>
              </li>
            </ul>
            
            {/* Industry Benchmarks */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Benchmarks externos que validan nuestra propuesta:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 mr-2" />
                  <span>Forrester TEI: ROI de 216% en 3 años para Power Platform</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 mr-2" />
                  <span>Six Sigma: ahorro típico de 1.2-4.5% de ingresos anuales</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 mr-2" />
                  <span>Alquiler de vehículos: +8-20% con pricing dinámico</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-elevation-1 p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Impacto Transformador</h3>
            <ul className="space-y-3 reveal-list">
              <li className="flex items-start">
                <div className="text-secondary mr-3 mt-1"><FontAwesomeIcon icon={faChartLine} /></div>
                <p><strong>Capital humano potenciado:</strong> 223 horas mensuales liberadas para análisis estratégico, no tareas repetitivas.</p>
              </li>
              <li className="flex items-start">
                <div className="text-secondary mr-3 mt-1"><FontAwesomeIcon icon={faChartLine} /></div>
                <p><strong>Ventaja competitiva digital:</strong> Reducción de 70% en tiempo de reporting según implementaciones similares.</p>
              </li>
              <li className="flex items-start">
                <div className="text-secondary mr-3 mt-1"><FontAwesomeIcon icon={faChartLine} /></div>
                <p><strong>Escalabilidad asegurada:</strong> Con cada 10 procesos adicionales se liberan +34 horas/mes extra.</p>
              </li>
              <li className="flex items-start">
                <div className="text-secondary mr-3 mt-1"><FontAwesomeIcon icon={faChartLine} /></div>
                <p><strong>Agilidad organizacional:</strong> Decisiones basadas en datos en tiempo real, no en intuición o reportes obsoletos.</p>
              </li>
            </ul>
            
            {/* Added CTA button */}
            <div className="mt-6 text-center">
              <button className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-lg transition-colors shadow-md">
                Iniciar Transformación Digital
              </button>
              <p className="mt-3 text-sm text-gray-600">No es gasto, es inversión con ROI comprobado de 180%</p>
            </div>
          </div>
        </motion.div>

        {/* Add ROI Calculator at the end of the section */}
        <motion.div 
          className="container mx-auto px-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 section-title-underline inline-block">Calculadora de Ahorro</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-lg mt-4 max-w-3xl mx-auto">
              Calcula el impacto real de la automatización en tu organización. Personaliza los parámetros según tus procesos actuales.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-elevation-1 p-8">
            <RoiCalculator />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ROI Calculator Component
const RoiCalculator = () => {
  // FTE Configuration
  const [costPerYear, setCostPerYear] = useState(12000000);
  const [timeUnitType, setTimeUnitType] = useState('monthly'); // daily, weekly, monthly
  const [timeUnitValue, setTimeUnitValue] = useState(160); // hours per selected unit
  
  // Implementation cost
  const [implementationCost, setImplementationCost] = useState(2120000);
  
  // Before process
  const [minutesBefore, setMinutesBefore] = useState(60);
  const [frequencyTypeBefore, setFrequencyTypeBefore] = useState('monthly');
  const [frequencyValueBefore, setFrequencyValueBefore] = useState(4);
  const [peopleCountBefore, setPeopleCountBefore] = useState(2);
  
  // After process
  const [minutesAfter, setMinutesAfter] = useState(15);
  const [frequencyTypeAfter, setFrequencyTypeAfter] = useState('monthly');
  const [frequencyValueAfter, setFrequencyValueAfter] = useState(4);
  const [peopleCountAfter, setPeopleCountAfter] = useState(1);
  
  // Currency and exchange rate
  const [exchangeRate] = useState(535); // 535 colones per dollar (approx)
  
  // Adoption curve settings
  const [adoptionCurveType, setAdoptionCurveType] = useState('linear');
  const [inflectionPoint, setInflectionPoint] = useState(6); // Month where adoption reaches 50% (1-12)
  
  // Selected month for journey timeline
  const [selectedMonth, setSelectedMonth] = useState(12); // Default to final month
  const [viewAccumulated, setViewAccumulated] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  
  // Tooltip visibility states
  const [tooltips, setTooltips] = useState({
    fte: false,
    hourCost: false,
    roi: false,
    payback: false
  });
  
  // Toggle tooltip visibility
  const toggleTooltip = (tooltip) => {
    setTooltips(prev => ({
      ...prev,
      [tooltip]: !prev[tooltip]
    }));
  };
  
  // Frequency type icons
  const frequencyIcons = {
    'daily': '📅',
    'weekly': '📆',
    'monthly': '🗓️',
    'quarterly': '⏳',
    'semiannual': '⏲️',
    'annual': '🎯'
  };
  
  // Calculate adoption percentage for each month based on curve type
  const getAdoptionByMonth = () => {
    const result = [];
    
    for (let i = 1; i <= 12; i++) {
      let percentage;
      
      switch (adoptionCurveType) {
        case 'linear':
          percentage = (i / 12) * 100;
          break;
        case 'exponential':
          // S-curve based on inflection point
          // Sigmoid function centered around inflection point
          const midpoint = inflectionPoint;
          const steepness = 1.0;
          percentage = 100 / (1 + Math.exp(-steepness * (i - midpoint)));
          break;
        case 'custom':
          // For custom, we could use predefined points or complex logic
          // For now, using a modified exponential curve
          const skew = inflectionPoint / 6; // Adjust the curve based on inflection point
          percentage = 100 * Math.pow(i / 12, 1/skew);
          break;
        default:
          percentage = (i / 12) * 100;
      }
      
      result.push(Math.min(100, Math.max(0, percentage))); // Ensure between 0-100%
    }
    
    return result;
  };
  
  // Calculate annual hours based on time unit
  const getAnnualHours = () => {
    switch (timeUnitType) {
      case 'daily':
        return timeUnitValue * 260; // 260 working days per year
      case 'weekly':
        return timeUnitValue * 52; // 52 weeks per year
      case 'monthly':
        return timeUnitValue * 12; // 12 months per year
      default:
        return timeUnitValue * 12;
    }
  };
  
  // Calculate annual frequency
  const getAnnualFrequency = (type, value) => {
    const factors = {
      'daily': 365,
      'weekly': 52,
      'monthly': 12,
      'quarterly': 4,
      'semiannual': 2,
      'annual': 1
    };
    return value * factors[type];
  };
  
  // Calculate annual hours for before and after scenarios
  const getProcessAnnualHours = (minutes, freqType, freqValue, people) => {
    const hoursPerExecution = minutes / 60;
    const executionsPerYear = getAnnualFrequency(freqType, freqValue);
    return hoursPerExecution * executionsPerYear * people;
  };
  
  // Calculate results
  const annualHours = getAnnualHours();
  const costPerHour = costPerYear / annualHours;
  
  const hoursBefore = getProcessAnnualHours(
    minutesBefore, frequencyTypeBefore, frequencyValueBefore, peopleCountBefore
  );
  
  const hoursAfter = getProcessAnnualHours(
    minutesAfter, frequencyTypeAfter, frequencyValueAfter, peopleCountAfter
  );
  
  const hoursSaved = hoursBefore - hoursAfter > 0 ? hoursBefore - hoursAfter : 0;
  const fteEquivalent = hoursSaved / annualHours;
  const moneySaved = hoursSaved * costPerHour;
  const percentReduction = hoursBefore > 0 ? ((hoursBefore - hoursAfter) / hoursBefore * 100) : 0;
  
  // ROI and payback period calculations
  const roi = implementationCost > 0 ? ((moneySaved - implementationCost) / implementationCost * 100) : 0;
  const paybackMonths = implementationCost > 0 ? (implementationCost / (moneySaved / 12)) : 0;
  
  // Calculate monthly savings data with adoption curve
  const adoptionPercentages = getAdoptionByMonth();
  const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  // Step 1: Create the basic monthly savings data without break-even information
  const monthlySavingsBase = monthNames.map((month, i) => {
    const monthIndex = i;
    const adoptionPercentage = adoptionPercentages[monthIndex];
    const adoptionFactor = adoptionPercentage / 100;
    
    // Calculate monthly values based on adoption
    const monthlyHours = (hoursSaved / 12) * adoptionFactor;
    const monthlyFte = (fteEquivalent / 12) * adoptionFactor;
    const monthlySaving = (moneySaved / 12) * adoptionFactor;
    
    // Calculate cumulative values
    let cumulativeHours = 0;
    let cumulativeFte = 0;
    let cumulativeSaving = 0;
    
    for (let j = 0; j <= monthIndex; j++) {
      const prevAdoptionFactor = adoptionPercentages[j] / 100;
      cumulativeHours += (hoursSaved / 12) * prevAdoptionFactor;
      cumulativeFte += (fteEquivalent / 12) * prevAdoptionFactor;
      cumulativeSaving += (moneySaved / 12) * prevAdoptionFactor;
    }
    
    return {
      month,
      monthIndex: monthIndex + 1,
      adoption: adoptionPercentage,
      hours: monthlyHours,
      fte: monthlyFte,
      saving: monthlySaving,
      cumulativeHours,
      cumulativeFte,
      cumulativeSaving,
      isBreakEven: false // Default value, will be updated in step 2
    };
  });
  
  // Step 2: Find the break-even point and create the final array
  let breakEvenMonthIndex = -1;
  
  for (let i = 0; i < monthlySavingsBase.length; i++) {
    if (monthlySavingsBase[i].cumulativeSaving >= implementationCost) {
      breakEvenMonthIndex = i;
      break;
    }
  }
  
  // Create the final monthlySavings array with break-even information
  const monthlySavings = monthlySavingsBase.map((data, i) => {
    return {
      ...data,
      isBreakEven: i === breakEvenMonthIndex
    };
  });
  
  // Animation speed control
  const [showSpeedSettings, setShowSpeedSettings] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(3000); // Default to 3 seconds (moderate reading time)
  const speedOptions = [
    { label: "Lento", value: 5000, description: "5 segundos por mes" },
    { label: "Medio", value: 3000, description: "3 segundos por mes" },
    { label: "Rápido", value: 1500, description: "1.5 segundos por mes" }
  ];
  
  // Function to handle auto play of timeline with configurable speed
  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setSelectedMonth(prev => {
          const next = prev >= 12 ? 1 : prev + 1;
          return next;
        });
      }, animationSpeed); // Use the configurable speed
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, animationSpeed]); // Add animationSpeed as a dependency
  
  // Get the currently selected month's data
  const currentMonthData = monthlySavings[selectedMonth - 1];
  
  // The breakeven month (if any)
  const breakEvenMonth = breakEvenMonthIndex !== -1 ? monthlySavings[breakEvenMonthIndex] : null;

  // Format number with commas
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(Math.round(num));
  };
  
  // Format number with decimals
  const formatDecimal = (num, decimals = 1) => {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  };
  
  // Convert colones to dollars
  const colToDollars = (colones) => {
    return colones / exchangeRate;
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FTE Configuration Panel */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-xl mb-5 text-primary flex items-center pb-2 border-b border-gray-100">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <FontAwesomeIcon icon={faHandHoldingDollar} className="text-primary" />
            </div>
            Configuración FTE
          </h4>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Costo anual de un FTE ($)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input 
                type="number" 
                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-gray-50" 
                value={Math.round(colToDollars(costPerYear))}
                placeholder="25,000"
                onChange={(e) => setCostPerYear(e.target.value * exchangeRate)}
              />
            </div>
            <div className="mt-1 text-xs text-gray-500">Incluya salario bruto y cargas sociales</div>
          </div>
          
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 text-gray-700">Jornada laboral</label>
              <div className="relative inline-block">
                <button 
                  onClick={() => toggleTooltip('fte')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="bg-gray-100 rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
                </button>
                {tooltips.fte && (
                  <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-xs text-gray-600 z-10">
                    <p>Un FTE (Full-Time Equivalent) equivale a un empleado trabajando a tiempo completo durante un año.</p>
                    <div className="absolute bottom-0 right-3 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select 
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-gray-50"
                value={timeUnitType}
                onChange={(e) => setTimeUnitType(e.target.value)}
              >
                <option value="daily">Horas diarias</option>
                <option value="weekly">Horas semanales</option>
                <option value="monthly">Horas mensuales</option>
              </select>
              <input 
                type="number" 
                className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-gray-50" 
                value={timeUnitValue}
                step="0.5" 
                min="0"
                placeholder={timeUnitType === 'daily' ? '8 horas' : timeUnitType === 'weekly' ? '40 horas' : '160 horas'}
                onChange={(e) => setTimeUnitValue(Number(e.target.value))}
              />
            </div>
          </div>
          
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 text-gray-700">Costo de implementación ($)</label>
              <div className="relative inline-block">
                <button 
                  onClick={() => toggleTooltip('roi')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="bg-gray-100 rounded-full w-5 h-5 inline-flex items-center justify-center">?</span>
                </button>
                {tooltips.roi && (
                  <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-xs text-gray-600 z-10">
                    <p>El costo estimado de implementar la automatización. Se usa para calcular el ROI y tiempo de recuperación.</p>
                    <div className="absolute bottom-0 right-3 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input 
                type="number" 
                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-gray-50" 
                value={Math.round(colToDollars(implementationCost))}
                placeholder="8,000"
                onChange={(e) => setImplementationCost(e.target.value * exchangeRate)}
              />
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Horas anuales:</label>
              <span className="font-semibold text-primary">{formatNumber(annualHours)} horas</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700">Costo por hora:</label>
                <div className="relative inline-block ml-1">
                  <button 
                    onClick={() => toggleTooltip('hourCost')}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="bg-gray-100 rounded-full w-4 h-4 inline-flex items-center justify-center text-xs">?</span>
                  </button>
                  {tooltips.hourCost && (
                    <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-xs text-gray-600 z-10">
                      <p>Costo anual total dividido entre las horas laborables al año.</p>
                      <div className="absolute bottom-0 left-3 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                    </div>
                  )}
                </div>
              </div>
              <span className="font-semibold text-primary">${formatDecimal(colToDollars(costPerHour), 2)}</span>
            </div>
          </div>
        </div>
        
        {/* Before Process Panel */}
        <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-xl mb-5 text-red-700 flex items-center pb-2 border-b border-red-100">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <FontAwesomeIcon icon={faStopwatch} className="text-red-700" />
            </div>
            Antes de automatizar
          </h4>
          
          {/* Before process inputs - unchanged */}
          {/* ... existing code ... */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Minutos por ejecución</label>
            <div className="relative">
              <input 
                type="number" 
                className="w-full pl-10 pr-3 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 bg-white" 
                value={minutesBefore}
                step="0.5"
                min="0"
                placeholder="30 min"
                onChange={(e) => setMinutesBefore(Number(e.target.value))}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 text-sm">min</span>
            </div>
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Frecuencia de ejecución</label>
            <div className="grid grid-cols-2 gap-3">
              <select 
                className="pl-9 pr-3 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 bg-white appearance-none"
                value={frequencyTypeBefore}
                onChange={(e) => setFrequencyTypeBefore(e.target.value)}
              >
                {Object.entries(frequencyIcons).map(([value, icon]) => (
                  <option key={value} value={value}>
                    {icon} {value === 'daily' ? 'Diario' : 
                      value === 'weekly' ? 'Semanal' : 
                      value === 'monthly' ? 'Mensual' : 
                      value === 'quarterly' ? 'Trimestral' : 
                      value === 'semiannual' ? 'Semestral' : 'Anual'}
                  </option>
                ))}
              </select>
              <div className="relative">
                <input 
                  type="number" 
                  className="w-full px-3 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 bg-white" 
                  value={frequencyValueBefore}
                  placeholder="veces"
                  onChange={(e) => setFrequencyValueBefore(Number(e.target.value))}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 text-sm">veces</span>
              </div>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {frequencyValueBefore} {frequencyValueBefore === 1 ? 'vez' : 'veces'} {
                frequencyTypeBefore === 'daily' ? 'al día' :
                frequencyTypeBefore === 'weekly' ? 'a la semana' :
                frequencyTypeBefore === 'monthly' ? 'al mes' :
                frequencyTypeBefore === 'quarterly' ? 'al trimestre' :
                frequencyTypeBefore === 'semiannual' ? 'al semestre' : 'al año'
              }
            </div>
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Número de personas</label>
            <input 
              type="number" 
              className="w-full px-3 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 bg-white" 
              value={peopleCountBefore}
              placeholder="personas involucradas"
              onChange={(e) => setPeopleCountBefore(Number(e.target.value))}
            />
          </div>
          
          <div className="mt-6 pt-4 border-t border-red-100">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">Horas anuales:</label>
              <span className="font-bold text-red-700">{formatNumber(hoursBefore)} horas</span>
            </div>
          </div>
        </div>
        
        {/* After Process Panel */}
        <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-xl mb-5 text-green-700 flex items-center pb-2 border-b border-green-100">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FontAwesomeIcon icon={faRobot} className="text-green-700" />
            </div>
            Después de automatizar
          </h4>
          
          {/* After process inputs - unchanged */}
          {/* ... existing code ... */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Minutos por ejecución</label>
            <div className="relative">
              <input 
                type="number" 
                className="w-full pl-10 pr-3 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30 bg-white" 
                value={minutesAfter}
                step="0.5"
                min="0"
                placeholder="5 min"
                onChange={(e) => setMinutesAfter(Number(e.target.value))}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 text-sm">min</span>
            </div>
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Frecuencia de ejecución</label>
            <div className="grid grid-cols-2 gap-3">
              <select 
                className="pl-9 pr-3 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30 bg-white appearance-none"
                value={frequencyTypeAfter}
                onChange={(e) => setFrequencyTypeAfter(e.target.value)}
              >
                {Object.entries(frequencyIcons).map(([value, icon]) => (
                  <option key={value} value={value}>
                    {icon} {value === 'daily' ? 'Diario' : 
                      value === 'weekly' ? 'Semanal' : 
                      value === 'monthly' ? 'Mensual' : 
                      value === 'quarterly' ? 'Trimestral' : 
                      value === 'semiannual' ? 'Semestral' : 'Anual'}
                  </option>
                ))}
              </select>
              <div className="relative">
                <input 
                  type="number" 
                  className="w-full px-3 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30 bg-white" 
                  value={frequencyValueAfter}
                  placeholder="veces"
                  onChange={(e) => setFrequencyValueAfter(Number(e.target.value))}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 text-sm">veces</span>
              </div>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {frequencyValueAfter} {frequencyValueAfter === 1 ? 'vez' : 'veces'} {
                frequencyTypeAfter === 'daily' ? 'al día' :
                frequencyTypeAfter === 'weekly' ? 'a la semana' :
                frequencyTypeAfter === 'monthly' ? 'al mes' :
                frequencyTypeAfter === 'quarterly' ? 'al trimestre' :
                frequencyTypeAfter === 'semiannual' ? 'al semestre' : 'al año'
              }
            </div>
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1 text-gray-700">Número de personas</label>
            <input 
              type="number" 
              className="w-full px-3 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30 bg-white" 
              value={peopleCountAfter}
              placeholder="personas involucradas"
              onChange={(e) => setPeopleCountAfter(Number(e.target.value))}
            />
          </div>
          
          <div className="mt-6 pt-4 border-t border-green-100">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">Horas anuales:</label>
              <span className="font-bold text-green-700">{formatNumber(hoursAfter)} horas</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-primary/8 to-primary/5 rounded-xl border border-primary/20 shadow-sm">
        <h4 className="font-semibold text-2xl mb-8 text-primary flex items-center">
          <FontAwesomeIcon icon={faChartLine} className="mr-3" />
          Resultados de tu automatización
        </h4>
        
        {/* Progress bar showing reduction */}
        <div className="mb-10">
          <div className="flex justify-between mb-2 items-center">
            <span className="font-medium">Reducción de tiempo</span>
            <span className="font-bold text-3xl text-primary">{percentReduction.toFixed(0)}%</span>
          </div>
          <div className="h-6 bg-red-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentReduction > 100 ? 100 : percentReduction}%` }}
            >
            </div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>Proceso original: {formatNumber(hoursBefore)} horas/año</span>
            <span>Proceso optimizado: {formatNumber(hoursAfter)} horas/año</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="text-center">
              <div className="text-gray-600 text-sm mb-2">Horas ahorradas</div>
              <div className="text-3xl font-bold text-primary">{formatNumber(hoursSaved)}</div>
              <div className="flex justify-center items-center gap-1 text-gray-500 mt-1">
                <span className="text-xs">horas/año</span>
                <span className="text-green-500 text-xs">
                  ({formatNumber(hoursSaved/12)} horas/mes)
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="text-center">
              <div className="text-gray-600 text-sm mb-2">FTE equivalentes</div>
              <div className="text-3xl font-bold text-primary">{formatDecimal(fteEquivalent)}</div>
              <div className="text-xs text-gray-500 mt-1">personal tiempo completo</div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="text-center">
              <div className="text-gray-600 text-sm mb-2">Ahorro anual</div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary truncate px-1">
                ${formatNumber(colToDollars(moneySaved))}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                (${formatNumber(colToDollars(moneySaved/12))}/mes)
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="text-center">
              <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
                <span>ROI primer año</span>
                <div className="relative inline-block ml-1">
                  <button 
                    onClick={() => toggleTooltip('payback')}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="bg-gray-100 rounded-full w-4 h-4 inline-flex items-center justify-center text-xs">?</span>
                  </button>
                  {tooltips.payback && (
                    <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-xs text-gray-600 z-10">
                      <p>ROI = (Beneficio - Costo) / Costo</p>
                      <p>Tiempo de recuperación = Costo / (Beneficio mensual)</p>
                      <div className="absolute bottom-0 right-3 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-3xl font-bold text-primary">{formatDecimal(roi > 0 ? roi : 0)}%</div>
              <div className="text-xs text-gray-500 mt-1">
                Recupera en {formatDecimal(paybackMonths)} meses
              </div>
            </div>
          </div>
        </div>
        
        {/* Adoption Curve Settings */}
        <div className="mt-10 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5">
            <h5 className="font-semibold text-lg text-primary mb-3 md:mb-0">Curva de Adopción</h5>
            <div className="flex items-center space-x-4">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 bg-gray-50"
                value={adoptionCurveType}
                onChange={(e) => setAdoptionCurveType(e.target.value)}
              >
                <option value="linear">Lineal</option>
                <option value="exponential">Exponencial</option>
                <option value="custom">Personalizada</option>
              </select>
              
              <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1">Punto de inflexión</label>
                <div className="flex items-center">
                  <input 
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    disabled={adoptionCurveType === 'linear'}
                    className="w-28 h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
                    value={inflectionPoint}
                    onChange={(e) => setInflectionPoint(Number(e.target.value))}
                  />
                  <span className="ml-2 text-xs font-medium">{inflectionPoint} meses</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Adoption preview */}
          <div className="mb-4">
            <div className="h-10 flex items-end w-full">
              {adoptionPercentages.map((percentage, i) => (
                <div 
                  key={i}
                  className="flex-1 flex items-end justify-center"
                  style={{ height: '100%' }}
                >
                  <div 
                    className="w-full rounded-t transition-all shadow-sm"
                    style={{ 
                      height: `${percentage}%`,
                      background: `linear-gradient(to top, #3b82f6, #1d4ed8)`, 
                      opacity: selectedMonth === i+1 ? "1" : "0.85"
                    }}
                    title={`Mes ${i+1}: ${percentage.toFixed(0)}% de adopción`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              {[1, 3, 6, 9, 12].map(month => (
                <span key={month} className="text-center" style={{ width: '20px' }}>{month}</span>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-gray-600 mt-1">
            {adoptionCurveType === 'linear' ? (
              <p>La adopción crece de manera constante desde 0% hasta 100% durante los 12 meses.</p>
            ) : adoptionCurveType === 'exponential' ? (
              <p>La adopción crece lentamente al inicio, acelerando después del mes {inflectionPoint} cuando alcanza el 50%.</p>
            ) : (
              <p>Curva personalizada con adopción del 50% en el mes {inflectionPoint}.</p>
            )}
          </div>
        </div>
        
        {/* Timeline Journey */}
        <div className="mt-10 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5">
            <h5 className="font-semibold text-lg text-primary mb-3 md:mb-0">Viaje del Ahorro</h5>
            <div className="flex items-center space-x-4">
              {/* Add Settings button */}
              <div className="relative">
                <button
                  onClick={() => setShowSpeedSettings(!showSpeedSettings)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  title="Configurar velocidad"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Speed Settings Popover */}
                {showSpeedSettings && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 p-3">
                    <div className="text-sm font-medium text-gray-700 mb-2">Velocidad de recorrido</div>
                    <div className="space-y-2">
                      {speedOptions.map((option) => (
                        <div 
                          key={option.value}
                          className={`p-2 rounded-md cursor-pointer flex justify-between items-center ${animationSpeed === option.value ? 'bg-primary/10 border border-primary/30' : 'hover:bg-gray-50'}`}
                          onClick={() => {
                            setAnimationSpeed(option.value);
                            setShowSpeedSettings(false);
                          }}
                        >
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-xs text-gray-500">{option.description}</div>
                          </div>
                          {animationSpeed === option.value && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-2 italic">
                      Ajusta el tiempo entre transiciones para una lectura cómoda
                    </div>
                  </div>
                )}
              </div>
            
              <button 
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-lg border ${isAutoPlaying ? 'bg-primary text-white' : 'border-primary text-primary'}`}
              >
                {isAutoPlaying ? 'Pausar recorrido' : '▶ Recorrer automatización'}
              </button>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setViewAccumulated(false)}
                  className={`px-3 py-1.5 rounded-l-lg text-xs ${!viewAccumulated ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  Mes
                </button>
                <button 
                  onClick={() => setViewAccumulated(true)}
                  className={`px-3 py-1.5 rounded-r-lg text-xs ${viewAccumulated ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  Acumulado
                </button>
              </div>
            </div>
          </div>
          
          {/* Journey Timeline */}
          <div className="relative mt-10 mb-16">
            {/* Timeline line */}
            <div className="absolute top-7 left-0 w-full h-0.5 bg-gray-200"></div>
            
            {/* Journey path (colored line showing progress) */}
            <div 
              className="absolute top-7 left-0 h-0.5 bg-gradient-to-r from-green-500 to-primary rounded transition-all"
              style={{ width: `${(selectedMonth / 12) * 100}%` }}
            ></div>
            
            {/* Month markers */}
            <div className="flex justify-between relative">
              {monthNames.map((month, i) => {
                const isSelected = selectedMonth === i + 1;
                const isPassed = selectedMonth > i + 1;
                const isBreakEven = monthlySavings[i].isBreakEven;
                
                return (
                  <div 
                    key={i}
                    className="flex flex-col items-center"
                    onClick={() => setSelectedMonth(i + 1)}
                  >
                    <div className={`
                      w-7 h-7 rounded-full flex items-center justify-center cursor-pointer
                      ${isSelected ? 'bg-primary text-white transform scale-125 shadow-lg' : 
                        isPassed ? 'bg-primary/60 text-white' : 
                        'bg-gray-100 text-gray-500'}
                      ${isBreakEven ? 'ring-2 ring-green-500 ring-offset-2' : ''}
                      transition-all duration-300
                    `}>
                      {isBreakEven ? '💰' : i + 1}
                    </div>
                    
                    <span className={`text-xs mt-2 ${isSelected ? 'font-medium' : ''}`}>
                      {month}
                    </span>
                    
                    <span className="text-xs mt-1 text-gray-500">
                      {adoptionPercentages[i].toFixed(0)}%
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* Avatar animation */}
            <div 
              className="absolute top-6 transition-all duration-300"
              style={{ left: `calc(${((selectedMonth - 1) / 11) * 100}% - 10px)` }}
            >
              <div className="animate-bounce">
                <span role="img" aria-label="Robot" className="text-xl">🤖</span>
              </div>
            </div>
          </div>
          
          {/* Journey Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span role="img" aria-label="Clock" className="mr-2">🕒</span>
                  <span className="text-sm font-medium text-gray-700">Horas</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">
                    {formatNumber(viewAccumulated ? 
                      currentMonthData.cumulativeHours : 
                      currentMonthData.hours
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {viewAccumulated ? 'acumuladas' : 'este mes'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span role="img" aria-label="Person" className="mr-2">👤</span>
                  <span className="text-sm font-medium text-gray-700">FTE</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">
                    {formatDecimal(viewAccumulated ? 
                      currentMonthData.cumulativeFte : 
                      currentMonthData.fte
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {viewAccumulated ? 'acumulado' : 'este mes'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span role="img" aria-label="Money" className="mr-2">💰</span>
                  <span className="text-sm font-medium text-gray-700">Ahorro</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">
                    ${formatNumber(colToDollars(viewAccumulated ? 
                      currentMonthData.cumulativeSaving : 
                      currentMonthData.saving
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    {viewAccumulated ? 'acumulado' : 'este mes'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Journey context */}
          <div className="mt-6 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
            {selectedMonth === 12 ? (
              <p>
                ¡Enhorabuena! Has completado un año de automatización, logrando un ahorro total de ${formatNumber(colToDollars(currentMonthData.cumulativeSaving))}.
                {breakEvenMonth && ` Alcanzaste el punto de equilibrio en el mes ${breakEvenMonth.monthIndex}.`}
              </p>
            ) : currentMonthData.isBreakEven ? (
              <p>
                <strong>¡Punto de equilibrio alcanzado!</strong> En el mes {selectedMonth} recuperas tu inversión inicial de ${formatNumber(colToDollars(implementationCost))}.
                Todo ahorro a partir de ahora es beneficio neto.
              </p>
            ) : breakEvenMonth && selectedMonth > breakEvenMonth.monthIndex ? (
              <p>
                Con un {currentMonthData.adoption.toFixed(0)}% de adopción, este mes generas ${formatNumber(colToDollars(currentMonthData.saving))} de ahorro.
                Ya has superado el punto de equilibrio (mes {breakEvenMonth.monthIndex}).
              </p>
            ) : (
              <p>
                En el mes {selectedMonth}, con un {currentMonthData.adoption.toFixed(0)}% de adopción, estás ahorrando ${formatNumber(colToDollars(currentMonthData.saving))}.
                {viewAccumulated ? ` Has acumulado un ahorro de $${formatNumber(colToDollars(currentMonthData.cumulativeSaving))}.` : ''}
              </p>
            )}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-10 text-center">
          <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-primary/20">
            <FontAwesomeIcon icon={faMoneyBillTrendUp} className="mr-2" />
            Iniciar mi automatización
          </button>
          <p className="mt-3 text-sm text-gray-600">
            Comienza hoy y recupera tu inversión en {paybackMonths > 0 ? `aproximadamente 4.5 meses` : 'menos de un mes'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ROI;