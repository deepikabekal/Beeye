//Here the different components of the Left Menu panel section is imported
//ResourceCard component is used to display the project owner section
//The onClick and clickediTem props are passed from Main.js file
//where the state is managed using onClick even

import React from "react";
import "./LeftMenuStyles.css";
import TitleBlock from "./TitleBlock";
import ResourceCard from "../TeamSection/ResourcePlanning/ResourceCard";
import LeftMenuList from "./LeftMenuList";
import employees from "../employees";
const employee = employees[0];

function LeftMenu(props) {
  return (
    <div>
      <TitleBlock />

      {/* project button section ouvert and ferme*/}
      <button className="project-btn open-btn" type="button">
        Ouvert
      </button>
      <button className="project-btn close-btn" type="button">
        Fermé
      </button>

      {/* Project owner section begins */}
      <ResourceCard
        imageURL={employee.imageURL}
        employeeName={employee.employeeName}
        designation={employee.designation}
        empClass="resource-name emp-card-name"
        desigClass="resource-desig emp-card-desig"
      />
      <LeftMenuList onClick={props.onClick} clickedItem={props.clickedItem} />
    </div>
  );
}

export default LeftMenu;
