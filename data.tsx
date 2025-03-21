import {
  GalleryVerticalEnd,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Mail,
  Github,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  User,
  Contact,
  Workflow,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jsantanatoglia/",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/JulianSantanatoglia",
  },
  {
    id: 3,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "mailto:juliansantanatoglia@gmail.com",
  },
];
// ########################################################
export interface Project {
  imageUrl: string;
  title: string;
  githubUrl: string;
  websiteUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    imageUrl: "eventloop.png",
    title: "EVENT LOOP",
    githubUrl: "#",
    websiteUrl: "https://eventloop.club/",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    imageUrl: "jsport.png",
    title: "JSPORT",
    githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    websiteUrl: "https://jstore-three.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
      "Firebase",
    ],
  },
  {
    imageUrl: "cafeteriaalmeria.png",
    title: "CAFETERIA ALMERIA",
    githubUrl: "https://github.com/JulianSantanatoglia/cafeteriaalmeria",
    websiteUrl: "https://juliansantanatoglia.github.io/cafeteriaalmeria/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
  },
  {
    imageUrl: "escueladecocina.png",
    title: "ESCUELA DE COCINA",
    githubUrl: "https://github.com/JulianSantanatoglia/escueladecocina",
    websiteUrl: "https://juliansantanatoglia.github.io/escueladecocina/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
  },
  {
    imageUrl: "deliveryapp.png",
    title: "DELIVERY APP",
    githubUrl: "https://github.com/JulianSantanatoglia/deliveryapp",
    websiteUrl: "https://juliansantanatoglia.github.io/deliveryapp/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
  },
  {
    imageUrl: "greenbank.png",
    title: "GREEN BANK",
    githubUrl: "https://github.com/JulianSantanatoglia/GreenBank",
    websiteUrl: "https://juliansantanatoglia.github.io/GreenBank/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
    ],
  },
  {
    imageUrl: "joyeriadiaz.png",
    title: "JOYERIA DIAZ",
    githubUrl: "https://joyeriadiaz.shop/",
    websiteUrl: "https://joyeriadiaz.shop/",
    technologies: ["Wordpress", "WooCommerce", "Blocksy"],
  },
  {
    imageUrl: "guitarla.png",
    title: "GUITAR LA",
    githubUrl: "https://github.com/JulianSantanatoglia/ecommerce_guitar",
    websiteUrl: "https://ecommerce-guitar-psi.vercel.app/",
    technologies: ["HTML", "CSS", "SASS", "Javascript", "React"],
  },
  {
    imageUrl: "arquitecturamoderna.png",
    title: "ARQUITECTURA MODERNA",
    githubUrl: "https://github.com/JulianSantanatoglia/arquitecturamoderna",
    websiteUrl: "https://arquitecturamoderna.vercel.app/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
  },
];
// ##########################################################
export const itemsNavbar = [
  {
    id: 1,
    title: "About me",
    icon: <User size={25} color="#fff" strokeWidth={1} />, // Icono de persona (User)
    link: "#introduction",
  },
  {
    id: 2,
    title: "Skills",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "#skills-section",
  },
  {
    id: 3,
    title: "Experience",
    icon: <Workflow size={25} color="#fff" strokeWidth={1} />,
    link: "#experience",
  },
  {
    id: 4,
    title: "GalleryVerticalEnd",
    icon: <GalleryVerticalEnd size={25} color="#fff" strokeWidth={1} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Contact",
    icon: <Contact size={25} color="#fff" strokeWidth={1} />, // Icono de email (Mail)
    link: "#contact",
  },
];

export const itemsTimeline = [
  {
    title: "Frontend Developer - EventLoop",
    date: "Octubre 2024 - Actualidad",
    description:
      "Contribuyo en el Frontend de EventLoop, una plataforma de venta de entradas para eventos musicales, mis tareas son implementación y optimización de estilos con CSS, Sass y Tailwind, desarrollo de funcionalidades interactivas con JavaScript y Angular, y gestión de versiones con Git.",
  },
  {
    title: "Desarrollador Wordpress - Joyería Diaz",
    date: "Marzo 2024 - Actualidad",
    description:
      "Diseñé y desarrolle un ecommerce para una joyeria utilizando WordPress, Astra, Blocksy y WooCommerce. Configuración completa de hosting, dominio y certificado SSL. Implementación de plataformas de pago, gestión de envíos y devoluciones. Redacción de textos persuasivos (copywriting) enfocados en la conversión. Integración de chat en vivo para soporte al cliente. Configuración de herramientas analíticas como Google Analytics y Google Maps para rastrear el tráfico web y la ubicación del negocio. Creación de logotipos, banners y edición de fotos de productos.",
  },
  {
    title: "Carrera de Desarrollo Web Frontend",
    date: "Marzo 2023",
    description:
      "En la parte de Desarrollo Web vi HTML, CSS Box Modeling y Flexbox, Grids, Pseudoclases, Bootstrap, Git y GitHub, SASS, Animaciones CSS, SEO y servidores, K&C." +
      " Luego en Javascript: Control de ciclos, funciones, arrays, objetos, funciones del orden superior, DOM y eventos, Asincronismo y peticiones, After DOM, promesas y librerías" +
      " y por ultimo en React: JSX, transpiling y componentes, promises, asincronía y MAP, consumiendo APIs, Hooks, children y patrones, Routing, navegación y eventos, Context y técnicas de rendering y Firebase",
  },
  {
    title: "RT & Embajador de Google - Orange",
    date: "Agosto 2021 - Actualidad",
    description:
      "Asesor comercial, control de objetivos y KPIs de tienda, logística, formación al nuevo personal sobre distintos software de tramitación y gestión de la tienda. Informar a los clientes sobre las nuevas funciones de las aplicaciones de Google y las actualizaciones del sistema operativo Android",
  },
];
