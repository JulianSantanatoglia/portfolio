"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../data';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + projectsPerPage;
      if (nextIndex >= projects.length) {
        return 0;
      }
      return nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - projectsPerPage;
      if (nextIndex < 0) {
        return Math.max(0, projects.length - projectsPerPage);
      }
      return nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="relative w-full py-8">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:static p-1.5 md:p-3 rounded-full bg-gray-800/70 hover:bg-gray-700/70 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110 z-10"
          disabled={isAnimating}
        >
          <ChevronLeft size={20} className="md:w-7 md:h-7" />
        </button>

        <div className="overflow-hidden w-full max-w-7xl px-8 md:px-0">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / projectsPerPage)}%)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${projectsPerPage === 1 ? 'w-full' : 'w-1/2'} flex-shrink-0 px-2 md:px-4`}
              >
                <div className="h-[450px]">
                  <ProjectCard
                    imageUrl={project.imageUrl}
                    title={project.title}
                    githubUrl={project.githubUrl}
                    websiteUrl={project.websiteUrl}
                    technologies={project.technologies}
                    description={project.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:static p-1.5 md:p-3 rounded-full bg-gray-800/70 hover:bg-gray-700/70 transition-all duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110 z-10"
          disabled={isAnimating}
        >
          <ChevronRight size={20} className="md:w-7 md:h-7" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8 mb-4">
        {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index * projectsPerPage)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === Math.floor(currentIndex / projectsPerPage)
                ? 'bg-blue-500 w-6'
                : 'bg-gray-600 w-2 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel; 