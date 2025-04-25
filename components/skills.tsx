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
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiCanva,
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import React from "react";
import { LayoutDashboard, PencilRuler } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="h-6 w-6 text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="h-6 w-6 text-blue-500" /> },
    { name: "SASS", icon: <FaSass className="h-6 w-6 text-pink-400" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-6 w-6 text-cyan-400" />,
    },
    {
      name: "Javascript",
      icon: <FaJsSquare className="h-6 w-6 text-yellow-500" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="h-6 w-6 text-blue-700" />,
    },
    { name: "React", icon: <FaReact className="h-6 w-6 text-blue-300" /> },
    { name: "Angular", icon: <FaAngular className="h-6 w-6 text-red-600" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-6 w-6 text-gray-800" />,
    },
    { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-gray-400" /> },
    { name: "GitHub", icon: <FaGithub className="h-6 w-6 text-gray-600" /> },
    { name: "MySQL", icon: <FaDatabase className="h-6 w-6 text-blue-800" /> },
    {
      name: "Microsoft Excel",
      icon: <RiFileExcel2Fill className="h-6 w-6 text-green-600" />,
    },
    {
      name: "Wordpress",
      icon: <FaWordpress className="h-6 w-6 text-blue-400" />,
    },
    { name: "Figma", icon: <FaFigma className="h-6 w-6 text-pink-500" /> },
    { name: "Canva", icon: <SiCanva className="h-6 w-6 text-blue-600" /> },
    {
      name: "Ilustrator",
      icon: <LayoutDashboard className="h-6 w-6 text-blue-400" />,
    },
    {
      name: "Photoshop",
      icon: <PencilRuler className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <div id="skills-section" className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight uppercase text-gray-100 mb-4">
            Tecnologías
          </h2>
          <p className="text-lg text-gray-400">
            Herramientas con las que trabajo
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="group relative flex flex-col items-center"
              >
                <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  {React.cloneElement(skill.icon, { className: "h-8 w-8 transition-transform duration-300 group-hover:scale-110" })}
                </div>
                <span className="mt-4 text-sm text-center font-medium text-gray-400 group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
