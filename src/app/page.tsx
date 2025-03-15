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
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover bg-gray-900">
          <Introduction />
          <Navbar />
          </div>
          {/* SKILLS */}
          <Skills />
          <CoverParticles />
          {/* PORTFOLIO */}
          <div id="portfolio" className="bg-gray-900 flex gap-25 w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6">
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