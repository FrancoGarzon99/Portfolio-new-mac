import {Application, IconsContact} from "./types";
import finderIcon from "./assets/icons/finder.png";
import vscodeIcon from "./assets/icons/vscode.png";
import archiverIcon from "./assets/icons/archiver.png";
import htmlIcon from "./assets/icons/html-editor.png";
import contactIcon from "./assets/icons/contact.png";
import Contact from "./apps/Contact";
import Experience from "./apps/Chrome";
import Education from "./apps/Education";
import Abilities from "./apps/Abilities";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import GithubIcon from "./Icons/GithubIcon";
import GmailIcon from "./Icons/GmailIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import About from "./apps/About";

export const APPS: Application[] = [
  {
    id: "sobremi",
    icon: contactIcon,
    component: About,
    name: "Sobre Mí",
    description: "Te cuento un poco sobre mí",
    actions: [],
  },
  {
    id: "habilidades",
    icon: vscodeIcon,
    component: Abilities,
    name: "Habilidades",
    description: "Lenguajes que se utilizar",
    actions: [],
  },
  {
    id: "experiencia",
    icon: htmlIcon,
    component: Experience,
    name: "Experiencia",
    label: "",
    description: "Mi experiencia en algunos de mis actuales trabajos",
    actions: [],
  },
  {
    id: "educacion",
    component: Education,
    icon: archiverIcon,
    name: "Educación",
    label: "",
    description: "Los aprendido este ultimo tiempo",
    actions: [],
  },
  {
    id: "contactame",
    icon: finderIcon,
    name: "Contactame",
    component: Contact,
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
        name: "LinkedIn",
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
