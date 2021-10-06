// This component creates all the header icons which are imported from fontawesome
// The imported icons then stored in a variable navIcons
// Using map function on navIcons the header element icons are created
//This component is then rendered in index,js file of the Header folder.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faQuestionCircle,
  faCog,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
const navIcons = [faSearch, faBell, faQuestionCircle, faCog, faPlusSquare];
function Icons() {
  return (
    <div className="inline-fx align-center">
      {navIcons.map(function (item, index) {
        return (
          <div className="icon-div" key={index.toString()}>
            <FontAwesomeIcon icon={item} className={`icon-${index}`} />
          </div>
        );
      })}
    </div>
  );
}

export default Icons;
