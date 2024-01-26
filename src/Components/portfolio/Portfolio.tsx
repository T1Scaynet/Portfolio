import { ProjectsItems } from "@/utils/projects";
import { ModalProjects } from "./ModalProjects";
import { Projects } from "./Projects";

export const Portfolio = () => {
  return (
    // Start Portfolio Area
    <div
      className="rn-portfolio-area rn-section-gap section-separator"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">Conoce mi experiencia</span>
              <h2 className="title">Mi Portafolio</h2>
            </div>
          </div>
        </div>

        <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
          {ProjectsItems &&
            ProjectsItems.map((project) => {
              return (
                <>
                  <Projects
                    dataTarget={project.dataTarget}
                    src={project.src}
                    alt={project.alt}
                    tecnology={project.tecnology}
                    title={project.title}
                  />
                  <ModalProjects
                    dataTarget={project.dataTarget}
                    video={project.video}
                    tecnology={project.tecnology}
                    title={project.title}
                    description={project.description}
                    repository={project.repository}
                    deployment={project.deployment}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
