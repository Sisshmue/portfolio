import React, { useState } from "react";

function PortfolioCard(props) {
  const [isExpanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
      className={`portfolio-item ${isExpanded ? "expanded" : ""}`}
      onClick={handleExpanded}
    >
      <img className="portfolio-img" src={props.img} alt="project" />
      <div className="portfolio-content">
        <h2>{props.title}</h2>
        <p>{props.type}</p>
        {isExpanded && (
          <div className="expanded-details">
            <p>{props.description}</p>
            <div className="technologies">
              {props.technologies &&
                props.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
            </div>
            <div className="project-links">
              {props.demoLink && (
                <a href={props.demoLink} target="_blank">
                  Live Demo
                </a>
              )}
              <a href={props.githubLink} target="_blank">
                GitHub
              </a>
              {props.figma && (
                <a href={props.figma} target="_blank">
                  Figma
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioCard;
