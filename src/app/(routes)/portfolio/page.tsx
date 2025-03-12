import ContainerPage from "../../../../components/container";
import CoverParticles from "../../../../components/cover-particles";
import ProjectCard from "../../../../components/ProjectCard";
import TransitionPage from "../../../../components/transition-page";
import { projects } from "../../../../data";

const Portfolio = () => {
    return (
    <>
    <main>
        <TransitionPage />
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <ContainerPage>
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
        </ContainerPage>
        </div>
    </main>
    </>
);
};
export default Portfolio;
