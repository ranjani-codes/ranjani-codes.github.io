import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science",
    icon: web,
  },
  {
    title: "Business Intelligence",
    icon: mobile,
  },
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Content Creation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: " ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing a full-stack web application with seamless integration of a mobile app, enabling users to access and interact with the platform across multiple devices.",
      "Analyzing and predicting future outcomes using company finance data. Providing actionable recommendations to high-level stakeholders and presenting insights through visualizations.",
    ],
    tools: [
      "Tools/Languages Used: : Python, SQL, PowerBI, HTML, CSS, Javascript, React, Django"
    ]
  },
  {
    title: "Data Scientist Intern",
    company_name: "Virtuagym BV | Amsterdam, The Netherlands",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Gain insights on client usage patterns through a data-driven dashboard.",
      "Utilising Machine learning and implementing ETL solutions to facilitate cross-functional analysis of usage data and product optimization across departments.",
      "Leveraging data-driven insights through the utilisation of Big Query, Google Analytics, Microsoft Excel, and Amplitude to drive the progress of underdeveloped projects.",
      "Taking charge of a project from end to end using Jira to track the progress.",
    ],
    tools:[
      "Tools/Languages Used: Google Analytics, Firebase, Domo (ETL, Visualisation), Amplitude(Analysis), AWS, Jira, MySQL Workbench, Python, SQL, Git, BigQuery"
    ]
  },
  {
    title: "Data Analyst Intern",
    company_name: "Customer Analytics LLC | Wisconsin, The USA",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2022 - July 2022",
    points: [
      "Providing support to the Senior Data Analyst in PowerBI-based projects aimed at delivering visualized results to clients.",
      "Working on Data Processing and Data Visualisation in Python with libraries such as Sklearn and Seaborn.",
      "Utilizing the Python Pandas library to clean and process data, in order to enhance the accuracy of analysis and improve the quality of decision-making",
    ],
    tools:[
      "Tools/Languages Used: PowerBI, Python, Jupyter, Anaconda"
    ]
  },
  {
    title: "Data Scientist Intern",
    company_name: "Obvion | Heerlen, The Netherlands",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Assist the employees in answering day-to-day questions by creating an Answer Retrieval (AR) System using BERT in Python.", 
      "Employing methodologies in Information Retrieval, Natural Language Processing, and Natural Language Generation to develop an Augmented Reality System capable of acquiring knowledge from supplied documents.",
      "Engaging with stakeholders to accommodate their evolving needs and demands.",
    ],
    tools:[
      "Tools/Languages Used: Python, BERT"
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };