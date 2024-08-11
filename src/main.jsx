import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import { StateContext } from "./context/StateContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import LayOut from "./containers/layout/index.jsx";
import "./styles/global.less";
import "./styles/add.less";
import "./styles/home.less";
import "./styles/summery.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <Router>
        <LayOut>
          <App />
        </LayOut>
      </Router>
    </StateContext>
  </React.StrictMode>
);
