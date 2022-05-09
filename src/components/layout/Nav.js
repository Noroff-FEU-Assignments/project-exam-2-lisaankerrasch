import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../../images/menu.svg";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      <div className="container nav">
        <div className="nav__mobile">
          <NavLink to="/" className="nav__logo">
            Holidaze
          </NavLink>
          <img
            onClick={toggleNav}
            className="hamburger-menu"
            src={Hamburger}
            alt="Menu icon"
          ></img>
        </div>
        {(toggleMenu || screenWidth > 768) && (
          <div className="nav__links" onClick={toggleNav}>
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
        )}
      </div>
    </nav>
  );
}

export default Nav;
