import { IconMail, IconLinkedin, IconInstagram, IconGithub } from "./src/components/Icons/index";
import html from './public/skills/html.svg';
import css from './public/skills/css.svg';
import javascript from './public/skills/javascript.svg';
import react from './public/skills/react.svg';
import bootstrap from './public/skills/bootstrap5.svg';
import git from './public/skills/git.svg';
import tailwind from './public/skills/tailwind.svg';
import { FaXTwitter } from "react-icons/fa6";
import mongoDB from './public/skills/mongoDB.svg'
import mysql from './public/skills/mysql.svg'
import python from './public/skills/python.svg'
import sass from './public/skills/sass.svg'
import nodejs from './public/skills/nodejs.svg'
import redux from './public/skills/redux.svg'
import supabase from './public/skills/supabase.svg'
import nextjs from './public/skills/nextJS.webp'
import typescript from './public/skills/typescript.svg'




export const METADATA = {
  author: "Supakun Thata",
  title: "Portfolio | Supakun Thata",
  description:
    "Supakun Thata is a passionate Frontend Developer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  keywords: [
    "Supakun Thata",
    "Frontend Developer",
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
    url: "https://www.linkedin.com/in/supakun-thata-437a62328/",
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
    tools: "Html",
    img: html
  },
  {
    tools: "Css",
    img: css
  },
  {
    tools: "Javascript",
    img: javascript
  },
  {
    tools: "Typescript",
    img: typescript
  },
  {
    tools: "React",
    img: react
  },
  {
    tools: "NextJS",
    img: nextjs
  },
  {
    tools: "Redux",
    img: redux
  },
  {
    tools: "Tailwind",
    img: tailwind
  },
  {
    tools: "Bootstrap",
    img: bootstrap
  },
  {
    tools: "Git",
    img: git
  },
  {
    tools: "Python",
    img: python
  },
  {
    tools: "Sass",
    img: sass
  },
  {
    tools: "Nodejs",
    img: nodejs
  },
  {
    tools: "MongoDB",
    img: mongoDB
  },
  {
    tools: "Mysql",
    img: mysql
  },
  {
    tools: "Supabase",
    img: supabase
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
    title: "Mechanical Engineer",
    company: "Site Engineer Air Conditioning | First Technology",
    duration: "(Oct 2023 - Mar 2024)"
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
    image: "/projects/pokedex.webp",
    blurImage: "/projects/pokedex.webp",
    description: "Pokédex App using PokeAPI + ReactJs 🌏",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/SupakunZ/Pokedex_App",
    tech: ["typescript", "vitejs", "react", "tailwind", "sass"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/tesla.webp",
    description: "Tesla UI clone using ReactJs + Bootstrap5 🚗",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://tesla-cloness.netlify.app/",
    tech: ["vitejs", "react", "bootstrap5"],
  },
  {
    name: "Portfolio",
    image: "/projects/portfolio_2.webp",
    blurImage: "/projects/portfolio_2.webp",
    description: "Portfolio using Tailwind CSS + NodeJS 🚀",
    gradient: ["#5800ca", "#b37afd"],
    url: "https://github.com/SupakunZ/Portfolio",
    tech: ["vitejs", "react", "tailwind", "sass", "nodejs", "mongoDB2"],
  },
  {
    name: "E-commerce",
    image: "/projects/ecommerce.webp",
    blurImage: "/projects/ecommerce.webp",
    description: "E-commerce using Tailwind CSS + NodeJS 🔥",
    gradient: ["#45B649", "#DCE35B"],
    url: "https://ecommercr.netlify.app/",
    tech: ["vitejs", "react", "tailwind", "nodejs", "mongoDB2"],
  },
  {
    name: "Restaurant",
    image: "/projects/restaurant.webp",
    blurImage: "/projects/restaurant.webp",
    description:
      "Restaurant using Redux + Supabase 👽",
    gradient: ["#021B79", "#0575E6"],
    url: "https://restaurantz.netlify.app/",
    tech: ["vitejs", "react", "tailwind", "redux", "supabase"],
  },
  {
    name: "Gunglz Chatbot",
    image: "/projects/chatbot.webp",
    blurImage: "/projects/chatbot.webp",
    description:
      "AI Chatbot using NextJs + Tailwind CSS 🤖",
    gradient: ["#536976", "#BBD2C5"],
    url: "https://gunglz-chatbot.vercel.app/",
    tech: ["vitejs", "nextJS", "tailwind"],
  },
  {
    name: "Gnss-Rtk",
    image: "/projects/gnss-rtk.webp",
    blurImage: "/projects/gnss-rtk.webp",
    description: "GNSS-RTK Navigation App using Python 🏆",
    gradient: ["#00416A", "#E4E5E6"],
    url: "https://github.com/SupakunZ/GNSS_RTK",
    tech: ["python", "numpy"],
  }
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
  linkedIn: 'https://www.linkedin.com/in/supakun-thata-437a62328/',
  twitter: 'https://x.com/GuNz246448',
  devUsername: "NEOSPEX",
  resume: "https://drive.google.com/file/d/1W6ewtg6mlrHc5uVtp2IQF1BNbgqV1r-n/view?usp=sharing"
}

