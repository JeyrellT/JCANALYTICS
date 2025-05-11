import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, faTools, faUsers, 
  faCalendarAlt, faMoneyBillWave, faCheckCircle, 
  faArrowRight, faLightbulb, faTasks, faHandshake
} from '@fortawesome/free-solid-svg-icons';

const Conclusion = () => {
  // Implementation steps
  const steps = [
    { id: 1, name: "Análisis", icon: faLightbulb, color: "bg-blue-600" },
    { id: 2, name: "Desarrollo", icon: faTools, color: "bg-purple-600" },
    { id: 3, name: "Implementación", icon: faTasks, color: "bg-orange-600" },
    { id: 4, name: "Seguimiento", icon: faHandshake, color: "bg-green-600" }
  ];

  return (
    <section id="conclusion" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Conclusiones y Próximos Pasos</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12 bg-white rounded-xl shadow-md p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Abstract decorative elements */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary opacity-10 rounded-full"></div>
            
            <p className="mb-8 text-lg relative z-10">La propuesta de transformación digital del área de gestión de ingresos brinda un plan completo y escalable. Los puntos clave son:</p>
            
            {/* Animated key points with icons */}
            <div className="space-y-4 relative z-10">
              {[
                { icon: faLightbulb, text: "Abordar inicialmente el análisis de procesos y datos para sentar bases sólidas." },
                { icon: faRocket, text: "Entregar rápidamente beneficios tangibles mientras se desarrollan soluciones más complejas." },
                { icon: faTools, text: "Aprovechar herramientas de última generación (Power BI, Power Automate, GitHub) para garantizar calidad y trazabilidad." },
                { icon: faUsers, text: "Enfatizar el crecimiento interno del equipo, no la reducción de personal, asegurando compromiso y continuidad." },
                { icon: faCalendarAlt, text: "El cronograma mensual asegura un avance medible, con entregables específicos, métricas de éxito y una clara asignación de roles." },
                { icon: faMoneyBillWave, text: "Los beneficios proyectados incluyen liberación de tiempo operativo, mejora en KPIs de ingresos y optimización de costos de flota." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-primary bg-opacity-10 p-2 rounded-full text-primary flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Implementation timeline */}
          <motion.div
            className="mb-12 bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center text-primary mb-8">Ruta de Implementación</h3>
            
            <div className="relative flex justify-between items-center mb-12">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2 z-0"></div>
              
              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id} 
                  className="z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-2`}>
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <p className="text-sm font-medium">{step.name}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="text-center text-lg">En conjunto, esta iniciativa permitirá maximizar ingresos de manera sostenible y eficiente, preparándolo para enfrentar el entorno competitivo con herramientas analíticas avanzadas.</p>
          </motion.div>
          
          {/* CTA section */}
          <motion.div
            className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
                transition: { 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                } 
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Recomendación</h3>
              <div className="w-16 h-1 bg-white opacity-50 mx-auto mb-6 rounded-full"></div>
              <p className="mb-8 max-w-2xl mx-auto">Avanzar con la implementación propuesta para aprovechar de inmediato las oportunidades de mejora, contando con un plan de seguimiento que garantice la consecución de los objetivos planteados.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                href="#contacto" 
                className="text-lg px-8 py-3 rounded-full bg-white text-primary hover:bg-opacity-90 transition-all shadow-lg"
              >
                <span>Solicitar Inicio del Proyecto</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Button>
            </motion.div>
            
            {/* Testimonial snippet */}
            <motion.div 
              className="mt-12 max-w-2xl mx-auto bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-2xl mb-4" />
              <p className="italic text-lg">"La transformación digital no se trata de tecnología, se trata de la estrategia y nuevas formas de pensar."</p>
              <p className="mt-4 font-semibold">- Jeanne W. Ross</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;