import ContainerPage from "../../../../components/container";
import ProjectCard from "../../../../components/ProjectCard";
import TransitionPage from "../../../../components/transition-page";

const PageAboutMe = () => {
  return (
    <>
    <TransitionPage />
      <ContainerPage>
        <ProjectCard
          imageUrl="jsport.png"
          title="Jsport"
          githubUrl="https://github.com/JulianSantanatoglia/jsport"
          websiteUrl="https://jstore-three.vercel.app/"
          technologies={["React", "TypeScript", "Tailwind CSS"]}
        />

        <ProjectCard
          imageUrl="jsport.png"
          title="Jsport"
          githubUrl="https://github.com/JulianSantanatoglia/jsport"
          websiteUrl="https://jstore-three.vercel.app/"
          technologies={["React", "TypeScript", "Tailwind CSS"]}
        />

        <ProjectCard
          imageUrl="jsport.png"
          title="Jsport"
          githubUrl="https://github.com/JulianSantanatoglia/jsport"
          websiteUrl="https://jstore-three.vercel.app/"
          technologies={["React", "TypeScript", "Tailwind CSS"]}
        />
      </ContainerPage>
     </>
  );
};

export default PageAboutMe;
