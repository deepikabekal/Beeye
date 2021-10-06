// this component creates each task card
//which is rendered when the + button is clicked

import React from "react";

function TaskCard() {
  return (
    <div className="task-card-container">
      <div className="checkbox-container">
        <input className="check-box indiv-check-box" type="checkbox" />
      </div>
      <div className="task-card">
        <button type="button" className="card-button ">
          15 NOV
        </button>
        <div className="task-card-content">
          <p className="content-1">Tenue des journaux</p>
          <p className="content-2">Gabrielle Chevalier</p>
          <p className="content-3">Documents en attente</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
