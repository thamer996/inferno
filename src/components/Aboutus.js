import React from "react";
import "./Aboutus.css";

const teamMembers = [
  { name: "David Horobin", image: "/images/david-horobin.jpg" },
  { name: "Glenn Roehl", image: "/images/glenn-roehl.jpg" },
  { name: "Erik Hawkinson", image: "/images/erik-hawkinson.jpg" },
  { name: "John Valentino", image: "/images/john-valentino.jpg" },
  { name: "Miral Eberhart", image: "/images/miral-eberhart.jpg" },
  { name: "David Damon", image: "/images/david-damon.jpg" },
];

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="aboutus-container">
        <h2>About us</h2>
        <p>
          <span className="highlight">Inferno Shutters</span> is powered by{" "}
          <span className="highlight">Sun and Security</span>, a trusted installer and service provider.
        </p>

        <h3>Leadership Team:</h3>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
