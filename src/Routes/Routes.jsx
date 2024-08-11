import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../containers/App";
import Add from "../containers/add";
import Summery from "../containers/summery";
import LogIn from "../components/logIn";

function OuterRouter() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/home" element={<App />} />
      <Route path="/add" element={<Add />} />
      <Route path="/summery" element={<Summery />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default OuterRouter;
