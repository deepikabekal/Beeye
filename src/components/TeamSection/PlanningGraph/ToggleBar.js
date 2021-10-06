// This component creates the toggle bar section at the bottom of the budget section
//toggleBtnList contains the data for the button
//Using map function on toggleBtnList each button is created

import React from "react";
const toggleBtnList = [
  { id: 1, name: "Manuel", backGroundColor: "rgba(214, 219, 227, 1)" },
  { id: 2, name: "|->", backGroundColor: "rgba(255, 255, 255, 1)" },
  { id: 3, name: "<->", backGroundColor: "rgba(255, 255, 255, 1)" },
  { id: 4, name: "<-|", backGroundColor: "rgba(255, 255, 255, 1)" }
];
function ToggleBar() {
  return (
    <div className="togglebar-div" style={{ backGroundColor: "red" }}>
      {toggleBtnList.map((item) => (
        <button
          type="button"
          key={item.id}
          style={{ backgroundColor: item.backGroundColor }}
          className="toggle-btn"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default ToggleBar;
