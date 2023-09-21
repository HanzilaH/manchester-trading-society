import React from "react";
import './Home.css'
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MainPageAnimation from "../../components/MainPageAnimation/MainPageAnimation";
const Home = () => {
  return (
  <>
    <div id="home-div"  >
    {/* <MainPageAnimation></MainPageAnimation> */}
      <Carousel/>
      <Jumbotron/>








  </div>

  </>
    )
};

export default Home;
