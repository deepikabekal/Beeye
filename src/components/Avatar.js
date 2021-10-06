// This component creates the avatar for employees image
//and is then rendered in multiple sections

import React from "react";

function Avatar(props) {
  return (
    <img
      className={props.className}
      src={props.imageURL}
      alt={props.altValue}
    />
  );
}

export default Avatar;
