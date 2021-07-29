import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <div
      class="portfolio-menu"
      className={active ? "portfolio-menu active " : "portfolio-menu"}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
}
