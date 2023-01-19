import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">t_t</div>
      <div>
        <ul className="navbar__list">
          <li className="navbar__listItem">
            <NavLink to="/" className="NavLink">
              home
            </NavLink>
          </li>
          <li className="navbar__listItem">
            <NavLink to="/leaderboard" className="NavLink">
              leaderboard
            </NavLink>
          </li>
          <li className="navbar__listItem">
            <NavLink to="/login" className="NavLink">
              <button to="/login" className="navbar__button">
                login
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
