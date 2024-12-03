import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextData from "./components/contextCom/page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextData>
      <App />
    </ContextData>
  </React.StrictMode>
);
