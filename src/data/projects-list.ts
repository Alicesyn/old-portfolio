import restaurant from "assets/images/portfolio/restaurant.png";
import crypto from "assets/images/portfolio/crypto.png";
import csgo from "assets/images/portfolio/csgo.png";
import wine from "assets/images/portfolio/redwine.jpg";
import concerto from "assets/images/portfolio/concerto.png";
import museum from "assets/images/portfolio/museum.png";
import portfolio from "assets/images/portfolio/portfolio.png";

export const projectsList = [
  {
    id: 1,
    title: "Portfolio Website",
    logo: portfolio,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://github.com/Alicesyn/order-website",
    desc: `This is my personal website containing my portfolio. You are here right now!`,
    technologies: ["React", "TypeScript", "HTML", "CSS", "ChakraUI"]
  },
  {
    id: 2,
    title: "Product Ordering Website",
    logo: restaurant,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://github.com/Alicesyn/order-website",
    desc: `Designed a full-stack app that allows customers to create accounts and submit orders, with an admin page where admins can view order details in a React UI`,
    technologies: ["React", "JavaScript", "Express", "Jest", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Augmented Reality Museum",
    link: "https://github.com/Alicesyn/AR-Museum-2",
    logo: museum,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `Created a virtual museum in Unity’s augmented reality, themed under different historical periods`,
    technologies: ["C#", "Unity", "Microsoft MRTK", "Autodesk Maya"]
  },
  {
    id: 4,
    title: "The Final Concerto Game",
    logo: concerto,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://github.com/Alicesyn/The-Final-Concerto",
    desc: `Developed an original 2D platformer game with a group of 6, producing original music, art, game mechanics, and level designs`,
    technologies: ["C#", "Unity", "Photoshop"]
  },
  {
    id: 5,
    title: "CS:GO Text Mod",
    logo: csgo,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://github.com/Alicesyn/CSGO-Text-Mod",
    desc: `Constructed an open-source anti-cheat friendly mod that color-codes and simplifies in-game text`,
    technologies: ["C++"]
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    logo: crypto,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://github.com/Alicesyn/react-crypto-tracker",
    desc: `Displayed real-time top cryptocurrency prices on a responsive site using Coingecko API`,
    technologies: ["React", "JavaScript", "Axios"]
  },
  {
    id: 7,
    title: "Wine Quality Data Analysis",
    logo: wine,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://gosavehq.com/",
    desc: `Extracted data from Kaggle to implement predictive models that determine key predictors in quality`,
    technologies: ["R", "Kaggle"]
  }
];
