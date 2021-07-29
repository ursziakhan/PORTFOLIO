import React from "react";
import "./skills.scss";
import { skills } from "../../SkillsData";

function Skills() {
  return (
    <div
      className="skills"
      id="skills"
      style={{
        backgroundImage: "url(/assets/back.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1>Skills Box</h1>
      </div>
      <div className="container">
        <div className="images">
          {skills.map((data) => (
            <div className="text">
              <img src={data.img} alt="" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
