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

export interface Project {
  imageUrl: string;
  title: string;
  githubUrl: string;
  websiteUrl: string;
  technologies: string[];
  description: string;
}

export const projects: Project[] = [
  {
    imageUrl: "/eventloop.png",
    title: "Event Loop",
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
    description: "Plataforma de venta de entradas para eventos musicales"
  },
  {
    imageUrl: "/mushroom.png",
    title: "Mushroom Mdp",
    githubUrl: "https://github.com/JulianSantanatoglia/mushroommdp",
    websiteUrl: "https://mushroom-mdp.netlify.app/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
      "Firebase",
    ],
    description: "Alquiler de sonido y cabinas de dj para grabar sets"
  },
  {
    imageUrl: "/greenbank.png",
    title: "Green Bank",
    githubUrl: "https://github.com/JulianSantanatoglia/GreenBank",
    websiteUrl: "https://green-bank-liard.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
      "Firebase",
    ],
    description: "Aplicación bancaria moderna con interfaz intuitiva"
  },
  {
    imageUrl: "/planeandoando.png",
    title: "Planeandoando",
    githubUrl: "https://github.com/JulianSantanatoglia/planeandoando",
    websiteUrl: "https://planeandoando.netlify.app/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
      "Firebase",
    ],
    description: "Plataforma de planificación de viajes"
  },
  {
    imageUrl: "/billulla.png",
    title: "Billulla",
    githubUrl: "https://github.com/JulianSantanatoglia/billulla",
    websiteUrl: "https://billulla.netlify.app/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
      "Firebase",
    ],
    description: "Facilita el control financiero y la organización de documentos."
  },
  {
    imageUrl: "/arquitecturamoderna.png",
    title: "Arquitectura Moderna",
    githubUrl: "https://github.com/JulianSantanatoglia/arquitecturamoderna",
    websiteUrl: "https://arquitecturamoderna.vercel.app/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
    ],
    description: "Pagina web de arquitectura moderna con galeria de proyectos"
  },
  {
    imageUrl: "/jsport.png",
    title: "jsport",
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
    description: "E-commerce especializado en artículos deportivos"
  },
  {
    imageUrl: "/cafeteriaalmeria.png",
    title: "Cafeteria Almeria",
    githubUrl: "https://github.com/JulianSantanatoglia/cafeteriaalmeria",
    websiteUrl: "https://juliansantanatoglia.github.io/cafeteriaalmeria/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
    description: "Sitio web para cafetería con menú interactivo"
  },
  {
    imageUrl: "/escueladecocina.png",
    title: "Escuela de cocina",
    githubUrl: "https://github.com/JulianSantanatoglia/escueladecocina",
    websiteUrl: "https://juliansantanatoglia.github.io/escueladecocina/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
    description: "Plataforma educativa para cursos de cocina"
  },
  {
    imageUrl: "/deliveryapp.png",
    title: "Delivery App",
    githubUrl: "https://github.com/JulianSantanatoglia/deliveryapp",
    websiteUrl: "https://juliansantanatoglia.github.io/deliveryapp/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
    description: "Aplicación de delivery de comida"
  },
  {
    imageUrl: "/joyeriadiaz.png",
    title: "Joyeria Diaz",
    githubUrl: "https://joyeriadiaz.shop/",
    websiteUrl: "https://joyeriadiaz.shop/",
    technologies: ["Wordpress", "WooCommerce", "Blocksy"],
    description: "E-commerce de joyería"
  },
  {
    imageUrl: "/guitarla.png",
    title: "Guitar LA",
    githubUrl: "https://github.com/JulianSantanatoglia/ecommerce_guitar",
    websiteUrl: "https://ecommerce-guitar-psi.vercel.app/",
    technologies: ["HTML", "CSS", "SASS", "Javascript", "React"],
    description: "Tienda online especializada en instrumentos musicales"
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "About me",
    icon: <User size={25} color="#fff" strokeWidth={1} />,
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
    title: "Certifications",
    icon: <Book size={25} color="#fff" strokeWidth={1} />,
    link: "#certifications",
  },
  {
    id: 5,
    title: "GalleryVerticalEnd",
    icon: <GalleryVerticalEnd size={25} color="#fff" strokeWidth={1} />,
    link: "#portfolio",
  },
  {
    id: 6,
    title: "Contact",
    icon: <Contact size={25} color="#fff" strokeWidth={1} />,
    link: "#contact",
  },
];

