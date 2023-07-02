import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ListsContextProvider } from "./context/ListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListsContextProvider>
      <App />
    </ListsContextProvider>
  </React.StrictMode>
);
