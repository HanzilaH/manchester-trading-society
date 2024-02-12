import React from "react";
import "./TeamMemberCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamMemberCard = ({
  memberName,
  memberRole,
  memberDescription,
  memberLinkedIn,
  memberPhotoName,
  reverseCard,
}) => {
  const linkedInUrl = "https://www.linkedin.com/in/your-linkedin-profile";

  return (



    <div className="col-md d-flex justify-content-center">

      <div class="team-member-card card">
        <div class="card-border-top">.</div>
        <img src={memberPhotoName} class="img" />
        <span> {memberName}</span>
        <p class="job"> {memberRole}</p>
        <p class="team-member-card-description"> {memberDescription}</p>

        <button>
          <a href={memberLinkedIn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="team-member-card-linkedin-icon"
            />
          </a>
        </button>
      </div>
    </div>

  );
};

export default TeamMemberCard;
