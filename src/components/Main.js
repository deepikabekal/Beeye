// This component handles the rendering of the appropriate components
//when the left menu buttons/tabs are clicked
//usestate handles the state for onClick event
//If the elementId is Tâches then Task component is rendered
//else TemPage component is rendered that will display the message
//"Page under development" to the user
// Journaux component is also rendered here
// the main component is then rendered in index.js in the public folder where there is root

import { React, useState } from "react";
import "./Main.css";
import Journaux from "./Journaux";
import LeftMenu from "./LeftMenu";
import Task from "./Task";
import TempPage from "./TempPage";

function Main() {
  const [elementId, setElementId] = useState("Tâches");
  // const [isClicked, setClicked] = useState(true);

  function renderSection(event) {
    setElementId(event.target.id);
  }

  return (
    <div className="container">
      <LeftMenu onClick={renderSection} clickedItem={elementId} />
      {elementId === "Tâches" ? (
        <Task name={elementId} />
      ) : (
        <TempPage name={elementId} calledFrom="leftmenu" />
      )}
      <Journaux />
    </div>
  );
}

export default Main;
