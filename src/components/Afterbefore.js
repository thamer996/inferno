import React from "react";
import "./Afterbefore.css"; // Import CSS file

const Afterbefore = () => {
  return (
    <section className="afterbefore">
      <div className="afterbefore-container centered-image">
        <img 
          src={`${process.env.PUBLIC_URL}/images/after.png`} 
          alt="After and Before" 
        />
        {/* Buttons below the image */}
        <div className="afterbefore-buttons">
          <button className="btn-left">Before</button>
          <button className="btn-right">After</button>
        </div>
      </div>
    </section>
  );
};

export default Afterbefore;
