import * as React from "react";
import "style/style.css";
import About from "./about";
import {projectsList} from "../data/projects-list";
import Projects from "./projects";
import Intro from "./intro";
import TechStack from "./tech-stack";

const Home = () => {
  return (
      <div>
        <Intro/>
          <br/>
        <About />
          <br/>
        <Projects projects={projectsList} />
          <br/>
        <TechStack />
      </div>
  );
};

export default Home;
