import React from "react";
import ProfileGif from "../assets/gif/profile-3.GIF";
import ContactCard from "./profilr-components/Contact-Card";
import EmailIcon from "../assets/icon/email.png";
import PhoneIcon from "../assets/icon/phone.png";
import LocationIcon from "../assets/icon/location.png";
import LinkButton from "./profilr-components/link-button";
import Linkedin from "../assets/icon/linkedin.png";
import Github from "../assets/icon/github.png";

function Profile() {
  return (
    <div className="profile-card">
      <div className="profile-detail">
        <div className="profile-img">
          <img src={ProfileGif} alt="profile" />
        </div>
        <h3>Siss Hmue Aung</h3>
        <div className="position">
          <p>Software Developer</p>
        </div>
      </div>
      <hr />
      <div className="contact">
        <ContactCard
          img={EmailIcon}
          name="Email"
          value="sisshmue404@gmail.com"
        />
        <ContactCard img={PhoneIcon} name="Phone" value="+66 658 022 587" />
        <ContactCard
          img={LocationIcon}
          name="Location"
          value="Mae Fah Luang University"
        />
      </div>
      <div className="links">
        <LinkButton
          img={Linkedin}
          value="LinkedIn"
          link="https://www.linkedin.com/in/siss-hmue-aung-313a79167/"
        />
        <LinkButton
          img={Github}
          value="Github"
          link="https://github.com/Sisshmue"
        />
      </div>
    </div>
  );
}

export default Profile;
