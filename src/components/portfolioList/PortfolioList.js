import "./portfolioList.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

import React from "react";

function PortfolioList({ active, setSelected, title, id }) {
  return (
    <div
      className="portfolio-menu"
      className={active ? "portfolio-menu active " : "portfolio-menu"}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
}

export default PortfolioList;
