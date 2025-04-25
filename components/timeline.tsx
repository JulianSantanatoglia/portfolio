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
          {/* Línea vertical principal con efecto de brillo y gradiente */}
          <div className="absolute w-0.5 h-full left-1/2 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-gray-700/30 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
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
              <div className={`absolute h-0.5 w-16 bg-gradient-to-r ${
                index % 2 === 0 ? 'from-blue-500/50 to-transparent right-0' : 'from-transparent to-blue-500/50 left-0'
              }`}></div>

              <div className={`relative w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50 ${
                index % 2 === 0 ? 'mr-16' : 'ml-16'
              }`}>
                {/* Punto de conexión con efecto de brillo y anillo */}
                <div className="absolute w-5 h-5 rounded-full bg-blue-500 left-1/2 transform -translate-x-1/2 -top-2.5">
                  <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-gray-900"></div>
                  <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/50"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                {item.company && (
                  <p className="text-sm text-gray-300 mb-3 font-medium">{item.company}</p>
                )}
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