import React from "react";

import "./face-recognition.styles.scss";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="face-recognition">
      <img className="image" alt="face" src={imageUrl} />
    </div>
  );
};

export default FaceRecognition;
