import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { Amplify } from "aws-amplify";
// import config from "./amplifyconfiguration.json";

// Amplify.configure(config);

// Amplify.configure({
//   API: {
//     GraphQL: {
//       endpoint:
//         "https://srfibq73sfhbxhkms3wu3wqntq.appsync-api.us-east-1.amazonaws.com/graphql",
//       defaultAuthMode: "apiKey",
//       apiKey: "da2-jfjspilwqfdktmt77rpzlgi6cu",
//       region: "us-east-1",
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals(console.log);
