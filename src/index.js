import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import Amplify from "@aws-amplify";
import config from "./aws-exports";
import "@aws-amplify/ui-rect/styles.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

Amplify.config(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AmplifyProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
