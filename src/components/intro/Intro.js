import "./intro.scss";
import { init } from "ityped";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import resume from "../../resume.pdf";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Intro() {
  const texRef = useRef();
  useEffect(() => {
    init(texRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "< Web Developer for e-commerce apps & solutions />",
        "< Front-end Developer />",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/122.png" />
        </div>
      </div>

      <div className="right">
        <div className="text-box">
          <h2>Hi There, I'm</h2>
          <h1>Ziaullah Sahibzada</h1>
          <h3>
            <span class className="ref" ref={texRef}></span>
          </h3>
          <p>
            "Front end web developer, with hands-on web programming,
            communications, and UX/UI designs by completing different School
            projects. Also possess Business development background, with
            effective perceptual, communication, analytical, problem-solving
            skills"
          </p>
        </div>
        <div className="cv">
          <a className="cv1" href={resume}>
            <Button variant="primary">Download Resume</Button>
          </a>
        </div>

        <div className="social-container">
          <a
            href="https://www.linkedin.com/in/ziaullah-sahibzada-08b8891a7/"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </a>

          <a
            href="https://github.com/ursziakhan?tab=repositories"
            className="github social"
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" />
          </a>

          <a
            href="https://www.facebook.com/ursziakhan"
            className="facebook social"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
          </a>
        </div>

        <div className="downarrow">
          <a href="#aboutme">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
