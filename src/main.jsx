// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// primary component
import App from "./components/App";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
