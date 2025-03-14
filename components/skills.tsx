"use client";

import React from 'react';
import { Wind, GitBranch, Github, Figma } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'Tailwind CSS', icon: <Wind className="h-6 w-6 text-cyan-400" /> },
        { name: 'Git', icon: <GitBranch className="h-6 w-6 text-gray-400" /> },
        { name: 'GitHub', icon: <Github className="h-6 w-6 text-gray-600" /> },
        { name: 'Figma', icon: <Figma className="h-6 w-6 text-pink-500" /> },
    ];
    // 

    return (
        <div className="bg-gray-900 text-gray-300"> {/* Dark background for futuristic feel */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold tracking-tight uppercase text-gray-100 mb-4">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-400">
                        Technologies I work with.
                    </p>
                </div>

                <div className="mt-12 flex justify-center">
                    <ul className="flex space-x-8">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex flex-col items-center">
                                <div className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                                    {skill.icon}
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;