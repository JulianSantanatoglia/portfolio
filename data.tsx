import { GalleryVerticalEnd, CodeSquare, HomeIcon, UserRound, Linkedin, Mail, Github, Crop, Pencil, Computer, Book, Rocket, Speech, User, Contact } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jsantanatoglia/"
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/JulianSantanatoglia"
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:juliansantanatoglia@gmail.com"
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
    imageUrl: "jsport.png",
    title: "Jsport",
    githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    websiteUrl: "https://jstore-three.vercel.app/",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "React", "TypeScript"],
    },
    {
    imageUrl: "cafeteriaalmeria.png",
    title: "Cafeteria Almeria",
    githubUrl: "https://github.com/JulianSantanatoglia/cafeteriaalmeria",
    websiteUrl: "https://juliansantanatoglia.github.io/cafeteriaalmeria/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
    },
    {
    imageUrl: "escueladecocina.png",
    title: "Escuela de Cocina",
    githubUrl: "https://github.com/JulianSantanatoglia/escueladecocina",
    websiteUrl: "https://juliansantanatoglia.github.io/escueladecocina/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
    },
    {
    imageUrl: "deliveryapp.png",
    title: "Delivery App",
    githubUrl: "https://github.com/JulianSantanatoglia/deliveryapp",
    websiteUrl: "https://juliansantanatoglia.github.io/deliveryapp/",
    technologies: ["HTML", "CSS", "SASS", "Javascript"],
    },
    {
    imageUrl: "greenbank.png",
    title: "Green Bank",
    githubUrl: "https://github.com/JulianSantanatoglia/GreenBank",
    websiteUrl: "https://juliansantanatoglia.github.io/GreenBank/",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "React", "TypeScript"],
    },
    {
    imageUrl: "joyeriadiaz.png",
    title: "JoyeríaDiaz",
    githubUrl: "https://joyeriadiaz.shop/",
    websiteUrl: "https://joyeriadiaz.shop/",
    technologies: ["Wordpress", "WooCommerce", "Blocksy"],
    },
    // {
    // imageUrl: "jsport.png",
    // title: "Jsport",
    // githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    // websiteUrl: "https://jstore-three.vercel.app/",
    // technologies: ["React", "TypeScript", "Tailwind CSS"],
    // },
    // {
    // imageUrl: "jsport.png",
    // title: "Cafeteria Almeria",
    // githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    // websiteUrl: "https://jstore-three.vercel.app/",
    // technologies: ["React", "TypeScript", "Tailwind CSS"],
    // },
    // {
    // imageUrl: "jsport.png",
    // title: "Jsport",
    // githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    // websiteUrl: "https://jstore-three.vercel.app/",
    // technologies: ["React", "TypeScript", "Tailwind CSS"],
    // },
    // {
    // imageUrl: "jsport.png",
    // title: "Jsport",
    // githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    // websiteUrl: "https://jstore-three.vercel.app/",
    // technologies: ["React", "TypeScript", "Tailwind CSS"],
    // },
    // {
    // imageUrl: "jsport.png",
    // title: "Jsport",
    // githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    // websiteUrl: "https://jstore-three.vercel.app/",
    // technologies: ["React", "TypeScript", "Tailwind CSS"],
    // },
    // {
    // imageUrl: "jsport.png",
    // title: "Jsport",
    // githubUrl: "https://github.com/JulianSantanatoglia/jsport",
    // websiteUrl: "https://jstore-three.vercel.app/",
    // technologies: ["React", "TypeScript", "Tailwind CSS"],
    // },
    
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
      title: "GalleryVerticalEnd",
      icon: <GalleryVerticalEnd size={25} color="#fff" strokeWidth={1} />,
      link: "#portfolio",
    },
    {
      id: 4,
      title: "Contact",
      icon: <Contact size={25} color="#fff" strokeWidth={1} />, // Icono de email (Mail)
      link: "#contact",
    },
  ];