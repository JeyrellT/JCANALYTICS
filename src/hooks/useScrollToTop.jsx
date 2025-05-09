import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook que hace scroll hacia arriba cuando cambia la ruta
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};

export default useScrollToTop;