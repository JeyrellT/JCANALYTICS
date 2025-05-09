import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Beneficios = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const benefitRows = [
    {
      module: "1. Integración de Datos y Reportes Básicos",
      deliverables: "ETL inicial de datos de reservas y flota; primer dashboard básico en Power BI.",
      benefits: [
        "Consolidación de información clave en un solo lugar.",
        "Visibilidad inicial de indicadores (ocupación, ingresos).",
        "Reducción de errores manuales en consolidación de datos."
      ]
    },
    {
      module: "2. Automatización de Informes",
      deliverables: "Flujos Power Automate para generación y envío automático de reportes diarios/semanales.",
      benefits: [
        "Liberación de horas de trabajo manual.",
        "Información más oportuna para toma de decisiones.",
        "Minimización de errores por manipulación manual."
      ]
    },
    {
      module: "3. Dashboards Interactivos en Power BI",
      deliverables: "Paneles avanzados con KPIs dinámicos de gestión de ingresos.",
      benefits: [
        "Seguimiento en tiempo real de KPIs críticos.",
        "Mejor visibilidad de tendencias.",
        "Soporte a decisiones tácticas y estratégicas basadas en datos."
      ]
    },
    {
      module: "4. Modelos Predictivos de Demanda",
      deliverables: "Implementación de modelo ML para forecast de reservas por ubicación/fecha.",
      benefits: [
        "Pronósticos más precisos de demanda futura.",
        "Optimización de asignación de flota.",
        "Mejora en la planificación de precios y flota."
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4 section-title-underline inline-block">Beneficios por Módulo Entregado</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Desktop version */}
        <motion.div
          className="hidden md:block overflow-hidden rounded-lg shadow-elevation-2 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-[#1a2530] text-white grid grid-cols-12 py-4">
              <div className="col-span-3 px-6 font-semibold">Módulo</div>
              <div className="col-span-4 px-6 font-semibold">Entregables / Funcionalidad</div>
              <div className="col-span-5 px-6 font-semibold">Beneficios Clave</div>
            </div>
            
            {benefitRows.map((row, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-12 border-b border-gray-100 ${
                  hoveredRow === index ? 'bg-blue-50' : 'bg-white'
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div className="col-span-3 py-4 px-6 border-r border-gray-100">
                  <span className="font-medium text-primary">{row.module}</span>
                </div>
                <div className="col-span-4 py-4 px-6 border-r border-gray-100">
                  {row.deliverables}
                </div>
                <div className="col-span-5 py-4 px-6">
                  <ul className="space-y-2 reveal-list">
                    {row.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-secondary bg-opacity-10 flex-shrink-0 mr-2 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Mobile version - Accordion style for better mobile experience */}
        <div className="md:hidden space-y-4">
          {benefitRows.map((row, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-elevation-1 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-primary to-[#1a2530] text-white py-3 px-4">
                <h3 className="font-semibold">{row.module}</h3>
              </div>
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-sm text-gray-500 mb-1">Entregables / Funcionalidad:</h4>
                <p>{row.deliverables}</p>
              </div>
              <div className="p-4">
                <h4 className="text-sm text-gray-500 mb-3">Beneficios Clave:</h4>
                <ul className="space-y-3 reveal-list">
                  {row.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-secondary bg-opacity-10 flex-shrink-0 mr-2 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;