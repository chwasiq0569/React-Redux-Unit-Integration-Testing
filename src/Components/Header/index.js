import React from "react";
import "./styles.scss";
const Header = () => {
  return (
    // className="headerComponent"
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <h1 data-test="logoText">Your LOGO</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
