"use client";

import Contact from "../../components/contact";
import CoverParticles from "../../components/cover-particles";
import Footer from "../../components/footer";
import Introduction from "../../components/introduction";
import Navbar from "../../components/navbar";
import ProjectCard from "../../components/ProjectCard";
import Skills from "../../components/skills";
import TransitionPage from "../../components/transition-page";
import { projects } from "../../data";

export default function Home() {
  return (
    <>
      <CoverParticles />
      <main>
        <TransitionPage />
        <Navbar />
        <div className="flex min-h-screen bg-no-repeat bg-gradient-cover bg-gray-900 overflow-x-hidden">
          <Introduction />
        </div>
        <Skills />
        <div id="portfolio" className="text-center mb-10 pt-10">
          <h2 className="text-3xl font-semibold tracking-tight uppercase text-gray-100 mb-2">
            Trabajos
          </h2>
          <p className="text-lg text-gray-400">Proyectos y colaboraciones</p>
        </div>
        <div className="bg-gray-900 w-full max-w-6xl px-4 pb-20 md:pb-20 mx-auto mt-10 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                githubUrl={project.githubUrl}
                websiteUrl={project.websiteUrl}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
