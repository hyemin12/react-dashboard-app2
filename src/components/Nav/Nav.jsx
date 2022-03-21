import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";
import User from "./User";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const navs = [
    { page: "Home", path: "/" },
    { page: "Todo", path: "/todo" },
    { page: "Works", path: "/works" },
    { page: "Setting", path: "/setting" },
  ];
  return (
    <div className="nav">
      <User />
      <ul className="nav-wrapper">
        {navs.map((nav) => {
          return (
            <li key={nav.path}>
              <NavLink to={nav.path} className={isActive ? "active" : null}>
                {nav.page}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
