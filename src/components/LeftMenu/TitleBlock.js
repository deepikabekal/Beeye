// In this component the title block of the left menu section (top part) is created
// This component is rendered in the index.js file of the LeftMenu folder

import React from "react";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TitleBlock() {
  return (
    <div className="title-block-container div-border">
      <div className="title-container div-border pad-left-15">
        <div className="title-icon-container ">
          <h2 className="title-block-heading">Titre</h2>
          <FontAwesomeIcon icon={faStar} className="star-icon" />
        </div>
        <span className="client-name">Client Name</span>
      </div>
      {/* debut and fin section */}
      <div className="menu-link-container ">
        <div className="debut-container">
          <span className="link-span">DÉBUT</span>
          <span className="title-date-span">11 / 11 / 2020</span>
        </div>
        <div className="arrow-icon-container">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </div>
        <div className="fin-container">
          <span className="link-span">FIN</span>
          <span className="title-date-span">11 / 11 / 2020</span>
        </div>
      </div>
    </div>
  );
}

export default TitleBlock;
