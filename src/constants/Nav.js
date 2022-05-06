import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="container nav">
        <NavLink to="/" className="nav__logo">
          Holidaze
        </NavLink>
        <div className="nav__links">
          <NavLink to="/accommodation" className="nav__link is-active">
            Accommodation
          </NavLink>
          <NavLink to="/activities" className="nav__link  is-active">
            Activities
          </NavLink>
          <NavLink to="/contact" className="nav__link is-active">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
