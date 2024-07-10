import { IconMail, IconLinkedin, IconInstagram, IconTwitter, IconGithub, IconExternal, } from "./src/components/Icons/index";
import html from './public/skills/html.svg';
import css from './public/skills/css.svg';
import javascript from './public/skills/javascript.svg';
import react from './public/skills/react.svg';
import bootstrap from './public/skills/bootstrap5.svg';
import figma from './public/skills/figma.svg';
import git from './public/skills/git.svg';
import tailwind from './public/skills/tailwind.svg';


export const METADATA = {
  author: "Supakun Thata",
  title: "Portfolio | Supakun Thata",
  description:
    "Supakun Thata is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Supakun Thata",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
  themeColor: "#000000",
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
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: supakunt.thata@gmail.com",
    img: <IconMail />
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubhporwal/",
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
    img: <IconTwitter />
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
    title: 'Software Engineer I',
    company: "Teton Private Ltd.",
    duration: "(Jan 2022 - Present)"
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Fiverr (freelance)",
    duration: "(Jun 2021 - Jan 2022)"
  },
  {
    id: 3,
    title: "Self Employed",
    company: "Code and build something in everyday.",
    duration: "(Jan 2018 - Present)"
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
  description: "My name is ABU SAID. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
  email: 'supakunt.thata@gmail.com',
  phone: '0622787171',
  address: 'Chiang Rai, Thailand - 57160 ',
  github: 'https://github.com/SupakunZ',
  instagram: 'https://www.instagram.com/gunnkkun_/',
  linkedIn: 'https://www.google.co.th/',
  twitter: 'https://x.com/GuNz246448',
  stackOverflow: 'https://stackoverflow.com/users/16840768/abu-said',
  leetcode: "https://leetcode.com/said3812/",
  devUsername: "NEOSPEX",
  resume: "https://drive.google.com/file/d/1eyutpKFFhJ9X-qpQGKhUNnVRkB5Wer00/view?usp=sharing"
}

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
