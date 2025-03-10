import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Alejandro Amaya",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer Frontend, passionate about creating innovative tech solutions and building impactful businesses",
  summary:
    "Currently studying software development, I am passionate about frontend development and how creativity plays a vital role in creating seamless user experiences. My strengths lie in crafting intuitive interfaces, and I love transforming ideas into engaging designs. I work with tools like React to build dynamic, responsive applications that make an impact. As I continue to grow my skills, I aim to blend technical expertise with artistic vision to develop innovative solutions that truly resonate with users.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "redux",
    "tailwind",
    "Next.js",
    "Typescript",
    "Node.js",
    "html",
    "css",
    "java script",
    ".net",
    "C#",
  
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "alejandroamayaqc8@gmail.com",
    tel: "3195121850",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/x23alejo23x",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
     
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    
    {
      company: "Jazzplat Colombia",
      badges: [],
      href: "https://www.jazzplat.co/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/jazzplat.png",
      start: "October 2024",
      end: "present 2025",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Infotegra S.A.S",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "sotfware Engineer",
      logoUrl: "/infotegra.jpg",
      start: "September 2023",
      end: "January 2022",
      description:
        "I worked with Angular, remodeling university repositories and enhancing existing projects within EndSpace to improve functionality and user experience.",
    },
    
  ],
  education: [
    {
      school: "Fundacion Universitaria Ucompensar",
      href: "https://ucompensar.edu.co/",
      degree: "Ingenieria De Software",
      logoUrl: "/ucompensar.png",
      start: "2020",
      end: "2025",
    },
    {
      school: "NETZUN",
      href: "https://netzun.com/",
      degree: "Especialización En Desarrollo Web",
      logoUrl: "/netzun.png",
      start: "2024",
      end: "2024",
    },
   
  ],
  projects: [
    
    
    {
      title: "jv-camiones",
      href: "https://jv-camiones-front-landing.vercel.app/",
      dates: "Enero 2025 - Enero 2025",
      active: true,
      description:
        "El proyecto consiste en el desarrollo de una landing page para camiones utilizando React y Tailwind CSS, enfocada en ofrecer una interfaz moderna, rápida y responsive.",
      technologies: [
        "React",
        "Framer Motion",
        "Java Script",
        "TailwindCSS",
        "HTML",
        "PHP",
        "Figma",
        "Git Hub",
        "Node"

      ],
      links: [
        {
          type: "Website",
          href: "https://jv-camiones-front-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/x23alejo23x/jv_camiones_front_landing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proyecto-jvcamiones.png"

    },
    {
      title: "Lista De Tareas",
      href: "https://project-react-to-do.vercel.app/",
      dates: "Octubre 2024",
      active: true,
      description:
        "desarrollode un todo list implentando la tecnologia de react y TailwindCSS",
      technologies: [
        "React",
        "framer motion",
        "Java Script",
        "TailwindCSS",
        "HTML",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://project-react-to-do.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proyecto-Todo.png"
      ,
      
    },
  ],

} as const;
