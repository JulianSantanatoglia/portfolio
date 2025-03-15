"use client";

import React from 'react';
import { Wind, GitBranch, Github, Figma, Code, FileCode, LayoutDashboard, Database, Image, PencilRuler, Paintbrush, Square } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <Code className="h-6 w-6 text-orange-500" /> },
        { name: 'CSS3', icon: <FileCode className="h-6 w-6 text-blue-500" /> },
        { name: 'SASS', icon: <FileCode className="h-6 w-6 text-pink-400" /> }, 
        { name: 'React', icon: <Code className="h-6 w-6 text-blue-300" /> },
        { name: 'Angular', icon: <Code className="h-6 w-6 text-red-600" /> },
        { name: 'Bootstrap', icon: <LayoutDashboard className="h-6 w-6 text-purple-600" /> },
        { name: 'Tailwind CSS', icon: <Wind className="h-6 w-6 text-cyan-400" /> },
        { name: 'Javascript', icon: <Code className="h-6 w-6 text-yellow-500" /> },
        { name: 'Typescript', icon: <FileCode className="h-6 w-6 text-blue-700" /> },
        { name: 'Next.js', icon: <Code className="h-6 w-6 text-gray-800" /> },
        { name: 'Git', icon: <GitBranch className="h-6 w-6 text-gray-400" /> },
        { name: 'GitHub', icon: <Github className="h-6 w-6 text-gray-600" /> },
        { name: 'MySQL', icon: <Database className="h-6 w-6 text-blue-800" /> },
        { name: 'Microsoft Excel', icon: <Square className="h-6 w-6 text-green-600" /> },
        { name: 'Wordpress', icon: <LayoutDashboard className="h-6 w-6 text-blue-400" /> },
        { name: 'Photoshop', icon: <Image className="h-6 w-6 text-blue-500" /> },
        { name: 'Illustrator', icon: <PencilRuler className="h-6 w-6 text-orange-600" /> },
        { name: 'Figma', icon: <Figma className="h-6 w-6 text-pink-500" /> },
        { name: 'Canva', icon: <Paintbrush className="h-6 w-6 text-blue-600" /> },
    ];

    return (
        <div id="skills-section" className="bg-gray-900 text-gray-300 py-16 my-12"> {/* Añadimos py-16 y my-12 */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold tracking-tight uppercase text-gray-100 mb-4">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-400">
                        Tecnologías con las que trabajo
                    </p>
                </div>

                <div className="mt-12">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"> {/* Cambiamos a grid */}
                        {skills.map((skill, index) => (
                            <li key={index} className="flex flex-col items-center">
                                <div className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                                    {React.cloneElement(skill.icon, { className: "h-8 w-8" })} {/* Aumentamos el tamaño de los iconos */}
                                </div>
                                <span className="mt-2 text-sm text-center">{skill.name}</span> {/* Centramos el texto */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;