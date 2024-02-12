import React from "react";
import "./Team.css";
import TeamMemberCard from "../../components/TeamMemberCard/TeamMemberCard";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
const Team = () => {
  const teamJson = [
    {
      name: "Pedro",
      role: "President",
      description:
        "Someday, someone will remember you for the last time; and from that day forward, no one ever will. To avoid becoming average, thus, I started investing to earn wealth and do something meaningful with the purpose I give life. I plan to work at a Hedge fund, run for presidency in Peru, grow Quinoa, and own a university. Unlike most, I like to quantify data because it eliminates the subjectivity that contains moral superiority complexes or the use of perceived injustices that hinder true development.",
      linkedIn: "https://www.linkedin.com/",
      photoUrl: "/pedro.jpg",
    },
    {
      name: "Mustafa",
      role: "Head of Outreach",
      description:
        "Don’t want this to sound like a life plan, but I'm Mustafaa; finance Macroholic who plans to work at finance and data analytics by breaking into Corporate Banking. I want to finish my degree and leave the UK because, seriously, who wouldn't? Taxes are too high here fr. If you're horny hit me. I'm lonely [@🇵🇪Pedro F. tells me I'll sleep with the fishes if this really happens]. My lifelong dream is to be a fish. Pedro is Love, Pedro is Life.",
      linkedIn: "https://www.linkedin.com/",
      photoUrl: "/mustafa.jpg",
    },
    {
      name: "Marco",
      role: "Head of Outreach",
      description:
        "Enjoy taking challenges, and trading is very interesting to me. Also found it frustrating and difficult to watch Manchester United games in the past few years. I am trying to learn and earn more, to buy football tickets, or even the club if I can. I am excited to meet everyone with the same interest and ideas, make friends and form memories together in the coming semester. Maybe, also earn together? ",
      linkedIn: "https://www.linkedin.com/",
      photoUrl: "/marco.png",
    },

    {
      name: "Pranjay T.",
      role: "Vice president",
      description: "Some long explanation that i could not scan",
      linkedIn: "https://www.linkedin.com/",
      photoUrl: "/pranjay.jpg",
    },
    {
      name: "Rui Z.",
      role: "Head of Treasury",
      description: "Some long explanation that i could not scan",
      linkedIn: "https://www.linkedin.com/",
      photoUrl: "/rui.png",
    },
    // {
    //   name: "Kelly H.",
    //   role: "Executive secretary",
    //   description:
    //     "I love swimming and kimchi. I dislike people who judge others without context because they assume that some have choices that others do not. Once finishing my master I would like to begin from zero in management to eventually start my own company. Aside, I feel unable to socialize sometimes as I am quite shy. However, I am working on that 🫠.",
    //   linkedIn: "https://www.linkedin.com/",
    //   photoUrl: "/home1.jpg",
    // },
    {
      name: "Hanzila H.",
      role: "Technology head",
      description: "The man who single handedly made this website",
      linkedIn: "https://www.linkedin.com/",
      photoUrl: "/hanzila.jpeg",
    },
  ];


  // {
  //   name: "Robert",
  //   role: "Head of Operations",
  //   description:
  //     "Outside of my Economics and Finance interest I enjoy, almost everything, connected to motorsport. I love driving a car, both on road and on track. As a child I used take part in go-karts competitions and it was a great experience. I could probably say that my favourite car brand is a BMW. I'll I look forward to meet You all",
  //   linkedIn: "https://www.linkedin.com/",
  //   photoUrl: "/home1.jpg",
  // },


    useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
      reset: true,

      
    })

    sr.reveal(`.team-member-card`,{origin: 'right', distance: '50px', duration: 2000, interval: 50})
    // sr.reveal(`.square`,{origin: 'top', distance: '50px', duration: 2000, interval: 200})
    // sr.reveal(`#about-us-home-page-society-overview`,{origin: 'left', distance: '50px', duration: 2000, interval: 200})
    // sr.reveal(`#about-us-home-page-description`,{origin: 'left', distance: '50px', duration: 2000, interval: 200})
    // sr.reveal(`#about-us-home-page-more-details`,{origin: 'left', distance: '50px', duration: 2000, interval: 200})
    // sr.reveal(`#about-us-home-page-more-details button`,{origin: 'left', distance: '30px', duration: 4000, interval: 200})
            
  }, [])

  return (
    <>
      <div id="team-container">
        <div className="display-6">Committee Members</div>
        <div className="container">
          <div className="row pb-5 justify-content-center">
          {teamJson.map((member, index) => (
  <TeamMemberCard
    key={index}
    memberName={member.name}
    memberRole={member.role}
    memberDescription={member.description}
    memberLinkedIn={member.linkedIn}
    memberPhotoName={member.photoUrl}
  />
))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
