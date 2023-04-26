import JPMCLogo from "assets/images/logos/JPMCLogo.png";
import BoeingLogo from 'assets/images/logos/BoeingLogo.png'
import UHLogo from "assets/images/logos/UH.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import postgres from "assets/images/skills/postgresql.png";
import mysql from "assets/images/skills/mysql.png";
import aws from "assets/images/skills/aws.png";
import java from "assets/images/skills/java.png";
import cpp from "assets/images/skills/cpp.png";
import csharp from "assets/images/skills/csharp.png";
import aspnet from "assets/images/skills/aspnet.png";
import oracle from "assets/images/skills/oracle.png";
import docker from "assets/images/skills/docker.png";
import blazor from "assets/images/skills/blazor.png";
import git from "assets/images/skills/git.png";
import unity from "assets/images/skills/unity.png";
import maven from "assets/images/skills/maven.png";
import spring from "assets/images/skills/spring.png";
import nodejs from "assets/images/skills/nodejs.png";

export const companies = [
  {
    title: "JPMorgan Chase & Co.",
    alt: "JPMC image",
    role: "Software Engineer",
    skills: ["Java", "React", "TypeScript", "JavaScript", "SQL", "Oracle", "Spring", "Maven", "Cypress", "Jenkins", "AWS"],
    period: "Jul 2022 - Present",
    logo: JPMCLogo
  },
  {
    title: "Boeing",
    alt: "Boeing image",
    role: "Software Engineer Intern",
    skills: ["C#", "ASP.NET", ".NET", "Blazor", "Docker", "Pandoc"],
    period: "Aug 2021 - May 2022",
    logo: BoeingLogo
  },
  {
    title: "University of Houston",
    alt: "UH image",
    role: "Computer Science Tutor",
    skills: ["C", "C++", "C#", "Python", "R", "SQL"],
    period: "Jan 2021 - May 2021",
    logo: UHLogo
  },
];

export const institutes = [
  {
    short_title: "UH",
    title: "University of Houston",
    alt: "UH image",
    role: "Bachelor's Degree in Computer Science",
    skills: ["data structures", "operating systems", "software design", "game development", "computer graphics"],
    period: "Aug 2019 - May 2022",
    startingYear: "2019",
    logo: UHLogo,
    awards: [
      {
        title: "Magna Cum Laude",
        description:
          "Graduated with high honors",
        date: "May 2022"
      },
      {
        title: "Dean's List",
        description:
          "On the Dean's List during all semesters",
        date: "Aug 2019 - May 2022"
      },
    ]
  },
];

export const skills = [
  {
    name: "Java",
    description: "Backend development",
    link: "https://docs.oracle.com/javase/7/docs/technotes/guides/language/",
    type: "development",
    image: java
  },
  {
    name: "Python",
    description: "General development",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "C++",
    description: "Backend development",
    link: "https://cplusplus.com/",
    type: "development",
    image: cpp
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "TypeScript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "JavaScript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "C#",
    description: "General development",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    type: "development",
    image: csharp
  },
  {
    name: "ASP.NET",
    description: "Backend development",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    type: "development",
    image: aspnet
  },
  {
    name: "Blazor",
    description: "Full-stack development",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    type: "development",
    image: blazor
  },
  {
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Cypress",
    description: "Web testing",
    link: "https://www.cypress.io/",
    type: "design",
    image: css3
  },
  {
    name: "Oracle",
    description: "Database",
    link: "https://www.oracle.com/database/",
    type: "database",
    image: oracle
  },
  {
    name: "PostgreSQL",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "MySQL",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Node.js",
    description: "Web development",
    link: "https://nodejs.org/",
    type: "development",
    image: nodejs
  },
  {
    name: "AWS",
    description: "DevOps",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Docker",
    description: "DevOps",
    link: "https://www.docker.com/",
    type: "devops",
    image: docker
  },
  {
    name: "Unity",
    description: "Game development",
    link: "https://unity.com/",
    type: "development",
    image: unity
  },
  {
    name: "Spring",
    description: "Backend developement",
    link: "https://spring.io/",
    type: "development",
    image: spring
  },
  {
    name: "Maven",
    description: "Backend development",
    link: "https://maven.apache.org/",
    type: "development",
    image: maven
  },
  {
    name: "Git",
    description: "Tools",
    link: "https://git-scm.com/",
    type: "development",
    image: git
  },
  {
    name: "Figma",
    description: "Collaborative design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  },
  {
    name: "Visual Studio Code",
    description: "Code editor",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
];
