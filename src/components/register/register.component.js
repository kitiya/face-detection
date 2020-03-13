import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./register.styles.scss";

const Register = ({ onRouteChange, loadUser }) => {
  const [name, setName] = useState("John");
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("cookies");

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    fetch("http://localhost:3010/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  return (
    <div className="register">
      <section className="form-input-section" id="sign-up">
        <h2 className="title">Register</h2>
        <FormInput
          required
          name="name"
          type="text"
          value={name}
          handleChange={handleNameChange}
          label="Name"
        />
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
      <div className="register-btn-wrapper">
        <input
          className="btn"
          type="submit"
          value="Register"
          onClick={onSubmitRegister}
        />
      </div>
      <div className="register-wrapper">
        <p onClick={() => onRouteChange("signin")} className="signin-link">
          Sign in
        </p>
      </div>
    </div>
  );
};

export default Register;
