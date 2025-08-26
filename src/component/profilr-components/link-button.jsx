import React from "react";

function LinkButton(props) {
  return (
    <div className="link-btn">
      <a href={props.link}>
        <img src={props.img} alt={props.name} />
      </a>
    </div>
  );
}

export default LinkButton;
