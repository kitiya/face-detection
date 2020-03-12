import React from "react";
import "./image-link-form.styles.scss";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className="image-link-form">
      <section className="title-container">
        <h2 className="title">
          This Magic Brain will detect faces in your picture.
        </h2>
        <p className="subtitle">
          Paste an image url in the textbox below to give it a try...
        </p>
      </section>

      <section className="form-container">
        <div className="form-group">
          <input
            className="text-input"
            type="text"
            placeholder="Image URL"
            onChange={onInputChange}
          />
          <button className="btn" onClick={onPictureSubmit}>
            Detect
          </button>
        </div>
        <span className="example">
          https://cdn.pixabay.com/photo/2016/01/19/17/19/young-woman-1149643_960_720.jpg
        </span>
      </section>
    </div>
  );
};

export default ImageLinkForm;
