import type { AriaRole } from "react";

export interface IExperience {
  title: string;
  company: string;
  description: string;
}

export interface INavItems {
  class: string;
  id: string;
  dataToggle: string;
  href: string;
  role: AriaRole;
  ariaControls: string;
  ariaSelected: boolean;
  title: string;
}

export const NavItems: INavItems[] = [
  {
    class: "nav-link active",
    id: "experience-tab",
    dataToggle: "tab",
    href: "#experience",
    role: "tab",
    ariaControls: "experience",
    ariaSelected: true,
    title: "Experiencia",
  },
  {
    class: "nav-link",
    id: "professional-tab",
    dataToggle: "tab",
    href: "#professional",
    role: "tab",
    ariaControls: "professional",
    ariaSelected: false,
    title: "Mis Skills",
  },
  {
    class: "nav-link",
    id: "education-tab",
    dataToggle: "tab",
    href: "#education",
    role: "tab",
    ariaControls: "education",
    ariaSelected: false,
    title: "Educación",
  },
];

export const ExperienceJob: IExperience[] = [
  // {
  //   title: "Fer Palacios",
  //   company: "Carpincho (Ene. 2023 - Abr. 2023)",
  //   description: "Trabaje en el frontend y backend",
  // }
];

export const ExperienceAcademic: IExperience[] = [
  {
    title: "Fundación Animal",
    company: "Henry (Ene. 2023 - Abr. 2023)",
    description:
      "Recientemente acompañe a liderar un equipo de 7 personas en un proyecto con el objetivo de crear una aplicación que será donada a una fundación benéfica. Implementamos la metodología Scrum, planificando nuestros objetivos y tareas prioritarias en el Product Backlog. La página cuenta con las siguientes funcionalidades: Filtros combinados, local Storage, rutas privadas, CRUD completo, Auth de terceros integrado (google), Pasarela de pagos, notificaciones por mail y borrado lógico.",
  },
  {
    title: "The Dogs",
    company: "Henry (Ene. 2023 - Abr. 2023)",
    description:
      "Recientemente acompañe a liderar un equipo de 7 personas en un proyecto con el objetivo de crear una aplicación que será donada a una fundación benéfica. Implementamos la metodología Scrum, planificando nuestros objetivos y tareas prioritarias en el Product Backlog. La página cuenta con las siguientes funcionalidades: Filtros combinados, local Storage, rutas privadas, CRUD completo, Auth de terceros integrado (google), Pasarela de pagos, notificaciones por mail y borrado lógico.",
  },
];
