import React, { useState } from "react";

function Navbar({ onSelect }) {
  const buttons = ["About", "Portfolio", "Resume"];
  const [selctedBtn, onSelectBtn] = useState("About");
  return (
    <div className="nav-flex">
      {buttons.map((label) => (
        <button
          className={label === selctedBtn ? "selected" : ""}
          onClick={() => {
            onSelect(label);
            onSelectBtn(label);
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
