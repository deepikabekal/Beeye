// NomenclatureData has the data related to each section
//respective to the tabs in the button bar section of Journaux
//IndivSection component, which creates each section is imported
//Using map function on the NomenclatureData array, IndivSection component is rendered
//Each item of the array matched with the tabName props to render the respective section
import React from "react";
import NomenclatureData from "./NomenclatureData";
import IndivSection from "./IndivSection";

function JournauxTabSections(props) {
  return (
    <>
      {NomenclatureData.map((item) => (
        <div key={item.id}>
          {props.tabName === item.name && (
            <IndivSection tabName={props.tabName} item={item} />
          )}
        </div>
      ))}
    </>
  );
}

export default JournauxTabSections;
