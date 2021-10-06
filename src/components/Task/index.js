// This component renders the Task component

import { React, useState, useEffect } from "react";
import "./TaskStyles.css";
import TaskHeader from "./TaskHeader";
import TaskCard from "./TaskCard";

function Task(props) {
  let [count, setCount] = useState(0); // for + click
  const [isChecked, setIsChecked] = useState(false); //for select all checkbox click

  // This function will be called when the + button is clicked
  // for every click, count will be incremented by 1 and the state change will be recorded

  function addCard() {
    setCount(count + 1);
  }

  // This function is called when the onChange event is triggered (select all checkbox is checked)
  //if the select all check box is checked (true) then state is changed
  // selectAll function is called else the state is changed and deSelectAll function is called
  function checkboxClick(event) {
    if (event.target.checked) {
      setIsChecked(true);
      selectAll();
    } else {
      setIsChecked(false);
      deSelectAll();
    }
  }

  // This function will be called when the select all checkbox is checked
  //Using for loop all the other checkboxes in the Task section will be checked
  //The count variable has the number of task
  function selectAll() {
    const box = document.getElementsByClassName("indiv-check-box");
    for (var i = 0; i < count; i++) {
      box[i].checked = true;
    }
  }

  // this function is called when the select all checkbox is unchecked
  //Using for loop all the other checkboxes in the Task section will be unchecked
  //The count variable has the number of task
  function deSelectAll() {
    const box = document.getElementsByClassName("indiv-check-box");
    for (var i = 0; i < count; i++) {
      box[i].checked = false;
    }
  }

  return (
    <div className="task-container">
      <TaskHeader onClick={addCard} name={props.name} />
      <div className="select-all-container ">
        <input
          id="select-all"
          type="checkbox"
          onChange={checkboxClick}
          className="check-box"
        />
        <label htmlFor="select-all">Sélectionner tout</label>
      </div>
      {/* // count is changed to Array.
  //Using map function on count, TaskCard component will be render to the Task section */}
      <div className="all-tasks-container">
        {[...Array(count)].map((_, index) => (
          <TaskCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Task;
