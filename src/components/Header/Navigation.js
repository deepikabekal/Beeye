// This component creates the header navigation links.
// navLinksInfo variable is an array of objects that store the data for each link
// The links are created using map function on the navLinksInfo array.
//This component is rendered in index.js of the Header folder

import React from "react";

function Navigation() {
  let navLinksInfo = [
    { id: 1, navName: "Clients", navURL: "#clients" },
    { id: 2, navName: "Missions", navURL: "#missions" },
    { id: 3, navName: "Tâches", navURL: "#tâches" },
    { id: 4, navName: "Équipe", navURL: "#equipe" },
    { id: 5, navName: "Temps", navURL: "#temps" },
    { id: 6, navName: "Analyse", navURL: "#analyse" }
  ];

  return (
    <nav>
      <ul className="header-list">
        {navLinksInfo.map((item) => (
          <li key={item.id.toString()} className="li-style">
            <a className="nav-link" href={item.navURL}>
              {item.navName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
