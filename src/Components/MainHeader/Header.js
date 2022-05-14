import classes from "./Header.module.scss";

import { useState } from "react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/shared/logo.svg";

import icon from "../../assets/sprite.svg";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenuHandler = () => {
    setMenuVisible(true);
  };

  const closeMenuHandler = () => {
    setMenuVisible(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.header__line}></div>
      <svg
        className={`${classes.menuLogo} ${
          menuVisible ? classes.hide : classes.visible
        }`}
        onClick={showMenuHandler}
      >
        <use xlinkHref={`${icon}#icon-menu`}></use>
      </svg>
      <nav
        className={`${classes.header__nav}  ${
          menuVisible ? classes.visible : classes.hide
        }`}
      >
        <svg className={classes.crossLogo} onClick={closeMenuHandler}>
          <use xlinkHref={`${icon}#icon-cross`}></use>
        </svg>
        <ul>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/Home"
            >
              00 <span>Home</span>
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/Destination"
            >
              01 <span>Destination</span>
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/Crew"
            >
              02 <span>Crew</span>
            </NavLink>
          </li>
          <li onClick={closeMenuHandler}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/Technology"
            >
              03 <span>Technology</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
