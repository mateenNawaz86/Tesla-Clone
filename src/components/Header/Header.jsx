import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.container}>
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <div className={classes.menu}>
          <p>
            <Link to="/">Model S</Link>
          </p>
          <p>
            <Link to="/">Model 3</Link>
          </p>
          <p>
            <Link to="/">Model X</Link>
          </p>
          <p>
            <Link to="/">Model Y</Link>
          </p>
          <p>
            <Link to="/">Solar Roof</Link>
          </p>
          <p>
            <Link to="/">Solar Panels</Link>
          </p>
        </div>

        <div className={classes.rightMenu}>
          <p>
            <Link to="/">Shop</Link>
          </p>
          <p>
            <Link to="/">Account</Link>
          </p>
          <p>
            <Link to="/">Menu</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
