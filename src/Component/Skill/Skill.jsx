import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill" id="Skill">
      <div className="header-skill">
        <span>Skills</span>
      </div>
      <div className="skill-icons">
        <strong>Programming Languages</strong> JavaScript, Typescript, HTML5, CSS, SQL, JSON
        <br></br>
        <strong>Backend Libraries & Framework</strong> NodeJS, ExpressJS, NextJS
        <br></br>
        <strong>Frontend Libraries & Framework</strong> ReactJS, Bootstrap,
        NextJS<br></br>
        <strong>Tools & Utilities</strong> Git & Github, npm, Bash, Figma, Linux
        shell script and command<br></br>
        <strong>Databases</strong> PostgreSQL, MySQL, MongoDB<br></br>
        <strong>Automated testing</strong> Cypress<br></br>
        <strong>Containerization / Virtualization</strong> Docker
        <strong>Lowcode/ Nocode</strong> Pocketbase
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="header-skill">
        <span className="headproject">Projects</span>
      </div>
    </div>
  );
};

export default Skill;
