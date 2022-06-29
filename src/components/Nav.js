import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <a className="nav_logo" to="/">
        <img
          src="https://drive.google.com/uc?export=download&id=1-ba4lun-lRA2riq1yS_qzoNFDNiJvoXP"
          alt="Logo"
        />
      </a>
      <ul>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
        <li>
          <a>Category 3</a>
        </li>
      </ul>
      <button className="nav-logout">
        <a to="/">
          <img
            src="https://drive.google.com/uc?export=download&id=124BksTvAV_X52dmUA64dYpGct4lgaPKd"
            alt=""
          />
          <span className="nav-logout-text">Log Out</span>
        </a>
      </button>
    </nav>
  );
}

export default Nav;
