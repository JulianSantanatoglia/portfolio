"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { certifications } from '../data';
import { ExternalLink } from 'lucide-react';
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
    <div id="certifications" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-gray-100 mb-2">
            Certificaciones
          </h2>
          <p className="text-sm text-gray-400">
            Mis certificaciones y credenciales profesionales
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="p-6">
                <div className="relative w-full h-32 mb-4 hidden sm:block">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{cert.company}</p>
                <p className="text-xs text-blue-400 mb-4">{cert.date}</p>
                <button
                  onClick={() => handleOpenModal(cert.imageUrl, cert.title)}
                  className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Ver credencial
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
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