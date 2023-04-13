import peterpitch from "assets/images/projects/pp.png";
import notch from "assets/images/projects/notch.png";
import workof from "assets/images/projects/workof.png";
import souq from "assets/images/projects/souq.png";
import gosave from "assets/images/projects/gosave.png";

export const projectsList = [
  {
    id: 1,
    title: "Restaurant Ordering Website",
    logo: peterpitch,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://github.com/COSC4353-group-22/fuel-assignment",
    desc: ``,
    technologies: ["React", "JavaScript", "Express", "Jest", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Augmented Reality Museum",
    link: "https://github.com/Alicesyn/AR-Museum-2",
    logo: notch,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `Created a virtual museum in Unity’s augmented reality, themed under different historical periods
    Utilized Microsoft’s MRTK toolkit to have the app function and deploy on mobile devices and HoloLens`,
    technologies: ["C#", "Unity", "Microsoft MRTK", "Autodesk Maya"]
  },
  {
    id: 3,
    title: "The Final Concerto Game",
    logo: workof,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://workof.com/",
    desc: `Managed a group of 6 to produce original music, art, game mechanics, and level designs, resulting in an ‘A’ for the class after an evaluation from over 20 industry professionals`,
    technologies: ["ruby", "rails", "javascript"]
  },
  {
    id: 4,
    title: "CS:GO Text Mod",
    logo: souq,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://www.souqofqatar.com/",
    desc: `Constructed an open-source anti-cheat friendly mod that color-codes and simplifies in-game text`,
    technologies: ["ruby", "rails", "javascript"]
  },
  {
    id: 5,
    title: "GoSave",
    logo: gosave,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://gosavehq.com/",
    desc: `The GoSave app let's you send allowances, assign chores, and approve spending all from your smartphone. These actions appear on each kid's toy, along with a live bank balance so they can watch their savings grow.`,
    technologies: ["ruby", "rails"]
  }
];
