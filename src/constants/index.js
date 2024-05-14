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
    pycube,
    montefiore,
    three,
    bscw,
    carrent,
    sudoku,
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
      title: "Software Engineer",
      icon: creator,
    },
    {
      title: "React Front End Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
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
      title: "Software Developer",
      company_name: "Pycube",
      icon: pycube,
      iconBg: "#383E56",
      date: "Septembebr 2022 - Present",
      points: [
        "Developed front-end applications with JavaScript, React, Redux, HTML, and CSS for engaging user interfaces.",
        "Implemented server-side logic and RESTful APIs using Node.js, Express.js, PostgreSQL, and MongoDB for efficient data management.",
        "Containerized applications with Docker for consistent development and deployment environments.",
        "Managed version control with Git and collaborated on codebases using BitBucket for efficient code review.",
        "Deployed applications on AWS infrastructure (EC2, S3, Lambda) for scalable and reliable cloud hosting.",
        "Contributed to projects for MonteFiore Medical Center and Baylor Scott & White Health, developing software solutions and implementing features to meet their specific needs. (See below)"
      ],
    },
    {
      title: "Software Developer",
      company_name: "MonteFiore Medical Center",
      icon: montefiore,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Implemented an invoice validation service using a five-step processing workflow using React hooks and Redux Toolkit.",
        "Designed and implemented API endpoints using Express.js, applying the MVC design pattern for structured layer-wise functionality.",
        "Integrated SharePoint APIs with OAuth for online excel correction.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Deployed and managed applications on AWS, utilizing services such as EC2, S3, and Lambda for scalable and reliable cloud infrastructure.",
        "Participated in a Scrum team and Agile Practices including: Test-Driven Development (TDD), Behavior-Driven Development (BDD) and pair programming.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Baylor Scott & White Health",
      icon: bscw,
      iconBg: "#383E56",
      date: "November 2022 - June 2023",
      points: [
        "Implemented metrics (Asset Usage, Asset Cycles, Asset Path, Asset Inventory) using MongoDB aggregation pipeline and Express.js for API development.",
        "Successfully implemented dashboard components using React hooks for effective data visualization and user interaction.",
        "Optimized JavaScript code for faster load times and smoother user experiences, employing techniques such as lazy loading, code splitting, and minimizing network requests.",
        "Utilized JIRA for project management, task tracking, and issue resolution, resulting in streamlined workflows and enhanced productivity within our team.",
        "Presented weekly progress reports and demos to managers and C-level personnel, providing updates on development progress and collaborating with them to craft future roadmap and address any feedback they had about the product."
      ],
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
      name: "3D Website",
      description:
        "A self made website to use for my own personal portfolio. I experimented with three.js in react in order to bring 3D visuals to life. Styled with Tailwind CSS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: three,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sudoku",
      description:
        "Fully playable single stage sudoku game. Functionality created with Javascript. Designed with CSS. Implemented third party API and cross referenced for sudoku rules to make game fully playable.",
      tags: [
        {
          name: "javascript",
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
      image: sudoku,
      source_code_link: "https://github.com/JoeyFaris/sudoku",
    },
    {
      name: "Suite Management",
      description:
        "Real world software application that solves rent processing, lease storage, and maintenance postings for tenants. Built a local API with Active Record with associated tables and relational databases.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "ruby",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/JoeyFaris/suite-management",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };