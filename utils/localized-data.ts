import type { Language } from "./language";

type LocalizableProject = {
  title: string;
  description: string;
};

type LocalizableTimelineItem = {
  title: string;
  company?: string;
  date: string;
  description: string;
};

const projectDescriptionsEn: Record<string, string> = {
  "Event Loop": "Ticket sales platform for live music events.",
  "JS Agency": "Corporate website for a digital agency.",
  "Mushroom Mdp": "Sound and DJ booth rental platform for recording sets.",
  "Comunidad Argentina Almeria": "Institutional website for the Argentinian community in Almeria.",
  "Micaela Diaz": "Professional portfolio website for a photographer in Almeria.",
  "Alejandro Santanatoglia": "Professional website for an architecture studio.",
  "Green Bank": "Modern banking app with an intuitive interface.",
  Planeandoando: "Travel planning platform.",
  Billulla: "Helps with financial tracking and document organization.",
  "Arquitectura Moderna": "Modern architecture website with a project gallery.",
  jsport: "E-commerce focused on sports products.",
  "Cafeteria Almeria": "Cafe website with an interactive menu.",
  "Escuela de cocina": "Educational platform for cooking courses.",
  "Delivery App": "Food delivery application.",
  "Joyeria Diaz": "Online jewelry e-commerce.",
  "Guitar LA": "Online store specialized in musical instruments.",
};

const timelineTranslationsEn: Record<string, LocalizableTimelineItem> = {
  "Frontend Developer|EventLoop|Abr 2024 - Actualidad": {
    title: "Frontend Developer",
    company: "EventLoop",
    date: "Apr 2024 - Present",
    description:
      "I currently work as a Frontend Developer on a ticketing platform for live music events. I focus on building and improving interfaces, reusable components, and modern styles, always prioritizing user experience, visual consistency, and teamwork using Git and GitHub.",
  },
  "Frontend Developer|JS Agency|2025 - Actualidad": {
    title: "Frontend Developer",
    company: "JS Agency",
    date: "2025 - Present",
    description:
      "End-to-end development of a digital agency website, covering structure, interface, responsive design, optimization, and deployment. This project helped me grow both visual and technical implementation skills to build a modern, clear, and professional online presence.",
  },
  "Frontend Developer|Comunidad Argentina en Almería|2025": {
    title: "Frontend Developer",
    company: "Argentinian Community in Almeria",
    date: "2025",
    description:
      "Development of an institutional website focused on centralizing information, improving digital presence, and making content, activities, and contact easier to access. The goal was to create a clear, accessible, and fully responsive experience for the organization.",
  },
  "Frontend Developer|Mushroom MDP|2025": {
    title: "Frontend Developer",
    company: "Mushroom MDP",
    date: "2025",
    description:
      "Development of a corporate website for an audio and lighting equipment rental business. I worked on site structure, visual interface, responsive behavior, and general optimization to deliver a functional, modern digital presence aligned with the brand.",
  },
  "Diseñador Web / Ecommerce|Joyería Díaz|2024": {
    title: "Web Designer / Ecommerce",
    company: "Joyeria Diaz",
    date: "2024",
    description:
      "Online store development with WordPress, WooCommerce, and Stripe, focused on catalog management, product administration, and online sales. The project included commercial structure setup, shopping experience optimization, and multi-device adaptation.",
  },
  "QA Manual Intern|Prosite.app|Mar 2023 - Jul 2023": {
    title: "QA Manual Intern",
    company: "Prosite.app",
    date: "Mar 2023 - Jul 2023",
    description:
      "I contributed to manual testing and product quality tasks, creating use cases, test cases, functional validations, and bug reports through Jira. This experience gave me a broader understanding of the development lifecycle and product quality standards.",
  },
  "Carrera de Desarrollo Web Frontend|Coderhouse|2023 - 2024": {
    title: "Frontend Web Development Career",
    company: "Coderhouse",
    date: "2023 - 2024",
    description:
      "Training focused on frontend web development, covering HTML, CSS, JavaScript, and React fundamentals, plus layout best practices, programming logic, and modern interface building. This was key to strengthening my technical foundation.",
  },
  "Técnico en informática personal y profesional|Técnica N° 3|Finalizado en 2012": {
    title: "Computer Technician",
    company: "Technical School No. 3",
    date: "Graduated in 2012",
    description:
      "Technical education focused on hardware, software, networks, and IT support. This stage provided a strong technology base and practical problem-solving skills, later expanded with web development and digital tools.",
  },
};

const timelineKey = (item: LocalizableTimelineItem) =>
  `${item.title}|${item.company ?? ""}|${item.date}`;

export const localizeProjects = <T extends LocalizableProject>(items: T[], language: Language): T[] => {
  if (language === "es") return items;
  return items.map((item) => ({
    ...item,
    description: projectDescriptionsEn[item.title] ?? item.description,
  }));
};

export const localizeTimelineItems = <T extends LocalizableTimelineItem>(items: T[], language: Language): T[] => {
  if (language === "es") return items;
  return items.map((item) => {
    const translated = timelineTranslationsEn[timelineKey(item)];
    if (!translated) return item;
    return {
      ...item,
      ...translated,
    };
  });
};

