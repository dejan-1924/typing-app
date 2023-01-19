import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__container">
        <h1>log in</h1>
        <input
          placeholder="username"
          className="login__input"
          type="text"
        ></input>
        <input
          placeholder="password"
          className="login__input"
          type="password"
        ></input>
        <button className="login__button">Log in</button>
        <span
          className="login__createAccount"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create account?
        </span>
      </div>
    </div>
  );
};

export default Login;
