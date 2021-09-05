import React from "react";
import "./aboutme.scss";
import lia from "../../lia.pdf";

function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="image" id="image">
        <div className="pic">
          <img src="assets/122.png" />
        </div>
      </div>

      <div className="details">
        <div className="heading">
          <h2>About Me</h2>
        </div>
        <div className="para">
          <p>
            I am studying in the final semester of the Web Development
            E-commerce, a high vocational program (yrkeshögskola) at Changemaker
            Educations in Boden. I have been given tasks and projects to be
            creative considering modern web era and e-commerce challenges.
            <br></br>
            During training, I have been using diverse tools and programming
            languages, e.g., HTML, CSS, Bootstrap, WordPress, GIT, Javascript,
            React, PHP, Visual studio Code and designing tools like Figma and
            Canva.<br></br>
            For innovative web and e-commerce challenges, I am eager to join a
            company for my LIA for 24 weeks, which hopefully leading to exciting
            job and projects.
          </p>
          <h2>LIA Internship</h2>
          <p>
            LIA stands for Lärande i Arbete (Learning while Working) which is
            one of the most crucial and comprehensive workplace based part of
            eudcation. LIA is staring from 20 Jan 2022 and will completed in 24
            weeks.
          </p>
          <div>
            <a className="lia" href={lia}>
              <button variant="primary"> Download </button>
            </a>
          </div>
          <div className="downarrow">
            <a href="#portfolio">
              <img src="assets/down.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
