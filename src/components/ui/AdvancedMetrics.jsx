import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente para mostrar métricas avanzadas de validación
 * - WAPE (Weighted Average Percentage Error) para visión agregada
 * - Pinball-Loss para intervalos de predicción
 * - U-Statistic como benchmark naïve
 */
const AdvancedMetrics = ({ metrics, className = '' }) => {
  const { wape, pinballLoss, uStatistic, benchmark } = metrics;
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-primary to-secondary p-1"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Métricas de Validación Avanzadas</h3>
        <p className="text-gray-600 mb-6">
          Métricas específicas para transporte y energía que ofrecen una visión más completa de la calidad predictiva.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* WAPE Metric */}
          <motion.div 
            className="bg-gray-50 rounded-lg p-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-2">
              <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3">
                <FontAwesomeIcon icon={faChartLine} className="text-primary text-xl" />
              </div>
              <h4 className="font-semibold text-lg">WAPE</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Weighted Average Percentage Error - Para visión agregada de error
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-secondary">{wape}%</span>
              <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">
                {wape < benchmark ? 'Mejor que benchmark' : 'Necesita mejora'}
              </span>
            </div>
          </motion.div>
          
          {/* Pinball Loss */}
          <motion.div 
            className="bg-gray-50 rounded-lg p-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-2">
              <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3">
                <FontAwesomeIcon icon={faChartBar} className="text-primary text-xl" />
              </div>
              <h4 className="font-semibold text-lg">Pinball-Loss</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Evalúa la calidad de los intervalos de predicción P10-P90
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-secondary">{pinballLoss}</span>
              <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">
                Calidad de intervalos
              </span>
            </div>
          </motion.div>
          
          {/* U-Statistic */}
          <motion.div 
            className="bg-gray-50 rounded-lg p-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-2">
              <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-3">
                <FontAwesomeIcon icon={faBalanceScale} className="text-primary text-xl" />
              </div>
              <h4 className="font-semibold text-lg">U-Statistic</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Benchmark comparativo contra modelo naïve (valor &lt; 1 es mejor)
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-secondary">{uStatistic}</span>
              <span className={`text-xs py-1 px-2 rounded-full ${
                uStatistic < 1 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {uStatistic < 1 ? 'Supera modelo naïve' : 'Revisar modelo'}
              </span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold mb-2 text-primary">Nota sobre métricas avanzadas:</h4>
          <p className="text-sm text-gray-700">
            Estas métricas son estándar en industrias como transporte y energía donde es importante 
            evaluar tanto la precisión puntual como la calidad de los intervalos de predicción. 
            El Bank for International Settlements recomienda este enfoque para comunicar efectivamente 
            la incertidumbre en previsiones económicas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedMetrics;
