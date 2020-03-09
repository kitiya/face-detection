import React from "react";
import Logo from "../logo/logo.component";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <p className="sign-out">Sign out</p>
    </nav>
  );
};

export default Navigation;
