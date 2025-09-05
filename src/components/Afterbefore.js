import React from "react";
import "./Afterbefore.css"; // Import CSS file

const Afterbefore = () => {
  return (
    <section className="afterbefore">
      <div className="afterbefore-container">
        {/* Left Image (bigger) */}
        <div className="image-box big">
          <img src="/images/+5000.png" alt="5000 installations" />
          <h3>+5000 Installations</h3>
        </div>

        {/* Right Image (smaller) */}
        <div className="image-box">
          <img src="/images/after-before.png" alt="After and Before" />
          <h3>Before & After</h3>
        </div>
      </div>
    </section>
  );
};

export default Afterbefore;
