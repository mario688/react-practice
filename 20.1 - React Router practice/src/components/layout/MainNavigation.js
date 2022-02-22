import React from "react";
import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={style.header}>
      <div className={style.logo}>Gerat Quotes</div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={style.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={style.active}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
