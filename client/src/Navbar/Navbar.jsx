import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log(isNavbarOpen);
  };

  return (
    <>
      <nav id="mts-navbar" className="navbar navbar-expand-lg ">
        <div className="container-md container-sm">
          <div className="">
            <img
              style={{ height: "1.5rem" }}
              src="logo192.png"
              alt="Logo"
              className="navbar-logo"
            />
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

            <span className={`navbar-toggler-icon  ${isNavbarOpen ? "rotate" : ""}`}><FontAwesomeIcon icon={faBars} />
</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto ">
              <div className="my-2 mx-3">
                <Link
                  to="/articles"
                  aria-current="page"
                  className=" mts-nav-link "
                >
                  Articles
                </Link>
              </div>
              <div className="my-2 mx-3">
                <Link
                  to="/gallery"
                  aria-current="page"
                  className=" mts-nav-link "
                >
                  Gallery
                </Link>
              </div>
              <div className="my-2 mx-3">
                <Link to="/team" aria-current="page" className=" mts-nav-link ">
                  Team
                </Link>
              </div>
              <div className="my-2 mx-3">
                <Link
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