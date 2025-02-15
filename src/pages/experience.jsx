import React from "react";
import experienceData from "../components/experiencedata";

const handleOpen = (prop) => {
  window.open(prop, "_blank"); 
};


function Experience(){
return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>

      {experienceData.map((experience, index) => (
        <div key={index} className="experience-card">
          <div class="experience-card-upper">
          <h3>{experience.title}</h3>
          <h3> {experience.date}</h3>


          </div>
          <h3>{experience.company}</h3>

          <div class="experience-card-lower">
          <ul>
            {experience.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {experience.certificate && (
            <div className="buttons">
          <button className="btn" type="button" onClick={() => handleOpen(experience.certificate)}>
            Certificate
          </button> 
            </div>
          )}
          </div>
        </div>
        
      ))}
    </div>
);
};

export default Experience;