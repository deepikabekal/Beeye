// Here all the components are imported and placed such that Header section is created

import React from "react";
import Icons from "./Icons";
import Navigation from "./Navigation";
import Avatar from "../Avatar";
import "./header.css";

function Header() {
  return (
    <header className="div-border">
      <div className="inline-fx align-center">
        {/* logo is rendered */}
        <img
          src="../../assets/images/logo.png"
          alt="logo"
          className="logo-img"
        />
        <Navigation id="navigation" />
      </div>
      <div className="inline-fx">
        <Icons className="icon-style" />
        {/* The user data is passed to the Avatar component to render the user image */}
        <Avatar
          className="user-img"
          imageURL="../assets/images/employee-profile.png"
          altValue="Female Employee"
        />
      </div>
    </header>
  );
}

export default Header;
