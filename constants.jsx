import { IconMail, IconLinkedin, IconInstagram, IconTwitter, IconGithub, IconExternal, } from "./src/components/Icons/index";
import html from './public/skills/html.svg';
import css from './public/skills/css.svg';
import javascript from './public/skills/javascript.svg';
import react from './public/skills/react.svg';
import bootstrap from './public/skills/bootstrap5.svg';
import figma from './public/skills/figma.svg';
import git from './public/skills/git.svg';
import tailwind from './public/skills/tailwind.svg';
import { FaXTwitter } from "react-icons/fa6";


export const METADATA = {
  author: "Supakun Thata",
  title: "Portfolio | Supakun Thata",
  description:
    "Supakun Thata is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  keywords: [
    "Supakun Thata",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "About",
    ref: "about",
  },
  {
    name: "Experience",
    ref: "experience",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I'm Frontend Developer",
  "I like to learn things",
  "I develop things for the web",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: supakunt.thata@gmail.com",
    img: <IconMail />
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    img: <IconLinkedin />
  },
  {
    name: "github",
    url: "https://github.com/SupakunZ",
    img: <IconGithub />
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/gunnkkun_/",
    img: <IconInstagram />
  },
  {
    name: "twitter",
    url: "https://x.com/GuNz246448",
    img: <FaXTwitter style={{ width: "24px", height: "24px" }} />
  },
];

export const SKILLS = [
  {
    tools: "HTML",
    img: html
  },
  {
    tools: "CSS",
    img: css
  },
  {
    tools: "Javascript",
    img: javascript
  },
  {
    tools: "React",
    img: react
  },
  {
    tools: "Tailwind",
    img: tailwind
  },
  {
    tools: "Git",
    img: git
  },
  {
    tools: "Bootstrap",
    img: bootstrap
  },
  {
    tools: "Figma",
    img: figma
  },
];

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "FullStack Development Bootcamp | Westride",
    duration: "(Mar 2024 - Present)"
  },
  {
    id: 2,
    title: "Data Engineer",
    company: "Road to Data Engineer Courses | DataTH",
    duration: "(Dec 2023 - Fec 2024)"
  },
  {
    id: 3,
    title: "Gnss RTK Navigation",
    company: "Internship Python Developer | GISTDA",
    duration: "(Apr 2022 - Dec 2022)"
  }
]

export const PROJECTS = [
  {
    name: "Pokédex",
    image: "../../../public/projects/pokedex.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Pokédex App using PokeAPI + ReactJs + Tailwind CSS 🌏",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/SupakunZ/Pokedex_App",
    tech: ["typescript", "vitejs", "react", "tailwind", "sass"],
  },
  {
    name: "Tesla",
    image: "../../../public/projects/tesla.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Tesla UI clone using ReactJs + Bootstrap5 🚗",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://tesla-cloness.netlify.app/",
    tech: ["vitejs", "react", "bootstrap5"],
  },
  {
    name: "Spacex",
    image: "../../../public/projects/spacex.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Spacex UI clone using ReactJs 👽",
    gradient: ["#000066", "#6699FF"],
    url: "https://spacex-clones.netlify.app/",
    tech: ["vitejs", "react"],
  },
  {
    name: "Gnss-Rtk",
    image: "../../../public/projects/gnss-rtk.png",
    blurImage: "../../../public/projects/tesla.png",
    description: "GNSS-RTK Navigation App using Python 🏆",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/SupakunZ/GNSS_RTK",
    tech: ["python", "numpy"],
  },
  {
    name: "Portfolio",
    image: "../../../public/projects/portfolio.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Portfolio using ReactJs + Tailwind CSS 🚀",
    gradient: ["#5800ca", "#b37afd"],
    url: "https://github.com/SupakunZ/Portfolio",
    tech: ["vitejs", "react", "tailwind", "sass"],
  },
];

export const personalData = {
  name: "Supakun Thata",
  profile: '/profile.png',
  designation: "Software Developer",
  email: 'supakunt.thata@gmail.com',
  phone: '0622787171',
  address: 'Chiang Rai, Thailand - 57160 ',
  github: 'https://github.com/SupakunZ',
  instagram: 'https://www.instagram.com/gunnkkun_/',
  linkedIn: 'https://www.google.co.th/',
  twitter: 'https://x.com/GuNz246448',
  devUsername: "NEOSPEX",
  resume: "https://drive.google.com/"
}

