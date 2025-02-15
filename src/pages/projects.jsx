import React from "react";
import projectsData from "../components/projectsdata";

const handleOpen = (prop) => {
  window.open(prop, "_blank"); 
};


const Projects = () => {
  return (
    <div className="experience-container">
     <h1 className="experience-title">Projects</h1>
      {projectsData.map((project, index) => (
                <div key={index} className="experience-card">
                <div class="experience-card-upper">
                <div className="tech-list">

                {project.technologies.map((tech, i) => (
                <span key={i} className="tech-item">
                  {tech.icon ? (<img src={tech.icon} alt={tech.name} width="20" height="20" />) : tech.name}    
                </span>
                  ))}
          </div>
                          <h3> {project.date}</h3>
                </div>
      
          <h3>{project.title}</h3>

          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="buttons">
          {project.repo && (
          <button className="btn" type="button"  onClick={() => handleOpen(project.repo)}>Repo
          </button>
          )}
            {project.documentation && (
                <button className="btn" type="button" onClick={() => handleOpen(project.documentation)}>
              Documentation
              </button> 
            )}
                      </div>

                      <div class="media"> 
            {project.video && (<iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/sHWl_9njJxg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen/>)} 
                                </div>
                      <div class="media"> 
            {project.image && (<img width="560" height="315" 
                        src="assets/projects/Schematic.png" />)} 
                                </div>
        </div>

        
      ))}
    </div>
  );
};

export default Projects;
