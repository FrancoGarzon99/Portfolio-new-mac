import {Application, IconsContact} from "./types";
import finderIcon from "./assets/icons/finder.png";
import vscodeIcon from "./assets/icons/vscode.png";
import chromeIcon from "./assets/icons/chrome.png";
import archiverIcon from "./assets/icons/archiver.png";
import htmlIcon from "./assets/icons/html-editor.png";
import contactIcon from "./assets/icons/contact.png";
import FinderApp from "./apps/Finder";
import ChromeApp from "./apps/Chrome";
import ReadmeApp from "./apps/Readme";
import VsCodeApp from "./apps/VsCode";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import GithubIcon from "./Icons/GithubIcon";
import GmailIcon from "./Icons/GmailIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";

export const APPS: Application[] = [
  {
    id: "sobremi",
    icon: contactIcon,
    component: VsCodeApp,
    name: "Sobre Mí",
    description: "Te cuento un poco sobre mí",
    actions: [],
  },
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
    icon: archiverIcon,
    name: "Educación",
    label: "",
    description: "Los aprendido este ultimo tiempo",
    actions: [],
  },
  {
    id: "experiencia",
    component: ReadmeApp,
    icon: htmlIcon,
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
    description: "¿Quieres contactarme?",
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

export const IconstContact: IconsContact[] = [
  {
    id: "github",
    iconComponent: GithubIcon,
    link: "https://github.com/FrancoGarzon99",
    isExternal: true,
  },
  {
    id: "facebook",
    iconComponent: FacebookIcon,
    link: "",
    isExternal: true,
  },
  {
    id: "linkeind",
    iconComponent: LinkedinIcon,
    link: "https://www.linkedin.com/in/franco-garz%C3%B3n99/",
    isExternal: true,
  },
  {
    id: "instagram",
    iconComponent: InstagramIcon,
    link: "",
    isExternal: true,
  },
  {
    id: "gmail",
    iconComponent: GmailIcon,
    link: "mailto:francogarzon99@gmail.com",
    isExternal: true,
  },
];
