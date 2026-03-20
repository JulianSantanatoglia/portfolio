"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  websiteUrl: string;
  technologies: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  websiteUrl,
  technologies,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
        isHovered ? 'scale-[1.02] shadow-2xl' : 'hover:shadow-2xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <div className="absolute inset-0 rounded-2xl border border-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="absolute inset-0 rounded-2xl border border-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <div className="relative p-4 sm:p-6 z-10">
        <div className="relative">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{title}</h3>
          <div className="relative w-full h-[180px] sm:h-[200px] group overflow-hidden rounded-xl">
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 z-[1] ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <Image
              className={`rounded-xl transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}
              src={imageUrl}
              alt={title}
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'top'
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm sm:text-base font-medium text-white/90 bg-white/10 border border-white/25 rounded-lg backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:text-white"
              >
                Ver demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 mb-2">
        <p className="text-sm text-white/90 font-medium text-center line-clamp-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">{description}</p>
      </div>
      <div className="p-4 sm:p-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-3 py-1 text-xs sm:text-sm text-gray-300 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}></div>
    </div>
  );
};

export default ProjectCard;