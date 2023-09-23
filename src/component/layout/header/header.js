import React from "react";

import "./header.css";
import Logo from "./logo.png";

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo}></img>
      <span className="IGHT">IGHT</span>
    </div>
  );
};

export default Header;