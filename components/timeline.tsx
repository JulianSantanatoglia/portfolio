"use client";

import React from 'react';
import { itemsTimeline } from '../data';
import { Briefcase, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  company?: string;
  companyUrl?: string;
  date: string;
  description: string;
}

interface StackingTimelineCardProps {
  item: TimelineItem;
}

const TimelineCard: React.FC<StackingTimelineCardProps> = ({ item }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative w-full bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-7 border border-gray-700/60 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
          {item.company && (
            <p className="text-sm text-gray-300 font-medium">
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
        </div>
        <p className="text-sm text-blue-400 font-medium whitespace-nowrap">{item.date}</p>
      </div>

      <p className="text-gray-300 leading-relaxed">{item.description}</p>
    </motion.article>
  );
};

const Timeline: React.FC = () => {
  return (
    <div id="experience" className="relative flex justify-center items-center bg-transparent py-20">
      <div className="relative w-full max-w-4xl px-4 py-10">
        <div className="text-center mb-5">
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
        <div className="relative mx-auto max-w-3xl space-y-6">
          {itemsTimeline.map((item, index) => (
            <TimelineCard
              key={`${item.title}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;