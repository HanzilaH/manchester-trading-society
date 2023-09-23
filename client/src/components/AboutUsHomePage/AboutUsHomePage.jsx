import React from "react";
import "./AboutUsHomePage.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutUsHomePage = () => {
  const navigate = useNavigate();
  const onMoreDetailsClick = () => {
    navigate("/aboutus");
  };
  return (
    <>
      <div id="about-us-home-page">
        <div className="d-flex align-items-center mb-3">
          {/* the css for the square is in the home.css */}

          <div className="square"></div>
          <div id="about-us-home-page-heading">About us</div>
        </div>

        <div
          id="about-us-home-page-society-overview"
          className="display-5 mb-4"
        >
          Society overview
        </div>
        <div id="about-us-home-page-description">
          <p>
            We teach you from basic economic theory to more complex portfolio
            optimizing formulae. We invest in stocks, forex, crypto,
            commodities, and if your risk appetite is high enough derivatives as
            well. Here we strive to be concise, efficient, and profitable (not
            financial advice, however).
          </p>
          <p>
            Simply put, people with high-end ambitions in the buy side of the
            market come to meet at MTS. Hence, we select members based on merit,
            engagement, and commitment. Our lectures are open to the public.
            However, our investment analysis meetings, reports, or other related
            materials are reserved for members and staff only.
          </p>
        </div>
        <div id="about-us-home-page-more-details" className="">
          More details
          <button onClick={onMoreDetailsClick}>
            <FontAwesomeIcon icon={faArrowRight} beat />
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsHomePage;
