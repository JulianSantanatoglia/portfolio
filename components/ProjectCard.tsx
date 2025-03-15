"use client";

import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  githubUrl: string;
  websiteUrl: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  githubUrl,
  websiteUrl,
  technologies,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
        isHovered ? 'scale-105 shadow-2xl' : 'hover:shadow-2xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <div className="absolute inset-0 z-0"></div>
      <div className="relative p-6 z-10">
        <div className="relative">
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          <img
            className={`w-full rounded-xl transition-filter duration-300 ${isHovered ? 'blur-sm' : ''}`}
            src={imageUrl}
            alt={title}
            style={{ height: '200px', objectFit: 'cover' }} // Altura fija y object-fit
          />
        </div>
        {isHovered && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center space-x-4 z-30">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white flex items-center border border-black rounded-md px-4 py-2 text-lg transition-colors duration-300 hover:border-gray-800"
            >
              <Github className="mr-1 h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-300 text-white border border-blue-400 rounded-md px-4 py-2 text-lg transition-colors duration-300 hover:border-blue-300"
            >
              Demo
            </a>
          </div>
        )}
      </div>
      <div className=" bottom-0 left-0 right-0 p-6 flex flex-wrap">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-800 bg-opacity-30 rounded-full px-3 py-1 text-sm text-gray-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 rounded-2xl border-2 border-opacity-20 border-blue-300 pointer-events-none neon-border-glass"></div>
    </div>
  );
};

export default ProjectCard;