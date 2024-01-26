import type { IProjects } from "@/utils/projects";

export const Projects = ({
  dataTarget,
  src,
  alt,
  tecnology,
  title,
}: IProjects) => {
  return (
    
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
        className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
      >
        <div
          className="rn-portfolio"
          data-toggle="modal"
          data-target={dataTarget}
        >
          <div className="inner">
            <div className="thumbnail">
              <a href="javascript:void(0)">
                <img src={src} alt={alt} />
              </a>
            </div>
            <div className="content">
              <div className="category-info">
                <div className="category-list">
                  <a href="javascript:void(0)">{tecnology}</a>
                </div>
              </div>
              <h4 className="title">
                <a href="javascript:void(0)">
                  {title}
                  <i className="feather-arrow-up-right"></i>
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
  );
};
