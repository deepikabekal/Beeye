// In this component resource planning section is render.
//The section below Equipe section.
//The props are passed from the index.js file of the TeamSection component
//where the state is managed for onClick event
//clickedName will get the name of the employee list thats clicked
import React from "react";
import ResourceListSection from "./ResourceListSection";
import "./ResourceSection.css";

function ResourcePlanning(props) {
  return (
    <ResourceListSection
      onClick={props.onClick}
      clickedName={props.clickedName}
    />
  );
}

export default ResourcePlanning;
