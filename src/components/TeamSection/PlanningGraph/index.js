// This component creates the whole Planning Graph section
// by rendering Graph and TimeSheet elements which are imported

import React from "react";
import Graph from "./Graph";
import TimeSheet from "./TimeSheet";
import "./GraphStyles.css";

function PlanningGraph() {
  return (
    <div className="section-div">
      <Graph />
      <TimeSheet />
    </div>
  );
}

export default PlanningGraph;
