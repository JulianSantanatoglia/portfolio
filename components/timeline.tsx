// src/components/Timeline.tsx
import React from 'react';
import { itemsTimeline } from '../data';

const Timeline: React.FC = () => {
  return (
    <div id="experience" className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-4xl px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          EVOLUCIÓN PROFESIONAL
        </h2>
        <div className="relative">
          {/* Línea vertical principal con efecto de brillo */}
          <div className="absolute w-1 h-full left-1/2 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-blue-500/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gray-700/40 backdrop-blur-sm"></div>
          </div>

          {itemsTimeline.map((item, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col items-center opacity-0 transform translate-y-8 animate-fadeIn ${
                index % 2 === 0 ? 'items-start' : 'items-end'
              }`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {/* Línea horizontal que conecta con la vertical */}
              <div className={`absolute h-0.5 w-12 bg-gray-700/40 top-1/2 ${
                index % 2 === 0 ? 'right-0' : 'left-0'
              }`}></div>

              <div className={`relative w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50 ${
                index % 2 === 0 ? 'mr-12' : 'ml-12'
              }`}>
                {/* Punto de conexión con efecto de brillo */}
                <div className="absolute w-4 h-4 rounded-full bg-blue-500 left-1/2 transform -translate-x-1/2 -top-2">
                  <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-gray-900"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-blue-400 mb-4 font-medium">{item.date}</p>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;