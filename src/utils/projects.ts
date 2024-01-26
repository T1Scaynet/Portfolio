export interface IProjects {
  dataTarget?: string;
  src?: string;
  alt?: string;
  tecnology?: string;
  title?: string;
  video?: string;
  description?: string;
  repository?: string;
  deployment?: string;
}

export const ProjectsItems: IProjects[] = [
  {
    dataTarget: "#FundacionAnimal",
    src: "/images/portfolio/Preview - Fundacion Animal.png",
    alt: "Fundacion Animal",
    tecnology: "MERN (MongoDB - Express - React - Node)",
    title: "Fundación Animal",
    video: "/images/portfolio/Preview - Fundacion Animal.webm",
    description:
      "Este proyecto tiene una doble misión: ser donado a una beneficiencia y ser autosustentable. Construido en MERN stack, ofrece la mejor experiencia posible para los usuarios con características útiles como un dashboard para administradores y moderadores, filtros y un buscador para encontrar mascotas, y una página de contacto con la fundación.",
    repository: "https://github.com/T1Scaynet/FE-Shelter",
    deployment: "https://fe-shelter.vercel.app/"
  },
];
