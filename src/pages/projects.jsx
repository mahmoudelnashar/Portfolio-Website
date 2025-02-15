import React from "react";
import projectsData from "../components/projectsdata";

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p><strong>Date:</strong> {project.date}</p>
          <p><strong>Technologies:</strong></p>
          <ul>
            {project.technologies.map((tech, i) => (
              <li key={i}>
                <a href={tech.link} target="_blank" rel="noopener noreferrer">
                  <img src={tech.icon} alt={tech.name} width="20" height="20" /> {tech.name}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="buttons">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>
            {project.documentation && (
              <a href={project.documentation} target="_blank" rel="noopener noreferrer">Documentation</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
