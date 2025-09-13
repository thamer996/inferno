import React from "react";
import "./Aboutus.css";

const teamMembers = [
  { name: "David One", job: "CEO & CO-Founder", image: "/images/davidone.png" },
  { name: "Glenn Roehl", job: "CO-FOUNDER & VP", image: "/images/glenn.png" },
  { name: "Eric Hawkinson", job: "CMO", image: "/images/eric.png" },
  { name: "John Valentino", job: "COO", image: "/images/john.png" },
  { name: "Miral Eberhart", job: "Manager", image: "/images/miral.png" },
  { name: "David Damon", job: "CTO", image: "/images/david.png" },
];

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="aboutus-container">
        <h2>About Us</h2>
      <p>
  Inferno Shutters is powered by <span className="highlight">Sun and Security</span>, a trusted installer and service provider.
</p>



        <h3>Leadership Team:</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
  <img src={member.image} alt={member.name} className="team-image" />
  <h3 className="team-name">{member.name}</h3>
  <h4 className="team-job">{member.job}</h4>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
