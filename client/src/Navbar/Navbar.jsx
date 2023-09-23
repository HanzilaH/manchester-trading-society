import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
  };

  const handleLinkClick = () => {
    // Remove the "show" class from the collapsible div so that nav bar closes after any link is clicked
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    navbarCollapse.classList.remove("show");
    handleToggleClick();
  };

  return (
    <>
      <nav id="mts-navbar" className="navbar navbar-expand-lg ">
        <div className="container-md container-sm">
          <div id="mts-navbar-logo">
            <img src="logo2.png" alt="Logo" className="navbar-logo" />
          </div>

          <button
            id="custom-toggler"
            className={`navbar-toggler ${isNavbarOpen ? "rotate" : ""}`}
            type="button"
            onClick={handleToggleClick}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={`navbar-toggler-icon  ${isNavbarOpen ? "rotate" : ""}`}
            >
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto ">
              <div className="my-2 mx-4">
                <Link
                  to="/events"
                  aria-current="page"
                  onClick={handleLinkClick}
                  className=" mts-nav-link "
                >
                  Events
                </Link>
              </div>
              <div className="my-2 mx-4">
                <Link
                  onClick={handleLinkClick}
                  to="/gallery"
                  aria-current="page"
                  className=" mts-nav-link "
                >
                  Gallery
                </Link>
              </div>
              <div className="my-2 mx-4">
                <Link
                  onClick={handleLinkClick}
                  to="/team"
                  aria-current="page"
                  className=" mts-nav-link "
                >
                  Team
                </Link>
              </div>
              <div className="my-2 mx-4">
                <Link
                  onClick={handleLinkClick}
                  to="/aboutus"
                  aria-current="page"
                  className=" mts-nav-link "
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
