import React, { useState, useEffect, useMemo } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('resumen');

  const sections = useMemo(() => [
    { id: 'resumen', label: 'Resumen' },
    { id: 'objetivos', label: 'Objetivos' },
    { id: 'alcance', label: 'Alcance' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'fases', label: 'Fases' },
    { id: 'herramientas', label: 'Herramientas' },
    { id: 'roi', label: 'ROI' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'centro-excelencia', label: 'Centro de Excelencia' },
    { id: 'conclusion', label: 'Conclusión' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar sección activa
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      if (sectionElements.length) {
        let current = sectionElements[0].id;
        
        sectionElements.forEach(section => {
          const sectionTop = section.element.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.id;
          }
        });
        
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`bg-gradient-to-r from-primary to-primary sticky top-0 z-50 transition-all duration-300 shadow-md ${scrolled ? 'py-1 bg-opacity-95 backdrop-blur-sm' : 'py-2'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo eliminado del navbar */}
        
        <button 
          className="md:hidden text-white p-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
        >
          <div className={`nav-toggle ${isMenuOpen ? 'nav-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        <ul className={`
          md:flex md:items-center md:space-x-1 md:justify-center md:w-full
          ${isMenuOpen ? 'absolute top-full left-0 w-full bg-primary bg-opacity-95 shadow-lg flex flex-col transition-all duration-300 backdrop-blur-sm' : 'hidden'}
          md:static md:w-auto md:shadow-none
        `}>
          {sections.map(section => (
            <li key={section.id} className="md:py-0 py-2">
              <a
                href={`#${section.id}`}
                className={`
                  text-white md:px-4 px-6 py-2 rounded block transition-all duration-300
                  ${activeSection === section.id ? 
                    'bg-gradient-to-r from-secondary to-[#217dbb] font-medium relative' : 
                    'hover:bg-white hover:bg-opacity-10'}
                `}
                aria-current={activeSection === section.id ? 'page' : undefined}
                onClick={(e) => handleNavClick(e, section.id)}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded hidden md:block"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;