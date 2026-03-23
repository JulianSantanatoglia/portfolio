"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaBootstrap,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiCanva,
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { LayoutDashboard, PencilRuler, Code2, Server, Palette } from "lucide-react";
import { useLanguage } from "./language-provider";

const Skills = () => {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    frontend: {
      title: isEs ? "Desarrollo Frontend" : "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "SASS", icon: <FaSass />, color: "text-pink-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
      ],
    },
    backend: {
      title: isEs ? "Backend y Herramientas" : "Backend & Tools",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
        { name: "MySQL", icon: <FaDatabase />, color: "text-blue-400" },
        { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
        { name: "Excel", icon: <RiFileExcel2Fill />, color: "text-green-500" },
      ],
    },
    design: {
      title: isEs ? "Diseño y Creatividad" : "Design & Creative",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Canva", icon: <SiCanva />, color: "text-blue-500" },
        { name: "Illustrator", icon: <LayoutDashboard />, color: "text-orange-500" },
        { name: "Photoshop", icon: <PencilRuler />, color: "text-blue-400" },
      ],
    },
  };

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap(category => 
      category.skills.map(skill => ({ ...skill, category: category.title }))
    );
  };

  const getFilteredSkills = () => {
    if (activeCategory === "all") return getAllSkills();
    return skillCategories[activeCategory as keyof typeof skillCategories].skills.map(skill => ({
      ...skill,
      category: skillCategories[activeCategory as keyof typeof skillCategories].title
    }));
  };

  return (
    <div id="skills-section" className="relative bg-transparent text-gray-300 py-20">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
            {isEs ? "Stack Tecnológico" : "Tech Stack"}
          </h2>
          <p className="text-base text-gray-400 max-w-[21rem] sm:max-w-2xl mx-auto px-2 sm:px-0">
            {isEs
              ? "Herramientas y tecnologías que domino para crear experiencias digitales excepcionales"
              : "Tools and technologies I use to build exceptional digital experiences"}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/30 scale-[1.02]"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
            }`}
          >
            {isEs ? "Todas" : "All"}
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-md scale-[1.02]`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-3 md:gap-4">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`group relative transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="relative mb-1.5 sm:mb-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-gray-800/80 rounded-lg p-2 sm:p-2.5 md:p-3 flex items-center justify-center">
                    {React.cloneElement(skill.icon, {
                      className: `${
                        skill.name === "TypeScript"
                          ? "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                          : "w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7"
                      } ${skill.color} transition-transform duration-300 group-hover:scale-105`
                    })}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center font-medium text-gray-200 text-[11px] sm:text-xs md:text-sm group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </div>

            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-blue-400 mb-2">{getAllSkills().length}+</div>
            <p className="text-gray-400">{isEs ? "Tecnologías" : "Technologies"}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
            <p className="text-gray-400">{isEs ? "Años de Experiencia" : "Years of Experience"}</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
            <p className="text-gray-400">{isEs ? "Proyectos Completados" : "Completed Projects"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
