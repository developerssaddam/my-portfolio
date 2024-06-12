import Work1 from "../../assets/project-1.jpeg";
import { Link } from "react-router-dom";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section">
        <h2 className="contact_section_title">
          My <span>Portfolio</span>
        </h2>

        <div className="portfolio_container container grid">
          <Link to="/">
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={Work1}
                alt="Portfolio image"
              />

              <div className="portfolio_hover">
                <h3 className="portfolio_title">{"Title"}</h3>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={Work1}
                alt="Portfolio image"
              />

              <div className="portfolio_hover">
                <h3 className="portfolio_title">{"Title"}</h3>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={Work1}
                alt="Portfolio image"
              />

              <div className="portfolio_hover">
                <h3 className="portfolio_title">{"Title"}</h3>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={Work1}
                alt="Portfolio image"
              />

              <div className="portfolio_hover">
                <h3 className="portfolio_title">{"Title"}</h3>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={Work1}
                alt="Portfolio image"
              />

              <div className="portfolio_hover">
                <h3 className="portfolio_title">{"Title"}</h3>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="portfolio_item">
              <img
                className="portfolio_img"
                src={Work1}
                alt="Portfolio image"
              />

              <div className="portfolio_hover">
                <h3 className="portfolio_title">{"Title"}</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
