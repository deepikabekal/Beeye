//Here the different components of the Journaux section is imported
//Then they are rendered appropriately with the Journaux header
//onClick event is passed as props to the JournauxTabs component
//useState hook is used to manage the state ( which tab is clicked )
//The clicked tab's name is passed as tabName to the respective components

import { React, useState } from "react";
import Button from "../Button";
import JournauxTabs from "./JournauxTabs";
import JournauxTabSections from "./JournauxTabSections";
import "./JournauxStyles.css";
import { faSync, faPen } from "@fortawesome/free-solid-svg-icons";

function Journaux() {
  const [clickedBtn, setClickedBtn] = useState("Équipe");

  function renderPage(event) {
    setClickedBtn(event.target.id);
    //console.log(event.target.id);
  }

  return (
    <div className="journaux-container">
      {/* Journaux header */}
      <div className="journaux-header div-border pad-left-15">
        <Button btnClass="icon-btn" icon={faSync} iconClass="sync-icon-style" />
        <h2 className="section-heading">Tenue des journaux</h2>
        <Button btnClass="icon-btn" icon={faPen} iconClass="pen-icon-style" />
      </div>
      {/* Journaux header end */}
      <JournauxTabs onClick={renderPage} tabName={clickedBtn} />
      <JournauxTabSections tabName={clickedBtn} />
    </div>
  );
}

export default Journaux;
