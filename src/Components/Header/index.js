import React from "react";
import "./styles.scss";
const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <h1>Your LOGO</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
