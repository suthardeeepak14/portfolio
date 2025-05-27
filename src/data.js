import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

export const personalInfo = {
  name: "Deepak Suthar",
  title: "Frontend Developer",
  email: "suthardeepak257@gmail.com",
  phone: "8928181783",
  location: "Mumbai, India",
  github: "https://github.com/suthardeeepak14",
  linkedin: "https://linkedin.com/in/deepaksuthar1",
};

export const heroData = {
  titles: ["Frontend Developer"],
};

export const aboutData = {
  description:
    "I am Deepak, a Frontend Developer with a strong passion for building responsive, user-friendly, and visually appealing web applications. With expertise in HTML, CSS, JavaScript, and React.js, I specialize in crafting seamless user experiences and optimizing website performance. I am committed to following modern web standards and best practices to create scalable and efficient digital solutions.Currently seeking opportunities to contribute to innovative web projects and collaborate with dynamic teams to enhance digital experiences.",
};

export const skillsData = [
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { icon: FaReact, name: "React.js", color: "text-blue-400" },
  { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-500" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
  { icon: SiMysql, name: "SQL", color: "text-blue-600" },
  { icon: FaGit, name: "Git", color: "text-orange-600" },
];

export const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "Nipralo Technologies",
    period: "06/2024 - 08/2024",
    responsibilities: [
      "Built and released several responsive websites for improved efficacy of performance, user experience.",
      "Improved upon existing websites using new web standards and practices, increasing user engagement by 30%.",
      "Led updates and modifications to existing live websites, ensuring they remained up-to-date with the latest design trends and best practices.",
    ],
  },
];

export const projectsData = [
  {
    title: "ToDo List Web App",
    subtitle: "Smart Task Tracker with LocalStorage Integration",
    description: [
      "A simple and responsive ToDo List web application built using HTML, Tailwind CSS, and JavaScript. This app allows users to add, delete, and manage their daily tasks efficiently." ,
      "It uses the browser's localStorage to save tasks locally, so users don't lose their data even after refreshing or closing the browser.The interface is clean, mobile - friendly, and designed for a smooth user experience.",
    ],
    gradient: "from-blue-500 to-purple-600",
    demoLink: "https://todo-list-app-kittu.netlify.app/",
    githubLink: "https://github.com/suthardeeepak14/todo-list",
  },
  {
    title: "CineQuest",
    subtitle: "Real-Time Movie Search",
    description: [
      "Developed a dynamic movie search website using React.js and the IMDb API, enabling users to search for movies and view detailed information, including ratings, cast, and plot summaries.",
      "Added functionality for users to create personalized movie lists, allowing them to add favorite movies to a custom list and rate them, providing a tailored experience.",
    ],
    gradient: "from-blue-500 to-purple-600",
    demoLink: "https://cinequest-react-app.netlify.app/",
    githubLink: "https://github.com/suthardeeepak14/CineQuestReactApp",
  },
  {
    title: "Fast Pizza",
    subtitle: "Modern Pizza Ordering Website",
    description: [
      "Developed a fully responsive pizza ordering website using React.js , ensuring fast performance and a seamless user experience.",
      "Designed an intuitive UI with Tailwind CSS, allowing users to browse pizzas effortlessly.",
    ],
    gradient: "from-red-500 to-yellow-500",
    demoLink: "https://kittu-pizza.netlify.app/",
    githubLink: "https://github.com/suthardeeepak14/Fast-pizza",
  },
];

export const educationData = [
  {
    degree: "M.Sc IT",
    institution: "Thakur College of science and commerce",
    period: "07/2021 - 04/2023",
    cgpa: "8.90",
  },
  {
    degree: "B.Sc(IT)",
    institution: "ST. Rocks College of Science and Law",
    period: "07/2018 - 04/2021",
    cgpa: "8.65",
  },
];
