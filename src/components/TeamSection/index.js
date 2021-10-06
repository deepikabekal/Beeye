// In this component the Equipe section and the ResourcePlanning sections are integrated
//useState hook is used to manage the state for onClick event and re-render appropriate elements
//When the user clicks on the employee list, the id of the employee list
//gets stored in the clickedName variable by the setClickedName function
//this is then passed to the ResourcePlanning section where the appropriate
//component will rendered

import { React, useState } from "react";
import ResourcePlanning from "./ResourcePlanning";
import Equipe from "./Equipe";

function TeamSection() {
  const [clickedName, setClickedName] = useState("");

  function renderGraph(event) {
    setClickedName(event.target.id);
  }
  return (
    <>
      <Equipe />
      <ResourcePlanning onClick={renderGraph} clickedName={clickedName} />
    </>
  );
}

export default TeamSection;
