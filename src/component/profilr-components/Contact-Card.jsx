import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-row">
      <div className="contact-img">
        <img src={props.img} alt="contact-name" />
      </div>
      <div className="contact-column">
        <p className="name">{props.name}</p>
        <p className="value">{props.value}</p>
      </div>
    </div>
  );
}

export default ContactCard;
