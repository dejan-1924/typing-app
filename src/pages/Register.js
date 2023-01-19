import React from "react";

const Register = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>register</h1>
        <input
          placeholder="username"
          className="login__input"
          type="text"
        ></input>
        <input placeholder="email" className="login__input" type="text"></input>
        <input
          placeholder="password"
          className="login__input"
          type="password"
        ></input>
        <button className="login__button">Register</button>
      </div>
    </div>
  );
};

export default Register;
