import {
  ExperienceAcademic,
  ExperienceJob,
  NavItems,
} from "@/utils/experience";

export const Resume = () => {
  return (
    // <!-- Start Resume Area -->
    <div
      className="rn-resume-area rn-section-gap section-separator"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              {/* <!-- <span className="subtitle"
            >Desarrollador con habilidades de colaboración y trabajo en equipo</span
          > --> */}
              <h2 className="title">Sobre mi</h2>
            </div>
          </div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
              {NavItems &&
                NavItems.map((item) => {
                  return (
                    <li className="nav-item">
                      <a
                        className={item.class}
                        id={item.id}
                        data-toggle={item.dataToggle}
                        href={item.href}
                        role={item.role}
                        aria-controls={item.ariaControls}
                        aria-selected={item.ariaSelected}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
            </ul>

            {/* <!-- Start Tab Content Wrapper  --> */}
            <div className="rn-nav-content tab-content" id="myTabContents">
              {/* <!-- Start Single Tab  --> */}
              <div
                className="tab-pane fade"
                id="education"
                role="tabpanel"
                aria-labelledby="education-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    {/* <!-- Start Skill List Area  --> */}
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="content">
                        <span className="subtitle">2018 - Presente</span>
                        <h4 className="maintitle">Formación académica</h4>
                        <div className="experience-list">
                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Full Stack Developer</h4>
                                  <span>Henry (Dic. 2022 - Abr. 2023)</span>
                                </div>
                              </div>
                              <p className="description">
                                Un programa intensivo de desarrollo web Full
                                Stack. Aprendí a utilizar herramientas y
                                tecnologías actuales como HTML, CSS, JavaScript,
                                React, Node.js, Express y PostgreSQL. Destaco su
                                enfoque en la colaboración y el trabajo en
                                equipo, lo que me permitió desarrollar
                                habilidades de liderazgo y comunicación.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}

                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Full Stack Web Developer</h4>
                                  <span>Platzi (Ene. 2022 - Presente)</span>
                                </div>
                              </div>
                              <p className="description">
                                La carrera de Full Stack Web Developer de Platzi
                                fue una experiencia enriquecedora para mí, ya
                                que me permitió adquirir habilidades de
                                programación y construir aplicaciones web
                                modernas desde cero. A través de un enfoque
                                práctico y colaborativo, aprendí a trabajar con
                                tecnologías como HTML, CSS, JavaScript, React,
                                Node.js, Express, MongoDB, Nest.js entre otras.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}

                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Ingenieria en Sistemas</h4>
                                  <span>
                                    UTN "Universidad Tecnológica Nacional" (2018
                                    - Pausado)
                                  </span>
                                </div>
                              </div>
                              <p className="description">
                                Estudié Ingeniería en Sistemas en la UTN durante
                                2 años y medio, donde aprendí habilidades en
                                programación, bases de datos, redes y sistemas
                                operativos. La UTN me brindó una educación
                                rigurosa y práctica, donde aprendí a resolver
                                problemas complejos y desarrollé habilidades de
                                pensamiento crítico. También tuve la oportunidad
                                de trabajar en equipo y colaborar en proyectos
                                desafiantes.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Skill List Area  --> */}

                    {/* <!-- Start Skill List Area 2nd  --> */}
                    <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                      <div className="content margin-bottom:1rem">
                        <span className="subtitle">ACA 1</span>
                        <h4 className="maintitle">ACA 2</h4>
                        <div className="experience-list">
                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>
                                    React: Desde los fundamentos hasta la
                                    maestría
                                  </h4>
                                  <span>Udemy (Ene. 2023 - Febr. 2023)</span>
                                </div>
                              </div>
                              <p className="description">
                                Curso completo de React que abarca desde los
                                conceptos básicos hasta el nivel avanzado.
                                Aprendí a construir aplicaciones web modernas
                                utilizando React y sus bibliotecas asociadas, lo
                                que me permitió mejorar mis habilidades en
                                programación y construir proyectos de alta
                                calidad.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}

                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>
                                    Node.js: Desde los conceptos básicos hasta
                                    la maestría
                                  </h4>
                                  <span>Udemy (Febr. 2023 - Mar. 2023)</span>
                                </div>
                              </div>
                              <p className="description">
                                Curso completo de Node.js que cubre desde los
                                fundamentos hasta el nivel avanzado. Aprendí a
                                construir aplicaciones web escalables y de alta
                                calidad utilizando Node.js y sus bibliotecas
                                asociadas, lo que me permitió mejorar mis
                                habilidades en programación y construir
                                proyectos robustos y eficientes.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}

                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>
                                    Nest.js: Desde los conceptos básicos hasta
                                    la maestría
                                  </h4>
                                  <span>Udemy (Mar. 2023 - Abr. 2023)</span>
                                </div>
                              </div>
                              <p className="description">
                                Durante el curso, adquirí habilidades avanzadas
                                en el desarrollo de aplicaciones web utilizando
                                el framework Nest.js, una herramienta moderna y
                                eficiente para la creación de servicios web
                                escalables y modulares. A través de un enfoque
                                práctico y colaborativo, aprendí a trabajar con
                                tecnologías como TypeScript, GraphQL, MongoDB,
                                entre otras.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Skill List Area  --> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Single Tab  --> */}

              {/* <!-- Start Single Tab  --> */}
              <div
                className="tab-pane fade "
                id="professional"
                role="tabpanel"
                aria-labelledby="professional-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row row--40">
                    {/* <!-- Start Single Progressbar  --> */}
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">
                            Habilidades de desarrollo
                          </h4>
                          {/* <!-- Start Single Progress Charts --> */}
                          {/* <!-- Start skiull area --> */}
                          <div className="rn-skill-area section-height">
                            <div className="inner slide">
                              <div className="skill-share-inner">
                                <ul className="skill-share d-flex liststyle">
                                  <li>
                                    <img
                                      src="/images/icons/react.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/redux.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/node.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/nest.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/typescript.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/postgresql.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/mongodb.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/sequelize.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/styledComponents.png"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/graphql.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/bash.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/git.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/github.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/docker.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/next.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/tailwind.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/astro.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/javascript.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/firebase.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/strapi.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End skiull area --> */}
                          {/* <!-- End Single Progress Charts --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Progressbar  --> */}

                    {/* <!-- Start Single Progressbar  --> */}
                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">Software / Herramientas</h4>
                          {/* <!-- Start Single Progress Charts --> */}
                          {/* <!-- Start skiull area --> */}
                          <div className="rn-skill-area section-height">
                            <div className="inner slide">
                              <div className="skill-share-inner">
                                <ul className="skill-share d-flex liststyle">
                                  <li>
                                    <img
                                      src="/images/icons/jira.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/figma.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/sketch.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/railway.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/render.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/ubuntu.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/atlassian.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/visualStudioCode.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/adobe.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/icons/vercel.svg"
                                      alt="Icons Images"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End skiull area --> */}
                          {/* <!-- End Single Progress Charts --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Progressbar  --> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Single Tab  --> */}

              {/* <!-- Start Single Tab  --> */}
              <div
                className="tab-pane fade show active single-tab-area"
                id="experience"
                role="tabpanel"
                aria-labelledby="experience-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    {/* <!-- Start Skill List Area  --> */}
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="content">
                        <span className="subtitle">2023 - Presente</span>
                        <h4 className="maintitle">Experiencia Laboral</h4>
                        <div className="experience-list">
                          {/* <!-- Start Single List  --> */}
                          {ExperienceJob &&
                            ExperienceJob.map((experience) => {
                              return (
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>{experience.title}</h4>
                                        <span>{experience.company}</span>
                                      </div>
                                    </div>
                                    <p className="description">
                                      {experience.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Skill List Area  --> */}

                    {/* <!-- Start Skill List Area 2nd  --> */}
                    <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                      <div className="content">
                        <span className="subtitle">2023 - Presente</span>
                        <h4 className="maintitle">Experiencia Academica</h4>
                        <div className="experience-list">
                          {ExperienceAcademic &&
                            ExperienceAcademic.map((experience) => {
                              return (
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>{experience.title}</h4>
                                        <span>{experience.company}</span>
                                      </div>
                                    </div>
                                    <p className="description">
                                      {experience.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Skill List Area 2nd --> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Single Tab  --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
