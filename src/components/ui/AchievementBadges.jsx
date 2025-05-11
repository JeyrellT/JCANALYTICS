import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMedal, faTrophy, faStar, faAward, 
  faChartLine, faLightbulb, faRocket, faSave
} from '@fortawesome/free-solid-svg-icons';

/**
 * Componente de gamificación discreta que muestra badges y reconocimientos
 * cuando el usuario interactúa con el sistema (ej: guardar escenarios óptimos)
 */
const AchievementBadges = ({ className, onBadgeEarned }) => {
  // Estado para controlar qué badges se muestran como ganados
  const [earnedBadges, setEarnedBadges] = useState([
    'optimizer', 'forecaster'
  ]);
  
  // Estado para mostrar el último badge ganado
  const [lastEarnedBadge, setLastEarnedBadge] = useState(null);
  
  // Definición de badges disponibles
  const badges = [
    {
      id: 'optimizer',
      name: 'Optimizador Experto',
      icon: faTrophy,
      color: 'from-amber-400 to-amber-600',
      description: 'Guardaste un escenario que mejora ingresos >10%',
      hint: 'Prueba ajustes más agresivos de precio en temporada alta'
    },
    {
      id: 'forecaster',
      name: 'Maestro del Forecast',
      icon: faChartLine,
      color: 'from-blue-400 to-blue-600',
      description: 'Logrado por utilizar variables externas en predicción',
      hint: 'Incorpora datos de vuelos para mejorar aún más el modelo'
    },
    {
      id: 'innovator',
      name: 'Innovador',
      icon: faLightbulb,
      color: 'from-purple-400 to-purple-600',
      description: 'Crea un nuevo caso de uso para el modelo',
      hint: 'Prueba aplicar el modelo a segmentos específicos de clientes'
    },
    {
      id: 'analyst',
      name: 'Analista Avanzado',
      icon: faStar,
      color: 'from-green-400 to-green-600',
      description: 'Identifica tendencias ocultas con el heatmap',
      hint: 'Busca patrones en días laborables vs. fin de semana'
    },
    {
      id: 'planner',
      name: 'Planificador Maestro',
      icon: faMedal,
      color: 'from-red-400 to-red-600',
      description: 'Guarda 5 escenarios diferentes para comparación',
      hint: 'Compara escenarios pesimistas vs. optimistas'
    }
  ];
  
  // Simular el guardado de un escenario y obtener un badge
  const saveScenario = () => {
    // Simulamos obtener un nuevo badge aleatorio que no esté ganado aún
    const unearned = badges.filter(badge => !earnedBadges.includes(badge.id));
    
    if (unearned.length > 0) {
      const randomBadge = unearned[Math.floor(Math.random() * unearned.length)];
      setEarnedBadges([...earnedBadges, randomBadge.id]);
      setLastEarnedBadge(randomBadge);
      
      // Callback para notificar al componente padre
      if (onBadgeEarned) {
        onBadgeEarned(randomBadge);
      }
      
      // Resetear lastEarnedBadge después de mostrar la notificación
      setTimeout(() => {
        setLastEarnedBadge(null);
      }, 5000);
    }
  };
  
  return (
    <div className={`${className}`}>
      {/* Botón para guardar escenario y ganar medallas */}
      <div className="mb-6 flex justify-end">
        <motion.button
          className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={saveScenario}
          aria-label="Guardar escenario actual"
        >
          <FontAwesomeIcon icon={faSave} className="mr-2" />
          Guardar Escenario Óptimo
        </motion.button>
      </div>
      
      {/* Panel de Logros */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary p-1"></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faAward} className="text-2xl text-primary mr-3" />
              <h3 className="text-xl font-semibold text-primary">Logros y Medallas</h3>
            </div>
            <div className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {earnedBadges.length} de {badges.length} obtenidos
            </div>
          </div>
          
          {/* Notificación de badge ganado */}
          {lastEarnedBadge && (
            <motion.div 
              className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${lastEarnedBadge.color} flex items-center justify-center text-white text-xl mr-4`}>
                <FontAwesomeIcon icon={lastEarnedBadge.icon} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-green-800">¡Nuevo logro desbloqueado!</div>
                <div className="text-sm text-gray-700">{lastEarnedBadge.name}</div>
              </div>
              <div className="animate-pulse">
                <FontAwesomeIcon icon={faRocket} className="text-2xl text-green-500" />
              </div>
            </motion.div>
          )}
          
          {/* Cuadrícula de badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {badges.map(badge => (
              <motion.div
                key={badge.id}
                className={`rounded-lg p-4 text-center ${
                  earnedBadges.includes(badge.id)
                    ? 'bg-gradient-to-b from-white to-gray-100 shadow-md'
                    : 'bg-gray-100 opacity-60'
                }`}
                whileHover={earnedBadges.includes(badge.id) ? { y: -5 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${
                  earnedBadges.includes(badge.id) ? badge.color : 'from-gray-300 to-gray-400'
                } mx-auto flex items-center justify-center text-white text-2xl`}>
                  <FontAwesomeIcon icon={badge.icon} />
                </div>
                <h4 className="font-medium mt-3 mb-1">{badge.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
                
                {!earnedBadges.includes(badge.id) && (
                  <div className="text-xs italic text-gray-500 mt-2">
                    Pista: {badge.hint}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Información sobre gamificación */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold mb-2">Sobre la gamificación en dashboards analíticos</h4>
            <p className="text-sm text-gray-700">
              Según estudios de Plecto y Think Design, la implementación de elementos discretos 
              de gamificación como medallas o logros aumenta el engagement del usuario en un 30% 
              y la retención en un 15%. Estos elementos estimulan el uso continuado de la herramienta
              y fomentan la exploración de funcionalidades avanzadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadges;
