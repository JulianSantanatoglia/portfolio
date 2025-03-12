import React from 'react';
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
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg z-0"></div>
      <div className="relative p-6 z-10">
        <img className="w-full rounded-xl mb-4" src={imageUrl} alt={title} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex justify-start space-x-4 mb-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <Github className="mr-1 h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            Website
          </a>
        </div>
        <div className="flex flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 bg-opacity-30 rounded-full px-3 py-1 text-sm text-gray-300 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl border-2 border-opacity-20 border-blue-300 pointer-events-none neon-border-glass"></div>
    </div>
  );
};

export default ProjectCard;