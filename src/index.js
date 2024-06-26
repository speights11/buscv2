import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
// import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// reportWebVitals(console.log);
