"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { certifications } from '../data';
import { ExternalLink, Award } from 'lucide-react';
import CertificationModal from './CertificationModal';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{
    imageUrl: string;
    title: string;
  } | null>(null);

  const handleOpenModal = (imageUrl: string, title: string) => {
    setSelectedCert({ imageUrl, title });
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <div id="certifications" className="relative bg-gray-900 text-gray-300 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Formación Profesional</span>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Certificaciones
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mis certificaciones y credenciales que validan mi experiencia y conocimientos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              
              {/* Certificate image with gradient overlay */}
              <div className="relative w-full h-40 bg-gradient-to-br from-gray-700/30 to-gray-800/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1 font-medium">{cert.company}</p>
                <p className="text-xs text-purple-400 mb-4 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  {cert.date}
                </p>
                
                <button
                  onClick={() => handleOpenModal(cert.imageUrl, cert.title)}
                  className="group/btn relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-400 hover:text-purple-300 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover/btn:from-purple-500/20 group-hover/btn:to-pink-500/20 transition-all"></span>
                  <span className="relative font-semibold">Ver credencial</span>
                  <ExternalLink className="relative w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              {certifications.length}+
            </div>
            <p className="text-gray-400 text-sm">Certificaciones</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              6+
            </div>
            <p className="text-gray-400 text-sm">Plataformas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-2">
              2025
            </div>
            <p className="text-gray-400 text-sm">Última Actualización</p>
          </div>
        </div>
      </div>

      {selectedCert && (
        <CertificationModal
          isOpen={!!selectedCert}
          onClose={handleCloseModal}
          imageUrl={selectedCert.imageUrl}
          title={selectedCert.title}
        />
      )}
    </div>
  );
};

export default Certifications; 