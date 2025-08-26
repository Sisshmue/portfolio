import React from "react";
import ExpertiseCard from "./about-components/Expertise-Card";
import PhoneIcon from "../../assets/icon/smartphone.png";
import Internet from "../../assets/icon/internet.png";
import Sketch from "../../assets/icon/sketch.png";
import Server from "../../assets/icon/server.png";
import SkillCard from "./about-components/Skills-Card";
import Dart from "../../assets/svg/Dart.svg";
import Flutter from "../../assets/svg/Flutter.svg";
import Firebase from "../../assets/svg/Firebase.svg";
import Figma from "../../assets/svg/Figma.svg";
import Node from "../../assets/svg/nodejs.svg";
import Postman from "../../assets/svg/Postman.svg";

function About() {
  return (
    <div className="info-section">
      <p className="info-text">
        A passionate Software Developer with strong expertise in cross-platform
        apps, REST APIs, UI/UX, widgets, and state management solutions. Proven
        track record in delivering cutting-edge solutions, including API
        integration, third-party libraries, and performance optimization. Adept
        at debugging to ensure high-quality, responsive apps and An agile
        collaborator committed to staying current with industry trends.
        <div style={{ height: "10px" }} />
        If you're seeking a skilled Flutter developer to breathe life into your
        project and exceed your expectations, I am here to collaborate and
        create magic together. Reach out, and let's transform your vision into a
        reality!
      </p>
      <div style={{ height: "30px" }} />
      <h2>What I'm doing?</h2>
      <div style={{ height: "20px" }} />
      <div className="expertises-container">
        <ExpertiseCard
          img={PhoneIcon}
          name="expertises"
          heading="Mobile"
          para="Professional development of applications for Android and ios."
        />
        <ExpertiseCard
          img={Internet}
          name="expertises"
          heading=" Web development"
          para="High-quality development of sites at the professional level."
        />
        <ExpertiseCard
          img={Sketch}
          name="expertises"
          heading="UI/UX Design"
          para="The most modern and high-quality design made at a professional level."
        />
        <ExpertiseCard
          img={Server}
          name="expertises"
          heading="Backend Development"
          para="High-performance backend services for scalability and seamless user experience."
        />
      </div>
      <h2>Skills</h2>
      <div style={{ height: "20px" }} />
      <div className="skill-cards-container">
        <SkillCard img={Dart} name="dart" />
        <SkillCard img={Flutter} name="Flutter" />
        <div className="node">
          <SkillCard img={Node} name="Node" />
        </div>
        <SkillCard img={Firebase} name="Firebase" />
        <SkillCard img={Figma} name="Figma" />
        <SkillCard img={Postman} name="Postman" />
      </div>
    </div>
  );
}

export default About;
