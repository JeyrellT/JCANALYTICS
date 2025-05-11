import React from 'react';
import Resumen from '../components/sections/Resumen';
import Objetivos from '../components/sections/Objetivos';
import Alcance from '../components/sections/Alcance';
import Metodologia from '../components/sections/Metodologia';
import Fases from '../components/sections/Fases';
import AnalyticsML from '../components/sections/AnalyticsML';
import Herramientas from '../components/sections/Herramientas';
import ROI from '../components/sections/ROI';
import Beneficios from '../components/sections/Beneficios';
import CentroExcelencia from '../components/sections/CentroExcelencia';
import Conclusion from '../components/sections/Conclusion';

const Home = () => {
  return (
    <main id="main-content">
      <Resumen />
      <Objetivos />
      <Alcance />
      <Metodologia />
      <Fases />
      <AnalyticsML />
      <Herramientas />
      <ROI />
      <Beneficios />
      <CentroExcelencia />
      <Conclusion />
    </main>
  );
};

export default Home;