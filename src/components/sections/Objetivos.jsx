import React from 'react';
import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';

const Objetivos = () => {
  const objetivosItems = [
    {
      title: "Digitalizar la Gestión de Ingresos",
      content: <p>Introducir análisis avanzados y herramientas automatizadas en el área de gestión de ingresos, permitiendo decisiones basadas en datos y en tiempo real.</p>
    },
    {
      title: "Optimizar Procesos y Eliminar Ineficiencias",
      content: <p>Aplicar la metodología Lean Six Sigma para mapear procesos actuales, identificar cuellos de botella y diseñar soluciones que reduzcan trabajo manual y errores operativos.</p>
    },
    {
      title: "Mejorar Pronósticos y Pricing",
      content: <p>Implementar modelos predictivos (Machine Learning) que mejoren la precisión de la demanda y soporten estrategias de precios dinámicos, optimizando la utilización de la flota y los ingresos.</p>
    },
    {
      title: "Automatizar Reportes y Tareas Repetitivas",
      content: <p>Usar Power Automate y otros medios para eliminar labores manuales (por ejemplo, generación de informes diarios o consolidación de datos), liberando horas de trabajo administrativo.</p>
    },
    {
      title: "Capacitar al Equipo Actual",
      content: <p>Aumentar la capacidad analítica del personal existente (no reducirlo), mediante capacitación en nuevas herramientas, permitiendo que el equipo dedique más tiempo a análisis estratégicos y menos a tareas de bajo valor.</p>
    }
  ];

  return (
    <section id="objetivos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Objetivos del Proyecto</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <Accordion items={objetivosItems} />
      </div>
    </section>
  );
};

export default Objetivos;