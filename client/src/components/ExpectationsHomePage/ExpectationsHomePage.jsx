import React from "react";
import "./ExpectationsHomePage.css";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ExpectationsHomePage = () => {
  return (
    <>
      <div id="expectations-home-page">
        <div className="d-flex align-items-center  mb-3">
          {/* the css for the square is in the home.css */}
          <div className="square"></div>
          <div id="expectations-home-page-at-a-glance">At a glance</div>
        </div>

        <div id="expectations-home-page-title" className="display-5 mb-4">
          Expectations
        </div>
        <div id="expectations-home-page-description">
          <div className="mt-3">
            <h5>Reasons for joining:</h5>
            <ul className="m-0 p-3">
              <li>Learn useful in work or additional income generation</li>
              <li>
                Network (get to witness Whiplash type of obsession if lucky)
              </li>
              <li>Learn useful in work or additional income generation</li>
            </ul>
          </div>
          <div className="mt-3">
            <h5>What we expect:</h5>
            <ul className="m-0 p-3">
              <li>
                Commitment LIe., keep showing up. Just keep showing up, don't
                quits
              </li>
              <li>
                Engagement Ask Qs, interact with others, speak, we don't bite
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpectationsHomePage;
