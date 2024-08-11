import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

function SideBar() {
  const { setUser } = useStateContext();
  const { pathname } = useLocation();
  const logout = () => {setUser(null)};
  return (
    <div className="sideBar">
      <h4 className="logo">Record System</h4>

      <div className="sideBarLinks">
        <NavLink to={"/home"} className="navLink">
          <i className="ri-home-line"></i>
          Home
        </NavLink>
        <NavLink to={"/add"} className="navLink">
          <i className="ri-user-add-line"></i>
          ADD
        </NavLink>
        <NavLink to={"/summery"} className="navLink">
          <i className="ri-bar-chart-line"></i>
          SUMMERY
        </NavLink>
        <NavLink
          to={"/login"}
          className={pathname == "/login" ? "navLink active" : "navLink"}
          onClick={() => {
            logout()
          }}
        >
          <i className="ri-logout-box-r-line"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
