//This component creates the column for the graph
// It is rendered in the Graph component.

import React from "react";
import Button from "../../Button";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Column(props) {
  const fontColor = "#F27633";
  return (
    <div>
      <div className="col-bar">
        <div
          className="bar"
          style={{
            background: `linear-gradient(to top, ${props.barFillColor} 0, ${props.barFillColor} ${props.barFillPercent}%, #F1F0FA ${props.barFillPercent}%, #F1F0FA  100%)`
          }}
        ></div>

        {/* plus minu button of the bar is created by using Button component */}
        <div className="graph-buttons">
          <Button
            btnClass="inc-dec-btn"
            icon={faPlus}
            iconClass="graph-btn-icon"
          />
          <Button
            btnClass="inc-dec-btn"
            icon={faMinus}
            iconClass="graph-btn-icon"
          />
        </div>
      </div>
      {/* creates the date section (date and month)  */}
      <div
        className="date-div"
        style={{ color: props.date === 10 && fontColor }}
      >
        <span>{props.date}</span>
        <span>{props.month}</span>
      </div>
    </div>
  );
}

export default Column;
