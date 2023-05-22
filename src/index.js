import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./layouts/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const foot = ReactDOM.createRoot(document.getElementById("foot"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
foot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
