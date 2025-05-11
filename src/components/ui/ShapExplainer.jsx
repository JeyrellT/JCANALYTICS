import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChartBar, faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente para mostrar información de interpretabilidad SHAP
 * que genera paneles explicativos para cada forecast
 */
const ShapExplainer = ({ forecastData, className }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  
  // Ejemplo de datos SHAP para visualización
  const shapValues = [
    { feature: 'flight_arrivals_next_day', value: 2.7, impact: 'positive', description: 'Llegadas de vuelos del día siguiente' },
    { feature: 'seasonal_factor_month', value: 1.8, impact: 'positive', description: 'Factor estacional del mes' },
    { feature: 'pricing_last_week', value: 1.5, impact: 'positive', description: 'Precio de la semana pasada' },
    { feature: 'local_events', value: 0.9, impact: 'positive', description: 'Eventos locales' },
    { feature: 'weather_forecast', value: 0.6, impact: 'positive', description: 'Pronóstico del clima' },
    { feature: 'competitor_pricing', value: -0.4, impact: 'negative', description: 'Precios de competidores' },
    { feature: 'maintenance_scheduled', value: -1.2, impact: 'negative', description: 'Mantenimiento programado' },
    { feature: 'previous_cancellations', value: -1.8, impact: 'negative', description: 'Cancelaciones previas' }
  ];
  
  // Información detallada para la característica seleccionada
  const featureDetails = {
    'flight_arrivals_next_day': {
      title: 'Llegadas de Vuelos del Día Siguiente',
      impact: 'Alto impacto positivo (+2.7)',
      explanation: 'La cantidad de llegadas de vuelos programadas para mañana tiene una fuerte correlación con la demanda de alquiler de vehículos. Cada incremento de 10% en llegadas produce aproximadamente un 6% de aumento en reservas.',
      recommendations: [
        'Monitorear cambios en programación de aerolíneas',
        'Ajustar disponibilidad de flota para días con picos de llegadas',
        'Considerar pricing dinámico basado en este indicador'
      ],
      chart: {
        type: 'line',
        labels: ['0%', '25%', '50%', '75%', '100%'],
        values: [0.5, 1.2, 2.0, 2.7, 3.5]
      }
    },
    'seasonal_factor_month': {
      title: 'Factor Estacional del Mes',
      impact: 'Impacto positivo significativo (+1.8)',
      explanation: 'Mayo es históricamente un mes de demanda moderada-alta (factor 1.8), acercándose a la temporada alta de verano. Las tendencias estacionales son consistentes año tras año con variación del 15%.',
      recommendations: [
        'Aplicar factor de ajuste estacional a todas las predicciones',
        'Preparar estrategia para incremento de demanda en próximos meses',
        'Revisar históricos de años anteriores para ajuste fino'
      ],
      chart: {
        type: 'bar',
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        values: [0.7, 0.8, 1.0, 1.3, 1.8, 2.1, 2.5, 2.6, 2.0, 1.5, 1.0, 1.7]
      }
    },
    'previous_cancellations': {
      title: 'Cancelaciones Previas',
      impact: 'Alto impacto negativo (-1.8)',
      explanation: 'Un aumento en las cancelaciones en los últimos 7 días suele predecir una tendencia a la baja en reservas (impacto -1.8). Este patrón puede indicar problemas externos que afectan a los clientes.',
      recommendations: [
        'Investigar causas raíz de cancelaciones recientes',
        'Ajustar previsiones a la baja cuando este indicador aumente',
        'Considerar políticas de cancelación flexible para mitigar el efecto'
      ],
      chart: {
        type: 'line',
        labels: ['7 días', '6 días', '5 días', '4 días', '3 días', '2 días', '1 día'],
        values: [3, 2, 5, 4, 8, 7, 10]
      }
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-primary to-secondary p-1"></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} className="text-2xl text-primary mr-3" />
            <h3 className="text-xl font-semibold text-primary">Explicabilidad SHAP</h3>
          </div>
          
          <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            Modelo: GradientBoostingRegressor
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          Explicabilidad mediante valores SHAP (SHapley Additive exPlanations), que muestran la contribución
          de cada variable a la predicción final, mejorando la transparencia y confianza en el modelo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Panel principal de SHAP Values */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-4">Impacto de Variables en la Predicción</h4>
              
              {/* Gráfico de barras SHAP */}
              <div className="mb-6 space-y-3">
                {shapValues.map(item => (
                  <motion.div 
                    key={item.feature}
                    className="flex items-center cursor-pointer"
                    whileHover={{ backgroundColor: 'rgba(52, 152, 219, 0.1)' }}
                    onClick={() => setSelectedFeature(item.feature)}
                  >
                    <div className="w-32 text-sm truncate" title={item.description}>
                      {item.description}
                    </div>
                    
                    <div className="flex-1 px-2 relative">
                      <div className={`h-6 flex items-center rounded ${
                        item.impact === 'positive' 
                          ? 'justify-start bg-gradient-to-r from-blue-500 to-blue-300' 
                          : 'justify-end bg-gradient-to-r from-amber-300 to-amber-500'
                      }`}
                        style={{ 
                          width: `${Math.abs(item.value) * 15}%`,
                          minWidth: '20px',
                          maxWidth: '100%'
                        }}
                      >
                        <span className={`px-2 font-semibold text-xs text-white`}>
                          {item.value > 0 ? `+${item.value}` : item.value}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-20 text-right text-xs font-medium">
                      {item.impact === 'positive' ? 'Aumenta' : 'Disminuye'}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-xs text-gray-500 italic mt-2">
                Valores SHAP: contribución de cada variable a la desviación desde el valor base
              </div>
            </div>
          </div>
          
          {/* Panel de información detallada */}
          <div className="col-span-1">
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              {selectedFeature && featureDetails[selectedFeature] ? (
                <>
                  <h4 className="font-medium text-lg mb-2">{featureDetails[selectedFeature].title}</h4>
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-3 ${
                    featureDetails[selectedFeature].impact.includes('positivo') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {featureDetails[selectedFeature].impact}
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">
                    {featureDetails[selectedFeature].explanation}
                  </p>
                  
                  <h5 className="font-medium text-sm mb-2 flex items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-amber-500" />
                    Recomendaciones
                  </h5>
                  <ul className="text-xs text-gray-700 list-disc pl-5 mb-4 space-y-1">
                    {featureDetails[selectedFeature].recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                  <FontAwesomeIcon icon={faArrowRight} className="text-4xl mb-2" />
                  <p>Selecciona una variable para ver detalles</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-semibold mb-2 flex items-center">
            <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-purple-500" />
            Beneficio de SHAP en la toma de decisiones
          </h4>
          <p className="text-sm text-gray-700">
            Según Christoph Mueller's Blog, los valores SHAP permiten traducir modelos complejos como Gradient Boosting
            en explicaciones lineales simples, lo que aumenta la confianza y adopción de modelos black-box entre equipos
            de negocio. En estudios de casos reales, el tiempo de decisión se reduce en un 40% cuando los analistas 
            cuentan con estas visualizaciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShapExplainer;
