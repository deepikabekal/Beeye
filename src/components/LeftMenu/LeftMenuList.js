//In this component the tabs on the left menu is created
//using map function on menuData array which contains all necessary data
//clickedItem contains the name of the tab that is clicked,
//which is passed as props from index.js file (where this element is called)
//If the name in the clickedItem is same as the item in the array
//then click-styles classname is added.
//click-styles has the styles for the clicked tab
import React from "react";
import menuData from "./LeftMenuData";

function LeftMenuList(props) {
  return (
    <>
      {menuData.map((item, index) => (
        <li
          key={index}
          className={`menu-list-container div-border pad-left-15 ${
            props.clickedItem === item ? "click-styles" : ""
          }`}
          onClick={props.onClick}
          id={item}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default LeftMenuList;
