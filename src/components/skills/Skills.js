import React from "react";
import "./skills.scss";
import { skills } from "../../SkillsData";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="left">
        <div className="newimg">
          <img src="assets/skill.jpeg" />
        </div>
      </div>

      <div className="right">
        <div className="description">
          <h1>Skills</h1>
          <p>
            The following technologies I use when bringing ideas to life in
            digital form.
          </p>
        </div>

        <div className="right1">
          {skills.map((data) => (
            <div className="text">
              <h3>{data.title}</h3>
              <img src={data.img} alt="" />
            </div>
          ))}
        </div>
        <div className="downarrow">
          <a href="#contact">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
