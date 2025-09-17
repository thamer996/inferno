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
      </div>
    </section>
  );
};

export default Afterbefore;
