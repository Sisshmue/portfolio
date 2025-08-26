import React, { useState } from "react";
import Navbar from "./info-companents/Navbar";
import About from "./info-companents/About";
import Portfolio from "./info-companents/Portfolio";
import Resume from "./info-companents/Resume";

function Info() {
  const [activeInfo, selectInfo] = useState("About");
  return (
    <div className="info-card">
      <div className="nav-bar">
        <Navbar onSelect={selectInfo} />
      </div>
      <h2 className="info-title">
        {activeInfo == "About" ? "About Me" : activeInfo}
      </h2>
      <div className="content">
        {activeInfo === "About" ? (
          <About />
        ) : activeInfo === "Portfolio" ? (
          <Portfolio />
        ) : (
          <Resume />
        )}
      </div>
    </div>
  );
}

export default Info;
