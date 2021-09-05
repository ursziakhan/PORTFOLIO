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

Modal.setAppElement("#root");
function Portfolio({}) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [modalIsOpenID, setModalIsOpenID] = useState("");

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
      title: "UI/UX Designs",
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
      case "UI/UX Designs":
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
            <h2>{d.title}</h2>
            <img
              className="modimg"
              src={d.img}
              onClick={() => setModalIsOpenID(d.id)}
              alt=""
            />
            <button
              className="btn-2"
              onClick={() => setModalIsOpenID(d.id)}
            ></button>
            <Modal
              isOpen={modalIsOpenID === d.id}
              onRequestClose={() => setModalIsOpenID(false)}
              style={{
                overlay: {
                  position: "absolute",
                  left: "50%",
                  width: "80%",
                  hieght: "60%",
                  objectFit: "cover",
                  borderWidth: "2px red",
                  backgroundSize: "fill",
                  overFlow: "hidden",
                  position: "fixed",

                  transform: "translate(-50%, 0%)",
                },
              }}
            >
              <button
                className="closeBtn"
                style={{
                  border: "4px solid red",
                  display: "flex",
                  marginLeft: "50%",
                  borderRadius: "4px",
                }}
                onClick={() => setModalIsOpenID(false)}
              >
                Close
              </button>
              <img className="modimg" src={d.img} alt="" />
              <button
                className="closeBtn"
                style={{
                  border: "4px solid red",
                  display: "flex",
                  marginLeft: "50%",
                  borderRadius: "4px",
                }}
                onClick={() => setModalIsOpenID(false)}
              >
                Close
              </button>
            </Modal>
          </div>
        ))}
      </div>
      <div className="downarrow">
        <a href="#skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
