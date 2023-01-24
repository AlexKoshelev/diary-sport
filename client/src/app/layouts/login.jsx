import React from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/svg/logo.svg";
const Login = () => {
  return (
    <>
      {" "}
      <div className="form">
        <div className="form__wrapper">
          <div className="form__logo">
            <Logo />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Login;
