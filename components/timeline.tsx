import React from 'react';
import { itemsTimeline } from '../data';
import { Briefcase, ExternalLink } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div id="experience" className="relative flex justify-center items-center min-h-screen bg-gray-900 overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-5xl px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Trayectoria Profesional</span>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-4">
            Evolución Profesional
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mi camino en el desarrollo web y diseño digital
          </p>
        </div>
        <div className="relative">
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
              <div className={`absolute h-0.5 w-16 bg-gradient-to-r ${
                index % 2 === 0 ? 'from-blue-500/50 to-transparent right-0' : 'from-transparent to-blue-500/50 left-0'
              }`}></div>

              <div className={`relative w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50 ${
                index % 2 === 0 ? 'mr-16' : 'ml-16'
              }`}>
                <div className="absolute w-5 h-5 rounded-full bg-blue-500 left-1/2 transform -translate-x-1/2 -top-2.5">
                  <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-gray-900"></div>
                  <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/50"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                {item.company && (
                  <p className="text-sm text-gray-300 mb-3 font-medium">
                    {item.companyUrl ? (
                      <a 
                        href={item.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline inline-flex items-center gap-1"
                      >
                        {item.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
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