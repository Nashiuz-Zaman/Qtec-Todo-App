// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// primary component
import App from "./components/App";

// redux
import { store } from "./app/store";
import { Provider } from "react-redux";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
