import React, { useState } from "react";
import Close from "../assets/close.svg";

import { GoDotFill } from "react-icons/go";

const PortfolioItem = ({ img, title, desc, featured, technology, links }) => {
  const [popUpModal, setPopUpModal] = useState(false);

  // Create a toggleModal function.
  const toggleModal = () => {
    setPopUpModal(!popUpModal);
  };

  return (
    <>
      <div className="portfolio_item">
        <img className="portfolio_img" src={img} alt="Portfolio image" />

        <div className="portfolio_hover" onClick={toggleModal}>
          <h3 className="portfolio_title">{title}</h3>
        </div>

        {popUpModal && (
          <div className="portfolio_modal">
            <div className="modal_content">
              <img
                className="modal_close"
                src={Close}
                alt="Close icon"
                onClick={toggleModal}
              />

              <h3 className="modal_title">{title}</h3>

              <div className="description">
                <h4>Descriptions : </h4>
                <p>{desc}</p>
              </div>

              <div className="featured">
                <h4>Featured : </h4>

                {featured.map((item, index) => (
                  <p key={index}>
                    {" "}
                    <GoDotFill /> {item.description}
                  </p>
                ))}
              </div>

              <div className="technology">
                <h4>Technologies : </h4>
                <p>{technology}</p>
              </div>

              <div className="links">
                <h4>Links : </h4>
                {links.map((item, index) => (
                  <h5 key={index}>
                    {item.title} : {item.link}
                  </h5>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
