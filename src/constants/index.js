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
import { Experience } from "../components";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience"
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Contact",
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
    title: "Data Scientist Consultant",
    company_name: "Rhenus Warehousing Solutions",
    icon: "",
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Conducting thorough stakeholder interviews and in-depth analyses to gain a deep understanding of the logistics processes and business pain points.",
      "Prototyping machine learning models for potential use in areas such as route optimization, demand forecasting, and inventory management, providing valuable insights into feasibility.",
      "Developing data visualization prototypes to illustrate the potential impact of machine learning on logistics operations.",
      "Working closely with internal teams to assess the readiness of existing infrastructure for future machine learning model deployment.",
    ],
    tools: [
      "Tools/Languages Used: : Python, PowerBI, Excel, JIRA, Azure"
    ]
  },
  {
    title: "Freelance Consultant",
    company_name: " ",
    icon: "",
    iconBg: "#383E56",
    date: "April 2023 - October 2023",
    points: [
      "Developing a full-stack web application with seamless integration of a mobile app, enabling users to access and interact with the platform across multiple devices.",
      "Analysing and predicting future outcomes using company finance data. Providing actionable recommendations to high-level stakeholders and presenting insights through visualizations.",
    ],
    tools: [
      "Tools/Languages Used: : Python, SQL, PowerBI, HTML, CSS, Javascript, React, Django"
    ]
  },
  {
    title: "Data Scientist Intern",
    company_name: "Virtuagym BV | Amsterdam, The Netherlands",
    icon: "",
    iconBg: "#383E56",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Gaining insights on client usage patterns through a data-driven dashboard.",
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
    iconBg: "#383E56",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Assisting the employees in answering day-to-day questions by creating an Answer Retrieval (AR) System using BERT in Python.", 
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
    name: "Information Retrieval System",
    short_description: "Natural Language Processing Algorithm that aims to optimise customer service requests",
    long_description:
      "A model that leverages Natural Language Processing and Natural Language Generation techniques to improve customer service by automating responses to queries based on provided documents, reducing manual labor involved in the process.",
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
    source_code_link: "https://github.com/ranjani-codes/MortgageMadness",
  },
  {
    name: "Trade Signal Generator",
    short_description: "Trading bot that generates Trading Signals using Operations Research techniques",
    long_description:
      "A model that employs a Markov Decision Process (MDP) in combination with Policy Iteration to determine optimal trading signals by analyzing historical data, enabling it to assess whether a given stock is likely to yield profitable returns based on past price trends.",
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
    source_code_link: "",
  },
  {
    name: "AI-Based Personal Trainer",
    short_description: "Reinforcement Learning based Algorithm that learns training patterns and customizes them to match individual user goals",
    long_description:
      "A machine learning algorithm trained on a vast dataset of training plans designed by coaches for their clients, capable of discerning patterns and generating personalized plans for individual users.",
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
  },
  {             
    name: "Personal Assistant Chatbot",
    short_description: "An AI-based PA that assists you in planning your days based on your schedule, complete with faec recognition and calendar sync",
    long_description:
      "A facial recognition-enabled chatbot that utilizes Image and Video Processing for face recognition and Natural Language Processing for interpreting user queries. The system can optimize your schedule by integrating with linked calendars and setting reminders automatically based on the type of event.",
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
    source_code_link: "https://github.com/ranjani-codes/AI-Personal-Assistant",
  },

  {             
    name: "Employee Scheduler",
    short_description: " Python-based algorithm to aid business owners in shift scheduling",
    long_description:
      "An algorithm that schedules shifts for employees by factoring in individual availability, rank, responsibilities, and employer specifications, with plans to develop a user-friendly interface and offer it as a service to clients.",
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
    source_code_link: "",
  },
  {             
    name: "Movie Recommender System",
    short_description: "A Recommender System that suggests movies to users based on similarities between users and similarities between items",
    long_description:
      "A Recommender System that employs User-Based Collaborative Filtering and Item-Based Collaborative Filtering approaches to suggest movies to individual users based on their preferences, including previously unseen ones, and also offers group recommendations based on the collective preferences of the members.",
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
    source_code_link: "https://github.com/ranjani-codes/Movie-Recommender-System",
  },
  {             
    name: "Client Conversion Predictor",
    short_description: "A Machine-Learning model using regression techniques that identifies leads that could convert to clients",
    long_description:
      "A combination-regression model that uses data on client demographics, usage history, frequency of usage, and other relevant information to predict the likelihood of client conversions and client churn.",
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
  },
];

export { services, technologies, experiences, testimonials, projects };