// This is a component that contains the message
//That lets the user know that section or page is under development
//This component is added in 2 different sections
//hence the ternary operator is used to render appropriate elements
//depending on whether the element is added in leftmenu or not
//calledFrom is passed as props where the component element is added with a string value

import React from "react";
import "./TempPageStyle.css";

function TempPage(props) {
  return (
    <>
      {props.calledFrom === "leftmenu" ? (
        <div>
          <div className="temp-page-header pad-left-15">
            <h2 className="temp-page-heading">{props.name}</h2>
          </div>
          <div>
            <p className="user-msg pad-left-15">Page under development </p>
          </div>
        </div>
      ) : (
        <div>
          <p className="user-msg pad-left-15">Page under development </p>
        </div>
      )}
    </>
  );
}

export default TempPage;
