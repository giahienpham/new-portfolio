import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 – Aug 2024",
    role: "Software Development Intern",
    company: "FPT Information and System",
    description: [
      "Developed backend features using Jmix, Spring Boot to monitor and secure 4,000+ daily bank transactions. ",
      "Reduced report load times by 2 minutes (80%) through SQL optimizations. ",
      "Integrated GitLab and Kubernetes CI/CD pipelines, enhancing app deployment time by 60%. ",
      "Deployed Algolia search service into a 4-node Kubernetes cluster, reducing Oracle database server traffic by 25%. ",
    ],
    technologies: [
      "Jmix",
      "Kubernetes",
      "CI/CD",
      "Spring Boot",
      "SQL",
      "Oracle",
    ],
  },
  {
    year: "Jan 2024 – Apr 2024",
    role: "Software Engineer Intern",
    company: "Brigham and Women's Hospital",
    description: `Involved as Assistant Lead Engineer and Full stack Developer in Agile team, managing daily Scrums using Jira. Developed 50+ RESTful APIs with Express and Auth0, and built an interactive Python/Flask chatbot using PyTorch for machine learning to assist hospital users with service requests and directional information. Deployed and hosted application on AWS, serving 1,000+ users, focusing on scalability and performance`,
    technologies: [
      "HTML",
      "CSS",
      "Nodejs",
      "mySQL",
      "Python",
      "Flask",
      "AWS",
      "Express",
      "Agile",
    ],
  },
  {
    year: "Mar 2024 – Present",
    role: "Teaching Assistant",
    company: "Worcester Polytechnic Institute",
    description: `Hosted office hours, assisting 50+ students with programming, software issues, troubleshooting, and assignments. Mentored a team of 10 students, fostering collaboration and problem-solving for software engineering final project`,
    technologies: [
      "Problem-solving",
      "Troubleshooting",
      "Mentoring",
      "Programming",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Angular", "Express", "Nodejs", "TypeScript"],
    sourceCode: "https://github.com/giahienpham/shop-app",
    liveUrl: "https://shop-app-six-nu.vercel.app",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    sourceCode: "#",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    sourceCode: "#",
    liveUrl: "#",
  },
  {
    title: "MERN Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Redux",
      "Firebase",
    ],
    sourceCode: "https://github.com/giahienpham/blog-app",
    liveUrl: "https://blog-app-wzu2.onrender.com",
  },
];

export const CONTACT = {
  address: "143 Institute Road, Worcester, MA 01602",
  phoneNo: "+1 (774)-418 5088 ",
  email: "giahien14606@gmail.com",
};
