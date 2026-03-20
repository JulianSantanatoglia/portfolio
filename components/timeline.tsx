"use client";

import React from 'react';
import { itemsTimeline } from '../data';
import { Briefcase, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  return (
    <div id="experience" className="relative flex justify-center items-center bg-transparent py-20">
      <div className="relative w-full max-w-4xl px-4 py-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
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
        </motion.div>
        <div className="relative">
          <div className="absolute w-0.5 h-full left-4 md:left-1/2 md:-translate-x-1/2 transform">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-gray-700/30 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          </div>

          {itemsTimeline.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-6 md:mb-7 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
              initial={{ opacity: 0, y: 36, scale: 0.98, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className={`absolute h-0.5 w-8 md:w-10 bg-gradient-to-r ${
                index % 2 === 0
                  ? 'from-blue-500/50 to-transparent left-4 md:left-1/2'
                  : 'from-blue-500/50 to-transparent left-4 md:right-1/2 md:left-auto'
              }`}></div>

              <div className={`relative w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50 ml-10 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-7' : 'md:ml-7'
              }`}>
                <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 -left-8 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-2.5">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;