import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import icons as needed

import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaLinks = [
    {
      platform: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/",
    },
    { platform: "Twitter", icon: faTwitter, url: "https://twitter.com/" },
    {
      platform: "Facebook",
      icon: faFacebook,
      url: "https://www.facebook.com/",
    },
  ];

  const contactLinks = [
    { platform: "Phone", icon: faPhone, content: "+1 (123) 456-7890" },
    { platform: "Email", icon: faEnvelope, content: "info@example.com" },
    // {
    //   platform: "President Email",
    //   icon: faEnvelope,
    //   content: "president@example.com",
    // },
  ];

  const handleSocialLinkClick = (url) => {
    // Implement your logic for handling the onClick event here (e.g., opening the link).
    window.open(url, "_blank");
  };

  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md mt-5">
              <div className="text-center display-6">
                Manchester Trading Society
              </div>

              <div className="d-flex justify-content-center ">
                <div id="footer-socials" className="d-flex flex-column m-5">
                  {socialMediaLinks.map((link, index) => (
                    <div
                      className="footer-social-links"
                      key={index}
                      onClick={() => handleSocialLinkClick(link.url)}
                    >
                      <FontAwesomeIcon icon={link.icon} />
                      <div>{link.platform}</div>
                    </div>
                  ))}
                </div>
                <div id="footer-pages" className="d-flex flex-column m-5">
                  <Link to="/gallery" className="footer-page-link">
                    Gallery
                  </Link>
                  <Link to="/team" className="footer-page-link">
                    Team
                  </Link>
                  <Link to="/aboutus" className="footer-page-link">
                    About us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md mt-5">
              <div className="text-center display-6">Contact</div>

              <div
                id="footer-socials"
                className="d-flex  align-items-center flex-column m-5"
              >
                {contactLinks.map((link, index) => (
                  <div className="contact-item" key={index}>
                    <FontAwesomeIcon icon={link.icon} />
                    <div>{link.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* idk why mt-auto didnt seem to work */}
        <div className="text-center mt-lg-5">
          © 2023 Manchester Trading Society Website.
          <br /> All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
