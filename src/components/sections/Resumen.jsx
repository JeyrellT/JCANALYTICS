import React from 'react';
import Card from '../ui/Card';
import StatItem from '../ui/StatItem';
import { motion } from 'framer-motion';

const Resumen = () => {
  return (
    <section id="resumen" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-primary mb-4">Resumen Ejecutivo</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card header title="Objetivo General">
            <p className="mb-4">Impulsar la gestión de ingresos empresarial mediante una transformación digital que potencie el análisis de datos y automatice los procesos clave.</p>
            <p><strong>Impacto:</strong> De 20 horas semanales en tareas manuales a menos de 5, liberando tiempo para análisis estratégico.</p>
          </Card>
          
          <Card header title="Metodología">
            <p className="mb-4">Se adoptará un enfoque Lean Six Sigma para identificar y eliminar ineficiencias, combinando experiencia técnica y de gestión.</p>
            <p><strong>Impacto:</strong> Reducción de un 30% en variabilidad de procesos y aumento de 25% en precisión de previsiones.</p>
          </Card>
          
          <Card header title="Entregables">
            <p className="mb-4">Por mes se generan entregables concretos: documentación de procesos, automatizaciones, dashboards en Power BI, y modelos de predicción de demanda.</p>
            <p><strong>Impacto:</strong> Incremento mensurable del 2-3% en ingresos por cada módulo implementado.</p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <StatItem number="6" label="Meses de Implementación" />
          <StatItem number="162" label="ROI Primer Año (%)" />
          <StatItem prefix="$" number="42" label="Incremento Anual de Ingresos (miles)" />
          <StatItem number="250" suffix="+" label="Horas Mensuales Liberadas" />
        </div>
      </div>
    </section>
  );
};

export default Resumen;