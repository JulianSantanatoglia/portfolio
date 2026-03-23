"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles } from 'lucide-react';

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
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 p-4 sm:p-5 shadow-lg ring-1 ring-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-blue-500/20 hover:ring-blue-400/20">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mb-4 overflow-hidden rounded-xl">
        <Image
          className="h-[190px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          src={imageUrl}
          alt={title}
          width={640}
          height={380}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
        <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-blue-400/30 bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-blue-200 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Proyecto destacado
        </div>
      </div>

      <h3 className="mb-2 text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="mb-4 text-sm text-slate-300/95 leading-relaxed line-clamp-2">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700/70 bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300 transition-colors duration-300 group-hover:border-blue-400/30 group-hover:text-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/35 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-100 transition-all duration-300 hover:border-blue-300/60 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.99]"
        aria-label={`Ver demo de ${title}`}
      >
        Ver demo
        <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  );
};

export default ProjectCard;