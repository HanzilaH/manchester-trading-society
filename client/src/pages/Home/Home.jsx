import React, { useEffect } from "react";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import LandingHomePage from "../../components/LandingHomePage/LandingHomePage";
import MainPageAnimation from "../../components/MainPageAnimation/MainPageAnimation";
import AboutUsHomePage from "../../components/AboutUsHomePage/AboutUsHomePage";
import ExpectationsHomePage from "../../components/ExpectationsHomePage/ExpectationsHomePage";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const { ref: statisticsContainer, inView: myElementIsVisible } = useInView();

  const navigate = useNavigate();
  function GoogleRedirect() {
    // Redirect to Google when this route is matched
    window.location.href = "https://www.google.com";
    return null; // This component won't be rendered
  }

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
    })

    sr.reveal(`.changing_number`,{origin: 'top', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`.changing_number_description`, {origin: 'bottom', distance: '50px', duration: 2000, interval: 200})
    sr.reveal(`.home-events-card`, {origin: 'left', distance: '30px', duration: 2000, interval: 300})
  }, [])

  return (
    <>
      <div  id="home-div">
        <LandingHomePage/>
        {/* <Carousel /> */}
        {/* <Jumbotron /> */}
        <AboutUsHomePage />

        {/* this container info about the presents membership at the society */}
        <div ref={statisticsContainer} id="home-info-container">
          <div className="w-100  row justify-content-center">
            <div className="col-md-3 text-center my-3">
              <div className="display-5 changing_number">{myElementIsVisible ? <Number n={2}/> : <span>0</span>}</div>
              <div className="changing_number_description">years of activity</div>
            </div>
            <div className="col-md-3 text-center my-3">
              <div className="display-5 changing_number">{myElementIsVisible ? <Number n={500}/> : <span>0</span>}+</div>
              <div className="changing_number_description">members</div>
            </div>
            <div className="col-md-3 text-center my-3">
              <div className="display-5 changing_number">{myElementIsVisible ? <Number n={10}/> : <span>0</span>}</div>
              <div className="changing_number_description">committee</div>
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
