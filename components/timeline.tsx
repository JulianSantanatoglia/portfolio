"use client";

import React from 'react';
import { itemsTimeline } from '../data';
import { Briefcase, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './language-provider';
import { localizeTimelineItems } from '../utils/localized-data';

interface TimelineItem {
  title: string;
  company?: string;
  companyUrl?: string;
  date: string;
  description: string;
}

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index }) => {
  const stackTop = 86 + Math.min(index, 6) * 12;
  return (
    <div className="relative mb-[10px] md:mb-0 md:h-[14rem]">
      <motion.article
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-2xl bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-700/60 p-5 md:p-6 md:sticky"
        style={{
          top: `calc(${stackTop}px)`,
          zIndex: index + 2,
        }}
      >
        <span className="absolute -left-8 md:-left-9 top-6 h-3.5 w-3.5 rounded-full border-2 border-blue-300/80 bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.75)]" />
        <span className="absolute -left-4 md:-left-5 top-[1.95rem] h-px w-4 md:w-5 bg-blue-400/60" />

        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
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

        <p className="text-gray-300 leading-relaxed text-sm md:text-[15px]">{item.description}</p>
      </motion.article>
    </div>
  );
};

const Timeline: React.FC = () => {
  const { language } = useLanguage();
  const timelineItems = localizeTimelineItems(itemsTimeline, language);

  return (
    <div id="experience" className="relative bg-transparent py-20">
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              {language === "es" ? "Trayectoria Profesional" : "Professional Journey"}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-4">
            {language === "es" ? "Evolución Profesional" : "Professional Evolution"}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-[21rem] sm:max-w-2xl mx-auto px-2 sm:px-0">
            {language === "es"
              ? "Mi camino en el desarrollo web y diseño digital"
              : "My journey in web development and digital design"}
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl pl-10 md:pl-12 pb-24">
          <div className="pointer-events-none absolute left-4 md:left-5 top-[-160px] bottom-0 w-[2px] bg-gradient-to-b from-cyan-300/80 via-blue-500/60 to-purple-500/20" />
          <div className="pointer-events-none absolute left-[10px] md:left-[14px] top-[-170px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />

          {timelineItems.map((item, index) => (
            <TimelineCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;