import "./app.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Menu className="menu" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Topbar
          className="topbar"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Intro classNam="introduction" />
        <Portfolio classNam="port" />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
