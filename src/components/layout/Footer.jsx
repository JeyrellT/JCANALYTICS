import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import logoJC from '../../assets/JCAnalytics.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-[#1a252f] text-white py-16 text-center relative overflow-hidden">
      {/* SVG Pattern Overlay */}
      <div className="absolute inset-0 bg-header-pattern opacity-5"></div>
      
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div
          className="mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo en el Footer */}
          <div className="flex justify-center mb-6">
            <img src={logoJC} alt="JC Analytics Logo" className="h-16" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-light">
            Propuesta de Transformación Digital
          </h3>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="opacity-80 mb-6">
            Desarrollada para impulsar la gestión de ingresos mediante análisis avanzado de datos
            y automatización de procesos empresariales.
          </p>
        </motion.div>
        
        <motion.ul 
          className="flex justify-center space-x-8 my-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300 transform hover:scale-110 inline-block"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300 transform hover:scale-110 inline-block"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-300 transform hover:scale-110 inline-block"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </motion.ul>
        
        <div className="text-sm opacity-60 border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} JC Analytics. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;