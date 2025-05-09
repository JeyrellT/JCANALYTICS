import React from 'react';
import { motion } from 'framer-motion';
import logoJC from '../../assets/JCAnalytics.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white py-16 text-center shadow-lg relative z-50 overflow-hidden">
      {/* SVG Pattern Overlay */}
      <div className="absolute inset-0 bg-header-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo destacado en la parte superior */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img src={logoJC} alt="JC Analytics Logo" className="h-23 md:h-28 filter drop-shadow-md" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Propuesta de 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-light block md:inline"> Transformación Digital</span>
        </motion.h1>
        
        <motion.div 
          className="w-24 h-1 bg-white mx-auto rounded-full mb-6 opacity-80"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        ></motion.div>
        
        <motion.p 
          className="text-2xl font-light max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Gestión de Ingresos Empresariales
        </motion.p>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;