export const itemsTimeline = [
  {
    title: "Full-stack Developer",
    company: "Mushroom Mdp",
    date: "Feb 2025 - Actualidad",
    description:
      "En Mushroom-MDP, plataforma de alquiler de equipos y cabinas de DJ, soy responsable del desarrollo fullstack completo. Utilizo React.js con hooks y Context API, estilando con Tailwind CSS e integrando Firebase para autenticación y base de datos en tiempo real. He implementado un sistema de reservas con FullCalendar, animaciones con Framer Motion, formularios interactivos y optimización SEO. También desarrollé la gestión de reservas de cabinas con diferentes equipamientos, un panel de administración, integración multimedia y un sistema de contacto, todo optimizado para móvil y desktop",
  },
  {
    title: "Frontend Developer",
    company: "EventLoop",
    date: "Abril 2024 - Actualidad",
    description:
      "Contribuyo en el Frontend de EventLoop, una plataforma de venta de entradas para eventos musicales, mis tareas son implementación y optimización de estilos con CSS, Sass y Tailwind, desarrollo de funcionalidades interactivas con JavaScript y Angular, y gestión de versiones con GitHub.",
  },
  {
    title: "Desarrollador / Diseñador Web",
    company: "Freelance",
    date: "Marzo 2023 - Actualidad",
    description:
      "He desarrollado plataformas completas, incluyendo ecommerce, web de reservas, blogs, cartas para cafes, app de control de gastos, planificador de viajes, plataforma de cursos, y más. También, he colaborado eficazmente en proyectos existentes, aportando mi experiencia en diseño UI/UX para optimizar la experiencia del usuario y garantizar la adaptabilidad a distintos dispositivos. ",
  },
  {
    title: "Carrera de Desarrollo Web Frontend",
    company: "Coderhouse",
    date: "Marzo 2023",
    description:
      "Conceptos de Desarrollo Web como HTML, CSS Box Modeling y Flexbox, Grids, Pseudoclases, Bootstrap, Git y GitHub, SASS, Animaciones CSS, SEO y servidores, K&C." +
      " Luego en Javascript: Control de ciclos, funciones, arrays, objetos, funciones del orden superior, DOM y eventos, Asincronismo y peticiones, After DOM, promesas y librerías." +
      " Por ultimo en React: JSX, transpiling y componentes, promises, asincronía y MAP, consumiendo APIs, Hooks, children y patrones, Routing, navegación y eventos, Context y técnicas de rendering y Firebase.",
  },
  {
    title: "Tecnico en informatica profesional y personal",
    company: "Técnica 3 Necochea (ARG)",  
    date: "Diciembre 2012",
    description:
      "Escuela de nivel secundario graduado en Tecnico en informatica profesional y personal, con conocimientos en hardware, software, redes, sistemas operativos, seguridad informática, y soporte técnico.",
  },
];

export interface Certification {
  imageUrl: string;
  title: string;
  company: string;
  date: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    imageUrl: "/certs/web-coder.png",
    title: "Desarrollo Web",
    company: "Coderhouse",
    date: "Febrero 2024",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/js-coder.png",
    title: "JavaScript",
    company: "Coderhouse",
    date: "Mayo 2024",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/react-coder.png",
    title: "React JS",
    company: "Coderhouse",
    date: "Agosto 2024",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/css-udemy.png",
    title: "CSS La guía Completa",
    company: "Udemy",
    date: "Octubre 2023",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/test-udemy.png",
    title: "Software Testing Masterclass",
    company: "Udemy",
    date: "Enero 2023",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/excel.png",
    title: "Excel Avanzado",
    company: "Aibe",
    date: "Julio 2023",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/ilustrator.png",
    title: "Adobe Ilustrator",
    company: "Domestika",
    date: "Agosto 2021",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/photoshop.png",
    title: "Adobe Photoshop",
    company: "Domestika",
    date: "Julio 2020",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/aftereffect-domestika.png",
    title: "Adobe After Effects",
    company: "Domestika",
    date: "Octubre 2021",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/cinema4d-domestika.png",
    title: "Cinema 4D",
    company: "Domestika",
    date: "Febrero 2021",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/sketchup.png",
    title: "SketchUp",
    company: "Domestika",
    date: "Octubre 2021",
    credentialUrl: "#"
  },
  {
    imageUrl: "/certs/motion-gra.png",
    title: "Motion Graphics",
    company: "Domestika",
    date: "Octubre 2021",
    credentialUrl: "#"
  },
];
