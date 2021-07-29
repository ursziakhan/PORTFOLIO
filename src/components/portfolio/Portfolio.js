import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-modal";

import {
  featuredPortfolio,
  webPorjectPortfolio,
  designPortfolio,
  phpPortfolio,
  mgtPortfolio,
  businesSkillPortfolio,
} from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const list = [
    {
      id: "featured",
      title: " Featured",
    },
    {
      id: "projects",
      title: " Web Projects",
    },
    {
      id: "web",
      title: "Ui/Ux Designs",
    },
    {
      id: "wpphp",
      title: "WordPress & PHP",
    },
    {
      id: "mgt",
      title: "Agile Project Mgt",
    },
    {
      id: "skills",
      title: "Business Skills",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "projects":
        setData(webPorjectPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "wpphp":
        setData(phpPortfolio);
        break;
      case "mgt":
        setData(mgtPortfolio);
        break;
      case "skills":
        setData(businesSkillPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-top">
        <div className="jumbotron">
          <h1>Portfolio</h1>
        </div>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <button className="btn-2" onClick={() => setModalIsOpen(true)}>
              View
            </button>
            <h2>{d.title}</h2>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <img src={d.img} alt="" />

              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
