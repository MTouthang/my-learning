import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todoApi } from "./api.jsx";

createRoot(document.getElementById("root")).render(
  <ApiProvider api={todoApi}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApiProvider>
);
