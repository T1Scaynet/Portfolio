import type { IProjects } from "@/utils/projects";

export const ModalProjects = ({
  dataTarget,
  video,
  tecnology,
  title,
  description,
  repository,
  deployment,
}: IProjects) => {
  const modalId = dataTarget.substring(1);
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i data-feather="x"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio-popup-thumbnail">
                  <div className="image">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={video}
                      className="w-100"
                    ></video>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="text-content">
                  <h3>
                    <span>{tecnology}</span>
                    {title}
                  </h3>
                  <p className="mb--30">{description}</p>
                  <div className="button-group mt--20">
                    <a
                      href={repository}
                      target="_blank"
                      className="rn-btn thumbs-icon"
                    >
                      <span>Código Fuente</span>
                      <i data-feather="github"></i>
                    </a>
                    <a href={deployment} target="_blank" className="rn-btn">
                      <span>Ejecutar Aplicación</span>
                      <i data-feather="chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
