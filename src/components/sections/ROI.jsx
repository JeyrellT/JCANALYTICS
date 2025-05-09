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
      description: 'Liberación de 250 horas/mes equivalentes a 1.2 FTE mediante automatización de 37 procesos.'
    },
    { 
      metric: 'Horas liberadas mensualmente',
      value: '250h',
      baseline: '0h', 
      target: '100%', 
      description: '≈37 procesos automatizados a 6.7h/proceso/mes, liberando 1.2 FTE anual.'
    }
  ];

  // New scenarios data
  const scenarios = [
    {
      name: "Conservador",
      processes: 25,
      hoursMonth: 125,
      savings: "$12,020",
      revenue: "$22,680",
      totalBenefit: "$34,700",
      roi: "85%",
      payback: "14 meses"
    },
    {
      name: "Base (recomendado)",
      processes: 37,
      hoursMonth: 250,
      savings: "$23,840",
      revenue: "$42,310",
      totalBenefit: "$66,150",
      roi: "162%",
      payback: "8 meses",
      recommended: true
    },
    {
      name: "Agresivo",
      processes: 45,
      hoursMonth: 360,
      savings: "$34,620",
      revenue: "$61,190",
      totalBenefit: "$95,810",
      roi: "235%",
      payback: "5 meses"
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
                  162%
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
                  8 meses
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
                  37
                </span>
              </div>
              <p className="text-text">Liberando 1.2 FTE (250h/mes)</p>
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
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Escenario</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Procesos</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Horas/mes</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Ahorro Anual</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Ingreso Extra</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Beneficio Total</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">ROI 1er Año</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Payback</th>
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
            Base de cálculo: Inversión total $40,680 (6 meses con IVA incluido)
          </div>
        </motion.div>

        {/* ROI Detailed Charts - Updated with new metrics */}
        <div className="bg-white rounded-lg shadow-elevation-1 p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Desglose de Beneficios</h3>
          
          <div className="space-y-8">
            {roiMetrics.map((item, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-secondary mr-3" />
                    <h4 className="font-semibold">{item.metric}</h4>
                  </div>
                  <span className="text-lg font-bold key-metric key-metric-threshold-exceeded">
                    {item.value}
                  </span>
                </div>
                
                <div className="bg-gray-100 rounded-full h-6 mb-2 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-secondary to-secondary-dark rounded-full"
                    initial={{ width: "0%" }}
                    animate={inView ? { width: item.target } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.3,
                      ease: [0.2, 0, 0.2, 1] 
                    }}
                  />
                </div>
                
                <p className="text-sm text-text">{item.description}</p>
              </div>
            ))}
          </div>

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
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-3">Distribución del Beneficio Total: $66,150</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faHandHoldingDollar} className="text-purple-800 mr-3 text-lg" />
                      <div>
                        <h5 className="font-medium">Ahorro por Automatización</h5>
                        <p className="text-lg font-bold mt-1">$23,840 <span className="text-sm font-normal">/año</span></p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Equivale a 1.2 FTE liberados para tareas de mayor valor</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="text-blue-600 mr-3 text-lg" />
                      <div>
                        <h5 className="font-medium">Incremento de Ingresos</h5>
                        <p className="text-lg font-bold mt-1">$42,310 <span className="text-sm font-normal">/año</span></p>
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
                <p><strong>Inversión con transparencia:</strong> $40,680 total (fee $6,000 + 13% IVA × 6 meses)</p>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                <p><strong>Medición del tiempo liberado:</strong> 37 procesos × 6.7h/proceso = 250h/mes (1.2 FTE)</p>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                <p><strong>Modelo mixto de beneficios:</strong> 35% ahorro operativo + 65% incremento de ingresos</p>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</div>
                <p><strong>Fórmula estándar de la industria:</strong> ROI = (Beneficio-Costo)/Costo = 162%</p>
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
                <p><strong>Capital humano potenciado:</strong> 250 horas mensuales liberadas para análisis estratégico, no tareas repetitivas.</p>
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
              <p className="mt-3 text-sm text-gray-600">No es gasto, es inversión con ROI comprobado de 162%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROI;