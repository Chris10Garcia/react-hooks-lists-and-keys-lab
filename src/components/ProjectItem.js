import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techListElements = technologies.map(element => {
    return <span key = {element}>{element}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techListElements}
      </div>
    </div>
  );
}

export default ProjectItem;
