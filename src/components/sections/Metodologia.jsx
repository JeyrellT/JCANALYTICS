import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Timeline from '../ui/Timeline';
import Card from '../ui/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faRocket, faArrowRight, faLaptopCode, faChartLine, faComments, faUserGear } from '@fortawesome/free-solid-svg-icons';

const Metodologia = () => {
  // Estado para los roles interactivos
  const [hoveredRole, setHoveredRole] = useState(null);
  
  // Datos para roles
  const roles = [
    {
      id: 'catalina-0-2',
      name: 'Catalina',
      role: 'Project Manager Administrativa',
      period: 'Mes 0-2',
      tasks: ['Entrevistas', 'Charters', 'KPI', 'Tabulación'],
      icon: faChartLine,
      color: 'from-secondary to-primary'
    },
    {
      id: 'jeyrell-0-2',
      name: 'Jeyrell',
      role: 'PM Lean Six Sigma',
      period: 'Mes 0-2',
      tasks: ['Mapeo procesos', 'DMAIC', 'Backlog'],
      icon: faUserGear,
      color: 'from-secondary to-[#217dbb]'
    },
    {
      id: 'catalina-3-6',
      name: 'Catalina',
      role: 'Project Manager continuo',
      period: 'Mes 3-6',
      tasks: ['Comunicaciones', 'Control', 'Adopción'],
      icon: faComments,
      color: 'from-secondary to-primary'
    },
    {
      id: 'jeyrell-3-6',
      name: 'Jeyrell',
      role: 'Desarrollador Sr.',
      period: 'Mes 3-6',
      tasks: ['Automatizaciones', 'Dashboards', 'ML'],
      icon: faLaptopCode,
      color: 'from-secondary to-[#217dbb]'
    }
  ];

  const timelineItems = [
    {
      title: 'Definición y Medición',
      description: 'Mapeo de procesos existentes y definición de KPIs actuales. Medición de tiempos y recursos dedicados a cada tarea.',      highlight: {
        title: 'Caso Empresa',
        content: 'La medición inicial identificó que los analistas dedican 45% de su tiempo a tareas manuales de datos.'
      }
    },
    {
      title: 'Análisis de Causas',
      description: 'Identificación de tareas repetitivas o ineficientes y priorización de oportunidades de automatización y mejora de datos.',      highlight: {
        title: 'Caso Empresa',
        content: 'Análisis fishbone reveló duplicidad en reportes y falta de integración con sistemas de reservas.'
      }
    },
    {
      title: 'Diseño y Desarrollo',
      description: 'Desarrollo de soluciones de automatización y análisis de manera iterativa (dashboards, flujos automatizados, modelos ML).',      highlight: {
        title: 'Caso Empresa',
        content: 'Desarrollo de ETL automatizado que consolida datos de 3 fuentes diferentes en tiempo real.'
      }
    },
    {
      title: 'Control y Validación',
      description: 'Implementación de controles para asegurar la calidad de los datos y la correcta operación de las automatizaciones.',      highlight: {
        title: 'Caso Empresa',
        content: 'Sistema de alertas implementado detecta anomalías en patrones de reserva con 95% de precisión.'
      }
    }
  ];

  return (
    <section id="metodologia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Metodología de Trabajo: Lean Six Sigma y Agile</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Estructura de roles y transición - Versión moderna e interactiva */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-primary text-center">Estructura de Roles y Transición</h3>
          
          {/* Diseño moderno para roles en desktop */}
          <div className="hidden md:grid grid-cols-2 gap-8 relative mx-auto max-w-4xl">
            {/* Línea temporal del medio - FIXED with better visibility */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 via-secondary to-primary/30 -translate-y-1/2 rounded-full z-0"></div>
            
            {/* Círculo de conexión en el centro */}
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 z-10 border-2 border-white shadow-md"></div>
            
            {/* Flecha de transición animada - enhanced */}
            <motion.div 
              className="absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 flex items-center justify-center z-10"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="bg-white p-2 rounded-full shadow-md">
                <FontAwesomeIcon icon={faArrowRight} className="text-3xl text-primary" />
              </div>
            </motion.div>
            
            {/* Mes 0-2 */}
            <div className="text-center mb-12 z-20">
              <div className="bg-gradient-to-r from-primary to-secondary py-2 px-6 inline-block rounded-full text-white font-bold mb-6 shadow-md">
                Mes 0-2
              </div>
              <div className="grid grid-cols-2 gap-4">
                {roles.filter(r => r.period === 'Mes 0-2').map(role => (
                  <motion.div
                    key={role.id}
                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 
                              bg-gradient-to-br from-white to-gray-50 
                              ${hoveredRole === role.id ? 'shadow-lg scale-105' : ''}`}
                    whileHover={{ y: -5 }}
                    onMouseEnter={() => setHoveredRole(role.id)}
                    onMouseLeave={() => setHoveredRole(null)}
                  >
                    <div className={`bg-gradient-to-r ${role.color} text-white p-4 border-none`}>
                      <FontAwesomeIcon icon={role.icon} className="text-2xl" />
                      <h4 className="font-semibold mt-2">{role.name}</h4>
                    </div>
                    <div className="p-4">
                      <h5 className="font-medium text-primary">{role.role}</h5>
                      <ul className="mt-2 space-y-1 text-sm">
                        {role.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mes 3-6 */}
            <div className="text-center mb-12 z-20">
              <div className="bg-gradient-to-r from-secondary to-primary py-2 px-6 inline-block rounded-full text-white font-bold mb-6 shadow-md">
                Mes 3-6
              </div>
              <div className="grid grid-cols-2 gap-4">
                {roles.filter(r => r.period === 'Mes 3-6').map(role => (
                  <motion.div
                    key={role.id}
                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 
                              bg-gradient-to-br from-white to-gray-50
                              ${hoveredRole === role.id ? 'shadow-lg scale-105' : ''}`}
                    whileHover={{ y: -5 }}
                    onMouseEnter={() => setHoveredRole(role.id)}
                    onMouseLeave={() => setHoveredRole(null)}
                  >
                    <div className={`bg-gradient-to-r ${role.color} text-white p-4 border-none`}>
                      <FontAwesomeIcon icon={role.icon} className="text-2xl" />
                      <h4 className="font-semibold mt-2">{role.name}</h4>
                    </div>
                    <div className="p-4">
                      <h5 className="font-medium text-primary">{role.role}</h5>
                      <ul className="mt-2 space-y-1 text-sm">
                        {role.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Versión móvil de la estructura de roles - improved visual cues */}
          <div className="md:hidden">
            <div className="relative pl-10 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-primary">
              {/* Mes 0-2 */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="absolute left-2 w-6 h-6 rounded-full bg-primary border-2 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full text-white font-bold ml-4 shadow-sm">
                    Mes 0-2
                  </div>
                </div>
                
                {roles.filter(r => r.period === 'Mes 0-2').map(role => (
                  <motion.div
                    key={role.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden mb-3 border-l-4 border-primary"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`bg-gradient-to-r ${role.color} text-white p-3 flex items-center`}>
                      <FontAwesomeIcon icon={role.icon} className="text-xl mr-2" />
                      <h4 className="font-semibold">{role.name} - {role.role}</h4>
                    </div>
                    <div className="p-3">
                      <div className="text-xs space-y-1">
                        {role.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-1.5"></span>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Flecha de transición - enhanced */}
              <div className="flex justify-center my-4 relative">
                <div className="absolute left-2 w-6 h-6 rounded-full bg-secondary border-2 border-white shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <motion.div
                  className="bg-white rounded-full shadow-md p-2"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="text-xl text-primary transform rotate-90" />
                </motion.div>
              </div>
              
              {/* Mes 3-6 */}
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <div className="absolute left-2 w-6 h-6 rounded-full bg-secondary border-2 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gradient-to-r from-secondary to-primary py-1 px-4 rounded-full text-white font-bold ml-4 shadow-sm">
                    Mes 3-6
                  </div>
                </div>
                
                {roles.filter(r => r.period === 'Mes 3-6').map(role => (
                  <motion.div
                    key={role.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden mb-3 border-l-4 border-secondary"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`bg-gradient-to-r ${role.color} text-white p-3 flex items-center`}>
                      <FontAwesomeIcon icon={role.icon} className="text-xl mr-2" />
                      <h4 className="font-semibold">{role.name} - {role.role}</h4>
                    </div>
                    <div className="p-3">
                      <div className="text-xs space-y-1">
                        {role.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-1.5"></span>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center mt-4 italic text-primary">
            (Ambos atienden las consultas de stakeholder 16:00-17:00 h L-V.)
          </p>
        </motion.div>
        
        {/* Roadmap mensual de entregables - Eliminando las etiquetas rojas */}
        <motion.div 
          className="mb-12 overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Roadmap Mensual de Entregables</h3>
          
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-4 px-3 text-left">Mes</th>
                  <th className="py-4 px-3 text-left">Entregables documentales / de proceso</th>
                  <th className="py-4 px-3 text-left">Entregables técnicos</th>
                  <th className="py-4 px-3 text-left">Valor para la Empresa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">0<br/>(Arranque)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Project Charter</li>
                      <li>Calendario de sprints</li>
                      <li>Checklist de accesos</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">—</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    Equipo alineado y metas claras 
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">1<br/>(Define–Measure)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>SIPOC & VSM</li>
                      <li>Inventario de datos</li>
                      <li>KPI base</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Cronometría de tareas (Takt-time)</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    Visibilidad de desperdicios actuales
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">2<br/>(Analyze + Quick Wins)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Matriz esfuerzo-impacto</li>
                      <li>Plan de cambios "sin IT"</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>3 automatizaciones low-code (Power Automate)</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    ≥ 160 h/mes liberadas sin recortar personal
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">3<br/>(Improve – Sprint 1-2)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Guía de datos normalizados</li>
                      <li>Story Map de usuario</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>ETL piloto + dataset único en OneLake</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    Base limpia lista para analítica
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">4<br/>(Agile – Sprint 3-4)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Manual de operación del dataset</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>MVP Dashboard Revenue (Power BI)</li>
                      <li>Alertas pick-up via Teams</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    Reportes en {"<"} 5 min vs 45 min
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">5<br/>(Sprint 5-6)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Documento de features v1</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Modelo ML demanda/pricing (Python–AWS)</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    Forecast ±5 % MAE
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-3 border-b border-gray-100 font-medium">6<br/>(Control & COE)</td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Control Plan Six Sigma</li>
                      <li>Manuales & capacitación</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    <ul className="list-disc pl-5">
                      <li>Panel de salud de flota con mantenimiento predictivo</li>
                    </ul>
                  </td>
                  <td className="py-4 px-3 border-b border-gray-100">
                    −10 % coste flota; Centro de Excelencia operativo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center mt-4 italic text-primary">
            Puntos de control: review quincenal + reporte semanal; cada sprint genera demo funcional conforme a la guía de sprint-scheduling
          </p>
        </motion.div>
        
        {/* Inicio de desarrollo - Eliminando las etiquetas rojas */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center flex items-center justify-center">
            <FontAwesomeIcon icon={faRocket} className="mr-2 text-secondary" />
            Inicio de Desarrollo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3 font-bold">1</div>
                  <div>
                    <p className="font-semibold">Semana 0-1:</p>
                    <p>Acceso a sistemas y datos, entrevistas clave.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3 font-bold">2</div>
                  <div>
                    <p className="font-semibold">Semana 2:</p>
                    <p>Backlog fechado; sprint 0 arrancado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3 font-bold">3</div>
                  <div>
                    <p className="font-semibold">Semana 5 (inicio Mes 3):</p>
                    <p>Jeyrell pasa oficialmente de PM técnico a desarrollador; primer código de ETL y automatizaciones entra a repositorio.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3 font-bold">4</div>
                  <div>
                    <p className="font-semibold">Semana 9 (mitad Mes 4):</p>
                    <p>Primer dashboard MVP listo para prueba de usuario.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4">
                Esta cadencia de "documentación → quick wins → tecnología" maximiza adopción porque corrige procesos antes de codificarlos, tal como recomienda la práctica Lean 6 Sigma y la experiencia del sector rent-a-car digital.
              </p>
              
              <div className="p-4 bg-primary bg-opacity-5 rounded-lg border-l-4 border-secondary mt-4">
                <h4 className="font-bold text-primary mb-2">Cómo se asegura la entrega permanente</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary bg-opacity-10 flex-shrink-0 mr-2 flex items-center justify-center mt-1">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <p>Sprint-demo quincenal con KPI de velocidad y burndown.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary bg-opacity-10 flex-shrink-0 mr-2 flex items-center justify-center mt-1">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <p>Quick-win board vivo: cualquier mejora {"<"} 8 h se implementa en el mismo sprint.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-secondary bg-opacity-10 flex-shrink-0 mr-2 flex items-center justify-center mt-1">
                      <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    </div>
                    <p>Control Phase documentado: plan de monitoreo y transferencia de propiedad al equipo de la Empresa para cada módulo entregado.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        <Timeline items={timelineItems} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">          <Card title="Metodología Agile" icon={<FontAwesomeIcon icon={faCalendarAlt} />}>
            <p className="mb-4">Implementamos ciclos cortos (sprints quincenales) con demos funcionales, lo que permite adaptar constantemente el alcance según la retroalimentación del equipo de la Empresa.</p>
            <div className="bg-light bg-opacity-30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Beneficios del enfoque Agile:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Entregas incrementales cada 2 semanas con valor inmediato</li>
                <li>Adaptación rápida a cambios de prioridades empresariales</li>
                <li>Visibilidad constante del progreso con demos funcionales</li>
                <li>Integración del feedback en ciclo continuo de mejora</li>
              </ul>
            </div>
          </Card>
          
          <Card title="Estructura de Roles" icon={<FontAwesomeIcon icon={faUsers} />}>
            <p className="mb-4">El proyecto cuenta con un sistema de roles dinámicos que evolucionan durante el proyecto para maximizar la entrega de valor:</p>
            <div className="bg-light bg-opacity-30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Ventajas del modelo de roles:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>PM Administrativo mantiene alineación con objetivos de negocio</li>
                <li>PM Técnico/Desarrollador garantiza soluciones implementables</li>
                <li>Transición planificada de roles maximiza conocimiento y eficiencia</li>
                <li>Atención diaria a stakeholders asegura comunicación constante</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;