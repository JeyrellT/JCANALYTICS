import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que hace scroll hacia arriba cuando cambia la ruta
 * Se utiliza dentro del Router para garantizar que cada cambio de página
 * haga scroll hacia el inicio de la ventana
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;