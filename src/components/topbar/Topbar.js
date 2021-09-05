import "./topbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Topbar({ setMenuOpen, menuOpen }) {
  const [opted, setOpted] = useState("home");

  const lists = [
    {
      id: "home",
      title: <a href="#intro">Home</a>,
    },
    {
      id: "aboutme",
      title: <a href="#aboutme">About</a>,
    },
    {
      id: "portfolio",
      title: <a href="#portfolio">Portfolio</a>,
    },
    {
      id: "slills",
      title: <a href="#skills">Skills</a>,
    },
    {
      id: "contact",
      title: <a href="#contact">Contact</a>,
    },
  ];

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="top-text">
        <div className="left">
          <a href="#intro" className="logo">
            Zia.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span className="span">+46 720 450 414</span>
          </div>

          <div className="itemContainer">
            <MailIcon className="icon" />
            <span className="span">ursziakhan@yahoo.com</span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row-reverse">
        <div className="right-menu">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        <Nav className="p-2">
          <Nav.Link href="#intro" className="active">
            Home
          </Nav.Link>
          <Nav.Link href="#aboutme" className="active">
            About
          </Nav.Link>
          <Nav.Link href="#portfolio" className="active">
            Portfolio
          </Nav.Link>
          <Nav.Link href="#skills" className="active">
            Skills
          </Nav.Link>
          <Nav.Link href="#contact" className="active">
            Contact
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default Topbar;
