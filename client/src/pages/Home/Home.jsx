import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MainPageAnimation from "../../components/MainPageAnimation/MainPageAnimation";
import AboutUsHomePage from "../../components/AboutUsHomePage/AboutUsHomePage";
import ExpectationsHomePage from "../../components/ExpectationsHomePage/ExpectationsHomePage";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const navigate = useNavigate();
  function GoogleRedirect() {
    // Redirect to Google when this route is matched
    window.location.href = "https://www.google.com";
    return null; // This component won't be rendered
  }

  return (
    <>
      <div id="home-div">
        {/* <MainPageAnimation></MainPageAnimation> */}
        <Carousel />
        <Jumbotron />
        <AboutUsHomePage />

        {/* this container info about the presents membership at the society */}
        <div id="home-info-container">
          <div className="w-100  row justify-content-center">
            <div className="col-md-3 text-center my-3">
              <div className="display-5 ">2</div>
              years of activity
            </div>
            <div className="col-md-3 text-center my-3">
              <div className="display-5 ">200+</div>
              members
            </div>
            <div className="col-md-3 text-center my-3">
              <div className="display-5 ">20+</div>
              committee
            </div>
          </div>
        </div>

        <ExpectationsHomePage />
        <hr className="mx-5" />

        {/* this contains info about the upcoming events in two cards */}
        <div id="home-events-container">
          <div className="display-5">Upcoming Events</div>

          <div class="container ">
            <div class="row justify-content-around gy-3">
              <div class="col-md-5">
                <div class="home-events-card">
                  <img src="/home1.jpg" class="card-img-top" alt="..." />
                  <div class="home-events-card-body">
                    <h5>Some event</h5>
                    <p>
                      Some long boring tedious irrelevant promotional
                      explanation.
                    </p>
                    <button
                      onClick={GoogleRedirect}
                      className="home-events-card-button"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="home-events-card">
                  <img src="/home1.jpg" class="card-img-top" alt="..." />
                  <div class="home-events-card-body">
                    <h5>Some other event</h5>
                    <p>
                      Some long boring tedious irrelevant promotional
                      explanation
                    </p>
                    <button
                      onClick={GoogleRedirect}
                      className="home-events-card-button"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* this is just for the 'More events' icon at the end of the home-events section */}
          <div
            id="events-home-page-more-events-icon"
            className="text-end p-4 m-4"
          >
            More Events
            <button onClick={() => navigate("/events")}>
              <FontAwesomeIcon
                className="home-arrow-icon"
                icon={faArrowRight}
                beat
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
