import React from "react";

function SkillCard(props) {
  return <img className="skll-card-img" src={props.img} alt={props.name} />;
}

export default SkillCard;
