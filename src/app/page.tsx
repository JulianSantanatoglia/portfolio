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
      <main>
      <CoverParticles />
        <TransitionPage />
        <Navbar />
        {/* INTRODUCTION */}
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover bg-gray-900">
          <Introduction />
          </div>
          {/* SKILLS */}
          <Skills />
          {/* PORTFOLIO */}
          <h2 id="portfolio" className="text-2xl pt-20 font-semibold tracking-tight uppercase text-gray-100 text-center">
          Portfolio
          </h2>
          <p className="text-lg text-gray-400 text-center">
          Algunos de mis proyectos
          </p>
          <div className="bg-gray-900 flex gap-25 w-full max-w-6xl px-4 pb-40 mx-auto mt-10 md:pb-0 md:px-6">
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
          <Footer />
      </main>
    </>
  );
}