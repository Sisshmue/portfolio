import React from "react";

function ExpertiseCard(props) {
  return (
    <div className="e-card">
      <div className="e-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="e-content">
        <h2 style={{ fontSize: "17px" }}>{props.heading}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
}

export default ExpertiseCard;
