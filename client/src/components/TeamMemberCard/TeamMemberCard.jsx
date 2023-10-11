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

  //   const leftPhotoCard = (
  //     <>
  //       <div className="col-6 col-md-5 col-sm-7">
  //         <img
  //           src="/home1.jpg"
  //           style={{ height: "100%", objectFit: "cover" }}
  //           className="card-img img-fluid rounded-start"
  //           alt=""
  //         />
  //       </div>
  //       <div class="col-6 col-md-7 col-sm-5">
  //         <div class="card-body d-flex flex-column">
  //           <div>
  //             <h3 class="card-title">Name</h3>
  //             <h5 class="card-title">Position</h5>
  //             <p class="card-text">Longgggggg description</p>
  //             <a href="appointment.html" class="btn btn-primary">
  //               LinkedIn
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  //   const rightPhotoCard = (
  //     <>
  //       <div class="col-6 col-md-7 col-sm-5">
  //         <div class="card-body d-flex flex-column">
  //           <div>
  //             <h3 class="card-title">Name</h3>
  //             <h5 class="card-title">Position</h5>
  //             <p class="card-text">Longgggggg description</p>
  //             <a href="appointment.html" class="btn btn-primary">
  //               LinkedIn
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col-6 col-md-5 col-sm-7">
  //         <img
  //           src="/home1.jpg"
  //           style={{ height: "100%", objectFit: "cover" }}
  //           class="card-img img-fluid rounded-start"
  //           alt=""
  //         />
  //       </div>
  //     </>
  //   );

  return (
    // <div className={`row m-3 ${reverseCard ? "justify-content-end" : ""}`}>
    //   <div class="col-lg">
    //     <div class="card reveal animate-fade-in">
    //       <div class="row g-0">
    //         {reverseCard ? rightPhotoCard : leftPhotoCard}
    //       </div>
    //     </div>
    //   </div>
    // </div>





    <div className="col-md d-flex justify-content-center">
    {/* <div class="myCard">
    <div class="innerCard">
        <div class="frontSide">
            <p class="title"> {memberName}</p>
            <p class="job"> {memberRole}</p>
        </div>
        <div class="backSide">
            <p class="title">BACK SIDE</p>
            <p>Leave Me</p>
        </div>
    </div>
</div> */}

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
