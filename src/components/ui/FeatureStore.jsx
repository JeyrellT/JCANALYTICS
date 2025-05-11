import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faHistory, faSync, faServer } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente que simula un Feature Store ligero basado en Feast
 * para versionar y servir variables en proyectos Python
 */
const FeatureStore = ({ className }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Ejemplo de features almacenadas
  const features = [
    { 
      name: 'historical_demand', 
      type: 'temporal', 
      version: '1.2.0',
      lastUpdated: '2025-04-28',
      description: 'Demanda histórica por tipo de vehículo'
    },
    { 
      name: 'weather_forecasts', 
      type: 'external', 
      version: '2.0.1',
      lastUpdated: '2025-05-05',
      description: 'Pronósticos meteorológicos de API externa'
    },
    { 
      name: 'event_calendar', 
      type: 'categorical', 
      version: '1.0.5',
      lastUpdated: '2025-05-01',
      description: 'Calendario de eventos y festivos'
    },
    { 
      name: 'flight_arrivals', 
      type: 'external', 
      version: '1.3.2',
      lastUpdated: '2025-05-08',
      description: 'Programación de llegadas de vuelos'
    },
    { 
      name: 'pricing_history', 
      type: 'temporal', 
      version: '2.1.0',
      lastUpdated: '2025-05-09',
      description: 'Historial de precios y estrategias'
    }
  ];

  const feastCodes = {
    registry: `# Definición del registro de Features en Feast
from datetime import timedelta
from feast import Entity, FeatureView, Field, FileSource
from feast.types import Float32, Int64, String

# Definir la entidad principal (flota)
fleet = Entity(name="fleet_id", description="ID de flota")

# Fuente de datos para características históricas
demand_source = FileSource(
    path="data/historical_demand.parquet",
    timestamp_field="event_timestamp",
)

# Vista de características de demanda
demand_view = FeatureView(
    name="demand_features",
    entities=[fleet],
    ttl=timedelta(days=180),
    schema=[
        Field(name="daily_demand", dtype=Int64),
        Field(name="weekly_avg", dtype=Float32),
        Field(name="monthly_trend", dtype=Float32),
    ],
    source=demand_source,
    online=True,
)`,
    
    retrieval: `# Código para obtener features en tiempo de entrenamiento o inferencia
import feast
from datetime import datetime

# Inicializar cliente de Feast
fs = feast.FeatureStore("feature_repo")

# Feature vector para entrenamiento (modo offline)
training_df = fs.get_historical_features(
    entity_df=entity_df,
    features=[
        "demand_features:daily_demand",
        "demand_features:weekly_avg",
        "demand_features:monthly_trend",
        "external_features:weather_forecast",
        "external_features:flight_arrivals"
    ]
).to_df()

# Features para inferencia (modo online)
feature_vector = fs.get_online_features(
    features=[
        "demand_features:daily_demand",
        "external_features:weather_forecast"
    ],
    entity_rows=[{"fleet_id": 123}]
).to_dict()

# Predicción utilizando las features obtenidas
prediction = model.predict(feature_vector)`
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-primary to-secondary p-1"></div>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-primary mr-3" />
          <h3 className="text-xl font-semibold text-primary">Feature Store con Feast</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Infraestructura ligera para versionar, validar y servir variables predictivas con Feast, 
          que ya ofrece orquestación mínima para proyectos Python.
        </p>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            aria-label="Ver resumen del feature store"
            role="tab"
            aria-selected={activeTab === 'overview'}
          >
            <FontAwesomeIcon icon={faDatabase} className="mr-2" />
            Resumen
          </button>
          <button 
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === 'features' 
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            aria-label="Ver catálogo de features"
            role="tab"
            aria-selected={activeTab === 'features'}
          >
            <FontAwesomeIcon icon={faHistory} className="mr-2" />
            Catálogo
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === 'code' 
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            aria-label="Ver código de implementación"
            role="tab"
            aria-selected={activeTab === 'code'}
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Implementación
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-lg p-4">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faServer} className="mr-2 text-secondary" />
                    ¿Qué es Feast?
                  </h4>
                  <p className="text-sm text-gray-700">
                    Feast es un sistema open-source que permite almacenar, gestionar y servir features 
                    para modelos de machine learning. Facilita la creación de pipelines consistentes 
                    entre entrenamiento e inferencia.
                  </p>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faSync} className="mr-2 text-secondary" />
                    Beneficios clave
                  </h4>
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    <li>Versionado de features para reproducibilidad</li>
                    <li>Validación automática de tipos y esquemas</li>
                    <li>Servicio online/offline con la misma interfaz</li>
                    <li>Orquestación mínima sin infraestructura pesada</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold mb-2">Implementación en la Empresa</h4>
                <p className="text-sm">
                  El Feature Store centraliza variables críticas como demanda histórica, 
                  datos meteorológicos, calendarios de eventos y llegadas de vuelos. 
                  Según estudios de SpringerOpen, esta combinación reduce errores de predicción entre 12-18%.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Nombre</th>
                    <th className="py-2 px-4 text-left">Tipo</th>
                    <th className="py-2 px-4 text-left">Versión</th>
                    <th className="py-2 px-4 text-left">Actualización</th>
                    <th className="py-2 px-4 text-left">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <motion.tr 
                      key={feature.name}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      whileHover={{ backgroundColor: 'rgba(52, 152, 219, 0.1)' }}
                    >
                      <td className="py-2 px-4">{feature.name}</td>
                      <td className="py-2 px-4">
                        <span className={`inline-block py-1 px-2 rounded-full text-xs ${
                          feature.type === 'temporal' 
                            ? 'bg-blue-100 text-blue-800' 
                            : feature.type === 'external'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-amber-100 text-amber-800'
                        }`}>
                          {feature.type}
                        </span>
                      </td>
                      <td className="py-2 px-4">{feature.version}</td>
                      <td className="py-2 px-4">{feature.lastUpdated}</td>
                      <td className="py-2 px-4">{feature.description}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Definición del Feature Store</h4>
                <div className="bg-gray-900 text-gray-200 p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm"><code>{feastCodes.registry}</code></pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Recuperación de Features</h4>
                <div className="bg-gray-900 text-gray-200 p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm"><code>{feastCodes.retrieval}</code></pre>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-semibold mb-2">Nota sobre ingeniería de features</h4>
                <p className="text-sm">
                  Las variables externas como llegadas de vuelos y precios de combustible 
                  ayudan a recortar errores entre 12-18% según estudios de SpringerOpen. 
                  Feast facilita su incorporación y versionado consistente.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureStore;
