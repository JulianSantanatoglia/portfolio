"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 md:bottom-8 right-8 p-3 rounded-full bg-blue-950/80 backdrop-blur-sm border border-blue-500/50 transition-all duration-300 hover:bg-blue-900/80 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <ChevronUp className="h-6 w-6 text-blue-400" />
    </button>
  );
};

export default ScrollToTop; 