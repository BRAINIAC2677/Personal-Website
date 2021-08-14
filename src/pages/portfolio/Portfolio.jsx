import ProjectCard from "./ProjectCard";
import PageTitle from "../../global-components/PageTitle";
import projectsData from "./projectsData";

function Portfolio() {
  const projectCards = projectsData.map((project, index) => {
    return <ProjectCard key={index} data={project}></ProjectCard>;
  });

  return (
    <div id="portfolio" className="h-auto w-screen p-12 bg-gray-200">
      <PageTitle title="Portfolio"></PageTitle>
      <div className="flex flex-wrap justify-around">{projectCards}</div>
    </div>
  );
}

export default Portfolio;
