import React, { useEffect } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Registrar los componentes necesarios de ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * Componente reutilizable para gráficos con accesibilidad mejorada
 * @param {string} type - Tipo de gráfico: 'bar', 'line', 'pie', 'doughnut', 'heatmap', 'fanchart'
 * @param {object} data - Datos para el gráfico
 * @param {object} options - Opciones de configuración
 * @param {string} className - Clases adicionales
 * @param {string} ariaLabel - Etiqueta ARIA para accesibilidad
 */
const Chart = ({ type, data, options, className = '', ariaLabel = 'Gráfico estadístico' }) => {
  useEffect(() => {
    // Configurar paleta divergente para heatmap cuando sea necesario
    if (type === 'heatmap' && data && data.datasets && data.datasets.length > 0) {
      // Configurar paleta con punto medio neutral
      const dataset = data.datasets[0];
      dataset.backgroundColor = (context) => {
        const value = dataset.data[context.dataIndex];
        const min = Math.min(...dataset.data);
        const max = Math.max(...dataset.data);
        const mid = (min + max) / 2;
        
        // Paleta divergente - valores negativos en azul, neutros en blanco, positivos en rojo
        if (value < mid) {
          // Valores bajos: escala de azul
          const intensity = 1 - ((value - min) / (mid - min));
          return `rgba(25, 118, 210, ${0.3 + intensity * 0.7})`;
        } else if (value > mid) {
          // Valores altos: escala de rojo
          const intensity = (value - mid) / (max - mid);
          return `rgba(229, 57, 53, ${0.3 + intensity * 0.7})`;
        } else {
          // Valor neutro: blanco/gris claro
          return 'rgba(200, 200, 200, 0.7)';
        }
      };
    }
  }, [type, data]);

  // Configurar fan chart (bandas P10-P50-P90)
  const prepareFanChart = () => {
    if (!data || !data.datasets || data.datasets.length < 3) return data;
    
    // Asumiendo: datos[0] = P50 (línea central), datos[1] = P90, datos[2] = P10
    const p50 = data.datasets[0]; // Línea central
    const p90 = data.datasets[1]; // Intervalo superior
    const p10 = data.datasets[2]; // Intervalo inferior
    
    // Configurar estilos para claridad
    p50.borderWidth = 3;
    p50.pointRadius = 4;
    p50.pointHoverRadius = 6;
    p50.borderColor = 'rgb(52, 152, 219)'; // Azul claro
    p50.backgroundColor = 'rgba(52, 152, 219, 0.5)';
    
    // Intervalo P90
    p90.borderWidth = 1;
    p90.pointRadius = 0;
    p90.fill = false;
    p90.borderColor = 'rgba(52, 152, 219, 0.6)';
    p90.borderDash = [5, 5]; // Línea discontinua
    
    // Intervalo P10
    p10.borderWidth = 1;
    p10.pointRadius = 0;
    p10.fill = '-1'; // Relleno entre P10 y P90
    p10.borderDash = [5, 5];
    p10.backgroundColor = 'rgba(52, 152, 219, 0.2)';
    p10.borderColor = 'rgba(52, 152, 219, 0.6)';
    
    return {
      ...data,
      datasets: [p10, p90, p50] // Cambiar orden para que el relleno funcione correctamente
    };
  };

  const renderChart = () => {
    // Opciones por defecto para accesibilidad
    const accessibleOptions = {
      maintainAspectRatio: false,
      responsive: true,
      ...options,
      plugins: {
        ...(options?.plugins || {}),
        legend: {
          ...(options?.plugins?.legend || {}),
          labels: {
            ...(options?.plugins?.legend?.labels || {}),
            // Mejora el contraste del texto para accesibilidad
            color: '#333',
            font: {
              weight: 'bold',
              size: 13
            }
          },
          position: 'top', // Para heatmaps y otros gráficos, posición fija arriba
          display: true
        },
        tooltip: {
          ...(options?.plugins?.tooltip || {}),
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          bodyFont: {
            size: 14
          },
          padding: 10,
          cornerRadius: 4,
          displayColors: true
        }
      }
    };

    switch (type) {
      case 'bar':
        return <Bar data={data} options={accessibleOptions} aria-label={ariaLabel} />;
      case 'line':
        return <Line data={data} options={accessibleOptions} aria-label={ariaLabel} />;
      case 'pie':
        return <Pie data={data} options={accessibleOptions} aria-label={ariaLabel} />;
      case 'doughnut':
        return <Doughnut data={data} options={accessibleOptions} aria-label={ariaLabel} />;
      case 'heatmap':
        return <Bar data={data} options={accessibleOptions} aria-label={ariaLabel} />;
      case 'fanchart':
        return <Line data={prepareFanChart()} options={accessibleOptions} aria-label={ariaLabel} />;
      default:
        return <Bar data={data} options={accessibleOptions} aria-label={ariaLabel} />;
    }
  };

  return (
    <div 
      className={`chart-container ${className}`}
      role="figure"
      aria-label={ariaLabel}
      style={{ width: '100%', height: '100%' }}
    >
      {renderChart()}
    </div>
  );
};

export default Chart;