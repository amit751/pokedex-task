import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App.js";
import reportWebVitals from "./reportWebVitals";
//import {App ,reportWebVitals , ReactDOM , React} from ""
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
