// This component creates the resource list section in the Equipe section
//employees is an array of employee information objects
//Using map function on employees each list is created
//clickedName prop holds the name of the employee that has been clicked
//if clickedName is equal to employee name of the array item
//then PlanningGraph component is rendered below the clicked resouce list

import React from "react";
import ResourceCard from "./ResourceCard";
import employees from "../../employees";
import PlanningGraph from "../PlanningGraph";

function ResourceListSection(props) {
  console.log(props.clickedName);
  return (
    <div className="resource-list-container">
      {employees.map((item) => (
        <div key={item.id}>
          <ResourceCard
            imageURL={item.imageURL}
            employeeName={item.employeeName}
            designation={item.designation}
            onClick={props.onClick}
            id={item.employeeName}
            className="resource-img-div margin-left-20"
            empClass="resource-name"
            desigClass="resource-desig"
          />

          {props.clickedName === item.employeeName && <PlanningGraph />}
        </div>
      ))}
    </div>
  );
}

export default ResourceListSection;
