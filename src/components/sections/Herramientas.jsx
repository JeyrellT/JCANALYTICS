import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, faBolt, faDatabase, faCode, faCloud, 
  faCogs, faChartLine, faRobot, faMobile, faSync, 
  faNetworkWired, faWrench} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faJs, faPython, faRProject, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const Herramientas = () => {
  const [activeTab, setActiveTab] = useState('power-platform');
  
  const tabs = [
    { id: 'power-platform', label: 'Power Platform', icon: faMicrosoft },
    { id: 'fabric', label: 'Microsoft Fabric', icon: faNetworkWired },
    { id: 'etl', label: 'ETL & Automatización', icon: faSync },
    { id: 'lenguajes', label: 'Lenguajes', icon: faCode },
    { id: 'desarrollo', label: 'Control y Desarrollo', icon: faWrench },
    { id: 'databases', label: 'BD & Cloud', icon: faCloud },
  ];

  return (
    <section id="herramientas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Herramientas y Plataforma Tecnológica</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Un desglose detallado de todas las tecnologías, lenguajes y entornos que JC Analytics 
            emplea en sus proyectos, con su rol específico para la empresa y los principales beneficios asociados.
          </p>
        </motion.div>
        
        {/* Tabs navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>
        
        {/* Power Platform Tab Content */}
        {activeTab === 'power-platform' && (
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <motion.div 
                className="bg-blue-50 p-6 rounded-xl shadow-lg text-center max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faMicrosoft} className="text-5xl text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary">Microsoft Power Platform</h3>
                <p className="text-gray-600 mt-2">Suite integrada de soluciones low-code para automatización, reporting y aplicaciones empresariales</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
                    <h4 className="text-xl font-bold">Power BI</h4>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-3 text-sm">Plataforma líder de visualización y reporting. Permite conectarse a múltiples orígenes, transformar datos y construir dashboards interactivos.</p>
                  
                  <div className="bg-blue-50 p-3 rounded-lg mb-3">
                    <h5 className="font-semibold text-blue-700 mb-2">Funcionalidades clave:</h5>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>DAX para cálculos avanzados</li>
                      <li>Power Query para ETL ligero</li>
                      <li>Integración nativa con Microsoft Fabric y OneLake</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-700">Beneficio:</h5>
                    <p className="text-sm text-gray-700">Reducción del 70% en tiempo de generación de informes ejecutivos semanales.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faRobot} className="text-2xl" />
                    <h4 className="text-xl font-bold">Power Automate</h4>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-3 text-sm">Herramienta de RPA / Low-Code que orquesta flujos de trabajo, mueve datos, envía notificaciones y ejecuta scripts.</p>
                  
                  <div className="bg-purple-50 p-3 rounded-lg mb-3">
                    <h5 className="font-semibold text-purple-700 mb-2">Casos de uso:</h5>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      <li>Ingestión diaria de reservas desde sistemas GDS</li>
                      <li>Consolidación automática de reportes de flota</li>
                      <li>Alertas proactivas de anomalías</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-700">Beneficio:</h5>
                    <p className="text-sm text-gray-700">Automatización de 12 procesos críticos, liberando más de 80 h/mes de trabajo manual.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faMobile} className="text-2xl" />
                    <h4 className="text-xl font-bold">Power Apps</h4>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-3 text-sm">Plataforma Low-Code para crear aplicaciones móviles/web empresariales que conectan directamente con Dataverse, SharePoint o APIs.</p>
                  
                  <div className="bg-orange-50 p-3 rounded-lg mb-3">
                    <h5 className="font-semibold text-orange-700 mb-2">Ejemplo:</h5>
                    <p className="text-sm text-gray-700">Formulario de control de daños en flota que captura datos en campo y actualiza la base de datos en tiempo real.</p>
                  </div>
                  
                  <div className="mt-4 bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-700">Beneficio:</h5>
                    <p className="text-sm text-gray-700">Digitalización de checklists de inspección, acelerando el registro de incidentes y trazabilidad.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        
        {/* Microsoft Fabric Tab */}
        {activeTab === 'fabric' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-6 text-white col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faNetworkWired} className="text-2xl text-blue-700" />
                    </div>
                    <h3 className="text-2xl font-bold">Microsoft Fabric & OneLake</h3>
                  </div>
                  <p className="mb-4">Plataforma unificada para integración nativa de datos, notebooks, pipelines, ML y reporting sobre una sola capa de almacenamiento (OneLake).</p>
                  <p className="text-blue-200 italic">Incluye Copilot para generación de consultas y visualizaciones.</p>
                </div>
                <div className="bg-white p-6 col-span-2">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">Uso en el proyecto</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-semibold text-blue-800 mb-2">Sincronización seamless</h5>
                      <p className="text-sm">Sincronización entre AWS MySQL y Power BI sin mover físicamente los datos.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h5 className="font-semibold text-blue-800 mb-2">Orquestación</h5>
                      <p className="text-sm">Pipelines de datos con shortcuts y semantic models unificados.</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-700 mb-2">Beneficio:</h5>
                    <p className="text-sm">Gobierno de datos centralizado y consistencia en todos los informes, con accesos y seguridad corporativa unificada.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative p-6 bg-gray-50 rounded-xl shadow-md">
              <div className="absolute top-0 right-0 h-32 w-32 bg-blue-500 rounded-bl-full opacity-10"></div>
              <h4 className="text-xl font-bold text-primary mb-4">Arquitectura integrada</h4>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <p className="mb-3">La arquitectura de Microsoft Fabric permite una experiencia fluida entre:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-medium">Data Factory</span> - Pipelines de datos</li>
                    <li><span className="font-medium">Synapse Analytics</span> - Data warehouse</li>
                    <li><span className="font-medium">Data Science</span> - ML y notebooks</li>
                    <li><span className="font-medium">Power BI</span> - Visualización y reportes</li>
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-60 h-60">
                    <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                    <div className="absolute inset-4 bg-blue-200 rounded-full flex items-center justify-center">
                      <div className="text-blue-800 font-bold text-lg">OneLake</div>
                    </div>
                    <div className="absolute h-16 w-16 bg-blue-500 rounded-full -top-4 -right-4 flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="absolute h-16 w-16 bg-green-500 rounded-full top-12 -right-8 flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faBolt} />
                    </div>
                    <div className="absolute h-16 w-16 bg-purple-500 rounded-full bottom-12 -right-8 flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                    <div className="absolute h-16 w-16 bg-yellow-500 rounded-full -bottom-4 -right-4 flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* ETL and Advanced Automation Tab */}
        {activeTab === 'etl' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-center text-primary mb-8">ETL y Automatización Avanzada</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-blue-600 text-white p-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
                    <h4 className="text-xl font-bold">Tableau</h4>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <p className="mb-4 text-sm">Herramienta de BI alternativa enfocada en exploración visual y dashboards "drag-and-drop".</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-gray-700">Uso:</h5>
                    <p className="text-sm">Prototipos rápidos de análisis exploratorio antes de formalizar en Power BI.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-green-600 text-white p-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCogs} className="text-2xl" />
                    <h4 className="text-xl font-bold">Alteryx</h4>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <p className="mb-4 text-sm">Plataforma de preparación de datos y analítica avanzada con flujos visuales.</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-gray-700">Uso:</h5>
                    <p className="text-sm">Preprocesamiento de grandes volúmenes de datos (curación, blending, limpieza) antes de la modelación.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-purple-600 text-white p-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faRobot} className="text-2xl" />
                    <h4 className="text-xl font-bold">DataIKU</h4>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <p className="mb-4 text-sm">Entorno colaborativo de Data Science para construir pipelines de datos y modelos ML.</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-gray-700">Uso:</h5>
                    <p className="text-sm">Validación de modelos de forecasting con múltiples algoritmos y comparación de desempeño.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-orange-600 text-white p-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faSync} className="text-2xl" />
                    <h4 className="text-xl font-bold">KNIME</h4>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <p className="mb-4 text-sm">Plataforma Open-Source de analítica de datos basada en nodos (ETL, ML, visualización).</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-gray-700">Uso:</h5>
                    <p className="text-sm">Automatización de procesos complejos con lógica condicional y loops, integración en el flujo ágil de sprints.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
        
        {/* Lenguajes Tab */}
        {activeTab === 'lenguajes' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center text-primary mb-6">Lenguajes de Programación</h3>
            
            <div className="flex flex-wrap justify-center gap-8">
              <motion.div 
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-4xl text-blue-600"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faPython} />
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-4xl text-blue-800"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faRProject} />
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-4xl text-green-600"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-bold">VBA</div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-4xl text-yellow-500"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faJs} />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faPython} className="text-2xl text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-800">Python</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Áreas de aplicación:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Modelos de Machine Learning (scikit-learn, TensorFlow, Prophet)</li>
                      <li>Automatizaciones ETL (pandas, SQLAlchemy)</li>
                      <li>Scripting de PowerShell / CLI de Azure/AWS</li>
                    </ul>
                  </div>
                  <div className="bg-blue-200 bg-opacity-50 p-3 rounded-lg">
                    <h5 className="font-semibold mb-1">Beneficio:</h5>
                    <p className="text-sm">Flexibilidad para prototipar algoritmos de forecasting y pricing dinámico.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 opacity-10 rounded-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faRProject} className="text-2xl text-blue-800" />
                  <h4 className="text-xl font-bold text-blue-800">R</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Áreas de aplicación:</h5>
                    <p className="text-sm mb-2">Análisis estadístico avanzado, tests de hipótesis y control estadístico de procesos (SPC).</p>
                    <p className="text-sm">Uso complementario en reportes de calidad de datos y validación de métricas Lean Six Sigma.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500 opacity-10 rounded-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 bg-green-600 rounded flex items-center justify-center text-white font-bold">VB</div>
                  <h4 className="text-xl font-bold text-green-800">VBA (Excel)</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Áreas de aplicación:</h5>
                    <p className="text-sm mb-2">Macros para automatizar tareas en plantillas clásicas, generación de informes legacy y validaciones previas a la migración hacia Power BI.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500 opacity-10 rounded-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faJs} className="text-2xl text-yellow-500" />
                  <h4 className="text-xl font-bold text-yellow-700">JavaScript & HTML</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Áreas de aplicación:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Dashboards "stand-alone" sin backend (usando librerías como D3.js o Chart.js)</li>
                      <li>Apps ligeras en Power Apps con scripts personalizados</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-200 bg-opacity-50 p-3 rounded-lg">
                    <h5 className="font-semibold mb-1">Beneficio:</h5>
                    <p className="text-sm">Interfaces web responsivas para prototipos o para extensiones de Power BI Embedding.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Control de Versiones Tab */}
        {activeTab === 'desarrollo' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gray-800 text-white p-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    <h4 className="text-xl font-bold">GitHub</h4>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-4 text-sm">Repositorio centralizado para todo el código y desarrollos. Garantiza control de versiones, colaboración y posibilidad de revertir cambios.</p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold mb-2">Flujo de ramas:</h5>
                    <pre className="whitespace-pre-wrap text-sm bg-white p-2 rounded border border-gray-200">feature/* → develop → main</pre>
                    <p className="mt-2 text-sm">Cada cambio requiere Pull Request y revisión de código antes de fusionarse.</p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Estructura de repositorio:</h5>
                    <pre className="whitespace-pre-wrap text-sm bg-white p-2 rounded border border-gray-200">/anc-revenue-project
├── /power-automate   # Flujos automatizados
├── /power-bi         # Archivos .pbix y datasets
├── /scripts-python   # Modelos predictivos y ETL
├── /scripts-vba      # Macros de Excel
├── /js-dashboards    # Prototipos JavaScript
└── /docs             # Documentación técnica</pre>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-blue-600 text-white p-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCode} className="text-2xl" />
                    <h4 className="text-xl font-bold">Visual Studio Code</h4>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-4 text-sm">Entorno de desarrollo ligero para editar scripts y gestionar repositorios Git. Facilita la integración con Power Platform mediante extensiones.</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold mb-2">Extensiones configuradas:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        Power Platform Tools
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        Python (con Black)
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        PowerShell
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-100 text-sm flex items-center gap-2">
                        <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                        ESLint y Prettier
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-700 mb-2">Beneficio:</h5>
                    <p className="text-sm">Desarrollo estandarizado, reproducible y con validación de calidad de código en cada commit.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
        
        {/* Bases de Datos Tab */}
        {activeTab === 'databases' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl shadow-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">AWS (RDS MySQL)</h4>
                  </div>
                  <p className="mb-4 text-sm">Base de datos relacional administrada en AWS, configurada con réplicas de lectura y respaldos automáticos.</p>
                  
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold mb-2">Uso:</h5>
                    <p className="text-sm">Almacenamiento maestro de reservas, telemetría de flota y datos históricos.</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Beneficio:</h5>
                    <p className="text-sm">Escalabilidad y alta disponibilidad, con acceso controlado desde Power BI y ETL.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faDatabase} className="text-2xl text-blue-500" />
                    </div>
                    <h4 className="text-xl font-bold">Microsoft Dataverse / Azure SQL</h4>
                  </div>
                  <p className="mb-4 text-sm">Almacenamiento relacional en Azure con integración nativa a Power Platform.</p>
                  
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold mb-2">Uso:</h5>
                    <p className="text-sm">Uso opcional según evolución del proyecto para consolidar datos maestros en la nube de Microsoft.</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Beneficios:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Integración nativa con Power Platform</li>
                      <li>• Seguridad de nivel empresarial</li>
                      <li>• Escalabilidad automática</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold text-primary mb-6 text-center">Arquitectura de datos y conectores</h4>
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl h-64">
                  {/* AWS Layer */}
                  <div className="absolute top-0 left-4 right-4 h-16 bg-orange-100 rounded-lg border border-orange-200 flex items-center justify-center">
                    <div className="flex items-center">
                      <span className="text-orange-800 font-semibold">AWS RDS</span>
                      <FontAwesomeIcon icon={faDatabase} className="text-orange-500 ml-2" />
                    </div>
                  </div>
                  
                  {/* Connector arrows */}
                  <div className="absolute top-16 left-1/4 h-8 w-0.5 bg-gray-400"></div>
                  <div className="absolute top-16 right-1/4 h-8 w-0.5 bg-gray-400"></div>
                  
                  {/* ETL Layer */}
                  <div className="absolute top-24 left-4 right-4 h-16 bg-purple-100 rounded-lg border border-purple-200 flex items-center justify-center gap-8">
                    <div className="flex items-center">
                      <span className="text-purple-800 font-semibold">ETL Pipelines</span>
                      <FontAwesomeIcon icon={faSync} className="text-purple-500 ml-2" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-800 font-semibold">Data Factory</span>
                      <FontAwesomeIcon icon={faCogs} className="text-purple-500 ml-2" />
                    </div>
                  </div>
                  
                  {/* Connector arrows */}
                  <div className="absolute top-40 left-1/3 h-8 w-0.5 bg-gray-400"></div>
                  <div className="absolute top-40 right-1/3 h-8 w-0.5 bg-gray-400"></div>
                  
                  {/* Reporting Layer */}
                  <div className="absolute bottom-0 left-4 right-4 h-16 bg-blue-100 rounded-lg border border-blue-200 flex items-center justify-center gap-8">
                    <div className="flex items-center">
                      <span className="text-blue-800 font-semibold">Power BI</span>
                      <FontAwesomeIcon icon={faChartLine} className="text-blue-500 ml-2" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-800 font-semibold">Web Apps</span>
                      <FontAwesomeIcon icon={faCode} className="text-blue-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        <motion.div 
          className="mt-12 p-6 bg-light rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-primary mb-4 text-center">Entornos de desarrollo y despliegue</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-6">
            <div className="bg-white p-4 rounded-lg shadow-sm w-full md:w-48 text-center">
              <h4 className="font-semibold mb-2">Desarrollo</h4>
              <p className="text-sm">Creación de código y pruebas iniciales</p>
            </div>
            <div className="text-primary text-2xl transform rotate-90 md:rotate-0 my-2 md:my-0">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-full md:w-48 text-center">
              <h4 className="font-semibold mb-2">Pruebas</h4>
              <p className="text-sm">Validación funcional</p>
            </div>
            <div className="text-primary text-2xl transform rotate-90 md:rotate-0 my-2 md:my-0">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-full md:w-48 text-center">
              <h4 className="font-semibold mb-2">Producción</h4>
              <p className="text-sm">Despliegue final</p>
            </div>
          </div>
          <p className="text-center italic text-primary mt-4">Cada entorno está aislado para garantizar calidad y evitar impactos en operaciones actuales.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Herramientas;