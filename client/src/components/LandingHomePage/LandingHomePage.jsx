import React, { useEffect } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./LandingHomePage.css";
import { useState } from "react";

function LandingHomePage() {
  const [showText, setShowText] = useState(false);

  setTimeout(() => {
    setShowText(true);
  }, 500);

  const redirectToStudentUnionWebsite = () => {
    window.location.href =
      "https://manchesterstudentsunion.com/activities/view/trading-society";
  };

  return (
    <div id="landing-home-page-container">
      <div id="blue-section" className={showText ? "expanded" : ""}>
        <div className="rectangle-landing-home-page"></div>

        <div
          className={
            showText
              ? "fade-in landing-home-page-jumbotron"
              : "landing-home-page-jumbotron"
          }
        >
          <div className="row">
            <div className="mx-auto">
              <div className="text-center">
                <h1
                  id="landing-home-page-title"
                  className=" mb-3 mx-5 display-3"
                >
                  Manchester Trading Society
                </h1>
                <p className="lead mx-5">
                  “Financial freedom is available to those who learn about it
                  and work for it.”
                </p>

                <hr className="my-4" />
                <p>Explore a world of financial expertise.</p>
              </div>
            </div>



          </div>


        </div>
          {/* <div className="d-flex justify-content-center">

            <button
              id="landing-home-page-button"
              onClick={redirectToStudentUnionWebsite}
            >
              Join us


            </button>
            </div> */}
      </div>
    </div>
  );
}

export default LandingHomePage;
