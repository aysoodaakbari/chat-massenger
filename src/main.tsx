import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./App.css";
import { MainProvider } from "./provider/MainProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
