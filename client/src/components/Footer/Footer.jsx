import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import icons as needed

import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaLinks = [
    {
      platform: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/manchestertradingsociety/",
    },
    { platform: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/company/manchester-trading-society/" },
    {
      platform: "Discord",
      icon: faDiscord,
      url: "https://discord.com/invite/9Z27SG436n",
    },
  ];

  const contactLinks = [
    { platform: "Phone", icon: faPhone, content: "+44 7495 721631" },
    { platform: "Email", icon: faEnvelope, content: "manchestertradingsociety@gmail.com" },
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
                
                className="d-flex justify-content-center "
              >
                <div className="flex-column m-5">

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
        </div>

        {/* idk why mt-auto didnt seem to work */}
        <div className="text-center pb-2 mt-lg-5">
          © 2023 Manchester Trading Society Website.
          <br /> All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
