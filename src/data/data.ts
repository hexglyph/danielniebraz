import { Project, Service, Skill } from "../types";

export const services: Service[] = [
  {
    Icon: '',
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: '',
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: '',
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: '',
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: '',
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: '',
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: '',
    name: "Python",
    level: "45",
  },
  {
    Icon: '',
    name: "Java Script",
    level: "60",
  },
  {
    Icon: '',
    name: "React Native",
    level: "80",
  },
  {
    Icon: '',
    name: "React",
    level: "70",
  },
  {
    Icon: '',
    name: "Django",
    level: "80",
  },
  {
    Icon: '',
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: '',
    name: "Figma",
    level: "85",
  },
  {
    Icon: '',
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: '',
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: '',
    name: "Framer",
    level: "45",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    project: 'Projeto',
    name: "SP100",
    description:
      "Description",
    image_path: "/project/1.jpg",
    deployed_url: "/",
    github_url: "/",
    key_techs: ["NextJS", "3words", "TailwindCSS"],
  },
  {
    id: 2,
    project: 'Projeto',
    name: "SP100",
    description:
      "Description",
    image_path: "/project/2.jpg",
    deployed_url: "/",
    github_url: "/",
    key_techs: ["NextJS", "3words", "TailwindCSS"],
  },
  {
    id: 3,
    project: 'Projeto',
    name: "TeamScore",
    description:
      "Description",
    image_path: "/project/1.jpg",
    deployed_url: "/",
    github_url: "/",
    key_techs: ["NextJS", "TailwindCSS"],
  },
  {
    id: 4,
    project: 'Projeto',
    name: "Intra",
    description:
      "Description",
    image_path: "/project/2.jpg",
    deployed_url: "/",
    github_url: "/",
    key_techs: ["NextJS", "TailwindCSS"],
  },

];
