import React, { useEffect } from "react";
import "./AboutUsHomePage.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from 'scrollreveal';

const AboutUsHomePage = () => {
  const navigate = useNavigate();
  const onMoreDetailsClick = () => {
    navigate("/aboutus");
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
    })

    sr.reveal(`#about-us-home-page-heading`,{origin: 'right', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`.square`,{origin: 'left', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`#about-us-home-page-society-overview`,{origin: 'right', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`.about-us-home-page-description-p`,{origin: 'left', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`#about-us-home-page-more-details`,{origin: 'left', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`#about-us-home-page-more-details button`,{origin: 'left', distance: '30px', duration: 2000, interval: 200})
  }, [])

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
          Society Overview
        </div>
        <div id="about-us-home-page-description">
          <p className="about-us-home-page-description-p">
            We teach you from basic economic theory to more complex portfolio
            optimizing formulae. We invest in stocks, forex, crypto,
            commodities, and if your risk appetite is high enough derivatives as
            well. Here we strive to be concise, efficient, and profitable (not
            financial advice, however).
          </p>
          <p className="about-us-home-page-description-p">
            Simply put, people with high-end ambitions in the buy side of the
            market come to meet at MTS. Hence, we select members based on merit,
            engagement, and commitment. Our lectures are open to the public.
            However, our investment analysis meetings, reports, or other related
            materials are reserved for members and staff only.
          </p>
        </div>
        <div id="about-us-home-page-more-details" className="">
          More details
          <button className="home-arrow-icon" onClick={onMoreDetailsClick}>
            <FontAwesomeIcon icon={faArrowRight} beat />
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsHomePage;
