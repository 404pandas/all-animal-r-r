import React from "react";
import ReactDOM from "react-dom";

// Stylesheets
import "../src/assets/css/normalize.css";
import "../src/assets/css/style.css";

import App from "./App";

// todo- build out service worker and uncomment
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// todo- build out service woroker and uncomment
// serviceWorker.register();
