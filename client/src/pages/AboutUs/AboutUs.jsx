import React from "react";
import "./AboutUs.css";
import { useEffect, useState, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  const imageUrl = '/aboutus.jpg';
  const [isVisible, setIsVisible] = useState(false);
  const topImageRef = useRef(null);


  return (
    <>
      <div id="about-us-top-section">

      <div id="about-us-title">
          <h2 className="display-4">About Us</h2>
        </div>
        <div id="about-us-background">

        </div>
          <img className="right-animation" id="about-us-top-image" src={imageUrl} alt="" />

      </div>
      <div id="about-us-info-section">
        <div className="display-6">Mission</div>
        <div className="about-us-text mt-4">
          MTS is a relatively new soceity at the University of Manchester. Two
          core principles lie at the center of the Club: the desire to produce
          professional, high quality content, and the desire to bring value to
          our members and to the greater Bocconi community.
        </div>

        <div className="display-6 mt-5">The vision</div>
        <div className="about-us-text mt-4">
          The founding members of MTS believed that finance and trading were not
          just academic subjects but also practical skills that could greatly
          benefit students in their future careers. They envisioned a society
          that would bridge the gap between classroom learning and real-world
          application, providing students with the opportunity to apply their
          knowledge and develop trading strategies.
        </div>
        <div className="display-6 mt-5">Growth and achievements</div>
        <div className="about-us-text mt-4">
          As the word spread about the Manchester Trading Society, its
          membership began to grow steadily. Weekly meetings, workshops, and
          trading simulations became regular activities, providing members with
          valuable hands-on experience. MTS also started organizing guest
          lectures and seminars by industry professionals, giving students the
          chance to learn from experts in the field. Over the years, MTS gained
          recognition not only within the university but also in the broader
          financial community. The society's achievements in various trading
          competitions and its members' success in securing internships at
          renowned financial institutions bolstered its reputation.
        </div>

        <div id="about-us-to-team-button" className="mt-5">
          Learn more about the team
          <button onClick={() => navigate("/team")}>
            <FontAwesomeIcon icon={faArrowRight} beat />
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
