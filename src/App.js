import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Aboutme from "components/aboutme/Aboutme";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <div>
        <Menu className="menu" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Topbar
            className="topbar"
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <Intro className="intro" />
          <Aboutme className="aboutme" />
          <Portfolio className="portfolio" />
          <Skills className="skills" />
          <Contact className="contacts" />
        </div>
      </div>
    </div>
  );
}

export default App;
