// this component created the button for various sections
// the data is passed as props from the section where the component is rendered

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
  return (
    <button
      type="button"
      className={props.btnClass}
      onClick={props.onClick}
      id={props.id}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={props.iconClass}
        // onClick={props.onClick}
      />
      {props.name}
    </button>
  );
}

export default Button;
