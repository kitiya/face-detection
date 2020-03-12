import React from "react";

import "./rank.styles.scss";

const Rank = ({ name, entries }) => {
  return (
    <div className="rank">
      {name ? (
        <>
          <div className="rank-result">{`${name}, your current entry count is ...`}</div>
          <div className="rank-result">{entries}</div>
        </>
      ) : null}
    </div>
  );
};

export default Rank;
