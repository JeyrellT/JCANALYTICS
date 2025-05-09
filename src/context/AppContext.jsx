import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useAppContext = () => useContext(AppContext);

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  // Estados globales de la aplicación
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');
  
  // Funciones para actualizar el estado
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  
  // Valores a compartir en el contexto
  const values = {
    theme,
    language,
    toggleTheme,
    changeLanguage
  };
  
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;