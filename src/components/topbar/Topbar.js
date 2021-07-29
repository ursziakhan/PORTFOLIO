import "./topbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

function Topbar({ setMenuOpen, menuOpen }) {
  const list = [
    {
      id: "home",
      title: <a href="#intro">Home</a>,
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

      <div className="navigation-container">
        {list.map((data) => (
          <ul>
            <li>
              <li>
                <a>{data.title}</a>
              </li>
            </li>
          </ul>
        ))}
        ;
        <div className="right-menu">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
