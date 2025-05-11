import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, faBrain, faLightbulb, 
  faDatabase, faRocket, faCogs,
  faChartPie, faChartBar, faClock, faUsers,
  faLayerGroup, faArrowRight, faBullseye,
  faCarSide, faMoneyBillWave,
  faInfoCircle, faTools,
  faCalendarAlt, faBalanceScale, faExchangeAlt
  } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../ui/Accordion';
import Chart from '../ui/Chart';
import TechInfoBox from '../ui/TechInfoBox';
import ChartNote from '../ui/ChartNote';

// Simple custom tooltip component
const CustomTooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs rounded px-2 py-1 min-w-[200px] max-w-[300px] z-50">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

const AnalyticsML = () => {
  const [activeTab, setActiveTab] = useState('metodologia');
  // If you need this state variable later, use: const [forecastType, setForecastType] = useState('forecast');
  
  // Data for methodology accordion
  const metodologiaItems = [
    {
      title: "Definir oportunidad",
      content: (
        <div className="space-y-3">
          <p><strong>Qué sucede:</strong> Mapear decisiones críticas (tarifas, disponibilidad, promociones).</p>
          <p><strong>Entregable principal:</strong> Documento de "use-cases" priorizados con estimación de impacto.</p>
          <p><strong>Herramientas:</strong> Marco DMAIC y plantillas de mapeo de procesos.</p>
        </div>
      )
    },
    {
      title: "Descubrir & preparar datos",
      content: (
        <div className="space-y-3">
          <p><strong>Qué sucede:</strong> Inventario de fuentes; reglas de calidad; feature-store en Python.</p>
          <p><strong>Entregable principal:</strong> Data Catalog + scripts de limpieza reproducibles (Jupyter/KNIME).</p>
          <p><strong>Herramientas:</strong> Flujos de data cleansing en KNIME/Alteryx y Power Query.</p>
        </div>
      )
    },
    {
      title: "Modelar & validar",
      content: (
        <div className="space-y-3">
          <ul className="list-disc list-inside mb-3">
            <li>Modelos de series de tiempo (p. ej. SARIMAX, Prophet).</li>
            <li>Árboles de Gradient Boosting para capturar estacionalidad atípica.</li>
            <li>Clustering K-means para segmentar puntos de venta/clientes.</li>
            <li>Explainability (SHAP, Permutation).</li>
          </ul>
          <p><strong>Entregable principal:</strong> Reporte de comparativa de métricas (MAE, MAPE) con notebooks comentados.</p>
          <p><strong>Herramientas:</strong> Pipeline modular de diagnóstico Power BI 2.0 (IRT + clustering).</p>
        </div>
      )
    },
    {
      title: "Integrar & exponer",
      content: (
        <div className="space-y-3">
          <p><strong>Qué sucede:</strong> API REST + Webhook que entrega forecasts y recomendaciones a la aplicación.</p>
          <p><strong>Entregable principal:</strong> End-point documentado y versión "dummy" para QA.</p>
          <p><strong>Herramientas:</strong> APIs Flask en VS Code.</p>
        </div>
      )
    },
    {
      title: "Desplegar & mejorar",
      content: (
        <div className="space-y-3">
          <p><strong>Qué sucede:</strong> Monitor de deriva; re-entrenamiento automatizado; feedback loop con los analistas.</p>
          <p><strong>Entregable principal:</strong> Dashboard de salud del modelo y plan de mejora trimestral.</p>
          <p><strong>Herramientas:</strong> Enfoque de mejora continua basado en Lean Six Sigma.</p>
        </div>
      )
    }
  ];
  
  // Data for the heatmap chart
  const heatmapData = {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Demanda por hora',
      data: [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [30, 20, 70, 40, 90, 80, 40],
        [50, 40, 30, 70, 60, 50, 80]
      ],
      backgroundColor: 'rgba(25, 118, 210, 0.7)',
      borderColor: 'rgba(25, 118, 210, 1)',
      borderWidth: 1
    }]
  };
  
  const heatmapOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Heatmap de Demanda'
      }
    }
  };
  
  // Data for fan chart
  const fanChartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Previsión',
        data: [65, 59, 80, 81, 56, 55, 70],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Intervalo Superior',
        data: [75, 69, 90, 91, 66, 65, 80],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.3)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.1
      },
      {
        label: 'Intervalo Inferior',
        data: [55, 49, 70, 71, 46, 45, 60],
        fill: '-1',
        borderColor: 'rgba(75, 192, 192, 0.3)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.1
      }
    ]
  };
  
  const fanChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Previsión con Bandas de Confianza'
      }
    }
  };
  
  // Benefits data
  const benefits = [
    {
      icon: faChartPie,
      title: "Precisión",
      value: "+4-7 pp",
      description: "Mejora en precisión de forecast vs. método actual"
    },
    {
      icon: faChartBar,
      title: "Reducción",
      value: "≥15%",
      description: "Menos stock-outs y sobreasignación de activos"
    },
    {
      icon: faUsers,
      title: "Segmentos",
      value: "Nuevos",
      description: "Identificación de segmentos rentables ocultos"
    },
    {
      icon: faClock,
      title: "Eficiencia",
      value: "Minutos",
      description: "Ciclo de decisión diario (de horas a minutos)"
    }
  ];

  // What-if model states
  const [demandMultiplier, setDemandMultiplier] = useState(1);
  const [seasonality, setSeasonality] = useState(1);
  const [eventImpact, setEventImpact] = useState(0);
  
  // Calculated KPIs based on what-if inputs
  const baselineUtilization = 82;
  const calculatedUtilization = Math.min(100, Math.round(baselineUtilization * demandMultiplier * seasonality + eventImpact));
  const baselineRevenue = 100;
  const calculatedRevenue = Math.round(baselineRevenue * (demandMultiplier * 0.7 + seasonality * 0.3) + eventImpact * 2);
  
  // ML best practices data for Evaluation tab
  const mlBestPractices = [
    {
      icon: faDatabase,
      title: "Calidad de datos",
      description: "Garantizar la limpieza, integridad y representatividad de los datos de entrenamiento."
    },
    {
      icon: faExchangeAlt,
      title: "Validación cruzada",
      description: "Evaluar modelos con múltiples particiones para garantizar generalización efectiva."
    },
    {
      icon: faBalanceScale,
      title: "Métricas adecuadas",
      description: "Seleccionar KPIs alineados con objetivos de negocio, no solo precisión técnica."
    },
    {
      icon: faTools,
      title: "Feature engineering",
      description: "Crear variables derivadas que capturen intuición del negocio y patrones temporales."
    },
    {
      icon: faCalendarAlt,
      title: "Reentrenamiento periódico",
      description: "Programar actualizaciones del modelo para adaptarse a cambios en el mercado."
    },
    {
      icon: faUsers,
      title: "Interpretabilidad",
      description: "Utilizar técnicas como SHAP values para explicar predicciones a usuarios finales."
    }
  ];

  // New data for Evaluation tab
  const evaluationMetrics = [
    {
      name: "MAE",
      fullName: "Mean Absolute Error",
      description: "Promedio de la diferencia absoluta entre valores predichos y valores reales.",
      goodValue: "Valores más cercanos a 0",
      useCases: "Forecasting de demanda, predicción de precios",
      formula: "MAE = (1/n) * Σ|y_pred - y_real|"
    },
    {
      name: "MAPE",
      fullName: "Mean Absolute Percentage Error",
      description: "Error porcentual promedio, útil cuando la escala es importante.",
      goodValue: "Valores más cercanos a 0%",
      useCases: "Forecasting de demanda, estimación de ingresos",
      formula: "MAPE = (100/n) * Σ|(y_pred - y_real)/y_real|"
    },
    {
      name: "RMSE",
      fullName: "Root Mean Square Error",
      description: "Raíz cuadrada del promedio de errores al cuadrado. Penaliza errores grandes.",
      goodValue: "Valores más cercanos a 0",
      useCases: "Predicción de precios óptimos, demanda",
      formula: "RMSE = √[(1/n) * Σ(y_pred - y_real)²]"
    },
    {
      name: "R²",
      fullName: "Coeficiente de Determinación",
      description: "Proporción de la varianza en la variable dependiente explicada por el modelo.",
      goodValue: "Valores más cercanos a 1",
      useCases: "Modelos de regresión, análisis de factores de precio",
      formula: "R² = 1 - (SSres/SStot)"
    },
    {
      name: "AUC",
      fullName: "Area Under the Curve",
      description: "Medida de capacidad discriminativa para clasificación.",
      goodValue: "Valores más cercanos a 1",
      useCases: "Predicción de cancelaciones, segmentación",
      formula: "AUC = ∫ TPR d(FPR)"
    }
  ];

  // Tooltip definitions for technical terms
  const tooltips = {
    forecast: "Técnica para predecir la demanda futura basada en datos históricos y variables externas como eventos, clima, temporada y otros factores.",
    segmentacion: "División de clientes en grupos con características o comportamientos similares para personalizar ofertas y estrategias.",
    rmse: "Root Mean Square Error - Métrica que penaliza errores grandes en las predicciones, clave para evaluar modelos de forecasting.",
    elasticidad: "Medida de cómo la demanda responde a cambios en el precio, fundamental para optimización de precios dinámicos.",
    revenueManagement: "Estrategia para maximizar ingresos optimizando precio y disponibilidad según la demanda prevista y segmentación.",
    noshow: "Reservas confirmadas donde el cliente no se presenta, un desafío crítico en la previsión de demanda para rent-a-car.",
    predictiveMain: "Uso de sensores IoT y datos históricos para predecir cuando un vehículo necesitará mantenimiento antes de que ocurra una avería.",
    fleetOptimization: "Proceso de determinar la distribución óptima de vehículos entre ubicaciones para satisfacer la demanda y minimizar costos.",
    customerLifetimeValue: "Valor total que un cliente aportará durante toda su relación comercial con la empresa."
  };
  
  // Enhanced data for Rent-a-Car demos
  // Demand forecasting data
  const demoOcupacion = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ocupación Real',
        data: [68, 65, 72, 78, 82, 95, 98, 99, 85, 76, 70, 74],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Predicción ML',
        data: [65, 68, 75, 80, 84, 94, 96, 97, 82, 78, 73, 72],
        borderColor: 'rgb(255, 99, 132)',
        borderDash: [5, 5],
        fill: false,
        tension: 0.1
      },
      {
        label: 'Predicción Tradicional',
        data: [60, 62, 68, 73, 76, 88, 90, 92, 75, 72, 65, 63],
        borderColor: 'rgb(201, 203, 207)',
        borderDash: [10, 5],
        fill: false,
        tension: 0.1
      }
    ]
  };
  
  // Daily volatility data for forecasting demo
  const demoDemandaVolatilidad = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Semana 1',
        data: [65, 72, 78, 85, 95, 115, 98],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Semana 2',
        data: [70, 68, 74, 90, 85, 105, 90],
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Semana 3',
        data: [62, 75, 70, 88, 97, 110, 95],
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        tension: 0.1
      }
    ]
  };
  
  // No-shows adjusted demand data
  const demoNoShows = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Reservas Brutas',
        data: [120, 115, 130, 142, 150, 175, 180, 182, 155, 140, 130, 135],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'Demanda Real (post no-shows)',
        data: [102, 98, 110, 121, 128, 149, 153, 155, 132, 119, 111, 115],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1
      },
      {
        label: 'Predicción ML Ajustada',
        data: [100, 100, 108, 123, 130, 147, 154, 156, 130, 120, 112, 113],
        borderColor: 'rgb(255, 99, 132)',
        borderDash: [5, 5],
        fill: false,
        tension: 0.1
      }
    ]
  };
  
  // Enhanced dynamic pricing data
  const demoPreciosDinamicos = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        type: 'line',
        label: 'Demanda Prevista',
        data: [65, 72, 78, 85, 95, 115, 98],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        yAxisID: 'y1',
        tension: 0.4
      },
      {
        type: 'bar',
        label: 'Precio Fijo',
        data: [50, 50, 50, 50, 50, 50, 50],
        backgroundColor: 'rgba(201, 203, 207, 0.5)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1
      },
      {
        type: 'bar',
        label: 'Precio Dinámico',
        data: [42, 45, 48, 53, 62, 75, 65],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      }
    ]
  };
  
  // Competitor price comparison data
  const demoCompetidores = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Nuestra Empresa',
        data: [42, 45, 48, 53, 62, 75, 65],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      },
      {
        label: 'Competidor A',
        data: [45, 47, 49, 55, 59, 72, 68],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'Competidor B',
        data: [40, 42, 45, 51, 58, 68, 63],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      }
    ]
  };
  
  // Price elasticity simulation data
  const demoElasticidad = {
    labels: ['35€', '40€', '45€', '50€', '55€', '60€', '65€', '70€', '75€', '80€'],
    datasets: [
      {
        type: 'line',
        label: 'Demanda Estimada',
        data: [95, 90, 86, 80, 72, 65, 58, 50, 42, 35],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y',
        tension: 0.4
      },
      {
        type: 'bar',
        label: 'Ingresos Proyectados',
        data: [3325, 3600, 3870, 4000, 3960, 3900, 3770, 3500, 3150, 2800],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        yAxisID: 'y1'
      }
    ]
  };
  
  // Fleet distribution optimization data
  const demoFlotaDistribucion = {
    labels: ['Centro', 'Aeropuerto', 'Norte', 'Sur', 'Este', 'Oeste'],
    datasets: [
      {
        label: 'Demanda Proyectada',
        data: [65, 125, 40, 55, 30, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Flota Actual',
        data: [75, 105, 50, 40, 35, 35],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'Distribución Óptima',
        data: [68, 122, 42, 53, 32, 27],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      }
    ]
  };
  
  // Predictive maintenance data
  const demoMantenimiento = {
    labels: ['0-10%', '10-20%', '20-30%', '30-40%', '40-50%', '50-60%', '60-70%', '70-80%', '80-90%', '90-100%'],
    datasets: [
      {
        label: 'Vehículos por Riesgo de Avería',
        data: [120, 145, 160, 130, 95, 75, 60, 45, 30, 15],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 99, 132, 0.7)'
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(255, 205, 86)',
          'rgb(255, 159, 64)',
          'rgb(255, 159, 64)',
          'rgb(255, 99, 132)',
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }
    ]
  };
  
  // Predictive maintenance time savings
  const demoTiempoInactivo = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tiempo Inactivo (Mantenimiento Reactivo)',
        data: [48, 55, 42, 50, 58, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'Tiempo Inactivo (Mantenimiento Predictivo)',
        data: [32, 35, 28, 30, 33, 26],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      }
    ]
  };
  
  // Customer segmentation data
  const demoSegmentacion = {
    labels: ['Segmento A', 'Segmento B', 'Segmento C', 'Segmento D'],
    datasets: [
      {
        label: 'Frecuencia de Alquiler',
        data: [4.5, 1.2, 2.8, 0.5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'Gasto Promedio',
        data: [250, 650, 350, 850],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Tasa de Conversión (%)',
        data: [65, 25, 45, 15],
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 1
      }
    ]
  };
  
  // Customer segmentation by vehicle preferences
  const demoPreferenciasVehiculo = {
    labels: ['Compacto', 'Mediano', 'SUV', 'Premium', 'Lujo'],
    datasets: [
      {
        label: 'Segmento A',
        data: [45, 30, 15, 8, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'Segmento B',
        data: [10, 25, 20, 35, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Segmento C',
        data: [25, 40, 20, 10, 5],
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 1
      },
      {
        label: 'Segmento D',
        data: [5, 15, 25, 30, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      }
    ]
  };
  
  // Data for ML models used in forecasting
  const forecastMLModels = [
    {
      title: "Series Temporales Avanzadas",
      description: "SARIMAX, Prophet y modelos de deep learning como LSTM que capturan patrones estacionales y tendencias."
    },
    {
      title: "Gradient Boosting",
      description: "XGBoost/LightGBM que incorporan variables externas (eventos, clima, datos de vuelos) para mejorar la precisión."
    },
    {
      title: "Ensamble Híbrido",
      description: "Combinación ponderada de múltiples modelos que minimiza el error promedio y aumenta la robustez."
    }
  ];
  
  // Data for pricing technologies
  const pricingTechnologies = [
    {
      title: "Modelos de Regresión + Optimización",
      description: "Combinan predicción de demanda a diferentes precios con algoritmos de optimización para encontrar el precio óptimo en tiempo real."
    },
    {
      title: "Aprendizaje por Refuerzo (RL)",
      description: "Modelos experimentales que aprenden estrategias de precios óptimas mediante interacción simulada con el mercado, adaptándose a cambios emergentes."
    }
  ];
  
  // Data for fleet management technologies
  const fleetTechnologies = [
    {
      title: "Algoritmos de Optimización",
      description: "Metaheurísticas y programación lineal para distribución óptima de flota entre localizaciones."
    },
    {
      title: "Análisis de Series Temporales IoT",
      description: "Procesamiento de datos de sensores para detectar patrones previos a fallos mecánicos."
    },
    {
      title: "Simulación de Monte Carlo",
      description: "Para determinar el tamaño y composición óptima de flota basado en múltiples escenarios de demanda."
    }
  ];
  
  // Data for segmentation models
  const segmentationModels = [
    {
      title: "K-means y Clustering Jerárquico",
      description: "Para identificar grupos naturales de clientes basados en comportamiento similar (RFM - Recencia, Frecuencia, Valor Monetario)."
    },
    {
      title: "Sistemas de Recomendación",
      description: "Algoritmos de filtrado colaborativo e híbrido que sugieren vehículos y opciones basados en preferencias históricas de clientes similares."
    }
  ];
  
  return (
    <section id="analytics-ml" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Analytics & Machine Learning</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Transformamos datos históricos en insights predictivos y recomendaciones accionables, 
            elevando la visualización descriptiva a una propuesta de valor basada en modelos de comprensión 
            de la demanda y optimización continua.
          </p>
        </motion.div>
        
        {/* Hero Banner */}
        <motion.div 
          className="mb-16 relative overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Potencia la toma de decisiones</h3>
                <p className="text-lg mb-6">
                  Convierte tus datos en previsiones precisas que optimizan recursos, 
                  anticipan demanda y maximizan ingresos con tecnologías avanzadas de ML.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FontAwesomeIcon icon={faChartLine} className="text-3xl" />
                    <div className="mt-2 text-sm font-medium">Forecast Avanzado</div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FontAwesomeIcon icon={faBrain} className="text-3xl" />
                    <div className="mt-2 text-sm font-medium">Machine Learning</div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <FontAwesomeIcon icon={faLightbulb} className="text-3xl" />
                    <div className="mt-2 text-sm font-medium">Insights Accionables</div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-blue-900 opacity-20 rounded-lg"></div>
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-800 font-bold">Ocupación</span>
                        <span className="text-green-600 font-bold text-xl">{calculatedUtilization}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            calculatedUtilization > 90 ? 'bg-green-600' : 
                            calculatedUtilization > 75 ? 'bg-blue-600' : 'bg-yellow-500'
                          }`} 
                          style={{width: `${calculatedUtilization}%`}}
                        ></div>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-blue-800 font-bold">Ingresos</span>
                        <span className="text-green-600 font-bold text-xl">{calculatedRevenue}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-blue-600" 
                          style={{width: `${calculatedRevenue}%`}}
                        ></div>
                      </div>
                      
                      <div className="mt-4 text-xs text-gray-500">Valores basados en modelo predictivo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Tabs for switching between Metodología and Beneficios */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'metodologia'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('metodologia')}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>Metodología</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'beneficios'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('beneficios')}
          >
            <FontAwesomeIcon icon={faRocket} />
            <span>Beneficios</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'visualizacion'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('visualizacion')}
          >
            <FontAwesomeIcon icon={faChartBar} />
            <span>Visualización</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'whatif'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('whatif')}
          >
            <FontAwesomeIcon icon={faLightbulb} />
            <span>What-If</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'evaluacion'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('evaluacion')}
          >
            <FontAwesomeIcon icon={faBalanceScale} />
            <span>Evaluación</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'demo'
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('demo')}
          >
            <FontAwesomeIcon icon={faCarSide} />
            <span>Demo</span>
          </button>
        </motion.div>
        
        {/* Metodología Tab Content */}
        {activeTab === 'metodologia' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Metodología para Analytics & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Nuestro enfoque sigue un proceso estructurado de 5 fases que garantiza resultados 
                  medibles y una implementación exitosa adaptada a cada caso de uso.
                </p>
                
                <Accordion items={metodologiaItems} />
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-1 bg-gradient-to-r from-green-500 to-green-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Entregables Detallados</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <FontAwesomeIcon icon={faBrain} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Modelo de previsión</h4>
                        <p className="text-sm text-gray-600">
                          Modelo de previsión de demanda listo para producción (artefacto .pkl + endpoint).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <FontAwesomeIcon icon={faDatabase} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Guía de adopción</h4>
                        <p className="text-sm text-gray-600">
                          Guía de 4 páginas: variables clave, supuestos, límites del modelo.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Dashboard "What-if"</h4>
                        <p className="text-sm text-gray-600">
                          Dashboard en Power BI con sliders de escenario que recalculan KPIs en tiempo real.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <FontAwesomeIcon icon={faLightbulb} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Kit de storytelling</h4>
                        <p className="text-sm text-gray-600">
                          Recursos gráficos y textos para que usuarios no técnicos entiendan las sugerencias del modelo.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Plan de capacitación</h4>
                        <p className="text-sm text-gray-600">
                          2 sesiones (conceptual + hands-on) dirigidas al equipo de analistas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Beneficios Tab Content */}
        {activeTab === 'beneficios' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`h-2 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-secondary'}`}></div>
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-secondary bg-opacity-10 text-secondary'
                    }`}>
                      <FontAwesomeIcon icon={benefit.icon} className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                    <div className={`text-2xl font-bold mb-2 ${
                      index % 2 === 0 ? 'text-blue-600' : 'text-secondary'
                    }`}>
                      {benefit.value}
                    </div>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Impacto en la Operación</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Antes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Decisiones basadas en intuición y datos históricos básicos</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Horas dedicadas a preparar reportes manuales</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Reacción tardía a cambios en patrones de demanda</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Pérdida de oportunidades por falta de visibilidad</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Después</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Previsiones precisas con intervalos de confianza</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Automatización total de informes y alertas</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Anticipación a eventos y estacionalidad</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">Optimización continua basada en aprendizaje automático</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FontAwesomeIcon icon={faCogs} className="text-blue-500" />
                    <h4 className="font-bold text-primary">Cultura de mejora continua</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Cada sprint incluye retroalimentación de usuarios y ajuste de features, creando un ciclo virtuoso 
                    de optimización que se adapta a las necesidades cambiantes del negocio.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Visualización Tab Content */}
        {activeTab === 'visualizacion' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Heatmap de Demanda</h3>
                  <p className="text-gray-600 mb-4">
                    Visualización de patrones de uso a nivel granular que apoya decisiones de tarifas dinámicas.
                  </p>
                  <div className="h-64">
                    <Chart type="bar" data={heatmapData} options={heatmapOptions} />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Fan Chart de Previsión</h3>
                  <p className="text-gray-600 mb-4">
                    Muestra la incertidumbre del forecast con intervalos de confianza (P10-P90).
                  </p>
                  <div className="h-64">
                    <Chart type="line" data={fanChartData} options={fanChartOptions} />
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-1 bg-gradient-to-r from-green-500 to-green-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Técnicas de Storytelling Integradas</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-12 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                    <h4 className="font-bold mb-2 text-center">Split-screen "Antes vs Después"</h4>
                    <p className="text-sm text-gray-600 text-center">
                      Comparación visual de KPIs históricos vs. simulados tras adoptar el modelo.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-12 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                    </div>
                    <h4 className="font-bold mb-2 text-center">Historias de Micro-caso</h4>
                    <p className="text-sm text-gray-600 text-center">
                      Tarjetas estilo timeline que narran cómo un analista ajustó precios en minutos.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-center h-12 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                        <FontAwesomeIcon icon={faBullseye} />
                      </div>
                    </div>
                    <h4 className="font-bold mb-2 text-center">Modo Foco</h4>
                    <p className="text-sm text-gray-600 text-center">
                      Al seleccionar un escenario crítico, la interfaz atenúa secciones irrelevantes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* What-If Tab Content */}
        {activeTab === 'whatif' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Panel What-If: Simulación de Escenarios</h3>
                <p className="text-gray-600 mb-6">
                  Ajuste los parámetros para simular diferentes escenarios y ver cómo afectan a los KPIs principales.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="col-span-1 lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">
                          Multiplicador de Demanda: {demandMultiplier.toFixed(1)}x
                        </label>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          demandMultiplier > 1 ? 'bg-green-100 text-green-800' : 
                          demandMultiplier < 1 ? 'bg-red-100 text-red-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {demandMultiplier > 1 ? '+' + ((demandMultiplier-1)*100).toFixed(0) + '%' : 
                           demandMultiplier < 1 ? ((demandMultiplier-1)*100).toFixed(0) + '%' : 'Base'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="1.5"
                        step="0.1"
                        value={demandMultiplier}
                        onChange={(e) => setDemandMultiplier(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">
                          Factor de Estacionalidad: {seasonality.toFixed(1)}x
                        </label>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          seasonality > 1 ? 'bg-green-100 text-green-800' : 
                          seasonality < 1 ? 'bg-red-100 text-red-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {seasonality > 1 ? 'Alta' : seasonality < 1 ? 'Baja' : 'Normal'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.7"
                        max="1.3"
                        step="0.1"
                        value={seasonality}
                        onChange={(e) => setSeasonality(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">
                          Impacto de Eventos: +{eventImpact} puntos
                        </label>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          eventImpact > 0 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {eventImpact === 0 ? 'Sin eventos' : 'Evento activo'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="15"
                        step="5"
                        value={eventImpact}
                        onChange={(e) => setEventImpact(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col">
                    <h4 className="font-bold mb-3">Resultados Simulados</h4>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Ocupación</span>
                        <span className={`font-bold ${
                          calculatedUtilization > 90 ? 'text-green-600' : 
                          calculatedUtilization > 75 ? 'text-blue-600' : 'text-yellow-600'
                        }`}>
                          {calculatedUtilization}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            calculatedUtilization > 90 ? 'bg-green-600' : 
                            calculatedUtilization > 75 ? 'bg-blue-600' : 'bg-yellow-500'
                          }`}
                          style={{width: `${calculatedUtilization}%`}}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Ingresos</span>
                        <span className={`font-bold ${
                          calculatedRevenue > 110 ? 'text-green-600' : 
                          calculatedRevenue > 90 ? 'text-blue-600' : 'text-yellow-600'
                        }`}>
                          {calculatedRevenue}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            calculatedRevenue > 110 ? 'bg-green-600' : 
                            calculatedRevenue > 90 ? 'bg-blue-600' : 'bg-yellow-500'
                          }`}
                          style={{width: `${Math.min(100, calculatedRevenue)}%`}}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                        <span>200%</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className={`p-3 rounded-lg text-sm ${
                        calculatedUtilization > 90 && calculatedRevenue > 110 ? 
                        'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {calculatedUtilization > 90 && calculatedRevenue > 110 ? 
                          'Escenario óptimo! Alta ocupación y mayores ingresos.' : 
                          'Ajuste los parámetros para optimizar el resultado.'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl shadow-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">¿Listo para implementar modelos predictivos?</h3>
                  <p className="text-white text-opacity-90">
                    Convierta sus datos en insights accionables y decisiones optimizadas.
                  </p>
                </div>
                <button className="bg-white text-primary font-medium px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all mt-4 md:mt-0">
                  Solicitar demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Evaluación Tab Content */}
        {activeTab === 'evaluacion' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Métricas de Evaluación para Modelos de ML</h3>
                <p className="text-gray-600 mb-6">
                  Un modelo de machine learning es tan bueno como sus métricas de evaluación. 
                  Estas son las métricas clave que utilizamos para medir el rendimiento de nuestros modelos 
                  y garantizar su precisión y confiabilidad.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Métrica
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Descripción
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Valor Óptimo
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Uso Típico
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {evaluationMetrics.map((metric, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                {metric.name}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">{metric.fullName}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{metric.description}</div>
                            <div className="text-xs text-blue-500 mt-1 italic">{metric.formula}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {metric.goodValue}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {metric.useCases}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-1 bg-gradient-to-r from-green-500 to-green-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Mejores Prácticas de Implementación</h3>
                <p className="text-gray-600 mb-6">
                  La implementación exitosa de modelos de Machine Learning requiere seguir un conjunto de 
                  prácticas probadas que garantizan la calidad, mantenibilidad y efectividad de las soluciones.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mlBestPractices.map((practice, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                          <FontAwesomeIcon icon={practice.icon} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{practice.title}</h4>
                          <p className="text-sm text-gray-600">{practice.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Ciclo de Implementación y Mejora Continua</h3>
                
                <div className="flex flex-wrap justify-center">
                  <div className="relative w-full max-w-3xl mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-1 w-full bg-blue-200 rounded"></div>
                    </div>
                    
                    <div className="relative flex justify-between">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faDatabase} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-sm font-medium">Datos</h4>
                          <p className="text-xs text-gray-500">Preparación y validación</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faBrain} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-sm font-medium">Modelado</h4>
                          <p className="text-xs text-gray-500">Entrenamiento y ajuste</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faBalanceScale} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-sm font-medium">Evaluación</h4>
                          <p className="text-xs text-gray-500">Validación cruzada</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faRocket} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-sm font-medium">Despliegue</h4>
                          <p className="text-xs text-gray-500">Integración API</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faCogs} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-sm font-medium">Monitoreo</h4>
                          <p className="text-xs text-gray-500">Mejora continua</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
                    <h4 className="font-bold text-primary">Claves del éxito</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    La implementación exitosa de Machine Learning no es solo tecnológica, sino también organizacional. 
                    Requiere una estrategia clara, datos de calidad, talento especializado, y sobre todo, 
                    una cultura de toma de decisiones basada en datos. Nuestros proyectos incorporan siempre 
                    el componente de gestión del cambio y capacitación para maximizar la adopción.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Demo Tab Content */}
        {activeTab === 'demo' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Machine Learning para Gestión de Ingresos en Rent-a-Car</h3>
                <p className="text-sm text-blue-600 mb-4">Caso práctico de aplicación</p>
                <p className="text-gray-600 mb-6">
                  El sector de alquiler de vehículos presenta desafíos únicos que complican la aplicación efectiva del Revenue Management. 
                  Estos incluyen la volatilidad de la demanda, altas tasas de no-shows, reservas sin penalización, y la compleja logística 
                  de la flota. El Machine Learning permite superar estas barreras, optimizando ingresos y operaciones.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500" />
                    <h4 className="font-bold text-blue-800">¿Por qué Machine Learning para Rent-a-Car?</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    El ML potencia el Revenue Management al permitir el procesamiento de enormes cantidades de datos para identificar 
                    patrones complejos, realizar predicciones precisas y automatizar decisiones sofisticadas. Estudios indican que las empresas 
                    que utilizan IA para previsión de demanda pueden lograr una reducción del 30% en costos de inventario y un aumento del 25% 
                    en precisión de ventas.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Forecasting de Demanda</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Modelos que predicen necesidades futuras de flota y optimizan su distribución.
                        </p>                        <CustomTooltip content={tooltips.forecast}>
                          <div className="text-xs text-blue-600 mt-2 cursor-pointer hover:underline">
                            <FontAwesomeIcon icon={faInfoCircle} /> Ver detalles técnicos
                          </div>
                        </CustomTooltip>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                        <FontAwesomeIcon icon={faMoneyBillWave} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Pricing Dinámico</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Automatiza ajustes de precios según demanda, competencia y disponibilidad.
                        </p>                        <CustomTooltip content={tooltips.elasticidad}>
                          <div className="text-xs text-blue-600 mt-2 cursor-pointer hover:underline">
                            <FontAwesomeIcon icon={faInfoCircle} /> Ver detalles técnicos
                          </div>
                        </CustomTooltip>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                        <FontAwesomeIcon icon={faCarSide} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Gestión de Flota</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Optimiza distribución y mantenimiento predictivo para reducir costos.
                        </p>                        <CustomTooltip content={tooltips.fleetOptimization}>
                          <div className="text-xs text-blue-600 mt-2 cursor-pointer hover:underline">
                            <FontAwesomeIcon icon={faInfoCircle} /> Ver detalles técnicos
                          </div>
                        </CustomTooltip>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-2 text-blue-600">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Segmentación</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Identifica grupos de clientes con necesidades y comportamientos similares.
                        </p>                        <CustomTooltip content={tooltips.segmentacion}>
                          <div className="text-xs text-blue-600 mt-2 cursor-pointer hover:underline">
                            <FontAwesomeIcon icon={faInfoCircle} /> Ver detalles técnicos
                          </div>
                        </CustomTooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 1. DEMAND FORECASTING SECTION - Enhanced */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">1. Previsión de Demanda (Demand Forecasting)</h3>
                <p className="text-gray-600 mb-6">
                  La previsión precisa de la demanda es la piedra angular del Revenue Management eficaz. En el sector rent-a-car es 
                  particularmente compleja debido a factores como estacionalidad, eventos locales, competencia y las altas tasas 
                  de no-shows que inflan la demanda aparente.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Volatilidad Diaria de la Demanda</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      La demanda de alquiler de vehículos muestra una alta volatilidad incluso entre semanas similares, 
                      lo que dificulta la previsión basada en métodos tradicionales.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="line" data={demoDemandaVolatilidad} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `${context.dataset.label}: ${context.raw} unidades`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Demanda (unidades)'
                            }
                          }
                        }
                      }} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Previsión vs. Realidad</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Comparación de la ocupación real vs. previsiones generadas por modelos de ML y métodos tradicionales.
                      El modelo ML logra ajustarse mejor a los patrones estacionales y eventos puntuales.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="line" data={demoOcupacion} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                              display: true,
                              text: '% de Ocupación'
                            }
                          }
                        }
                      }} />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 mb-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Ajuste por Probabilidad de No-Shows</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Un desafío clave en rent-a-car es la alta tasa de no-shows. El modelo ML ajusta la demanda bruta (reservas) 
                      a demanda neta (alquileres reales esperados) basándose en patrones históricos y características de las reservas.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="line" data={demoNoShows} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `${context.dataset.label}: ${context.raw} unidades`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Unidades'
                            }
                          }
                        }
                      }} />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                <TechInfoBox 
                   title="Modelos ML utilizados"
                   icon={faBrain}
                   items={forecastMLModels}
                   benefit="Mejora del MAPE (Error Porcentual Absoluto Medio) de 8.5% a 3.2%, representando un 62% de incremento en precisión."
                />
                </div>
              </div>
            </motion.div>
            
            {/* 2. DYNAMIC PRICING SECTION */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">2. Optimización Dinámica de Precios</h3>
                <p className="text-gray-600 mb-6">
                  El dynamic pricing ajusta las tarifas en tiempo real para maximizar los ingresos, considerando la demanda actual 
                  y prevista, precios de competencia, tipo de cliente y otros factores. Es una de las aplicaciones más impactantes 
                  del ML en Revenue Management.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Precios Dinámicos vs. Fijos</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Comparación entre precios fijos y dinámicos en respuesta a la demanda prevista. El sistema ML ajusta los 
                      precios para maximizar los ingresos, subiendo tarifas en alta demanda y ofreciendo descuentos estratégicos 
                      en períodos de menor ocupación.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="bar" data={demoPreciosDinamicos} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return context.dataset.label === 'Demanda Prevista' ? 
                                  `Demanda: ${context.raw} unidades` : 
                                  `Precio: €${context.raw}`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Precio (€)'
                            }
                          },
                          y1: {
                            position: 'right',
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Demanda (unidades)'
                            },
                            grid: {
                              drawOnChartArea: false
                            }
                          }
                        }
                      }} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Análisis de Competencia</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      El sistema monitorea y reacciona a los precios de competidores, manteniendo competitividad mientras maximiza 
                      ingresos. Este enfoque de "rate shopping" inteligente se actualiza continuamente.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="bar" data={demoCompetidores} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `${context.dataset.label}: €${context.raw}`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Precio (€)'
                            }
                          }
                        }
                      }} />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold mb-3 text-gray-800">Simulación de Elasticidad de Precios</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    El modelo ML determina la elasticidad-precio de cada segmento y encuentra el punto óptimo que 
                    equilibra ocupación e ingreso por unidad. Esta simulación muestra cómo diferentes precios 
                    afectan la demanda y los ingresos totales.
                  </p>
                  <div className="h-64 bg-gray-50 p-4 rounded-lg">
                    <Chart type="bar" data={demoElasticidad} options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return context.dataset.label === 'Demanda Estimada' ? 
                                `Demanda: ${context.raw} unidades` : 
                                `Ingresos: €${context.raw}`;
                            }
                          }
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          position: 'left',
                          title: {
                            display: true,
                            text: 'Demanda (unidades)'
                          }
                        },
                        y1: {
                          beginAtZero: true,
                          position: 'right',
                          title: {
                            display: true,
                            text: 'Ingresos (€)'
                          },
                          grid: {
                            drawOnChartArea: false
                          }
                        }
                      }
                    }} />
                  </div>
                </div>
                
                <div className="mt-6">
                <TechInfoBox 
                   title="Tecnologías de pricing"
                   icon={faMoneyBillWave}
                   items={pricingTechnologies}
                   benefit="El pricing dinámico generó un aumento del 15% en ingresos totales vs. el modelo de precio fijo, con un incremento del 8% en la tasa de ocupación."
                />
                </div>
              </div>
            </motion.div>
            
            {/* 3. FLEET MANAGEMENT SECTION */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">3. Gestión Inteligente de Flotas</h3>
                <p className="text-gray-600 mb-6">
                  La flota es el principal activo en rent-a-car, y su gestión eficiente (tamaño, composición, distribución, mantenimiento) 
                  es fundamental para reducir costos y asegurar disponibilidad de vehículos, impactando directamente en los ingresos.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Optimización de Distribución</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Basándose en previsiones de demanda por ubicación, el modelo ML recomienda la redistribución 
                      óptima de vehículos entre sucursales para maximizar disponibilidad y minimizar costos operativos.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="bar" data={demoFlotaDistribucion} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `${context.dataset.label}: ${context.raw} unidades`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Vehículos'
                            }
                          }
                        }
                      }} />
                    </div>
                    <ChartNote 
                      text="La distribución óptima considera costos de reubicación, previsiones de demanda y 
                            restricciones logísticas, utilizando algoritmos de optimización combinatoria."
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Mantenimiento Predictivo</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Utilizando datos de telemetría (IoT) y patrones históricos, el ML predice cuándo un vehículo 
                      necesitará mantenimiento, permitiendo programarlo durante períodos de baja demanda.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="bar" data={demoMantenimiento} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          },
                          title: {
                            display: true,
                            text: 'Distribución de la Flota por Probabilidad de Avería'
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `Vehículos: ${context.raw} unidades`;
                              },
                              title: function(context) {
                                return `Probabilidad de avería: ${context[0].label}`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: 'Número de vehículos'
                            }
                          }
                        }
                      }} />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold mb-3 text-gray-800">Reducción de Tiempo Inactivo</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    El mantenimiento predictivo reduce significativamente el tiempo que los vehículos están fuera 
                    de servicio, aumentando la disponibilidad y la utilización de la flota.
                  </p>
                  <div className="h-64 bg-gray-50 p-4 rounded-lg">
                    <Chart type="bar" data={demoTiempoInactivo} options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return `${context.dataset.label}: ${context.raw} horas`;
                            }
                          }
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          title: {
                            display: true,
                            text: 'Horas/mes'
                          }
                        }
                      }
                    }} />
                  </div>
                </div>
                
                <div className="mt-6">
                <TechInfoBox 
                   title="Tecnologías aplicadas"
                   icon={faCarSide}
                   items={fleetTechnologies}
                   benefit="Reducción del 35% en tiempo de inactivo por mantenimiento no programado y disminución del 20% en costos de traslado entre ubicaciones."
                />
                </div>
              </div>
            </motion.div>
            
            {/* 4. CUSTOMER SEGMENTATION SECTION */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">4. Segmentación Avanzada de Clientes</h3>
                <p className="text-gray-600 mb-6">
                  Comprender a los clientes y agruparlos en segmentos con comportamientos y preferencias similares 
                  permite adaptar las ofertas, estrategias de marketing y precios. El ML, especialmente los algoritmos de 
                  clustering, es ideal para descubrir estos segmentos a partir de diversos datos de clientes.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Métricas por Segmento</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Análisis de segmentos identificados mediante técnicas de clustering. Los modelos ML descubrieron 
                      4 perfiles distintos de comportamiento y valor.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="bar" data={demoSegmentacion} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        },
                        indexAxis: 'y'
                      }} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 text-gray-800">Preferencias por Tipo de Vehículo</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      El análisis de ML revela preferencias claras de cada segmento por distintas categorías de vehículos, 
                      permitiendo ajustar la flota y las ofertas personalizadas.
                    </p>
                    <div className="h-64 bg-gray-50 p-4 rounded-lg">
                      <Chart type="bar" data={demoPreferenciasVehiculo} options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'top',
                          }
                        },
                        scales: {
                          y: {
                            stacked: true,
                            beginAtZero: true,
                            title: {
                              display: true,
                              text: '% Preferencia'
                            }
                          },
                          x: {
                            stacked: true
                          }
                        }
                      }} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold mb-3 text-gray-800">Características de los Segmentos</h4>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5"></div>
                      <div>
                        <h5 className="text-sm font-bold">Segmento A: Frecuentes Sensibles al Precio</h5>
                        <p className="text-xs text-gray-600">Clientes que alquilan con frecuencia pero buscan ofertas y promociones. Prefieren vehículos compactos y medianos, y son sensibles a pequeñas variaciones de precio.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5"></div>
                      <div>
                        <h5 className="text-sm font-bold">Segmento B: Premium Ocasionales</h5>
                        <p className="text-xs text-gray-600">Alquilan con poca frecuencia pero eligen vehículos de gama alta. Valoran la calidad y servicios adicionales, y son menos sensibles al precio.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mt-1.5"></div>
                      <div>
                        <h5 className="text-sm font-bold">Segmento C: Regulares de Valor Medio</h5>
                        <p className="text-xs text-gray-600">Uso moderado con preferencia por vehículos intermedios. Equilibran precio y calidad, y suelen ser leales si reciben ofertas personalizadas.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5"></div>
                      <div>
                        <h5 className="text-sm font-bold">Segmento D: Ultra Premium</h5>
                        <p className="text-xs text-gray-600">Baja frecuencia pero mayor gasto por alquiler (vehículos de lujo). Buscan exclusividad, servicios premium y están dispuestos a pagar precios elevados.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                <TechInfoBox 
                   title="Modelos de Segmentación"
                   icon={faUsers}
                   items={segmentationModels}
                   benefit="Incremento del 22% en el CLV (Customer Lifetime Value) y aumento del 18% en la tasa de conversión promedio con ofertas personalizadas por segmento."
                />
                </div>
              </div>
            </motion.div>
            
            {/* DATA FOUNDATION & INTEGRATION - New */}
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Fundamentos de Datos e Integración</h3>
                <p className="text-gray-600 mb-6">
                  El éxito de cualquier solución de ML depende de datos de calidad y una integración eficiente con 
                  los sistemas existentes. Nuestro enfoque garantiza que los modelos generen valor real y sean fáciles de usar.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-800 flex items-center">
                      <FontAwesomeIcon icon={faDatabase} className="mr-2 text-blue-600" />
                      Fuentes de Datos
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-600"><span className="font-medium">Internos:</span> Histórico de reservas, alquileres, tarifas, mantenimiento de vehículos, datos de clientes y programas de fidelización.</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-600"><span className="font-medium">Telemáticos:</span> Datos IoT de vehículos (kilometraje, patrones de uso, alertas de diagnóstico).</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-600"><span className="font-medium">Externos:</span> Calendario de eventos, datos macroeconómicos, estacionalidad turística, precios de competencia, tendencias del sector.</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-5 mt-1">
                          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <p className="text-gray-600"><span className="font-medium">Comportamiento web:</span> Patrones de navegación, abandono del carrito, búsquedas recurrentes.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-800 flex items-center">
                      <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-blue-600" />
                      Explicabilidad (XAI)
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Implementamos técnicas de Inteligencia Artificial Explicable (XAI) para que los modelos no sean 
                      "cajas negras", sino herramientas transparentes que generen confianza en los usuarios finales.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <h5 className="text-xs font-semibold mb-1">SHAP Values</h5>
                        <p className="text-xs text-gray-600">
                          Visualizaciones que muestran la importancia y el impacto de cada variable en la predicción.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded shadow-sm">
                        <h5 className="text-xs font-semibold mb-1">Explicaciones en Lenguaje Natural</h5>
                        <p className="text-xs text-gray-600">
                          Resúmenes automatizados que explican al usuario por qué el sistema hizo una recomendación específica.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                    <FontAwesomeIcon icon={faCogs} className="mr-2" />
                    Flujo de Trabajo Integrado
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Nuestras soluciones integran los diferentes modelos de ML (pronóstico, precios, flota, segmentación) 
                    en un flujo de trabajo unificado para la toma de decisiones, ya sea automatizada o asistida.
                  </p>
                  
                  <div className="relative w-full max-w-3xl mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-1 w-full bg-blue-200 rounded"></div>
                    </div>
                    
                    <div className="relative flex justify-between">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-xs font-medium">Previsión</h4>
                          <p className="text-xs text-gray-500">Demanda</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faMoneyBillWave} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-xs font-medium">Pricing</h4>
                          <p className="text-xs text-gray-500">Optimización</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faCarSide} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-xs font-medium">Flota</h4>
                          <p className="text-xs text-gray-500">Distribución</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-xs font-medium">Segmentación</h4>
                          <p className="text-xs text-gray-500">Personalización</p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center">
                          <FontAwesomeIcon icon={faRocket} />
                        </div>
                        <div className="mt-2">
                          <h4 className="text-xs font-medium">Resultados</h4>
                          <p className="text-xs text-gray-500">Optimización</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl shadow-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">¿Quiere revolucionar su estrategia de Revenue Management?</h3>
                  <p className="text-white text-opacity-90">
                    Nuestros modelos de ML pueden ayudarle a optimizar precios, anticipar demanda y maximizar ingresos.
                  </p>
                </div>
                <button className="bg-white text-primary font-medium px-6 py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-all mt-4 md:mt-0">
                  Solicitar consulta
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        </div>
    </section>
  );
};

export default AnalyticsML;
