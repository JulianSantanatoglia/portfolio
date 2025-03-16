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
    { name: "Bootstrap", icon: <FaBootstrap className="h-6 w-6 text-purple-600" /> },
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
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-gray-800" /> },
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
    <div
      id="skills-section"
      className="bg-gray-900 text-gray-300 py-16 md:py-20 my-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight uppercase text-gray-100 mb-2">
            Tecnologías
          </h2>
          <p className="text-lg text-gray-400">Herramientas con las que trabajo</p>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110" // Added hover:scale-110
              >
                <div className="p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                  {React.cloneElement(skill.icon, { className: "h-10 w-10" })}
                </div>
                <span className="mt-3 text-sm text-center">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;