import React from "react";
import Tilt from "react-tilt";

import "./logo.styles.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt
        className="Tilt"
        options={{ max: 50 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src="/favicon1.ico" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
