import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-blue-400 transition-colors duration-300"
        >
          <X size={24} />
        </button>
        <div className="relative w-full h-[80vh]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationModal; 