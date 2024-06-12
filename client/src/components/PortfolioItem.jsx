import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
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

              <ul className="modal_list grid">
                {details.map((item, index) => {
                  return (
                    <>
                      <li className="modal_item" key={index}>
                        <span className="item_icon">{item.icon}</span>

                        <div>
                          <span className="item_title">{item.title}</span>
                          <span className="item_details">{item.desc}</span>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>

              <img src={img} alt="" className="modal_img" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
