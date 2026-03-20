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
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    description: "Plataforma de venta de entradas para eventos musicales"
  },
  {
    imageUrl: "/jsagency.png",
    title: "JS Agency",
    githubUrl: "https://github.com/JulianSantanatoglia/jsagency",
    websiteUrl: "https://jsagency.es",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React",
      "TypeScript",
      "PHP",
    ],
    description: "Sitio web corporativo de agencia digital"
  },
  {
    imageUrl: "/mushroom.png",
    title: "Mushroom Mdp",
    githubUrl: "https://github.com/JulianSantanatoglia/mushroommdp",
    websiteUrl: "https://mushroommdp.com",
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
    imageUrl: "/comunidad-argentina.png",
    title: "Comunidad Argentina Almeria",
    githubUrl: "#",
    websiteUrl: "https://www.comunidadargentinaalmeria.es/",
    technologies: ["HTML", "CSS", "Javascript", "React", "TypeScript"],
    description: "Sitio institucional para la comunidad argentina en Almería"
  },
  {
    imageUrl: "/micaeladiaz.png",
    title: "Micaela Diaz",
    githubUrl: "#",
    websiteUrl: "https://micaeladiazph.vercel.app/",
    technologies: ["HTML", "CSS", "Javascript", "React", "TypeScript"],
    description: "Portfolio profesional para fotógrafa en Almería"
  },
  {
    imageUrl: "/asantanatoglia.png",
    title: "Alejandro Santanatoglia",
    githubUrl: "#",
    websiteUrl: "https://asantanatoglia.vercel.app/",
    technologies: ["HTML", "CSS", "Javascript", "React", "TypeScript"],
    description: "Sitio profesional para estudio de arquitectura"
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
    title: "Portfolio",
    icon: <GalleryVerticalEnd size={25} color="#fff" strokeWidth={1} />,
    link: "#portfolio",
  },
  {
    id: 3,
    title: "Skills",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "#skills-section",
  },
  {
    id: 4,
    title: "Experience",
    icon: <Workflow size={25} color="#fff" strokeWidth={1} />,
    link: "#experience",
  },
  {
    id: 5,
    title: "Certifications",
    icon: <Book size={25} color="#fff" strokeWidth={1} />,
    link: "#certifications",
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
    title: "Frontend Developer",
    company: "EventLoop",
    companyUrl: "https://eventloop.club",
    date: "Abr 2024 - Actualidad",
    description:
      "Actualmente trabajo como Frontend Developer en una plataforma de venta de entradas para eventos musicales. Me encargo del desarrollo y mejora de interfaces, componentes reutilizables y estilos modernos, priorizando la experiencia de usuario, la consistencia visual y el trabajo colaborativo con Git y GitHub.",
  },
  {
    title: "Frontend Developer",
    company: "JS Agency",
    companyUrl: "https://jsagency.es",
    date: "2025 - Actualidad",
    description:
      "Desarrollo completo de sitio web para agencia digital, abarcando estructura, interfaz, responsive design, optimización y despliegue. El proyecto me permitió trabajar tanto la parte visual como la implementación técnica para construir una presencia digital moderna, clara y profesional.",
  },
  {
    title: "Frontend Developer",
    company: "Comunidad Argentina en Almería",
    companyUrl: "https://comunidadargentinaalmeria.es",
    date: "2025",
    description:
      "Desarrollo de sitio web institucional orientado a centralizar información, mejorar la presencia digital de la comunidad y facilitar el acceso a contenidos, actividades y contacto. El objetivo fue crear una experiencia clara, accesible y responsive para representar mejor a la organización online.",
  },
  {
    title: "Frontend Developer",
    company: "Mushroom MDP",
    companyUrl: "https://mushroommdp.com",
    date: "2025",
    description:
      "Desarrollo de sitio web corporativo para una empresa de alquiler de equipos de sonido e iluminación. Trabajé en la estructura del sitio, la interfaz visual, la adaptación responsive y la optimización general para ofrecer una presencia digital funcional, moderna y alineada con el servicio del cliente.",
  },
  {
    title: "Diseñador Web / Ecommerce",
    company: "Joyería Díaz",
    companyUrl: "https://joyeriadiaz.shop/",
    date: "2024",
    description:
      "Desarrollo de tienda online con WordPress, WooCommerce y Stripe, orientada a catálogo, gestión de productos y ventas online. El proyecto incluyó configuración de estructura comercial, experiencia de compra y adaptación del sitio a distintos dispositivos para lograr una tienda clara y funcional.",
  },
  {
    title: "QA Manual Intern",
    company: "Prosite.app",
    companyUrl: "https://prosite.app",
    date: "Mar 2023 - Jul 2023",
    description:
      "Participé en tareas de testing manual y control de calidad de producto, trabajando en creación de casos de uso, casos de prueba, validaciones funcionales y reporte de errores mediante Jira. Esta experiencia me dio una visión más completa del ciclo de desarrollo y la importancia de la calidad en productos digitales.",
  },
  {
    title: "Carrera de Desarrollo Web Frontend",
    company: "Coderhouse",
    date: "2023 - 2024",
    description:
      "Formación enfocada en desarrollo web frontend, cubriendo fundamentos de HTML, CSS, JavaScript y React, junto con buenas prácticas de maquetación, lógica de programación y construcción de interfaces modernas. Fue una etapa clave para consolidar mi base técnica y orientar mi perfil profesional al desarrollo frontend.",
  },
  {
    title: "Técnico en informática personal y profesional",
    company: "Técnica N° 3",
    date: "Finalizado en 2012",
    description:
      "Formación técnica orientada a informática, hardware, software, redes y soporte técnico. Esta etapa me dio una base sólida en tecnología, resolución de problemas y comprensión práctica de sistemas, que luego complementé con desarrollo web y herramientas digitales.",
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
    imageUrl: "/certs/desarrollo-con-ia.png",
    title: "Desarrollo con IA",
    company: "BIG school",
    date: "Octubre 2025",
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
