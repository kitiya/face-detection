import React from "react";
import Logo from "../logo/logo.component";

import "./navigation.styles.scss";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="navigation">
      <Logo />
      <p className="sign-out" onClick={onRouteChange}>
        Sign out
      </p>
    </nav>
  );
};

export default Navigation;
