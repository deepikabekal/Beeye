// This component creates the Graph
//Using map function on the dates array each column element is created
// Column element is imported and all the necessay data is passed as props

import React from "react";
import Column from "./Column";
import dates from "./Dates";

function Graph() {
  return (
    <div className="graph-div">
      {dates.map((item) => (
        <Column
          key={item.date}
          barFillColor={item.color}
          barFillPercent={item.fill}
          date={item.date}
          month={item.month}
        />
      ))}
    </div>
  );
}

export default Graph;
