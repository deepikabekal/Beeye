// In this component individual sections for each tab of the button bar
//in the right panel (Journaux) is created
//Depending on the tab that is clicked their respective sections are displayed
//If tabName which is passed as props from the JournauxTabSections is equal to Équipe
//Then TeamSection component is rendered else TempPage component is rendered
//For all other tabs since there is no design "Page under development" message
//is displayed using TempPage component
//journaux string is passed as props to add appropriate style for the temppage.
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TempPage from "../TempPage";
import TeamSection from "../TeamSection";
function IndivSection({ item, tabName }) {
  // console.log(item);
  return (
    <div>
      <div className="button-bar-section pad-left-15 div-border">
        <FontAwesomeIcon icon={item.icon} className="tab-section-icon" />
        <span className="tab-section-name">{item.name}</span>
        <span className="tab-section-value">{item.displayValue}</span>
      </div>
      <div>
        {tabName === "Équipe" ? (
          <TeamSection id="Equipe" />
        ) : (
          <TempPage calledFrom="journaux" />
        )}
      </div>
    </div>
  );
}

export default IndivSection;
