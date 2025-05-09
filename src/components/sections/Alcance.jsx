import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Alcance = () => {
  return (
    <section id="alcance" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Alcance de la Transformación Digital</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card header title="Integración de Datos">
            <p className="mb-4">Consolidación de información relevante (histórico de reservas, precios, ocupación, eventos, etc.) en una plataforma analítica unificada.</p>
            <p><strong>Caso de uso:</strong> Fuentes GDS y PMS conectadas en 2 días, reduciendo errores de transcripción en un 100%.</p>
          </Card>
          
          <Card header title="Automatización de Procesos">
            <p className="mb-4">Identificación y automatización de tareas manuales rutinarias como sincronización diaria de datos operativos y generación automática de reportes.</p>
            <p><strong>Caso de uso:</strong> Generación automática de informes diarios: de 2 horas/día a 2 minutos/día (reducción del 98%).</p>
          </Card>
          
          <Card header title="Visualización y Reporting">
            <p className="mb-4">Desarrollo de paneles interactivos en Power BI para monitorear KPIs clave como ocupación de flota, ingresos por vehículo y anticipación de demanda.</p>
            <p><strong>Caso de uso:</strong> Identificación visual de patrones de demanda permitió ajustar precios en temporada alta, incrementando margen en 12%.</p>
          </Card>
          
          <Card header title="Analítica Avanzada">
            <p className="mb-4">Implementación de modelos de machine learning para pronóstico de demanda futura y para soporte en pricing dinámico.</p>
            <p><strong>Caso de uso:</strong> Modelo predictivo detectó oportunidad no visible en datos tradicionales, aumentando ocupación en 7%.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Alcance;