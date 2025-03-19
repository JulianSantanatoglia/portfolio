// src/components/Timeline.tsx
import React from 'react';
import { itemsTimeline } from '../data';

const Timeline: React.FC = () => {
  return (
    <div id="experience" className="flex justify-center items-center min-h-screen to-black">
      <div className="w-full max-w-4xl px-4 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Experiencia profesional
        </h2>
        <div className="relative">
          {itemsTimeline.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col items-center opacity-0 transform translate-y-8 animate-fadeIn ${
                index % 2 === 0 ? 'items-start' : 'items-end'
              }`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative w-full max-w-md bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute w-3 h-3 rounded-full bg-blue-500 left-1/2 transform -translate-x-1/2 -top-1.5"></div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
              {index < itemsTimeline.length - 1 && (
                <div className="absolute w-0.5 bg-gray-600 h-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;