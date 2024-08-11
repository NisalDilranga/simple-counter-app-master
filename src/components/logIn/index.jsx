import React, { useEffect, useState } from "react";

import "./signIn.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

function LogIn() {
  const navigate = useNavigate();
  const { user, loginHandler } = useStateContext();

  const userLoginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginData = {
      name: formData.get("userName"),
      password: formData.get("password")
    };
    loginHandler(loginData);
  }

  useEffect(()=>{
    if(user) return navigate("/home")
  },[user])

  return (
    <div className="sign-in">
      <h1>LOG IN</h1>
      <div className="sign-in-btn-wrapper">
        <form className="email-pass" onSubmit={userLoginHandler}>
          <input
            type="userName"
            name="userName"
            placeholder="userName"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <input type="submit" value="LOG IN" />
        </form>
      </div>
      <div className="hr-tag"></div>
    </div>
  );
}

export default LogIn;
