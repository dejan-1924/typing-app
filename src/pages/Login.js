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
          className="loginInput"
          type="text"
        ></input>
        <input
          placeholder="password"
          className="loginInput"
          type="password"
        ></input>
        <button className="loginButton">Log in</button>
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
