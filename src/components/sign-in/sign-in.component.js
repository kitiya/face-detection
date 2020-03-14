import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState("yolanda@gmail.com");
  const [password, setPassword] = useState("yumyum");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    fetch("http://localhost:3010/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  return (
    <div className="sign-in">
      <section className="form-input-section" id="sign-in">
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
          onClick={onSubmitSignIn}
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
