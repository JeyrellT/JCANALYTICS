import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faArrowsRotate, faClipboardCheck, faChartLine, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CentroExcelencia = () => {
  // Aumentando el tamaño base de los elementos del ciclo
  const stepStyle = "absolute flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40";

  return (
    <section id="centro-excelencia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4 section-title-underline">Centro de Excelencia de Datos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="text-center mb-16">
          <motion.h3
            className="text-2xl md:text-3xl font-semibold mb-6 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ciclo Kaizen de Mejora Continua
          </motion.h3>
          
          {/* Desktop version of the Kaizen circle - aumentado de tamaño */}
          <motion.div 
            className="relative w-[90vw] max-w-[450px] h-[90vw] max-h-[450px] mx-auto my-12 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main circle with slow rotation */}
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-dashed border-gray-200 kaizen-circle"
              style={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 60,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            
            <div className={`${stepStyle} top-0 left-1/2 transform -translate-x-1/2`}>
              <motion.div 
                className="bg-white rounded-full w-full h-full shadow-elevation-1 flex flex-col items-center justify-center kaizen-step p-2"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.25 }
                }}
              >
                <div className="bg-gradient-to-r from-secondary to-[#217dbb] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <h4 className="font-semibold mb-1">Planificar</h4>
                <p className="text-xs">Identificar mejoras</p>
              </motion.div>
            </div>
            
            <div className={`${stepStyle} top-1/2 right-0 transform -translate-y-1/2`}>
              <motion.div 
                className="bg-white rounded-full w-full h-full shadow-elevation-1 flex flex-col items-center justify-center kaizen-step p-2"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.25 }
                }}
              >
                <div className="bg-gradient-to-r from-secondary to-[#217dbb] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </div>
                <h4 className="font-semibold mb-1">Hacer</h4>
                <p className="text-xs">Implementar cambios</p>
              </motion.div>
            </div>
            
            <div className={`${stepStyle} bottom-0 left-1/2 transform -translate-x-1/2`}>
              <motion.div 
                className="bg-white rounded-full w-full h-full shadow-elevation-1 flex flex-col items-center justify-center kaizen-step p-2"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.25 }
                }}
              >
                <div className="bg-gradient-to-r from-secondary to-[#217dbb] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <h4 className="font-semibold mb-1">Verificar</h4>
                <p className="text-xs">Medir resultados</p>
              </motion.div>
            </div>
            
            <div className={`${stepStyle} top-1/2 left-0 transform -translate-y-1/2`}>
              <motion.div 
                className="bg-white rounded-full w-full h-full shadow-elevation-1 flex flex-col items-center justify-center kaizen-step p-2"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.25 }
                }}
              >
                <div className="bg-gradient-to-r from-secondary to-[#217dbb] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h4 className="font-semibold mb-1">Actuar</h4>
                <p className="text-xs">Estandarizar mejoras</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-primary to-dark flex items-center justify-center text-white font-semibold text-center shadow-elevation-2"
              animate={{ 
                boxShadow: ["0 4px 12px rgba(0,0,0,0.1)", "0 8px 20px rgba(0,0,0,0.15)", "0 4px 12px rgba(0,0,0,0.1)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              <div>
                <FontAwesomeIcon icon={faCogs} className="text-xl mb-1" />
                <span className="block">Mejora<br/>Continua</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Mobile version of the Kaizen steps - mejorada la visualización */}
          <motion.div 
            className="space-y-4 md:hidden max-w-sm mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { num: 1, icon: faClipboardCheck, title: "Planificar", desc: "Identificar áreas de mejora" },
              { num: 2, icon: faArrowsRotate, title: "Hacer", desc: "Implementar cambios" },
              { num: 3, icon: faMagnifyingGlass, title: "Verificar", desc: "Medir resultados" },
              { num: 4, icon: faChartLine, title: "Actuar", desc: "Estandarizar mejoras" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-lg shadow-elevation-1 p-4 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.25 }
                }}
              >
                <div className="bg-gradient-to-r from-secondary to-[#217dbb] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              className="bg-gradient-to-r from-primary to-dark text-white p-4 rounded-lg shadow-md text-center mt-6 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.25 }
              }}
            >
              <FontAwesomeIcon icon={faCogs} className="mr-2" />
              Mejora Continua
            </motion.div>
          </motion.div>
        </div>
        
        <div className="my-16">
          <motion.h3
            className="text-2xl md:text-3xl font-semibold mb-6 text-primary text-center section-title-underline inline-block mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Continuidad Más Allá del Proyecto
          </motion.h3>
          
          <div className="relative border-t-4 border-light py-8 md:py-16 my-12">
            {/* Desktop version - Generalizada sin menciones a Revenue Management */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { position: "left-[10%]", date: "Mes 6", label: "Finalización del Proyecto", completed: true },
                { position: "left-[40%]", date: "Q3 2025", label: "Revisión Trimestral", details: "Optimización de modelos de análisis, nuevos KPIs" },
                { position: "left-[70%]", date: "Q4 2025", label: "Expansión Analytics", details: "Nuevas fuentes de datos, analítica predictiva" },
                { position: "left-[95%]", date: "Q1 2026", label: "Capacitación Avanzada", details: "Formación en análisis de datos para el equipo" }
              ].map((point, i) => (
                <motion.div 
                  key={i} 
                  className={`absolute top-0 transform -translate-y-1/2 ${point.position} text-center w-32`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <div className={`mx-auto px-3 py-2 rounded text-white text-sm font-bold mb-2 ${point.completed ? "bg-gradient-to-r from-success to-success-dark" : "bg-gradient-to-r from-secondary to-secondary-dark"}`}>
                    {point.date}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{point.label}</h4>
                  {point.details && (
                    <p className="text-xs text-primary max-w-[120px] mx-auto">{point.details}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Mobile version - Generalizada sin menciones a Revenue Management */}
            <div className="md:hidden border-l-4 border-light ml-4 pl-6">
              {[
                { date: "Mes 6", label: "Finalización del Proyecto", completed: true },
                { date: "Q3 2025", label: "Revisión Trimestral", details: "Optimización de modelos de análisis, nuevos KPIs" },
                { date: "Q4 2025", label: "Expansión Analytics", details: "Nuevas fuentes de datos, analítica predictiva" },
                { date: "Q1 2026", label: "Capacitación Avanzada", details: "Formación en análisis de datos para el equipo" }
              ].map((point, i) => (
                <motion.div 
                  key={i} 
                  className="relative mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.25 } }}
                >
                  <div className={`inline-block px-3 py-1 rounded text-white text-sm font-bold ${point.completed ? "bg-gradient-to-r from-success to-success-dark" : "bg-gradient-to-r from-secondary to-secondary-dark"}`}>
                    {point.date}
                  </div>
                  <h4 className="font-semibold mt-2">{point.label}</h4>
                  {point.details && (
                    <p className="text-sm text-primary mt-1">{point.details}</p>
                  )}
                  <motion.div 
                    className="absolute top-2 left-0 w-3 h-3 rounded-full bg-secondary border-4 border-white -ml-[2.25rem]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.5, transition: { duration: 0.25 } }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            title="Sprints Internos" 
            icon={<FontAwesomeIcon icon={faArrowsRotate} />}
          >
            <p className="mb-4">Ciclos mensuales de mejora donde el equipo identifica oportunidades y desarrolla mejoras incrementales en los dashboards y modelos.</p>
            <p><strong className="text-primary">Impacto:</strong> Cultura de innovación continua y adaptación a nuevas necesidades de negocio.</p>
          </Card>
          
          <Card 
            title="Control de Calidad de Datos" 
            icon={<FontAwesomeIcon icon={faClipboardCheck} />}
          >
            <p className="mb-4">Revisión semanal de la integridad y precisión de los datos utilizados en los modelos analíticos y dashboards.</p>
            <div className="bg-light bg-opacity-30 p-3 rounded-lg">
              <p><strong className="text-primary">Impacto:</strong> <span className="key-metric key-metric-threshold-exceeded">Confianza del 99.8%</span> en la toma de decisiones basada en datos.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CentroExcelencia;