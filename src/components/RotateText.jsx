
import React from "react";
import "./RotateText.css";
import { NavLink } from "react-router-dom";

export default function RotateText() {
  const text = "R e s u m e      R e s u m e    ";
  // console.log("text", text);

  const Letter = text.split("");
  const resumeText = "https://drive.google.com/file/d/18EfDSVPXgsmgNIn_WYoLKBvBqHCLTmfV/preview"


  return (
    <div className="RotateText">

      
<NavLink 
    to={resumeText}
    target="_blank"
    rel="noopener noreferrer"
    >
   <div className="docx">
  <span className="material-symbols-outlined text-7xl swing-icon">
    docs
  </span>
</div>
    </NavLink>



      <section>
        {Letter.map((item, index) => {
          return (
            <span
              key={index}
              className="letter"
              style={{
                transform: `rotate(${index * 10.5}deg)`
              }}
            >
              {item}
            </span>
          );
        })}
      </section>
    <NavLink 
    to={resumeText}
    target="_blank"
    rel="noopener noreferrer"
    >
    <div className="h-12 w-12 bg-white rounded-full circle "></div>
    </NavLink>
    </div>
  );
}
