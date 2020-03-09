import React from "react";
import "./image-link-form.styles.scss";

const ImageLinkForm = () => {
  return (
    <div className="image-link-form">
      <h2 className="title">
        This Magic Brain will detect faces in your picture
      </h2>
      <p className="subtitle">
        Paste an image url in the textbox below to give it a try...
      </p>
      <div className="form-group">
        <input className="text-input" type="text" placeholder="image url" />
        <button className="btn">Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
