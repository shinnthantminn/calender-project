import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LoadingStore from "./Store/LoadingStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadingStore>
    <App />
  </LoadingStore>
);
