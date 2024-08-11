import React from "react";
import SideBar from "../sideBar";
import LogIn from "../../components/logIn";

function LayOut({ children }) {
  return (
    <>
    <main className="main">
      <SideBar />
      <div className="content">{children}</div>
    </main>
    </>
  );
}

export default LayOut;
