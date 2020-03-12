import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input className="input-box" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
