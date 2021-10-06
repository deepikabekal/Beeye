//In this component button/tabs for the button bar in the Journaux section is created.
//.map function is used on NamenclatureData array
//(which contains all the data for the tabs) to render the tabs.
//Button component is imported and the necessary data is passed in to it to create the buton/tabs
//Using ternary operator the classNames are passed conditionally
//If the tabName (clicked) is equal to the array item name
//then the click-tab-styles class is added which has styles for the button when clicked

import React from "react";
import Button from "../Button";
import NomenclatureData from "./NomenclatureData";

function JournauxTabs(props) {
  return (
    <div className="nomenclature-bar div-border">
      {NomenclatureData.map((item) => (
        <Button
          key={item.id}
          btnClass={
            props.tabName === item.name
              ? "nomenclature-btn btn click-tab-styles"
              : "nomenclature-btn btn"
          }
          icon={item.icon}
          iconClass="nomenclature-icon"
          name={item.name}
          id={item.name}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}

export default JournauxTabs;
