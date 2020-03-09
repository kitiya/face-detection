import React from "react";

import "./face-recognition.styles.scss";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="face-recognition">
      <div className="image-wrapper">
        <img id="input-image" className="image" alt="face" src={imageUrl} />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
