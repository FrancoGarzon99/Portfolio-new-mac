import {Application} from "./types";
import txtIcon from "./assets/icons/txt.png";
import finderIcon from "./assets/icons/finder.png";
import vscodeIcon from "./assets/icons/vscode.png";
import chromeIcon from "./assets/icons/chrome.png";
import FinderApp from "./apps/Finder";
import ChromeApp from "./apps/Chrome";
import ReadmeApp from "./apps/Readme";
import VsCodeApp from "./apps/VsCode";

export const APPS: Application[] = [
  {
    id: "habilidades",
    icon: vscodeIcon,
    component: VsCodeApp,
    name: "Habilidades",
    description: "Lenguajes que se utilizar",
    actions: [],
  },
  {
    id: "proyectos",
    icon: chromeIcon,
    component: ChromeApp,
    name: "Proyectos",
    label: "",
    description: "Algunos de mis actuales trabajos",
    actions: [],
  },
  {
    id: "educacion",
    component: ReadmeApp,
    icon: txtIcon,
    name: "Educación",
    label: "",
    description: "Los aprendido este ultimo tiempo",
    actions: [],
  },
  {
    id: "experiencia",
    component: ReadmeApp,
    icon: txtIcon,
    name: "Experiencia",
    label: "",
    description: " Mi experiencia en proyectos como Front-end Jr",
    actions: [],
  },
  {
    id: "contactame",
    icon: finderIcon,
    name: "Contactame",
    component: FinderApp,
    description : "¿Quieres contactarme?",
    actions: [
      {
        name: "Phone",
        link: "tel:5491123873143",
        isExternal: true,
      },
      {
        name: "Email",
        link: "mailto:francogarzon99@gmail.com",
        isExternal: true,
      },
      {
        name: "LinkedIN",
        link: "https://www.linkedin.com/in/franco-garz%C3%B3n99/",
        isExternal: true,
      },
      {
        name: "Github",
        link: "https://github.com/FrancoGarzon99",
        isExternal: true,
      },
    ],
  },
];
