"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaAngular,
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

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "Angular", icon: <FaAngular />, color: "text-red-600" },
        { name: "SASS", icon: <FaSass />, color: "text-pink-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
      ],
    },
    backend: {
      title: "Backend & Tools",
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
      title: "Design & Creative",
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
    <div id="skills-section" className="relative bg-gray-900 text-gray-300 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear experiencias digitales excepcionales
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
            }`}
          >
            Todas
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`group relative transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative mb-2 sm:mb-3 md:mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gray-800/80 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex items-center justify-center">
                    {React.cloneElement(skill.icon, {
                      className: `w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`
                    })}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center font-semibold text-gray-200 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base group-hover:text-white transition-colors">
                  {skill.name}
                </h3>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-blue-400 mb-2">{getAllSkills().length}+</div>
            <p className="text-gray-400">Tecnologías</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
            <p className="text-gray-400">Años de Experiencia</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-pink-400 mb-2">12+</div>
            <p className="text-gray-400">Proyectos Completados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
