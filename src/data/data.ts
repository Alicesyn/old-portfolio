import JPMCLogo from "assets/images/logos/JPMCLogo.png";
import BoeingLogo from 'assets/images/logos/BoeingLogo.png'
import UHLogo from "assets/images/logos/UH.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

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
    skills: ["C#", "ASP.NET", ".NET", "Blazor", "Docker", "Pandoc", "AngleSharp"],
    period: "Aug 2021 - May 2022",
    logo: BoeingLogo
  },
  {
    title: "University of Houston",
    alt: "UH image",
    role: "Computer Science Tutor",
    skills: ["C++", "Python"],
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
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "Nov 1, 2013"
      }
    ]
  },
];

export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
