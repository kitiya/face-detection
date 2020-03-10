import React, { useState } from "react";

import "./sign-in.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input className="input-box" onChange={handleChange} {...otherProps} />
    </div>
  );
};

const SignIn = ({ onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="sign-in">
      <section className="form-input-section" id="sign-up">
        <h2 className="title">Sign in</h2>
        <FormInput
          required
          name="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          label="Email"
        />
        <FormInput
          required
          name="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          label="Password"
        />
      </section>
      <div className="sign-in-btn-wrapper">
        <input
          className="btn"
          type="submit"
          value="Sign in"
          onClick={() => onRouteChange("home")}
        />
      </div>
      <div className="register-wrapper">
        <p onClick={() => onRouteChange("register")} className="register-link">
          Register
        </p>
      </div>
    </div>
  );
};

export default SignIn;
