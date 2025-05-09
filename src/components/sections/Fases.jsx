import React from 'react';
import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';

const Fases = () => {
  const fasesItems = [
    {
      badge: '1',
      title: 'Mes 1 – Análisis Inicial y Beneficios Tempranos',
      content: (
        <div>
          <p className="mb-2"><strong>Objetivos:</strong> Recolección de información, mapeo de procesos actuales de gestión de ingresos, identificación de puntos críticos y oportunidades de automatización de bajo alcance.</p>
          <p className="mb-2"><strong>Entregables:</strong> Documentación de procesos actuales, informe de diagnóstico inicial, primeras automatizaciones simples, panel inicial de KPIs estáticos en Power BI.</p>
          <p className="mb-2"><strong>Caso de uso:</strong> Reducción de 3 horas diarias en tareas de reportería manual con la primera automatización de informes.</p>
          <p><strong>Versión GitHub:</strong> Creación de repositorio base con estructura inicial y primeros componentes (tag v0.1).</p>
        </div>
      )
    },
    {
      badge: '2',
      title: 'Mes 2 – Diseño de Soluciones y Prototipos',
      content: (
        <div>
          <p className="mb-2"><strong>Objetivos:</strong> Definición de soluciones técnicas detalladas y validación con usuarios, establecimiento de entornos de desarrollo/prueba.</p>
          <p className="mb-2"><strong>Entregables:</strong> Plan de integración de datos, prototipos de dashboards Power BI, scripts iniciales de automatización, repositorio de código en GitHub.</p>
          <p className="mb-2"><strong>Caso de uso:</strong> Primera integración con sistema de reservas que reduce tiempo de extracción de datos de 2 horas a 5 minutos diarios.</p>
          <p><strong>Versión GitHub:</strong> Todos los flujos Power Automate versionados con tag v0.2, implementación de ramas feature/develop/main.</p>
        </div>
      )
    },
    {
      badge: '3',
      title: 'Mes 3 – Desarrollo Activo y Validación',
      content: (
        <div>
          <p className="mb-2"><strong>Objetivos:</strong> Puesta en marcha de las herramientas principales. El Desarrollador Senior empieza el desarrollo activo.</p>
          <p className="mb-2"><strong>Entregables:</strong> Versión beta de dashboards Power BI, pipelines de datos implementados, documentación actualizada, primeras predicciones básicas.</p>
          <p className="mb-2"><strong>Caso de uso:</strong> Dashboard con visibilidad de ocupación permite aumentar el índice de uso de flota en un 3%.</p>
          <p><strong>Versión GitHub:</strong> Implementación de CI/CD para pruebas automatizadas de flujos Power Automate y validación de datos (tag v0.3).</p>
        </div>
      )
    },
    {
      badge: '4',
      title: 'Mes 4 – Modelos Analíticos y Expansión de Automatizaciones',
      content: (
        <div>
          <p className="mb-2"><strong>Objetivos:</strong> Desarrollar e integrar modelos de machine learning para forecasting, extender la automatización a más procesos operativos.</p>
          <p className="mb-2"><strong>Entregables:</strong> Modelos de forecasting integrados en Power BI, automatización de reportes recurrentes, conjunto de pruebas y validación.</p>
          <p className="mb-2"><strong>Caso de uso:</strong> Primer modelo predictivo con precisión del 85% para forecast de demanda en temporada alta aumenta ingresos en 5%.</p>
          <p><strong>Versión GitHub:</strong> Scripts de modelos ML con documentación extensa y tests unitarios integrados (tag v0.4).</p>
        </div>
      )
    },
    {
      badge: '5',
      title: 'Mes 5 – Optimización y Entrenamiento del Equipo',
      content: (
        <div>
          <p className="mb-2"><strong>Objetivos:</strong> Ajuste fino de soluciones implementadas y transferencia de conocimiento al equipo de gestión de ingresos.</p>
          <p className="mb-2"><strong>Entregables:</strong> Dashboards finales, flujos de trabajo pulidos, manuales y guías de usuario, sesiones de capacitación, plan de mantenimiento.</p>
          <p className="mb-2"><strong>Caso de uso:</strong> Capacitación de 10 analistas reduce dependencia de TI y permite iteraciones rápidas en reportes por parte del equipo.</p>
          <p><strong>Versión GitHub:</strong> Documentación completa de usuario y código, wiki con guías paso a paso (tag v0.5).</p>
        </div>
      )
    },
    {
      badge: '6',
      title: 'Mes 6 – Puesta en Producción y Cierre de Proyecto',
      content: (
        <div>
          <p className="mb-2"><strong>Objetivos:</strong> Garantizar la adopción de las soluciones y consolidar los beneficios alcanzados.</p>
          <p className="mb-2"><strong>Entregables:</strong> Soluciones desplegadas en producción, informe de métricas de impacto, plan de continuidad con recomendaciones.</p>
          <p className="mb-2"><strong>Caso de uso:</strong> Gestión de ingresos completamente digitalizada genera incremento verificado del 8% en ingresos mensuales.</p>
          <p><strong>Versión GitHub:</strong> Release v1.0 estable con todos los componentes implementados y documentados.</p>
        </div>
      )
    }
  ];

  return (
    <section id="fases" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Fases de Implementación y Entregables Mensuales</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <Accordion items={fasesItems} />
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">Cronograma de Roles y Responsabilidades</h3>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Mes</th>
                  <th className="py-4 px-6 text-left">Gestor de Proyecto (Lean Six Sigma)</th>
                  <th className="py-4 px-6 text-left">Gestor Administrativo</th>
                  <th className="py-4 px-6 text-left">Desarrollador Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-100">Mes 1-2</td>
                  <td className="py-4 px-6 border-b border-gray-100">Lidera análisis de procesos y datos; diseña solución técnica.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Coordina con áreas, documenta requisitos y reporta avances.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Colabora en identificación de necesidades; participa como PM en requerimientos.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-100">Mes 3-4</td>
                  <td className="py-4 px-6 border-b border-gray-100">Supervisa desarrollo técnico y mejoras continuas.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Da soporte logístico y de comunicación; prepara capacitaciones iniciales.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Desarrolla activamente: scripts, dashboards, flujos y modelos ML.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-100">Mes 5-6</td>
                  <td className="py-4 px-6 border-b border-gray-100">Asesora en ajuste de modelos y control de procesos.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Gestiona capacitación avanzada y asegura documentación completa.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Finaliza implementaciones y despliega soluciones en producción.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fases;