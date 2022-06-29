import React from "react";
import "./SecondaryNav.css";

function SecondaryNav() {
  return (
    <nav className="secondary-nav">
      <ul>
        <li>
          <a>Live</a>
        </li>
        <li>
          <a className="active">Pre-match</a>
        </li>
      </ul>
    </nav>
  );
}

export default SecondaryNav;
