import React from "react";

import "./rank.styles.scss";

const Rank = () => {
  return (
    <div className="rank">
      <div className="rank-result">{`Andrei, your current rank is ...`}</div>
      <div className="rank-result">{`#5`}</div>
    </div>
  );
};

export default Rank;
