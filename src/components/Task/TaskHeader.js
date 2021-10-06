// this component creates the header for the Task section
// the onClick event is passed as props  from the index.js
//where this component is rendered.
//onClick event is for adding TaskCards to the section

import React from "react";
import { faFileImport, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskHeader({ onClick }) {
  return (
    <div className="task-header-container pad-left-15">
      <h2 className="task-heading">Tâches</h2>
      <div className="task-header-icons">
        <FontAwesomeIcon icon={faFileImport} className="task-header-icon" />
        <FontAwesomeIcon
          onClick={onClick}
          icon={faPlus}
          className="task-header-icon"
        />
      </div>
    </div>
  );
}

export default TaskHeader;
